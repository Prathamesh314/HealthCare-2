"use client"
import React from 'react'
import YouTube from 'react-youtube';

const VideoNew = ({params}:{params:any}) => {
    const videid = params.videoId;
    console.log(videid);
    
  return (
    <div className='w-full justify-center items-center flex'>
      <YouTube
        videoId={videid}
    />
    </div>
  )
}

export default VideoNew