import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import Swal from 'sweetalert2'
const Expenses = () => {






  const[Expenses,setExpenses]=useState(()=>{
    const saved=localStorage.getItem("expenseResponse")
    if(saved){
      return  JSON.parse(saved) 
    }
    else{
      return []
    }
  })
  console.log(Expenses)

  const[showmodal,setshowmodal]=useState(false)

  const handleDElete=async(id)=>{


  
const newarray=Expenses.filter((item)=>{
  return item.id!==id
})
setExpenses(newarray)

const swalWithBootstrapButtons = Swal.mixin({
   customClass: {
     confirmButton:  "bg-green-600 ml-5 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2",
     cancelButton: "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
   },
   buttonsStyling: false
 });

 swalWithBootstrapButtons.fire({
   title: "Are you sure?",
   text: "You won't be able to revert this!",
  icon: "warning",
   showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
 }).then((result) => {
  if (result.isConfirmed) {
   swalWithBootstrapButtons.fire({
     title: "Deleted!",
     text: "Your file has been deleted.",
     icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
   result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
 });

  }





  useEffect(()=>{
    localStorage.setItem("expenseResponse",JSON.stringify(Expenses))
  },[Expenses])

  
  const [state,setstate]=useState({

    name:"",
    about:"",
    date:null

  })

  const handlechange=(e)=>{
    setstate({...state,[e.target.name]:e.target.value})
  }


  const handlesubmit= async(e)=>{
    e.preventDefault();
    try{
      const budgetData={...state,id:Date.now()}

      const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(budgetData)
        }) 

        const data = await res.json();


console.log("Response:", data);



       const updatedItems = [...Expenses, budgetData];

    // 2️⃣ خزّنهم في localStorage
    localStorage.setItem("expenseResponse", JSON.stringify(updatedItems));

    // 3️⃣ حدّث الـ state
    setExpenses(updatedItems);

  toast.success('item was saved ', {
  duration: 4000,
  position: 'bottom-right',
  className:"w-full"
})

    setshowmodal(false)

      

    }catch(error){
 console.error("Error:", error);
    }
  }


  return (
    <div className='h-full relative  w-full overflow-x-auto'>
      <div className="flex justify-between items-center py-10">
        <h1 className='font-bold md:text-3xl  text-[#112c5f]'>MyExpenses</h1>
        <button onClick={()=>{setshowmodal(true)}} className='bg-orange-800 text-white font-bold py-1 px-1 md:p-5 text-sm rounded'>Add Expenses</button>
      </div>
        

        <div className="table w-full h-full rounded-xl overflow-hidden overflow-x-auto">
          <table className='min-w-full h-full  '>
            <thead className=''>
              <tr className='bg-white'>
                <th>name</th>
              <th>about</th>
              <th>Date</th>
              <th>action</th>
              </tr>
              
            </thead>

            <tbody>
{Expenses&& Expenses.length>0?  Expenses.map((item,index)=>{
  return<tr key={index}>
  <td>
{item.name}
  </td>
  <td>
   {item.about}
  </td>
  <td>
  {item.date}
  </td>
  <td className=''    >
    <button onClick={()=>{handleDElete(item.id)}} className='px-2 py-2 text-white bg-orange-700 rounded-lg '>  Delete</button>
  
  </td>
</tr>
}):null}
 




            </tbody>

          </table>
        </div>


{showmodal&&     <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[99999999]">
  <div className="bg-white text-gray-700 w-full max-w-md mx-4 rounded-lg shadow-lg p-6 relative">

    <button onClick={()=>{setshowmodal(false)}} className='absolute top-8 right-5 bg-black text-white font-bold text-small w-8 h-8 hover:bg-black/40 rounded-full'>X</button>
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Need Help? Contact Us</h2>
    
    <form className="space-y-4 text-sm" onSubmit={handlesubmit}>
      <div>
  <label htmlFor="name" className="block mb-1">Name</label>
  <input
    name="name"
    id="name"
    type="text"
    placeholder="Enter name.."
    value={state.name}
    onChange={handlechange}
    required
    className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
  />
</div>

<div>
  <label htmlFor="about" className="block mb-1">Amount</label>
  <input
    name="about"
    id="about"
    type="text"
    placeholder="Enter Amount.."
    value={state.about}
    onChange={handlechange}
    required
    className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
  />
</div>

<div>
  <label htmlFor="date" className="block mb-1">Date</label>
  <input
    name="date"
    id="date"
    type="date"
    placeholder="Enter Date.."
    value={state.date}
    onChange={handlechange}
    required
    className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
  />
</div>


     
      <button
        type="submit"
        className=" bg-indigo-600 hover:bg-indigo-700  active:scale-95 transition py-2 rounded text-white font-medium"
      >
       ِAdd Expense
      </button>
    </form>
  </div>
</div>}


    </div>
  )
}

export default Expenses