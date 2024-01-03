"use client"
import { Login } from "@/services/doctorService";
import Error from "next/error";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { toast } from "react-toastify";

interface LoginData{
  email: string,
  password: string,
  role: string,
}

export default function Home() {

  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "user"
  });


  const handleOnSubmit = async(event: any) =>{
    event.preventDefault();
    const {email, password} = loginData;
    if(email.trim() === " " || password.trim() === " ")
    {
      toast.info("Invalid Data !!", {
        position: "top-center",
      });
      return;
    }

    const result = await Login(loginData);
    if(!result.status)
    {
      toast.error(result.message)
    }else{
      router.push("/profile/user")
    }

  }

  return (
    <div className=" h-screen">
      <div className="flex justify-center items-center">
        <div className="h-[500px] w-[600px] border-2 ml-20 mt-20 items-center justify-center rounded-l-lg ">
          <Image alt="welcome-img" src="/images/welcome-back.jpg" width={800} height={800} style={{
              width: "100%",
              height: "100%"
          }}/>
        </div>
        <div className="h-[500px] w-[400px] border-2 mr-20 mt-20 p-4 items-center justify-center bg-white rounded-r-lg">
          <h1 className="text-black text-2xl font-bold items-center justify-center m-auto w-full fonts ">Welcome to Login Page</h1>
          <form action="#!">
            <div className="mt-10 flex justify-between items-center">
              <Image alt="email logo" src="/images/email.png" width={50} height={50}/>
              <input type="email" placeholder="Enter your email..."
              className="w-full rounded-xl bg-gray-100 focus:ring-gray-400-100
              border border-gray-800 text-black p-3 ml-5"
              id="user_email"
              name="email"
              onChange={(event)=>{
                setLoginData({
                  ...loginData,
                  email: event.target.value
                })
              }}
              value={loginData.email}
              />
            </div>
            <div className="flex justify-center items-center mt-10">
              <Image alt="password logo" src="/images/password.png" width={60} height={100}
               />
               <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-gray-100 focus:ring-gray-400-100 border border-gray-800 text-black p-3 ml-3 rounded-xl"
                id="user_password"
                name="password"
                onChange={(event)=>{
                  setLoginData({
                    ...loginData,
                    password: event.target.value
                  })
                }}
                value={loginData.password}
               />
            </div>
            <div className="w-full items-center justify-center mt-12">
              <button className="w-full bg-blue-500 text-xl rounded-lg h-10 hover:bg-blue-700" onClick={handleOnSubmit}>Login</button>
            </div>
            <div className="flex justify-center gap-x-5 items-center w-full mt-10 font-sans text-lg">
              <h2>New User?</h2>
              <Link href={"/signup"}>
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>  
  )
}
