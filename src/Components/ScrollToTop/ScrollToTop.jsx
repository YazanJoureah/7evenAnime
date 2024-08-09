import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ScrollToTop.css";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="scroll-to-top"
          onClick={handleClick}
        >
          <motion.span
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="arrow-up"
          >
            &#x25B2;
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
