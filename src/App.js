import "./App.css";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="container-fluid App">
      <div className="movies">Movies List</div>
      <Movie />
    </div>
  );
}

export default App;
