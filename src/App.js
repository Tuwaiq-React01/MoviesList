import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
function App() {
  const MoviesList = [
    {
      name: "Ice Road",
      language: "English",
      cast: "Jack",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/05/The-Ice-Road-poster-1-913.jpg",
    },
    {
      name: "Wrath Of Man",
      language: "English",
      cast: "Nolland",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/03/wrath-of-man-guy-ritchie-action-thriller.jpg",
    },
    {
      name: "Riders Of Justice",
      language: "English",
      cast: "Kasy",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/05/riders-of-justice.jpg",
    },
    {
      name: "Snake Eyes",
      language: "English",
      cast: "Rambo",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/05/snake-eyes-origins-poster.jpg",
    },
    {
      name: "Godzilla vs Kong",
      language: "English",
      cast: "Zoro",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/03/godzilla-kong-poster.jpg",
    },
    {
      name: "Demon Slayer",
      language: "English",
      cast: "Zoro",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/04/rsz_demon-slayer.jpg",
    },
    {
      name: "Ice Road",
      language: "English",
      cast: "Jack",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/05/The-Ice-Road-poster-1-913.jpg",
    },
    {
      name: "Wrath Of Man",
      language: "English",
      cast: "Nolland",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/03/wrath-of-man-guy-ritchie-action-thriller.jpg",
    },
    {
      name: "Riders Of Justice",
      language: "English",
      cast: "Kasy",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/05/riders-of-justice.jpg",
    },
    {
      name: "Snake Eyes",
      language: "English",
      cast: "Rambo",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/05/snake-eyes-origins-poster.jpg",
    },
    {
      name: "Godzilla vs Kong",
      language: "English",
      cast: "Zoro",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/03/godzilla-kong-poster.jpg",
    },
    {
      name: "Demon Slayer",
      language: "English",
      cast: "Zoro",
      censor: "U/A",
      img: "https://www.joblo.com/assets/images/joblo/posters/2021/04/rsz_demon-slayer.jpg",
    },
  ];
  const listItems = MoviesList.map((movie) => (
    <Movie
      name={movie.name}
      language={movie.language}
      cast={movie.cast}
      censor={movie.censor}
      img={movie.img}
    />
  ));
  return <div className="App">{listItems}</div>;
}

export default App;
