import Backdrop from './skills animation/Backdrop';
import CSS from '../assets/css.png';
import Fade from 'react-reveal/Fade';
import FireBase from '../assets/firebase.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import React from 'react';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import {motion} from "framer-motion";

const Skills = ({handleClose, text}) => {
    
return (
    <div name='skills' className='w-full h-screen bg-[#305b9c] text-gray-300'>
      {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <Fade left cascade>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>
</Fade>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <Fade left>
            <div className='  shadow-md cursor-pointer shadow-[#040c16]  hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            </Fade>
            <Fade down>
            <div className='shadow-md cursor-pointer shadow-[#040c16] hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>
            </Fade>
            <Fade down>
            <div className='shadow-md cursor-pointer shadow-[#040c16] hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            </Fade>
            <Fade right>
            <div className='shadow-md cursor-pointer shadow-[#040c16] hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>REACT</p>
            </div>
            </Fade>
            <Fade left>
            <div className='shadow-md cursor-pointer shadow-[#040c16] hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            </Fade>
            <Fade up>
            <div className='shadow-md cursor-pointer shadow-[#040c16] hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                <p className='my-4'>MONGO DB</p>
            </div>
            </Fade>
            <Fade up>
            <div className='shadow-md cursor-pointer shadow-[#040c16] hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                <p className='my-4 cursor-pointer'>TAILWIND</p>
            </div>
            </Fade>
            <Fade right>
              <div className='shadow-md cursor-pointer shadow-[#040c16] hover:bg-slate-900  duration-500'>
                <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                <p className='my-4'>FIREBASE</p>
            </div>
            </Fade>
        </div>
    </div>
    </div>
);
};

export default Skills;