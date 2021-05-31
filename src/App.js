import React, { Component } from 'react'
import image1 from './img/movie1.jpeg';
import image2 from './img/movie2.jpeg';
import image3 from './img/movie3.jpeg';
import image4 from './img/movie4.jpeg';
import image5 from './img/movie5.jpeg';
import image6 from './img/movie6.jpeg';
import myLogo from './logo.png';

import './App.css';

export default class App extends Component {

  render() {
    const moviesImg = [{
      image: image1, name: "On Ward", language: "English", cast: "Danial", ratings: "A"
    }, {
      image: image2, name: "Howl's moving castle", language: "Chaina", cast: "Joe", ratings: "U/N"
    }, {
      image: image3, name: "On Ward", language: "English", cast: "Danial", ratings: "A"
    }, {
      image: image4, name: "Tamako Love Story", language: "Japanes", cast: "Cho Kio", ratings: "A"
    }, {
      image: image5, name: "The Girl", language: "English", cast: "Danial", ratings: "A"
    }, {
      image: image6, name: "Spirited Away", language: "English", cast: "Danial", ratings: "U/A"
    }]

    const moviePrint = moviesImg.map((item, index) =>

      <tr key={index}>
        <td><img className="rounded-3" src={item.image} width="200" height="250" /></td>
        <td className="">
          Name: {item.name}
          <br />
              Language: {item.language}
          <br />
              Rating: {item.ratings}
          <br />
          <br />
          <button className="btn btn-dark">BOOK</button></td>
      </tr>
    )
    return (
      <div className="table-responsive box">
        <img className="mylogo" src={myLogo} />
        <h1>My List Movies</h1>

        <div className="container" >

          <table className="table">
            <tbody>
              {moviePrint}
            </tbody>
          </table>
        </div>
        <div id="footer">
          &copy; All rights reserved
        </div>
      </div>
    )
  }
}

