import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

Backdrop.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};

// .backdrop {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background: #000000e1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
