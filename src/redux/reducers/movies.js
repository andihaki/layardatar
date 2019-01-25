import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_PAGE,
  MOVIE_DETAIL,
  FETCH_MOVIE_CREDITS_BEGIN,
  FETCH_MOVIE_CREDITS_SUCCESS,
  FETCH_MOVIE_CREDITS_FAILURE
} from "../actionTypes";

// import dummy from "./dummy";

const initialState = {
  movies: [],
  loading: false,
  error: null,
  pages: [],
  currentPage: 0,
  limitPage: 2,
  movieId: "",
  movieDetail: []
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
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
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
      // console.log("change page: " + action.payload.activePage);
      return {
        ...state,
        currentPage: action.payload.activePage,
        movieId: ""
      };
    case MOVIE_DETAIL:
      // console.log("movie detail" + action.payload.id);
      return {
        ...state,
        movieId: action.payload.id
      };
    case FETCH_MOVIE_CREDITS_BEGIN:
      return state;
    case FETCH_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        movieDetail: action.payload.movieDetail
      };
    case FETCH_MOVIE_CREDITS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        movieDetail: []
      };
    default:
      return state;
  }
}
