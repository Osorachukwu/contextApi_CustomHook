import React from 'react';
import { createContext, useState } from 'react' //1.👈make sure context is imported
import './App.css'
import Component1 from './Components/Component1';
import FetchHook from './Components/FetchHook';

export const EbukaContext = createContext(); 
//2.☝⚠ make sure to export correctly when you actually create the context, contextName must be written in caps.


function App() {
  //const [user, setUser] =useState('Ebuka'); 
  //👈the value to be share/passed in form of a string
  const [user, setUser] =useState(['Ebuka', 'Onyinye']);
  //👈the value to be share/passed in form of an array, objects can also be used


  return (
    <section>
      <EbukaContext.Provider value={user}>
        <Component1 />
      </EbukaContext.Provider>  

      <FetchHook />

    
    </section>
     
  )
}

export default App

{/*3.👈wrap everything in the context-provider tag*/}
{/*👈wrap everything in the context-provider tag*/}
