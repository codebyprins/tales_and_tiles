import React,{ useState } from "react";
import PauseMenu from "../../components/ui/PauseMenu/PauseMenu";
import './Home.scss';

export default function Home({ goToMainMenu, onPlay }) {
  const [pauseMenu, setPauseMenu] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setPauseMenu((prev) => !prev);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="home screen">
      {!pauseMenu && <h2>🧙 Choose Your Hero...</h2>}
      {pauseMenu && (
        <PauseMenu
          onResume={() => setPaused(false)}
          onExit={goToMainMenu}
        />
      )}
      <a className="intro-btn" href="/game">Play</a>
    </div>
  );
}