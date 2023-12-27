import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const ViewBased = () => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("🚀 ~ file: ViewBased.jsx:10 ~ useEffect ~ ̥:", isView);
  }, [isView]);

  return (
    <>
      <div style={{ height: "150vh" }}></div>
      <motion.div
        initial={{ opacity: 0 }}
        style={{
          height: "100vh",
          backgroundColor: "blue",
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          backgroundColor: "red",
        }}
      ></div>
    </>
  );
};

export default ViewBased;
