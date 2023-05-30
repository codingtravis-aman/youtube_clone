import axios from "axios";

const BASE_URL = "https://youtube-search6.p.rapidapi.com";

const options = {
    params: {
      country: 'india',
      lang: 'hindi'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

    export const fetchDataFromApi = async (url) => {
        const {data} = await axios.get(`${BASE_URL}/${url}`,options)
        return data;
    }
