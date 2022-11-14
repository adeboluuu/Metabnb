import React, { useState }  from 'react'
import { Transition } from "@headlessui/react";
import Nav from './Nav'
import placedata from '../components/placedata'
import Filter from '../assets/filter.png'
import Placecards from './Place-cards';

function Placetostay() {
    const [isOpen, setIsOpen] = useState(false);
    const cards = placedata.map(item => {
      return (
        <Placecards
        key={item.id}
        item={item}/>
      )
    })
  return (
    <div>
        <Nav/>
        <nav className="mx-10 sticky">
        <div className="max-w-7xl mx-auto py-10 xl:px-0 sm:px-6 2xl:px-24">
          <div className=" items-center lg: l gap-x-2 flex md:gap-x-4 h-16">
            <div className="flex items-center">
              <div className="hidden lg:block">
                <div>
           <div className="xl:mx-30 mx-5 justify-center xl:text-lg lg:text-md text:xs items-center flex  space-x-12">


                  <a
                    href="#"
                    className="  px-1 py-2 rounded-md  font-medium"
                  >
Restaurant
                  </a>

                  <a
                    href="#Inspiration"
                    className="  px-1 py-2 rounded-md  font-medium"
                  >
                   Cottage
                  </a>

                  <a
                    href="#Nft"
                    className="  px-1 py-2 rounded-md  font-medium"
                  >
  Castle
                  </a>

                  <a
                    href="#"
                    className="  px-1 py-2 rounded-md  font-medium"
                  >
                    Fancast city
                  </a>
  
                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Beach
                </a>
                
                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Cabins
                </a> 
                
                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Off -grid
                </a>
                
                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Farm
                </a>               

                </div>

                </div>


              </div>
              
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"hover
                className="inline-flex text-black items-center justify-center p-2 rounded-md   "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="  block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              
            </div>
            <div class="bg-white border  border-[#B4B4B4] w-[10.6rem] rounded-[10px] px-4 py-3 flex gap-5"><button type="button" class="">Location</button><img src={Filter} alt="filter"/></div>
          </div>
          
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-1">

                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >Restaurant
                </a>

                <a
                  href="Inspiration"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                 Cottage
                </a>

                <a
                  href="#Nft"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
Castle
                </a>

                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Fancast city
                </a>

                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Beach
                </a>
                
                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Cabins
                </a> 
                
                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                Off -grid
                </a>
                
                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md font-medium"
                >
                  Farms
                </a>               
              </div>
              <button  onClick={() => setShowModal(true)} className="px-0 py-2 mr-4 bg-[#A02279] text-white w-[10.6rem] rounded-[10px]    font-medium">Connect wallet</button>
              
            </div>
          )}
          </Transition>
      </nav>

      <section className='flex flex-wrapper '>
        {cards}
      </section>

    </div>
  )
}

export default Placetostay