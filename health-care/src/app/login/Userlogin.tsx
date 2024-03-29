"use client"
import { Login } from "@/services/doctorService";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { toast } from "react-toastify";


const UserLogin = () => {
    const router = useRouter();

    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
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

      try {
        const result = await Login(loginData);
        if(!result.status)
        {
            throw new Error(result.message);
        }
        router.push("/profile/user")
      } catch (error: any) {
        toast.error(error);
      }
  
    }
  
    return (
      <div className="bg-gray-300 flex items-center justify-center h-screen">
        <div className="flex justify-center items-center">
          <div className="h-[500px] w-[500px] border-2 rounded-xl mr-20 mt-20 p-4 items-center justify-center bg-white rounded-r-lg">
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
                <Link href={"/register"}>
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div> 
    )
}

export default UserLogin

