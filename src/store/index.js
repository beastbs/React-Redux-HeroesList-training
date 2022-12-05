import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import heroes from "../reducers/heroesSlice";
import filters from "../reducers/filtersSlice";

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
  reducer: { heroes, filters },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware, logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
