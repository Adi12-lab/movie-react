import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;


// Film
export const getMovieUpcoming = async () => {
    const movie = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    return movie.data.results
}

export const getMovieTopRated = async () => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
    return movie.data.results
}
export const getMoviePopular = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}
export const getMovieTrending = async () => {
    const movie = await axios.get(`${baseUrl}/trending/movie/week?api_key=${apiKey}`)
    return movie.data.results
}
export const getMovieDetails = async (id) => {
    const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
    return movie.data
}

// Acara Tv
export const getTvPopular = async () => {
    const tv = await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}`)
    return tv.data.results
}
export const getTvTopRated = async () => {
    const tv = await axios.get(`${baseUrl}/tv/top_rated?api_key=${apiKey}`)
    return tv.data.results
}
export const getTvAiring = async () => {
    const tv = await axios.get(`${baseUrl}/tv/airing_today?api_key=${apiKey}`)
    return tv.data.results
}
export const getTvDetails = async(id) => {
    const tv = await axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}`)
    return tv.data
}