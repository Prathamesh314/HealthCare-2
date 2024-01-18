"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

interface ChannelThumbnail {
  url: string,
  widht: number,
  height: number
}

interface RichThumbnail {
  url: string,
  widht: number,
  height: number
}

interface Thumbnail {
  url: string,
  widht: number,
  height: number
}

interface Videos {
  type: string,
  videoId: string,
  title: string,
  channelTitle: string,
  channelId: string,
  description: string,
  viewCount: string,
  publishedText: string,
  lengthText: string,
  thumbnail: Thumbnail[],
  richThumbnail: RichThumbnail[],
  channelThumbnail: ChannelThumbnail[]
}

const VideoCard = ({ videos }: { videos: Videos[] }) => {

  const router = useRouter();

  const handleClick = (vidId: string) =>{
    router.push(`/videos/${vidId}`)
  }
  

  return (
    <div className='flex justify-center items-center grid grid-cols-4'>
      {videos.map((vids, index) => (
        <div key={index} className='flex flex-col  gap-2 cursor-pointer w-64 h-72 gap-y-4 border-2 border-gray-600 rounded-3xl p-2 m-2' onClick={()=>handleClick(vids.videoId)}>
          <div className="video-card">
            <div className="thumbnail-container">
              <img src={vids.thumbnail[0].url} alt={vids.title} className='rounded-3xl' />
            </div>
            <div className="video-info">
              <h3 className="video-title font-sans font-semibold">{vids.title}</h3>
              <p className="channel-name font-semibold underline">{vids.channelTitle}</p>
              <div className="metadata">
                <p className="views">{vids.viewCount} views</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoCard