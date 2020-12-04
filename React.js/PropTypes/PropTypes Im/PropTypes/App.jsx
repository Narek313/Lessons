import React, { Component } from 'react'
import Child from "./Component"

export default class App extends Component {
    state= {
        name: "React.js"
    }
    render() {
        return (
            <div>
                <Child/>
            </div>
        )
    }
}
