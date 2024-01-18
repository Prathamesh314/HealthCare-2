import React from 'react'
import VideoNew from './NewVideo'

const page = ({params}: {params: any}) => {
  return (
    <div className='w-full h-screen backdrop-blur-md bg-cover' style={{ backgroundImage: 'url("/images/backgroundvideos.jpg")' }}>
        <VideoNew params={params}/>
    </div>
  )
}

export default page