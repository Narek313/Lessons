import React from 'react'

export default function App() {
    const [numbers,setNumbers] = React.useState([1,55,3]);

    const addNumber = () => {
        const randNumber = Math.round(Math.random()*10);
        const newArr = [...numbers, randNumber];
        setNumbers(newArr);
    };
    return (
        <div className="App">
            <ul>
                {numbers.map((num,index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>New number</button>
            
        </div>
    )
}
