import React from 'react'
import Component4 from './Component4'
import { useState, useContext, createContext } from 'react'
import { EbukaContext } from '../../src/App.jsx'
import useFetch from './useFetch.js'

function Component3() {
    const user = useContext(EbukaContext);
    const [data] = useFetch('https://fakestoreapi.com/products')
  return (
    <div>
        <h1>Component3 {user[1]}</h1>
        <Component4 />

        {data.slice(1, 5).map((pro)=> {
            return (
                <div>
                    {pro.title}
                </div>
            )
        })}
    </div>
  )
}

export default Component3