'use client'
import { useClient } from 'next/client'
import Image from 'next/image'
import login from './content/homepage login icon (1).png'
import logo from './content/xprime logo.png'
import Mainpage from '../app/components/Mainpage'
import NavResponsive from './components/NavResponsive'
import Menu from './content/menu.png'
import Cards from './components/Cards'
// import './nav.css'
import Drawer from './components/Drawer'
import Whyus from './components/Whyus'
import ShowCase from './components/ShowCase'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Collection from './components/Collection'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'
import Contact from './components/Contact.jsx'
import Disclaimer from './components/Disclaimer'
import LogoGuidelines from './components/LogoGuidelines'
import HomePage from './pages/Home.js'
import UserAuth from './components/UserAuth'

export default function Home () {

  const [showToggleComponent, setShowToggleComponent] = useState(false);
 
    const toggleComponentVisibility = () => {
      setShowToggleComponent(!showToggleComponent);
      if (showToggleComponent == true)
      {
      scrollTop =
      window.scrollY|| document.documentElement.scrollTop;
       scrollLeft =
      window.scrollX || document.documentElement.scrollLeft,
    
          // if any scroll is attempted,
          // set this to the previous value
          window.onscroll = function() {
              window.scrollTo(scrollLeft, scrollTop);}
  }
    else
      {
  
          window.onscroll = function() {};
      
      }
 
   
  };


  return (
    <>
    <Contact />
     
    </>
  )
}
