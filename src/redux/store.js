import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";

const pleaseManualDisableItOnProduction =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    pleaseManualDisableItOnProduction
  )
);
