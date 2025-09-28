import { BrowserRouter, Routes, Route } from "react-router-dom";
// import from "./screens/intro/Intro";
import HomeScreen from "./screens/home/Home";
import GameScreen from "./screens/game/Game";
import './styles/app.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
