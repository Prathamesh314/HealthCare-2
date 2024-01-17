"use client"
import { useParams } from 'react-router-dom'
import React from 'react'

const VideoNew = ({params}:{params:any}) => {
    const videid = params.videoId;
    console.log(videid);
    
  return (
    <div>VideoNew</div>
  )
}

export default VideoNew