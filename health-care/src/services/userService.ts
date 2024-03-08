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
}

export async function UserSignUp(user: UserInterface)
{
    const result = (await axios.post("/api/users/", user).then((response)=>response.data));
    return result;
}

