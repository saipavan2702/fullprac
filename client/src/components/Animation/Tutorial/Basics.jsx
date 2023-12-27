import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Basics = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
      }}
    >
      <motion.button layout onClick={() => setShow(!show)}>
        Show
      </motion.button>
      <AnimatePresence mode="popLayout">
        {show && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [-10, -50, 100, 50],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              ease: "easeIn",
              duration: 1,
              times: [0, 0.25, 0.65, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "red",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Basics;
