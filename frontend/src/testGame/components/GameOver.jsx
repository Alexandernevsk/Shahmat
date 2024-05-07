import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Layout } from "./Layout";
import "../style/gameover-styles.css";

export const GameOver = () => {
  const { status, turn } = useContext(GameContext);
  let winner;

  if (status === "checkmate") {
    if (turn === "b") {
      winner = "white";
    } else {
      winner = "black";
    }
  }
  const Content = () => (
    <React.Fragment>
      <h1>Game over</h1>
      <p>
        The game ended in a <mark>{status}</mark>
      </p>
      {winner && (
        <p>
          <mark>{winner}</mark> won
        </p>
      )}
      <img src={"src/icons/play_again.png"} alt="play again" className="img" />
      <button>Play Again</button>
    </React.Fragment>
  );

  const Image = () => (
    <img className="bg-img" src={"src/icons/game_over.png"} alt="game over" />
  );
  return <Layout Image={Image} Content={Content} />;
};
