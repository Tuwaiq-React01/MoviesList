import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MovieCard from './MovieCard'
import movieList from './seeds'
function App() {

  const movieListView = movieList.map((movie,i) => {
    return <div class="col">
    <MovieCard key={i} movie={movie}/>
    </div>
  });

  return (
    <div id="body" class="d-flex justify-content-center align-items-center">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        {movieListView}
      </div>
    </div>
    </div>
  );
}

export default App;