import React, { useState } from "react";

export default function Movie(props) {
  let [counter, setCounter] = useState(() => 1);
  return (
    <div className="col-3 card">
      <img
        className="card-img-top p-0 m-0"
        src={props.poster}
        alt={`${props.title}'s logo`}
      />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          <strong>Description: </strong> {props.overview}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Book {counter}
        </button>
      </div>
    </div>
  );
}
