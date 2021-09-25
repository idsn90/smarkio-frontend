import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import axiosConfig from "../../config/axios";

import { Container, Info } from "./MoviePage.styles";

const Movie = () => {
  const {
    state: { movie },
  } = useLocation();

  useEffect(() => {
    const registerData = async () => {
      await axiosConfig().post("/movie", {
        title: movie.title,
        overview: movie.title,
        release_date: movie.release_date,
        url: movie.poster_path
          ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
          : "https://static.thenounproject.com/png/340719-200.png",
      });
    };

    registerData();
  }, [movie]);

  return (
    <Container>
      <img
        alt={movie.title}
        src={
          movie.poster_path
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
            : "https://static.thenounproject.com/png/340719-200.png"
        }
      />
      <Info>
        <span className="span" id="title">
          {movie.title}
        </span>
        <span className="span" id="overview">
          {movie.overview}
        </span>
        <span className="span" id="date">
          {new Date(movie.release_date).getFullYear()}
        </span>
      </Info>
    </Container>
  );
};

export default Movie;
