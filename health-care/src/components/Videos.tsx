import React from 'react'
import VideoCard from './VideoCard'
import SideBar from './SideBar'


const Videos = () => {
    
  return (
    <div className='flex w-full justify-center items-center gap-x-4'>
      <div className='w-[18%] border bg-gray-100 rounded-3xl'>
        <SideBar/>
      </div>
      <div className='w-[75%] border-2 border-black'>
        <VideoCard/>
      </div>
    </div>
  )
}

export default Videos