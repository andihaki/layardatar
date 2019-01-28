import {
  FETCH_SEARCH_BEGIN,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE
} from "../actionTypes";

import createSlug from "../../utils/createSlug";

const initialState = {
  loading: false,
  error: null,
  search: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SEARCH_SUCCESS:
      const search = action.payload.search.map((movie, index) => {
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
        search,
        currentPage: 1
      };
    case FETCH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        search: []
      };
    default:
      return state;
  }
}
