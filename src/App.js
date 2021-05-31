import './App.css';
import { Component } from "react";

class Movie
{
  constructor(name, language, rating, posterUrl, actors){
    this.Name = name;
    this.Language = language;
    this.Rating = rating;
    this.Poster = posterUrl;
    this.Cast= actors;
  }
}

let lstOfMovies = [];
//create movies and add them to the movies list
let m1 = new Movie("Spectre", "English", "UA", "https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
, "Danial Craig, Ralph Flinnes, Ben Wishhaw, Naomie Harries");

let m2 = new Movie("Skyfall", "English", "A", "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg"
, " Daniel Craig, Javier Bardem, Naomie Harris");

let m3 = new Movie("Nobody", "English", "A", "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg"
, "Danial Craig, Ralph Flinnes, Ben Wishhaw, Naomie Harries");

let m4 = new Movie("The Godfather", "English", "A", "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
, "Marlon Brando, Al Pacino, James Caan");

let m5 = new Movie("Army of the Dead", "English", "A", "https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
, "Dave Bautista, Ella Purnell, Ana de la Reguera");

let m6 = new Movie("Tenet", "English", "A", "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg"
, "John David Washington, Robert Pattinson, Elizabeth Debicki");

let m7 = new Movie("Oxygen", "English", "A", "https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
, "Mélanie Laurent, Mathieu Amalric, Malik Zidi");

let m8 = new Movie("Ferry", "English", "AU", "https://m.media-amazon.com/images/M/MV5BZThhNWM2Y2ItMDRkOC00MWEyLTg5YmItMThkMzRjYjA3Mzk4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UY268_CR4,0,182,268_AL_.jpg"
, "Frank Lammers, Elise Schaap, Huub Stapel");

let m9 = new Movie("Avengers: Endgame", "English", "AU", "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
, "Robert Downey Jr., Chris Evans, Mark Ruffalo");

let m10 = new Movie("The Dry", "English", "AU", "https://m.media-amazon.com/images/M/MV5BYzdlNzYzMjAtMGVjNi00Nzg4LTkzOTUtNTc0NmE2OTg0NDUwXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_UX182_CR0,0,182,268_AL_.jpg"
, "Eric Bana, Genevieve O'Reilly, Keir O'Donnell");

 lstOfMovies.push(m1);
 lstOfMovies.push(m2);
 lstOfMovies.push(m3);
 lstOfMovies.push(m4);
 lstOfMovies.push(m5);
 lstOfMovies.push(m6);
 lstOfMovies.push(m7);
 lstOfMovies.push(m8);
 lstOfMovies.push(m9);
 lstOfMovies.push(m10);

class App extends Component {
  render() {
    
    return (
     
      <div className="container">
        <br></br>
        <div className="row">
          {
            lstOfMovies.map((movie) => 
            {
              return(
                <div className="col-4">
                  <div className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
                    <img className="card-img-top" src={movie.Poster} alt="Movie image"></img>
                    <div className="card-body">
                      <h5 className="card-title">{movie.Name}</h5>
                      <p className="card-text"> <strong>Cast:</strong> {movie.Cast} </p>
                      <p className="card-text"> <strong>Censor Rating:</strong>  {movie.Rating} </p>
                      <button type="button" class="btn btn-info movie-btn">Book</button>
                      
                    </div>
                  </div>
                  <br></br>
                </div> 
              )
            })
          }
        </div>
      </div>
    )
  }
  
}


export default App;