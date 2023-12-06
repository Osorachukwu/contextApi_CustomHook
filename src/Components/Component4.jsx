import React from 'react'
import { useState, useContext, createContext } from 'react'
import { EbukaContext } from '../../src/App.jsx'
//make☝ sure to import the the context properly (use curly braces) 


function Component4() {
    const user = useContext(EbukaContext);

  return (
    <div>
        <h1>Component4 {user}</h1>
        <h2> {user} </h2>
    </div>
  )
}

export default Component4