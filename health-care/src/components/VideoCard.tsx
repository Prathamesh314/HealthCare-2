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

  

  return (
    <div className='flex justify-center items-center grid grid-cols-4'>
      {videos.map((vids, index) => (
        <div key={index} className='flex flex-col  gap-2'>
          <div className="video-card">
            <div className="thumbnail-container">
              <img src={vids.thumbnail[0].url} alt={vids.title} />
            </div>
            <div className="video-info">
              <h3 className="video-title">{vids.title}</h3>
              <p className="channel-name">{vids.channelTitle}</p>
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