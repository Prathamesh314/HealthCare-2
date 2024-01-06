import { Doctor } from "@/entity/Doctor";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect_db } from "@/helper/db";

connect_db()
export async function POST(req: NextRequest)
{
    try {
        const {fname, lname, email, password, specialization, yearsOfExperience, address} = await req.json();

        const doc = new Doctor({
            fname,
            lname,
            email,
            password,
            specialization,
            yearsOfExperience,
            address
        });

        doc.password = await bcrypt.hash(doc.password, parseInt(process.env.BCRYPT_SALT ?? " "));
        const savedDoc = await doc.save();

        return NextResponse.json({
            message: "Doctor added successfully",
            doctor: savedDoc
        });

    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}

export async function GET()
{
    try {
        const dox = await Doctor.find();
        return NextResponse.json(dox);
    } catch (error) {
        console.log("Some error occurred");
        console.log(error);
    }
}