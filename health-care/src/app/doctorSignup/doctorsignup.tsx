"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { DoctorSignup } from '@/services/doctorService';
import {toast} from "react-toastify"

const specialties = [
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "Hematology",
  "Infectious Disease",
  "Internal Medicine",
  "Nephrology",
  "Neurology",
  "Obstetrics and Gynecology",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Otolaryngology (ENT)",
  "Pediatrics",
  "Pulmonology",
  "Psychiatry",
  "Rheumatology",
  "Surgery",
  "Urology",
];

interface DoctorInterface{
    fname: string,
    lname: string,
    email: string,
    password: string,
    specialization: string,
    yearsOfExperience: number,
    address: string,
}

const Doctorsignup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    specialization: '',
    yearsOfExperience: 0,
    address: '',
  });

  const doctor: DoctorInterface = {
    fname: formData.firstname,
    lname: formData.lastname,
    email: formData.email,
    password: formData.password,
    specialization: formData.specialization,
    yearsOfExperience: formData.yearsOfExperience,
    address: formData.address,
  };

  const router = useRouter();

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSpecializationChange = (e:any) => {
    setFormData({ ...formData, specialization: e.target.value });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const result = await DoctorSignup(doctor);
    if(!result.status)
    {
        toast.error("Wrong credentials!!")
    }else{
        router.push("/profile/doctor")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-[500px] h-[600px] overflow-y-auto scrollbar-hide">
        <h2 className="text-2xl font-semibold mb-6">Sign Up as Doctor</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">First Name</label>
            <input type="text" id="firstname" name="firstname" className="mt-1 p-2 w-full border rounded-md" onChange={handleInputChange} required />
          </div>

          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input type="text" id="lastname" name="lastname" className="mt-1 p-2 w-full border rounded-md" onChange={handleInputChange} required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" onChange={handleInputChange} required />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" onChange={handleInputChange} required />
          </div>

          <div className="mb-4">
            <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">Specialization</label>
            <select id="specialization" name="specialization" className="mt-1 p-2 w-full border rounded-md" onChange={handleSpecializationChange} required>
              <option value="" disabled>Select a Specialization</option>
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>{specialty}</option>
              ))}
              <option value="AddSpecialization">Add Specialization</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-600">Years of Experience</label>
            <input type="number" id="yearsOfExperience" name="yearsOfExperience" className="mt-1 p-2 w-full border rounded-md" onChange={handleInputChange} required />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
            <textarea id="address" name="address" className="mt-1 p-2 w-full border rounded-md" rows="3" onChange={handleInputChange} required></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Doctorsignup;
