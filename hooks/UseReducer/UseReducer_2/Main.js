import React from 'react'
import { useAlert } from './AlertContext'

export default function Main() {

    const {show} = useAlert()

    return (
        <>
            <h1>Hello, Context Example</h1>
            <button onClick={() => show('This text is from Main.js')}>See alert</button>
        </>
    )
}