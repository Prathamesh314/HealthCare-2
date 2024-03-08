import axios from "axios";

interface DoctorInterface{
    fname: string,
    lname: string,
    email: string,
    password: string,
    specialization: string,
    yearsOfExperience: number,
    address: string,
};

interface LoginData{
    email: string,
    password: string,
}

export async function DoctorSignup(doctor: DoctorInterface)
{
    const result = await axios.post("/api/docs", doctor)
        .then((response)=>response.data);

    return result;
}

export async function Login(loginData: LoginData)
{
    const result = await axios.post("/api/login", loginData)
        .then((response)=>response.data);
    
    return result;
}