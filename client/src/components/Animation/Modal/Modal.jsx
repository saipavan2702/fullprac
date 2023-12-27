import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import PropTypes from "prop-types";

export default function Modal({ handleClose, text = "Hi" }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(event) => event.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {text}
      </motion.div>
    </Backdrop>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func,
  text: PropTypes.string,
};

// .modal {
//   height: min(50%, 300px);
//   width: clamp(50%, 700px, 90%);
//   margin: auto;
//   padding: 0 2rem;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: aquamarine;
// }
