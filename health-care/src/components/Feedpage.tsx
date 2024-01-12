"use client"
import React, { useEffect, useState } from 'react'

import Image from 'next/image';
import { getPosts } from '@/services/postService';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


import Loader from './Loader';

interface UserInterface {
    fname: string,
    lname: string,
    profile_photo: string,
    appointments: number,
}

interface PostInterface {
    title: string,
    content: string,
    images: string,
    likes: number,
    userId: string,
}

const Feedpage = () => {

    const [userDetails, setUserDetails] = useState<UserInterface>({
        fname: "Prathamesh",
        lname: "Kurve",
        profile_photo: "/images/sampleprofile.jpeg",
        appointments: 10
    });

    const [postData, setPostData] = useState<PostInterface[]>([]);

    const getAllPosts = async () => {
        const result = await getPosts();
        setPostData(result)
        console.log(postData)
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <div className='flex w-full justify-between items-center'>
            <div className='flex flex-col justify-center items-center w-[26%] h-[400px] border-2 border-black bg-black gap-y-6 rounded-3xl'>
                <div>
                    <Image src={userDetails.profile_photo} alt="Profile" width={60} height={40} className='w-40 h-40 border-2 rounded-full border-gray-300' />
                </div>.
                <div className='flex justify-center items-center w-full gap-x-5'>
                    <div className='font-mono text-3xl text-purple-500 font-bold'>
                        {userDetails.fname}
                    </div>
                    <div className='font-mono text-3xl text-white font-bold'>
                        {userDetails.lname}
                    </div>
                </div>
                <div>
                    <h1 className='font-mono font-bold text-xl text-white'>Appointments: {userDetails.appointments}</h1>
                </div>
            </div>
            <div className='flex flex-col items-center w-[60%] h-[500px] p-4 scrollbar-hide mr-10'>
                <Carousel className="w-[600px] h-[500px]">
                    <CarouselContent>
                        {postData.map((post, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        {/* Assuming you have a CardContent component */}
                                        <CardContent className="flex h-[500px] w-[600px] rounded-md bg-gray-100 aspect-square items-center justify-center p-6">
                                            {/* Render the content from your postData */}
                                            <div>
                                                <h2 className="text-xl font-semibold font-mono">{post.title}</h2>
                                                <p className='text-lg font-mono text-gray-600'>{post.content}</p>
                                                <Image src={post.images} alt="Post" className="max-w-full rounded-3xl" width={400} height={250} />
                                                <p className=' mt-2 flex justify-start items-center gap-x-1'>
                                                    <div>
                                                        <Image src="/POSTS/like.png" alt="like" width={40} height={40} /> 
                                                    </div>
                                                    <div>
                                                        <h1 className='text-xl'>{post.likes}</h1>
                                                    </div>
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </div>
    )
}

export default Feedpage