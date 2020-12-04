import React, { Component } from 'react'

interface IState {
  count:number,
  value:string,
  [propName:string]: any,
}

export default class App extends Component <{}, IState> {

  state = {
    count:1,
    value:"",
    age:25
  }

  handleClick = (e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    console.log(e)
    this.setState(({count}) => ({
      count: ++count
    }));
  }

  handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    this.setState(({value}) => ({
      value: e.target.value
    }));
  }

  handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  handleFocus = (e:React.FocusEvent<HTMLInputElement>) => {
    console.log("focus")
  }
  
  render() {
    return (
      <>
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Click</button>
          <a href="/" onClick={this.handleClick}>Home page</a>
      </div>
          <form onSubmit={this.handleSubmit}>
          <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus}/>
          </label>
          </form>
      </>
    )
  }
}

