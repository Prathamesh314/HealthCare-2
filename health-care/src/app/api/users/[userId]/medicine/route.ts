import { Medicine } from "@/entity/Medicine";
import { NextResponse } from "next/server";

export async function GET({params}: {params: any})
{
    try {
        const {userId} = params;
        const medicines = await Medicine.find({
            userId: userId,
        });

        return NextResponse.json({
            medicines: medicines,
        });
        
    } catch (error) {
        console.log("Some error occured...");
        console.log(error);
    }
}