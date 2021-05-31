import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="card">
            <img src={ data.src } />
            <div className="details">
                <h3>{ data.title }</h3>
                <p> { data.description } </p>
            </div>
        </div>
    )
}

export default Card
