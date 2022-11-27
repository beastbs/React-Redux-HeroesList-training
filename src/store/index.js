/* eslint-disable no-unused-vars */

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

import heroesReducer from "../reducers/heroes";
import filtersReducer from "../reducers/filters";

const stringMiddleware = (store) => (next) => (action) => {
  // { dispatch, getState } = (store)
  if (typeof action === "string") {
    console.warn("STATE FROM MIDDLEWARE: ", store.getState());
    return next({ type: action });
  }

  return next(action);
};

const enhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);
    const originDispatch = store.dispatch;

    console.warn("STATE FROM ENHANCER: ", store.getState());

    store.dispatch = (action) => {
      if (typeof action === "string") {
        return originDispatch({
          type: action,
        });
      }
      return originDispatch(action);
    };

    return store;
  };

const rootReducer = combineReducers({
  heroesReducer,
  filtersReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk, stringMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  // applyMiddleware(stringMiddleware, logger),

  // compose(
  //   enhancer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export default store;
