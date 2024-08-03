import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  Wrapper = "span",
  className,
  once = false, // Default to false for continuous visibility updates
  animation = defaultAnimations,
  delay = 0, // Default delay to 0 seconds
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once }); // once = false by default

  useEffect(() => {
    if (isInView) {
      // Use setTimeout to introduce the delay
      setTimeout(() => {
        controls.start("visible");
      }, delay * 1000);
    } else {
      controls.start("hidden");
    }
  }, [isInView, delay]);

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span key={lineIndex} style={{ display: "block" }}>
            {/* Trim the leading and trailing whitespace from each line */}
            {line
              .trim()
              .split(" ")
              .map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: "inline-block" }}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      style={{ display: "inline-block" }}
                      variants={animation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {/* Add a space between words */}
                  &nbsp;
                </span>
              ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
