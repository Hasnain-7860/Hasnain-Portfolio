import React from 'react'
import img from '../assets/image.png'

const About = () => {
  return (
    <div className='bg-[#FFF7F1] md:py-5 lg:py-10  ' id='About'>
    <div className='flex flex-col items-center justify-between gap-[80px] mx-[20px] my-[80px]  lg:my-[80px] lg:mx-[70px] '>
        <div className='position-relative '>
            <h1 className='px-[20px] text-[40px] font-semibold text-black lg:px-[30px] lg:text-[80px] '>About Me</h1>
        </div>
        <div className=' md:flex md:gap-[40px] lg:flex lg:gap-[80px] items-center    '>
             <img className='bg-black  lg:w-[20%]  md:h-[75vh] md:w-[35%] lg:h-[100vh] xl:h-[]    rounded-lg' src={img} alt="" />
            <div className=' text-[25px] text-[#BFBFC6] text-center items-center font-semibold md:text-left  lg:w-[90%] lg:text-left lg:text-[40px] lg:leading-[60px]  '>
                <p className='text-[#BFBFC6]'>I’m a  Frontend Developer and recent fresher with a strong passion for creating clean, responsive, and user-friendly web applications. I’ve learned modern technologies like React, and TypeScript through self-study and hands-on projects, building a solid foundation in HTML, CSS, and JavaScript. I enjoy turning designs into functional interfaces, working with Tailwind CSS, CSS Modules, and Styled Components for styling, and using Redux and Context API for state management. As a fresher, I’m eager to contribute to real-world projects, grow with a team, and continue learning the latest trends in frontend development.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About