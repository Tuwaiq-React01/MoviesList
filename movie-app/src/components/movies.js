import React from 'react';
import { Media } from 'reactstrap';
import './movies.css';

class Menu extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		
		const movie = this.props.lists.map((movie) => {
			return(
				<div class="bigDiv" key={movie.id} id="unit" className="col">					
					{/* <Media tag="div">
						<Media left>
							<Media object src={movie.image} alt={movie.name} />
						</Media>
						<Media body className="row">
							<Media heading><strong>{movie.name}</strong></Media> */}
							<div><strong>{movie.name}</strong></div>
							<div><strong>Genre: </strong>{movie.category}</div>
							<div><strong>Cast: </strong>{movie.cast}</div>
							<div>Rating: {movie.rating}</div>
							<img height="275px" width="220px" src={window.location.origin + movie.image}/> <br/>
							<button type="button" class="btn btn-warning">Book</button><br/>
							<br></br>
						{/* </Media>
					</Media> */}
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="col">
					<Media div>
						{movie}
					</Media>
				</div>
			</div>
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default Menu;
