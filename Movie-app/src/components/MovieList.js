import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function MovieList(props) {
	
	const AllMovies = props.movies.map((movie, index) => (
<div className="flip-card">	
    <div className="flip-card-inner">
             <div className="flip-card-front">
                 <img src={movie.poster} alt="Avatar"width="300px" height="300px" />
            </div> 
        <div className="flip-card-back">
             <h1>{movie.title}</h1> 
				<h3>{movie.genres}</h3>
			 <Button className="btn btn-warning">Details</Button>

        </div>
	</div>
</div>
		));
	return (
		            <div>
					<Container className="Container">
					<Row>
					{AllMovies}
				   </Row>
				   </Container >
				  </div >
	);
};