import React, { Component } from 'react'

export default class AppClass extends Component {

    state = {
        numbers:[1,2,3],
        visibility:true
    }

    toggleVisibility = () => {
        this.setState({
            visibility : !this.state.visibility  });
    }

    addRandomNumber = () => {
        const randNumber = Math.round(Math.random()*10);
        this.setState({
            numbers :[...this.state.numbers, randNumber]  });    
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps,prevState)
    }
    
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUnmount(nextProps, nextState) {
        
    }
        
    render() {
        return (
            <div>
               { this.state.visibility && <div>
               <ul>
                    {this.state.numbers.map((num,index) => (
                    <li key={index}>{num}</li>
                    ))}
                </ul>
                <button onClick={this.addRandomNumber}>New number</button>
                </div>}
                <button onClick={this.toggleVisibility}>Toggle List</button>
            </div>
        )
    }
    }
