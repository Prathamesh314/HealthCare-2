import mongoose, { Schema } from "mongoose";

const medicineSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
    suggested_by:{
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Types.ObjectId,
        required: true,
    }
});

export const Medicine = mongoose.models.medincine || mongoose.model("medicines", medicineSchema);