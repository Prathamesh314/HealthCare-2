import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    review:{
        type: String,
        required: true,
    },
    stars:{
        type: Number,
        required: true,
    },

    userId:{
        type: mongoose.Types.ObjectId
    },

    docId:{
        type: mongoose.Types.ObjectId
    }
});

export const Review = mongoose.models.reviews || mongoose.model("reviews", reviewSchema);