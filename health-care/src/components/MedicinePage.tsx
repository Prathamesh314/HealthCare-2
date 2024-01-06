"use client"
import React, { useEffect, useState } from 'react'
import { createMedicine, getAllMedicines } from '@/services/medicineService';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import Image from 'next/image';


interface MedicineInterface {
  name: string,
  description: string,
  image: string,
  suggested_by: string,
  userId: string,
}

const MedicinePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    suggested_by: '',
    userId: '6593d49110889af311a63f60'
  });

  const [medicines, setMedicines] = useState<MedicineInterface[] | undefined>();

  const getMedicines = async () => {
    const medicines = await getAllMedicines();
    setMedicines(medicines?.medicines);
    console.log(medicines)
  }

  useEffect(() => {
    getMedicines();
  }, []);

  // console.log(medicines)

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData)
    createMedicine(formData)
  };
  return (
    <div className='flex justify-center items-center gap-x-32 w-full m-5'>
      
      <div className='flex flex-col justify-center items-center gap-y-10 w-full'>
        <div>
          <h1 className='font-serif font-bold text-3xl'>Your Medicines</h1>
        </div>
        <div className=' grid grid-cols-4 gap-y-2 gap-x-5 p-4'>
          {medicines?.map((item, index) => (
            <Card key={index} className="w-[300px] h-[350px]  border-2  justify-center items-center overflow-scroll scrollbar-hide">
              <CardHeader>
                <CardTitle>Medicine {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-6">
                    <h1 className='font-mono text-xl '>Name: {item.name}</h1>
                    <CardDescription className='font-mono text-xl font-semibold'>{item.description}</CardDescription>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <Image alt={item.name} src={item.image} width={80} height={80} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className='text-xl font-mono'>Suggested By: {item.suggested_by}</h1>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div>
          <Drawer>
            <DrawerTrigger asChild>
              <Button className='w-[200px] h-[50px] font-mono text-xl bg-white text-black hover:bg-white
              '>Add Medicines</Button>
            </DrawerTrigger>
            <DrawerContent className='bg-gray-300 h-[650px]'>
              <div className='mx-auto w-full max-w-sm'>
                <div className=' flex flex-col  gap-y-4 border-2 border-black w-full justify-center items-center p-3 h-50  rounded-3xl bg-blue-400 text-black mt-5'>
                  <div>
                    <h1 className='text-xl font-serif font-semibold underline italic text-black'>Add Medicines Here...</h1>
                  </div>
                  <div >
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-2 justify-center items-center p-3'>
                      {/* Name */}
                      <label htmlFor="name" className='font-mono font-semibold'>Name of Medicine:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Eg. Paracetamol'
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            name: e.target.value
                          });
                        }}
                        required
                        className='border-2 border-black p-1 rounded-md'
                      />

                      {/* Description */}
                      <label htmlFor="description" className='mt-3 font-mono font-semibold'>Description:</label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder='Eg. 1 pill/day'
                        value={formData.description}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            description: e.target.value
                          });
                        }}
                        rows="4"
                        required
                        className='border-2 border-black p-1 rounded-md'
                      ></textarea>

                      {/* Image */}
                      <label htmlFor="image" className='mt-3 font-mono font-semibold'>Image:</label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            image: e.target.value
                          });
                        }}
                        className='pl-20'
                      />

                      {/* Suggested By */}
                      <label htmlFor="suggested_by" className='mt-3 font-mono font-semibold'>Suggested By:</label>
                      <input
                        type="text"
                        id="suggested_by"
                        name="suggested_by"
                        placeholder='Doctor Name'
                        value={formData.suggested_by}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            suggested_by: e.target.value
                          });
                        }}
                        required
                        className='border-2 border-black p-1 rounded-md'
                      />
                      
                    </form>
                  </div>
                <DrawerFooter>
                  <div className='flex justify-between items-center w-full gap-x-16'>
                    <Button className='w-[100px] font-mono' onClick={handleSubmit}>Submit</Button>
                    <DrawerClose asChild>
                      <Button className='w-[100px] font-mono'>Close</Button>
                    </DrawerClose>
                  </div>
                </DrawerFooter>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default MedicinePage