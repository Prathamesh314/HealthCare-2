import React from 'react'
import { Button } from './ui/button'



const Feed = () => {

  

  return (
    <div className='flex w-full justify-betweem items-center gap-x-4'>
      <div className='border-2 w-full ml-2'>
        Feed
      </div>
      <div>
        <Button className='w-32 h-10 bg-purple-500 border-2 border-purple-900 mr-3'>Chatbot</Button>
      </div>
    </div>
  )
}

export default Feed