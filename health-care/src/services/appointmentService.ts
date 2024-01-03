import axios from "axios";

interface AppointmentInterface{
    topic: string,
    appointment_date: Date,
    userId: string,
    docName: string,
}

export async function createAppointment(appointmentData: AppointmentInterface)
{
    const result = await axios
        .post("/api/appointments",appointmentData)
        .then((response)=>response.data);
    
    return result;

}