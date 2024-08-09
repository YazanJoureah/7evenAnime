import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AnimeList from "./Pages/Anime List/AnimeList";
import SesionalAnime from "./Pages/SeasionalAnime/SesionalAnime";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/AnimeList" element={<AnimeList />}></Route>
        <Route path="/seasons" element={<SesionalAnime />} />
      </Routes>
    </>
  );
}

export default App;
