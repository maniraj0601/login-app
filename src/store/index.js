import { createStore, combineReducers } from "redux";
import rootReducer from "./reducers";

export const store = createStore(
  combineReducers({
    rootReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
