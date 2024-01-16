import { ListOfCategories } from '@/helper/ListOfHealthCategories'
import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col gap-y-8 p-2'>
        {ListOfCategories.map((cats, index)=>(
            <div key={index} className='flex flex-col'>
                <div className='flex gap-x-10 bg-purple-300 p-2 rounded-3xl'>
                    <div>
                        <Image src={cats.icon} alt={cats.icon} width={30} height={30} />
                    </div>
                    <div>
                        {cats.name}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SideBar