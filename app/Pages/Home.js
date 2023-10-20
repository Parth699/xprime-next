import React from 'react'
import Mainpage from '../components/Mainpage'
import ShowCase from '../components/ShowCase'
import Drawer from '../components/Drawer'
import Collection from '../components/Collection'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
        <Navbar />
      <Mainpage />
      <ShowCase /> 
      <Drawer />
      <Collection />
      <Cards />
      <Footer /> 
    </>
  )
}

export default HomePage;