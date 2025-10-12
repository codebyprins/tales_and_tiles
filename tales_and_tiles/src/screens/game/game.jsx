import React, { useEffect, useState, useRef } from "react";
import { Stage, Layer, Rect } from "react-konva";
import PauseMenu from "../../components/ui/PauseMenu/PauseMenu";
import './Game.scss';
import Grass from '../../assets/images/tiles/grass.png';
import Player from "../../components/player/Player";
import usePlayerMovement from "../../hooks/usePlayerMovement";

// change this so the when the player moves more of the map is loaded in 
// but only that what is about to load into view like 1-2 blocks outside the view port
// player move vs map move? player move = better for mmo as multiple people have to go over same map.

export default function GameScreen() {
  const [patternImage, setPatternImage] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setPaused((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const stageWidth = 1280;
  const stageHeight = 720;

  const player = usePlayerMovement(stageWidth, stageHeight, 2);

  useEffect(() => {
    const img = new window.Image();
    img.src = Grass;
    img.onload = () => {
      setPatternImage(img);
    };
  }, []);


  // useEffect(() => {
  //   let animationId;
  //   const loop = () => {
  //     animationId = requestAnimationFrame(loop);
  //   };
  //   loop();
  //   return () => cancelAnimationFrame(animationId);
  // }, []);

  return (
    <div className="game screen">
      <div className="screen-container">
        {paused && (
          <PauseMenu
            onResume={() => setPaused(false)}
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
