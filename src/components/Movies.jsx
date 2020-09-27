import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/core";
import { APIURL, SEARCHAPI } from "./apis";

import Movie from "./Movie";
import HeadingSearch from "./HeadingSearch";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async (api) => {
    const movies = await fetch(api);
    const resp = await movies.json();
    setMovies(resp.results);
  };

  const handleSearch = async (movie) => {
    const movies = await fetch(SEARCHAPI + movie);
    const resp = await movies.json();
    setMovies(resp.results);
    setSearch(movie);
  };

  const backToPopular = () => {
    getMovies(APIURL);
    setSearch("");
  };

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  return (
    <Box w="95%" m="auto" mb="4rem">
      <HeadingSearch
        backToPopular={backToPopular}
        handleSearch={handleSearch}
        search={search}
      />
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Flex>
    </Box>
  );
};

export default Movies;
