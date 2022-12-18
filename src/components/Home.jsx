import Fade from 'react-reveal/Fade';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Pulse from 'react-reveal/Pulse';
import React from 'react';
import Typed from 'react-typed'

//import {Button} from 'react-scroll'


const Home = () => {
  return (
    
    <div name='home' className='w-full h-screen bg-[#305b9c]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <Fade left cascade>
        <div>
        <p className='text-pink-600 text-3xl '>Hi, my name is</p>
        <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>
        Mahmoud Shrief
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front End Developer.
        </h2></div>
        </Fade>
        <div>
        <Fade right cascade>
          <div>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive front-end web applications.
        </p>
        <div>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-pink-600'
            strings={['HTML', 'CSS', 'JAVA SCRIPT', 'REACT.JS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> </div>
          </div>
          </Fade>
          <Fade up>
          <Link to='work' smooth={true} duration={500}><Pulse forever>
        <button   className='text-white group border-2 px-6 py-3 my-5 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:border-transparent transition ease-in duration-200  hover:-translate-y-1 active:translate-y-0'>
       
        <a href='/work'>View Work</a>
          
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
            </span>
            
        </button></Pulse>
        </Link>  </Fade>
        
        </div>
      </div>
    </div>
    
  );
};

export default Home;