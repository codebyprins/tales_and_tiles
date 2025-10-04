import React from "react";
import { Circle } from "react-konva";

export default function Player({ x, y, radius }) {
  return (
    <Circle
      x={x}
      y={y}
      radius={radius}
      fill="lightblue"
      shadowBlur={8}
    />
  );
}