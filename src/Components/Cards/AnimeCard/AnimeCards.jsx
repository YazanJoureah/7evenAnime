import { RxStarFilled, RxArrowTopRight } from "react-icons/rx";
import "./AnimeCard.css";
import {
  delay,
  easeInOut,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimeCards({ item }) {
  const [isAnimated, setIsAnimated] = useState(false); // Track animation state
  const handleCardClick = () => {
    setIsAnimated(!isAnimated); // Set the animation state to true
  };
  const InnercardVariants = {
    hidden: {
      top: "70%", // Start the content offscreen
    },
    visible: {
      top: 0, // Move the content to the top
      transition: {
        ease: "linear", // Easing function
      },
    },
  };

  const descVariants = {
    hidden: {
      opacity: 0, // Start the content offscreen
      transition: {
        duration: 1,
        easeInOut,
      },
    },
    visible: {
      opacity: 1, // Move the content to the top
      transition: {
        delay: 0.5,
        duration: 1,
        easeInOut,
      },
    },
  };

  const badgescVariants = {
    hidden: {
      opacity: 0, // Start the content offscreen
      transition: {
        duration: 1,
        easeInOut,
      },
    },
    visible: {
      opacity: 1, // Move the content to the top
      transition: {
        delay: 0.5,
        duration: 0.5,
        easeInOut,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, easeInOut, delay: 0.3 },
    },
  };

  const controls = useAnimation();
  const ref = useRef([]);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);
  // Function to update the cardRefs array
  const updateCardRefs = (element) => {
    if (element && !ref.current.includes(element)) {
      ref.current.push(element);
    }
  };
  return (
    <motion.div
      className="a-card"
      ref={(element) => updateCardRefs(element)}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      style={{
        display: "inline-block",
      }}
      onClick={handleCardClick}
    >
      <div className="card-container">
        <div
          className="image"
          style={{
            backgroundImage: `url(${item.images.jpg.large_image_url})`,
          }}
        >
          <motion.div
            className="content"
            variants={InnercardVariants}
            initial="hidden"
            animate={isAnimated ? "visible" : "hidden"} // Animate only when isAnimated is true
          >
            <div className="title-wrap">
              <span className="type">{item.type}</span>

              <strong className="title">{item.title}</strong>
            </div>
            <motion.div
              className="badges"
              variants={badgescVariants}
              initial="hidden"
              animate={isAnimated ? "visible" : "hidden"}
            >
              {item.genres.map((badg) => (
                <span className="badge" key={badg.mal_id}>
                  {badg.name}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="desc modal-container "
              variants={descVariants}
              initial="hidden"
              animate={isAnimated ? "visible" : "hidden"}
            >
              {item.synopsis}
            </motion.div>
            <div className="cards-footer">
              <div className="info">
                <span>
                  <strong>Score: </strong>
                  {item.score}
                  <RxStarFilled size={14} color="gold" />
                </span>

                <span>
                  <strong>Season: </strong>
                  {`${item.season} ${item.year}`}
                </span>
              </div>

              <button className="show-details">
                <RxArrowTopRight size={24} /> <span> Show details</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
