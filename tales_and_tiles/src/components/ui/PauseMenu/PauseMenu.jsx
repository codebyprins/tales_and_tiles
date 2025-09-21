import React from "react";
import "./PauseMenu.scss";

const PauseMenu = ({ onResume, onExit, extraOptions = [] }) => {

    return (
        <div className="pauseMenu">
            <div className="pauseMenu__container">
                <div>~ O ~</div>
                <ul>
                    <li><button onClick={onResume}>Resume</button></li>
                    {extraOptions.map((opt, i) => (
                        <li key={i}><button onClick={opt.action}>{opt.label}</button></li>
                    ))}
                    <li><button onClick={onExit}>Exit Game</button></li>
                </ul>
            </div>
        </div>
    );
};

export default PauseMenu;