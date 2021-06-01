import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Movies from './components/movies';
import { LISTS } from './shared/lists';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			lists: LISTS
		};
	}
	
	render(){
		return (
			<div className='App'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>Latest Movies</NavbarBrand>
					</div>
				</Navbar>
				
				<h1>Movies 2020-2021</h1>
				<Movies lists={this.state.lists} />
			</div>
		);
	}
}

export default App;