import React from "react";
import "./PauseMenu.scss";

const PauseMenu = ({ onResume, onExit, extraOptions = [] }) => {

    return (
        <div className="pauseMenu">
            <h2>~ O ~</h2>
            <ul class="pauseMenu__options">
                <li><button onClick={onResume}>Resume</button></li>
                {extraOptions.map((opt, i) => (
                    <li className="pauseMenu_option" key={i}><button onClick={opt.action}>{opt.label}</button></li>
                ))}
                <li className="pauseMenu_option"><a href="/intro">Exit Game</a></li>
            </ul>
        </div>
    );
};

export default PauseMenu;