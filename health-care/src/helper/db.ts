import { User } from "@/entity/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Doctor } from "@/entity/Doctor";
import { Medicine } from "@/entity/Medicine";

const URI = process.env.MONGODB_URI;

export const connect_db = async() => {
    // console.log(URI);
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
            email:"email@gmail.com",
            password:"Password!@#123",
            specialization:"Cardiology",
            yearsOfExperience:2,
            address:"address"
        });

        const medicine1 = new Medicine({
            name: "Aciclovir",
            description: "4 pills/day",
            image: "/meds/aciclovir.jpeg",
            suggested_by: "Doctor 1",
            userId: "6593d49110889af311a63f60"
        });

        const medicine2 = new Medicine({
            name: "Amoxicillin",
            description: "2 tablets/day",
            image:"/meds/amoxicilin.jpeg",
            suggested_by: "Doctor 2",
            userId: "6593d49110889af311a63f60",
        });

        const medicine3 = new Medicine({
            name: "Ciprofloxacin",
            description: "2 pills/day",
            image: "/meds/ciprofloxacin.jpeg",
            suggested_by: "Doctor 3",
            userId: "6593d49110889af311a63f60",
        });

        const medicine4 = new Medicine({
            name: "Doxycycline",
            description: "2 pills/day",
            image: "/meds/doxycycline.jpeg",
            suggested_by: "Doctor 4",
            userId: "6593d49110889af311a63f60"
        });

        // medicine1.save()
        // medicine2.save()
        // medicine3.save()
        // medicine4.save()


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
