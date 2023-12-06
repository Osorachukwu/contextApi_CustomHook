# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import { useState } from 'react'
import './App.css'
import Accordion from './Components/Accordion'

const faqs = [ 
  {
    title: 'Where are these chairs assembled?', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, placeat adipisci, veniam mollitia, quam minima obcaecati alias voluptatum rem natus consectetur magnam dolor.' 
  },
  {
    title: 'How long do I have to return the chair', 
    text: 'Veritatis deserunt sed eveniet aperiam ameteaque ab quaerat perferendis odio facilis repudiandaeipsa obcaecati enim aspernatur tempore hic esse,nihil ad corporis.' 
  },
  {
    title: 'How long do I have to return the chair', 
    text: 'Eligendi iste molestiae nihil earum adipiscvoluptatem aperiam, et esse natus consectetulaborum accusantium, eaque delectus error quidesapiente blanditiis numquam, dolores fuga corrupteos!.' 
  }

]


function App() {

  return (
    <section>
      <Accordion data={faqs} />
    </section>
     
  )
}

export default App

**********************************************************************************


import React from 'react'
import AccordionItem from './AccordionItem'

function Accordion({data}) {
  return (
    <section className='accordion'>
        {data.map((el, i)=> (
            <AccordionItem title={el.title} text={el.text} num={i} />
        ))}



    </section>
  )
}

export default Accordion


************************************************************************************
import React, { useState } from 'react'

function AccordionItem({num, title, text}) {
    const [isOpen, setIsOpen] =useState(false)
  return (
    <section className='item'>
        <p className='number'> {num < 9 ? `0${num + 1}` : num + 1} </p>
        <p className='title'> {title} </p>
        <p className='icon'> - </p>

        <div className='content-box'> {text} </div>

       

    </section>
  )
}

export default AccordionItem