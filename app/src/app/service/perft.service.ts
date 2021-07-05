import { Injectable } from '@angular/core';
import { BoardService } from './board.service';
import { DefService } from './def.service';
import { GmService } from './gm.service';
import { MvService } from './mv.service';

@Injectable({
  providedIn: 'root'
})
export class PerftService {

  constructor(private bd : BoardService, private def : DefService, private gm : GmService, private mv : MvService) { }
perft_leafNodes;

Perft(depth) { 
	// MakeNullMove();
	if(this.bd.brd_posKey !=  this.bd.GeneratePosKey())  {
		console.log(this.bd.printGameLine());
		this.bd.PrintBoard();
		var srch_stop = this.def.BOOL.TRUE;
		console.log('Hash Error After Make');
	}   
	
	// TakeNullMove();
	if(this.bd.brd_posKey !=  this.bd.GeneratePosKey())  {
		console.log(this.bd.printGameLine());
		this.bd.PrintBoard();
		srch_stop = this.def.BOOL.TRUE;
		console.log('Hash Error After Take');
	}   

	if(depth == 0) {
        this.perft_leafNodes++;
        return;
    }	

    this.gm.GenerateMoves();
    
	var index;
	var move;
	for(index = this.bd.brd_moveListStart[this.bd.brd_ply]; index < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++index) {
	
		move = this.bd.brd_moveList[index];	
		if(this.mv.MakeMove(move) == this.def.BOOL.FALSE) {
			continue;
		}		
		this.Perft(depth-1);
		this.mv.TakeMove();
	}

    return;
}

PerftTest(depth) {    

	this.bd.PrintBoard();
	console.log("Starting Test To Depth:" + depth);	
	this.perft_leafNodes = 0;
	this.gm.GenerateMoves();
	var index;
	var move;
	var moveNum = 0;
	for(index = this.bd.brd_moveListStart[this.bd.brd_ply]; index < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++index) {
	
		move = this.bd.brd_moveList[index];	
		if(this.mv.MakeMove(move) == this.def.BOOL.FALSE) {
			continue;
		}	
		moveNum++;	
    var cumnodes = this.perft_leafNodes;
		this.Perft(depth-1);
		this.mv.TakeMove();
		var oldnodes = this.perft_leafNodes - cumnodes;
        console.log("move:" + moveNum + " " + this.bd.PrMove(move) + " " + oldnodes);
	}
    
	console.log("Test Complete : " + this.perft_leafNodes + " leaf nodes visited");
        // $("#FenOutput").text("Test Complete : " + this.perft_leafNodes + " leaf nodes visited");

    return;
  }

}
