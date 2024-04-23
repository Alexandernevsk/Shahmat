package com.chess.Shahmat.enumtype;

public enum Result {
    //Determines loss or win from the perspective of the white player;
    DRAW("1/2-1/2"), WIN("1-0"), LOSS("0-1");
    private final String notation;

    Result(String notation) {
        this.notation = notation;
    }

    @Override
    public String toString() {
        return this.notation;
    }

}
