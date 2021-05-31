import './App.css';
import './movie.css';
import Movie from './movie'

function App() {

  const Movies = [
    {title:"The Godfather",description:"An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",img:"https://th.bing.com/th/id/OIP.3cNI5bOZ8BTHfdzOs2c-7wHaLd?w=200&h=311&c=7&o=5&dpr=1.25&pid=1.7"},
    {title:"Interstellar",description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",img:"https://th.bing.com/th/id/OIP.7jqBjbrnEZ4V29qIYzHOiQHaLl?w=199&h=312&c=7&o=5&dpr=1.25&pid=1.7"},
    {title:"Captain Marvel",description:"The story follows Carol Danvers as she becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",img:"https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"},
    {title:"How to Train Your Dragon: The Hidden World",description:"As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless' discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup's reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",img:"https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg"},    
    {title:"Escape Room",description:"Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",img:"https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg"},
    {title:"Dumbo",description:"A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",img:"https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg"},
    {title:"Doraemon the Movie: Nobita's Treasure Island",description:"The story is based on Robert Louis Stevenson's Treasure Island novel.",img:"https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg"},
    {title:"Glass",description:"In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",img:"https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg"},
    {title:"Shazam!",description:"A boy is given the ability to become an adult superhero in times of need with a single magic word.",img:"https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg"},
  ];

  const moviesList = Movies.map((movie) => (
    <Movie  title={movie.title} description={movie.description} img={movie.img}/>
  ));

  return (
    <div className="App bg-img wrapper">
      {moviesList}
    </div>
  );
}

export default App;
