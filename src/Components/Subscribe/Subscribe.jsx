import React from 'react'

const Subscribe = () => {
  return (
    <>
    <div className='flex bg-[#F8F7F7] min-h-screen poppins text-neutral-800 justify-center pb-16'>
        <div className='h-[500px] w-[700px] m-24'>
            <button className='px-1 py-1 bg-[#F6DBDF] text-xs rounded-sm font-extralight'>Subscribe & Save.</button>
            <h1 className='font-semibold text-4xl mt-6'>Get a free tin when you subscribe to Grind.</h1>
            <p className='text-md mt-4'>Not only do you save money and the planet when you subscribe, but you’ll also get a free Sophy Hollington Tin.</p>

            <div className='grid grid-cols-2 gap-4 mt-5'>
                <div className='flex gap-2 justify-center place-items-center'>
                <img className='h-14' src="skip.png" />
                <h3 className='text-sm font-extralight'>Skip, pause or cancel whenever</h3>
                </div>
                <div className='flex gap-2 justify-center place-items-center'>
                <img className='h-14' src="carbon.png" />
                <h3 className='text-sm font-extralight'>Carbon positive deliveries</h3>
                </div>
                <div className='flex gap-2 justify-center place-items-center'>
                <img className='h-14' src="ocean.png" />
                <h3 className='text-sm font-extralight'>Our charity removes ocean plastic</h3>
                </div>
                <div className='flex gap-2 justify-center place-items-center'>
                <img className='h-14' src="compose.png" />
                <h3 className='text-sm font-extralight'>Compostable, unlike most coffee pods</h3>
                </div>
            </div>
        </div>

        <div className='h-[500px] w-[700px] m-24'>
            <div className='justify-items-end bg-[#F2EFEE]'>
                <h1></h1>
                <button className='px-1 py-1 bg-[#F6DBDF] text-xs font-extralight rounded-sm m-2'>Free Tin</button>
            <img className='bg-[#F2EFEE]' src="subscribe.png" ></img>
        </div>

            <div className='bg-white'>
            <h2 className=' font-extralight mt-2'>30 pod starter pack</h2>
            <div className='flex gap-2 mt-3'>
            <img src="blends.png" />
            <h3 className='text-xs font-extralight'>Available in 15 blends</h3>
            </div>
            <h1 className='mt-3 font-semibold'><span className='line-through font-extralight'>£12.75</span> £9.95</h1>
            <h1 className='text-white bg-neutral-800 text-center px-3 py-2 rounded-sm hover:text-black hover:bg-white border mt-1'>Upgrade your Coffee at Home</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Subscribe