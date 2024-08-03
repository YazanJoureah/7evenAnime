import { SectionsContainer, Section, Header } from "react-fullpage";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";
import LandingPageCard from "../../Components/Cards/LandingPageCard/LandingPageCard";
import "./LandingPage.css";
import { useEffect, useState } from "react";
import { getTopAnime } from "../../api/Axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import AnimatedLink from "../../Components/AnimatedLink/AnimatedLink";
import { AnimatedText } from "../../Components/AnimatedText/AnimatedText";

export default function LandingPage() {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: true,
  };

  const [topAnimes, setTopAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Anime = await getTopAnime();
      setTopAnimes(Anime.data);
    };
    fetchData();
  }, []);

  const HeaderVariants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const LinksVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 1.2,
        stiffness: 50,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="LandingPage">
      <Header>
        <motion.div
          className="L_header"
          variants={HeaderVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, type: "spring", delay: 0, stiffness: 30 }}
        >
          <Image
            src="src/assets/Logo.png"
            alt="7even Anime"
            className=" img-fluid"
            style={{ width: "120px", height: "auto", marginLeft: " 50px" }}
          />
          <motion.div
            variants={LinksVariants}
            initial="hidden"
            animate="visible"
            className="links"
          >
            <AnimatedLink to={"/Home"}>Home</AnimatedLink>
            <AnimatedLink to={"/AnimeList"}>Anime List</AnimatedLink>
            <AnimatedLink to={"#"}>Contact</AnimatedLink>
            <div className="auth">
              <motion.a
                whileHover={{
                  background: "#fff",
                  color: "rgba(22, 76, 167, 0.6)",
                  textShadow: "0 0 2px #1d89ff",
                }}
                href="#Login"
                className="Login_Button"
              >
                Log In
              </motion.a>
              <button className="btn-shine">
                <span>Get Started</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Header>
      <SectionsContainer className="container" {...options}>
        <Section className="sec1" verticalAlign="true">
          <div className="sec1_content">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              Just Relax & Watch
            </motion.h1>
            <AnimatedText
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,nulla ratione! Sed magnam voluptas eum, vitae recusandae incidunt quisquam! Fugiat doloribus ratione harum totam eum adipisci itaque distinctio non similique."
              delay={3.2}
              once={true}
            />

            <motion.button
              className="btn-shine"
              initial={{ width: "0px", opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              <span>Get Started</span>
            </motion.button>
          </div>
        </Section>
        <Section className="sec2" id="sec2">
          <div
            style={{
              marginTop: "110px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <div className="swiper-container">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: true,
                    }}
                    speed={2000}
                    loop={true}
                    spaceBetween={30}
                    onSwiper={(swiper) => {
                      // Custom navigation handling
                      const prevButton = document.getElementById("prev");
                      const nextButton = document.getElementById("next");

                      prevButton.addEventListener("click", () => {
                        swiper.slidePrev();
                      });

                      nextButton.addEventListener("click", () => {
                        swiper.slideNext();
                      });
                    }}
                    onSlideChange={() => {}}
                  >
                    {topAnimes?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <LandingPageCard item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="navigations">
              <button className="prev" id="prev">
                <svg
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                </svg>
                <span>Prev</span>
              </button>
              <button className="next" id="next">
                <span>Next</span>
                <svg
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1024 1024"
                >
                  <g transform="scale(-1, 1) translate(-1024, 0)">
                    <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </Section>
        <Section color="#E0E4CC">Page 3</Section>
      </SectionsContainer>
    </div>
  );
}
