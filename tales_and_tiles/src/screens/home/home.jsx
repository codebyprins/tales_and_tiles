import React,{ useState } from "react";
import PauseMenu from "../../components/ui/PauseMenu/PauseMenu";

export default function Home({ goToMainMenu, onPlay }) {
  const [paused, setPaused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setPaused((prev) => !prev);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="character-select">
      {!paused && <p>🧙 Choose your hero...</p>}
      {paused && (
        <PauseMenu
          onResume={() => setPaused(false)}
          onExit={goToMainMenu}
        />
      )}
      <a href="/game">Play</a>
    </div>
  );
}