import React, { Component } from 'react'

export default class Pictures extends Component {
    render() {
        
        const addHoppies= this.props.titleName.map((addHoppies,index) =>
        <div><li key = {index}>
            {index+1}-{addHoppies}
        </li><img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /> </div>)
        return (
            <div>
                 <div>
                <ul className ="picture">
                {addHoppies}
                </ul>
            </div>
                </div>
            
        )
    }
}

