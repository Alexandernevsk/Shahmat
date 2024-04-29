import React, { useContext } from "react";
import "../style/cell-styles.css";
import PropTypes from "prop-types";
import { isLightSquare } from "../functions/light-square";
import { Cell as BoardCell } from "../functions/create-board";
import Piece from "./Piece";
import { GameContext } from "../context/GameContext";

const Cell = ({ cell, index, makeMove, setFromPos }) => {
  const light = isLightSquare(cell.pos, index);

  const { possibleMoves } = useContext(GameContext);
  const isPossibleMove = possibleMoves.includes(cell.pos);

  const handleDrop = () => {
    makeMove(cell.pos);
  };

  return (
    <div
      className={`cell ${light ? "light" : "dark"}`}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className={`overlay ${isPossibleMove && "possible-move"}`}>
        <Piece pos={cell.pos} name={cell.piece} setFromPos={setFromPos} />
      </div>
    </div>
  );
};

Cell.prototype = {
  cell: PropTypes.instanceOf(BoardCell).isRequired,
  index: PropTypes.number.isRequired,
  makeMove: PropTypes.func,
  setFromPos: PropTypes.func,
};

export default Cell;
