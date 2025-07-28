import React from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
  const menuRef = React.useRef();
  
  const openMenu = () => {
    menuRef.current.style.right="0";
    overlayRef.current.style.display="block";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
    overlayRef.current.style.display="none";

  }
  return (
    <div  className='flex items-center justify-between fixed  left-0 w-full bg-[#161513] shadow-md  px-[20px] py-[20px] z-50'>
        <h1 className=' sm:text-[22px] text-[#BFBFC6] '>Mohd Hasnain</h1>
        <h1 className='nav-mob-open display-hidden' onClick={openMenu}><RxHamburgerMenu /></h1>
        <ul ref={menuRef} className='nav-menu flex align-center style-none gap-[60px] text-[20px] text-[#BFBFC6]'>
          <h1 className='nav-mob-close ' onClick={closeMenu}><AiOutlineClose /></h1>
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li><a href="#About" onClick={closeMenu}>About Me</a></li>
            <li><a href="#Services" onClick={closeMenu}>Services </a></li>
            <li><a href="#Projects" onClick={closeMenu}>Projects </a></li>
            <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a href="#Contact"><div className='nav-connect hidden lg:block text-[#BFBFC6] px-[25px] py-[10px] rounded-[50px] text-[22px] bg-[linear-gradient(267deg,#DC143C,#DC143C)] cursor-pointer transition-duration-0.9s hover:scale-[1.05] '>Connect with Me</div></a>

    </div>
  )
}

export default Navbar