import React, { useEffect, useState, useRef } from "react";
import { Stage, Layer, Rect } from "react-konva";
import PauseMenu from "../../components/ui/PauseMenu/PauseMenu";
import './Game.scss';
import Grass from '../../assets/images/tiles/grass.png';
import Player from "../../components/player/Player";
import usePlayerMovement from "../../hooks/usePlayerMovement";

export default function GameScreen({ goToMainMenu }) {
  const [patternImage, setPatternImage] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setPaused((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const stageWidth = 1200;
  const stageHeight = 800;

  const player = usePlayerMovement(stageWidth, stageHeight, 2);

  useEffect(() => {
    const img = new window.Image();
    img.src = Grass;
    img.onload = () => {
      setPatternImage(img);
    };
  }, []);


  useEffect(() => {
    let animationId;
    const loop = () => {
      // Update positions, handle logic here
      animationId = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="game screen">
      <div className="screen-container">
        {paused && (
          <PauseMenu
            onResume={() => setPaused(false)}
            onExit={goToMainMenu}
            extraOptions={[
              { label: "Settings", action: () => console.log("Open Settings") },
            ]}
          />
        )}
        <div className="game-content">
          <Stage width={stageWidth}
            height={stageHeight}
          >
            <Layer>
              <Rect
                x={0}
                y={0}
                width={stageWidth}
                height={stageHeight}
                fillPatternImage={patternImage}
                fillPatternRepeat="repeat"
              />
              <Player {...player} />
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
}
