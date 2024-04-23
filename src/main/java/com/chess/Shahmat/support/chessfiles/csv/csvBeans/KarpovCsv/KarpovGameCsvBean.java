package com.chess.Shahmat.support.chessfiles.csv.csvBeans.KarpovCsv;

import com.chess.Shahmat.support.chessfiles.csv.csvBeans.CsvBean;
import com.opencsv.bean.CsvBindByName;


public class KarpovGameCsvBean extends CsvBean {
    //Player
    public static final String FIRST_NAME = "Anatoly";
    public static final String LAST_NAME = "Karpov";
    //General Info
    @CsvBindByName(column = "player")
    private String name;
    @CsvBindByName
    private String game_id;
    @CsvBindByName
    private String notation;
    @CsvBindByName
    private String color;
    @CsvBindByName
    private String piece;

    //Gradual game-progression
    @CsvBindByName
    private String move_sequence;

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getColor() {
        return color;
    }

    @Override
    public String getMove() {
        return notation;
    }

    @Override
    public String getPiece() {
        return piece;
    }

    @Override
    public String getGameId() {
        return game_id;
    }

    @Override
    public String getMoveSequence() {
        return move_sequence;
    }

    @Override
    public boolean checkPlayerName(String name) {
        return name.contains(FIRST_NAME) || name.contains(LAST_NAME);
    }

    @Override
    public void setPgn(String line) {
        this.move_sequence = line;
    }

    @Override
    public String toString() {
        return String.format("Name : %s, Move : %s, Piece: %s, Color : %s", name, notation, piece, color);
    }

}
