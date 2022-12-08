
import React from 'react'

import Card from './Card'

import WorkIm from '../assets/projects/workImg.jpeg'
import RealEst from '../assets/projects/realestate.jpg'


const Work = () => {
return (
    
    
    <div name='work' className='w-full  md:h-screen text-gray-300 bg-[#305b9c]'>
        
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
        Work
        </p>
        <p className='py-6'> Check out some of my recent work</p>
    </div>
    <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'> 
<Card pro={"E-Commerce App"}img={WorkIm} className='hover:scale-110 duration-500' />
<Card pro={"react project"} img={RealEst} />
<Card pro={"react project"} img={WorkIm} />
<Card pro={"react project"} img={RealEst} />
<Card pro={"react project"} img={WorkIm} />
<Card pro={"react project"} img={RealEst} />
</div>
</div>
</div>
)
}

export default Work