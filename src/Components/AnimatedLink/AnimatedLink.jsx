import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import "./AnimatedLink.css";
// eslint-disable-next-line react/prop-types
export default function AnimatedLink({ to, children }) {
  const match = useMatch(to);

  return (
    <motion.div
      style={{
        border: "0 0 0 2px 2px solid #007bff",
      }}
      variants={{
        hover: {
          color: "blue",
          textShadow: "0 0 5px #007bff",
          scale: 1.05,
          transition: { duration: 0.3 },
        },
      }}
      whileHover="hover"
      className={`animated-link ${match ? "active" : ""}`}
    >
      <Link to={to}>{children}</Link>
    </motion.div>
  );
}
