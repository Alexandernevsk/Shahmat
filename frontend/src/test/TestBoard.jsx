import React from "react";
import "./board-style.css";

const TestBoard = ({ cells }) => {
  return (
    <div className="board">
      {cells.map((cell) => (
        <div key={cell.position}>{cell.position}</div>
      ))}
    </div>
  );
};

export default TestBoard;
