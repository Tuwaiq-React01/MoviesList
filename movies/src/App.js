import React, { Component } from "react";
import './App.css';
import MoviesList from "./MoviesList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'


function App(){
const movies = [
  {
    title:"Batman Begins", 
    desc:"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", 
    poster:<img src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR90,0,630,1200_AL_.jpg"></img>
  },
  {
    title:"Inception", 
    desc:"A thief who steals corporate secrets through the use of technology is given an idea into the mind of a C.E.O.", 
    poster:<img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"></img>
  },
  {
    title:"Joker",
     desc:"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
      poster:<img src="https://images-na.ssl-images-amazon.com/images/I/71jKxPAMFbL._AC_SL1500_.jpg"></img>
  },
  {
    title:"The Dark Knight Rises",
     desc:"Batman, with the help of Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      poster:<img src="https://images-na.ssl-images-amazon.com/images/I/71jzMH-kHQL._AC_SY679_.jpg"></img>
  },
  {
    title:"The Conjuring", 
    desc:"Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", 
    poster:<img src="https://m.media-amazon.com/images/I/81NwnEjW27L._AC_.jpg"></img>
  },
  {
    title:"Avengers: Infinity War", 
    desc:"The Avengers must be willing to sacrifice all in an attempt to defeat the powerful Thanos before he puts an end to the universe.", 
    poster:<img src="https://terrigen-cdn-dev.marvel.com/content/qa/1x/e99d4a-MLou_IMAX_Oversize_1-Sht_v11_lg.jpg"></img>
  },
  {
    title:"Annabelle",
     desc:"A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.",
      poster:<img src="https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"></img>
  },
  {
    title:"Garfield", 
    desc:"Jon Arbuckle buys a second pet, a dog named Odie. However, Odie is then abducted and it is up to Jon's cat, Garfield, to find and rescue the canine.", 
    poster:<img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/82527/92375/GARFIELD-THE-MOVIE-SINGLE-SIDED-Advance-2004-ORIGINAL-CINEMA-POSTER__11859.1571608550.jpg?c=2"></img>
  },
  {
    title:"Home Alone",
     desc:"An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
      poster:<img src="https://play-lh.googleusercontent.com/uhcFClZXfouQAhzvDXnX2zLZ3BGrOoOCdUh28Ya1TXviVSThvmozaNQgyiO4nNAc0dq_"></img>
  },
  {
    title:"Shrek",
     desc:"A mean lord exiles fairytale creatures to a swamp, he must rescue a princess for the lord in order to get his land back.",
      poster:<img src="https://images-na.ssl-images-amazon.com/images/I/51%2BWoZieYBL._AC_.jpg"></img>
  },
  {
    title:"The Incredibles", 
    desc:"A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.", 
    poster:<img src="https://upload.wikimedia.org/wikipedia/en/e/ec/The_Incredibles.jpg"></img>
  },
  {
    title:"A Quiet Place",
     desc:"In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
      poster:<img src="https://images-na.ssl-images-amazon.com/images/I/516fV0Y-OaL._AC_SY445_.jpg"></img>
  }
];

const movieList=movies.map((item,index)=>{
  return <MoviesList key={index} poster={item.poster} title={item.title} desc={item.desc}/> 
})
const movieRow = movieList.map((item)=>{
return   <Col sx="4">{item} </Col>
})
return (
  <div>
    <Container>
    <Col>
    <Row>
      {movieRow}
      </Row>
      </Col>
    </Container>
    </div>
)
}
export default App;
