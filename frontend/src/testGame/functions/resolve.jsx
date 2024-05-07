// chess.isCheckmate
// chess.isThreefoldRepetition
// chess.isInsufficientMaterial
// chess.isStalemate
// chess.isDraw
// chess.isGameOver

export const resolve = (chess) => {
  if (!chess.isGameOver()) {
    return [false, ""];
  }

  if (chess.isCheckmate()) {
    return [true, "checkmate"];
  }

  if (chess.isStalemate()) {
    return [true, "stalemate"];
  }

  if (chess.isThreefoldRepetition()) {
    return [true, "three fold repetition"];
  }

  if (chess.isDraw()) {
    return [true, "draw"];
  }

  if (chess.isInsufficientMaterial()) {
    return [true, "insufficient material"];
  }
};
