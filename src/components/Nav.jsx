import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from '../assets/Logo.png'
import Modal from "./Modal";
import Metamask from '../assets/Mask.png'
import Walletconnect from '../assets/Walletconnect.png'
import Chevron from '../assets/Down Chevron.png'


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="sticky top-0 z-30 w-full bg-white py-2">
      <nav className="mx-10">
        <div className="max-w-7xl mx-auto py-2 xl:px-0 sm:px-6 2xl:px-24">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0 xl:mr:12 mr-12 ">
                <img
                  className="ml-4"
                  src={Logo}
                  alt="Metabnb"
                />
              </div>
              <div className="hidden lg:block">
                <div>
           <div className="xl:ml-24 lg:mx-0 xl:space-between lg:justify-between  items-center flex  xl:space-x-9 lg:space-x-2">


                  <a
                    href="/"
                    className="  px-1 py-2 rounded-md xl:text-lg text:xs font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="/place-to-stay"
                    className="  px-1 py-2 rounded-md xl:text-lg text:xs font-medium"
                  >
                    Place to Stay
                  </a>

                  <a
                    href="#Nft"
                    className="  px-1 py-2 rounded-md xl:text-lg text:xs font-"
                  >
                    NFTs
                  </a>

                  <a
                    href="/"
                    className="  px-1 py-2 rounded-md xl:text-lg text:xs font-medium"
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
            <button    onClick={() => setShowModal(true)} className="px-0 py-2 hidden md:block bg-[#A02279] text-white w-[10.6rem] rounded-[10px] float-right  xl:text-lg text:xs font-medium">Connect wallet</button>

    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 mx-auto sm:w-[35rem] w-[25rem]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="p-4 pb-2">
                  <span className="text-xl font-normal text-center">
                    Connect Wallet
                  </span>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-[#333333] text-[29px] float-right leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-[#333333]  h-10 w-30 block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <hr className="text-[#CFD8DC] border-[1px]"/>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="my-4 text-[#333333] text-base">
                  Choose your preferred wallet:
                  </p>
                  <div class="flex justify-between  cursor-pointer rounded-xl my-4 border border-[#CFD8DC] p-2">
                    <div class="flex items-center gap-x-2 "><img src={Metamask} alt="metamask"/><p>Metamask</p></div><button class="text-2xl">&gt;</button>
                  </div>
                  <div class="flex justify-between  cursor-pointer rounded-xl my-4 border border-[#CFD8DC] p-2">
                    <div class="flex items-center gap-x-2 "><img src={Walletconnect} alt="metamask"/><p>WalletConnect</p></div><button class="text-2xl">&gt;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
null)}
    </>
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
                  href="/"
                  className="  block px-1 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="/place-to-stay"
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
                  href="/"
                  className="  block px-1 py-2 rounded-md text-base font-medium"
                >
                  Community
                </a>
              </div>
              <button  onClick={() => setShowModal(true)} className="px-0 py-2 mr-4 bg-[#A02279] text-white w-[10.6rem] rounded-[10px]   xl:text-lg text:xs font-medium">Connect wallet</button>
              
            </div>
          )}
          </Transition>
      </nav>

    </div>
  );
}

export default Nav;
