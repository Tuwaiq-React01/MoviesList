import React, { Component } from 'react'
import "./Hobbies.css"

export default class Hobbies extends Component {
    render() {
        const addHoppies = this.props.hoop.map((addHoppies,index) =>
        <li key = {index}>
            {index+1}-{addHoppies}
        </li>)
        return (
            <div>
                <ul className ="hoppy">
                {addHoppies}
                </ul>
            </div>
        )
    }
}
