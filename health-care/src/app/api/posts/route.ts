import { Post } from "@/entity/Post";
import { connect_db } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";
connect_db();
export async function POST(req: NextRequest) {
    try {
        const {title, content, images} = await req.json();
        const likes = 0;
        const post = new Post({
            title,
            content,
            images,
            likes
        });

        const savedPost = await post.save();
        return NextResponse.json({
            message:"Post created successfully",
            post: savedPost
        });

    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}

export async function GET()
{
    try {
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}