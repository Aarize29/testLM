import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/react.svg'

const Landing = () => {
    const [open,setOpen]=useState(false);
  return (
    <div>
        {/* Navbar */}
        <div className=' md:fixed z-10 h-[70px] align-middle  w-full bg-opacity-96  backdrop-blur-xl bg-clip-padding flex bg-[#05161A] p-10'>
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

                            <button className=" text-white font-semibold justify-center h-8 lg:w-[100px] w-[60px] bg-[#6DA5C0]  lg:text-md text-sm rounded-full flex  items-center  hover:bg-[#294d61] ">LogIn</button>
                            <button className=" text-white font-semibold justify-center h-8 lg:w-[100px] w-[60px] bg-[#6DA5C0]  lg:text-md text-sm rounded-full flex  items-center  hover:bg-[#294d61] ml-2">SignUp</button>
                        </div>

                    </div>
                </nav>
        </div>
    </div>
  )
}

export default Landing