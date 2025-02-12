import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=''>
    <div className=' min-h-screen bg-[#F5DADF] flex text-nowrap overflow-hidden pl-5 pt-20'>
    <div>
        <h1 className='alegreya text-7xl font-semibold text-[#2D2926]'>This is better Coffee.</h1>
        <h1 className='alegreya text-xl font-semibold pt-3'>Get started with 30 home-compostable pods and a free <br /> Sophy Hollington Tin for £9.95 £12.75 </h1>

        <div className='flex gap-2 pt-5'>
        <button className='px-3 py-1.5 bg-white flex alegreya rounded-3xl place-items-center text-sm'><img className='h-3 justify-self-center mr-1' src="tick.png" /> Nespresso® Compatible</button>
        <button className='px-3 py-1.5 bg-white flex alegreya rounded-3xl place-items-center text-sm'><img  className='h-3 justify-self-center mr-1' src="tick.png" /> Free Grid Tin</button>
        </div>

        <div className='pt-5'>
        <button className='px-3 py-1.5 bg-[#2D2926] text-white rounded-sm poppins text-sm'>Shop Now</button>
        </div>
        </div>


        
        <img className='h-[500px] -ml-[400px] -mt-12' src="herohomepage.png" />
        
        </div>
        
    </div>
        

    </>
  )
}

export default Hero