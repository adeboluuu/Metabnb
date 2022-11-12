import React from 'react'

function Card(props) {
  return (
    <div className=' md:mx-10 mx-5 px-7 flex-col my-2 border-[#D7D7D7] rounded-lg w-[200px] h-[372px]'>
        <p>e</p>
        <img src={`/src/assets/${props.item.img}`}/>
        <p>Te</p>
    </div>
  )
}

export default Card