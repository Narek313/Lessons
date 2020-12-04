import React from 'react'
import PropTypes from 'prop-types'


export default function Child(props) {
    // const name = props.name || "Default name";
    if(props.name !== "react.js"){
        return (
            <div>
                <h1 style={{color: "red"}}>Invalid name</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

Child.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

Child.defaultProps = {
    name: "Default name"
}
//1.nkar dnelu hamar importov u <img src={}>
// 2.index.html-ic hashvac nkar texadrel src=''-ov
//3.data.json sarqenq {'images': [
// {
//     "id": 1,
//     "url": 'https......'
// },
// ]}
// import anenq data.jsony state={data:data}
// 
