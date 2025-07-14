import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, fetchBudgetData, setBudgetFromLocal } from '../../Redux/Budget/BudgetSlice'
import toast from 'react-hot-toast'


const Budgets = () => {

  const dispatch=useDispatch()




 const[state,setstate]=useState({
  id:1,
  category:"",
  limit:0,
  spent:0
 })


const handleClick=(e)=>{
  e.preventDefault()
  dispatch(addItem(state));

  toast.success('item was saved ', {
  duration: 4000,
  position: 'bottom-right',
  className:"w-full"
})


 

}


  const {BudgetData,loading}=useSelector(state=>state.BudgetData)
 

  // useEffect(()=>{
  
  //    dispatch(fetchBudgetData())
   
    
  // },[])


 useEffect(() => {
  const saved = localStorage.getItem("Budget");
  if (saved) {
    const parsed = JSON.parse(saved);
    dispatch(setBudgetFromLocal(parsed));
  } else {
    dispatch(fetchBudgetData());
  }
}, []);

useEffect(() => {
  localStorage.setItem("Budget", JSON.stringify(BudgetData));
}, [BudgetData]);

  return (
    <div className='relative ' >
      <div className="flex justify-between items-center">
          <h1 className='md:text-2xl font-bold text-orange-900 py-5'>My Budgets</h1>

        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className=" text-center bg-gray-200 rounded-xl px-2 py-2 text-sm text-orange-900  " type="button">
create Budget
</button>

      </div>
      

        <div className="cards grid grid-cols-1 md:grid-cols-3 gap-5">


            



         

{loading  ? <div>loading</div>:
BudgetData.map((item,index)=>{
  return <div className="card bg-white  p-4 rounded-lg shadow-xl py-10 px-10 space-y-10 ">
<div className="top flex justify-between items-center">
  
    <span className='text-slate-400 font-bold'>{item.category}</span>
    <span className='font-bold text-orange-900 md:text-3xl'>{item.limit}$</span>
</div>
<div className="bottom flex justify-between items-center">
    <p className='text-slate-400'>spent:{item.spent}</p>
    <p className='text-slate-400'>Renaining:{item.limit-item.spent}</p>
</div>

<div className="progresbar">

<div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-orange-900 h-2.5 rounded-full w-10" ></div>
</div>

</div>
</div>
})

}
</div>




<div id="authentication-modal" tabIndex={-1} aria-hidden="true" className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0  left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
    <div className="relative p-4 w-full max-w-md max-h-full">
       
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-red-700">
 
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
       Create New Budget
                </h3>


                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round"strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>



            </div>
        

            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#" onSubmit={handleClick}>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Name</label>
                        <input onChange={(e)=>{setstate({...state,category:e.target.value})}} type="text" name="Budget" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="eg:الصحه" required />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Amount</label>
                        <input  onChange={(e)=>{setstate({...state,limit:e.target.value})}}  type="text"  placeholder="eg:8000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">spent</label>
                        <input  onChange={(e)=>{setstate({...state,spent:e.target.value})}}  type="text"  placeholder="eg:8000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    



                    <button  type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Budget</button>
                  
                </form>
            </div>
        </div>
    </div>
</div> 






 




        
    </div>
  )
}

export default Budgets
