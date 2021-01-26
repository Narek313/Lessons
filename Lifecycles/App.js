import React, { Component } from 'react'

export default class App extends Component {

    constructor(props){
        console.log("constructor")
        super(props);
        this.state= {
            count:1,
            isDisabled: false,
            jnjel: true
        }
    }

// static getDerivedStateFromProps(props, state) {
//         if(state.count > 10){
            
//         }
// }

// UNSAFE_componentWillMount() {
//     console.log("UNSAFE_componentWillMount")
// }

// componentDidMount() {
//     console.log("componentDidMount")
// }

// UNSAFE_componentWillUpdate() {
//     console.log("componentWillUpdate")
// }

// componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate");
//     console.log("prevProps",prevProps);
//     console.log("prevState",prevState)
// }

// shouldComponentUpdate(nextProps, nextState) {
//     if(nextState.count > 10){
//         console.log("shouldComponentUpdate");
//         return false;
//     }
//     return true;
// }



// UNSAFE_componentWillReceiveProps(nextProps)
// shouldComponentUpdate(nextProps, nextState,nextContext) {}
// UNSAFE_componentWillUpdate(nextProps, nextState)
// render()
// componentDidUpdate(prevProps, prevState, prevContext) {}

// // nor dzev update-i hamar

// getDerivedStateFromProps(prevProps, prevState)
// shouldComponentUpdate(nextProps, nextState,prevContext) {
// }
// render()
// // Update child component this.props
// getSnapshotBeforeUpdate(prevProps, prevState)
// componentDidUpdate(prevProps, prevState,prevContext) {
    
// }

// componentWillUnmount() {}  //component-i mah




handleChange() {
    this.setState({count:this.state.count + 1})
}

    render() {
        console.log("render")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleChange}>Change</button>
            </div>
        )
    }
}
