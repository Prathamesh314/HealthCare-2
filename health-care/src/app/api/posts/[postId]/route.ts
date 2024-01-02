import { Post } from "@/entity/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET({params} : {params: any})
{
    const {postId} = params;
    console.log(params);
    
    try {
       
       const post = await Post.findById({
        _id: postId,
       });
       
       return NextResponse.json({
        post: post
       });
    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}

export async function DELETE({params}: {params: any})
{
    const {postId} = params;
    try {
        await Post.findByIdAndDelete(postId);
        return NextResponse.json({
            message: "Post deleted successfully"
        });
    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}

export async function PUT(req: NextRequest, {params}:{params:any})
{
    try {
        const {postId} = params;
        let post = await Post.findById({
            _id: postId,
        });
        if(!post){
            return NextResponse.json({
                message: "User not found with this id"
            });
        }
        const {title, content, images} = await req.json();
        post.title = title;
        post.content = content;
        post.images = images;
        post.upload_date = Date.now();
        post.save();
        return NextResponse.json({
            message: "Post updated successfully"
        });
    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}