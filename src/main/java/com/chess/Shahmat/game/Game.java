package com.chess.Shahmat.game;

import com.chess.Shahmat.master.Master;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Game {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 2500)
    private String pgn;

    private String ECO_Code;
    @ManyToOne
    private Master whitePlayer;
    @ManyToOne
    private Master blackPlayer;

    public Game(Master whitePlayer, Master blackPlayer, String pgn, String ECO_Code) {
        this.pgn = pgn;
        this.whitePlayer = whitePlayer;
        this.blackPlayer = blackPlayer;
        this.ECO_Code = ECO_Code;
    }
}