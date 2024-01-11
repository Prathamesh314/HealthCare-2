"use client"
import React, { useState } from 'react'

interface AppointmentPage{
  topic: string,
  appointment_date: Date,
  userId: string,
  docName: string
};

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    topic: '',
    appointment_date: '',
    userId: '',
    docName: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex items-center justify-center w-full border-2 border-black'>
      <form onSubmit={handleSubmit} className='w-[500px] border-2 border-black p-3 h-[400px] gap-y-8'>
        <label className='flex flex-col justify-center items-center gap-y-3'>
          <div className='font-mono font-semibold text-xl'>
            Topic:
          </div>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className='border-2 border-black rounded-xl p-2 w-80'
            placeholder='Enter topic...'
            required
          />
        </label>
        <br />

        <label className='flex flex-col justify-center items-center gap-y-3'>
          <div className='font-mono font-semibold text-xl'>
            Appointment Date:
          </div>
          <input
            type="date"
            name="appointment_date"
            value={formData.appointment_date}
            onChange={handleChange}
            className='border-2 border-black rounded-xl w-44 p-2'
            required
          />
        </label>
        <br />

        <label className='flex flex-col justify-center items-center gap-y-3'>
          <div className='font-mono font-semibold text-xl'>
            Doctor Name:
          </div>
          <input
            type="text"
            name="docName"
            value={formData.docName}
            onChange={handleChange}
            className='border-2 border-black p-2 rounded-xl'
            placeholder='Enter doctor name...'
            required
          />
        </label>
        <br />
        <div className='flex justify-center items-center w-full'>
          <button type="submit" className='bg-blue-300 border-blue-800 border w-[80px] h-[40px] rounded-3xl'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentPage