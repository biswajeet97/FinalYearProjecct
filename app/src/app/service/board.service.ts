import { Injectable } from '@angular/core';
import { DefService } from './def.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private def : DefService) { }

  brd_side = this.def.COLOURS.WHITE;
  brd_pieces = new Array(this.def.BRD_SQ_NUM);
  brd_enPas = this.def.SQUARES.NO_SQ;
  brd_fiftyMove;	
  brd_ply;
  brd_hisPly;	
  brd_castlePerm;	
  brd_posKey;	
  brd_pceNum = new Array(13);
  brd_material = new Array(2);	
  brd_pList = new Array(14 * 10);	

  brd_history = [];

  brd_bookLines = [];

  brd_moveList = new Array(this.def.MAXDEPTH * this.def.MAXPOSITIONMOVES);
  brd_moveScores = new Array(this.def.MAXDEPTH * this.def.MAXPOSITIONMOVES);
  brd_moveListStart = new Array(this.def.MAXDEPTH);

  brd_PvTable = [];	
  brd_PvArray = new Array(this.def.MAXDEPTH);
  brd_searchHistory = new Array(14 * this.def.BRD_SQ_NUM);
  brd_searchKillers = new Array(3 * this.def.MAXDEPTH);

  // board 
  SqFromAlg(moveAlg) {

    //console.log('SqFromAlg' + moveAlg);
    if(moveAlg.length != 2) return this.def.SQUARES.NO_SQ;
    
    if(moveAlg[0] > 'h' || moveAlg[0] < 'a' ) return this.def.SQUARES.NO_SQ;
    if(moveAlg[1] > '8' || moveAlg[1] < '1' ) return this.def.SQUARES.NO_SQ;
    
    var file = moveAlg[0].charCodeAt() - 'a'.charCodeAt(0);
    var rank = moveAlg[1].charCodeAt() - '1'.charCodeAt(0);	
    
    return this.def.FR2SQ(file,rank);		
  }
  
  PrintMoveList() {
    var index;
    var move;
    console.log("MoveList:");
    
    for(index = this.brd_moveListStart[this.brd_ply]; index < this.brd_moveListStart[this.brd_ply + 1]; ++index) {
    
      move = this.brd_moveList[index];	
      console.log("Move:" + (index+1) + " > " + this.PrMove(move));
      
    }
  }
  
  PrSq(sq) {
    var file = this.def.FilesBrd[sq];
    var rank = this.def.RanksBrd[sq];
    
    var sqStr = String.fromCharCode('a'.charCodeAt(0) + file) + String.fromCharCode('1'.charCodeAt(0) + rank);
    return sqStr;
  }
  
  PrMove(move) {
  
    var MvStr;
    
    var ff = this.def.FilesBrd[this.def.FROMSQ(move)];
    var rf = this.def.RanksBrd[this.def.FROMSQ(move)];
    var ft = this.def.FilesBrd[this.def.TOSQ(move)];
    var rt = this.def.RanksBrd[this.def.TOSQ(move)];
    
    MvStr = String.fromCharCode('a'.charCodeAt(0) + ff) + String.fromCharCode('1'.charCodeAt(0) + rf) + 
          String.fromCharCode('a'.charCodeAt(0) + ft) + String.fromCharCode('1'.charCodeAt(0) + rt)
          
    var promoted = this.def.PROMOTED(move);
    
    if(promoted != this.def.PIECES.EMPTY) {
      var pchar = 'q';
      if(this.def.PieceKnight[promoted] == this.def.BOOL.TRUE) {
        pchar = 'n';
      } else if(this.def.PieceRookQueen[promoted] == this.def.BOOL.TRUE && this.def.PieceBishopQueen[promoted] == this.def.BOOL.FALSE)  {
        pchar = 'r';
      } else if(this.def.PieceRookQueen[promoted] == this.def.BOOL.FALSE && this.def.PieceBishopQueen[promoted] == this.def.BOOL.TRUE)   {
        pchar = 'b';
      }
       MvStr += pchar;		
    } 	
    return MvStr;
  }
  
  // ParseMove(from, to) {
    
  //   this.gm.GenerateMoves();     
     
  //   var Move = this.def.NOMOVE;
  //   var PromPce = this.def.PIECES.EMPTY;
  //   var found = this.def.BOOL.FALSE;
  //   for(var index = this.brd_moveListStart[this.brd_ply]; index < this.brd_moveListStart[this.brd_ply + 1]; ++index) {	
  //     Move = this.brd_moveList[index];	
  //     if(this.def.FROMSQ(Move)==from && this.def.TOSQ(Move)==to) {
  //       PromPce = this.def.PROMOTED(Move);
  //       if(PromPce!=this.def.PIECES.EMPTY) {
  //         if( (PromPce==this.def.PIECES.wQ && this.brd_side== this.def.COLOURS.WHITE) || (PromPce==this.def.PIECES.bQ && this.brd_side== this.def.COLOURS.BLACK) ) {
  //           found = this.def.BOOL.TRUE;
  //           break;
  //         }
  //         continue;
  //       }
  //       found = this.def.BOOL.TRUE;
  //       break;
  //     }
  //     }
    
  //   if(found != this.def.BOOL.FALSE) {
  //     if(this.mv.MakeMove(Move) == this.def.BOOL.FALSE) {
  //       return this.def.NOMOVE;
  //     }
  //     this.mv.TakeMove();
  //     return Move;
  //   }
    
  //     return this.def.NOMOVE;	
  // }



  BoardToFen() {
    var fenStr = '';
    var rank,file,sq,piece;
    var emptyCount = 0;
    
    for( rank = this.def.RANKS.RANK_8; rank >= this.def.RANKS.RANK_1; rank--) {
      emptyCount = 0; 
      for(file = this.def.FILES.FILE_A; file <= this.def.FILES.FILE_H; file++) {
        sq = this.def.FR2SQ(file,rank);
        piece = this.brd_pieces[sq];
        if(piece == this.def.PIECES.EMPTY) {
          emptyCount++;
        } else {
          if(emptyCount!=0) {
            fenStr += String.fromCharCode('0'.charCodeAt(0) + emptyCount);
          }
          emptyCount = 0;
          fenStr += this.def.PceChar[piece];
        }
      }
      if(emptyCount!=0) {
        fenStr += String.fromCharCode('0'.charCodeAt(0) + emptyCount);
      }
      
      if(rank!=this.def.RANKS.RANK_1) {
        fenStr += '/'
      } else {
        fenStr += ' ';
      }
    }
    
    fenStr += this.def.SideChar[this.brd_side] + ' ';
    if(this.brd_enPas == this.def.SQUARES.NO_SQ) {
      fenStr += '- '
    } else {
      fenStr += this.PrSq(this.brd_enPas) + ' ';
    }
    
    if(this.brd_castlePerm == 0) {
      fenStr += '- '
    } else {
      if(this.brd_castlePerm & this.def.CASTLEBIT.WKCA) fenStr += 'K';
      if(this.brd_castlePerm & this.def.CASTLEBIT.WQCA) fenStr += 'Q';
      if(this.brd_castlePerm & this.def.CASTLEBIT.BKCA) fenStr += 'k';
      if(this.brd_castlePerm & this.def.CASTLEBIT.BQCA) fenStr += 'q';
    }
    fenStr += ' ';
    fenStr += this.brd_fiftyMove;
    fenStr += ' ';
    var tempHalfMove = this.brd_hisPly;
    if(this.brd_side == this.def.COLOURS.BLACK) {
      tempHalfMove--;
    }
    fenStr += tempHalfMove/2;	
    
    return fenStr;
  }

  CheckBoard() {   
  
    var t_pceNum = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var t_material = [ 0, 0];
    
    var sq64,t_piece,t_pce_num,sq120,colour,pcount;
    
    // check piece lists
    for(t_piece = this.def.PIECES.wP; t_piece <= this.def.PIECES.bK; ++t_piece) {
      for(t_pce_num = 0; t_pce_num < this.brd_pceNum[t_piece]; ++t_pce_num) {
        sq120 = this.brd_pList[this.def.PCEINDEX(t_piece,t_pce_num)];
        if(this.brd_pieces[sq120]!=t_piece) {
          console.log('Error Pce Lists');
          return this.def.BOOL.FALSE;
        }
      }	
    }
    
    // check piece count and other counters	
    for(sq64 = 0; sq64 < 64; ++sq64) {
      sq120 = this.def.SQ120(sq64);
      t_piece = this.brd_pieces[sq120];
      t_pceNum[t_piece]++;
      t_material[this.def.PieceCol[t_piece]] += this.def.PieceVal[t_piece];
    }
    
    for(t_piece = this.def.PIECES.wP; t_piece <= this.def.PIECES.bK; ++t_piece) {
      if(t_pceNum[t_piece]!=this.brd_pceNum[t_piece]) {
          console.log('Error t_pceNum');
          return this.def.BOOL.FALSE;
        }	
    }
    
    if(t_material[this.def.COLOURS.WHITE]!=this.brd_material[this.def.COLOURS.WHITE] || t_material[this.def.COLOURS.BLACK]!=this.brd_material[this.def.COLOURS.BLACK]) {
          console.log('Error this.def._material');
          return this.def.BOOL.FALSE;
        }		
    if(this.brd_side!=this.def.COLOURS.WHITE && this.brd_side!=this.def.COLOURS.BLACK) {
          console.log('Error this.brd_side');
          return this.def.BOOL.FALSE;
        }
    if(this.GeneratePosKey()!=this.brd_posKey) {
          console.log('Error brd_posKey');
          return this.def.BOOL.FALSE;
        }
    
    
    return this.def.BOOL.TRUE;	
  }

  printGameLine() {

    var moveNum = 0;
    var gameLine = "";
    for(moveNum = 0; moveNum < this.brd_hisPly; ++moveNum) {
      gameLine += this.PrMove(this.brd_history[moveNum].move) + " ";
    }
    console.log('Game Line: ' + gameLine);
    return gameLine;

  }

  LineMatch(BookLine,gameline) {
    console.log("Matching " + gameline + " with " + BookLine + " len = " + gameline.length);
    for(var len = 0; len < gameline.length; ++len) {
      console.log("Char Matching " + gameline[len] + " with " + BookLine[len]);
      if(len>=BookLine.length) { /*console.log('no match');*/ return this.def.BOOL.FALSE;	}	
      if(gameline[len] != BookLine[len]) { /*console.log('no match'); */return this.def.BOOL.FALSE;	}	
    }
    console.log('Match');
    return this.def.BOOL.TRUE;
  }

//   BookMove() {

//   var gameLine = this.printGameLine();
//   var bookMoves = [];
  
//   var lengthOfLineHack = gameLine.length;
//   var bookLineNum
//   if(gameLine.length == 0) lengthOfLineHack--;
  
//   for(bookLineNum = 0; bookLineNum <this.brd_bookLines.length; ++bookLineNum) {
    
//     if(this.LineMatch(this.brd_bookLines[bookLineNum],gameLine) == this.def.BOOL.TRUE) {
//       var move = this.brd_bookLines[bookLineNum].substr(lengthOfLineHack + 1, 4);
//       //console.log("Parsing book move:" + move);
//       if(move.length==4) {
//         var from = this.SqFromAlg(move.substr(0,2));
//         var to = this.SqFromAlg(move.substr(2,2));
//         //console.log('from:'+from+' to:'+to);
//         var varInternalMove = this.ParseMove(from,to);
//         //console.log("varInternalMove:" + PrMove(varInternalMove));
//         bookMoves.push(varInternalMove);
//       } 
//     }
      
//   }
  
//   console.log("Total + " + bookMoves.length + " moves in array");
  
//   if(bookMoves.length==0) return this.def.NOMOVE;
  
//   var num = Math.floor(Math.random()*bookMoves.length);
  
//   return bookMoves[num];
// }

  PrintPceLists() {
    var piece,pceNum;
    
    for(piece=this.def.PIECES.wP; piece <= this.def.PIECES.bK; ++piece) {
      for(pceNum = 0; pceNum < this.brd_pceNum[piece]; ++pceNum) {
        console.log("Piece " + this.def.PceChar[piece] + " on " + this.PrSq(this.brd_pList[this.def.PCEINDEX(piece,pceNum)]));
      }
    }

  }

  UpdateListsMaterial() {	
    
    var piece,sq,index,colour;
    
    for(index = 0; index < this.def.BRD_SQ_NUM; ++index) {
      sq = index;
      piece = this.brd_pieces[index];
      if(piece != this.def.SQUARES.OFFBOARD && piece != this.def.PIECES.EMPTY) {
        colour = this.def.PieceCol[piece];		
        
        this.brd_material[colour] += this.def.PieceVal[piece];
        
        this.brd_pList[this.def.PCEINDEX(piece,this.brd_pceNum[piece])] = sq;
        this.brd_pceNum[piece]++;			
      }
    }
  }

  GeneratePosKey() {

    var sq = 0;
    var finalKey = 0;
    var piece = this.def.PIECES.EMPTY;
    
    // pieces
    for(sq = 0; sq < this.def.BRD_SQ_NUM; ++sq) {
      piece = this.brd_pieces[sq];
      if(piece != this.def.PIECES.EMPTY && piece != this.def.SQUARES.OFFBOARD) {			
        finalKey ^= this.def.PieceKeys[(piece * 120) + sq];
      }		
    }
    
    if(this.brd_side == this.def.COLOURS.WHITE) {
      finalKey ^= this.def.SideKey;
    }
      
    if(this.brd_enPas != this.def.SQUARES.NO_SQ) {		
      finalKey ^= this.def.PieceKeys[this.brd_enPas];
    }
    
    finalKey ^= this.def.CastleKeys[this.brd_castlePerm];
    
    return finalKey;
  }

  PrintBoard() {
    
    var sq,file,rank,piece;

    console.log("\nGame Board:\n");
    
    for(rank = this.def.RANKS.RANK_8; rank >= this.def.RANKS.RANK_1; rank--) {
      var line =((rank+1) + "  ");
      for(file = this.def.FILES.FILE_A; file <= this.def.FILES.FILE_H; file++) {
        sq = this.def.FR2SQ(file,rank);
        piece = this.brd_pieces[sq];
        line += (" " + this.def.PceChar[piece] + " ");
      }
      console.log(line);
    }
    
    console.log("");
    line = "   ";
    for(file = this.def.FILES.FILE_A; file <= this.def.FILES.FILE_H; file++) {
      line += (' ' + String.fromCharCode('a'.charCodeAt(0) + file) + ' ');	
    }
    console.log(line);
    console.log("side:" + this.def.SideChar[this.brd_side] );
    console.log("enPas:" + this.brd_enPas);
    line = "";	
    if(this.brd_castlePerm & this.def.CASTLEBIT.WKCA) line += 'K';
    if(this.brd_castlePerm & this.def.CASTLEBIT.WQCA) line += 'Q';
    if(this.brd_castlePerm & this.def.CASTLEBIT.BKCA) line += 'k';
    if(this.brd_castlePerm & this.def.CASTLEBIT.BQCA) line += 'q';
    
    console.log("castle:" + line);
    console.log("key:" + this.brd_posKey.toString(16));
    //PrintPceLists();
  }

  ResetBoard() {

    var index = 0;
    
    for(index = 0; index < this.def.BRD_SQ_NUM; ++index) {
      this.brd_pieces[index] = this.def.SQUARES.OFFBOARD;
    }
    
    for(index = 0; index < 64; ++index) {
      this.brd_pieces[this.def.SQ120(index)] = this.def.PIECES.EMPTY;
    }
    
    for(index = 0; index < 14 * 120; ++index) {
      this.brd_pList[index] = this.def.PIECES.EMPTY;
    }
    
    for(index = 0; index < 2; ++index) {		
      this.brd_material[index] = 0;		
    }	
    
    for(index = 0; index < 13; ++index) {
      this.brd_pceNum[index] = 0;
    }
    
    this.brd_side = this.def.COLOURS.BOTH;
    this.brd_enPas = this.def.SQUARES.NO_SQ;
    this.brd_fiftyMove = 0;	
    this.brd_ply = 0;
    this.brd_hisPly = 0;	
    this.brd_castlePerm = 0;	
    this.brd_posKey = 0;
    this.brd_moveListStart[this.brd_ply] = 0;
    
  }

  ParseFen(fen) {
    
    var rank = this.def.RANKS.RANK_8;
    var file = this.def.FILES.FILE_A;
    var piece = 0;
    var count = 0;
    var i = 0; 
    var sq64 = 0; 
    var sq120 = 0;
    var fenCnt = 0;
    
    this.ResetBoard();
    
    while ((rank >= this.def.RANKS.RANK_1) && fenCnt < fen.length) {
        count = 1;
      switch (fen[fenCnt]) {
              case 'p': piece = this.def.PIECES.bP; break;
              case 'r': piece = this.def.PIECES.bR; break;
              case 'n': piece = this.def.PIECES.bN; break;
              case 'b': piece = this.def.PIECES.bB; break;
              case 'k': piece = this.def.PIECES.bK; break;
              case 'q': piece = this.def.PIECES.bQ; break;
              case 'P': piece = this.def.PIECES.wP; break;
              case 'R': piece = this.def.PIECES.wR; break;
              case 'N': piece = this.def.PIECES.wN; break;
              case 'B': piece = this.def.PIECES.wB; break;
              case 'K': piece = this.def.PIECES.wK; break;
              case 'Q': piece = this.def.PIECES.wQ; break;

              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8':
                  piece = this.def.PIECES.EMPTY;
                  count = fen[fenCnt].charCodeAt() - '0'.charCodeAt(0);
                  break;

              case '/':
              case ' ':
                  rank--;
                  file = this.def.FILES.FILE_A;
                  fenCnt++;
                  continue;              

              default:
                  console.log("FEN error \n");
                  return;
          }		
      
      for (i = 0; i < count; i++) {			
              sq64 = rank * 8 + file;
        sq120 = this.def.SQ120(sq64);
              if (piece != this.def.PIECES.EMPTY) {
                  this.brd_pieces[sq120] = piece;
              }
        file++;
          }
      fenCnt++;
    }	
    
    this.brd_side = (fen[fenCnt] == 'w') ? this.def.COLOURS.WHITE : this.def.COLOURS.BLACK;
    fenCnt += 2;
    for (i = 0; i < 4; i++) {
          if (fen[fenCnt] == ' ') {
              break;
          }		
      switch(fen[fenCnt]) {
        case 'K': this.brd_castlePerm |= this.def.CASTLEBIT.WKCA; break;
        case 'Q': this.brd_castlePerm |= this.def.CASTLEBIT.WQCA; break;
        case 'k': this.brd_castlePerm |= this.def.CASTLEBIT.BKCA; break;
        case 'q': this.brd_castlePerm |= this.def.CASTLEBIT.BQCA; break;
        default:	     break;
          }
      fenCnt++;
    }
    fenCnt++;	
    
    if (fen[fenCnt] != '-') {        
      file = fen[fenCnt].charCodeAt() - 'a'.charCodeAt(0);
      rank = fen[fenCnt+1].charCodeAt() - '1'.charCodeAt(0);	
      console.log("fen[fenCnt]:" + fen[fenCnt] + " File:" + file + " Rank:" + rank);	
      this.brd_enPas = this.def.FR2SQ(file,rank);		
      }
      
      this.brd_posKey = this.GeneratePosKey();
      this.UpdateListsMaterial();
  }

  SqAttacked(sq, side) {
    var pce;
    var t_sq;
    var index;
    
    if(side == this.def.COLOURS.WHITE) {
      if(this.brd_pieces[sq-11] == this.def.PIECES.wP || this.brd_pieces[sq-9] == this.def.PIECES.wP) {
        return this.def.BOOL.TRUE;
      }
    } else {
      if(this.brd_pieces[sq+11] == this.def.PIECES.bP || this.brd_pieces[sq+9] == this.def.PIECES.bP) {
        return this.def.BOOL.TRUE;
      }	
    }
    
    for(index = 0; index < 8; ++index) {		
      pce = this.brd_pieces[sq + this.def.KnDir[index]];
      if(pce != this.def.SQUARES.OFFBOARD && this.def.PieceKnight[pce] == this.def.BOOL.TRUE && this.def.PieceCol[pce] == side) {
        return this.def.BOOL.TRUE;
      }
    }
    
    for(index = 0; index < 4; ++index) {		
      var dir = this.def.RkDir[index];
      t_sq = sq + dir;
      pce = this.brd_pieces[t_sq];
      while(pce != this.def.SQUARES.OFFBOARD) {
        if(pce != this.def.PIECES.EMPTY) {
          if(this.def.PieceRookQueen[pce] == this.def.BOOL.TRUE && this.def.PieceCol[pce] == side) {
            return this.def.BOOL.TRUE;
          }
          break;
        }
        t_sq += dir;
        pce = this.brd_pieces[t_sq];
      }
    }
    
    for(index = 0; index < 4; ++index) {		
      dir = this.def.BiDir[index];
      t_sq = sq + dir;
      pce = this.brd_pieces[t_sq];
      while(pce != this.def.SQUARES.OFFBOARD) {
        if(pce != this.def.PIECES.EMPTY) {
          if(this.def.PieceBishopQueen[pce] == this.def.BOOL.TRUE && this.def.PieceCol[pce] == side) {
            return this.def.BOOL.TRUE;
          }
          break;
        }
        t_sq += dir;
        pce = this.brd_pieces[t_sq];
      }
    }
    
    for(index = 0; index < 8; ++index) {		
      pce = this.brd_pieces[sq + this.def.KiDir[index]];
      if(pce != this.def.SQUARES.OFFBOARD && this.def.PieceKing[pce] == this.def.BOOL.TRUE && this.def.PieceCol[pce] == side) {
        return this.def.BOOL.TRUE;
      }
    }
    
    return this.def.BOOL.FALSE;
  }

  PrintSqAttacked() {
    
    var sq,file,rank,piece;

    console.log("\nAttacked:\n");
    
    for(rank = this.def.RANKS.RANK_8; rank >= this.def.RANKS.RANK_1; rank--) {
      var line =((rank+1) + "  ");
      for(file = this.def.FILES.FILE_A; file <= this.def.FILES.FILE_H; file++) {
        sq = this.def.FR2SQ(file,rank);
        if(this.SqAttacked(sq, this.def.COLOURS.BLACK) == this.def.BOOL.TRUE) piece = "X";
        else piece = "-";
          line += (" " + " ");
      }
      console.log(line);
    }
    
    console.log("");
  }
  HASH_PCE(pce,sq) { 
    this.brd_posKey ^= this.def.PieceKeys[pce*120 + sq]; 
  }
  HASH_CA() { this.brd_posKey ^= this.def.CastleKeys[this.brd_castlePerm]; }
  HASH_SIDE() { this.brd_posKey ^= this.def.SideKey; }
  HASH_EP() { this.brd_posKey ^= this.def.PieceKeys[this.brd_enPas]; }
}
