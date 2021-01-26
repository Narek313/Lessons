import React, { useState, useEffect, useMemo } from 'react'

function complexCompute(num) {
    console.log('complexCompute')
    let i = 0;
    while(i < 10000000000) {
        return num * 2
    }

}

export default function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    // const styles = useMemo (() => {{
    //         color: colored ? 'darkred' : 'black'
    //     }
    // }, [colored])

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    // useEffect(() => {
    //     console.log('Styles changed')
    // }, [styles])

    return (
        <div>
            <h1 style={styles}>Number: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Increment</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Decrement</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
        </div>
    )
}
