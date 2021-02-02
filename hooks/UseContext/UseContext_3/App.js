import React from 'react'
import Alert from './Alert'
import Main from './Main'
import { AlertProvider } from './AlertContext'

export default function App() {

    return (
        <AlertProvider>
        <div>
            <Alert/>
            <Main toggle={() => {}}/>
        </div>
        </AlertProvider>
    )
}