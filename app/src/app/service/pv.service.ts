import { Injectable } from '@angular/core';
import { BoardService } from './board.service';
import { DefService } from './def.service';
import { GmService } from './gm.service';
import { MvService } from './mv.service';

@Injectable({
  providedIn: 'root'
})
export class PvService {

  constructor(private def : DefService, private bd : BoardService, private mv : MvService, private gm : GmService) { }
  GetPvLine(depth) {;

    console.log("GetPvLine");
    
    var move = this.ProbePvTable();
    var count = 0;
    
    while(move != this.def.NOMOVE && count < depth) {
    
      if( this.gm.MoveExists(move) ) {
        this.mv.MakeMove(move);
        this.bd.brd_PvArray[count++] = move;
        console.log("GetPvLine added " + this.bd.PrMove(move));	
      } else {
        break;
      }		
      move = this.ProbePvTable();	
    }
    
    while(this.bd.brd_ply > 0) {
      this.mv.TakeMove();
    }
    return count;
    
  }
  
  StorePvMove(move) {
  
    var index = this.bd.brd_posKey % this.def.PVENTRIES;	
    
    this.bd.brd_PvTable[index].move = move;
      this.bd.brd_PvTable[index].posKey = this.bd.brd_posKey;
  }
  
  ProbePvTable() {
  
    var index = this.bd.brd_posKey % this.def.PVENTRIES;	
    
    if( this.bd.brd_PvTable[index].posKey == this.bd.brd_posKey ) {
      return this.bd.brd_PvTable[index].move;
    }
    
    return this.def.NOMOVE;
  }




}
