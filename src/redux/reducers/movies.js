import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actionTypes";

import dummy from "./dummy";

const initialState = {
  movies: dummy,
  loading: false,
  error: null
};

// const fetchMovies = () => {
//   console.log("fetch movies");
//   return dispatch => {
//     // dispatch(fetchProductsBegin());
//     return fetch(API)
//       .then(response => {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response;
//       })
//       .then(response => response.json())
//       .then(data => data.results)
//       .catch(error => console.log(error));
//   };
// };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: []
      };
    default:
      return state;
  }
}
