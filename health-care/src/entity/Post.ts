import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
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
        default: Date.now(),
        required: true,
    },
    likes:{
        type: Number
    },
    userId:{
        type: mongoose.Types.ObjectId,
        required: true,
    }
});

export const Post = mongoose.models.posts || mongoose.model("posts",postSchema)