import { SectionsContainer, Section, Header } from "react-fullpage";
import { Image } from "react-bootstrap";
import LandingPageCard from "../../Components/Cards/LandingPageCard/LandingPageCard";
import "./LandingPage.css";
import { useEffect, useState } from "react";
import { getTopAnime } from "../../api/Axios";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

export default function LandingPage() {
  // register Swiper custom elements
  register();

  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "50px",
  };

  const [topAnimes, setTopAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Anime = await getTopAnime();
      setTopAnimes(Anime);
    };
    fetchData();

    let swiper = document.querySelector("swiper-container");
    let Next = document.querySelector("#next");
    Next.addEventListener("click", () => {
      swiper.swiper.slideNext();
    });

    let Prev = document.querySelector("#prev");
    Prev.addEventListener("click", () => {
      swiper.swiper.slidePrev();
    });
  }, []);

  return (
    <div>
      <Header>
        <div className="header">
          <Image
            src="src/assets/Logo.png"
            alt="7even Anime"
            className=" img-fluid"
            style={{ width: "120px", height: "auto", marginLeft: " 50px" }}
          />
          <div className="links">
            <a href="#HomePage">Home</a>
            <a href="#Category">Anime List</a>
            <a href="#Contact">Contact</a>
            <div className="auth">
              <a href="#Login"> Log In</a>
              <button className="btn-shine">
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </Header>
      <SectionsContainer className="container" {...options}>
        <Section className="sec1" verticalAlign="true">
          <div className="sec1_content">
            <h1>Just Relax & Watch</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              nulla ratione! Sed magnam voluptas eum, vitae recusandae incidunt
              quisquam! Fugiat doloribus ratione harum totam eum adipisci itaque
              distinctio non similique.
            </span>
            <button className="btn-shine">
              <span>Get Started</span>
            </button>
          </div>
        </Section>
        <Section className="sec2">
          <div
            style={{
              marginTop: "110px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <swiper-container
              slides-per-view="3"
              autoplay="true"
              speed="2000"
              loop="true"
              css-mode="true"
              mousewheel-force-to-axis="true"
            >
              {topAnimes?.map((item, index) => (
                <swiper-slide>
                  <LandingPageCard key={index} item={item} />
                </swiper-slide>
              ))}
            </swiper-container>
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
