package com.chess.Shahmat.support;


import com.chess.Shahmat.game.Game;
import com.chess.Shahmat.game.GameRepository;
import com.chess.Shahmat.master.Master;
import com.chess.Shahmat.master.MasterRepository;
import com.chess.Shahmat.support.chessfiles.pgn.Pgn;
import com.chess.Shahmat.support.chessfiles.pgn.PgnFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Seeder implements CommandLineRunner {

    //Seed Signal
    public static final String GREEN = "\u001B[32m";
    public static final String YELLOW = "\u001B[33m";
    public static final String RESET = "\u001B[0m";

    //files
    @Value("${karpov_pgn.dir}")
    public String karpovPgn;

    //Repos
    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private MasterRepository masterRepository;

    @Override
    public void run(String... args) throws Exception {
        signal("Now Seeding");
        seedKarpovMoves();
    }

    public void seedKarpovMoves() {
        danger("Seeding Karpov Moves");
        Pgn pgn = new Pgn();
        List<PgnFormat> pgnFormatKarpov = pgn.readFile(karpovPgn);
        System.out.println();

        for (PgnFormat item : pgnFormatKarpov) {

            var whitePlayer = new Master(item.getWhitePlayer().getFirstName(), item.getWhitePlayer().getLastName());
            var blackPlayer = new Master(item.getBlackPlayer().getFirstName(), item.getBlackPlayer().getLastName());

            if (playerIsNotPresent(whitePlayer)) {
                masterRepository.save(whitePlayer);
            }

            if (playerIsNotPresent(blackPlayer)) {
                masterRepository.save(blackPlayer);
            }



            var whitePlayerInDatabase = masterRepository.findByLastName(whitePlayer.getLastName()).get();
            var blackPlayerInDatabase = masterRepository.findByLastName(blackPlayer.getLastName()).get();

            gameRepository.save(new Game(whitePlayerInDatabase, blackPlayerInDatabase, item.getPgn().toString().trim(), item.getOpening()));

        }


    }


    public boolean playerIsNotPresent(Master master) {
        return masterRepository.findByLastName(master.getLastName()).isEmpty();
    }


    public static void signal(String input) {
        System.out.println(GREEN + input + RESET);
    }

    public static void danger(String input) {
        System.out.println(YELLOW + input + RESET);
    }
}
