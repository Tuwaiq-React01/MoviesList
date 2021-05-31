
import './App.css';
import Movie from './Movie';
function App() {

  const Movies = [
    {Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4wHSSxs4cf2_Wbx9QuSFAacTqxhQVZErJA&usqp=CAU", Title: "Mortal Kombat", Description: "Movie with fights and gore", Cast: "Person 1 and Person 2"},
    {Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqHC087XVceO81dXRdvoL9kULzBsJ0zUlSw&usqp=CAU", Title: "SpngeBob", Description: "Some description", Cast: "Person 3"},
    {Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWOm5NTuowsXhAM0gf5Uo8ptK-H_ldIJYeA&usqp=CAU", Title: "Frozen 2", Description: "Another Description", Cast: "Person 4, Person 5 and Person 6"},
    {Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4wHSSxs4cf2_Wbx9QuSFAacTqxhQVZErJA&usqp=CAU", Title: "Mortal Kombat 2", Description: "Fights", Cast: "Person 1, Person 2 and Person 7"}
  ]

  const movieView = Movies.map((value, index) => {
    return <Movie key={index} Image={value.Image} Title={value.Title}
          Description={value.Description} Cast={value.Cast} />
  })

  return (
    <div className="container">
      <div className="row">
        {movieView}
      </div>
    </div>
  );
}

export default App;
