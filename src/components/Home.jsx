import React from 'react'
import {Link} from "react-router-dom";
import Nav from '../components/Nav'
import Body from '../components/Body'
import Hero from './Hero';
import '../assets/styles.css'

function Home() {
  return (
    <div >
      <Nav/>
      <Body/>
      <Hero/>
    </div>
  )
}

export default Home