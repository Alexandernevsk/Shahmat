import { Piece } from "./Piece";

export class Rook extends Piece {
    constructor(color, rank, file){
        super(color, rank, file, "rook");
    }
}