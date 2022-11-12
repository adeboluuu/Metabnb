import React from 'react'
import {Link} from "react-router-dom";
import Nav from '../components/Nav'
import Body from '../components/Body'
import Hero from './Hero';
import '../assets/styles.css'
import data from './data'
import SecondData from './SecondData';
import Card from '../components/Card';

function Home() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      item={item}/>
    )
    
})     
  return (
    <div >
      <Nav/>
      <Body/>
      <Hero/>
      <section className='lg:flex block '>
        {cards}
      </section>
      
    </div>
  )
}

export default Home