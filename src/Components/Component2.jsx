import React from 'react'
import Component3 from './Component3'
import { useState, useContext, createContext } from 'react'
import { EbukaContext } from '../../src/App.jsx'


function Component2() {
    const user = useContext(EbukaContext)
  return (
    <div>
        <h1>Component2 {user}</h1>
        <Component3 />
    </div>
  )
}

export default Component2