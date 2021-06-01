import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'
import './Movie.css'
import { Component } from 'react';
import Title from './Title';


export default class App extends Component {
  render(){
  return (
    <div className="App">
      <Title title="Welcome To My Movie List" style="  align-content: center;
"/>
      <Movie />
    </div>
  );
}
}
