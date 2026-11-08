import { configureStore } from "@reduxjs/toolkit";
import cityRedux from "../redux";
export const store= configureStore({
    reducer: {
        citiesState: cityRedux
    }}
)
export type RootState= ReturnType<typeof store.getState>
export type AppDispath= typeof store.dispatch

