"use client"

import React from 'react'
import { addData, selectRate } from "@/lib/features/rate/rateSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from 'next/link';

export default function page() {
  const exchangeRate = useAppSelector(selectRate);
  console.log(exchangeRate, "exchange rate")
  return (
   <div className='p-20 w-full '>  
        <Link href="/create">
        <button className="border bg-green-500 px-6 py-1 text-white rounded-lg">
            Create
        </button> 
        </Link>
        <div className='mt-20 w-full'>   
            <table className='border-collapse w-full'>
                <thead className='bg-slate-400 py-3'>
                    <tr>
                        <th>Currency</th>
                        <th>Exchange Time</th>
                        <th>Exchange rate</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        exchangeRate.map( data => (<>
                        <tr className='even:bg-gray-50 odd:bg-white'>
                            <td>{data.currency}</td>
                            <td>{data.date.toLocaleDateString()}</td>
                            <td>{data.exchangeRate}</td>
                    </tr>
                        </>))
                    }             
                </tbody>
               
            </table> 
        </div>  
   </div> 
   
  )
}
