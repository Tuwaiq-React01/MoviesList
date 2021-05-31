import { Component } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css'
const movies = require('./MoviesData.json')

class App extends Component {
  render() {
    return (
      <div className="container">

      <div class="row justify-content-between">
        
           <MovieCard movieArray = {movies}/>
          
      </div>
      </div>
    )
  }
}

export default App;
