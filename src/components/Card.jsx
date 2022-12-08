import React from 'react'

const Card = (props) => {
  return (
    <div
    style={{ backgroundImage: `url(${props.img})` }} 
    className='w-full h-full shadow-lg shadow-[#040c16] group container rounded-md 
    flex flex-col justify-center text-center items-center mx-auto content-div hover:scale-90 duration-700'>
    
    

{/* Hover effects*/}
       
    <div className="opacity-0 group-hover:opacity-100  ">
    <span className="text-2xl font bold text-white tracking-wider ">
        {props.pro}
    </span>
    <div className="pt-8 text-center ">
    
        <a href="/">
        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:border-transparent transition ease-in duration-200  hover:-translate-y-1 active:translate-y-0">
            Code
        </button>
        </a>
        
        <a href="/">
        <button
        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:border-transparent transition ease-in duration-200  hover:-translate-y-1 active:translate-y-0"
        >
        Live
        </button>
        </a>
    </div>
    </div>
</div>


  )
}

export default Card