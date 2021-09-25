import React, { useEffect, useState } from "react";

import { MoviesList } from "../../components";
import axiosConfig from "../../config/axios";
import Spinner from "../../assets/svg/spinner.svg";

import { Container } from "./MostPage.styles";

const Most = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      const { data } = await axiosConfig().get("/movie", {
        params: {
          type: "top",
        },
      });

      setMovies(data);

      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <img alt="spinner" src={Spinner} />
      ) : (
        <MoviesList movies={movies} />
      )}
    </Container>
  );
};

export default Most;
