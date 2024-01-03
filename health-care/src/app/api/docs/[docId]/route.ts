import { Doctor } from "@/entity/Doctor";
import { connect_db } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";
connect_db()
export async function GET({ params }: { params: { docId: string } })
{
    const {docId} = params;
    console.log(params);
    try {
        
        if(!docId){
            return NextResponse.json({
                message: `Doctor not found with id: ${docId}`
            });
        }

        const doctor = await Doctor.findById({
            _id: docId
        });

        return NextResponse.json(doctor);


    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}

export async function DELETE({params}: {params: any})
{
    try {
        const {docId} = params;

        await Doctor.findByIdAndDelete(docId);

        return NextResponse.json({
            message: "Doctor removed successfully",
        });

    } catch (error) {
        console.log("Some error occured...");
        console.log(error);
    }
}


export async function PUT(req: NextRequest, {params}:{params: any})
{
    try {
        const {docId} = params;
        const doctor = await Doctor.findById(docId);
        const {specialization, address } = await req.json();
        doctor.specialization = specialization;
        doctor.address = address;
        await doctor.save();
        return NextResponse.json({
            message:"Doctor saved successfully"
        });
    } catch (error) {
        console.log("Some error occured")
        console.log(error);
    }
}