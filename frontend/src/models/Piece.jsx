export class Piece {
  constructor(color, rank, file, pieceType) {
    this.color = color;
    this.rank = rank;
    this.file = file;
    this.pieceType = pieceType;
  }

  getImage(){
    return `src/icons/pieces/${this.color}/${this.color} ${this.pieceType}.png`
  }
}
