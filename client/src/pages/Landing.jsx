import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/react.svg'
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoBuild, IoCreateSharp } from "react-icons/io5";

const Landing = () => {
    const [open,setOpen]=useState(false);
  return (
    <div>
        {/* Navbar */}
        <div className=' md:fixed z-10 h-[70px] align-middle  w-full bg-opacity-75   backdrop-blur-xl bg-clip-padding flex bg-[#05161A] p-10'>
                <nav className='relative flex justify-between items-center w-full  '>
                    <div className="">
                        <h1 className="lg:text-4xl text-2xl   font-bold  cursor-pointer "><img src={image}/></h1>
                    </div>
                    <div className="flex ">
                        <div className='mt-2'>
                            <span className='text-white mr-12'>How it works </span>
                            <span className='text-white mr-12'>Browse licenses </span>
                            <span className='text-white mr-12'>FAQ </span>
                            <span className='text-white mr-12'>About </span>
                        </div>
                        <div className='flex flex-row'>

                           <Link to='/login'><button className=" text-white font-semibold justify-center h-8 lg:w-[100px] w-[60px] bg-[#6DA5C0]  lg:text-md text-sm rounded-full flex  items-center  hover:bg-[#294d61] ">LogIn</button></Link> 
                           <Link to='/signup'><button className=" text-white font-semibold justify-center h-8 lg:w-[100px] w-[60px] bg-[#6DA5C0]  lg:text-md text-sm rounded-full flex  items-center  hover:bg-[#294d61] ml-2">SignUp</button></Link> 
                        </div>

                    </div>
                </nav>
        </div>
        {/* <div className='bg-[#111827]  w-full h-screen blur-sm display-flex absolute z-0'> */}
        {/* </div> */}
        {/* Hero section  */}

        <div className='bg-[#111827] w-full h-screen bg-[#111827] p-10 '>
            <div className=' flex md:flex-row flex-col  lg:m-0' >
                <div className='lg:mt-32  mt-10 flex-1 flex-col  flex  items-start '>
                    <div className='flex justify-center  flex-col align-middle text-white' >
                        <h1 className=' lg:text-6xl text-3xl mb-10 font-bold'>
                            The future of licensing your image &<br/> likeness
                        </h1>
                        <p className=' lg:text-[16px]  text-md '> World's 1st global multi-modal marketplace for licensing your digital image & likeness powered by generative AI technology</p>
                        <div className='mt-5 flex flex-col lg:flex-row'>
                            <div >
                                <button className="mt-2 text-white  justify-center h-2  bg-[#294d61] p-5 rounded-full flex  items-center lg:text-sm text-md   hover:shadow-gray-400 hover:bg-gray-800">License my asset</button>
                            </div>
                            <div>
                                <button className="mt-2 text-white  justify-center h-2  bg-[#294d61] p-5 rounded-full flex  items-center lg:text-sm text-md shadow-gray-400 ml-2 hover:shadow-lg  hover:bg-gray-800">Buy a license</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

            {/* Contents */}

            <div className='flex flex-col mt-[100px] justify-center'>
            <div className='flex justify-center'>
                <h1 className=' lg:text-6xl text-3xl text-white mb-10 font-bold'>
                    How it works
                </h1>
            </div>
            <div>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landing