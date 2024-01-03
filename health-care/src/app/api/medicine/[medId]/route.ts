import { Medicine } from "@/entity/Medicine";
import { NextResponse } from "next/server";

export async function GET({params}: {params: any})
{
    try {
        const {medId} = params;
        const medicine = await Medicine.findById({
            _id: medId,
        });
        if(!medicine)
        {
            throw new Error("Medicines not found!!");
        }

        return NextResponse.json(medicine);
    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}

export async function DELETE({params}: {params: any})
{
    try {
        const {medId} = params;
        const medicine = await Medicine.findById({
            _id: medId
        });

        if(!medicine){
            throw new Error("Medicine not found!!");
        }

        await Medicine.deleteOne(medicine);
        return NextResponse.json({
            message: "Medicine deleted successsfully",
        });

    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}