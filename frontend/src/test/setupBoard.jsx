import { Chess } from "chess.js";
import React, { useEffect, useRef, useState } from "react";
import TestBoard from "./TestBoard";

export const Test = () => {
  const [fen, setFen] = useState(defaultPosition);
  const { current: chess } = useRef(new Chess(fen));
  const [board, setBoard] = useState(createBoard(fen));

  useEffect(() => {
    setBoard(createBoard(fen));
  }, [fen]);

  return (
    <div className="game">
      <TestBoard cells={board} />
    </div>
  );
};

const defaultPosition =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
function range(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

function createBoard(fen) {
  const fenPiecePos = fen.split(" ")[0].split("/").join("");
  const ranks = range(8)
    .map((n) => n.toString())
    .reverse();
  const files = range(8).map((n) =>
    String.fromCodePoint("a".charCodeAt(0) + (n - 1))
  );

  let pieces = Array.from(fenPiecePos);
  Array.from(fenPiecePos).forEach((item, index) => {
    if (isFinite(item)) {
      pieces.splice(index, 1, range(item).fill(""));
    }
  });
  pieces = pieces.flat();
  const tiles = [];
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < files.length; j++) {
      const letter = files[j];
      const rank = ranks[i];
      tiles.push(letter + rank);
    }
  }

  const board = [];
  for (let i = 0; i < tiles.length; i++) {
    const piece = pieces[i];
    const tile = tiles[i];
    board.push(new Tile(piece, tile));
  }

  return board;
}

class Tile {
  constructor(piece, position) {
    this.piece = piece;
    this.position = position;
  }
}
