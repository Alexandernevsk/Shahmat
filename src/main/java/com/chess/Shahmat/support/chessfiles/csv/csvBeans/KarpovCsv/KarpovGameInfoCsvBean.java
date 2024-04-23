package com.chess.Shahmat.support.chessfiles.csv.csvBeans.KarpovCsv;

import com.chess.Shahmat.support.chessfiles.csv.csvBeans.CsvBeanGameInfo;
import com.opencsv.bean.CsvBindByName;

public class KarpovGameInfoCsvBean extends CsvBeanGameInfo {
    @CsvBindByName
    private String game_id;
    @CsvBindByName
    private String white;
    @CsvBindByName
    private String black;
    @CsvBindByName
    private String result;
    @CsvBindByName
    private String eco;

    @Override
    public String getGameId() {
        return game_id;
    }

    @Override
    public String getEco() {
        return eco;
    }

    @Override
    public String getWhite() {
        return white;
    }

    @Override
    public String getBlack() {
        return black;
    }

    @Override
    public String getResult() {
        return result;
    }
}
