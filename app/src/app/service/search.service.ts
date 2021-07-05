import { Injectable } from '@angular/core';
import { BoardService } from './board.service';
import { DefService } from './def.service';
import { EvalService } from './eval.service';
import { GmService } from './gm.service';
// import { IoService } from './io.service';
import { MvService } from './mv.service';
import { PvService } from './pv.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private bd : BoardService, private def : DefService, private eva : EvalService, private gm : GmService, private mv : MvService, private pv : PvService) { }
  srch_nodes;
  srch_fh;
  srch_fhf;
  srch_depth;
  srch_time;
  srch_start;
  srch_stop;
  srch_best;
  srch_thinking;

CheckUp() {
	if( (Date.now() - this.srch_start) > this.srch_time ) this.srch_stop = this.def.BOOL.TRUE;
}

PickNextMove(moveNum) {

	var index = 0;
	var bestScore = 0; 
	var bestNum = moveNum;
	
	for (index = moveNum; index < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++index) {
		if (this.bd.brd_moveScores[index] > bestScore) {
			bestScore = this.bd.brd_moveScores[index];
			bestNum = index;
		}
	}
	
	var temp = this.bd.brd_moveList[moveNum];
	this.bd.brd_moveList[moveNum] = this.bd.brd_moveList[bestNum];
	this.bd.brd_moveList[bestNum] = temp;
	
	temp = this.bd.brd_moveScores[moveNum];
	this.bd.brd_moveScores[moveNum] = this.bd.brd_moveScores[bestNum];
	this.bd.brd_moveScores[bestNum] = temp;
}

IsRepetition() {

	var index = 0;

	for(index = this.bd.brd_hisPly - this.bd.brd_fiftyMove; index < this.bd.brd_hisPly-1; ++index) {				
		if(this.bd.brd_posKey == this.bd.brd_history[index].posKey) {
			return this.def.BOOL.TRUE;
		}
	}	
	return this.def.BOOL.FALSE;
}

ClearPvTable() {
	
	for(var index = 0; index < this.def.PVENTRIES; index++) {
			this.bd.brd_PvTable[index].move = this.def.NOMOVE;
			this.bd.brd_PvTable[index].posKey = 0;
		
	}
}

ClearForSearch() {
	
	var index = 0;
	var index2 = 0;
	
	for(index = 0; index < 14 * this.def.BRD_SQ_NUM; ++index) {		
		this.bd.brd_searchHistory[index] = 0;	
	}
	
	for(index = 0; index < 3 * this.def.MAXDEPTH; ++index) {
		this.bd.brd_searchKillers[index] = 0;
	}	
	
	this.ClearPvTable();
		
	this.bd.brd_ply = 0;	
	
	this.srch_nodes = 0;
	this.srch_fh = 0;
	this.srch_fhf = 0;
	this.srch_start = Date.now();
	this.srch_stop = this.def.BOOL.FALSE;
}


Quiescence(alpha, beta) {

	if((this.srch_nodes & 2047) == 0) this.CheckUp();
	
	this.srch_nodes++;
	
	if(this.IsRepetition() || this.bd.brd_fiftyMove >= 100) {
		return 0;
	}
	
	if(this.bd.brd_ply > this.def.MAXDEPTH - 1) {
		return this.eva.EvalPosition();
	}
	
	var Score = this.eva.EvalPosition();
	
	if(Score >= beta) {
		return beta;
	}
	
	if(Score > alpha) {
		alpha = Score;
	}
	
	this.gm.GenerateCaptures();
      
  var MoveNum = 0;
	var Legal = 0;
	var OldAlpha = alpha;
	var BestMove = this.def.NOMOVE;
	Score = -this.def.INFINITE;
	var PvMove = this.pv.ProbePvTable();	
	
	if( PvMove != this.def.NOMOVE) {
		for(MoveNum = this.bd.brd_moveListStart[this.bd.brd_ply]; MoveNum < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++MoveNum) {
			if( this.bd.brd_moveList[MoveNum] == PvMove) {
				this.bd.brd_moveScores[MoveNum] = 2000000;
				break;
			}
		}
	}
	
	for(MoveNum = this.bd.brd_moveListStart[this.bd.brd_ply]; MoveNum < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++MoveNum)  {	
			
		this.PickNextMove(MoveNum);	
		
        if ( this.mv.MakeMove(this.bd.brd_moveList[MoveNum]) == this.def.BOOL.FALSE)  {
            continue;
        }
        
		Legal++;
		Score = -this.Quiescence( -beta, -alpha);
		this.mv.TakeMove();					
		if(this.srch_stop == this.def.BOOL.TRUE) return 0;
		if(Score > alpha) {
			if(Score >= beta) {
				if(Legal==1) {
					this.srch_fhf++;
				}
				this.srch_fh++;				
						
				return beta;
			}
			alpha = Score;
			BestMove = this.bd.brd_moveList[MoveNum];			
		}		
    }
	
	if(alpha != OldAlpha) {
		this.pv.StorePvMove(BestMove);
	}
	
	return alpha;
}

AlphaBeta(alpha, beta, depth, DoNull) {

	
	if(depth <= 0) {
		return this.Quiescence(alpha, beta);
	}	
	if((this.srch_nodes & 2047) == 0) this.CheckUp();
	
	this.srch_nodes++;
	
	if((this.IsRepetition() || this.bd.brd_fiftyMove >= 100) && this.bd.brd_ply != 0) {	
		return 0;
	}
	
	if(this.bd.brd_ply > this.def.MAXDEPTH - 1) {
		return this.eva.EvalPosition();
	}
	
	var InCheck = this.bd.SqAttacked(this.bd.brd_pList[this.def.PCEINDEX(this.def.Kings[this.bd.brd_side],0)], this.bd.brd_side^1);
	
	if(InCheck == this.def.BOOL.TRUE) {
		depth++;
	}
	
	var Score = -this.def.INFINITE;
	
	if( DoNull == this.def.BOOL.TRUE && this.def.BOOL.FALSE == InCheck && 
			this.bd.brd_ply != 0 && (this.bd.brd_material[this.bd.brd_side] > 50200) && depth >= 4) {
		
		
		var ePStore = this.bd.brd_enPas;
		if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) this.bd.HASH_EP();
		this.bd.brd_side ^= 1;
    	this.bd.HASH_SIDE();
    	this.bd.brd_enPas = this.def.SQUARES.NO_SQ;
		
		Score = -this.AlphaBeta( -beta, -beta + 1, depth-4, this.def.BOOL.FALSE);
		
		this.bd.brd_side ^= 1;
    	this.bd.HASH_SIDE();
		this.bd.brd_enPas = ePStore;
		if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) this.bd.HASH_EP();
		
		if(this.srch_stop == this.def.BOOL.TRUE) return 0;	
		if (Score >= beta) {		 
		  return beta;
		}	
	}
		
    this.gm.GenerateMoves();
      
    var MoveNum = 0;
    var Legal = 0;
    var OldAlpha = alpha;
    var BestMove = this.def.NOMOVE;
    var Score = -this.def.INFINITE;
    var PvMove = this.pv.ProbePvTable();		
	
	if( PvMove != this.def.NOMOVE) {
		for(MoveNum = this.bd.brd_moveListStart[this.bd.brd_ply]; MoveNum < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++MoveNum) {
			if( this.bd.brd_moveList[MoveNum] == PvMove) {
				this.bd.brd_moveScores[MoveNum] = 2000000;
				break;
			}
		}
	}
	
	for(MoveNum = this.bd.brd_moveListStart[this.bd.brd_ply]; MoveNum < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++MoveNum)  {	
			
		this.PickNextMove(MoveNum);	
		
        if ( this.mv.MakeMove(this.bd.brd_moveList[MoveNum]) == this.def.BOOL.FALSE)  {
            continue;
        }
        
		Legal++;
		Score = -this.AlphaBeta( -beta, -alpha, depth-1, this.def.BOOL.TRUE);
		this.mv.TakeMove();						
		if(this.srch_stop == this.def.BOOL.TRUE) return 0;				
		
		if(Score > alpha) {
			if(Score >= beta) {
				if(Legal==1) {
					this.srch_fhf++;
				}
				this.srch_fh++;	
				
				if((this.bd.brd_moveList[MoveNum] & this.def.MFLAGCAP) == 0) {
					this.bd.brd_searchKillers[this.def.MAXDEPTH + this.bd.brd_ply] = this.bd.brd_searchKillers[this.bd.brd_ply];
					this.bd.brd_searchKillers[this.bd.brd_ply] = this.bd.brd_moveList[MoveNum];
				}				
				return beta;
			}
			alpha = Score;
			BestMove = this.bd.brd_moveList[MoveNum];
			if((BestMove & this.def.MFLAGCAP) == 0) {
				this.bd.brd_searchHistory[ this.bd.brd_pieces[this.def.FROMSQ(BestMove)] * this.def.BRD_SQ_NUM + this.def.TOSQ(BestMove) ] += depth;
			}
		}		
    }
	
	if(Legal == 0) {
		if(InCheck) {
			return -this.def.MATE + this.bd.brd_ply;
		} else {
			return 0;
		}
	}
	
	if(alpha != OldAlpha) {		
		this.pv.StorePvMove(BestMove);
	}
	
	return alpha;
} 

domUpdate_depth;
domUpdate_move;
domUpdate_score;
domUpdate_nodes;
domUpdate_ordering;

UpdateDOMStats() {
		var scoreText = "Score: " + (this.domUpdate_score/100).toFixed(2);
		if(Math.abs(this.domUpdate_score) > this.def.MATE-this.def.MAXDEPTH) {
			scoreText = "Score: " + "Mate In " + (this.def.MATE - Math.abs(this.domUpdate_score)) + " moves";
		}
		
		console.log("UpdateDOMStats depth:" + this.domUpdate_depth + " score:" + this.domUpdate_score + " nodes:" + this.domUpdate_nodes + scoreText);
		// $("#OrderingOut").text("Ordering: " + domUpdate_ordering + "%");
		// $("#DepthOut").text("Depth: " + domUpdate_depth);
		// $("#ScoreOut").text(scoreText);
		// $("#NodesOut").text("Nodes: " + domUpdate_nodes);
		// $("#TimeOut").text("Time: " + (($.now()-this.srch_start)/1000).toFixed(1) + "s");
}

SearchPosition() {
	
	var bestMove = this.def.NOMOVE;
	var bestScore = -this.def.INFINITE;
	var currentDepth = 0;	
	var pvNum = 0;
	var line;
	this.ClearForSearch();
	
	// if(this.def.GameController.BookLoaded == this.def.BOOL.TRUE) {
	// 	bestMove = this.bd.BookMove();
	
		if(bestMove != this.def.NOMOVE) {
			// $("#OrderingOut").text("Ordering:");
			// $("#DepthOut").text("Depth: ");
			// $("#ScoreOut").text("Score:");
			// $("#NodesOut").text("Nodes:");
			// $("#TimeOut").text("Time: 0s");
			// $("#BestOut").text("BestMove: " + PrMove(bestMove) + '(Book)');
			this.srch_best = bestMove;
			this.srch_thinking = this.def.BOOL.FALSE;
			return;
		}
	// }
	
	// iterative deepening
	for( currentDepth = 1; currentDepth <= 5; ++currentDepth ) {						
		
		bestScore = this.AlphaBeta(-this.def.INFINITE, this.def.INFINITE, currentDepth, this.def.BOOL.TRUE);
		if(this.srch_stop == this.def.BOOL.TRUE) break;
		pvNum = this.pv.GetPvLine(currentDepth);
		bestMove = this.bd.brd_PvArray[0];
		line = ("Depth:" + currentDepth + " best:" + this.bd.PrMove(bestMove) + " Score:" + bestScore + " nodes:" + this.srch_nodes); 
		
		if(currentDepth!=1) {
			line += (" Ordering:" + ((this.srch_fhf/this.srch_fh)*100).toFixed(2) + "%");
		}
		console.log(line);
		
		this.domUpdate_depth = currentDepth;
		this.domUpdate_move = bestMove;
		this.domUpdate_score = bestScore;
		this.domUpdate_nodes = this.srch_nodes;
		this.domUpdate_ordering = ((this.srch_fhf/this.srch_fh)*100).toFixed(2);
	}	
		
	// $("#BestOut").text("BestMove: " + PrMove(bestMove));
	this.UpdateDOMStats();
	this.srch_best = bestMove;
	this.srch_thinking = this.def.BOOL.FALSE;
	
	}


}
