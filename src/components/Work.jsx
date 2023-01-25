import Beachs from '../assets/projects/Beachs.png'
import BlueTube from '../assets/projects/BlueTube.png'
import Brand from '../assets/projects/Brand.png'
import Card from './Card'
import Fade from 'react-reveal/Fade';
import React from 'react'
import RealEst from '../assets/projects/realestate.jpg'
import chat from '../assets/projects/chat-app.png'
import dice from '../assets/projects/dice-game.png'

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
   
<Fade left><Card pro={"BlueTube"} img={BlueTube} code={'https://github.com/Mahmoudd777/BlueTube'} live={'https://blue-tube.netlify.app'}/></Fade>
<Fade down><Card pro={"Basic chat app"} img={chat} code={'https://github.com/Mahmoudd777/Basic.React.-Chat-App'} live={'https://63d12c2b9a1b4f24ceb71c73--basic-chat-app1.netlify.app'}/></Fade>
<Fade right><Card pro={"Simple dice game"} img={dice}code={'https://github.com/Mahmoudd777/Two-Player-Dice-Game-/tree/main/dice-game-app'} live={'https://simple-dice-game-app.netlify.app'} /></Fade>
<Fade left><Card pro={"Beachs"} img={Beachs}code={'https://github.com/Mahmoudd777/react-app-BEACHES.-'} live={'https://beaches77.netlify.app/'} /></Fade>
<Fade up><Card pro={"Brand"} img={Brand}code={'https://github.com/Mahmoudd777/Brand-project'} live={'https://brand77.netlify.app/'} /></Fade>
<Fade right><Card pro={"react project"} code={''} live={''} /></Fade>
</div>
</div>
</div>
)
}

export default Work