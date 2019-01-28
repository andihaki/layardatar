import { BUY_MOVIE } from "../actionTypes";

// import dummy from "./dummy";

import createSlug from "../../utils/createSlug";

const initialState = {
  loading: false,
  error: null,
  saldo: 100000,
  orders: [],
  orderedMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BUY_MOVIE:
      const { movieId } = action.payload;
      const ordered = state.orders.includes(movieId);

      // movie didapat dari home page / hasil pencarian / rekomendasi
      const movie =
        state.movies.find(temp => temp.id === movieId) ||
        state.search.find(temp => temp.id === movieId) ||
        state.details;
      if (state.saldo < movie.price) {
        alert("saldo tidak cukup");
        return state;
      }
      const orders = !ordered ? state.orders.concat(movieId) : state.orders;

      const saldo = state.saldo - movie.price;
      const orderedMovies = state.orderedMovies.concat(movie);
      return {
        ...state,
        orders,
        saldo,
        orderedMovies
      };
    default:
      return state;
  }
}
