import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ReactApexChart from 'react-apexcharts';

import CounterCard from './CounterCard';
import Budgets from '../Budgets/Budgets';
import { useLocation } from 'react-router';
import Expenses from '../Expenses/Expenses';
const Classic = () => {


  const location =useLocation()
 console.log(location)

   

     const [state, setState] = React.useState({
          
            series: [{
              name: 'Ap',
              type: 'column',
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
              name: 'AR',
              type: 'line',
              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],

            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              stroke: {
                width: [0, 4]
              },
              title: {
                text: 'Traffic Sources'
              },
              dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
              },
              labels: ['01 Jan ', '03 Jan ',   '05 Jan ',  '07 Jan ', '09 Jan ',  '11 Jan ' ],
              yaxis: [{
                title: {
                  text: 'Ap',
                },
              
              }, {
                opposite: true,
                title: {
                  text: 'AR'
                }
              }]
            },
            });




  // redux

  const {classicData,loading,error}=useSelector((state)=>state.classic)




  return (
    <div className='classic-container mt-20 max-w-full'>

{/* cards */}
    {loading?<p>loading...</p>:error?<p>{error}</p>: <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-evenly items-center'>
      {classicData.map(item=>(
    
        
<CounterCard item={item} />
     


      ))}


    </div>
    }


{/* chart */}
<div className='bg-[#f9fbff] mt-10 py-10 rounded-xl'>

  <h2 className='text-2xl font-semibold py-5 pl-5 text-gray-300'>AP and AR Balance</h2>
            <div id="chart" className='w-3/4 mx-auto'>
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
    
    {/* Budgets */}
    <Budgets/>

{/* Expenses */}
<Expenses/>
    </div>
  )
}

export default Classic