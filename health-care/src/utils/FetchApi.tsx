
const axios = require('axios');

const apikey = process.env.API_KEY;

const options = (Type: string, bodyPart: string) =>(
    
  {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/${Type}/${bodyPart}`,
    headers: {
        'X-RapidAPI-Key': '5e609e788emsh00a312c9b84c741p1bc1edjsn6414bf9a6266',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
 }
);

export async function FetchFromApi(Type: string, bodypart: string)
{
    try {
        const response = await axios.request(options(Type, bodypart));
        return response
    } catch (error) {
        console.log("Error occurred")
        return error
    }
    
}