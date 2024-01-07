import { configureStore } from "@reduxjs/toolkit";
import historySlices from "./historySlices";

export const store=configureStore({
    reducer:{
        historySlices
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch