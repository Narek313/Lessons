import React, { Component } from 'react'
import Child from './Child'

export const MyContext = React.createContext("Default")

export default class App extends Component {

    state={
        count:5
    }

    render() {
        return (
            <div>
                <h1>App</h1>
                <MyContext.Provider value={{count:this.state.count,
                                            onClick:function(){console.log("Click Context")}}}>
                <Child/>
                </MyContext.Provider>
            </div>
        )
    }
}
