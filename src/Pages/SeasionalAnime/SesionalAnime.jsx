import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Topbar/Topbar";
import Lists from "../../Components/Lists/Lists";
import { getThisSeason, getYearSeason } from "../../api/Axios";
import MultiChoiceBar from "../../Components/MultiChoiceBar/MultiChoiceBar";

export default function SesionalAnime() {
  const [thisSeason, setThisSeason] = useState([]);
  const [Season, setSeason] = useState([]);
  const [chosenSeason, setChosenSeason] = useState(null);

  const [page, setPage] = useState(1);

  const seasons = {
    pagination: {
      last_visible_page: 1,
      has_next_page: false,
    },
    data: [
      {
        year: 2025,
        seasons: ["winter"],
      },
      {
        year: 2024,
        seasons: ["winter", "spring", "summer", "fall"],
      },
      {
        year: 2023,
        seasons: ["winter", "spring", "summer", "fall"],
      },
    ],
  };

  useEffect(() => {
    let fetchData = async () => {
      const getSeason = await getYearSeason(
        page,
        chosenSeason.year,
        chosenSeason.season
      );
      setSeason(getSeason);
      //const ThisSeason = await getThisSeason(page);
      ///  setThisSeason(ThisSeason);
    };

    fetchData();
    console.log(Season);
  }, [page, chosenSeason]);

  const pageChange = (current) => {
    setPage(current);
  };

  const handleSeasonChange = (selectedSeason) => {
    setChosenSeason(selectedSeason);
    console.log("Chosen Season:", chosenSeason); // Log the selected season
  };

  return (
    <>
      <Topbar /> <Header Title={"Seasons"} />
      <MultiChoiceBar
        choices={seasons} // Pass your choices data
        onSeasonChange={handleSeasonChange} // Pass the handleSeasonChange function
      />
      {/* Display chosenSeason data if you need to */}
      <Lists
        type={"Anime"}
        Title={`${chosenSeason.season} ${chosenSeason.year} `}
        data={Season}
        onChange={pageChange}
      />
    </>
  );
}
