import { useState, useEffect } from "react";
import { clampPosition } from "../utils/boundaries";

export default function usePlayerMovement(stageWidth, stageHeight, speed, paused = false) {
    const [player, setPlayer] = useState({ x: 100, y: 100, radius: 20 });
    const [keys, setKeys] = useState({});

    useEffect(() => {
        const down = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
        const up = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));

        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);
        return () => {
            window.removeEventListener("keydown", down);
            window.removeEventListener("keyup", up);
        };
    }, []);

    useEffect(() => {
        if (paused) return;
        let dx = 0,
            dy = 0;

        if (keys.w) dy -= speed;
        if (keys.s) dy += speed;
        if (keys.a) dx -= speed;
        if (keys.d) dx += speed;

        if (dx !== 0 || dy !== 0) {
            setPlayer((prev) =>
                clampPosition(
                    { ...prev, x: prev.x + dx, y: prev.y + dy },
                    stageWidth,
                    stageHeight
                )
            );
        }
    }, [keys, paused, speed]);

    return player;
}