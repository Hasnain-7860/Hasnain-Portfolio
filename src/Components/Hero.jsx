import React from 'react'
import img from '../assets/image.png' 
import { FaArrowRight } from "react-icons/fa6";
import { LuArrowDownToLine } from "react-icons/lu";



const Hero = () => {
  return (
    <div className='flex items-center flex-col gap-[30px] justify-center h-[100vh]   text-white lg:h-[100vh]'> 
        <h1 className='text-center w-[100%] text-[30px] text-[#BFBFC6] lg:text-[80px] lg:w-[60%]  '><span className='font-bold'>Hello! I'm Mohd Hasnain</span> Frontend Developer</h1>
        <p className='w-[85%] align-center text-center text-[15px] text-[#BFBFC6] lg:text-[24px] lg:w-[50%]  '>Building the web with passion and precision.</p>
        <div className='flex items-center gap-[25px] text-[24px] font-semibold mb-[50px]'>
            <div className='px-[10px] py-[10px] text-[12px]   rounded-[50px] cursor-pointer bg-[linear-gradient(264deg,#DC143C,#DC143C)] text-[#BFBFC6] hover:border-[1px] lg:px-[15px] lg:text-[20px] hover:border-white'><a href="#Contact">Connect with me</a> <FaArrowRight className='inline' /></div>
                <a href="Hasnain Resume.pdf" download><div className='px-[20px] text-[12px] py-[10px] rounded-[50px] border-[1px] text-[#BFBFC6] border-[#BFBFC6] cursor-pointer lg:text-[20px]  hover:border-[#B415FF]  '>My resume <LuArrowDownToLine className='inline' /></div></a>

        </div>
    </div>
  )
}

export default Hero