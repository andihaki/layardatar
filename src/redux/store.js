import { createStore } from "redux";
import rootReducer from "./reducers";

const pleaseManualDisableItOnProduction =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, pleaseManualDisableItOnProduction);
