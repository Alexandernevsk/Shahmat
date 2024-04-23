import { Piece } from "./Piece";

export class Bishop extends Piece {
  constructor(color, rank, file) {
    super(color, rank, file, "bishop");
  }
}
