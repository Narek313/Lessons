import React from 'react'
import Child from './component'


export default class App extends React.Component{
  state= { //class-i sepakanutyunna ev aravelutyunna functionali hamemat
    //______________________________________________
    // arr:[1,2,3,4],
    // name: 'Karen'
    //______________________________________________

    count: 0
  }
  add = () => {
    this.setState({count: this.state.count + 1})

    //______________________________________________
    // let copy = [...this.state.arr]
    // let copy = this.state.arr.slice()
    // let copy = concat(this.state.arr)
    // copy.push(5)
    // this.setState({ arr: copy })
    //______________________________________________

  } 
  render(){
    // let count = this.state.count
    const {count} = this.state
    return (
      <div>
        <h1>{count}</h1>



        {/* <h1>Hello React</h1>
        <h2>{this.state.name}</h2>
        {this.state.arr.map((elem,index) => <li key={index}>{elem}</li>
        )} */}


        {/* <Child>
        <h1>Vernagir</h1>
        <p>lorem</p>
        </Child> */}
        

        <button onClick={this.add}>add Count</button> 
      </div>
      // {() => this.add(15)}
    )
  }
} 