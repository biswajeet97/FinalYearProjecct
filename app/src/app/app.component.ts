import { Component, OnInit } from '@angular/core';
import { BoardService } from './service/board.service';
import { DefService } from './service/def.service';
import { EvalService } from './service/eval.service';
import { PerftService } from './service/perft.service';
import { SearchService } from './service/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {

  constructor(private bd : BoardService, private def : DefService, private eva : EvalService,private perft : PerftService, private search : SearchService) { }

  ngOnInit(): void {
    this.InitFilesRanksBrd();
    this.InitSq120To64();
    this.InitHashKeys();
    this.InitBoardVars();
    this.EvalInit();
    this.bd.ParseFen(this.def.START_FEN);
    // srch_thinking = BOOL.FALSE;


   }
  InitBoardVars() {

    var index = 0;
    for(index = 0; index < this.def.MAXGAMEMOVES; index++) {
      this.bd.brd_history.push({
        move : this.def.NOMOVE,
        castlePerm : 0,
        enPas : 0,
        fiftyMove : 0,
        posKey : 0
      }); 
    }
    
    for(index = 0; index < this.def.PVENTRIES; index++) {
      this.bd.brd_PvTable.push({
        move : this.def.NOMOVE,
        posKey : 0
      }); 
    }
  
  }
  
  EvalInit() {
    var index = 0;
    
    for(index = 0; index < 10; ++index) {				
      this.eva.PawnRanksWhite[index] = 0;			
      this.eva.PawnRanksBlack[index] = 0;
    }
  }
  
  InitHashKeys() {
      var index = 0;
    
    for(index = 0; index < 13 * 120; ++index) {				
      this.def.PieceKeys[index] = this.def.RAND_32();
    }
    
    this.def.SideKey = this.def.RAND_32();
    
    for(index = 0; index < 16; ++index) {
      this.def.CastleKeys[index] = this.def.RAND_32();
    }
  }
  
  InitSq120To64() {
  
    var index = 0;
    var file = this.def.FILES.FILE_A;
    var rank = this.def.RANKS.RANK_1;
    var sq = this.def.SQUARES.A1;
    var sq64 = 0;
    for(index = 0; index < this.def.BRD_SQ_NUM; ++index) {
      this.def.Sq120ToSq64[index] = 65;
    }
    
    for(index = 0; index < 64; ++index) {
      this.def.Sq64ToSq120[index] = 120;
    }
    
    for(rank = this.def.RANKS.RANK_1; rank <= this.def.RANKS.RANK_8; ++rank) {
      for(file = this.def.FILES.FILE_A; file <= this.def.FILES.FILE_H; ++file) {
        sq = this.def.FR2SQ(file,rank);
        this.def.Sq64ToSq120[sq64] = sq;
        this.def.Sq120ToSq64[sq] = sq64;
        sq64++;
      }
    }
  }
  
  InitFilesRanksBrd() {
    
    var index = 0;
    var file = this.def.FILES.FILE_A;
    var rank = this.def.RANKS.RANK_1;
    var sq = this.def.SQUARES.A1;
    var sq64 = 0;
    
    for(index = 0; index < this.def.BRD_SQ_NUM; ++index) {
      this.def.FilesBrd[index] = this.def.SQUARES.OFFBOARD;
      this.def.RanksBrd[index] = this.def.SQUARES.OFFBOARD;
    }
    
    for(rank = this.def.RANKS.RANK_1; rank <= this.def.RANKS.RANK_8; ++rank) {
      for(file = this.def.FILES.FILE_A; file <= this.def.FILES.FILE_H; ++file) {
        sq = this.def.FR2SQ(file,rank);
        this.def.FilesBrd[sq] = file;
        this.def.RanksBrd[sq] = rank;
      }
    }
  }

  

}
