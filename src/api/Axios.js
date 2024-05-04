import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  method: "get",
});

// Top animeis
export const getTopAnime = async () => {
  try {
    const response = await fetch("src/api/anime.json")
      .then((res) => res.json())
      .then((json) => {
        return json;
      });

    return response.data;
  } catch (error) {
    console.error("Error fetching top anime:", error);

    // Handle errors appropriately, e.g., throw an error or return an empty array
    return [];
  }
  /*try {
    const response = await Axios({
      url: "/top/anime",
      params: {
        type: "tv",
        sfw: true,
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching top anime:", error);
    // Handle errors appropriately, e.g., throw an error or return an empty array
    return [];
  }*/
};

/*export const getTopMovie = Axios({
  url: "/top/anime",
  params: {
    type: "movie",
    sfw: true,
  },
}).then((data) => {
  return data;
});

export const getTopAiring = Axios({
  url: "/top/anime",
  params: {
    type: "tv",
    sfw: true,
    filter: "airing",
  },
}).then((data) => {
  return data;
});

export const getCurrentSeasson = Axios({
  url: "/seasons/now",
  params: {
    type: "tv",
    sfw: true,
  },
}).then((data) => {
  return data;
});
*/
