package com.chess.Shahmat.support.chessfiles.pgn;

import com.chess.Shahmat.game.Game;
import com.chess.Shahmat.master.Master;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;


public class Pgn {

    class PgnToBean {
        private Game game;
        private Master whitePlayer;
        private Master blackPlayer;

        public PgnToBean(Game game, Master whitePlayer, Master blackPlayer) {
            this.game = game;
            this.whitePlayer = whitePlayer;
            this.blackPlayer = blackPlayer;
        }
    }

    public ArrayList<PgnFormat> readFile(String filename) {

        PgnFormat pgn = new PgnFormat();
        ArrayList<PgnFormat> games = new ArrayList<>();

        try (FileReader fileReader = new FileReader(filename)) {

            String line;
            BufferedReader reader = new BufferedReader(fileReader);

            while ((line = reader.readLine()) != null) {
                pgn.setLine(line);
                if (pgn.checkLineForResult()) {
                    pgn.splitEndResultFromPgn(line);
                    games.add(pgn);
                    pgn = new PgnFormat();
                } else if (pgn.checkCondition()) {
                    pgn.addPlayer();
                    pgn.addOpening();
                    pgn.addPgn(line);
                }

            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return games;
    }


}
