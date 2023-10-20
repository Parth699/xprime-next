"use client"
import React,{useState,useEffect,useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from "next/image";

import img1 from '../asset/12.jpg'
import img2 from '../asset/13.jpg'
import img3 from '../asset/14.jpg'
import img4 from '../asset/15.jpg'

const Drawer = () => {

  const [offsetX, setOffsetX] = useState(0.0);

  const {scrollYProgress}=useScroll();

  const x=useTransform(scrollYProgress,[0,offsetX+0.023,1],[-200,0.1,0.1]);
  const x3=useTransform(scrollYProgress,[0,offsetX+0.023,1],[200,+.1,0.1]);

  const x2=useTransform(scrollYProgress,[0,offsetX+0.023,1],[-40,0.1,0.1]);

  const drawerRef=useRef();

  const handleResize=()=>{
    const h=document.documentElement.getBoundingClientRect().height;
    setOffsetX((+drawerRef.current.offsetTop/h));
  }

  useEffect(()=>{
    handleResize();
    window.addEventListener("resize",handleResize)

    return ()=>{
      window.removeEventListener("resize",handleResize)
    }

  },[])


  return (
    <div className='md:mt-16 drawer' ref={drawerRef} >
    <div className='h-[60vh] sm:h-[100vh] w-full flex justify-center py-14 px-5 md:px-14 overflow-x-hidden' >
    <div className='container h-full relative flex justify-center items-end gap-2 sm:gap-4  md:gap-6 lg:gap-6'>
      <div className="absolute w-[65%] top-0 left-0 p-1 text-sm sm:text-3xl leading-relaxed tracking-wider z-10 ">
        <motion.p 
          initial={{x:"-60px",opacity:0}} 
          whileInView={{x:"0px",opacity:1}}
          transition={{duration:"0.5",type:'tween'}}
        >
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry.  
        </motion.p>
      </div>

      <motion.div className="basis-1/2 h-[60%] bg-slate-800 rounded-lg mb-[3%] overflow-hidden" style={{x:x}}  >
        <Image src={img1} fill className=" object-cover object-center" />
      </motion.div>
      <div className="basis-1/2 h-[140%] flex flex-col justify-end items-start gap-2 sm:gap-4  md:gap-6 lg:gap-6">
        <div className='w-[100%] h-[100%] flex justify-start items-end gap-2 sm:gap-4  md:gap-6 lg:gap-6'>
          <motion.div className='w-[40%] h-[30%] bg-orange-800 rounded-lg overflow-hidden' style={{x:x2}}>
            <Image src={img2} fill className="h-full w-full object-cover object-center" />
          </motion.div>
          <motion.div className='w-[60%] h-[85%] bg-emerald-600 rounded-lg overflow-hidden' style={{x:x3}}>
            <Image src={img3} fill className="h-full w-full object-cover object-center" />
          </motion.div>
        </div>
        <motion.div className='w-[80%] h-[40%] bg-slate-300 rounded-lg overflow-hidden' style={{x:x3}}>
          <Image src={img4} fill className="h-full w-full object-cover object-center" />
        </motion.div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Drawer