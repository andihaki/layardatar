import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_PAGE,
  MOVIE_DETAIL
} from "./actionTypes";

import { API } from "../constants";

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

export const movieDetail = id => ({
  type: MOVIE_DETAIL,
  payload: { id }
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
