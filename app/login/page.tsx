'use client';
import React from 'react';
import { login, selectUser } from "@/lib/features/login/authSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";


export default function Login() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser)
  
    
    const signIN =(values, setSubmitting,resetForm) => {
          console.log(values)
          dispatch(login(values))
          resetForm();
    }
      
  return (
    <div className="grid place-items-center h-screen">
      <div className="md:w-full">
        <Formik
          initialValues={{ email: '', password: '' }}
          
          onSubmit={(values, { setSubmitting, resetForm }) => {
            signIN(values, setSubmitting, resetForm);
         
        }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-8">
              <div className="text-center mb-5">
                <span className="text-3xl font-bold"> Login </span>
              </div>
              <div className="mb-5">
                <Field
                  placeholder="Email"
                  type="email"
                  name="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20
                             text-gray-900 ring-1 placeholder:text-gray-400
                              sm:text-sm sm:leading-6"
                />

                <ErrorMessage name="email" component="div" />
              </div>

              <div className="mb-5">
                <Field
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20
                          text-gray-900 ring-1 placeholder:text-gray-400
                          sm:text-sm sm:leading-6"
                />

                <ErrorMessage name="password" component="div" />
              </div>

              <div className="w-full">
                <button
                  className="border bg-black text-white rounded-lg px-3 py-1 w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
