import React, { Component } from 'react'
import './Movie.css'
export default class Movie extends Component {
    render() {
        let movieList=[{title:"The Godfather" ,src:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.2, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"The Godfather: Part II " ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"12 Angry Men" ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"The Godfather: Part II " ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"The Godfather: Part II " ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"The Godfather: Part II " ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"The Godfather: Part II " ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"The Godfather: Part II " ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"},
        {title:"The Godfather: Part II " ,src:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", Rating:9.1, 
        cast:"Marlon Brando,Al Pacino",lang:"English"}
    ]


    let cards = movieList.map((item,i)=>(

                    <div className="column" key={i}>
                    
                   <img src={item.src}/>
                   <h3><b>{item.title}</b></h3>
                    <p>{item.Rating}</p> 
                    <span>{item.cast}</span>  
                    <div>{item.lang}</div> 
                   <button>Book</button>
                   </div>
    ))
        return (

            <div className="row">
                {cards}
                   
            </div>
        )
    }
}
