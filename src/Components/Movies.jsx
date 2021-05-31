import React from "react";
import Movie from "./Movie";
import { moviesList } from "../Model/Movies";
export default function Movies(props) {
  const movies = moviesList.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      poster={movie.poster}
      overview={movie.overview}
    />
  ));

  return <div className="row">{movies}</div>;
}
