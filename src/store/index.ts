import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import doctorsReducer from "./doctorsSlice";
import appDataReducer from "./appDataSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctors: doctorsReducer,
    appData: appDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
