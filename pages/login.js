import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import {useForm} from 'react-hook-form';

export default function LoginScreen() {

    const {
        handleSubmit,
        register,
        formState:{errors},
    } = useForm();

    const submitHandler = ({email, password}) =>{
        console.log(email, password)
    }
  return (
    <Layout title="login">
        <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
            <h1 className='mb-4 text-xl'>Login</h1>
            <div className='mb-4'>
                <label htmlFor="email">Email</label>
                <input type="email" 
                {...register('email', {required: 'Please Enter email',
            pattern:{
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message:'Enter valid email address'
            }})}
                className= "w-full" id="email" autoFocus>
                    
                </input>
                {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}
            </div>
            <div className='mb-4'>
                <label htmlFor="password">Password</label>
                <input 
                {...register('password', {required: 'Please Enter password',
                   minLength:{value:5, message:'paswword must be more than 5'}
                })}
                type="password" className= "w-full" id="password" autoFocus>
                </input>
                {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}
            </div>
            <div className='mb-4'>
                <button className='primary-button'>Login</button>
            </div>
            <div className='mb-4'>
                Don&apos;t have account? &nbsp;
                <Link href="register">Register</Link>
            </div>
        </form>
    </Layout>
  )
}
