'use client'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import flower from '../content/flower.png'
import h1 from '../content/h1.jpg'
import l1 from '../content/l1.jpg'
// import { AOS } from "aos";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Collection = () => {
  useEffect(() => {
    AOS.init() // Initialize the AOS library
  }, [])

  // const a = (
  //   <div className='w-[100%] mx-auto container  flex justify-center items-center flex-col mt-4 p-3'>
  //     <h1 data-aos='fade-up' className='text-3xl my-5'>
  //       COLLECTIONS
  //     </h1>

  //     {/*<div className="w-full flex flex-wrap justify-center items-center m-8 max-sm:m-0">}*/}
  //     <div class='hover01 column w-full flex justify-center items-center flex-col flex-wrap md:flex-row max-sm:w-[200px]'>
  //       <div className='sm:flex-1 w-full h-auto   flex max-sm:justify-center md:justify-end items-center max-md:mb-8 md:mr-8 '>
  //         <figure
  //           data-aos='fade-up'
  //           className='w-[500px] h-[400px]  hvr-glow  max-sm:w-[300px] max-sm:h-auto'
  //         >
  //           <Image src={h1} fill className='' />
  //         </figure>
  //         {/* <span>Hover</span> */}
  //       </div>
  //       <div
  //         style={{ height: 'auto', width: 'auto' }}
  //         className='sm:flex-1 h-auto w-max  flex max-sm:justify-center md:justify-start items-center max-sm:w-[200px] max-md:mb-8 '
  //       >
  //         <figure
  //           data-aos='fade-up'
  //           className='w-[500px] h-[400px] hvr-glow max-sm:w-[300px]'
  //         >
  //           <Image src={l1} fill className='' />
  //         </figure>
  //         {/* <span>Hover</span>     */}
  //       </div>
  //       {/* <div>
  //   <figure className="h-max w-max"><Image src={h1} height={400} width={400}/></figure>
  //   <span>Hover</span>
  // </div> */}
  //     </div>
  //     {/*</div>*/}
  //   </div>
  // )

  return (
    <div className='relative '>
      <div className='flex absolute z-[-3] justify-between w-screen overflow-hidden max-sm:hidden'>
        <Image
          src={flower}
          height={600}
          width={600}
          className='translate-x-[-50%]  z-[-2]'
        ></Image>
        <Image
          src={flower}
          height={600}
          width={600} 
          className='absolute translate-x-[50%] right-0 top-0  rotate-180 z-[-2] '
        ></Image>
      </div>
        <div className='sm:container sm:mx-auto z-10  w-full flex flex-col justify-start items-center '>
        <h1 data-aos='fade-up' className='text-3xl my-5'>
          COLLECTIONS
        </h1>

        <div className='flex justify-around flex-wrap items-center max-sm:justify-center overflow-hidden m-0'>
          <div class='img-wrapper h-max w-max m-6 max-sm:m-2 flex justify-center items-center '>
            <Image className='inner-img h-[400px]  w-[400px] max-sm:h-[400px] max-sm:w-[400px]' src={h1} width='300px' height='300px' />
          </div>

          <div class='img-wrapper h-max w-max m-6 max-sm:m-2 flex justify-center items-center'>
            <Image className='inner-img h-[400px]  w-[400px] max-sm:h-[400px] max-sm:w-[400px]' src={l1} width='300px' height='300px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
