"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const RegisterPage = () => {

    const router = useRouter();

    const handleUserLogin = () => {
        router.push(`/login/user`)
    };
    const handleUserSignup = () => {
        router.push(`/userSignup`)
    };

    const handleDoctorLogin = () => {
        router.push(`/login/docs`);
    }
    const handleDoctorSignup = () => {
        router.push(`/doctorSignup`);
    }


    return (
        <div className='bg-gray-200 p-6 mx-auto rounded-xl shadow-md h-screen backdrop-blur-lg'>
            <div className='flex items-center justify-center w-full gap-x-48 p-3'>
                <div className='gap-y-10 flex flex-col border-4 w-[300px] h-[500px] p-3 items-center justify-center rounded-lg mt-12 bg-cyan-200 border-cyan-700 hover:border-yellow-400 hover:shadow-2xl'>
                    <div>
                        <h1 className='font-mono font-semibold text-xl text-gray-800'>
                            Signup / Login as USER
                        </h1>
                    </div>
                    <div>
                        <Image alt="login user icon" src="/images/loginuser.png" width={120} height={120} className='items-center justify-center' />
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-yellow-400 border-4 border-yellow-900 rounded-lg font-semibold font-mono text-lg hover:bg-yellow-900 hover:border-yellow-400 hover:text-white' onClick={handleUserLogin}>Login</button>
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-red-400 border-4 border-red-950 rounded-lg font-semibold font-mono text-lg hover:bg-red-900 hover:border-red-400 hover:text-white' onClick={handleUserSignup}>Sign Up</button>
                    </div>
                </div>

                <div className='gap-y-10 flex flex-col border-4 w-[300px] h-[500px] p-3 items-center justify-center rounded-lg mt-12 bg-purple-300 border-purple-700 hover:border-yellow-400 hover:shadow-2xl'>
                    <div>
                        <h1 className='font-mono font-semibold text-xl text-gray-800'>
                            Signup / Login as DOCTOR
                        </h1>
                    </div>
                    <div>
                        <Image alt="login user icon" src="/images/doctorlogin.png" width={100} height={100} className='items-center justify-center' />
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-blue-400 border-4 border-blue-950 rounded-lg font-semibold font-mono text-lg hover:bg-blue-900 hover:border-blue-400 hover:text-white' onClick={handleDoctorLogin}>Login</button>
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-red-400 border-4 border-red-950 rounded-lg font-semibold font-mono text-lg hover:bg-red-900 hover:border-red-400 hover:text-white' onClick={handleDoctorSignup}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage