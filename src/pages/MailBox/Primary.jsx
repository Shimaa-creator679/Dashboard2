import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchmessagesData } from '../../Redux/mailBox/mailSlice'
import MessageData from './MessageData'

const Primary = () => {

    const dispatch=useDispatch()
    const {messagesData}=useSelector(state=>state.messageData)
 
    const[query,setQuery]=useState("")

    useEffect(()=>{
        dispatch(fetchmessagesData())
    },[])

    const filteredMessages = messagesData.filter((msg) =>
  msg.sender.toLowerCase().includes(query.toLowerCase()) ||
  msg.subject.toLowerCase().includes(query.toLowerCase()) ||
  msg.content.toLowerCase().includes(query.toLowerCase()) ||
  msg.status.toLowerCase().includes(query.toLowerCase())
);


    console.log(messagesData)
  return (


 <div>
   <div className="top flex justify-between items-center">
            <h1>content List</h1>

           <div class="flex w-3/6 items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md ">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
        <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
    </svg>
    <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"/>
</div>
        </div>




        <div className="table lg:px-10 min-h-screen bg-white mt-10 rounded-xl w-full ">

<ul>
    <li className='flex justify-between items-center p-5 rounded-lg mt-5'>
<div className='w-5 h-5 rounded-full bg-white border border-black'></div>
<h2 className='text-xl font-bold text-blue-950'>name</h2>
<h2 className='text-xl font-bold text-blue-950'>status</h2>
    </li>
    <hr/>



    {query?filteredMessages.length > 0 ? filteredMessages.map((message, index) => (
        <MessageData key={index} message={message} />
    )) : (
        <li>No messages found</li>
    ) : messagesData.length > 0 ? messagesData.map((message, index) => (
        <MessageData key={index} message={message} />
    )) : (
        <li>No messages found</li>
    )}

</ul>



        </div>
 </div>








   
  )
}

export default Primary