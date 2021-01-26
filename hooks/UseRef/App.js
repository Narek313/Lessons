import React, {useState, useEffect, useRef}from 'react'

export default function App() {

    // const [renderCount, setRenderCount] = useState(1) // amen poxeluc rendera anum
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // }) 
    // infinite loop

    const [value, setValue] = useState('initial');
    const renderCount = useRef(1); // renderCount is object
    const inputRef = useRef(null);
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current ++
        console.log(inputRef.current.value)
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div>
            {/* <h1>Render count: {renderCount}</h1> */}
            <h1>Render count: {renderCount.current}</h1>
            <h2>Previous value: {prevValue}</h2>
            <input ref={inputRef} type="text" onChange={e => {setValue(e.target.value)}} value={value}/>
            <button onClick={focus}>Focus</button>
        </div>
    )
}
