import { Component } from "react";
import "./Movie.css";
export default class MovieList extends Component{
render(){
    let movies=[{image:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
     ,name:"The Shawshank Redemption" ,langauge:"English",cast:"Tim Robbins ,Morgan Freeman",rate:9.2},
    {image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg" 
    ,name:"The Godfather" ,langauge:"English",cast:"Marlon Brando ,Al Pacino",rate:9.2},
    {image:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg" 
    ,name:"The Godfather: Part II" ,langauge:"English",cast:"Al Pacino ,Robert Duvall",rate:9},
    {image:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" 
    ,name:" Fight Club " ,langauge:"English",cast:"Brad Pitt , Edward Norton",rate:8.8},
    {image:"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg" 
    ,name:"The Lion King" ,langauge:"English",cast:"Matthew Broderick ,Rowan Atkinson",rate:8.5},
    {image:"https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg" 
    ,name:"Hotaru no haka" ,langauge:"English",cast:"Ayano Shiraishi ,Tsutomu Tatsumi ",rate:8.5},
    {image:"https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR0,0,182,268_AL_.jpg" 
    ,name:"Memento" ,langauge:"English",cast:"Carrie-Anne Moss ,Guy Pearce",rate:8.4},
    {image:"https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" 
    ,name:"Once Upon a Time in America" ,langauge:"English",cast:"James Woods, Robert De Niro",rate:8.4},
];
let MovieList=movies.map((element,index)=>(
   
<div key={index}>
<div >{element.name}</div>
<img src={element.image } />
<div>Langauge: {element.langauge}</div>
<div>Rating: {element.rate}/10</div>
<div>Cast: {element.cast}</div>
<button>BooK Movie</button>
</div>
))
return(
    
    <div className="Back">
    
        {MovieList}
    </div>
);
}
}