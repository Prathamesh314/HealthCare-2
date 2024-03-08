"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const message = [
  "Add your medicine routine",
  "Add Appointment",
  "View posts related to health and diet",
  "Share your reciepie with world",
  "Ask your own diet assistant",
  "Maintain Your Health"
]

export default function Home() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % message.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [message]);

  return (
    <div className="h-screen mt-20 ">
      
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col justify-start pl-32 mt-16 gap-y-10">
          <div className="font-mono font-semibold text-xl text-purple-600">
            <h1>Take care of your body</h1>
            <h1>Its the only place you have to live in.</h1>
          </div>
          <div className="message-container justify-start w-[500px] h-[150px] text-5xl text-black font-bold">
            <div className="message-list" style={{ transform: `translateX(-${currentMessageIndex * 100}%)` }}>
              {message.map((msg, index) => (
                <div key={index} className="message">{msg}</div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="w-[500px] h-[100px] font-mono text-xl text-gray-600">
              This website is created by <span className="font-semibold">Prathamesh Kurve</span> to focus on our medical routine.
              Here are various post related to healthy diet and life,
              you can see exercises of any body part.
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-[150px] h-[50px] bg-purple-600 text-gray-100 rounded-3xl">Get in touch</button>
          </div>
        </div>
        <div>
          <Image alt="Home image" src="/images/home-image.webp" width={600} height={500} className="pr-20 rounded-[40%] mt-10" />.
        </div>
      </div>
    </div>
  )
}
