"use client"
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { ListOfCategories } from '@/helper/ListOfHealthCategories'
import { Button } from './ui/button'
import Image from 'next/image'
import { FetchVideos } from '@/utils/FetchVideos'
import Loader from './Loader'

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

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Exercise");
  const [searchTerm, setSearchTerm] = useState("")
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
      <div className='w-[15%] border bg-gray-100 rounded-3xl'>
        <div className='flex flex-col gap-y-4 p-2'>
          {ListOfCategories.map((cats, index) => (
            <div key={index} className='flex flex-col'>
              <div className='flex flex-col gap-y-4'>
                <Button className={`flex gap-x-4 p-2 w-[200px] hover:bg-purple-600 hover:text-white border-2 border-black rounded-3xl ${selectedCategory == cats.name ? 'bg-purple-500 text-white' : 'bg-white text-black'}`} onClick={() => { handleChange(cats.name) }}>
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
      <div className='flex flex-col w-[75%] h-[600px]'>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Search here...'
            className='p-2 w-72 rounded-xl text-md font-serif border-2 border-gray-700'
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <Button className='bg-white hover:bg-white' onClick={() => handleChange(searchTerm)}>
            <Image src="/images/search.png" alt="search" width={20} height={20} className='hover:w-3 hover:h-3' />
          </Button>
        </div>
        <div className=' gap-y-2 overflow-y-auto'>
          {videosData == undefined ? <Loader /> : <VideoCard videos={videosData} />}
        </div>
      </div>
    </div>
  )
}

export default Videos