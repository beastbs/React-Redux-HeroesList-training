import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import heroesReducer from "../reducers/heroes";
import filtersReducer from "../reducers/filters";

const stringMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "string") {
      console.warn("STATE FROM MIDDLEWARE: ", getState());
      return next({ type: action });
    }

    return next(action);
  };

const store = configureStore({
  reducer: { heroesReducer, filtersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware, logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
