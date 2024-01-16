import axios from "axios";

interface AppointmentInterface{
    topic: string,
    appointment_date: string,
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

export async function getAllAppointments()
{
    const result = await axios.get("/api/appointments").then((response)=>response.data)
    return result;
}