"use client"
import React from 'react'
import YouTube from 'react-youtube';

const VideoNew = ({params}:{params:any}) => {
    const videid = params.videoId;
    console.log(videid);

    const options = {
      height: '490',
      width: '840'
    }
    
  return (
    <div className='absolute top-36 w-full justify-center items-center flex'>
      <YouTube
        videoId={videid}
        opts={options}
    />
    </div>
  )
}

export default VideoNew