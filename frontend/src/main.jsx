import React from "react";
import ReactDOM from "react-dom/client";
import "./style/indexhtml.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { BoardPage } from "./page/BoardPage";
import { GameApp } from "./testGame/GameApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/play" element={<BoardPage />} />
      <Route path="/test" element={<GameApp/>} />
    </Routes>
  </BrowserRouter>
);
