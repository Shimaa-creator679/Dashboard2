import React, { useState } from 'react'

const MessageData = ({message}) => {

    const[state,setstate]=useState(false)
  return (
    <div>
         <li className=''>
<div className="top flex justify-between items-center p-5 rounded-lg mt-5">
<div className='flex items-center gap-1'>
     <div onClick={()=>{setstate(!state)}} className='w-5 h-5 cursor-pointer rounded-full border-2 bg-blue-500 border-white text-white font-bold text-xl flex items-center justify-center'>+</div>
 <div className=' w-5 relative before-Button h-5 rounded-full bg-white border border-black'></div>

</div>
   
<h2 className='text-center'>{message.sender}</h2>
<h2>{message.status}</h2>
</div>
{state&& <div className="bottom py-10">
        <ul className='space-y-5 px-10'>
    <li>
        <p className='font-bold text-blue-700'>text: <span className='font-normal text-black'>{message.content}</span></p>
    </li>
    <li className='font-bold text-blue-700'>Date:<span className='font-normal text-black'>{message.date}</span></li>
</ul>
</div>}


    </li>
    <hr/>
    </div>
  )
}

export default MessageData