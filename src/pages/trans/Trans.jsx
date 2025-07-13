import React, { useEffect, useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransData } from '../../Redux/trans/TransSliace';
import TransDetail from './TransDetail';
import fromarrow from "../../assets/images/right-arrow_10255511.png"
const Trans = () => {
    const[transId,settransId]=useState(1)
    const[date,setDate]=useState("")
    console.log(date)
    console.log(transId)

    const dispatch=useDispatch()

    const {transData}=useSelector(state=>state.transData)

    console.log(transData)


    useEffect(()=>{
dispatch(fetchTransData())
    },[])


    const transFilteredByDate=transData.filter((item)=>{
        return item.date===date

    })
    console.log(transFilteredByDate)

  return (
    <div className=''>
        <div className="nav flex items-center justify-between">
            <h2 className="text-xl font-bold text-blue-500 ">transaction</h2>
{/* input */}
            <div className="flex  items-center border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden max-w-md w-full">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
        <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
    </svg>
    <input  type="text" placeholder="Search for Date " className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"/>
</div>
<div classNameName="icon h-9 w-8 bg-white pt-3 px-2 flex items-center justify-center">
   <IoMdNotificationsOutline classNameName='text-3xl'/> 
</div>

</div>

<hr className='mt-10'/>

<div className="filters pt-20">
    <h1 className='text-xl font-bold text-blue-500 pb-5'>filters</h1>
    <div className="date rounded-xl shadow-lg inline-block py-5 bg-white px-5">
      <input type='date' onChange={(e)=>{setDate(e.target.value)}} value={date}className='outline-none border-none '/>
    </div>
</div>
     <hr className='mt-5'/>   




     <div className="  h-screen pt-10 ">
        <div className="one w-full overflow-x-auto grid grid-cols-12 justify-between gap-10 bg-white relative ">
           

<div className="relative overflow-x-auto shadow-md sm:rounded-lg md:col-span-7 col-span-12  h-full ">
    
    <table className="w-full min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                 Date
                </th>
                <th scope="col" className="px-30 py-3">
                 From
                </th>
                <th scope="col" className="px-6 py-3">
                   Amount
                </th>
                
            </tr>
        </thead>


        <tbody>

            {date?transFilteredByDate.map((item,index)=>{
                return <tr onClick={()=>{settransId(item.id)}} key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
{item.date}
                </th>
                <td className="px-30 py-4">
                 {item.from}
                </td>
                <td className="px-6 py-4">
                {item.amount}$
                </td>
               
               
            </tr>
            }):transData.map((item,index)=>{
                 return <tr onClick={()=>{settransId(item.id)}} key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
{item.date}
                </th>
                <td className="px-30 py-4">
                 {item.from}
                </td>
                <td className="px-6 py-4">
                {item.amount}$
                </td>
               
               
            </tr>
            })}
            

           
        </tbody>

    </table>


</div>

<img src={fromarrow} className='w-8 h-8 right-[38%] top-1/2 absolute hidden md:block'></img>
<TransDetail transId={transId}/>




        </div>
     </div>
    </div>
    
  )
}

export default Trans