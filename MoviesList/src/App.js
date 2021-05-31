import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Card, Container } from 'react-bootstrap';
import Title from './Titile'


function App() {
  const movies = [
    { image: "https://miro.medium.com/max/2716/1*-XWivw_W631IldZ5ZmIbyA.jpeg", Title: "MERRICK", Language: "English", Rate: 9 },
    { image: "https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg", Title: "IO", Language: "English", Rate: 8.5 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63OwATIHAdCGaLW_0Y9I88lDJBJAoyrMLgQ&usqp=CAU", Title: "ICEMAN", Language: "English", Rate: 6 },
    { image: "https://d3es5bqloyicro.cloudfront.net/images/films/23696438-636a-4c47-ac14-ededeb13f77d.jpeg?=1622023594913", Title: "The Conjuring", Language: "English", Rate: 5 },
    { image: "https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg", Title: "movie2", Language: "English", Rate: 8.4 },
    { image: "https://d3es5bqloyicro.cloudfront.net/images/films/62a2db85-5900-4e79-9ec9-864fdb0d7c2e.jpeg?=1620317942025", Title: "Wrath Of Man", Language: "English", Rate: 8 },
    { image: "https://d3es5bqloyicro.cloudfront.net/images/films/94acc272-88d5-4993-b4a7-604c225c4877.jpeg?=1619513709015", Title: "Fast & Furious 9", Language: "English", Rate: 9 },
    { image: "https://d3es5bqloyicro.cloudfront.net/images/films/398580f3-7f2d-4369-9084-9ade1e40006d.jpeg?=1622465700023", Title: "A Quiet Place Part II", Language: "English", Rate: 10 },
    { image: "https://d3es5bqloyicro.cloudfront.net/images/films/a870c936-fef9-4128-aab9-2527a4d9ca72.jpeg?=1621516677295", Title: "Spiral", Language: "English", Rate: 5 }
  ];



  let movies1 = movies.map((currentval, index) => (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={currentval.image} height="400px" width="100px" />
      <Card.Body>
        <Card.Title>{currentval.Title}</Card.Title>
        <Card.Text>
          <b>Language:</b>{currentval.Language}<br></br>
          <b>Rate:</b> {currentval.Rate}
        </Card.Text>

        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
  ))
  return (
    <div className="App" >
      <Title name="Book a movie" />
      <div className="Mr">
        <div className="row">
          {movies1}
        </div>
      </div>
      <footer>2021</footer>
    </div>
  );
}

export default App;
