import React from 'react'
import Stars from '../assets/stars.png'

function Card(props) {
  return (
    <div className=' lg:mx-10 mx-auto p-2.5 lg:flex-col block my-2 border-[#D7D7D7] rounded-2xl border-[1px] xl:w-12/12 md:w-2/5 w-3/5 xl:h-[379px] lg:h-[350px]md:[270px]'>
        <img src={`/src/assets/${props.item.img}`} className='lg:w-[260px] md:w-[280px]'/>
        <div className='text-xs pb-2 pt-4'>
        <span >Desert king</span><span className='float-right font-bold text-[#434343]'>1MBT per night</span>
        </div>
        <div className='text-xs py-2'>
        <span >2345km away</span><span className='float-right '>available for 2weeks stay</span>
        </div>
        <div className=' py-2'> 
            <img src={Stars}/>
        </div>

    </div>
  )
}

export default Card