import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MailBox = () => {
  return (
    <div>


   <div className='grid grid-cols-12 gap-5 max-w-full'>

    <div className="side min-h-screen bg-side  col-span-12 md:col-span-3 rounded-lg px-5 pt-10 shadow-lg">
        {/* button */}
        <div className='text-center'>
            <button className='bg-blue-400 text-white py-3 px-2 hover:bg-blue-700 rounded-lg '>compose</button>
        </div>


<div className='mt-5 space-y-5'>
<h1 className='text-center'>inbox</h1>

<ul className='flex flex-col items-center space-y-10'>
    <li><Link >Primary(31)</Link></li>
    <li><Link to="spam">Spam(5)</Link></li>
    <li><Link to="drafts">Drafts</Link></li>
    <li><Link to="trash">Trash</Link></li>
</ul>


</div>


      </div>


<div className="main pt-10 col-span-12 md:col-span-9 lg:px-1 ">
 <Outlet/>
</div>




   </div>
    


     

















      

      
      </div>
 
       
  )
}

export default MailBox
