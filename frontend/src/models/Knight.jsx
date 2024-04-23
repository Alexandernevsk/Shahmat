import { Piece } from "./Piece";

export class Knight extends Piece {
  constructor(color, rank, file) {
    super(color, rank, file, "knight");
  }
}
