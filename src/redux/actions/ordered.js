import { BUY_MOVIE } from "./actionTypes";

export const buyMovie = movieId => ({
  type: BUY_MOVIE,
  payload: { movieId }
});
