import { configureStore } from "@reduxjs/toolkit";
import { citySlices } from "../redux";
export const state= configureStore({
    reducer: {
        citiesState: citySlices.reducer
    }}
)
export type RootState= ReturnType<typeof state.getState>
export type DispathType= typeof state.dispatch

