'use client'
// import React from 'react'
import Image from 'next/image'
import logo from '.././content/xprime logo.png'
import insta from '.././content/insta.png'
import fb from '.././content/fb.png'
import tele from '.././content/tele.png'
import lin from '.././content/lin.png'
import yb from '.././content/yb.png'
import xprimelogo from '.././content/xPrimerep.png'
const NavResponsive = () => {


  return (
    <div className='fixed  bg-[#848484] z-10 h-screen w-screen hidden flex-col justify-center items-center max-sm:flex '>
      <Image
        src={logo} // Replace with the actual path to your image in the public folder
        alt="My Image"
        width={300}
        height={200}
      />

      {/* //connection */}
      <div className='flex flex-row justify-around w-full m-3'>
      <Image
        src={insta} // Replace with the actual path to your image in the public folder
        alt="My Image"
        width={30}
        height={20}
      />
      <Image
        src={fb} // Replace with the actual path to your image in the public folder
        alt="My Image"
        width={30}
        height={20}
      />
      <Image
        src={tele} // Replace with the actual path to your image in the public folder
        alt="My Image"
        width={30}
        height={20}
      />
      <Image
        src={lin} // Replace with the actual path to your image in the public folder
        alt="My Image"
        width={30}
        height={20}
      />
      <Image
        src={yb} // Replace with the actual path to your image in the public folder
        alt="My Image"
        width={30}
        height={20}
      />
      </div>

        {/* list menu */}
      <div className='w-full mt-6 flex list-none font-semibold text-lg'>
         <div className=' ml-10'>
            <li className='m-2'><a href="">HOME</a></li>
            <li className='m-2'><a href="">PRODUCTS</a></li>
            <li className='m-2'><a href="">WHY US?</a></li>
            <li className='m-2'><a href="">ABOUT</a></li>
            <li className='m-2'><a href="">CONTACT</a></li>
         </div>
      </div>
    </div>
  )
}

export default NavResponsive
