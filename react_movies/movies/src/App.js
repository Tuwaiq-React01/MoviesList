import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie.js'

function App() {
  const Movies = [
    { id: 1, name: 'Braveheart', Language: "English", rate:"8.3", type:"Biograph, Drama", image:"https://upload.wikimedia.org/wikipedia/ar/b/bf/THE_Braveheart.jpg", Button:"Book" },
    { id: 2, name: 'Moana',Language: "English", rate:"7.6", type:"Animation, Adventure", image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg" , Button:"Book" },
    { id: 3, name: 'Frozen',Language:"English", rate:"7.4", type:"Animation, Adventure", image: "https://i.pinimg.com/originals/9c/40/03/9c4003df9431e340a9237075d41ec28d.jpg", Button:"Book"  },
    { id: 4, name: 'Memento',Language: "English", rate:"8.4", type:"Mystry, Thriller", image:"https://upload.wikimedia.org/wikipedia/ar/c/c7/Memento_poster.jpg", Button:"Book"  },
    { id: 5, name: 'Reservoir Dogs',Language: "English", rate:"8.3", type:"Crime, Drama", image:"https://media.mehrnews.com/d/2019/06/21/4/3158986.jpg",Button:"Book" },
    { id: 6, name: 'Beauty and the Beast',Language: "English", rate:"7.1", type:"Family, Fantasy",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbkzRaFKRmUfugN_5jxctjj80g5TGdy0J8A&usqp=CAU", Button:"Book"  }
  
  ];
  const movieList = Movies.map((value, i) => {
    return <Movie key={i} name={value.name} Language={value.Language}
  rate={value.rate} type={value.type}  image={value.image} Button={value.Button}/>
  })
  return (

  <div >
 
{movieList}
</div>


  )
}

export default App;
