import { useState } from "react";

export const Tile = ({ rank, file, piece }) => {
  
  const blackOrWhiteTile = (rank, file) => {
    const num = rank + file + 2;
    return num % 2 == 0 ? "tile white-tile" : "tile black-tile";
  };


  return (
    <span
      className={blackOrWhiteTile(
        rank,
        file.codePointAt(0) - "a".codePointAt(0)
      )}
      id={`${file + "" + rank}`}
    >
      {piece === undefined ? (
        ""
      ) : (
        <img className="piece" src={piece.getImage()}/>
      )}
    </span>
  );
};
