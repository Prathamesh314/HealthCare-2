import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    content:{
        type: String,
        required: true,
    },
    images:{
        type: String,
        required: true,
    },
    upload_date:{
        type:Date,
    },
    likes:{
        type: Number
    }
});

export const Post = mongoose.models.posts || mongoose.model("users",postSchema)