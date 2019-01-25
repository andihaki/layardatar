import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_PAGE,
  MOVIE_DETAIL,
  FETCH_MOVIE_CREDITS_BEGIN,
  FETCH_MOVIE_CREDITS_SUCCESS,
  FETCH_MOVIE_CREDITS_FAILURE
} from "./actionTypes";

import { API, API_CREDIT } from "../constants";

// home page
export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export const changePage = activePage => ({
  type: CHANGE_PAGE,
  payload: { activePage }
});

// movie detail
export const movieDetail = id => ({
  type: MOVIE_DETAIL,
  payload: { id }
});

export const fetchMovieCreditBegin = () => ({
  type: FETCH_MOVIE_CREDITS_BEGIN
});

export const fetchMovieCreditSuccess = movieDetail => ({
  type: FETCH_MOVIE_CREDITS_SUCCESS,
  payload: { movieDetail }
});

export const fetchMovieCreditFailure = error => ({
  type: FETCH_MOVIE_CREDITS_FAILURE,
  payload: { error }
});

// async
export const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesBegin());
    return fetch(API)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        data.results = data.results.map((movie, index) => {
          const slug = `${movie.id}-${movie.title
            .replace(/\s+/g, "-")
            .toLowerCase()}`;
          return {
            ...movie,
            slug,
            index
          };
        });
        dispatch(fetchMoviesSuccess(data.results));
        console.log(data.results);
        return data.results;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
};

export const fetchMovieCredit = movieId => {
  return dispatch => {
    dispatch(fetchMovieCreditBegin());

    return fetch(API_CREDIT.replace("credit_id", movieId))
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.cast);
        dispatch(fetchMovieCreditSuccess(data.cast));

        return data.cast;
      })
      .catch(error => dispatch(fetchMovieCreditFailure(error)));
  };
};
