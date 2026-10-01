// src/components/pages/SearchMovies.tsx

import { useState } from "react";
import SearchForm from "../SearchForm";
import { MovieCard } from "../MovieCard";
import { useTMDB } from "../../hooks/useTMDB";
import type { TMDBMovie } from "../../types/TMDBMovie";

const SearchMovies = () => {

  const [term, setTerm] = useState("");

  const handleSearch = (searchValue: string) => {
    console.log("Searching for:", searchValue);
    setTerm(searchValue);
  };

  const movies = useTMDB<TMDBMovie>(
    "/search/movie",
    `query=${encodeURIComponent(term)}`,
    term.length > 0
  );

  return (
    <>
      <h1>Search Movies</h1>

      <SearchForm onSearch={handleSearch} />

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </>
  );
};

export default SearchMovies;