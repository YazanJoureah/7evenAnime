import Carousel from "../Components/Carousel/Carousel";
import "./HomePage.css";
import { getTopAnime, getLatestEpisodes, getAiringNow } from "../api/Axios";
import { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Topbar from "../Components/Topbar/Topbar";
import Lists from "../Components/Lists/Lists";
import { motion } from "framer-motion";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

export default function HomePage() {
  const [airingAnime, setAiringAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [topAnimeP, setTopAnimeP] = useState([]);
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [page, setPage] = useState(1);
  const Sec2 = useRef(null);
  const HomeRef = useRef(null);
  const MotionTopBar = motion(Topbar);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching
      const AnimeAiring = await getAiringNow();
      const TopAnime = await getTopAnime(page);
      const Episods = await getLatestEpisodes();
      setAiringAnime(AnimeAiring.data);
      setTopAnime(TopAnime);
      setTopAnimeP(TopAnime?.pagination);
      setLatestEpisodes(Episods.data);
      setIsLoading(false); // Set loading to false after fetching
    };
    fetchData();
  }, [page]);
  console.log(page);

  const pageChange = (current) => {
    setPage(current);
  };
  return (
    <div style={{ position: "relative" }} ref={HomeRef}>
      <MotionTopBar />
      <ScrollToTop ref={HomeRef} />
      <section className="hero-section">
        <div className="container">
          <div className="text-center mb-5 pb-2">
            <h1 className="text-white">Watch your favorite anime </h1>

            <a href={Sec2} className="H-btn ">
              Airing Now
            </a>
          </div>
          {isLoading ? (
            <div>Loading...</div> // Or any loading indicator component
          ) : (
            <Carousel items={airingAnime} />
          )}
        </div>
      </section>

      <Lists
        type={"episodes"}
        data={latestEpisodes}
        Title={"Latest Episodes"}
        ref={Sec2}
      />

      <Lists
        type={"Anime"}
        Title={"Top Anime"}
        data={topAnime}
        onChange={pageChange}
      />

      <Footer />
    </div>
  );
}
