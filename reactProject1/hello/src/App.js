import './App.css';
import Movie from "./Movie";
import Title from "./Title";
import { Component } from "react";

export default class App extends Component {
  render(){

  return (
    <div className="App">
      <Title title="Movie"/>
      <Movie />
   
    </div>
  );
}}
