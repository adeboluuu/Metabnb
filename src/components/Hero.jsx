import React from 'react'
import Mbtoken from '../assets/MBToken.svg'
import Metamask from '../assets/Metamask.png'
import Opensea from '../assets/OpenSea.svg'


function Hero() {
  return (
    <div className='bg-[#A02279] sm:flex block justify-between sm:px-14 px-10 lg:gap-x-2 sm:py-4 py-2'>
            <img src={Mbtoken} className=' sm:w-44 w-32 -ml-2 py-2'/>
            <img src={Metamask} className='sm:w-44 w-32 py-2'/>
            <img src={Opensea} className=' sm:w-44 w-32 py-2'/>
    </div>
  )
}

export default Hero