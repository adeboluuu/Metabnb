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

        <div className="grid grid-cols-3 gap-14 sm:gap-16 sm:grid-cols-4">
        <div className="-mt-1 mr-[6rem]">
        <ul className="">
                    <li className="mb-24">
                    <p href="https://flowbite.com/ " className="flex items-center mr-9">
                     <img src={Logo} className="h-8" alt="Logo"/>
                    </p>
                    </li>
                    <li>
                        <p className="flex gap-7">
                            <img src={Facebook}/>
                            <img src={Instagram}/>
                            <img src={Twitter}/>
                        </p>
                    </li>
                 
                </ul>
        </div>
            <div>
                <h2 className="mb-6 text-lg text-white font-bold ">Community</h2>
                <ul className="">
                    <li className="my-2">
                        <p href="#Nft" className=" text-sm hover:underline">NFT</p>
                    </li>
                    <li className="my-2">
                        <p href="#" className=" text-sm hover:underline">Tokens</p>
                    </li>
                    <li className="my-2">
                        <p href="#" className=" text-sm hover:underline">Landlords</p>
                    </li>    
                    <li className="my-2">
                        <p href="#" className=" text-sm hover:underline">Discord</p>
                    </li>                           
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-lg text-white font-bold ">Places</h2>
                <ul className="">
                    <li className="mb-2">
                        <p href="#" className=" text-sm hover:underline ">Castle</p>
                    </li>
                    <li className='my-2'>
                        <p href="#" className=" text-sm hover:underline">Farms</p>
                    </li>
                    <li className="my-2">
                        <p href="#" className=" text-sm hover:underline">Beach</p>
                    </li>  
                    <li className="my-2">
                        <p href="#" className=" text-sm hover:underline">Learn More</p>
                    </li>                                       
                </ul>
            </div>
            
            <div>
                <p className="mb-6 text-lg text-white font-bold ">About us</p>
                <ul className="">
                    <li className="mb-2">
                        <p href="#" className=" text-sm hover:underline ">Road map</p>
                    </li>
                    <li className="mb-2">
                        <p href="#" className=" text-sm hover:underline">Creators</p>
                    </li>
                    <li className="mb-2">
                        <p href="#" className=" text-sm hover:underline">Career</p>
                    </li>  
                    <li className="mb-2">
                        <p href="#" className=" text-sm hover:underline">Contact us</p>
                    </li>                                      
                </ul>
            </div>
        </div>
    </div>
    <div className=" mx-10 sm:flex sm:items-center sm:justify-between">
        <span className="text-sm ">© 2022 Metabnb
        </span>

    </div>
</footer>

    </div>
  )
}

export default Footer