import Carousel from "../Components/Carousel/Carousel";
import "./HomePage.css";
import { getTopAnime, getLatestEpisodes } from "../api/Axios";
import { useEffect, useState } from "react";
import EpisodesCards from "../Components/Cards/EpisodesCards";
import CaroselCards from "../Components/Cards/CaroselCards";
import AnimeCards from "../Components/Cards/AnimeCards";

export default function HomePage() {
  const [topAnimes, setTopAnimes] = useState([]);
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching
      const Anime = await getTopAnime();
      const Episods = await getLatestEpisodes();
      console.log(Episods);
      console.log(Anime);
      setTopAnimes(Anime);
      setLatestEpisodes(Episods);
      setIsLoading(false); // Set loading to false after fetching
    };
    fetchData();

    console.log(topAnimes);
    console.log(latestEpisodes);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="text-center mb-5 pb-2">
            <h1 className="text-white">Watch your favorite anime </h1>

            <a href="#section_2" className="H-btn ">
              Airing Now
            </a>
          </div>
          {isLoading ? (
            <div>Loading...</div> // Or any loading indicator component
          ) : (
            <Carousel items={topAnimes} />
          )}
        </div>
      </section>

      <section className="section-bg section-padding pb-0" id="section_2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="section-title-wrap mb-5">
              <h4 className="section-title">Lastest episodes</h4>
            </div>
          </div>
          <div className="latest-ep-cards">
            <EpisodesCards episodes={latestEpisodes} />
          </div>
        </div>
      </section>

      <section className="section-bg section-padding">
        <div className="container">
          <div className="section-title-wrap mb-5">
            <h4 className="section-title">Top Animes</h4>
          </div>
          <div className="Top-Anime">
            {topAnimes?.map((item, index) => (
              <AnimeCards key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
