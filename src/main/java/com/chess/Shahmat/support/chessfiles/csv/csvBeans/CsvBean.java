package com.chess.Shahmat.support.chessfiles.csv.csvBeans;

public abstract class CsvBean {
  public abstract String getName();

  public abstract String getColor();

  public abstract String getMove();

  public abstract String getPiece();

  public abstract String getGameId();

  public abstract String getMoveSequence();

  public abstract boolean checkPlayerName(String name);
  public abstract void setPgn(String line);

}
