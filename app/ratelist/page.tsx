"use client"

import React, { useEffect, useState } from 'react'
import { addData, selectRate } from "@/lib/features/rate/rateSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from 'next/link';
import { selectUser } from '@/lib/features/login/authSlice';
import { useRouter, useSearchParams } from 'next/navigation';
export default function ratelist() {
  let [loading, setLoading] = useState(true);
  const exchangeRate = useAppSelector(selectRate);
  const user = useAppSelector(selectUser)
  const router = useRouter();
  ////test branch 
  useEffect(()=> {
      if (!user.user.email){
          router.push('/')
      }
      else {
        setLoading(false)
      }
  },[])

  if(loading) {
    return (<> loading</>)
  }
  return (
   <div className='py-28 px-60 w-full '>  
        <Link href="/create">
        <button className="border bg-primary px-8 py-1 text-white rounded-md">
            Create
        </button> 
        </Link>
        <div className='mt-16 w-full '>   
            <table className='border-collapse w-full border-spacing-y-3.5'>
                <thead className='bg-flash-low py-3 text-black'>
                    <tr className='h-10'>
                        <th>Currency</th>
                        <th>Exchange Time</th>
                        <th>Exchange rate</th>
                    </tr>
                </thead>
                <tbody className='text-center text-primary'>
                    {
                        exchangeRate.map( data => (<>
                        <tr className='even:bg-flash-light odd:bg-flash-medium h-10'>
                            <td>{data.currency}</td>
                            <td>{data.date.toLocaleDateString('en-GB', { hour: 'numeric',minute: 'numeric' , hour12: true }).replace(',', '  -')}</td>
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
