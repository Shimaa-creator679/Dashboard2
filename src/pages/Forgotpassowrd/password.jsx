import React from 'react'

const Passowrd = () => {


    // محتاجه اخزن ايميل اليوزر ف فاير بيز عشان تقدر توصل ل ايميله وتبعتله لينك 
  return (
   <>
   <div class="bg-white mx-auto text-gray-500 max-w-96 mt-20 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
    <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Forget Password?</h2>
    <label for="email">Email</label>
    <input id="email" class="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4" type="email" placeholder="Enter your email"/>
    <button type="button" class="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white">Send Email</button>
    <p class="text-center mt-4">Don’t have an account? <span class="text-blue-500 underline">Signup Now</span></p>
</div>
   </>
  )
}

export default Passowrd