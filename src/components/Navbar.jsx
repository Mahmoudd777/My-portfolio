import React,{useState} from 'react'

import './Navbar.css'

import Hamburger from 'hamburger-react'

import {
    
    FaGithub,
    FaLinkedin,} from 'react-icons/fa';

  import { HiOutlineMail } from 'react-icons/hi';

  import { BsFillPersonLinesFill } from 'react-icons/bs';

  import { Link } from 'react-scroll';
//import Logo from '../assets/logo1.png'
import { Slide } from "react-awesome-reveal";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
return (
  <div>
    
    <div className=' fixed  top-0   w-full shadow-md h-[80px]  flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <h1 className='w-full text-3xl font-bold text-pink-600'><a href='/'>MS.</a></h1>
{/* menu*/}
        <div>
            <ul className=' hidden md:flex'>
            <li >
            <Link to='home' smooth={true} duration={500}>
            <a className='nav-link nav-link-grow-up' href='/'>Home</a>
            </Link>
        </li >
        <li >
        <Link to='skills' smooth={true} duration={500}>
          <a className='nav-link nav-link-grow-up'href='/skills'>Skills</a>
          </Link>
        </li>
        <li >
        <Link to='work' smooth={true} duration={500}>
          <a className='nav-link nav-link-grow-up'href='/work'>Work</a>
          </Link>
        </li>
        <li >
        <Link to='contact' smooth={true} duration={500}>
          <a className='nav-link nav-link-grow-up'href='/contact'>Contact</a>
          </Link>
        </li>
            </ul>
        </div>
        
        {/* Hamburger*/}
        <div onClick={handleClick} className='fixed md:hidden z-10 right-0 ease-in'>
        <Hamburger color='rgb(219 39 119) ' size={20} />
        </div>

        {/* Mobile menu*/}
       
        
                <ul className={nav ? 'fixed top-20  right-0 w-[165px] v-screen bg-[#0a192f] z-10 duration-500' : 'fixed top-0 right-[-100%] w-[165px] v-screen bg-white z-10 duration-500'}>
        <h1 className='w-full text-3xl font-bold text-pink-600 m-4'>MS.</h1>
          
                <li className='py-6 text-4xl p-4 border-b border-gray-600 lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
      <Link to='home' smooth={true} duration={500}>
          <a href='/'>Home</a>
          </Link>
        </li>
        <li className='py-6 text-4xl p-4 border-b border-gray-600 lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
          {' '}
          
          <Link to='skills' smooth={true} duration={500}>
          <a href='/skills'>Skills</a>
          </Link>
        </li>
        <li className='py-6 text-4xl p-4 border-b border-gray-600 lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
          {' '}
          
          <Link to='work' smooth={true} duration={500}>
          <a href='/work'>Work</a>
          </Link>
        </li>
        <li className='py-6 text-4xl lex text-gray-600 hover:text-pink-600
                    cursor-pointer transition-colors duration-300'>
          {' '}
          
          <Link to='contact' smooth={true} duration={500}>
          <a href='/contact'>Contact</a>
          </Link>
        </li>
        </ul>
        
          
        {/*Social icons */}
        <div className=' lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/mahmoud-shrief-9b124a237/'
            >
            Linkedin <FaLinkedin size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Mahmoudd777'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
            </ul>
        </div>
    </div>
    
    </div>
)
}

export default Navbar