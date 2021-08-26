const API_KEY = `f56b57a01dcc908aed0eb8c4c51ba199`;

export const requests = {
  trending: {
    fetchApi: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    title: "Trending Now",
    isLarge: true,
  },

  topRated: {
    fetchApi: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    title: "Top Rated",
  },

  adventure: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    title: "Adventure Movies",
  },
  documentries: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: "Documentries",
    isLarge: true,
  },
  drama: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    title: "Drama",
  },
  history: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    title: "History Movies",
  },
  fantasy: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    title: "Fantasy Movies",
  },

  horror: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: "Horror Movies",
    isLarge: true,
  },
  romance: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: "Romance Movies",
  },
  comedy: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    title: "Comedy Movies",
  },

  action: {
    fetchApi: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: "Action Movies",
  },
  netflix: {
    fetchApi: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    title: "NetFlix Originals",
    isLarge: true,
  },
};
