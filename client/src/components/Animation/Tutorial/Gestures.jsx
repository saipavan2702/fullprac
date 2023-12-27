import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: "3.5deg" }}
          style={{
            backgroundColor: "blue",
            padding: "12px",
            borderRadius: "12px",
          }}
        >
          Click me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: "3.5deg" }}
          style={{
            backgroundColor: "red",
            padding: "12px",
            borderRadius: "12px",
          }}
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
