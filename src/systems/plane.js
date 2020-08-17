import Matter from "matter-js";

const UpdatePlane = (entities, { touches, time }) => {
  const engine = entities.physics.engine;
  // algorithm that translates the plane
  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Plane.body, {
        x: entities.Plane.body.velocity.x,
        y: -3,
      });
    });
  // end of algorithm that translates the plane
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdatePlane;
