
import ShowSocials from './Socials'

const Footer = () => {
  return (
    <>
    <div className='bg-[#F1EFEE] min-h-screen p-24'>
    <div>
        <img className='h-14' src="grindcertified.png"  />
    </div>

    
    <div className='grid grid-cols-4 gap-10'>
    <div>
    <ShowSocials/>
    </div>



    <div className='mt-8'>
        <h1 className='poppins text-lg font-medium'>Contact us</h1>
        <h3 className='poppins text-base font-extralight'>All enquiries: hello@grind.co.uk <br />
        PR: grind@emergelimited.com</h3>

        
    </div>

    <div className='mt-8'>
        <h1 className='poppins text-lg font-medium'>Help</h1>
        <h2 className='poppins text-base font-extralight'>Take a look at our FAQS.</h2>

        <h3 className='poppins text-lg font-extralight'>
        Something else? Get in touch at <span className='poppins text-lg font-semibold'> hello@grind.co.uk</span>
        </h3>
    </div>



    <div className='mt-8'>
        <h1 className='poppins text-lg font-medium'>Subscribe</h1>
        <h3 className='poppins text-base font-thin'>
        Sign up to our newsletter
        </h3>
        
    <input
      type="text"
      className="placeholder-gray-800 placeholder:opacity-75 border mt-3 border-gray-800 rounded p-1.5"
      placeholder="Enter your text here"/>
    

        <button className='bg-black text-white poppins mt-2 rounded-md p-1.5 ml-1 cursor-pointer'>
            Sign up
        </button>





    </div>


    
    </div>


    <div className='grid grid-cols-4 mt-8 gap-10'>
        <div>
        <h1 className='poppins text-lg font-medium'>Find us</h1>
        <h3 className='poppins text-base font-extralight '>Grind <br />
Telephone House <br />
69 Paul Street<br />
Shoreditch<br />
EC2A 4NW<br />
United Kingdom</h3>
    </div>



<div>
    <h1 className='poppins text-lg font-medium'>Legal</h1>
        <h3 className='poppins text-base font-extralight '>Privacy Policy
Terms & Conditions <br />
Grind Pod Machine Warranty <br />
The Grind x Sage Barista Touch™ Impress Warranty <br />
Rewards Terms <br />
Delivery</h3>
</div>


<div>
        <h1 className='poppins text-lg font-medium'>More</h1>
    <h3 className='poppins text-base font-extralight '>Careers at Grind <br />
Student Discount <br />
Keyworker Discount <br />
Under 26s Discount <br /></h3>
    </div>
    </div>


    <div className='flex justify-center justify-items-center h-10 gap-5 mt-8 cursor-pointer'>
        <img src="americanexpress.png" alt="" />
        <img src="applepay.png" alt="" />
        <img src="visa.png" alt="" />
        <img src="mastercard.png" alt="" />
        <img src="paypal.png" alt="" /> 
    </div>
    <div className='text-center poppins mt-8'>
        <h3 className='text-xs hover:text-gray-700'>Grind® is not affiliated with or endorsed by Nespresso®.</h3> 
        <h3 className='text-sm mt-2 hover:text-gray-700'>Copyright © 2025, Grind.</h3>
        </div>
    
    </div>

    
    </>
  )
}

export default Footer