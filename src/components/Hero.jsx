import React from 'react'
import Mbtoken from '../assets/MBToken.svg'
import Metamask from '../assets/Metamask.png'
import Opensea from '../assets/OpenSea.svg'


function Hero() {
  return (
    <div>
    <div className='bg-[#A02279] flex  justify-between sm:px-14 px-10 lg:gap-x-2 sm:py-3 py-2 my-2'>
            <img src={Mbtoken} className=' sm:w-44 w-20 -ml-2 py-2'/>
            <img src={Metamask} className='sm:w-44 w-20 py-2'/>
            <img src={Opensea} className=' sm:w-44 w-20 py-2'/>
    </div>
    <p className='lg:mx-10 mx-5 sm:text-5xl text-4xl text-center my-8'>
        Inspiration for your next adventure
        </p>
    </div>

  )
}

export default Hero