import React from 'react';
import Conponent2 from './component2'


export default function Component(props){
    console.log(props.children)

      return (
        <div>
          {/* <h1>Child Component from {props.name || 'unknown'}</h1>
          <Conponent2 name={props.name}/> */}
        </div>
      )
    }
