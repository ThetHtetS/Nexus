'use client';
import React, { useEffect } from 'react';
import { addData, selectRate } from "@/lib/features/rate/rateSlice";
import { selectUser } from '@/lib/features/login/authSlice';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Create() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser)
    const router = useRouter();
    useEffect(()=> {
        if (!user.user.email){
            router.push('/')    
        }
    },[])
    const create =(values: Object) => {
          console.log(values)
          dispatch(addData(values))
          router.push('/ratelist');
    }
      
  return (
  <div className='py-28 px-60 w-full'>  
    <Link href="/ratelist">
      <button className="border bg-primary px-6 text-white rounded-md">
        <div className='flex items-center gap-4 ml--3'>
           <span className='text-2xl'> &lt;</span>  
           <span>Back</span>
        </div>
      </button> 
    </Link>
    
    <div className="flex justify-center mt-20 h-80 relative">
      <div className="md:max-w-1/2">
        <Formik
          initialValues={{exchangeRate: '', currency: 'USD', date: new Date()}}
          
          onSubmit={(values: object) => {
            create(values);
            }}>
          {({ isSubmitting }) => (
            <Form className="space-y-8">
              <div className="mb-5">
                <Field
                  as="select"
                  name="currency"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20
                            text-gray-900 ring-1 placeholder:text-gray-400
                            sm:text-sm sm:leading-6"
                >
                  <option value="USD">USD</option>
                  <option value="THB">THB</option>
                  <option value="SGD">SGD</option>
                  <option value="MMK">MMK</option>
                </Field>
              </div>
              <div className="mb-5">
                <Field
                  placeholder="Exchange Rate"
                  type="text"
                  name="exchangeRate"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20
                             text-gray-900 ring-1 placeholder:text-gray-400
                             sm:text-sm sm:leading-6"
                />
                <ErrorMessage name="password" component="div" />
              </div>

              <div className="absolute end-40 bottom-10">
                <button
                  className="border bg-primary text-white rounded-lg px-8 py-1"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  );
}
