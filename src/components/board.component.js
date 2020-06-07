import React, { Component } from 'react'
import People from './people.component'

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <People />
                <People />
            </div>
        )
    }
}

export default Board;
