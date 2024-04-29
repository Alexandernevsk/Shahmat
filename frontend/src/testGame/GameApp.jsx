import React from "react";
import { GameProvider } from "./context/GameContext";
import { Game } from "./Game";

export const GameApp = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};
