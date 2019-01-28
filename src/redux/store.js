import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducers";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import movies from "./reducersx/movies";
import details from "./reducersx/details";
import ordered from "./reducersx/ordered";
import search from "./reducersx/search";

const rootReducer = combineReducers({
  movies,
  details,
  ordered,
  search
});

const pleaseManualDisableItOnProduction =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    pleaseManualDisableItOnProduction
  )
);
