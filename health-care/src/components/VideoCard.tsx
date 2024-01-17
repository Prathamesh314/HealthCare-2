import React from 'react'

interface ChannelThumbnail
{
  url: string,
  widht: number,
  height: number
}

interface RichThumbnail{
  url: string,
  widht: number,
  height: number
}

interface Thumbnail{
  url: string,
  widht: number,
  height: number
}

interface Videos{
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

const VideoCard = ({videos}: {videos: Videos[]}) => {
  return (
    <div className='flex justify-center items-center grid grid-cols-4'>
      {videos.map((vids, index)=>(
        <div key={index} className='flex flex-col'>
          <div>
            {vids.title}
          </div>
          <div>
            {vids.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoCard