import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAnimeList } from "../../api/Axios";
import Filters from "../../Components/Filters/FiltersForm";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Topbar/Topbar";
import Lists from "../../Components/Lists/Lists";
import "./AnimeList.css";

export default function AnimeList() {
  const [Animes, setAnimes] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const filters = {
      page: params.get("page"),
      limit: params.get("limit"),
      type: params.get("type"),
      min_score: params.get("min_score"),
      max_score: params.get("max_score"),
      genres: params.getAll("genres").join(","),
      start_date: params.get("start_date"),
    };

    const fetchData = async () => {
      const Anime = await getAnimeList(filters);
      setAnimes(Anime.data);
    };

    fetchData();

    console.log(filters);
  }, [params]);

  return (
    <>
      <Topbar />
      <Header Title={"Anime List"} />

      <Filters />

      <Lists Title={"Anime List"} data={Animes} type={"Anime"} />
    </>
  );
}
