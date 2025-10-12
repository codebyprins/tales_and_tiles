import React from "react";
import { Image } from "react-konva";
import useImage from 'use-image';
import playerBase from '../../assets/images/player/base/player_base.png';

export default function Player({ x, y }) {
  const [playerImage] = useImage(playerBase);
  return (
    <Image
      x={x}
      y={y}
      width={50}
      height={64}
      image={playerImage}
    />
  );
}