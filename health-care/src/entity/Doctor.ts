import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        validate:{
            validator: function(value: string)
            {
                // min length 8 check
                if (value.length < 8) {
                return false;
                }

                // uppercase check
                if (!/[A-Z]/.test(value)) {
                    return false;
                }

                // lowercase check
                if (!/[a-z]/.test(value)) {
                    return false;
                }
        
                // Digit check
                if (!/\d/.test(value)) {
                    return false;
                }
        
                // Special character check
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                    return false;
                }
        
                // All constraints passed
                return true;
            },
            message: "Password does not meet the required constraints",
        }
    },
    specialization:{
        type: String,
        enum: [
        "Cardiology",
        "Dermatology",
        "Endocrinology",
        "Gastroenterology",
        "Hematology",
        "Infectious Disease",
        "Internal Medicine",
        "Nephrology",
        "Neurology",
        "Obstetrics and Gynecology",
        "Oncology",
        "Ophthalmology",
        "Orthopedics",
        "Otolaryngology (ENT)",
        "Pediatrics",
        "Pulmonology",
        "Psychiatry",
        "Rheumatology",
        "Surgery",
        "Urology",
        ],
        required: true,
    },
    yearsOfExperience:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true
    }
});

export const Doctor = mongoose.models.doctors || mongoose.model("doctors", docSchema);