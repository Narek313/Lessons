import React,{ useState, useEffect } from 'react'

export default function App() {
// ____________1_________________________________

    // const myState = useState(0);
    // let count = myState[0];
    // let setcount = myState[1];
// ____________2_________________________________

    // let [count, setCount] = useState(0);
    // const [name, setName] = useState("Hooks");

    // const handleClick = () => {
    //     setCount(count + 1);
    //     setName("change")
    // }
// ____________3_________________________________

    let [data, setData] = useState({
        count:0,
        name:"Hooks"
    });

    const handleClick = () => {
        setData({...data, count: data.count + 1, name: data.name + "1"})
    }
// _____________________________________________

    useEffect(() => {
        console.log("update");
    },[data.count])





    return (
        <div>
            <h1>{data.count}</h1>
            <h1>{data.name}</h1>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}
