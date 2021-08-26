import React, { useEffect, useState } from "react";
import { api } from "../../../Axios";
import "./Row.css";

const Row = ({ fetchApi, title, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get(fetchApi);
      setMovies(response.data.results);
    })();
  }, [fetchApi]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
