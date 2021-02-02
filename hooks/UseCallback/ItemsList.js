import React, { useState, useEffect } from 'react'

export default function ItemsList({ getItems }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems()
        setItems(newItems)
    }, [getItems])

    return (
        <ul>
           { items.map((elem,i) => <li key={i}>{elem}</li>)} 
        </ul>
    )
}
