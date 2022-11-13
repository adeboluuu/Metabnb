import React from 'react'
import Frame from '../assets/Frame 59546.png'

function Nft() {
  return (
    <div className='bg-[#A02279]  mt-5 px-14 text-white sm:py-20 py-5' id='Nft'>
        <div className='md:grid lg:grid-cols-5 block '>
            <div className='max-w-xl col-span-3'>
                <p className='text-5xl pb-6'>Metabnb NFTs</p>
                <p className=' pb-7 max-w-md text-1xl leading-8'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                <button className="px-4 py-2 lg:w-36 bg-white text-[#A02279] border-l rounded ">
                    Learn More
                </button>
            </div>
            {/* Reduce image size on smaller devices */}
            <div className=''>
                <img src={Frame} className='sm:h-[370px] h-[290px] sm:max-w-[276rem] w-auto mx-auto mt-3'/>
            </div>
        </div>
    </div>
  )
}

export default Nft