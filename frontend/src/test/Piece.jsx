import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./piece-style.css";

const Piece = ({ name, position, setFromPos }) => {
  const color = name === name.toUpperCase() ? "white" : "black";
  const element = useRef();
  const pieceName = () => {
    let image;
    switch (name.toLowerCase()) {
      case "p":
        image = "pawn";
        break;
      case "r":
        image = "rook";
        break;
      case "b":
        image = "bishop";
        break;
      case "n":
        image = "knight";
        break;
      case "q":
        image = "queen";
        break;
      case "k":
        image = "king";
        break;
      default:
        return null;
    }
    return `src/icons/pieces/${color}/${color} ${image}.png`;
  };

  const handleDragStart = () => {
    setFromPos(position);
    setTimeout(() => {
      element.current.style.disply = "none";
    }, 0);
  };

  const handleDragEnd = () => {
    element.current.style.display = "block";
  };

  let image = pieceName(name);

  return image ? (
    <img
      src={image}
      alt=""
      draggable={true}
      className="piece"
      ref={element}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  ) : (
    <p></p>
  );
};

Piece.prototype = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setFromPos: PropTypes.func.isRequired,
};

export default Piece;
