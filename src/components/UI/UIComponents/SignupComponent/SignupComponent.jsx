import React from 'react'
import { MdEmail } from "react-icons/md";
import { Oval } from 'react-loader-spinner';
import { FaUser, FaLock, FaCalendarAlt } from "react-icons/fa";

const SignupComponent = ({ submitUserCredentialsToCreateAccount, swapLoginSignup, isLoading }) => {

    const handleCreateAccountFormSubmit = e => {
        e.preventDefault()
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const dob = e.target.dob.value;
        submitUserCredentialsToCreateAccount(email, password, username, dob);
    }

    return (
        <div className='w-full flex items-center justify-center flex-col p-4'>
            <p className=' text-2xl font-bold text-yellow-500'>Create Account</p>
            <p className='mb-5'>Create Account to get started ...</p>

            <div className='w-[90%]'>
                <form className='flex flex-col w-full gap-4' onSubmit={handleCreateAccountFormSubmit}>
                    <div className='flex flex-row w-full border-2 bg-white rounded-lg p-3 outline-indigo-500 items-center focus:border-indigo-500'>
                        <span>
                            <FaUser size={15} color='rgb(234 179 8)' />
                        </span>
                        <input name="username" className=' text-yellow-500 outline-none px-2 w-full' placeholder='Username' type={"text"} />
                    </div>
                    <div className='flex flex-row bg-white w-full border-2 rounded-lg p-3 outline-yellow-500 items-center'>
                        <span>
                            <MdEmail size={19} color='rgb(234 179 8)' />
                        </span>
                        <input name="email" className='w-full px-2 text-yellow-500 outline-none' placeholder='Email' type={"email"} />
                    </div>
                    <div className='flex flex-row w-full bg-white border-2 rounded-lg p-3 outline-yellow-500 items-center'>
                        <span>
                            <FaLock size={15} color='rgb(234 179 8)' />
                        </span>
                        <input name="password" className='w-full px-2 outline-none text-yellow-500' placeholder='Password' type={"password"} />
                    </div>
                    <div className='flex flex-row w-full bg-white border-2 rounded-lg p-3 outline-yellow-500 items-center'>
                        <span>
                            <FaLock size={15} color='rgb(234 179 8)' />
                        </span>
                        <input name="cnfpassword" className='w-full px-2 outline-none text-yellow-500' placeholder='Confirm Password' type={"password"} />
                    </div>
                    <div className='flex flex-row w-full bg-white border-2 rounded-lg p-3 outline-yellow-500 items-center'>
                        <span>
                            <FaCalendarAlt size={15} color='rgb(234 179 8)' />
                        </span>
                        <input name="dob" className='w-full text-yellow-500 outline-none px-2' placeholder='Date of birth' type={"date"} />
                    </div>            
                    <button disabled={isLoading} className='border-2 bg-yellow-500 p-3 rounded-lg text-white text-sm border-yellow-500 flex items-center justify-center'>
                        {
                            !isLoading ?
                            <p>Create Account</p>:
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
                    <h1>Already have an account?</h1>
                    <h1 onClick={() => swapLoginSignup("login")} className='font-bold text-yellow-500 hover:underline '>Login</h1>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent