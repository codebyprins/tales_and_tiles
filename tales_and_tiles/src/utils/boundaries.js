export function clampPosition(obj, width, height) {
  const minX = obj.radius;
  const maxX = width - obj.radius;
  const minY = obj.radius;
  const maxY = height - obj.radius;

  return {
    ...obj,
    x: Math.max(minX, Math.min(obj.x, maxX)),
    y: Math.max(minY, Math.min(obj.y, maxY)),
  };
}