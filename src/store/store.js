import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userslice";
export const store = configureStore({
    reducer: {
        user: userReducer,
    }
});