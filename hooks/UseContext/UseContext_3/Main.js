import React from 'react'
import { useAlert } from './AlertContext'

export default function Main() {

    const {toggle} = useAlert()

    return (
        <>
            <h1>Hello, Context Example</h1>
            <button onClick={toggle}>See alert</button>
        </>
    )
}