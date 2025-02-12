import React from 'react'

const NewFlavours = () => {
  return (
    <>
    <div className='min-h-screen bg-[#F8F7F7] '>
    <div className='justify-center justify-items-center'>
      <button className='px-2 py-1 rounded-md bg-[#F7E2E6] poppins'>New</button>
      <h1 className='text-5xl font-semibold poppins mt-3'>New Flavours.</h1>
      <p className='poppins mt-4 font-extralight text-center mx-72'>Everyone’s favourite fall flavours (whether you’ll admit it or not) in the planet’s favourite coffee pods. This is our take on two seasonal classics: Pumpkin Spice and Mocha. Otherwise known as cosy season essentials.</p>
      <button className='mt-5 poppins px-3 py-1.5 rounded-sm hover:bg-white hover:text-black text-white bg-black border'>Shop Now</button>
      <img className='h-[480px]' src="newflavour.png"/>
    </div>
    </div>
    </>
  )
}

export default NewFlavours