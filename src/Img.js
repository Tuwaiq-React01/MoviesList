import React from 'react'

export default function Img(props) {
    return (
<div class="card" style={{width: "18rem;"}}>
<img src={props.imgSrc} class="card-img-top" alt="" height="300"/> 
<div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <a href="#" class="btn btn-warning">Recipe</a>
</div>
</div>   
    )
}
