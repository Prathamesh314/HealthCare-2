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
    role: string,
}

export async function Signup(doctor: DoctorInterface)
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