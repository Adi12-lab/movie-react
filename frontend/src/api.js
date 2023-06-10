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
export const getMovieImages = async (id) => {
    const images = await axios.get(`${baseUrl}/movie/${id}/images?api_key=${apiKey}`)
    return images.data.backdrops
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
export const getSeason = async(id, number) => {
    const tv = await axios.get(`${baseUrl}/tv/${id}/season/${number}?api_key=${apiKey}`)
    return tv.data
}

// Search

export const searchMulti = async (query) => {
    const results = await axios.get(`${baseUrl}/search/multi?query=${query}&api_key=${apiKey}`)
    return results.data.results.filter((item) => {
        return item.media_type !== 'person' && item.poster_path !== null
    })
}


//local api

export const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await axios.post('http://localhost:3002/token', {}, {
          headers: {
            'Authorization': `Bearer ${refreshToken}`,
          },
        });
        const newAccessToken = response.data.accessToken;
        console.log(newAccessToken)
        localStorage.setItem('accessToken', newAccessToken);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error('Error refreshing access token:', err.response.data);
      }
    }
    return Promise.reject(error);
  }
);


