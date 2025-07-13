import React, { useEffect } from 'react'
import {  useRef, useState } from "react";
import CountUp from "react-countup";


const CounterCard = ({item}) => {

        const ref = useRef(null);
  const [startCount, setStartCount] = useState(false);


  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect(); // علشان يعد مرة واحدة بس
          }
        },
        {
          threshold: 0.5, // يبدأ العد لما نص العنصر يظهر
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);
  
  return (
        <div   ref={ref} key={item.id} className={`classic-item space-y-5 hover:opacity-90  text-white px-10 py-10 rounded-2xl  ${item.bg==="blue"?"bg-blue-500":item.bg==="lightblue"?"bg-blue-300":item.bg==="violet"?"bg-violet-500":"bg-green-200"}`}>
          <h3 className='text-3xl font-semibold'>{item.name}</h3>
            <p className='font-bold text-4xl'>${startCount ? <CountUp end={item.end} duration={2} /> : 0}</p>
          <p>saved {item.saved}</p>
          

        </div>
  )
}

export default CounterCard