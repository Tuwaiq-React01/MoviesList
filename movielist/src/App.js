import "./App.css";
import Movies from "./components/Movies";

function App() {
  let movies = [
    {
      name: "Shazam!",
      image:
        "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
      rating: 10,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet.",
    },
    {
      name: "Modern Warfare",
      image: "https://m.media-amazon.com/images/I/91E-D81ZIZL._AC_SL1500_.jpg",
      rating: 9,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet.",
    },
    {
      name: "Spectre",
      image: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
      rating: 8,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet.",
    },
    {
      name: "Captain Marvel",
      image: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
      rating: 5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet.",
    },
    {
      name: "LOL",
      image: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
      rating: 7,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet.",
    },
    {
      name: "Dumbo",
      image: "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
      rating: 9,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet.",
    },
    {
      name: "Glass",
      image: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
      rating: 6,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet.",
    },
  ];

  document.body.style.backgroundColor = "rgb(167, 196, 196)";

  return (
    <div className="container">
      <h1 className="display-6 text-center">MoviesList Website</h1>
      <hr />
      <Movies allMovies={movies} />
    </div>
  );
}

export default App;
