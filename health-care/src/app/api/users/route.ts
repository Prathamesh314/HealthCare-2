import {User} from "@/entity/User";
import { connect_db } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connect_db();

export async function POST(req: NextRequest){
    try {
        const {fname, lname, email, password, profile_photo} = await req.json();
        const user = new User({
            fname,
            lname,
            email,
            password,
            profile_photo
        });

        user.password = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT ?? " "))

        const saveduser = await user.save();
        return NextResponse.json({
            message: "User created successfully",
            user: saveduser
        });
    } catch (error) {
        console.log("Something error occured...");
        console.log(error);
    }
}

export async function GET(){
    try {
        const users = await User.find();
        return NextResponse.json({
            all_users:  users,
        });
    } catch (error) {
        console.log("Something error occurred");
        console.log(error);
    }
}