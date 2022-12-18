import './Navbar.css'

import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import React,{useState} from 'react'

import { BsFillPersonLinesFill } from 'react-icons/bs';
import Hamburger from 'hamburger-react'
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';

//import { Slide } from "react-awesome-reveal";

//import Logo from '../assets/logo1.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
return (
 
  <div className='w-screen h-[80px] z-10 bg-slate-900 fixed drop-shadow-lg'>
    {/* Navbar */}
  <div className=' flex justify-between items-center w-full h-full'>
    <h1 className='text-5xl cursor-pointer text-pink-600 pl-5 font-bold mr-4 '>MS.</h1>
    <div className='flex items-center'>
      
      <ul className=' px-14 hidden md:flex'>
      <Link to="home" smooth={true} duration={500}><li className='nav-link nav-link-grow-up'>Home</li></Link>
      <Link to="about" smooth={true} offset={-200} duration={500}><li className='nav-link nav-link-grow-up'>About</li></Link>
      <Link to="skills" smooth={true} offset={-50} duration={500}><li className='nav-link nav-link-grow-up'>Skills</li></Link>
      <Link to="work" smooth={true} offset={-100} duration={500}><li className='nav-link nav-link-grow-up'>Work</li></Link>
      <Link to="contact" smooth={true} offset={-50} duration={500}><li className='nav-link nav-link-grow-up'>Contact</li></Link>
      </ul>
    </div>
    {/* Hamburger */}
    <div className='md:hidden mr-4' onClick={handleClick}>
          <Hamburger color="rgb(219 39 119)" />
      
    </div>
  </div>

        {/* Mobile menu*/}
       
        
                <ul className={nav ? 'fixed top-20  right-0 w-[220px] v-screen bg-[#0a192f] z-10 duration-500' : 'fixed top-0 right-[-100%] w-[165px] v-screen bg-white z-10 duration-500'}>
        <h1 className='w-full text-3xl font-bold text-pink-600 m-4'>MS.</h1>
          <Link to='home' smooth={true} duration={500}>
                <li  className='py-6   text-4xl p-4 border-b border-gray-600 lex text-gray-600 hover:text-pink-600
                    cursor-pointer  transition-colors duration-300 '>
      
          Home
          
        </li>
        </Link>
        <Link to='about' smooth={true} duration={500}>
        <li className='py-6 text-4xl p-4 border-b border-gray-600 lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
      
         About
          
        </li>
        </Link>
        <Link to='skills' smooth={true} duration={500}>
        <li className='py-6 text-4xl p-4 border-b border-gray-600 lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
          
          
          
         Skills
          
        </li>
        </Link>
        <Link to='work' smooth={true} duration={500}>
        <li className='py-6 text-4xl p-4 border-b border-gray-600 lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
          {' '}
          
          
          Work
         
        </li> </Link><Link to='contact' smooth={true} duration={500}>
        <li className='py-6 text-4xl lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
          {' '}
          
          
          Contact
          
        </li></Link>
        </ul>
        
          
        {/*Social icons */}
        <div className=' lg:flex fixed flex-col top-64 left-0'>
            <ul>
              <Zoom>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/mahmoud-shrief-9b124a237/'
            >
            Linkedin <FaLinkedin size={30} />
            </a>
        </li>
        </Zoom>
        <Zoom>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Mahmoudd777'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          </Zoom>
          <Zoom>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={'mailto:mshrief777@gmail.com'}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          </Zoom>
          <Zoom>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          </Zoom>
            </ul>
        </div>
    </div>
    
   
)
}

export default Navbar