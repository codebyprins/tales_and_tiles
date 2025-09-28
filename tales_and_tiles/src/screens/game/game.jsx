import React, { useState } from "react";
import PauseMenu from "../../components/ui/PauseMenu/PauseMenu";
import './Game.scss';

export default function GameScreen({ goToMainMenu }) {
  const [paused, setPaused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setPaused((prev) => !prev);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
          Place game here
        </div>
      </div>
    </div>
  );
}
