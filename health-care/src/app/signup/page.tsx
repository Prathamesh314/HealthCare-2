import Image from 'next/image'
import React from 'react'

const SignupPage = () => {
  return (
    <div className='bg-green-300 h-screen backdrop-blur-lg'>
      <div className='flex items-center justify-center w-full gap-x-48 p-3'>
        <div className='border-2 w-[300px] h-[500px] p-3 items-center justify-center rounded-lg mt-12'>
          <div>
            <Image alt="login user icon" src="/images/loginuser.png" width={120} height={120} className='items-center justify-center' />
          </div>
        </div>
        <div className='border-2 w-[300px] h-[500px] p-3 items-center justify-center rounded-lg mt-12'>
          login as doctor...
        </div>
      </div>
    </div>
  )
}

export default SignupPage