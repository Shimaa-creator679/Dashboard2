import React from 'react'
import { useSelector } from 'react-redux'
import fromTo from "../../assets/images/fromto.png"

const TransDetail = ({transId}) => {
    const {transData}=useSelector(state=>state.transData)

const transDEtail = transData.find(item => item.id === transId);

console.log(transDEtail)

  return (
    <div className="md:col-span-5">
      <h1 className="text-blue-500 font-bold text-center uppercase">Transaction Detail</h1>

      <div className="rounded-xl shadow-xl mt-5 overflow-hidden">
        <div className="bg-blue-600 py-5 px-6 space-y-3">
          <h1 className="text-lg text-gray-300">
            <span className="text-white font-bold">Amount:</span> {transDEtail?.amount}$
          </h1>
          <p className="text-lg text-gray-300">
            <span className="text-white font-bold">ID:</span> {transDEtail?.id}
          </p>
        </div>

        <div className="bg-white px-6 py-5 space-y-4">

          <div className="space-y-1 bg-gray-200 rounded-xl px-3 py-2">
            <h2 className="text-blue-500 font-bold text-sm">
              From: <span className="text-black ml-2">{transDEtail?.from}</span>
            </h2>
            <p className="text-blue-500 font-bold text-sm">
              Sent: <span className="text-black ml-2">{transDEtail?.date}</span>
            </p>
          </div>

          <div className="space-y-1 bg-gray-200 rounded-xl px-3 py-2 text-sm">
            <h2 className="text-blue-500 font-bold">
              To: <span className="text-black ml-2">tonname</span>
            </h2>
            <p className="text-blue-500 font-bold text-sm">
              Received: <span className="text-black ml-2">date</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TransDetail