import React from 'react'
import Grid from '../assets/Image grid.png'
import Hero from './Hero'
function Body() {
  return (
    <div className=' md:mx-10 mx-5 px-7  '>
        <div className='md:grid lg:grid-cols-5 gap-3 block sm:py-20 py-5'>
        <div className='col-span-3'>
            <p className='lg:mb-8 mb-4 md:text-6xl md:leading-[6rem] text-5xl leading-tight py-3   break-normal'>Rent a <span className='text-[#A02279]'>Place</span> away from <span className='text-[#A02279]'>Home</span> in the <span className='text-[#A02279]'>Metaverse</span></p>
            <p className='lg:max-w-[44rem] max-w-xl md:mb-16 mb-8 sm:text-2xl break-normal'>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className=" flex items-center">
            <div className="flex border rounded">
                <input
                    type="text"
                    className="block xl:w-96 lg:w-80 md:w-96 w-60 px-4 py-2 border rounded-md  focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search for location"
                />
                <button className="px-4 lg:w-36 text-white bg-[#A02279] border-l rounded ">
                    Search
                </button>
            </div>
        </div>
        </div>
        <div>
            <img src={Grid} alt='Grid'className='sm:max-w-sm mx-auto sm:mt-5 mt-10'/>
        </div>
        </div>

    </div>
  )
}

export default Body