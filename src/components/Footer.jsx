import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-500'>
            Proudly made by a Cambodian developer, Caretel is a local brand born in Cambodia. We’re committed to delivering quality, creativity, and innovation that reflects the spirit and pride of our local community. Thank you for supporting homegrown talent. <br />
            </p>
        </div>

        <div>
            <p className='text.xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Aboute US</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Get in touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+855 99-768-24</li>
                <li>sokunthyvathana@gmail.com</li>
                <li>instagram : Cartel</li>
                <li>Page : Cartel</li>
            </ul>
        </div>

        <div className="col-span-full mt-10">
          <hr className="mb-4" />
          <p className="text-center text-sm text-gray-900">
            © 2025 Cartel.com — All rights reserved by SOKUNTHY VATHANA.
          </p>
        </div>

      
    </div>
  )
}

export default Footer
