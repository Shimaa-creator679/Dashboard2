import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
const FaqElement = () => {

const[state,setstate]=useState(false)
  return (
  <li className='space-y-5 py-5 px-3 rounded-xl shadow-xl'>
            <div className="q flex justify-between">
<h1 className='text-blue-600 font-bold'>how old are ypu</h1>
<FaAngleDown  className='text-blue-600 font-bold text-xl cursor-pointer' onClick={()=>{setstate(!state)}}/>
            </div>

            {state&&<div className="answer w-full ">
                <p className='w-full break-all'>ljkbbbbbbttttttttttttttttttttttttttttttttttttttttbbbbbbbbbbbbbbbbbb</p>
            </div>}
            


        </li>
  )
}

export default FaqElement