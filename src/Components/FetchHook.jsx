import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

function FetchHook() {
    const [data] = useFetch('https://fakestoreapi.com/products')

    
  return (
    <section>
        {data.map((product)=> {
            return (
                <div>
                    <h1> {product.title} </h1>
                </div>
            )
        })}
    </section>
  )
}

export default FetchHook