import { Medicine } from "@/entity/Medicine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest)
{
    try {
        const {name, description,image,suggested_by, userId} = await req.json();
        const medicine = new Medicine({
            name,
            description,
            image,
            suggested_by,
            userId
        });

        medicine.save();

        return NextResponse.json({
            message: "Medicine added successfully",
            medicine: medicine,
        });

    } catch (error) {
        console.log("Some error occurred..");
        console.log(error);
    }
}

export async function GET() {
    try {
        const medicines = await Medicine.find().maxTimeMS(20000);
        return NextResponse.json({
            medicines
        });
    } catch (error) {
        console.log("Some error occured...");
        console.log(error);
    }
}