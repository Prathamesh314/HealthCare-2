import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navcomponents = [
  {
    name:"Home",
    link:"/"
  },
  {
    name: "Feed",
    link: "/profile/user"
  },
  {
    name:"Exercises",
    link: "/exercise"
  },
  {
    name: "Appointment",
    link: "/appointment",
  },
  {
    name:"Medicines",
    link:"/medicines",
  },
  {
    name:"Register",
    link: "/userSignup",
  },
  
]

const NavBar = () => {
  return (
    <div className='flex fixed top-0 z-10 justify-between items-center w-full h-[80px] p-3 bg-gray-200'>
      <div className='flex justify-center items-center gap-x-8'>
        <h1 className='font-semibold font-serif text-2xl'>Healthcare</h1>
        <Image alt="logo" src="/images/sitelogo.png" width={50} height={50}/>
      </div>
      <div className='flex justify-center items-center gap-x-8'>
        {navcomponents.map((item, index) => (
          <Link key={index} href={item.link} className='font-mono text-xl font-medium'>{item.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default NavBar