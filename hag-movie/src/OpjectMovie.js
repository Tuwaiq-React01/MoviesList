import React, { Component } from 'react'

export default class OpjectMovie extends Component {
    //          "adult": false,
    //         "backdrop_path": "/iDdpiUnCeXvBmrkBFpL6lKsZt33.jpg",
    //         "genre_ids": [
    //             53,
    //             18,
    //             28,
    //             9648
    //         ],
    //         "id": 578701,
    //         "original_language": "en",
    //         "original_title": "Those Who Wish Me Dead",
    //         "overview": "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.",
    //         "popularity": 1932.947,
    //         "poster_path": "/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
    //         "release_date": "2021-05-05",
    //         "title": "Those Who Wish Me Dead",
    //         "video": false,
    //         "vote_average": 7.1,
    //         "vote_count": 280
    render() {
        return (
            <div class="mb-2 card col-4 d-felx" style={{ width: '18 rem' }}>
                <img class=""  height='250px' src={"https://image.tmdb.org/t/p/w500"+ this.props.movie.poster_path} alt="Card image cap" />
                <div class="card-body d-flex  flex-column justify-content-between">

                    <h5 class="card-title">{this.props.movie.title}</h5>
                    <p class="card-text">
                        {this.props.movie.vote_average}
                        {this.props.movie.overview}
                    </p>
                    <div>
                        
                    </div>
                    <a href="#" class="btn btn-primary text-center">Go somewhere</a>
                </div>
            </div>
        )
        }
    // render() {
    //     return (
    //         <div class="card " style={{ width: '18 rem' }}>
    //             <img class=""  height='250px' src={this.props.movie.PicOfMovie} alt="Card image cap" />
    //             <div class="card-body">

    //                 <h5 class="card-title">{this.props.movie.NameOfMovie}</h5>
    //                 <p class="card-text">
    //                     {this.props.movie.Rating}
    //                     {this.props.movie.Comment}
    //                 </p>
    //                 <a href="#" class="btn btn-primary">Go somewhere</a>
    //             </div>
    //         </div>
    //     )
    //     }
}


        // const items = moviesDB.map((movie, index) => {
        //     return (
        //             <div class="card " style={{ width: '18 rem' }}>
        //                 <img class="card-img-top"  width='100px' height='100px' src={movie.PicOfMovie} alt="Card image cap" />
        //                 <div class="card-body">

        //                     <h5 class="card-title">{movie.NameOfMovie}</h5>
        //                     <p class="card-text">
        //                      {movie.Rating}
        //                      {movie.Comment}
        //                     </p>
        //                     <a href="#" class="btn btn-primary">Go somewhere</a>
        //                 </div>
        //             </div>



                    /* <div>

            <li key={index}>
                <li>{movie.NameOfMovie}</li>
                <li>{movie.Rating}</li>
                <li>{movie.Comment}</li>
                <li><img src={movie.PicOfMovie} width='200px' height='350px'/></li>
            </li>
             <button class="btn btn-primary"> START</button>

             </div> */

            //  <div class="container row d-flex">

    //      )

    // })

    // }
// }
