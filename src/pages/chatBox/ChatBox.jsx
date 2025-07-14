import React, { useState } from 'react'
import person from '../../assets/images/person.jpg'
const ChatBox = () => {

  const[chatinput,setchatinput]=useState()

  const [chats,setchats]=useState(()=>{
    const saved=localStorage.getItem("chats")
    return saved?JSON.parse(saved):[]
  })

const handleSend=()=>{
const ubdatedChats=[...chats,chatinput]
localStorage.setItem("chats",JSON.stringify(ubdatedChats))
setchats(ubdatedChats)
}
console.log(chats)



  return (
    <div>
        <div className="top   ">
            <h1 className='text-sky-950 md:text-2xl font-bold'>content List</h1>

           <div class="flex  mt-10 w-full items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md ">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
        <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
    </svg>
    <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"/>
</div>
        </div>

<div className="chhatlist">
  <ul>

    <li className='flex hover:ml-5 hover:scale-95 duration-300 transition-all items-center justify-between p-5 rounded-lg mt-5 bg-red-100'>
      <div className="right flex items-center gap-5">

<img src={person} alt="" className="w-10 h-10"/>
<div className="info">
  <h1>name</h1>
  <p>message</p>
</div>

      </div>
      <div className="left">
        <p>28vav</p>
      </div>
    </li>


    <li className='flex hover:ml-5  hover:scale-95 duration-300 transition-all items-center justify-between p-5 rounded-lg mt-5 bg-red-100'>
      <div className="right flex items-center gap-5">

<img src={person} alt="" className="w-10 h-10"/>
<div className="info">
  <h1>name</h1>
  <p>message</p>
</div>

      </div>
      <div className="left">
        <p>28vav</p>
      </div>
    </li>

    <li className='flex hover:ml-5 hover:scale-95 duration-300 transition-all items-center justify-between p-5 rounded-lg mt-5 bg-red-100'>
      <div className="right flex items-center gap-5">

<img src={person} alt="" className="w-10 h-10"/>
<div className="info">
  <h1>name</h1>
  <p>message</p>
</div>

      </div>
      <div className="left">
        <p>28vav</p>
      </div>
    </li>

  </ul>
</div>


<div className="messagesContainer  py-10 rounded-xl border border-gray-200 mt-36 px-3 bg-white md:px-10 ">


  <div className="sender-m mb-10 md:w-2/4 w-full">
<li className=''>
      <div className="right flex items-center gap-5">

<img src={person} alt="" className="w-10 h-10"/>
<div className="info">
  <h1>name</h1>
  <p>message</p>
</div>

      </div>
     
    </li>

<div className="m-content p-10 rounded-2xl bg-red-100 ">
  <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
</div>

  </div>


<div className='flex justify-end items-end  '>


  <div className="r-m md:w-2/4  w-[80%] mx-auto md:mx-0 flex flex-col justify-start items-end ">

{chats.length>0? chats.map((item)=>{
  
  return<div className='space-y-5 w-full'> <li className=''>
      <div className="right flex justify-end items-center gap-5 ">

<img src={person} alt="" className="w-10 h-10"/>

<div className="info">
  <h1>name</h1>
  <p>message</p>
</div>

      </div>
     
    </li>

<div className="m-content p-10 rounded-2xl bg-red-100 w-full ">
  <p className='text-black w-full'>{item}</p>
</div>

</div>}):null}




  </div>





</div>
  
</div>

<div className='flex justify-center mt-10'>
  <div class="w-full max-w-md h-12  gap-3 flex items-center">
    <div class="flex items-center h-full w-full text-sm text-gray-500 bg-white border border-gray-500/30 rounded">
        <button type="button" class="h-full px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
            </svg>
        </button>
        <input onChange={(e)=>{setchatinput(e.target.value)}} class="outline-none bg-transparent h-full w-full" type="text" placeholder="Message..."/>
    </div>
    <button onClick={()=>{handleSend()}} type="button" class="h-full rounded w-24 text-sm text-white/90 bg-blue-600 font-medium">
        Send
    </button>
</div>
</div>








    </div>
  )
}

export default ChatBox

