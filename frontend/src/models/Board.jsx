import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

export class Board {
  constructor() {
    this.rank = Array(8)
      .fill(8)
      .map((x, y) => x - y);
    this.file = Array(8)
      .fill("a")  
      .map((x, y) => String.fromCodePoint(x.codePointAt(0) + y));
    this.pieces = [];
    this.standardPieceSetup();
  }

  standardPieceSetup = () => {
    this.rank.map((rank) => {
      this.file.map((file) => {
        const sidePieces = rank === 1 ? "white" : "black";
        switch (rank) {
          case 7:
          case 2:
            const pawn = new Pawn(rank == 2 ? "white" : "black", rank, file);
            this.addPiece(pawn);
            return pawn;
          case 8:
          case 1:
            switch (file) {
              case "b":
              case "g":
                const knight = new Knight(sidePieces, rank, file);
                this.addPiece(knight);
                return knight;
              case "c":
              case "f":
                const bishop = new Bishop(sidePieces, rank, file);
                this.addPiece(bishop);
                return bishop;
              case "a":
              case "h":
                const rook = new Rook(sidePieces, rank, file);
                this.addPiece(rook);
                return rook;
              case "d":
                const queen = new Queen(sidePieces, rank, file);
                this.addPiece(queen);
                return queen;
              case "e":
                const king = new King(sidePieces, rank, file);
                this.addPiece(king);
                return king;
            }
        }
      });
    });
  };

  addPiece(piece) {
    this.pieces.push(piece);
  }

  getPiece(number, letter) {
    let piece = this.pieces.filter(
      (piece) => number == piece.rank && letter == piece.file
    );
    if (piece.length === 1) {
      return piece[0];
    }
  }

  copy() {
    const copy = new Board();
    copy.pieces = this.pieces;
    return copy;
  }
}
