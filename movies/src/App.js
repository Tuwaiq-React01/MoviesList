import React, { Component } from 'react'
import i1 from'./Images/i1.jpg'
import i2 from'./Images/i2.jpg'
import i3 from'./Images/i3.jpg'
import i4 from'./Images/i4.jpg'
import i5 from'./Images/i5.jpg'
import i6 from'./Images/i6.jpg'

import Movie from './Movie'
import './Movie.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    var items = [
      { img:i1 , title: "MADAGASCAR", description: "A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.",price:50},
      { img:i2 , title: "FINDING NEMO", description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home." ,price:80 },
      { img:i3 , title: "HOME IN THE RANGE", description: "To save their farm, the resident animals go bounty hunting for a notorious outlaw." ,price:90},
      { img:i4 , title: "RISE OF THE GAURDIAN", description: "When the evil spirit Pitch launches an assault on Earth, the Immortal Guardians team up to protect the innocence of children all around the world." ,price:110},
      { img:i5 , title: "BOSS BABY", description: "The Templeton brothers have become adults and drifted away from each other, but a new boss baby with a cutting-edge approach is about to bring them together again - and inspire a new family business." ,price:60},
      { img:i6 , title: "ZOOTOPIA", description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy." ,price:75}
    ];
  
    const itemsList = items.map((item, i) => {
      return <Movie key={i} imgSrc={item.img} title={item.title} price={item.price} description={item.description} />
    })
    return (
      <div className="wrapper" >
        {itemsList}
      </div>
    )
  }
}