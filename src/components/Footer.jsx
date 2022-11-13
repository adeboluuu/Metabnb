import React from 'react'
import Logo from '../assets/Metabnb.svg'
import Facebook from '../assets/facebook-263-721950.png'
import Instagram from '../assets/instagram-216-721958.png'
import Twitter from '../assets/twitter-241-721979.png'

function Footer() {
  return (
    <div>
        
<footer className="p-4 text-white sm:p-6 bg-[#1D1D1E]">
    <div className="md:flex mx-10 ">

        <div className="grid grid-cols-4 gap-6 sm:gap-16 sm:grid-cols-4">
        <div className="-">
        <ul className="">
                    <li className="mb-10 sm:mb-24 xl:mt-0 -mt-2">
                    <p href="# " className="flex items-center xl:mr-20 lg:mr-10">
                     <img src={Logo} className="sm:w-96  w-[9rem] h-8" alt="Logo"/>
                    </p>
                    </li>
                    <li>
                        <p className="block sm:flex sm:gap-7 my-4">
                            <img src={Facebook} className='my-2'/>
                            <img src={Instagram}className='my-2'/>
                            <img src={Twitter} className='my-2'/>
                        </p>
                    </li>
                 
                </ul>
        </div>
            <div>
                <h2 className="mb-6 sm:text-lg text-[13px] text-white font-bold ">Community</h2>
                <ul className="">
                    <li className="my-2">
                        <p href="#Nft" className=" text-xs hover:underline">NFT</p>
                    </li>
                    <li className="my-2">
                        <p href="#" className=" text-xs hover:underline">Tokens</p>
                    </li>
                    <li className="my-2">
                        <p href="#" className=" text-xs hover:underline">Landlords</p>
                    </li>    
                    <li className="my-2">
                        <p href="#" className=" text-xs hover:underline">Discord</p>
                    </li>                           
                </ul>
            </div>
            <div>
                <h2 className="mb-6 sm:text-lg text-[13px] text-white font-bold ">Places</h2>
                <ul className="">
                    <li className="mb-2">
                        <p href="#" className=" text-xs hover:underline ">Castle</p>
                    </li>
                    <li className='my-2'>
                        <p href="#" className=" text-xs hover:underline">Farms</p>
                    </li>
                    <li className="my-2">
                        <p href="#" className=" text-xs hover:underline">Beach</p>
                    </li>  
                    <li className="my-2">
                        <p href="#" className=" text-xs hover:underline">Learn More</p>
                    </li>                                       
                </ul>
            </div>
            
            <div>
                <p className="mb-6 sm:text-lg text-[13px] text-white font-bold ">About us</p>
                <ul className="">
                    <li className="mb-2">
                        <p href="#" className=" text-xs hover:underline ">Road map</p>
                    </li>
                    <li className="mb-2">
                        <p href="#" className=" text-xs hover:underline">Creators</p>
                    </li>
                    <li className="mb-2">
                        <p href="#" className=" text-xs hover:underline">Career</p>
                    </li>  
                    <li className="mb-2">
                        <p href="#" className=" text-xs hover:underline">Contact us</p>
                    </li>                                      
                </ul>
            </div>
        </div>
    </div>
    <div className=" mx-10 sm:flex sm:items-center sm:justify-between">
        <span className="text-[13px] ">© 2022 Metabnb
        </span>

    </div>
</footer>

    </div>
  )
}

export default Footer