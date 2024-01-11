import { User } from "@/entity/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Doctor } from "@/entity/Doctor";
import { Medicine } from "@/entity/Medicine";
import { Post } from "@/entity/Post";

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

        const post1 = new Post({
            title: "Post1",
            content: "Content1",
            images: "/POSTS/post1.jpg",
            likes: 20,
            userId: "6593d49110889af311a63f60",
        })
        const post2 = new Post({
            title: "Post2",
            content: "Content2",
            images: "/POSTS/post2.jpeg",
            likes: 10,
            userId: "6593d49110889af311a63f60",
        })
        const post3 = new Post({
            title: "Post3",
            content: "Content3",
            images: "/POSTS/post3.jpeg",
            likes: 30,
            userId: "6593d49110889af311a63f60",
        })
        const post4 = new Post({
            title: "Post4",
            content: "Content4",
            images: "/POSTS/post4.jpg",
            likes: 40,
            userId: "6593d49110889af311a63f60",
        })

        // medicine1.save()
        // medicine2.save()
        // medicine3.save()
        // medicine4.save()
        // post1.save()
        // post2.save()
        // post3.save()
        // post4.save()


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
