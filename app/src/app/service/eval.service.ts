import { Injectable } from '@angular/core';
import { BoardService } from './board.service';
import { DefService } from './def.service';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor(private bd : BoardService, private def : DefService ) { }
  RookOpenFile = 10;
  RookSemiOpenFile = 5;
  QueenOpenFile = 5;
  QueenSemiOpenFile = 3;
  BishopPair = 30;

  PawnRanksWhite = new Array(10);
  PawnRanksBlack = new Array(10);

  PawnIsolated = -10;
  PawnPassed = [ 0, 5, 10, 20, 35, 60, 100, 200 ]; 

  PawnTable = [
  0	,	0	,	0	,	0	,	0	,	0	,	0	,	0	,
  10	,	10	,	0	,	-10	,	-10	,	0	,	10	,	10	,
  5	,	0	,	0	,	5	,	5	,	0	,	0	,	5	,
  0	,	0	,	10	,	20	,	20	,	10	,	0	,	0	,
  5	,	5	,	5	,	10	,	10	,	5	,	5	,	5	,
  10	,	10	,	10	,	20	,	20	,	10	,	10	,	10	,
  20	,	20	,	20	,	30	,	30	,	20	,	20	,	20	,
  0	,	0	,	0	,	0	,	0	,	0	,	0	,	0	
  ];

  KnightTable = [
  0	,	-10	,	0	,	0	,	0	,	0	,	-10	,	0	,
  0	,	0	,	0	,	5	,	5	,	0	,	0	,	0	,
  0	,	0	,	10	,	10	,	10	,	10	,	0	,	0	,
  0	,	0	,	10	,	20	,	20	,	10	,	5	,	0	,
  5	,	10	,	15	,	20	,	20	,	15	,	10	,	5	,
  5	,	10	,	10	,	20	,	20	,	10	,	10	,	5	,
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
  0	,	0	,	0	,	0	,	0	,	0	,	0	,	0		
  ];

  BishopTable = [
  0	,	0	,	-10	,	0	,	0	,	-10	,	0	,	0	,
  0	,	0	,	0	,	10	,	10	,	0	,	0	,	0	,
  0	,	0	,	10	,	15	,	15	,	10	,	0	,	0	,
  0	,	10	,	15	,	20	,	20	,	15	,	10	,	0	,
  0	,	10	,	15	,	20	,	20	,	15	,	10	,	0	,
  0	,	0	,	10	,	15	,	15	,	10	,	0	,	0	,
  0	,	0	,	0	,	10	,	10	,	0	,	0	,	0	,
  0	,	0	,	0	,	0	,	0	,	0	,	0	,	0	
  ];

  RookTable = [
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0	,
  25	,	25	,	25	,	25	,	25	,	25	,	25	,	25	,
  0	,	0	,	5	,	10	,	10	,	5	,	0	,	0		
  ];

  KingE = [	
    -50	,	-10	,	0	,	0	,	0	,	0	,	-10	,	-50	,
    -10,	0	,	10	,	10	,	10	,	10	,	0	,	-10	,
    0	,	10	,	20	,	20	,	20	,	20	,	10	,	0	,
    0	,	10	,	20	,	40	,	40	,	20	,	10	,	0	,
    0	,	10	,	20	,	40	,	40	,	20	,	10	,	0	,
    0	,	10	,	20	,	20	,	20	,	20	,	10	,	0	,
    -10,	0	,	10	,	10	,	10	,	10	,	0	,	-10	,
    -50	,	-10	,	0	,	0	,	0	,	0	,	-10	,	-50	
  ];

  KingO = [	
    0	,	5	,	5	,	-10	,	-10	,	0	,	10	,	5	,
    -30	,	-30	,	-30	,	-30	,	-30	,	-30	,	-30	,	-30	,
    -50	,	-50	,	-50	,	-50	,	-50	,	-50	,	-50	,	-50	,
    -70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,
    -70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,
    -70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,
    -70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,
    -70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70	,	-70		
  ];

MaterialDraw() {
    if (0 == this.bd.brd_pceNum[this.def.PIECES.wR] && 0 == this.bd.brd_pceNum[this.def.PIECES.bR] && 0 == this.bd.brd_pceNum[this.def.PIECES.wQ] && 0 == this.bd.brd_pceNum[this.def.PIECES.bQ]) {
	  if (0 == this.bd.brd_pceNum[this.def.PIECES.bB] && 0 == this.bd.brd_pceNum[this.def.PIECES.wB]) {
	      if (this.bd.brd_pceNum[this.def.PIECES.wN] < 3 && this.bd.brd_pceNum[this.def.PIECES.bN] < 3) {  return this.def.BOOL.TRUE; }
	  } else if (0 == this.bd.brd_pceNum[this.def.PIECES.wN] && 0 == this.bd.brd_pceNum[this.def.PIECES.bN]) {
	     if (Math.abs(this.bd.brd_pceNum[this.def.PIECES.wB] - this.bd.brd_pceNum[this.def.PIECES.bB]) < 2) { return this.def.BOOL.TRUE; }
	  } else if ((this.bd.brd_pceNum[this.def.PIECES.wN] < 3 && 0 == this.bd.brd_pceNum[this.def.PIECES.wB]) || (this.bd.brd_pceNum[this.def.PIECES.wB] == 1 && 0 == this.bd.brd_pceNum[this.def.PIECES.wN])) {
	    if ((this.bd.brd_pceNum[this.def.PIECES.bN] < 3 && 0 == this.bd.brd_pceNum[this.def.PIECES.bB]) || (this.bd.brd_pceNum[this.def.PIECES.bB] == 1 && 0 == this.bd.brd_pceNum[this.def.PIECES.bN]))  { return this.def.BOOL.TRUE; }
	  }
	} else if (0 == this.bd.brd_pceNum[this.def.PIECES.wQ] && 0 == this.bd.brd_pceNum[this.def.PIECES.bQ]) {
        if (this.bd.brd_pceNum[this.def.PIECES.wR] == 1 && this.bd.brd_pceNum[this.def.PIECES.bR] == 1) {
            if ((this.bd.brd_pceNum[this.def.PIECES.wN] + this.bd.brd_pceNum[this.def.PIECES.wB]) < 2 && (this.bd.brd_pceNum[this.def.PIECES.bN] + this.bd.brd_pceNum[this.def.PIECES.bB]) < 2)	{ return this.def.BOOL.TRUE; }
        } else if (this.bd.brd_pceNum[this.def.PIECES.wR] == 1 && 0 == this.bd.brd_pceNum[this.def.PIECES.bR]) {
            if ((this.bd.brd_pceNum[this.def.PIECES.wN] + this.bd.brd_pceNum[this.def.PIECES.wB] == 0) && (((this.bd.brd_pceNum[this.def.PIECES.bN] + this.bd.brd_pceNum[this.def.PIECES.bB]) == 1) || ((this.bd.brd_pceNum[this.def.PIECES.bN] + this.bd.brd_pceNum[this.def.PIECES.bB]) == 2))) { return this.def.BOOL.TRUE; }
        } else if (this.bd.brd_pceNum[this.def.PIECES.bR] == 1 && 0 == this.bd.brd_pceNum[this.def.PIECES.wR]) {
            if ((this.bd.brd_pceNum[this.def.PIECES.bN] + this.bd.brd_pceNum[this.def.PIECES.bB] == 0) && (((this.bd.brd_pceNum[this.def.PIECES.wN] + this.bd.brd_pceNum[this.def.PIECES.wB]) == 1) || ((this.bd.brd_pceNum[this.def.PIECES.wN] + this.bd.brd_pceNum[this.def.PIECES.wB]) == 2))) { return this.def.BOOL.TRUE; }
        }
    }
  return this.def.BOOL.FALSE;
}

ENDGAME_MAT = 1 * this.def.PieceVal[this.def.PIECES.wR] + 2 * this.def.PieceVal[this.def.PIECES.wN] + 2 * this.def.PieceVal[this.def.PIECES.wP] + this.def.PieceVal[this.def.PIECES.wK];

PawnsInit() {
	var index = 0;
	var pce;
  var pceNum;
  var sq;
	for(index = 0; index < 10; ++index) {				
		this.PawnRanksWhite[index] = this.def.RANKS.RANK_8;			
		this.PawnRanksBlack[index] = this.def.RANKS.RANK_1;
	}
	
	pce = this.def.PIECES.wP;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		if(this.def.RanksBrd[sq] < this.PawnRanksWhite[this.def.FilesBrd[sq]+1]) {
			this.PawnRanksWhite[this.def.FilesBrd[sq]+1] = this.def.RanksBrd[sq];
		}
	}	

	pce = this.def.PIECES.bP;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		if(this.def.RanksBrd[sq] > this.PawnRanksBlack[this.def.FilesBrd[sq]+1]) {
			this.PawnRanksBlack[this.def.FilesBrd[sq]+1] = this.def.RanksBrd[sq];
		}			
	}	
}

EvalPosition() {

	var pce;
	var pceNum;
	var sq;
	var score = this.bd.brd_material[this.def.COLOURS.WHITE] - this.bd.brd_material[this.def.COLOURS.BLACK];
	var file;
	var rank;
	if(0 == this.bd.brd_pceNum[this.def.PIECES.wP] && 0 == this.bd.brd_pceNum[this.def.PIECES.bP] && this.MaterialDraw() == this.def.BOOL.TRUE) {
		return 0;
	}
	
	this.PawnsInit();
	
	pce = this.def.PIECES.wP;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score += this.PawnTable[this.def.SQ64(sq)];	
		file = this.def.FilesBrd[sq]+1;
		rank = this.def.RanksBrd[sq];
		if(this.PawnRanksWhite[file-1]==this.def.RANKS.RANK_8 && this.PawnRanksWhite[file+1]==this.def.RANKS.RANK_8) {
			score += this.PawnIsolated;
		}
		
		if(this.PawnRanksBlack[file-1]<=rank && this.PawnRanksBlack[file]<=rank && this.PawnRanksBlack[file+1]<=rank) {
			score += this.PawnPassed[rank];
		}
	}	

	pce = this.def.PIECES.bP;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score -= this.PawnTable[this.def.MIRROR64(this.def.SQ64(sq))];	
		file = this.def.FilesBrd[sq]+1;
		rank = this.def.RanksBrd[sq];
		if(this.PawnRanksBlack[file-1]==this.def.RANKS.RANK_1 && this.PawnRanksBlack[file+1]==this.def.RANKS.RANK_1) {
			score -= this.PawnIsolated;
		}	
		
		if(this.PawnRanksWhite[file-1]>=rank && this.PawnRanksWhite[file]>=rank && this.PawnRanksWhite[file+1]>=rank) {
			score -= this.PawnPassed[7-rank];
		}	
	}	
	
	pce = this.def.PIECES.wN;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score += this.KnightTable[this.def.SQ64(sq)];
	}	

	pce = this.def.PIECES.bN;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score -= this.KnightTable[this.def.MIRROR64(this.def.SQ64(sq))];
	}			
	
	pce = this.def.PIECES.wB;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score += this.BishopTable[this.def.SQ64(sq)];
	}	

	pce = this.def.PIECES.bB;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score -= this.BishopTable[this.def.MIRROR64(this.def.SQ64(sq))];
	}	

	pce = this.def.PIECES.wR;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score += this.RookTable[this.def.SQ64(sq)];	
		file = this.def.FilesBrd[sq]+1;
		if(this.PawnRanksWhite[file]==this.def.RANKS.RANK_8) {
			if(this.PawnRanksBlack[file]==this.def.RANKS.RANK_1) {
				score += this.RookOpenFile;
			} else  {
				score += this.RookSemiOpenFile;
			}
		}
	}	

	pce = this.def.PIECES.bR;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score -= this.RookTable[this.def.MIRROR64(this.def.SQ64(sq))];	
		file = this.def.FilesBrd[sq]+1;
		if(this.PawnRanksBlack[file]==this.def.RANKS.RANK_1) {
			if(this.PawnRanksWhite[file]==this.def.RANKS.RANK_8) {
				score -= this.RookOpenFile;
			} else  {
				score -= this.RookSemiOpenFile;
			}
		}
	}
	
	pce = this.def.PIECES.wQ;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score += this.RookTable[this.def.SQ64(sq)];	
		file = this.def.FilesBrd[sq]+1;
		if(this.PawnRanksWhite[file]==this.def.RANKS.RANK_8) {
			if(this.PawnRanksBlack[file]==this.def.RANKS.RANK_1) {
				score += this.QueenOpenFile;
			} else  {
				score += this.QueenSemiOpenFile;
			}
		}
	}	

	pce = this.def.PIECES.bQ;	
	for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
		sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
		score -= this.RookTable[this.def.MIRROR64(this.def.SQ64(sq))];	
		file = this.def.FilesBrd[sq]+1;
		if(this.PawnRanksBlack[file]==this.def.RANKS.RANK_1) {
			if(this.PawnRanksWhite[file]==this.def.RANKS.RANK_8) {
				score -= this.QueenOpenFile;
			} else  {
				score -= this.QueenSemiOpenFile;
			}
		}
	}	
	
	pce = this.def.PIECES.wK;
	sq = this.bd.brd_pList[this.def.PCEINDEX(pce,0)];
	
	if( (this.bd.brd_material[this.def.COLOURS.BLACK] <= this.ENDGAME_MAT) ) {
		score += this.KingE[this.def.SQ64(sq)];
	} else {
		score += this.KingO[this.def.SQ64(sq)];
	}
	
	pce = this.def.PIECES.bK;
	sq = this.bd.brd_pList[this.def.PCEINDEX(pce,0)];
	
	if( (this.bd.brd_material[this.def.COLOURS.WHITE] <= this.ENDGAME_MAT) ) {
		score -= this.KingE[this.def.MIRROR64(this.def.SQ64(sq))];
	} else {
		score -= this.KingO[this.def.MIRROR64(this.def.SQ64(sq))];
	}
	
	if(this.bd.brd_pceNum[this.def.PIECES.wB] >= 2) score += this.BishopPair;
	if(this.bd.brd_pceNum[this.def.PIECES.bB] >= 2) score -= this.BishopPair;
	
	if(this.bd.brd_side == this.def.COLOURS.WHITE) {
		return score;
	} else {
		return -score;
	}	
}





}
