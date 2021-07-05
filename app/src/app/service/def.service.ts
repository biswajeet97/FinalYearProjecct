import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefService {
  
  PIECES =  { EMPTY : 0, wP : 1, wN : 2, wB : 3,wR : 4, wQ : 5, wK : 6, bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK : 12  };
  BRD_SQ_NUM = 120;

  MAXGAMEMOVES = 2048;
  MAXPOSITIONMOVES = 256;
  MAXDEPTH = 64;

  INFINITE = 30000;
  MATE = 29000;

  START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";


  FILES =  { FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8 };
  RANKS =  { RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8 };

  COLOURS = { WHITE:0, BLACK:1, BOTH:2 };

  SQUARES = {
    A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27, H1:28,  
    A8:91, B8:92, C8:93, D8:94, E8:95, F8:96, G8:97, H8:98, NO_SQ:99, OFFBOARD:100
  };

  BOOL = { FALSE:0, TRUE:1 };

  CASTLEBIT = { WKCA : 1, WQCA : 2, BKCA : 4, BQCA : 8 };

  FilesBrd = new Array(this.BRD_SQ_NUM);
  RanksBrd = new Array(this.BRD_SQ_NUM);

  Sq120ToSq64 = new Array(this.BRD_SQ_NUM);
  Sq64ToSq120 = new Array(64);

  PceChar = ".PNBRQKpnbrqk";
  SideChar = "wb-";
  RankChar = "12345678";
  FileChar = "abcdefgh";

  PieceBig = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE ];
  PieceMaj = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE ];
  PieceMin = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE ];
  PieceVal= [ 0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000  ];
  PieceCol = [ this.COLOURS.BOTH, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE, this.COLOURS.WHITE,
    this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK, this.COLOURS.BLACK ];
    
  PiecePawn = [ this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE ];	
  PieceKnight = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE ];
  PieceKing = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE ];
  PieceRookQueen = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE ];
  PieceBishopQueen = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.FALSE ];
  PieceSlides = [ this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.FALSE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.TRUE, this.BOOL.FALSE ];

  KnDir = [ -8, -19,	-21, -12, 8, 19, 21, 12 ];
  RkDir = [ -1, -10,	1, 10 ];
  BiDir = [ -9, -11, 11, 9 ];
  KiDir = [ -1, -10,	1, 10, -9, -11, 11, 9 ];

  DirNum = [ 0, 0, 8, 4, 4, 8, 8, 0, 8, 4, 4, 8, 8 ];
  PceDir = [0, 0, this.KnDir, this.BiDir, this.RkDir, this.KiDir, this.KiDir, 0, this.KnDir, this.BiDir, this.RkDir, this.KiDir, this.KiDir ];
  LoopSlidePce = [ this.PIECES.wB, this.PIECES.wR, this.PIECES.wQ, 0, this.PIECES.bB, this.PIECES.bR, this.PIECES.bQ, 0 ];
  LoopNonSlidePce = [ this.PIECES.wN, this.PIECES.wK, 0, this.PIECES.bN, this.PIECES.bK, 0 ];
  LoopSlideIndex = [ 0, 4 ];
  LoopNonSlideIndex = [ 0, 3 ];
  Kings = [this.PIECES.wK, this.PIECES.bK];

  PieceKeys = new Array(14 * 120);
  SideKey;
  CastleKeys = new Array(16);

  Mirror64 = [
  56	,	57	,	58	,	59	,	60	,	61	,	62	,	63	,
  48	,	49	,	50	,	51	,	52	,	53	,	54	,	55	,
  40	,	41	,	42	,	43	,	44	,	45	,	46	,	47	,
  32	,	33	,	34	,	35	,	36	,	37	,	38	,	39	,
  24	,	25	,	26	,	27	,	28	,	29	,	30	,	31	,
  16	,	17	,	18	,	19	,	20	,	21	,	22	,	23	,
  8	,	9	,	10	,	11	,	12	,	13	,	14	,	15	,
  0	,	1	,	2	,	3	,	4	,	5	,	6	,	7
  ];

  CastlePerm = [
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 13, 15, 15, 15, 12, 15, 15, 14, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15,  7, 15, 15, 15,  3, 15, 15, 11, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
      15, 15, 15, 15, 15, 15, 15, 15, 15, 15
  ];
  this: any;


  /*                         	                        
  0000 0000 0000 0000 0000 0111 1111 -> From 0x7F
  0000 0000 0000 0011 1111 1000 0000 -> To >> 7, 0x7F
  0000 0000 0011 1100 0000 0000 0000 -> Captured >> 14, 0xF
  0000 0000 0100 0000 0000 0000 0000 -> EP 0x40000
  0000 0000 1000 0000 0000 0000 0000 -> Pawn Start 0x80000
  0000 1111 0000 0000 0000 0000 0000 -> Promoted Piece >> 20, 0xF
  0001 0000 0000 0000 0000 0000 0000 -> Castle 0x1000000
  */

  FROMSQ(m) { return (m & 0x7F); }
  TOSQ(m)  { return (((m)>>7) & 0x7F); }
  CAPTURED(m)  { return (((m)>>14) & 0xF); }
  PROMOTED(m)  { return (((m)>>20) & 0xF); }

  MFLAGEP = 0x40000
  MFLAGPS = 0x80000
  MFLAGCA = 0x1000000

  MFLAGCAP = 0x7C000
  MFLAGPROM = 0xF00000

  NOMOVE = 0

  PVENTRIES = 10000;

  PCEINDEX(pce, pceNum) {
    return (pce * 10 + pceNum);
  }

  FR2SQ(f,r) {
    return ( (21 + (f) ) + ( (r) * 10 ) );
  }

  SQ64(sq120) { 
    return this.Sq120ToSq64[(sq120)];
  }

  SQ120(sq64) {
    return this.Sq64ToSq120[(sq64)];
  }

  MIRROR64(sq) {
    return this.Mirror64[sq];
  }

  RAND_32() {

    return (Math.floor((Math.random()*255)+1) << 23) | (Math.floor((Math.random()*255)+1) << 16)
      | (Math.floor((Math.random()*255)+1) << 8) | Math.floor((Math.random()*255)+1);

  }

  SQOFFBOARD(sq) {
    if(this.FilesBrd[sq]==this.SQUARES.OFFBOARD) return this.BOOL.TRUE;
    return this.BOOL.FALSE;	
  }
  GameController = {
    EngineSide : this.COLOURS.BOTH,
    PlayerSide : this.COLOURS.BOTH,
    BoardFlipped : this.BOOL.FALSE,
    GameOver : this.BOOL.FALSE,
    BookLoaded : this.BOOL.FALSE,
    GameSaved : this.BOOL.TRUE,
  };
  

}
