import React from 'react'
import {Link} from "react-router-dom";
import Nav from '../components/Nav'
import Body from '../components/Body'
import '../assets/styles.css'

function Home() {
  return (
    <div >
      <Nav/>
      <Body/>
    </div>
  )
}

export default Home