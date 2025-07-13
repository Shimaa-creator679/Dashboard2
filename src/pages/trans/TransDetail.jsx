import React from 'react'
import { useSelector } from 'react-redux'
import fromTo from "../../assets/images/fromto.png"

const TransDetail = ({transId}) => {
    const {transData}=useSelector(state=>state.transData)

const transDEtail = transData.find(item => item.id === transId);

console.log(transDEtail)

  return (
    <div className='md:col-span-5 col-span-12 h-full '>
        <h1 className='text-gray-900'>transactionDetail</h1>

        <div className="detail   rounded-xl shadow-xl bg-white mt-5 overflow-hidden ">
            <div className="top space-y-5 h-1/4 bg-blue-600 py-5 px-10">
                <h1 className='text-5xl text-gray-300'>{transDEtail?.amount}$</h1>
                <p className='text-2xl text-gray-300'>ID:{transDEtail?.id}</p>
            </div>

            <div className="bottom px-10 pb-10 ">

                <div className="from space-y-5 relative">
                    <img src={fromTo} className='absolute w-20 h-20 top-1/2 left-0'></img>
                    <h1 className='text-center text-blue-500'>from</h1>
                    <p className='text-center '>{transDEtail?.from}</p>
                    <p className='text-center'>sent:{transDEtail?.date}</p>
                </div>
                <div className="to space-y-5">
                    <h1 className='text-center text-blue-500'>to</h1>
                    <p className='text-center'>tonname</p>
                    <p className='text-center'>recieved:date</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransDetail