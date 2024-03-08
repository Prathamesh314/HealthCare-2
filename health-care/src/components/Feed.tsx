"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


import Feedpage from './Feedpage'
import { useRouter } from 'next/navigation'

import { getCookie } from "cookies-next";

type Promptoutput = {
  name: string,
  message: string,
}


const Feed = () => {
  const [userInput, setUserInput] = useState('');
  const [user, setUser] = useState(null);
  let [results, setresults] = useState<Promptoutput[]>([])
  const router = useRouter()

  const handleInputChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleClear = () => {
    setresults([])
  }

  const token = getCookie("login")
  console.log(token)

  console.log(user)



  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let msg1 = { name: "User", message: userInput }
    results = [...results, msg1]
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: userInput }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(r => r.json())
      .then(r => {
        let msg2 = { name: "Prathamesh", message: r.message };
        console.log(msg2)
        setresults([...results, msg2])
      })

    setUserInput('')
  };

  const redirectToVideos = () => {
    router.push("/videos")
  }

  //console.log(results)

  return (
    <div className='flex w-full justify-betweem items-center gap-x-4'>
      <div className='w-[80%] ml-2'>
        <Feedpage />
      </div>
      <div className='absolute bottom-16 right-10'>
        {/* <Chatbot/> */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className='bg-purple-500 border-8 border-purple-800 w-24 h-24 rounded-full border-3 mr-3 text-xl font-mono font-medium'>Chatbot</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className='flex justify-center items-center w-full gap-x-5'>
              <Avatar>
                <AvatarImage src="/images/chatbot.jpeg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1>Psyk welcomes you...</h1>
            </SheetTitle>
            <SheetDescription className='w-full justify-center items-center pl-24 text-gray-800'>
              <h1>Ask your healthy doubts here...</h1>
            </SheetDescription>
            <hr className='mt-3 border-t-10 border-black' />
            <div className='flex flex-col gap-y-4 mt-1'>
              <div className='h-[530px] gap-y-4 overflow-y-auto' >
                {results?.map((result, index) => (
                  <div key={index} className={`font-md font-mono text-white gapy-3 mb-2 ${result.name === 'User' ? 'bg-purple-500 rounded-r-2xl rounded-bl-xl' : 'bg-black rounded-l-2xl rounded-br-2xl'} p-2`}>
                    {result.name} : {result.message}
                  </div>
                ))}
              </div>
              <div className='flex justify-center items-center w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full'>
                  <div className='flex'>
                    <label className='flex justify-center items-center gap-4'>
                      <div className='text-black font-mono font-semibold'>
                        Ask Here:
                      </div>
                      <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        className='h-8 p-1 text-black font-semibold border-black border-1'
                      />
                    </label>
                  </div>
                  <div className='mt-2'>
                    <div className='flex justify-center items-center gap-x-10'>
                      <div>
                        <button type="submit" className='w-20 h-10 bg-blue-400 rounded-2xl border-2 border-blue-900 text-md font-mono text-black' onClick={handleSubmit}>Submit</button>
                      </div>
                      <div>
                        <button onClick={handleClear} className='w-20 h-10 bg-red-400 rounded-2xl border-2 border-red-900 text-md font-mono text-black'>
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className='absolute right-12 bottom-56'>
        <Button className='rounded-full w-24 h-24 bg-red-700 text-white text-xl font-mono' onClick={redirectToVideos}>Videos</Button>
      </div>
    </div>
  )
}

export default Feed
