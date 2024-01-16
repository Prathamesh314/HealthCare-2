"use client"
import React, { useEffect, useState } from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import { createAppointment, getAllAppointments } from '@/services/appointmentService'

interface AppointmentPage {
  topic: string,
  appointment_date: string,
  userId: string,
  docName: string
};

const AppointmentPage = () => {
  const [formData, setFormData] = useState<AppointmentPage>({
    topic: '',
    appointment_date: new Date().toISOString(),
    userId: '',
    docName: '',
  });

  const [appointmenData, setAppointmenData] = useState<AppointmentPage[]>([])

  useEffect(() => {
    const getApps = async () => {
      const resuls = await getAllAppointments()
      console.log(resuls)
      setAppointmenData(resuls)
    }

    getApps()
  }, [])


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    await createAppointment(formData);
  };

  return (
    <div className='flex flex-col w-full justify-center items-center gap-y-5'>
      <div className='h-[500px] w-[80%] flex justify-center items-center'>
        <table className="min-w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-r">Appointment Date</th>
              <th className="py-2 px-4 border-b border-r">Topic</th>
              <th className="py-2 px-4 border-b">Doctor Name</th>
            </tr>
          </thead>
          <tbody>
            {appointmenData.map((appointment, index) => (
              <tr key={appointment.index} className="border-b">
                <td className="py-2 px-4 border-r">{new Date(appointment.appointment_date).toLocaleString()}</td>
                <td className="py-2 px-4 border-r">{appointment.topic}</td>
                <td className="py-2 px-4">{appointment.docName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex w-full justify-center items-center'>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className='w-[200px] h-[50px] font-mono text-xl bg-white text-black hover:bg-white border border-blue-500'>Add Appointment</Button>
          </DrawerTrigger>
          <DrawerContent className='bg-white h-[650px]'>
            <div className='flex items-center justify-center w-full  mt-16'>
              <form onSubmit={handleSubmit} className='w-[420px] border-2 border-black p-3 rounded-3xl h-[400px] gap-y-8'>
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
          </DrawerContent >
        </Drawer >

      </div>
    </div>

  );
};

export default AppointmentPage