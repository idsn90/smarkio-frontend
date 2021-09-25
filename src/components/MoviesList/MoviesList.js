import React from "react";

import { Container, Item } from "./MoviesList.styles";

const MoviesList = ({ movies, onClickMovie = () => {} }) => {
  const moviesContainer = (
    <Container>
      {movies.map((movie) => (
        <Item key={movie.id} onClick={() => onClickMovie(movie)}>
          <img alt={movie.title} src={movie.url} />
          <span className="title">{movie.title}</span>
        </Item>
      ))}
    </Container>
  );
  return <Container>{moviesContainer}</Container>;
};

export default MoviesList;
