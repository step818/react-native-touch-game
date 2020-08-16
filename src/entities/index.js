import Ceiling from "../components/Ceiling";
import Floor from "../components/Floor";
import Matter from "matter-js";
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
  };
};
