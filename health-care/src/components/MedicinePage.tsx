"use client"
import React, { useState } from 'react'

const MedicinePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
        suggested_by: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
                    <h1 className='text-xl font-serif font-semibold underline'>Add Medicines Here...</h1>
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
            <div className='border-2 border-black w-[65%] justify-center items-center p-3 mr-2'>
                View your medicines...
            </div>
        </div>
    )
}

export default MedicinePage