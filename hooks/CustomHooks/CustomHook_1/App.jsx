import React from 'react'
import { CustomHook } from "./CustomHook";

export default function App() {
    const [value, {gumar, minus, reset}] = CustomHook({
        g: 5,
        m: 2,
        initial: 0,
        min: 0,
        max: 100
    })
    return (
        <div>
            <h1>Value: {value}</h1>
            <button onClick={gumar}>gumar</button>
            <button onClick={minus}>minus</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
