import Beachs from '../assets/projects/Beachs.png'
import Brand from '../assets/projects/Brand.png'
import Card from './Card'
import Fade from 'react-reveal/Fade';
import React from 'react'
import RealEst from '../assets/projects/realestate.jpg'
import WorkIm from '../assets/projects/workImg.jpeg'

const Work = () => {
return (
    
    
    <div name='work' className='w-full  md:h-screen text-gray-300 bg-[#305b9c]'>
        
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <Fade left cascade>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
        Work
        </p>
        <p className='py-6'> Check out some of my recent work</p>
    </div>
    </Fade>
    <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'> 
   
<Fade left><Card pro={"Beachs project"}img={WorkIm}/></Fade>
<Fade down><Card pro={"Brand project"} img={RealEst} /></Fade>
<Fade right><Card pro={"react project"} img={WorkIm} /></Fade>
<Fade left><Card pro={"react project"} img={RealEst} /></Fade>
<Fade up><Card pro={"react project"} img={WorkIm} /></Fade>
<Fade right><Card pro={"react project"} img={RealEst} /></Fade>
</div>
</div>
</div>
)
}

export default Work