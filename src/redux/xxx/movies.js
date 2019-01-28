import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_PAGE
} from "../actionTypes";

import createSlug from "../../utils/createSlug";

const initialState = {
  movies: [],
  loading: false,
  error: null,
  pages: [],
  currentPage: 0,
  limitPage: 4,
  movieId: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_MOVIES_SUCCESS:
      const pages = Array(
        Math.ceil(action.payload.movies.length / state.limitPage)
      )
        .fill()
        .map((_, i) => i + 1);
      const movies = action.payload.movies.map((movie, index) => {
        const slug = createSlug(movie.id)(movie.title);
        let price = 3500;
        const rating = movie.vote_average;

        if (rating > 3 && rating <= 6) {
          price = 8250;
        }
        if (rating > 6 && rating <= 8) {
          price = 16350;
        }
        if (rating > 8 && rating <= 10) {
          price = 21250;
        }

        return {
          ...movie,
          slug,
          index,
          price
        };
      });

      return {
        ...state,
        loading: false,
        movies,
        pages,
        currentPage: 1
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: []
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload.activePage,
        movieId: ""
      };
    default:
      return state;
  }
}
