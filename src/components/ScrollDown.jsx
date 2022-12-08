import React from 'react'

import { HiArrowNarrowRight } from 'react-icons/hi';

import { Button } from 'react-scroll';
const ScrollDown = () => {
return (
    <div>
    
    <Button activeClass="active" className="btn" type="submit" value="Home" to="Work" spy={true} smooth={true} offset={50} duration={500}  >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
            </span>
        </Button>
    
    </div>
)
}

export default ScrollDown