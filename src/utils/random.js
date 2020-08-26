export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const topObstacleHeight = getRandom(100, 150);
export const bottomObstacleHeight = getRandom(50, 100);
