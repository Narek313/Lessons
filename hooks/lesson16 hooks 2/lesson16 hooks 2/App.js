import React, { useReducer, useRef, useEffect } from 'react'
import  reducer  from './reducer'

export default function App() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <div>
            <input type="text" ref = {inputRef}/>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type:"gumarum"}) }>+</button>
            <button onClick={() => dispatch({type:"hanum"}) }>-</button>
            <button onClick={() => dispatch({type:"add", number: 10}) }>add</button>
            <button onClick={() => dispatch({type:"reset"}) }>reset</button>
        </div>
    )
}
