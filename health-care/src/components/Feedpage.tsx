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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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
            <div className='flex flex-col items-center gap-y-6 overflow-y-auto w-[60%] h-[500px] p-4 scrollbar-hide mr-10'>
                {postData.map((posts, idx) => (
                    <Card key={idx} className='w-[300px] border-1 border-black'>
                        <CardHeader>
                            <CardTitle>{posts.title}</CardTitle>
                            <CardDescription>{posts.content}</CardDescription>
                        </CardHeader>
                        <div className="flex justify-center">
                            <Image src={posts.images} alt="posts" width={500} height={500} />
                        </div>
                    </Card>
                ))}
            </div>

        </div>
    )
}

export default Feedpage