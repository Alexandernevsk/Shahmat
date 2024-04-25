import React from "react";
import "./board-style.css";
import PropTypes from "prop-types";
import { Cell } from "./Cell";

const TestBoard = ({ cells, ...props }) => {
  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell cell={cell} index={index} key={cell.position} {...props} />
      ))}
    </div>
  );
};

TestBoard.prototype = {
  cells: PropTypes.array.isRequired,
  makeMove: PropTypes.func,
  setFromPos: PropTypes.func,
};
export default TestBoard;
