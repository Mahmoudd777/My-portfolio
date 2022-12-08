import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#305b9c] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/f175b2c5-1d95-42c7-95a4-f48c5fc93052" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-pink-600 border-2  border-pink-600 rounded hover:bg-pink-600 hover:text-white hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center hover:border-transparent transition ease-in duration-200  hover:-translate-y-1 active:translate-y-0'>Let's Collaborate</button>
            
        </form>
        
    </div>
  )
}

export default Contact