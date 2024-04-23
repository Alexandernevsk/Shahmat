import { Piece } from "./Piece";

export class Queen extends Piece {
    constructor(color, rank, file){
        super(color, rank, file, "queen");
    }
}