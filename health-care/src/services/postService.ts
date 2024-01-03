import axios from "axios";

interface PostInterface{
    content: string,
    images: string,
    upload_date: Date,
    likes: number,
    userId: string
}

export async function createPost(postData: PostInterface)
{
    const result = await axios.post("/api/posts", postData).then((response)=>response.data);
    return result;
}