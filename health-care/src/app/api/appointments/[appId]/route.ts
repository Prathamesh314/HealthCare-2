import { Appointment } from "@/entity/Appointment";
import { NextResponse } from "next/server";

export async function GET({query}: {query: any})
{
    const {appId} = query;
    try {
        
        const appointment = await Appointment.findById(appId);

        return NextResponse.json(appointment);
    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}

export async function DELETE({query}: {query:any})
{
    try {
        const {appId} = query;
        await Appointment.findByIdAndDelete(appId);
        return NextResponse.json({
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}