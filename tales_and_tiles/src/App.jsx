import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroScreen from "./screens/intro/intro";
import HomeScreen from "./screens/home/home";
import GameScreen from "./screens/game/game";
import './styles/app.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
