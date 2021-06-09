import React, { Component } from 'react'

export default class DisplayMovies extends Component {
    render() {

        return (

            <div className="col" style={{ paddingTop: "40px" }}>
                <div className="card" style={{ width: "20rem" }}>
                    <div className="card-header" style={{ backgroundColor: "#f6fff8" }}>
                        <h5 className="card-title" style={{ textAlign: "center" }}>{this.props.movie.title}</h5>
                    </div>
                    <img src={this.props.movie.poster} className="card-img-top" alt={`${this.props.movie.title} Poster`} />
                    <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
                        <p className="card-text"><b>Release date:</b>
                            {this.props.movie.release_date}</p>
                        <p>{this.props.movie.overview}</p>
                        <a href="#" className="btn btn-success">Book this movie</a>
                    </div>
                </div >
            </div >

        )
    }
}
