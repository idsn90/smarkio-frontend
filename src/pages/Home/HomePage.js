import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Input, MoviesList } from "../../components";
import axiosConfig from "../../config/axios";

import { Container } from "./HomePage.styles";

const Home = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const searchMovies = async () => {
    if (input === "") {
      setMovies([]);
    } else {
      setIsLoading(true);

      const { data } = await axiosConfig().get("/movie", {
        params: {
          title: input,
        },
      });

      setIsLoading(false);

      setMovies(data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchMovies();
  };

  const handleNavigateToMovie = (movie) => {
    history.push({
      pathname: "/movie",
      state: {
        movie,
      },
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input onChange={setInput} />
      </form>

      <MoviesList movies={movies} onClickMovie={handleNavigateToMovie} />
    </Container>
  );
};

export default Home;
