import React, { Component } from 'react'
import "./Food.css"

export default class Food extends Component {
    render() {
        const items = this.props.food.map((item,index)=>
        <li key = {index}>
            Food Type: {item}
        </li>)
        return (
            <div className ="food">
                <h2>This is class food</h2>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}
