import axios from "axios";

interface UserInterface{
    fname: string,
    lname: string,
    email: string,
    password: string,
    profile_photo: string
};

interface LoginData{
    email: string,
    password: string,
    role: string,
}

export async function UserSignup(user: UserInterface)
{
    const result = (await axios.post("/api/users/", user).then((response)=>response.data));
    return result;
}

