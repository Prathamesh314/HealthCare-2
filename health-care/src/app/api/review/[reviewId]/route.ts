import { Review } from "@/entity/Review";
import { NextResponse } from "next/server";

export async function GET({params}: {params: any})
{
    try {
        const {reviewId} = params;
        const review = Review.findById({
            _id: reviewId
        });
        
        if(review === undefined)
        {
            return NextResponse.json({
                message:"Review not found!!"
            })
        }

        return NextResponse.json(review);

    } catch (error) {
        console.log("Some error occurred...");
        console.log(error);
    }
}