export const API_KEY = "e20a79749b697e2ca678b87f63d1f26c";

export const API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=id`;
export const API_CAST = `https://api.themoviedb.org/3/movie/movie_id/credits?api_key=${API_KEY}`;
export const API_SIMILAR = `https://api.themoviedb.org/3/movie/movie_id/similar?api_key=${API_KEY}&language=en-US&page=1`;
export const API_RECOMMENDATION = `https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
export const API_REVIEWS = `https://api.themoviedb.org/3/movie/movie_id/reviews?api_key=${API_KEY}&language=en-US&page=1`;
export const API_DETAILS = `https://api.themoviedb.org/3/movie/movie_id?api_key=${API_KEY}&language=en-US&page=1`;
