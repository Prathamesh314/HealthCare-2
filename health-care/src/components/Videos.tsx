"use client"
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { ListOfCategories } from '@/helper/ListOfHealthCategories'
import { Button } from './ui/button'
import Image from 'next/image'
import { FetchVideos } from '@/utils/FetchVideos'
import Loader from './Loader'

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

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Exercise");
  const [videosData, setVideosData] = useState<Videos[]>([])

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const results = await FetchVideos(selectedCategory);
                console.log(results);
                setVideosData(results.data)
            } catch (error) {
                console.error(error);
            }
        }
    
        fetchVideos();
    }, [selectedCategory]);

    const handleChange = (name: any) => {
      setSelectedCategory(name);
    };
    
  return (
    <div className='flex w-full justify-center items-center gap-x-4'>
      <div className='w-[18%] border bg-gray-100 rounded-3xl'>
      <div className='flex flex-col gap-y-4 p-2'>
        {ListOfCategories.map((cats, index)=>(
            <div key={index} className='flex flex-col'>
                <div className='flex flex-col gap-y-4'>
                    <Button className={`flex gap-x-10 p-2 w-[250px] border-2 border-black rounded-3xl ${selectedCategory == cats.name? 'bg-purple-500 text-white': 'bg-white text-black'}`} onClick={()=>{handleChange(cats.name)}}>
                        <div>
                            <Image src={cats.icon} alt={cats.icon} width={30} height={30} />
                        </div>
                        <div>
                            {cats.name}
                        </div>
                    </Button>
                </div>
            </div>
        ))}
    </div>
      </div>
      <div className='w-[75%] border-2 border-black'>
        {videosData == undefined? <Loader /> : <VideoCard videos={videosData}/>}
      </div>
    </div>
  )
}

export default Videos