import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import bg from '../asset/wallpaper.png'
import Navbar from '../components/Navbar'
import '../font/font.css'
export default function Whyus () {
  return (
    <>
      <div>
        <Navbar />

        {/* TEXT BOX  */}
        <div className=''>
          <Image src={bg} className='w-full h-full'></Image>

          <div className='w-[200px] h-[200px] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <span>Hardware? Think Xprime</span>
              <span>Durability</span>
              <span >
                Our products have been meticulously crafted to meet the highest
                industry standards, and the materials we use are of the utmost
                quality. We understand the importance of your trust in our
                products, which is why we take great care to ensure that every
                component we sell is rigorously tested for performance and
                durability.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
