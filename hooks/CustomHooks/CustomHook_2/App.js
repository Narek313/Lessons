import React, { useState, useEffect } from 'react'

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

export default function () {

    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value)

    return (
        <div>
            <input type="text" {...input.bind}/>
            <input type="text" {...lastName.bind}/>
            <button onClick={() => input.clear()}>Delete Name</button>
            <button onClick={() => lastName.clear()}>Delete LastName</button>
            <hr/>
            <h1>{input.value}</h1>
            <h1>{lastName.value}</h1>
        </div>
    )
}
