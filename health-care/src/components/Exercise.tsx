"use client"
import { body_parts } from '@/helper/ListOfBodyParts'
import Image from 'next/image'
import React, { useState } from 'react'

const Exercise = () => {
  const [BodyPart, setBodyPart] = useState<string>("Back");
  
  const handleOnClick = (items: any) =>{
    setBodyPart(items.name);
  }

  return (
    <div className='flex justify-start items-center w-full gap-x-10'>
      <div className='flex flex-col justify-center items-center border-4 font-mono font-semibold text-xl ml-10 gap-y-6 mt-10 h-[600px] p-4 rounded-3xl bg-gray-100'>
        {body_parts.map((parts, index)=>(
          <div key={index} className='flex justify-center itemscen gap-x-8 cursor-pointer' onClick={() => handleOnClick(parts)} >
            <div>
              <Image alt={parts.name} src={parts.icon} width={30} height={30} />
            </div>
            <div className={`${BodyPart == parts.name?'bg-purple-400 pl-2 pr-2 border-purple-950 border-2 rounded-2xl shadow-lg':''}`}>
              {parts.name}
            </div>
          </div>
        ))}
      </div>
      <div className='border-4'>
        Gifs...
      </div>
    </div>
  )
}

export default Exercise