const axios = require('axios');


const options = (query: string) => ({
  method: 'GET',
  url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
  params: {
    query: query,
    geo: 'US',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '5e609e788emsh00a312c9b84c741p1bc1edjsn6414bf9a6266',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
})

export async function FetchVideos(query: string){
  try {
    const response = await axios.request(options(query))
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

