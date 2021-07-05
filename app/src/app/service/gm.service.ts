import { Injectable } from '@angular/core';
import { BoardService } from './board.service';
import { DefService } from './def.service';
import { MvService } from './mv.service';

@Injectable({
  providedIn: 'root'
})
export class GmService {
  VictimScore = [ 0, 100, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600 ];
  MvvLvaScores = new Array(14 * 14);
  constructor(private bd : BoardService,private def : DefService, private mv : MvService) { }
  InitMvvLva() {
	var Attacker;
	var Victim;
	for(Attacker = this.def.PIECES.wP; Attacker <= this.def.PIECES.bK; ++Attacker) {
		for(Victim = this.def.PIECES.wP; Victim <= this.def.PIECES.bK; ++Victim) {
			this.MvvLvaScores[Victim * 14 + Attacker] = this.VictimScore[Victim] + 6 - ( this.VictimScore[Attacker] / 100);
		  }
	  }		
  }


MOVE(from,to,captured,promoted,flag) {
	return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag);
}

MoveExists(move) {
	
	this.GenerateMoves();
    
	var index;
	var moveFound = this.def.NOMOVE;
	for(index = this.bd.brd_moveListStart[this.bd.brd_ply]; index < this.bd.brd_moveListStart[this.bd.brd_ply + 1]; ++index) {
	
		moveFound = this.bd.brd_moveList[index];	
		if(this.mv.MakeMove(moveFound) == this.def.BOOL.FALSE) {
			continue;
		}				
		this.mv.TakeMove();
		if(move == moveFound) {
			return this.def.BOOL.TRUE;
		}
	}
	return this.def.BOOL.FALSE;
}

AddCaptureMove(move) {
	this.bd.brd_moveList[this.bd.brd_moveListStart[this.bd.brd_ply + 1]] = move;
	this.bd.brd_moveScores[this.bd.brd_moveListStart[this.bd.brd_ply + 1]++] = this.MvvLvaScores[this.def.CAPTURED(move) * 14 + this.bd.brd_pieces[this.def.FROMSQ(move)]] + 1000000;	
}

AddQuietMove(move) {
	this.bd.brd_moveList[this.bd.brd_moveListStart[this.bd.brd_ply + 1]] = move;
	
	if(this.bd.brd_searchKillers[this.bd.brd_ply] == move) {	
		this.bd.brd_moveScores[this.bd.brd_moveListStart[this.bd.brd_ply + 1]] = 900000;
	} else if(this.bd.brd_searchKillers[this.def.MAXDEPTH + this.bd.brd_ply] == move) {	
		this.bd.brd_moveScores[this.bd.brd_moveListStart[this.bd.brd_ply + 1]] = 800000;
	} else {	
		this.bd.brd_moveScores[this.bd.brd_moveListStart[this.bd.brd_ply + 1]] = this.bd.brd_searchHistory[ this.bd.brd_pieces[this.def.FROMSQ(move)] * this.def.BRD_SQ_NUM + this.def.TOSQ(move) ];
	}
	this.bd.brd_moveListStart[this.bd.brd_ply + 1]++;	
}

AddEnPassantMove(move) {
	this.bd.brd_moveList[this.bd.brd_moveListStart[this.bd.brd_ply + 1]] = move;
	this.bd.brd_moveScores[this.bd.brd_moveListStart[this.bd.brd_ply + 1]++] = 105 + 1000000;
}

AddWhitePawnCaptureMove(from, to, cap) {
	if(this.def.RanksBrd[from]== this.def.RANKS.RANK_7) {
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.wQ,0));
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.wR,0));
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.wB,0));
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.wN,0));
	} else {
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.EMPTY,0));	
	}
}

AddWhitePawnQuietMove(from, to) {
	if(this.def.RanksBrd[from]== this.def.RANKS.RANK_7) {
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.wQ,0));
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.wR,0));
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.wB,0));
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.wN,0));
	} else {
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,0));	
	}
}

AddBlackPawnCaptureMove(from, to, cap) {
	if(this.def.RanksBrd[from]==this.def.RANKS.RANK_2) {
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.bQ,0));
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.bR,0));
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.bB,0));
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.bN,0));
	} else {
		this.AddCaptureMove(this.MOVE(from,to,cap,this.def.PIECES.EMPTY,0));	
	}
}

AddBlackPawnQuietMove(from, to) {
	if(this.def.RanksBrd[from]==this.def.RANKS.RANK_2) {
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.bQ,0));
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.bR,0));
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.bB,0));
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.bN,0));
	} else {
		this.AddQuietMove(this.MOVE(from,to,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,0));	
	}
}


GenerateMoves() {
	this.bd.brd_moveListStart[this.bd.brd_ply + 1] = this.bd.brd_moveListStart[this.bd.brd_ply];
	var pceType;
	var pceNum;
	var pceIndex;
	var pce;
	var sq;
	var t_sq;
	var index;
  var dir;
	if(this.bd.brd_side == this.def.COLOURS.WHITE) {
		pceType = this.def.PIECES.wP;
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pceType]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pceType,pceNum)];
			if(this.bd.brd_pieces[sq + 10] == this.def.PIECES.EMPTY) {
				this.AddWhitePawnQuietMove(sq, sq+10);
				if(this.def.RanksBrd[sq] == this.def.RANKS.RANK_2 && this.bd.brd_pieces[sq + 20] == this.def.PIECES.EMPTY) {
					this.AddQuietMove(this.MOVE(sq,(sq+20),this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGPS));
				}
			} 
			
			if(this.def.SQOFFBOARD(sq + 9) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq + 9]] == this.def.COLOURS.BLACK) {
				this.AddWhitePawnCaptureMove(sq, sq+9, this.bd.brd_pieces[sq + 9]);
			}  
			if(this.def.SQOFFBOARD(sq + 11) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq + 11]] == this.def.COLOURS.BLACK) {
				this.AddWhitePawnCaptureMove(sq, sq+11, this.bd.brd_pieces[sq + 11]);
			} 
			
			if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) {
				if(sq + 9 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq + 9,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				} 
				if(sq + 11 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq + 11,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				}
			}
		}
		if(this.bd.brd_castlePerm & this.def.CASTLEBIT.WKCA) {
			if(this.bd.brd_pieces[this.def.SQUARES.F1] == this.def.PIECES.EMPTY && this.bd.brd_pieces[this.def.SQUARES.G1] == this.def.PIECES.EMPTY) {
				if(this.bd.SqAttacked(this.def.SQUARES.E1,this.def.COLOURS.BLACK) == this.def.BOOL.FALSE && this.bd.SqAttacked(this.def.SQUARES.F1,this.def.COLOURS.BLACK) == this.def.BOOL.FALSE) {
					this.AddQuietMove(this.MOVE(this.def.SQUARES.E1, this.def.SQUARES.G1, this.def.PIECES.EMPTY, this.def.PIECES.EMPTY, this.def.MFLAGCA));
				}
			}
		}
		
		if(this.bd.brd_castlePerm & this.def.CASTLEBIT.WQCA) {
			if(this.bd.brd_pieces[this.def.SQUARES.D1] == this.def.PIECES.EMPTY && this.bd.brd_pieces[this.def.SQUARES.C1] == this.def.PIECES.EMPTY && this.bd.brd_pieces[this.def.SQUARES.B1] == this.def.PIECES.EMPTY) {
				if(this.bd.SqAttacked(this.def.SQUARES.E1,this.def.COLOURS.BLACK) == this.def.BOOL.FALSE && this.bd.SqAttacked(this.def.SQUARES.D1,this.def.COLOURS.BLACK) == this.def.BOOL.FALSE ) {
					this.AddQuietMove(this.MOVE(this.def.SQUARES.E1, this.def.SQUARES.C1, this.def.PIECES.EMPTY, this.def.PIECES.EMPTY, this.def.MFLAGCA));
				}
			}
		}
		
		pceType = this.def.PIECES.wN; // HACK to set for loop other pieces
		
	} else {
		pceType = this.def.PIECES.bP;
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pceType]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pceType,pceNum)];			
			
			if(this.bd.brd_pieces[sq - 10] == this.def.PIECES.EMPTY) {
				this.AddBlackPawnQuietMove(sq, sq-10);
				if(this.def.RanksBrd[sq] == this.def.RANKS.RANK_7 && this.bd.brd_pieces[sq - 20] == this.def.PIECES.EMPTY) {
					this.AddQuietMove(this.MOVE(sq,(sq-20),this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGPS));
				}
			} 
			
			if(this.def.SQOFFBOARD(sq - 9) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq - 9]] == this.def.COLOURS.WHITE) {
				this.AddBlackPawnCaptureMove(sq, sq-9, this.bd.brd_pieces[sq - 9]);
			} 
			
			if(this.def.SQOFFBOARD(sq - 11) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq - 11]] == this.def.COLOURS.WHITE) {
				this.AddBlackPawnCaptureMove(sq, sq-11, this.bd.brd_pieces[sq - 11]);
			} 
			if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) {
				if(sq - 9 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq - 9,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				} 
				if(sq - 11 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq - 11,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				}
			}
		}
		if(this.bd.brd_castlePerm & this.def.CASTLEBIT.BKCA) {
			if(this.bd.brd_pieces[this.def.SQUARES.F8] == this.def.PIECES.EMPTY && this.bd.brd_pieces[this.def.SQUARES.G8] == this.def.PIECES.EMPTY) {
				if(this.bd.SqAttacked(this.def.SQUARES.E8,this.def.COLOURS.WHITE) == this.def.BOOL.FALSE && this.bd.SqAttacked(this.def.SQUARES.F8,this.def.COLOURS.WHITE) == this.def.BOOL.FALSE) {
					this.AddQuietMove(this.MOVE(this.def.SQUARES.E8, this.def.SQUARES.G8, this.def.PIECES.EMPTY, this.def.PIECES.EMPTY, this.def.MFLAGCA));
				}
			}
		}
		
		if(this.bd.brd_castlePerm & this.def.CASTLEBIT.BQCA) {
			if(this.bd.brd_pieces[this.def.SQUARES.D8] == this.def.PIECES.EMPTY && this.bd.brd_pieces[this.def.SQUARES.C8] == this.def.PIECES.EMPTY && this.bd.brd_pieces[this.def.SQUARES.B8] == this.def.PIECES.EMPTY) {
				if(this.bd.SqAttacked(this.def.SQUARES.E8,this.def.COLOURS.WHITE) == this.def.BOOL.FALSE && this.bd.SqAttacked(this.def.SQUARES.D8,this.def.COLOURS.WHITE) == this.def.BOOL.FALSE ) {
					this.AddQuietMove(this.MOVE(this.def.SQUARES.E8, this.def.SQUARES.C8, this.def.PIECES.EMPTY, this.def.PIECES.EMPTY, this.def.MFLAGCA));
				}
			}
		}	
		
		pceType = this.def.PIECES.bN; // HACK to set for loop other pieces
	} 
	
	
	pceIndex = this.def.LoopSlideIndex[this.bd.brd_side];
	pce = this.def.LoopSlidePce[pceIndex++];
	while( pce != 0) {			
		
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
			
			for(index = 0; index < this.def.DirNum[pce]; ++index) {
				dir = this.def.PceDir[pce][index];
				t_sq = sq + dir;
				
				while(this.def.SQOFFBOARD(t_sq)==this.def.BOOL.FALSE) {				
					
					if(this.bd.brd_pieces[t_sq] != this.def.PIECES.EMPTY) {
						if( this.def.PieceCol[this.bd.brd_pieces[t_sq]] == (this.bd.brd_side ^ 1)) {
							this.AddCaptureMove(this.MOVE(sq, t_sq, this.bd.brd_pieces[t_sq], this.def.PIECES.EMPTY, 0));
						}
						break;
					}	
					this.AddQuietMove(this.MOVE(sq, t_sq, this.def.PIECES.EMPTY, this.def.PIECES.EMPTY, 0));
					t_sq += dir;
				}
			}
		}		
		pce = this.def.LoopSlidePce[pceIndex++];
	}
	
	pceIndex = this.def.LoopNonSlideIndex[this.bd.brd_side];
	pce = this.def.LoopNonSlidePce[pceIndex++];
	
	while( pce != 0) {	
		
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];			
			
			for(index = 0; index < this.def.DirNum[pce]; ++index) {
				dir = this.def.PceDir[pce][index];
				t_sq = sq + dir;
				
				if(this.def.SQOFFBOARD(t_sq) == this.def.BOOL.TRUE) {				    
					continue;
				}				
			
				if(this.bd.brd_pieces[t_sq] != this.def.PIECES.EMPTY) {
					if( this.def.PieceCol[this.bd.brd_pieces[t_sq]] == (this.bd.brd_side ^ 1) ) {
						this.AddCaptureMove(this.MOVE(sq, t_sq, this.bd.brd_pieces[t_sq], this.def.PIECES.EMPTY, 0));
					}
					continue;
				}	
				this.AddQuietMove(this.MOVE(sq, t_sq, this.def.PIECES.EMPTY, this.def.PIECES.EMPTY, 0));
			}
		}				
		pce = this.def.LoopNonSlidePce[pceIndex++];
	}

}


GenerateCaptures() {
	this.bd.brd_moveListStart[this.bd.brd_ply + 1] = this.bd.brd_moveListStart[this.bd.brd_ply];
	var pceType;
	var pceNum;
	var pceIndex;
	var pce;
	var sq;
	var t_sq;
	var index;
  var dir;
	if(this.bd.brd_side == this.def.COLOURS.WHITE) {
		pceType = this.def.PIECES.wP;
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pceType]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pceType,pceNum)];			
			
			if(this.def.SQOFFBOARD(sq + 9) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq + 9]] == this.def.COLOURS.BLACK) {
				this.AddWhitePawnCaptureMove(sq, sq+9, this.bd.brd_pieces[sq + 9]);
			}  
			if(this.def.SQOFFBOARD(sq + 11) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq + 11]] == this.def.COLOURS.BLACK) {
				this.AddWhitePawnCaptureMove(sq, sq+11, this.bd.brd_pieces[sq + 11]);
			} 
			
			if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) {
				if(sq + 9 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq + 9,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				} 
				if(sq + 11 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq + 11,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				}
			}
		}
		
		pceType = this.def.PIECES.wN; // HACK to set for loop other pieces
		
	} else {
		pceType = this.def.PIECES.bP;
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pceType]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pceType,pceNum)];				
			
			if(this.def.SQOFFBOARD(sq - 9) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq - 9]] == this.def.COLOURS.WHITE) {
				this.AddBlackPawnCaptureMove(sq, sq-9, this.bd.brd_pieces[sq - 9]);
			} 
			
	    if(this.def.SQOFFBOARD(sq - 11) == this.def.BOOL.FALSE && this.def.PieceCol[this.bd.brd_pieces[sq - 11]] == this.def.COLOURS.WHITE) {
				this.AddBlackPawnCaptureMove(sq, sq-11, this.bd.brd_pieces[sq - 11]);
			} 
			if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) {
				if(sq - 9 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq - 9,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				} 
				if(sq - 11 == this.bd.brd_enPas) {
					this.AddEnPassantMove(this.MOVE(sq,sq - 11,this.def.PIECES.EMPTY,this.def.PIECES.EMPTY,this.def.MFLAGEP));
				}
			}
		}
		
		pceType = this.def.PIECES.bN; // HACK to set for loop other pieces
	} 
	
	
	pceIndex = this.def.LoopSlideIndex[this.bd.brd_side];
	pce = this.def.LoopSlidePce[pceIndex++];
	while( pce != 0) {			
		
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];
			
			for(index = 0; index < this.def.DirNum[pce]; ++index) {
				dir = this.def.PceDir[pce][index];
				t_sq = sq + dir;
				
				while(this.def.SQOFFBOARD(t_sq)==this.def.BOOL.FALSE) {				
					
					if(this.bd.brd_pieces[t_sq] != this.def.PIECES.EMPTY) {
						if( this.def.PieceCol[this.bd.brd_pieces[t_sq]] == (this.bd.brd_side ^ 1)) {
							this.AddCaptureMove(this.MOVE(sq, t_sq, this.bd.brd_pieces[t_sq], this.def.PIECES.EMPTY, 0));
						}
						break;
					}
					t_sq += dir;
				}
			}
		}		
		pce = this.def.LoopSlidePce[pceIndex++];
	}
	
	pceIndex = this.def.LoopNonSlideIndex[this.bd.brd_side];
	pce = this.def.LoopNonSlidePce[pceIndex++];
	
	while( pce != 0) {	
		
		for(pceNum = 0; pceNum < this.bd.brd_pceNum[pce]; ++pceNum) {
			sq = this.bd.brd_pList[this.def.PCEINDEX(pce,pceNum)];			
			
			for(index = 0; index < this.def.DirNum[pce]; ++index) {
				dir = this.def.PceDir[pce][index];
				t_sq = sq + dir;
				
				if(this.def.SQOFFBOARD(t_sq) == this.def.BOOL.TRUE) {				    
					continue;
				}				
			
				if(this.bd.brd_pieces[t_sq] != this.def.PIECES.EMPTY) {
					if( this.def.PieceCol[this.bd.brd_pieces[t_sq]] == (this.bd.brd_side ^ 1)) {
						this.AddCaptureMove(this.MOVE(sq, t_sq, this.bd.brd_pieces[t_sq], this.def.PIECES.EMPTY, 0));
					}
					continue;
				}	
			}
		}				
		pce = this.def.LoopNonSlidePce[pceIndex++];
	}

  }
  
}
