import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from '../assets/Logo.png'


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="mx-10">
        <div className="max-w-7xl mx-auto py-2 xl:px-0 sm:px-6 2xl:px-24">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 xl:mr-10 mr-12 ">
                <img
                  className=""
                  src={Logo}
                  alt="Metabnb"
                />
              </div>
              <div className="hidden lg:block">
                <div>
           <div className="xl:mx-30 mx-24 justify-center items-center flex  space-x-7">


                  <a
                    href="#"
                    className="  px-1 py-2 rounded-md xl:text-xl text:xs font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#Inspiration"
                    className="  px-1 py-2 rounded-md xl:text-xl text:xs font-medium"
                  >
                    Place to Stay
                  </a>

                  <a
                    href="#Nft"
                    className="  px-1 py-2 rounded-md xl:text-xl text:xs font-medium"
                  >
                    NFTs
                  </a>

                  <a
                    href="#"
                    className="  px-1 py-2 rounded-md xl:text-xl text:xs font-medium"
                  >
                    Community
                  </a>

                </div>

                </div>


              </div>
              
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"hover
                className="bg-[#A02279]  inline-flex text-white items-center justify-center p-2 rounded-md   "
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
            <button className="px-0 py-2 hidden md:block bg-[#A02279] text-white w-[10.6rem] rounded-[10px] float-right  xl:text-xl text:xs font-medium">Connect wallet</button>
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
                  className="  block px-1 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="Inspiration"
                  className="  block px-1 py-2 rounded-md text-base font-medium"
                >
                  Place to Stay
                </a>

                <a
                  href="#Nft"
                  className="  block px-1 py-2 rounded-md text-base font-medium"
                >
                  NFTs
                </a>

                <a
                  href="#"
                  className="  block px-1 py-2 rounded-md text-base font-medium"
                >
                  Community
                </a>
              </div>
              <button className="px-0 py-2 mr-4 bg-[#A02279] text-white w-[10.6rem] rounded-[10px]   xl:text-xl text:xs font-medium">Connect wallet</button>
            </div>
          )}
          </Transition>
      </nav>

    </div>
  );
}

export default Nav;
