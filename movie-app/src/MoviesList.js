import React from "react";
import MovieCard from "./MovieCard";
import movies from "./movies.json";
const MoviesList = () => {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-sm-6">
              <MovieCard key={movie.id} movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
