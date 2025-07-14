import React from 'react'
import faq from "../../assets/images/Tiny business people with giant FAQ letters.jpg"

import FaqElement from './FaqElement';




const faqq=[
    {
        id:1,
        q:"how old are you",
        answer:"i.m 20 years"

    },
    {
        id:2,
        q:"how old are you",
        answer:"i.m 20 years"

    },
    {
        id:3,
        q:"how old are you",
        answer:"i.m 20 years"

    },
    {
        id:4,
        q:"how old are you",
        answer:"i.m 20 years"

    },
]
const Faq = () => {
  return (
    <div className='  '>
        <div className="   rounded-xl overflow-hidden  shadow-lg   w-[90%] mx-auto ">

        <div className="grid grid-cols-12  bg-cover    "  >

            <div className="md:col-span-7 col-span-12 w-full h-[300px] md:h-full bg-center   bg-cover "  style={{ backgroundImage: `url(${faq})` }} >

{/* <img src={faq} className='h-full w-full   inset-0'/> */}

            </div>





            <div className="col-span-12 h-full md:col-span-5 bg-white px-5 py-10 ">
<h1 className='text-xl font-bold text-[#ec5648]'>freqently asked question</h1>
<div className="question">
    <ul className='pt-10'>
{faqq.map((q,index)=>{
    return <FaqElement/>
})}

        


        
    </ul>
</div>

            </div>


        </div>
        </div>
    </div>
  )
}

export default Faq