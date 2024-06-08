import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";

import { Oval } from 'react-loader-spinner';

const LoginComponent = ({ submitUserCredentialsForLogin, swapLoginSignup, isLoading, handleGoogleLogin }) => {

    const handleLoginFormSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        submitUserCredentialsForLogin(email, password);
    }
    
    return (
        <div className='w-full flex items-center flex-col gap-3 p-4'>
            <p className=' text-xl font-bold text-yellow-500'>Almost there,</p>
            <p className='mb-1'>Sign in to access your account or get started ...</p>
            <button
                disabled={isLoading}
                // onClick={handleGoogleLogin}
                className='w-[90%] border-2 rounded-lg p-2 bg-white flex flex-row items-center hover:border-yellow-500 focus:border-yellow-500'
                name='googleloginbtn'
            >
                <FaMeta size={30} color='#0668E1'/>
                <p className='text-center w-full'>
                    Sign in with Meta
                </p>
            </button>
            <button
                disabled={isLoading}
                onClick={handleGoogleLogin}
                className='w-[90%] border-2 rounded-lg bg-white p-2 flex flex-row items-center hover:border-yellow-500 focus:border-yellow-500'
                name='googleloginbtn'
            >
                <FcGoogle size={30}/>
                <p className=' text-center w-full'>
                    Sign in with Google
                </p>
            </button>
            <div className='flex flex-row items-center gap-2'>
                <div className='h-[1.5px] w-[300px] rounded-lg bg-yellow-500'></div>
                <p className='my-2'>or</p>
                <div className='h-[1.5px] w-full bg-yellow-500 rounded-lg'></div>
            </div>
            <div className='w-[90%]'>
                <form className='flex flex-col w-full gap-3' onSubmit={handleLoginFormSubmit}>
                    <input name="email" className='w-full border-2 text-yellow-500 rounded-lg p-3 outline-yellow-500' placeholder='Email' type={"email"} />
                    <input name="password" className='w-full text-yellow-500 border-2 rounded-lg p-3 outline-yellow-500' placeholder='Password' type={"password"} />
                    <button disabled={isLoading} className=' text-right text-sm text-yellow-500 font-bold hover:underline'>Forgot password?</button>
                    <button disabled={isLoading} className='border-2 bg-yellow-500 p-3 rounded-lg text-white text-sm border-yellow-500 flex items-center justify-center'>
                        {
                            !isLoading ?
                            <p>Log in</p>:
                            <Oval
                                visible={isLoading}
                                height="20"
                                width="20"
                                color="white"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        }
                    </button>
                </form>
                <div className='flex flex-row text-sm justify-center mt-5 gap-1'>
                    <h1>Don't have an account?</h1>
                    <button disabled={isLoading} onClick={() => swapLoginSignup("createaccount")} className='font-bold text-yellow-500 hover:underline cursor-pointer '>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent