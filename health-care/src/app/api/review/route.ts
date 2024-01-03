import { Review } from "@/entity/Review";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse)
{
    try {
        const {review, stars, userId, docId} = await req.json();
        
        const rev = new Review({
            review,
            stars,
            userId,
            docId
        });

        const savedrev = await rev.save();
        return NextResponse.json({
            message:"Review added successfully",
            review: savedrev
        });


    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}


export async function GET()
{
    try {
        const reviews = await Review.find();
        return NextResponse.json({
            reviews: reviews
        });

    } catch (error) {
        
    }
}