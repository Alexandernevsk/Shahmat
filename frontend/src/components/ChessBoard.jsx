import { Tile } from "../components/Tile";
import { Board } from "../models/Board";
import { useState } from "react";

export const ChessBoard = () => {
  const [board, setBoard] = useState(new Board());
  let activePiece = null;

  const click = (e) => {
    let changePiece = board.getPiece(2, "e");
    changePiece.rank = 4;
    console.log(board.pieces);
    console.log(changePiece);
    setBoard(board.copy());
  };

  const parseId = (square) => {
    return board.getPiece(square.charAt(1), square.charAt(0));
  };

  const grabPiece = (e) => {
    const element = e.target;
    if (element.classList.contains("piece")) {
      e.preventDefault();
      element.style.cursor = "grab";
      const x = e.clientX - 30;
      const y = e.clientY - 25;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      activePiece = element;
    }
  };

  const movePiece = (e) => {
    if (activePiece) {
      activePiece.style.cursor = "grabbing ";
      const x = e.clientX - 30;
      const y = e.clientY - 25;
      activePiece.style.position = "absolute";
      activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;
    }
  };

  const dropPiece = (e) => {
    if (activePiece) {
      activePiece.style.cursor = "grab";
      activePiece = null;
    }
  };

  return (
    <div
      className="board-grid"
      onMouseDown={(e) => grabPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
    >
      <div className="board-grid">
        {board.rank.map((rank) =>
          board.file.map((file) => {
            let piece = board.getPiece(rank, file);
            return (
              <Tile
                key={file + "" + rank}
                rank={rank}
                file={file}
                piece={piece !== undefined ? piece : undefined}
                board={board}
              />
            );
          })
        )}
        <button onClick={click}> CLICK ME </button>
      </div>
    </div>
  );
};
