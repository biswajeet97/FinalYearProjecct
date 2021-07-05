import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as io from 'socket.io-client'; 
import { ApiServiceService } from '../service/api-service.service';
import { DefService } from '../service/def.service';
import { BoardService } from '../service/board.service';
import { GmService } from '../service/gm.service';
import { MvService } from '../service/mv.service';
import { SearchService } from '../service/search.service';
interface SIDE{
  value : string,
  viewChild : string
}



@Component({
  selector: 'app-board-ui',
  templateUrl: './board-ui.component.html',
  styleUrls: ['./board-ui.component.sass']
})
export class BoardUiComponent implements OnInit {
  movPos = []
  friends = []
  newFriend = ''
  opp = ''
  AI = ""
  mySide = this.def.COLOURS.WHITE
  invitedFriend = {from : '', to: ''}
  socket = io.io('http://localhost:3000')
  friend = this.fb.group({
    username : ['',Validators.required]
  })
  selectedSide = ''
  sides: SIDE[] = [
    {value : 'w',viewChild : 'White'},
    {value : 'b',viewChild : 'Black'}
  ]

  constructor(
    private api : ApiServiceService,
    private def : DefService , 
    private board : BoardService, 
    private genMove : GmService, 
    private move : MvService,
    private fb : FormBuilder,
    private search : SearchService
    ) { }
  ngOnInit(): void {
    
    // generate all possible moves
    this.genMove.GenerateMoves()
    
    // start func
    if(localStorage.getItem('game-status')){
      this.selectedSide = localStorage.getItem('side')
      if(this.selectedSide == 'w'){
        // console.log('w')
        this.mySide = this.def.COLOURS.WHITE
        this.startGame()
      }
      else {
        // console.log('b')
        this.mySide = this.def.COLOURS.BLACK
        this.startGame()
      }
    }
    else{
      let board = document.getElementById('blackBoard')
      board.style.display = 'none'
    }
    this.socket.on('connect',()=>{
      console.log('connection established')
      this.api.getUser().subscribe((user : any)=>{
        localStorage.setItem('username',`${user.user.username}`)
        this.socket.emit('addUser',{user: user.user.username})
        this.showFriend(user.user.username)  
      })  
    })
    // opponents moves a brd_pieces
    this.socket.on('move',(data)=>{
      
      var pce = this.board.brd_pieces[this.def.FROMSQ(data.move)]
      var ele = `${pce}${this.def.FROMSQ(data.move)}`
      if(this.selectedSide == 'b'){
        
        var myTo = `${this.def.TOSQ(data.move)}b`
        
      }
      else{
        
        var myTo = `${this.def.TOSQ(data.move)}w`
      }
      document.getElementById(myTo).appendChild(document.getElementById(ele))
      var ar = document.getElementById(`${ele}`)
      ar.id = `${pce}${this.def.TOSQ(data.move)}`
      this.move.MakeMove(data.move)
      this.genMove.GenerateMoves()
    })
    // opponents challenge
    this.socket.on('challenge',(data)=>{
      if(localStorage.getItem('game-status') != '1')
      this.opp = data.from
    })
    // view invites
    this.socket.on('invite',(data)=>{
      this.invitedFriend = {from : data.from, to : data.to}
    })
    // recieve game req
    this.socket.on('accept-game',(data)=>{
      if(localStorage.getItem('game-status') != '1')
      this.selectedSide = data.side
      this.opp = data.opp
      console.log(data.opp)
      this.startGame()
    })

  }
  // show friends list
  showFriend(username){
    this.api.showFriends({username}).subscribe((data:any)=>{
      data.friends.forEach(element => {
        this.friends.push(element)
      })
    })
  }
  
  // create chess pieces 
  createChessPiece(side : string){
    var rank : number , file : number, sq : number, brd_pieces : number
    for(rank = this.def.RANKS.RANK_8; rank >= this.def.RANKS.RANK_1; rank--){
      for(file = this.def.FILES.FILE_A; file <= this.def.FILES.FILE_H; file++){
        sq = this.def.FR2SQ(file,rank)
        brd_pieces = this.board.brd_pieces[sq]
        // create div elements of all the brd_pieces in the fen pos
        if(brd_pieces != 0){
          // check for white or black brd_pieces
          var square = document.getElementById(`${sq}${side}`)
          
          var ele = document.createElement('div')
          ele.id = `${brd_pieces}${sq}`
          // ele.innerHTML = `${this.def.PceChar[brd_pieces]}`
          ele.draggable = true
          ele.ondragstart = (event : any)=>{
            this.movPos = []
            event.dataTransfer.setData('text',event.target.id)
            this.makeMove(event.srcElement.id)
          }  
          
          if(this.def.PceChar[brd_pieces] === this.def.PceChar[brd_pieces].toLowerCase()){
            // black pieces
            // ele.style.backgroundColor = '#131D47'
            ele.style.backgroundImage = `url(../../assets/images/chess_piece/${this.def.PceChar[brd_pieces]}bt.svg)`
            ele.style.color = 'white'
            ele.style.position = 'relative'
            ele.style.top = '2px'
            ele.style.left = '2px'
            ele.style.width = '45px'
            ele.style.height = '45px'
            square.appendChild(ele)
            // console.log(ele)
          }
          else{
            // white pieces
            // ele.style.backgroundColor = '#d4e2d4'
            ele.style.backgroundImage = `url(../../assets/images/chess_piece/${this.def.PceChar[brd_pieces].toLowerCase()}wt.svg)`
            ele.style.color = 'black'
            ele.style.position = 'relative'
            ele.style.top = '2px'
            ele.style.left = '2px'
            ele.style.width = '45px'
            ele.style.height = '45px'
            square.appendChild(ele)
          }
        }
      }
    }
        
  }
  // invite player
  invitePlayer(){
    this.socket.emit('invite',{from: localStorage.getItem('username'), to: this.newFriend})
    this.newFriend = ''
  }


  // create an array of moves
  makeMove(val){
    var sq = Math.ceil(val % 100)
    for(var i = this.board.brd_moveListStart[this.board.brd_ply]; i < this.board.brd_moveList.length; i++ ){
      if(this.def.FROMSQ(this.board.brd_moveList[i]) == sq){
        // console.log('hi')
        this.movPos.push(this.def.TOSQ(this.board.brd_moveList[i]))
      }
    }
    // console.log(this.movPos)
  }
  // find friend
  findFriend(){
    var exist = true
    if(this.friend.valid && this.friend.value.username != localStorage.getItem('username')){
      this.friends.forEach(element =>{
        if(this.friend.value.username == element){
            exist = false
        }
      })
      if(exist){
        this.api.findFriends({username : this.friend.value.username}).subscribe((data:any)=>{
          this.newFriend = data.username
        })
      }
    }
    
  }  
  // create a new challange
  challenge(event){
    if(localStorage.getItem('game-status') != '1'){
      this.socket.emit('challenge',{from : localStorage.getItem('username'), to : event})
      localStorage.setItem('opp',event)
    }
    else{
      alert('Already in a game')
    }
  }
  // add a new friend
  addFriend(){
    this.api.addFriends({from : this.invitedFriend.from, to : this.invitedFriend.to }).subscribe((data): any=>{
      console.log(data)
    })
    this.invitedFriend.from = '';
    this.friends = [];
    this.showFriend(localStorage.getItem('username'));
  }
  // accept the challenge
  acceptChallenge(){
    if(this.selectedSide == 'w' ){
      // console.log(this.opp)
      this.socket.emit('accept-game',{oside : 'b', opp : this.opp , me : localStorage.getItem('username')})
      localStorage.setItem('opp',this.opp)
      this.startGame()
    }
    else{
      // console.log(this.opp)
      this.socket.emit('accept-game',{oside : 'w', opp : this.opp , me : localStorage.getItem('username')})
      localStorage.setItem('opp',this.opp)
      this.startGame()
    }

  }



  // drag and drop
  // elements movement ui 
  allowDrop(event: any){
    if(this.board.brd_ply % 2 == 0 && localStorage.getItem('side') == 'w' || this.board.brd_ply % 2 == 1 && localStorage.getItem('side') == 'b'){
      var sq : number 
       
      for(var i =0; i < this.movPos.length; i++ ){
        sq = this.movPos[i]
        if(event.target.id == `${sq}${localStorage.getItem('side')}` ){
          event.preventDefault()
          
        }
      }  
    }
  }
  // made a move
  drop(event: any){
    if(localStorage.getItem("AI") == "true"){
      event.preventDefault()
      event.target.appendChild(document.getElementById(event.dataTransfer.getData("text")))
      var from = (event.srcElement.lastChild.id % 100)
      var to = event.target.id
      to = `${to[0]}${to[1]}`
      for(var i = this.board.brd_moveListStart[this.board.brd_ply]; i < this.board.brd_moveList.length; i++){
        var mvfrom = this.def.FROMSQ(this.board.brd_moveList[i])
        var mvto = this.def.TOSQ(this.board.brd_moveList[i])
        if(from == mvfrom && to == mvto){
          var pce = this.board.brd_pieces[from]
          var ele = document.getElementById(`${pce}${mvfrom}`)
          ele.id = `${pce}${mvto}`
          this.move.MakeMove(this.board.brd_moveList[i])
          // now ai will move
          this.AIMove()
          this.board.brd_ply++;
        }
      }
    }
    else{
      event.preventDefault()
      event.target.appendChild(document.getElementById(event.dataTransfer.getData("text")))
      var from = (event.srcElement.lastChild.id % 100)
      var to = event.target.id
      to = `${to[0]}${to[1]}`
      // make a move
      for(var i = this.board.brd_moveListStart[this.board.brd_ply]; i < this.board.brd_moveList.length; i++){
        var mvfrom = this.def.FROMSQ(this.board.brd_moveList[i])
        var mvto = this.def.TOSQ(this.board.brd_moveList[i])
        if(from == mvfrom && to == mvto){
          var pce = this.board.brd_pieces[from]
          var ele = document.getElementById(`${pce}${mvfrom}`)
          ele.id = `${pce}${mvto}`
          this.move.MakeMove(this.board.brd_moveList[i])
          this.socket.emit('move',{move : this.board.brd_moveList[i], user : localStorage.getItem('opp')})
          this.genMove.GenerateMoves()
        }
      }
    }
      
  }
  // game instance

  startGame(){
    // setting sides and pieces
    if( this.selectedSide == 'b' ){
      localStorage.setItem('side', 'b')
      localStorage.setItem('game-status','1')
      this.mySide = this.def.COLOURS.BLACK
      var board1 = document.getElementById('blackBoard')
      board1.style.display = "block"
      var board2 = document.getElementById('whiteBoard')
      board2.style.display = "none"
      this.createChessPiece(this.selectedSide)
    }
    else{
      localStorage.setItem('side', 'w')
      localStorage.setItem('game-status','1')
      this.mySide = this.def.COLOURS.WHITE
      var board2 = document.getElementById('blackBoard')
      board2.style.display = "none"
      this.createChessPiece(this.selectedSide)
    }
    console.log(this.board.brd_ply)
  }

  // AI
  aI(){
    this.startGame()
    localStorage.setItem("AI" , "true")
  }

  AIMove(){
    this.search.SearchPosition()
    var move = this.search.srch_best


    var pce = this.board.brd_pieces[this.def.FROMSQ(move)]

    var ele = `${pce}${this.def.FROMSQ(move)}`
    if(this.selectedSide == 'b'){
      
      var myTo = `${this.def.TOSQ(move)}b`
      
    }
    else{
      
      var myTo = `${this.def.TOSQ(move)}w`
    }
    document.getElementById(myTo).appendChild(document.getElementById(ele))
    var ar = document.getElementById(`${ele}`)
    ar.id = `${pce}${this.def.TOSQ(move)}`
    this.move.MakeMove(move)
    this.genMove.GenerateMoves()
    
  }


}
