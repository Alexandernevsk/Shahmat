import React from "react";
import "../style/boardStyle.css";
import { ChessBoard } from "../components/ChessBoard";

export const BoardPage = () => {

  return (
    <div className="board-container">
        <ChessBoard />
    </div>
  );
};
