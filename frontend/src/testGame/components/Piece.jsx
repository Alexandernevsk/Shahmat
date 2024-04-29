import React, { useRef } from "react";
import PropTypes from "prop-types";

const Piece = ({ name, pos, setFromPos }) => {
  const color = name === name.toUpperCase() ? "w" : "b";
  const imageName = color + name.toUpperCase();
  const element = useRef();

  let image;

  if (name) {
    image = `src/icons/pieces/${imageName}.png`;
  } else {
    image = "src/icons/pieces/empty.png";
  }

  const handleDragStart = () => {
    setFromPos(pos);
    setTimeout(() => {
      element.current.style.display = "none";
    }, 0);
  };
  const handleDragEnd = () => {
    element.current.style.display = "block";
  };

  return (
    <img
      className="piece"
      src={image}
      alt=""
      draggable={true}
      ref={element}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  );
};

Piece.prototype = {
  name: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
  setFromPos: PropTypes.func.isRequired,
};
export default Piece;
