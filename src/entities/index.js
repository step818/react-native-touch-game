import {
  bottomObstacleHeight,
  getRandom,
  topObstacleHeight,
} from "../utils/random";

import Ceiling from "../components/Ceiling";
import Constants from "../utils/constants";
import Floor from "../components/Floor";
import Matter from "matter-js";
import Obstacle from "../components/Obstacle";
import Plane from "../components/Plane";

Matter.Common.isElement = () => false; //

export default (restart) => {
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.05;
  const boxSize = 50;

  return {
    physics: { engine: engine, world: world },
    Ceiling: Ceiling(
      world,
      "white",
      { x: 1000 / 2, y: 0 },
      { height: 100, width: 1000 }
    ),
    Plane: Plane(
      world,
      "pink",
      { x: 220, y: 400 },
      { height: boxSize, width: boxSize }
    ),
    Floor: Floor(
      world,
      "white",
      { x: 1000 / 2, y: 575 - 50 },
      { height: 100, width: 1000 }
    ),
    Obstacle1: Obstacle(
      world,
      "top",
      { x: 500 * 2 - Constants.TOP_PIPE_WIDTH / 2, y: getRandom(100, 400) },
      { height: topObstacleHeight, width: Constants.TOP_PIPE_WIDTH }
    ),
    Obstacle2: Obstacle(
      world,
      "bottom",
      { x: 500 - Constants.BOTTOM_PIPE_WIDTH / 2, y: getRandom(400, 700) },
      { height: bottomObstacleHeight, 1000: Constants.BOTTOM_PIPE_WIDTH }
    ),
  };
};
