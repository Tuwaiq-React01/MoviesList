import { Component } from "react";
import Movie from './Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    var movies = [
      {
        title: "Harry Potter",
        desc: "Wizzard Movie",
        src:
          "https://ocdn.eu/pulscms-transforms/1/isDktkqTURBXy9kMmM4YmI4N2QzY2U0ZjI5NmIzNTU3Mjk2ZTg2ZWY2My5qcGVnkZMCAM0B5A"
      },
      {
        title: "Spiral",
        desc: "Safe, Socially Distanced Movie Screening ",
        src: "https://upload.wikimedia.org/wikipedia/ar/d/dd/Spiral_from_the_book_of_saw.jpg"
      },
      {
        title: "Star Wars",
        desc: "Star Wars: Episode IV - A New Hope",
        src:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        title: "Lethal Weapon 3",
        desc: "description about this movie",
        src: "https://media.teleman.pl/photos/lethal-weapon-3.jpg"
      },
      {
        title: "Spiral",
        desc: "Safe, Socially Distanced Movie Screening",
        src: "https://upload.wikimedia.org/wikipedia/ar/d/dd/Spiral_from_the_book_of_saw.jpg"
      },
      {
        title: "Star Wars",
        desc: "Star Wars: Episode IV - A New Hope",
        src:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        title: "Lethal Weapon 3",
        desc: "description about this movie",
        src: "https://media.teleman.pl/photos/lethal-weapon-3.jpg"
      },
      {
        title: "Spiral",
        desc: "Safe, Socially Distanced Movie Screening",
        src: "https://upload.wikimedia.org/wikipedia/ar/d/dd/Spiral_from_the_book_of_saw.jpg"
      },
      {
        title: "Star Wars",
        desc: "Star Wars: Episode IV - A New Hope",
        src:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        title: "Lethal Weapon 3",
        desc: "description about this movie",
        src: "https://media.teleman.pl/photos/lethal-weapon-3.jpg"
      }
    ];
    const items = movies.map((item, index) => {
      return  <Movie key={index} src={item.src} title={item.title} desc={item.desc} />
    })
    const rowItem =  items.map((item) => {
      return <Col xs="4">{item}</Col> 
    })

    return (
      <div>
        <Container className="Cont">
        <Row>
        {rowItem}
       </Row>
       </Container >
      </div >
    )
  }
}
export default App;

