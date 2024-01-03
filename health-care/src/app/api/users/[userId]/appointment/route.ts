import { Appointment } from "@/entity/Appointment";
import { NextResponse } from "next/server";

export async function GET({params}: {params: any})
{
    try {
        const {userId} = params;
        const appointments = await Appointment.find({
            userId: userId,
        });

        return NextResponse.json({
            appointments: appointments
        });
        

    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}