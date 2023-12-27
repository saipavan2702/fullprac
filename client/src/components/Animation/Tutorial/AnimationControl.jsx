import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const AnimationControl = () => {
  const control = useAnimationControls();
  const [rotation, setRotation] = useState(90);

  const handleClick = () => {
    setRotation(rotation + 90);
    control.start("flip");
  };

  const animationVarinats = {
    initial: {
      rotate: "0deg",
    },
    flip: {
      rotate: `${rotation}deg`,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick}>Click me!</button>
      <motion.div
        style={{ width: 100, height: 100, backgroundColor: "blue" }}
        variants={animationVarinats}
        initial="initial"
        animate={control}
      ></motion.div>
    </div>
  );
};

export default AnimationControl;
