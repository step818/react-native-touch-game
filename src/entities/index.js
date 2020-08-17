import {
  bottomObstacleHeight,
  getRandom,
  topObstacleHeight,
} from "../utils/random";
import { height, heightRatio, width, widthRatio } from "../utils/styleSheet";

import Ceiling from "../components/Ceiling";
import Constants from "../utils/constants";
import Floor from "../components/Floor";
import Matter from "matter-js";
import Obstacle from "../components/Obstacle";
import Plane from "../components/Plane";

Matter.Common.isElement = () => false; // override

export default (restart) => {
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.18;

  return {
    physics: { engine: engine, world: world },
    Ceiling: Ceiling(
      world,
      "white",
      { x: width / 2, y: heightRatio * 1 },
      { height: heightRatio * 60, width: widthRatio * 350 }
    ),
    Plane: Plane(
      world,
      "pink",
      { x: width / 2, y: height / 2 },
      { height: heightRatio * 50, width: widthRatio * 70 }
    ),
    Floor: Floor(
      world,
      "white",
      { x: width / 2, y: height - heightRatio * 40 },
      { height: heightRatio * 90, width: width }
    ),
    Obstacle1: Obstacle(
      world,
      "top",
      {
        x: width * 2 - Constants.TOP_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 100, heightRatio * 300),
      },
      { height: topObstacleHeight, width: Constants.TOP_PIPE_WIDTH }
    ),
    Obstacle2: Obstacle(
      world,
      "bottom",
      {
        x: width * 3 - Constants.BOTTOM_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 300, heightRatio * 500),
      },
      { height: bottomObstacleHeight, width: Constants.BOTTOM_PIPE_WIDTH }
    ),
  };
};
