import React from 'react'

const Rewards = () => {
  return (
    <>
    <div className='h-[380px] bg-[#2D2926] flex justify-center place-items-center'>
        <div className='text-white justify-center w-[500px] -ml-24'>
            <h1 className='alegreya text-5xl font-semibold'>Grind Rewards.</h1>
            <p className='poppins mt-7'>Buy coffee in-store, on our website or through the Grind app to earn points towards free coffee vouchers. It is simple, spend £1, get 1 point. 35 points gets you 1 free coffee.</p>
            <div className='poppins mt-7'>
                <button className='text-black px-3 py-1.5 bg-[#F2EFEE] mr-3 rounded-sm cursor-pointer'>Learn More</button>
                <button className='text-white px-3 py-1.5 bg-[#443E3A] cursor-pointer  rounded-sm'>Sign In</button>
            </div>

            
        </div>
        <div>
                <img className='h-fit w-[380px] mt-6 ml-24 ' src="rewards.png" />
            </div>

    </div>
    </>
  )
}

export default Rewards