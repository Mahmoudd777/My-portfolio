import Fade from 'react-reveal/Fade';
import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#305b9c] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <Fade down >
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          </Fade>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <Fade left>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mahmoud shrief, nice to meet you. Please take a look around.</p>
            </div>
            </Fade>
            <Fade right>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div></Fade>
          </div>
      </div>
    </div>
  );
};

export default About;