import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Topbar/Topbar";
import { getTopAnime } from "../../api/Axios";

import "./AnimeList.css";
import Lists from "../../Components/Lists/Lists";
export default function AnimeList() {
  const [topAnimes, setTopAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Anime = await getTopAnime();
      setTopAnimes(Anime);
    };
    fetchData();
  }, []);

  return (
    <>
      <Topbar />
      <Header Title={"Anime List"} />
      <Lists Title={"Anime List"} data={topAnimes} type={"Anime"} />
    </>
  );
}
