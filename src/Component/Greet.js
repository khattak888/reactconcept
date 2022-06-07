import React from 'react'
import { SimpleHoc } from './shared/SimpleHoc'
//Hoc;the component which accept another compponent as an argumen is called Hoc

function Greet(props) {
    console.log(props)
  return (
   <>
   <h1>My Name is:{props.name}</h1>
   <p>This message is getting displayed because of hoc:{props.newProps}</p> 
   </>
  )
}

export default SimpleHoc(Greet)