import React, { useEffect, useState } from "react";
import { api } from "../../../Axios";
import { requests } from "../../../Request";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState(null);
  function truncate(string, n) {
    return string?.length >= n ? string.substr(0, n - 1) + "..." : string;
  }

  useEffect(() => {
    (async () => {
      const request = await api.get(requests.netflix.fetchApi);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    })();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `${
          movie &&
          `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
        } `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {" "}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Add to list</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
