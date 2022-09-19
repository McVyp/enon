import React, {useEffect} from 'react'
import Layout from '../components/Layout';
import {signIn, useSession} from 'next-auth/react';
import Link from 'next/link'
import {useForm} from 'react-hook-form';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import {  useRouter } from 'next/router';

export default function LoginScreen() {

    const {data: session} = useSession();

    const router = useRouter();
    const {redirect} = router.query;

    useEffect(() =>{
        if(session?.user) {
            router.push(redirect || '/');
        }
    },[router, session, redirect]);

    const {
        handleSubmit,
        register,
        formState:{errors},
    } = useForm();

    const submitHandler = async ({email, password}) =>{
        try{
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });
            if(result.error){
                toast.error(result.error);
            }
        }catch(err){
            toast.error(getError(err));
        }
    };

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
