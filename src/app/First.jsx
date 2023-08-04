"use client"
import React,{useState,useEffect} from 'react'


const First = () => {
    const [count, setCount] = useState(0)
    const handle=()=>{
        setCount((pre)=>pre+1)
    }

    useEffect(() => {
      console.log("hello")
    })
    
  return (
    <div>
    <button onClick={handle}>count</button>
    First : {count}
    </div>

  )
}

export default First