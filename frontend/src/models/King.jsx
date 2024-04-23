import { Piece } from "./Piece";

export class King extends Piece {
  constructor(color, rank, file) {
    super(color, rank, file, "king");
  }
}
