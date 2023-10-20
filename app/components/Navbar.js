'use client'
import { useClient } from 'next/client'
import Image from 'next/image'
import login from '.././content/homepage login icon (1).png'
import logo from '.././content/xprime logo.png'
import Mainpage from './Mainpage'
import NavResponsive from './NavResponsive'
import Menu from '.././content/menu.png'
import Cards from './Cards'

import Drawer from '.././components/Drawer'
import Whyus from '.././components/Whyus'
import ShowCase from '.././components/ShowCase'
import { useState } from 'react'

export default function Navbar () {
  const [showToggleComponent, setShowToggleComponent] = useState(false)

  const toggleComponentVisibility = () => {
    setShowToggleComponent(!showToggleComponent)
  }

  return (
    <>
      <div className='fixed z-50   w-screen flex justify-around items-center bg-white shadow-md p-[12px]" top-0'>
        <div className='flex justify-center items-center'>
          <div
            className='relative w-16 h-16 scale-200'
            style={{ transform: 'scale(1.7)' }}
          >
            <Image src={logo} alt='My Image' width={100} height={70} />
          </div>
          {/* <label htmlFor='logo' className='text-[15px]'>
            PRIME
          </label> */}
        </div>
        <div className='text-[15px]  max-sm:hidden '>
          <li className='list-none p-4 m-1'>
            <a href='' className='m-2 hvr-underline-from-center'>
              HOME
            </a>

            <a href='' className='m-2 hvr-underline-from-center'>
              PRODUCTS
            </a>
            <a href='' className='m-2 hvr-underline-from-center '>
              WHY US?
            </a>
            <a href='' className='m-2 hvr-underline-from-center'>
              ABOUT
            </a>
            <a href='' className='m-2 hvr-underline-from-center'>
              CONTACT US
            </a>
          </li>
        </div>

        <div>
          <Image
            className='max-sm:hidden'
            src={login}
            alt='My Image'
            width={30}
            height={20}
          />
        </div>
        <Image
          onClick={toggleComponentVisibility}
          src={Menu}
          className='hidden max-sm:block'
          alt='My Image'
          width={30}
          height={20}
        />
      </div>

      {showToggleComponent && <NavResponsive />}
    </>
  )
}
