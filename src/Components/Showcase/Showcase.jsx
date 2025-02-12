import React from 'react'

const Showcase = () => {
  return (
    <>
    <div className='min-h-screen bg-[rgb(248,247,247)] flex justify-center justify-items-center p-24'>
        <div className='bg-white h-[550px] w-[480px] rounded-md p-5'>
            <button className='bg-[#F6DBDF] poppins px-2 py-1 rounded-xl'>New</button>
            <h1 className='poppins text-4xl font-semibold'>Meet Our New Coffee Machine.</h1>
            <p className='poppins pt-8'>Designed in collaboration with Sage, we have put a Grind café into a bean to cup machine. Paired with our speciality coffee, this is the best at-home coffee you can get.</p>
            <img className='h-36 mt-8' src="showcaseone.png" />
            <button className='poppins hover:bg-[#F6DBDF] px-2 py-1 rounded-3xl flex gap-1 place-items-center mt-8'>Shop now <img src="arrow.png" /></button>
        </div>
        <div>
            <img className='h-[550px]' src="showcasetwo.png" />
        </div>
    </div>
    </>
  )
}

export default Showcase