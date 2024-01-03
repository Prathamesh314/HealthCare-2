import { User } from "@/entity/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Doctor } from "@/entity/Doctor";

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

        const doctor = new Doctor({
            fname:"doc1",
            lname:"lname",
            email:"email",
            password:"Password!@#123",
            specialization:"Cardiology",
            yearsOfExperience:2,
            address:"address"
        });



        user.password = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT ?? " "))
        doctor.password = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT ?? " "));


        user.save();
        doctor.save();
    
        console.log(connection);
        console.log("Connection established...");
    } catch (error) {
        console.log("Error has occured..");
        console.log(error);
        
    }   
}
