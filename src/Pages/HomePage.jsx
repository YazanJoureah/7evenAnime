import Carousel from "../Components/Carousel/Carousel";
import "./HomePage.css";
import { getTopAnime, getLatestEpisodes } from "../api/Axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Topbar from "../Components/Topbar/Topbar";
import Lists from "../Components/Lists/Lists";

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
      <Topbar />
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

      <Lists
        type={"episodes"}
        data={latestEpisodes}
        Title={"Latest Episodes"}
      />
      <Lists type={"Anime"} Title={"Top Anime"} data={topAnimes} />
      <Footer />
    </>
  );
}
