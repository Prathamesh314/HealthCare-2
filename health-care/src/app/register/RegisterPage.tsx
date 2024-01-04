"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const RegisterPage = () => {

    const [login, setLogin] = useState();
    const [isUser, setIsUser] = useState(false);

    const router = useRouter();

    const handleUserLoginSignup = () => {
        router.push(`/api/login?isUer=${isUser}`)
    };

    const handleDoctorLoginSignup = () => {
        router.push(`/api/login?isUser=${isUser}`);
    }


    return (
        <div className='bg-gradient-to-r from-blue-400 via-green-400 to-yellow-300 p-6 mx-auto rounded-xl shadow-md h-screen backdrop-blur-lg'>
            <div className='flex items-center justify-center w-full gap-x-48 p-3'>
                <div className='gap-y-10 flex flex-col border-4 w-[300px] h-[500px] p-3 items-center justify-center rounded-lg mt-12 bg-cyan-600 hover:border-yellow-400 hover:shadow-2xl'>
                    <div>
                        <h1 className='font-mono font-semibold text-xl text-gray-800'>
                            Signup / Login as USER
                        </h1>
                    </div>
                    <div>
                        <Image alt="login user icon" src="/images/loginuser.png" width={120} height={120} className='items-center justify-center' />
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-yellow-400 border-4 border-yellow-900 rounded-lg font-semibold font-mono text-lg hover:bg-yellow-900 hover:border-yellow-400 hover:text-white'>Login</button>
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-red-400 border-4 border-red-950 rounded-lg font-semibold font-mono text-lg hover:bg-red-900 hover:border-red-400 hover:text-white'>Sign Up</button>
                    </div>
                </div>

                <div className='gap-y-10 flex flex-col border-4 w-[300px] h-[500px] p-3 items-center justify-center rounded-lg mt-12 bg-purple-600 hover:border-yellow-400 hover:shadow-2xl'>
                    <div>
                        <h1 className='font-mono font-semibold text-xl text-gray-800'>
                            Signup / Login as DOCTOR
                        </h1>
                    </div>
                    <div>
                        <Image alt="login user icon" src="/images/doctorlogin.png" width={100} height={100} className='items-center justify-center' />
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-blue-400 border-4 border-blue-950 rounded-lg font-semibold font-mono text-lg hover:bg-blue-900 hover:border-blue-400 hover:text-white'>Login</button>
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-red-400 border-4 border-red-950 rounded-lg font-semibold font-mono text-lg hover:bg-red-900 hover:border-red-400 hover:text-white'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage