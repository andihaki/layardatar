import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  saldo: 100000,
  orders: [],
  orderedMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.BUY_MOVIE:
      const { movie } = action.payload;
      const ordered = state.orders.includes(movie.id);
      if (state.saldo < movie.price) {
        alert("saldo tidak cukup");
        return state;
      }
      const orders = !ordered ? state.orders.concat(movie.id) : state.orders;

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
