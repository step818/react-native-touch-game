import { heightRatio, width } from "../utils/styleSheet";

import Constants from "../utils/constants";
import Matter from "matter-js";
import { getRandom } from "../utils/random";

const UpdateObstacle = (entities, { time, dispatch }) => {
  let engine = entities.physics.engine;
  for (let i = 1; i <= 2; i++) {
    if (
      entities["Obstacle" + i].type === "top" &&
      entities["Obstacle" + i].body.position.x <=
        -1 * (Constants.TOP_PIPE_WIDTH / 2)
    ) {
      entities["Obstace" + i].scored = false;
      Matter.Body.setPosition(entities["Obstacle" + i].body, {
        x: width * 2 - Constants.TOP_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 100, heightRatioin * 300),
      });
    } else if (
      entities["Obstacle" + i].type === "bottom" &&
      entities["Obstacle" + i].body.position.x <=
        -1 * (Constants.BOTTOM_PIPE_WIDTH / 2)
    ) {
      entities["Obstacle" + i].scored = false;
      Matter.Body.setPosition(entities["Obstacle" + i].body, {
        x: width * 2 - Constants.BOTTOM_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 300, heightRatio * 500),
      });
    } else {
      Matter.Body.translate(entities["Obstacle" + i].body, { x: -4, y: 0 });
    }
  }
  Matter.Engine.update(engine, time.delta);
  for (let i = 1; i <= 2; i++) {
    if (
      entities["Obstacle" + i].body.position.x <=
        entities.Plane.body.position.x &&
      !entities["Obstacle" + i].scored
    ) {
      entities["Obstacle" + i].scored = true;
      dispatch({ type: "score" });
    }
  }
  return entities;
};

export default UpdateObstacle;
