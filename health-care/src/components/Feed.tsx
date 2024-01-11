import React from 'react'
import { Button } from './ui/button'

const Feed = () => {
  return (
    <div className='flex w-full justify-center items-center gap-x-4'>
      <div className='border-4 w-[85%] p-2'>
        Feed
      </div>
      <div className='border-4'>
        <Button className='rounded-[50%] w-[90px] h-[80px]'>ChatBot</Button>
      </div>
    </div>
  )
}

export default Feed