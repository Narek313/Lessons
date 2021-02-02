import React from 'react'
import {MyContext} from './App'

export default function Child2() {
    return (
        <div>
            <h1>Child 2</h1>
            <MyContext.Consumer>
                {function(value){
                    return <h1 onClick={value.onClick}>{value.count}</h1>
                }}
            </MyContext.Consumer>
        </div>
    )
}
