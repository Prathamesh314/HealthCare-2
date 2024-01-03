import axios from "axios";

interface Review{
    review: string,
    stars: number,
    userId: string,
    docId: string,
}

export async function createReview(review: Review)
{
    const result = await axios.post("/api/review", review)
        .then((response)=>response.data);
    
    return result;
}

