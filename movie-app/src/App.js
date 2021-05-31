import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MovieCard from './MovieCard'
import movieList from './seeds'
function App() {

  const movieListView = movieList.map((movie,i) => {
    return <div class="col-sm-4">
    <MovieCard key={i} movie={movie}/>
    </div>
  });

  return (
    <div class="container">
      <div class="row">
        {movieListView}
      </div>
    </div>
  );
}

export default App;