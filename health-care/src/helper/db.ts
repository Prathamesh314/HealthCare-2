import { User } from "@/entity/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const URI = process.env.MONGODB_URI;

export const connect_db = async() => {
    try {
        const {connection} = await mongoose.connect(URI ?? " ",{
            dbName: "health-care"
        });

        const user = new User({
            fname: "Prathamesh",
            lname: "Kurve",
            email: "kurvep18@gmail.com",
            password: "Pk1234!@#$",
            profile_photo: "useriir"
        });

        user.password = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT ?? " "))

        user.save();
    
        console.log(connection);
        console.log("Connection established...");
    } catch (error) {
        console.log("Error has occured..");
        console.log(error);
        
    }   
}
