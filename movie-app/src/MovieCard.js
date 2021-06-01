import React from "react";

const MovieCard = ({ movie }) => {
  const getFormattedDate = (unixTime) => {
    var date = new Date(unixTime * 1000);
    console.log(date);
    console.log(date.getFullYear);
    return date.getFullYear();
  };

  return (
    <div className="container">
      <div class="card">
        <div className="row">
          <img
            class="card-img-top poster"
            src={movie.poster}
            alt="Card image cap"
          />
          <div className="col">
            <div class="card-body">
              <h5 class="card-title">{movie.title}</h5>
              <p className="card-text mt-5">
                <small class="text-muted">
                  {getFormattedDate(movie.release_date)}
                </small>
              </p>
              <p class="card-text">{movie.overview}</p>
              <a href="#" class="btn btn-primary px-4 mt-5">
                Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
