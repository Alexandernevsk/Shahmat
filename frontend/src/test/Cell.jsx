import React from "react";
import "./cell-style.css";
import Piece from "./Piece";
import PropTypes from "prop-types";
import { Tile as BoardCell } from "../components/Tile";

export const Cell = ({ cell, index, makeMove, setFromPos }) => {
  const isLightSquare = (position, index) => {
    const row = position[1];
    const isEven = (x) => !(x % 2);

    if (isEven(row) && !isEven(index + 1)) {
      return true;
    }

    if (isEven(index + 1) && !isEven(row)) {
      return true;
    }
    return false;
  };

  const handleDrop = () => {
    makeMove(cell.position);
  };

  return (
    <div
      className={`cell ${
        isLightSquare(cell.position, index) ? "light" : "dark"
      }`}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Piece
        name={cell.piece}
        position={cell.position}
        setFromPos={setFromPos}
      />
    </div>
  );
};

Cell.prototype = {
  cell: PropTypes.instanceOf(BoardCell).isRequired,
  index: PropTypes.number.isRequired,
  makeMove: PropTypes.func,
  setFromPos: PropTypes.func,
};
