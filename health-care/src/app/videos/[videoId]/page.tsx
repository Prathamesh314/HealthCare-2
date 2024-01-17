import React from 'react'
import VideoNew from './NewVideo'

const page = ({params}: {params: any}) => {
  return (
    <div className='mt-28 p-2'>
        <VideoNew params={params}/>
    </div>
  )
}

export default page