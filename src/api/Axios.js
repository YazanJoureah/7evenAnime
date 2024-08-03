import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  method: "get",
});

// Top animeis
export const getTopAnime = async () => {
  let response;
  try {
    await Axios({
      url: "top/anime",
    }).then((res) => (response = res.data));

    return response;
  } catch (error) {
    console.error("Error fetching animes:", error);

    // Handle errors appropriately, e.g., throw an error or return an empty array
    return [];
  }
};
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

export const getAnimeList = async (params) => {
  let response;
  try {
    await Axios({
      url: "/anime",
      params,
    }).then((res) => (response = res.data));

    return response;
  } catch (error) {
    console.error("Error fetching animes:", error);

    // Handle errors appropriately, e.g., throw an error or return an empty array
    return [];
  }
};

export const getAiringNow = async () => {
  let response;
  try {
    await Axios({
      url: "/anime",
      params: {
        type: "tv",
        sfw: true,
        status: "airing",
        order_by: "popularity",
      },
    }).then((res) => (response = res.data));

    return response;
  } catch (error) {
    console.error("Error fetching animes:", error);

    // Handle errors appropriately, e.g., throw an error or return an empty array
    return [];
  }
};

// Get Latest Episodes
export const getLatestEpisodes = async () => {
  let response;
  try {
    await Axios({
      url: "watch/episodes",
    }).then((res) => (response = res.data));

    return response;
  } catch (error) {
    console.error("Error fetching animes:", error);

    // Handle errors appropriately, e.g., throw an error or return an empty array
    return [];
  }
};

//https://api.jikan.moe/v4/genres/anime
//https://api.jikan.moe/v4/seasons/now
//https://api.jikan.moe/v4/seasons/{year}/{season}
//https://api.jikan.moe/v4/seasons
//https://api.jikan.moe/v4/seasons/upcoming
