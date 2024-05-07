import React, { useState, useRef, useEffect, useContext } from "react";
import { Chess } from "chess.js";
import { createBoard } from "./functions/create-board";
import Board from "./components/Board";
import { GameContext } from "./context/GameContext";
import { types } from "./context/actions";
import { resolve } from "./functions/resolve";
import { GameOver } from "./components/GameOver";

const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export const Game = () => {
  const [fen, setFen] = useState(FEN);
  const { current: chess } = useRef(new Chess(fen));
  const [board, setBoard] = useState(createBoard(fen));
  const { dispatch, gameOver } = useContext(GameContext);
  const fromPos = useRef();

  useEffect(() => {
    setBoard(createBoard(fen));
  }, [fen]);

  useEffect(() => {
    const [gameOver, status] = resolve(chess);

    if (gameOver) {
      dispatch({
        type: types.GAME_OVER,
        status,
        player: chess.turn(),
      });
    }

    dispatch({
      type: types.SET_TURN,
      player: chess.turn(),
      check: chess.inCheck(),
    });
  }, [fen, dispatch, chess]);

  const makeMove = (pos) => {
    const from = fromPos.current;
    const to = pos;
    chess.move({ from, to });
    dispatch({ type: types.CLEAR_POSSIBLE_MOVES });
    setFen(chess.fen());
  };

  const setFromPos = (pos) => {
    fromPos.current = pos;
    dispatch({
      type: types.SET_POSSIBLE_MOVES,
      moves: chess.moves({ square: pos }),
    });
  };

  if (gameOver) {
    return <GameOver />;
  }

  return (
    <div className="game">
      <Board cells={board} makeMove={makeMove} setFromPos={setFromPos} />
    </div>
  );
};
