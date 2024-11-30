import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // devTools: false
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
