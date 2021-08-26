import React, { useEffect, useRef, useState } from "react";
import { api } from "../../../Axios";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  transform,
} from "framer-motion";
import "./Row.css";

const Row = ({ fetchApi, title, isLarge }) => {
  const container = useRef(null);
  const [movies, setMovies] = useState([]);
  const [translate, setTranslate] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [count, setCount] = useState(0);

  const moveLeft = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1);
    setTranslate((prev) => prev + window.innerWidth);
  };
  const moveRight = () => {
    const timesToScroll = container.current.clientWidth / window.innerWidth;
    if (count === Math.floor(timesToScroll)) {
      setCount(0);
      setTranslate(0);
      return;
    }
    setCount((prev) => prev + 1);
    setTranslate((prev) => prev - window.innerWidth);
  };

  useEffect(() => {
    (async () => {
      const response = await api.get(fetchApi);
      setMovies(response.data.results);
    })();
  }, [fetchApi]);

  console.log(isSelected);
  return (
    <AnimateSharedLayout type="crossfade">
      <div className="row">
        <h2>{title}</h2>

        <div
          style={{ transform: `translateX(${translate}px)` }}
          ref={container}
          className="row__posters"
        >
          {movies.map(
            (movie) =>
              ((isLarge && movie.poster_path) ||
                (!isLarge && movie.backdrop_path)) && (
                <motion.img
                  onClick={() => setIsSelected(movie)}
                  key={movie.id}
                  layoutId={movie.id}
                  className={`row__poster ${isLarge && "row__posterLarge"}`}
                  src={`https://image.tmdb.org/t/p/original/${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                />
              )
          )}
        </div>
        <div onClick={moveRight} className="icon right__icon">
          <img
            src="https://img.icons8.com/material/50/000000/circled-chevron-right--v1.png"
            alt=""
          />
        </div>
        <div onClick={moveLeft} className="icon left__icon">
          <img
            src="https://img.icons8.com/material/50/000000/circled-chevron-left--v1.png"
            alt=""
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            layoutId={isSelected.id}
            className="selectedImage"
            onClick={() => setIsSelected(null)}
          >
            <motion.img
              className="selected__image"
              src={`https://image.tmdb.org/t/p/original/${isSelected.backdrop_path}`}
            />
            <motion.h1>{isSelected.title}</motion.h1>
            <motion.div className="selected__content">
              <motion.div className="selected__detail">
                <motion.h3>Release Date : {isSelected.release_date}</motion.h3>
                <motion.h4>{isSelected.overview}</motion.h4>
              </motion.div>
              <motion.img
                className="selected__image2"
                src={`https://image.tmdb.org/t/p/original/${isSelected.poster_path}`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Row;
