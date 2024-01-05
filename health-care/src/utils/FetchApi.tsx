const axios = require('axios');

const apikey = process.env.API_KEY;

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/',
  headers: {
    'X-RapidAPI-Key': apikey,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export async function FetchFromApi()
{
    try {
        const response = await axios.request(options);
        return response
    } catch (error) {
        console.log("Error occurred")
        return error
    }
    
}