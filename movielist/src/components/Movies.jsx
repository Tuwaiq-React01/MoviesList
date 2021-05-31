import React from "react";

export default function Movies(props) {
  let moviesDisplay = props.allMovies.map((m, i) => {
    return (
      <div className="col-3 mb-5" key={i}>
        {/* <img src={m.image} alt="movie image" width="200px" className="imgg mx-2"/>
            <h6>{m.name}</h6>
            <p>{m.desc}</p>
            <button>BUY</button> */}

        <div className="card bg-light text-dark">
          <img
            src={m.image}
            class="card-img-top p-1"
            alt="movie image"
            width="200px"
            height="250px"
          />
          <div class="card-body">
            <h5 class="card-title">{m.name}</h5>
            <p class="card-text">{m.desc}</p>
            <p>
              <b>rating: {m.rating}</b>
            </p>
            <div className="text-center">
              <button className="btn-primary">
                <a href="#" class="btn btn-primary ">
                  BUY
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div class="row">{moviesDisplay}</div>
    </div>
  );
}
