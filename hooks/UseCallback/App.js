import React, { useState, useCallback } from 'react'
import ItemsList from './ItemsList'

export default function App() {

    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Element ${i + 1}` )
    }, [count])

    return (
        <>
            <h1 style={styles}>Element count: {count} </h1>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
        
            <ItemsList getItems={generateItemsFromAPI}/>
        </>
    )
}
