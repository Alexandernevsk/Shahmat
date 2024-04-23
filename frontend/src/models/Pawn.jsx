import { Piece } from "./Piece";

export class Pawn extends Piece {
  constructor(color, rank, file) {
    super(color, rank, file, "pawn")
  }
}