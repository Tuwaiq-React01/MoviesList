
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Movie = ({movieProps}) => {
    return (
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" width='200px' height = '400px' src={"https://image.tmdb.org/t/p/w500"+movieProps.poster_path} />
        <Card.Body>
            <Card.Title>{movieProps.title}</Card.Title>
            <Card.Text style={{ height: "400px" }} className="">
            {movieProps.overview}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        
        // <div class="col-md-3 ">
        //     <ul>
        //         <li>{bookProps.title}</li>
        //         <li>{bookProps.overview}</li>
        //         <li>{bookProps.popularity}</li>
        //         <li>{bookProps.release_date}</li>
        //         <li>{bookProps.title}</li>        
        //         <li> <button class="btn btn-primary"  ></button></li>   
        //     </ul>

        // </div> 
    )
}

export default Movie



