import React from 'react'
import { useState } from 'react'
import logo from '../content/xprime_logo.png'
import Image from 'next/image'

const Footer = () => {
  const [helpVisible, setHelpVisible] = useState(false)
  const [servicesVisible, setServicesVisible] = useState(false)
  const [connectVisible, setConnectVisible] = useState(false)

  return (
    <>
      <link
        href='https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css'
        rel='stylesheet'
      ></link>
      <footer class='w-full bg-[#9F9F9F] mt-8 bottom-0 flex md:flex-col items-center justify-center pb-5 lg:space-y-2 mt-16'>
        <div class='grid grid-cols-1 gap-y-7 sm:gap-y-4 mt-6 md:grid-cols-3 lg:grid-cols-3'>
          {/* navbar start*/}
          <div class='componentsDiv flex flex-col space-y-2 items-center justify-center font-bold'>
            <p>
              HELP
              <span className='md:hidden'>
                <button onClick={() => setHelpVisible(!helpVisible)}>
                  <i
                    class={`ri-arrow-down-s-line ml-3 text-xl ${helpVisible ? 'transform rotate-180' : ''
                      }`}
                  ></i>
                </button>
              </span>
            </p>
            {helpVisible && (
              <div class='hidden-div w-[60%] flex flex-col justify-center font-normal space-y-3 px-10'>
                <p>
                  A Client Advisor is available at 1800 103 9988. You can also{' '}
                  <a href='#' class='font-bold underline cursor-pointer'>
                    Chat
                  </a>{' '}
                  or{' '}
                  <a href='#' class='font-bold underline cursor-pointer'>
                    Email us
                  </a>
                </p>
                <p>
                  <a href='#' class='font-bold underline'>
                    FAQs
                  </a>
                </p>
                <p>
                  <a href='#' class='font-bold underline'>
                    Product Care
                  </a>
                </p>
                <p>
                  <a href='#' class='font-bold underline'>
                    Stores
                  </a>
                </p>
              </div>
            )}
            <p className='max-md:hidden px-12 font-normal'>
              A Client Advisor is available at 1800 103 9988. You can also <a href="#" className='font-bold underline'>Chat </a> or <a href="#" className='font-bold underline'>Email us</a>
            </p>
          </div>
          {/* connect container start / */}
          <div className='flex justify-center items-center flex-col sm:hidden'>
            <p className='sm:hidden font-bold'>
              CONNECT
              <span>
                <button
                  onClick={() => setConnectVisible(!connectVisible)}
                  class='transition'
                >
                  <i
                    class={`ri-arrow-down-s-line ml-3 text-xl ${connectVisible ? 'rotate-180' : ''
                      }`}
                  ></i>
                </button>
              </span>
            </p>
            {connectVisible && (
              <div class='hidden-div w-[60%] flex flex-col justify-center font-normal items-center px-10 mt-4'>
                <p>
                  <a href='#' class='font-bold underline cursor-pointer'>
                    Sign up
                  </a>{' '}
                  for first access to latest collections, campaigns and videos.
                </p>
              </div>
            )}
          </div>
          {/* connect container end  */}

          {/* service start  */}
          <div className='flex flex-col justify-center items-center md:space-y-2'>
            <p className='font-bold'>
              SERVICES
              <span className='md:hidden'>
                <button onClick={() => setServicesVisible(!servicesVisible)}>
                  <i
                    class={`ri-arrow-down-s-line ml-3 text-xl ${servicesVisible ? 'transform rotate-180' : ''
                      }`}
                  ></i>
                </button>
              </span>
            </p>
            {servicesVisible && (
              <div class='leading-5 hidden-div w-[60%] flex flex-col justify-center px-10 space-y-3 md:pb-2'>
                <p className='mt-5 leading-5 font-bold'>
                  <a href='#' class='font-bold underline cursor-pointer'>
                    Repairs
                  </a>
                </p>
                <p className=' leading-5'>
                  <a href='#' class='font-bold underline cursor-pointer'>
                    Visit Nearest Store
                  </a>
                </p>
              </div>
            )}

            <div className=' componentsDiv flex flex-col space-y-2 font-bold'>
              <p className='font-bold max-md:hidden leading-5'><a href="" className='font-bold underline'>Repairs</a></p>
              <p className='font-bold max-md:hidden leading-5'><a href="" className='font-bold underline'>Visit nearest Store </a></p>
            </div>
          </div>
          {/* service end  */}
          {/* navbar end*/}
          {/* follow start*/}
          <div class='followDiv flex md:flex-col space-x-5 items-center justify-center md:pt-3'>
            <p className='font-bold hidden md:flex text-left mb-4'>CONNECT</p>
            <p className='max-md:hidden px-12'> <strong className='font-bold underline cursor-pointer'>Sign up</strong> for first access to latest collections, campaigns and videos.</p>
            <div className='icons space-x-5 mt-4 flex justify-center items-center'>
              <a href='#'>
                <i class='ri-instagram-fill text-2xl md:text-2xl'></i>
              </a>
              <a href='#'>
                <i class='ri-facebook-circle-fill text-2xl md:text-2xl'></i>
              </a>
              <a href='#'>
                <i class='ri-telegram-fill text-2xl md:text-2xl'></i>
              </a>
              <a href='#'>
                <i class='ri-linkedin-box-fill text-2xl md:text-2xl'></i>
              </a>
              <a href='#'>
                <i class='ri-youtube-fill text-2xl md:text-2xl'></i>
              </a>
            </div>
          </div>
          {/* follow end*/}

          {/* img start*/}
          <div class='imgDiv flex justify-center items-center'>
            <Image
              src={logo}
              alt='Xprime Logo'
              class='w-[260px] md:w-[310px]'
            />
          </div>
          {/* img end*/}

          {/* address start*/}
          <div class='flex justify-center items-center px-12 w-full'>
            <div class='addressDiv flex w-80 space-x-2'>
              <div class='flex'>
                <i class='ri-map-pin-fill text-xl'></i>
              </div>
              <div class='paraDiv text-justify space-y-3'>
                <p class='font-bold leading-5'>
                  Full Name and address of the Manufacturer
                </p>
                <p class='leading-5'>
                  <strong>Xprime</strong> India Retail Private Limited 901A
                  Ninth Floor, Time Tower, MG Road Gurgaon, Haryana - 122002{' '}
                </p>
                INDIA
              </div>
            </div>
          </div>
          {/* address end*/}

          {/* address start*/}
          <div class='flex justify-center items-center px-12 w-full'>
            <div class='addressDiv flex w-80 space-x-2'>
              <div class='flex'>
                <i class='ri-map-pin-fill text-xl'></i>
              </div>
              <div class='paraDiv text-justify space-y-3'>
                <p class='font-bold leading-5'>
                  Full Name and address of the Manufacturer
                </p>
                <p class='leading-5'>
                  <strong>Xprime</strong> India Retail Private Limited 901A
                  Ninth Floor, Time Tower, MG Road Gurgaon, Haryana - 122002{' '}
                </p>
                INDIA
              </div>
            </div>
          </div>
          {/* address end*/}

          {/* footer start*/}
          <div className='md:hidden footerDiv flex justify-center items-center mt-6'>
            <p class='text-sm'>
              &copy; 2023 Xprime India | All Rights Reserved |{' '}
              <strong className='font-bold'>T&C Apply.</strong>
            </p>
          </div>
          {/* footer end*/}
        </div>
        <div className='footerDiv hidden md:flex justify-center items-center mt-10'>
          <p class='text-base'>
            &copy; 2023 Xprime India | All Rights Reserved |{' '}
            <strong className='font-bold'>T&C Apply.</strong>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer