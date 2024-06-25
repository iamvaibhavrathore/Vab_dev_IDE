import { configureStore } from "@reduxjs/toolkit";
import compilerSlices from "./slices/compilerSlices";

export const store = configureStore({
    reducer:{
        compilerSlices,
    },
})

export type RootState = ReturnType<typeof store.getState>;