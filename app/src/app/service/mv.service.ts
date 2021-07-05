import { Injectable } from '@angular/core';
import { BoardService } from './board.service';
import { DefService } from './def.service';

@Injectable({
  providedIn: 'root'
})
export class MvService {

  constructor(private bd : BoardService, private def: DefService) { }
  ClearPiece(sq) {	
	
  var pce = this.bd.brd_pieces[sq];	
	var col = this.def.PieceCol[pce];
	var index = 0;
	var t_pceNum = -1;
	
    this.bd.HASH_PCE(pce,sq);
	
	this.bd.brd_pieces[sq] = this.def.PIECES.EMPTY;
    this.bd.brd_material[col] -= this.def.PieceVal[pce];
	
	for(index = 0; index < this.bd.brd_pceNum[pce]; ++index) {
		if(this.bd.brd_pList[this.def.PCEINDEX(pce,index)] == sq) {
			t_pceNum = index;
			break;
		}
	}
	
	this.bd.brd_pceNum[pce]--;		
	this.bd.brd_pList[this.def.PCEINDEX(pce,t_pceNum)] = this.bd.brd_pList[this.def.PCEINDEX(pce,this.bd.brd_pceNum[pce])];
  
}

AddPiece(sq, pce) {   
	
	var col = this.def.PieceCol[pce];

    this.bd.HASH_PCE(pce,sq);
	
	this.bd.brd_pieces[sq] = pce;  	
	this.bd.brd_material[col] += this.def.PieceVal[pce];
	this.bd.brd_pList[this.def.PCEINDEX(pce,this.bd.brd_pceNum[pce])] = sq;
	this.bd.brd_pceNum[pce]++;
}

MovePiece(from, to) {   
	
	var index = 0;
	var pce = this.bd.brd_pieces[from];	
	var col = this.def.PieceCol[pce];	

	this.bd.HASH_PCE(pce,from);
	this.bd.brd_pieces[from] = this.def.PIECES.EMPTY;
	
	this.bd.HASH_PCE(pce,to);
	this.bd.brd_pieces[to] = pce;	
	
	for(index = 0; index < this.bd.brd_pceNum[pce]; ++index) {
		if(this.bd.brd_pList[this.def.PCEINDEX(pce,index)] == from) {
			this.bd.brd_pList[this.def.PCEINDEX(pce,index)] = to;
			break;
		}
	}
	
}

MakeMove(move) {
	
	var from = this.def.FROMSQ(move);
    var to = this.def.TOSQ(move);
    var side = this.bd.brd_side;	
	
	this.bd.brd_history[this.bd.brd_hisPly].posKey = this.bd.brd_posKey;
	
	if( (move & this.def.MFLAGEP) != 0) {
        if(side == this.def.COLOURS.WHITE) {
            this.ClearPiece(to-10);
        } else {
            this.ClearPiece(to+10);
        }
    } else if ( (move & this.def.MFLAGCA) != 0) {
        switch(to) {
            case this.def.SQUARES.C1:
                this.MovePiece(this.def.SQUARES.A1, this.def.SQUARES.D1);
			break;
            case this.def.SQUARES.C8:
                this.MovePiece(this.def.SQUARES.A8, this.def.SQUARES.D8);
			break;
            case this.def.SQUARES.G1:
                this.MovePiece(this.def.SQUARES.H1, this.def.SQUARES.F1);
			break;
            case this.def.SQUARES.G8:
                this.MovePiece(this.def.SQUARES.H8, this.def.SQUARES.F8);
			break;
            default: break;
        }
    }	
	
	if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) this.bd.HASH_EP();
    this.bd.HASH_CA();
	
	this.bd.brd_history[this.bd.brd_hisPly].move = move;
    this.bd.brd_history[this.bd.brd_hisPly].fiftyMove = this.bd.brd_fiftyMove;
    this.bd.brd_history[this.bd.brd_hisPly].enPas = this.bd.brd_enPas;
    this.bd.brd_history[this.bd.brd_hisPly].castlePerm = this.bd.brd_castlePerm;

    this.bd.brd_castlePerm &= this.def.CastlePerm[from];
    this.bd.brd_castlePerm &= this.def.CastlePerm[to];
    this.bd.brd_enPas = this.def.SQUARES.NO_SQ;

	this.bd.HASH_CA();
	
	var captured = this.def.CAPTURED(move);
    this.bd.brd_fiftyMove++;
	
	if(captured != this.def.PIECES.EMPTY) {
        this.ClearPiece(to);
        this.bd.brd_fiftyMove = 0;
    }
	
	this.bd.brd_hisPly++;
	this.bd.brd_ply++;
	
	if(this.def.PiecePawn[this.bd.brd_pieces[from]] == this.def.BOOL.TRUE) {
        this.bd.brd_fiftyMove = 0;
        if( (move & this.def.MFLAGPS) != 0) {
            if(side==this.def.COLOURS.WHITE) {
                this.bd.brd_enPas=from+10;
            } else {
                this.bd.brd_enPas=from-10;
            }
            this.bd.HASH_EP();
        }
    }
	
	this.MovePiece(from, to);
	
	var prPce = this.def.PROMOTED(move);
    if(prPce != this.def.PIECES.EMPTY)   {       
        this.ClearPiece(to);
        this.AddPiece(to, prPce);
    }
		
	this.bd.brd_side ^= 1;
    this.bd.HASH_SIDE();
	
	
	if(this.bd.SqAttacked(this.bd.brd_pList[this.def.PCEINDEX(this.def.Kings[side],0)], this.bd.brd_side))  {
        this.TakeMove();
        return this.def.BOOL.FALSE;
    }
	
	return this.def.BOOL.TRUE;	
}


  TakeMove() {		
	
	this.bd.brd_hisPly--;
    this.bd.brd_ply--;
	
    var move = this.bd.brd_history[this.bd.brd_hisPly].move;
    var from = this.def.FROMSQ(move);
    var to = this.def.TOSQ(move);	
	
	if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) this.bd.HASH_EP();
    this.bd.HASH_CA();

    this.bd.brd_castlePerm = this.bd.brd_history[this.bd.brd_hisPly].castlePerm;
    this.bd.brd_fiftyMove = this.bd.brd_history[this.bd.brd_hisPly].fiftyMove;
    this.bd.brd_enPas = this.bd.brd_history[this.bd.brd_hisPly].enPas;

    if(this.bd.brd_enPas != this.def.SQUARES.NO_SQ) this.bd.HASH_EP();
    this.bd.HASH_CA();

    this.bd.brd_side ^= 1;
    this.bd.HASH_SIDE();
	
	if( (this.def.MFLAGEP & move) != 0) {
        if(this.bd.brd_side == this.def.COLOURS.WHITE) {
            this.AddPiece(to-10, this.def.PIECES.bP);
        } else {
            this.AddPiece(to+10, this.def.PIECES.wP);
        }
    } else if( (this.def.MFLAGCA & move) != 0) {
        switch(to) {
            case this.def.SQUARES.C1: this.MovePiece(this.def.SQUARES.D1, this.def.SQUARES.A1); break;
            case this.def.SQUARES.C8: this.MovePiece(this.def.SQUARES.D8, this.def.SQUARES.A8); break;
            case this.def.SQUARES.G1: this.MovePiece(this.def.SQUARES.F1, this.def.SQUARES.H1); break;
            case this.def.SQUARES.G8: this.MovePiece(this.def.SQUARES.F8, this.def.SQUARES.H8); break;
            default: break;
        }
    }
	
	this.MovePiece(to, from);
	
	var captured = this.def.CAPTURED(move);
    if(captured != this.def.PIECES.EMPTY) {      
        this.AddPiece(to, captured);
    }
	
	if(this.def.PROMOTED(move) != this.def.PIECES.EMPTY)   {        
        this.ClearPiece(from);
        this.AddPiece(from, (this.def.PieceCol[this.def.PROMOTED(move)] == this.def.COLOURS.WHITE ? this.def.PIECES.wP : this.def.PIECES.bP));
    }
}

}
