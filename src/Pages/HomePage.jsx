import Carousel from "../Components/Carousel/Carousel";
import "./HomePage.css";
import { getTopAnime, getLatestEpisodes } from "../api/Axios";
import { useEffect, useState } from "react";
import EpisodesCards from "../Components/Cards/EpisodesCards";

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
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="text-center mb-5 pb-2">
            <h1 className="text-white">Watch your favorite anime with 7even</h1>
            <p className="text-white">
              Watch it everywhere. Explore your fav .
            </p>
            <a href="#section_2" className="btn custom-btn smoothscroll mt-3">
              Airing
            </a>
          </div>
          {isLoading ? (
            <div>Loading...</div> // Or any loading indicator component
          ) : (
            <Carousel items={topAnimes} />
          )}

          <EpisodesCards episodes={latestEpisodes} />
        </div>
      </section>
    </>
  );
}
