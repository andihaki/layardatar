import { FETCH_MOVIES } from "./actionTypes";

export const fetchMovies = movies => ({
  type: FETCH_MOVIES,
  payload: {
    movies
  }
});
