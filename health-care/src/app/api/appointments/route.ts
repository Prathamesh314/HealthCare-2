
import { Appointment } from "@/entity/Appointment";
import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "@/helper/db";

connect_db();
export async function POST(req: NextRequest)
{
    try {
        const {topic, userId, docName} = await req.json();
        const appointment = new Appointment({
            topic,
            userId,
            docName
        });

        return NextResponse.json(appointment);
    } catch (error) {
        console.log("Some error occurred..");
        console.log(error);
    }
}

export async function GET()
{
    try {
        const appointments = await Appointment.find();
        return NextResponse.json(appointments);
    } catch (error) {
        console.log("Some error occured...");
        console.log(error);
    }
}