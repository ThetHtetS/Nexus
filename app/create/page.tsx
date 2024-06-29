'use client';
import React from 'react';
import { addData, selectRate } from "@/lib/features/rate/rateSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectRate)
    const router = useRouter();
   
    const create =(values, setSubmitting,resetForm) => {
          console.log(values)
          dispatch(addData(values))
          resetForm();
          router.push('/ratelist');
    }
      
  return (
  <div className='p-20  w-full'>  
    <Link href="/ratelist">
      <button className="border bg-green-500 px-6 py-1 text-white rounded-lg">
          Back
      </button> 
    </Link>
    <div className="flex justify-center mt-20 h-screen">

      <div className="md:max-w-1/2">
        <Formik
          initialValues={{exchangeRate: '', curency: 'USD', date: new Date()}}
          
          onSubmit={(values, { setSubmitting, resetForm }) => {
            create(values, setSubmitting, resetForm);
         
        }}
        >
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

              <div className="w-full">
                <button
                  className="border bg-green-600 text-white rounded-lg px-3 py-1 w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  create
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
