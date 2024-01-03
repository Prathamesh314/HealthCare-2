import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
    topic:{
        type: String,
        required: true,
    },
    appointment_date:{
        type: Date,
        required: true,
        default: Date.now()
    },
    userID:{
        type: mongoose.Types.ObjectId,
        required: true,
    },
    docName:{
        type: String,
        required: true,
    }
});

export const Appointment = mongoose.models.appointments || mongoose.model("appointments",appointmentSchema)