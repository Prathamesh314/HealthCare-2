"use client"
import React, { useEffect, useState } from 'react'
import { getAllMedicines } from '@/services/medicineService';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from 'next/image';


interface MedicineInterface{
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
        image: null,
        suggested_by: '',
    });

    const [medicines, setMedicines] = useState<MedicineInterface[] | undefined >();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getMedicines = async() =>{
        const medicines = await getAllMedicines();
        setMedicines(medicines?.medicines);
        console.log(medicines)
    }

    useEffect(()=>{
        getMedicines();
    }, []);

    console.log(medicines)

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className='flex justify-center items-center gap-x-32 w-full m-5'>
            <div className=' flex flex-col  gap-y-4 border-2 border-black w-[20%] justify-center items-center p-3 h-50 rounded-tr-3xl rounded-bl-3xl bg-blue-100'>
                <div>
                    <h1 className='text-xl font-serif font-semibold underline italic' style={{color:'#C71585'}}>Add Medicines Here...</h1>
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleImageChange}
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
                            onChange={handleChange}
                            required
                            className='border-2 border-black p-1 rounded-md'
                        />

                        {/* Submit Button */}
                        <button type="submit" className='bg-purple-400 w-24 h-10 mt-5 rounded-3xl font-sans text-lg hover:bg-purple-600 hover:text-white border-2 border-purple-900'>Submit</button>
                    </form>
                </div>
            </div>
            <div className=' grid grid-cols-2 gap-y-2 w-[60%] justify-center items-center p-4 mr-2'>
                { medicines?.map((item, index)=>(
                    <Card key={index} className="w-[350px] border-2 border-gray-300">
                    <CardHeader>
                      <CardTitle>Medicine {index+1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <h1 className='font-mono text-xl '>Name: {item.name}</h1>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Image alt={item.name} src={item.image} width={100} height={100}/>
                          </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <h1 className='text-xl font-mono'>Suggested By: {item.suggested_by}</h1>
                    </CardFooter>
                  </Card>
                ))}
            </div>
        </div>
    )
}

export default MedicinePage