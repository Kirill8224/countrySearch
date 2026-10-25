import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { AnswerSearch } from "./types";
import { searchCity } from "./API/SearchCity";

const initialState: AnswerSearch= {data: {
    data: []}}

export const searchFetch= createAsyncThunk<AnswerSearch, string>(
    'citys', 
     async (nameCity)=>{
        const answer= await searchCity(nameCity)
        return(answer)
    }
)

export const citySlices= createSlice({
    name: 'reduxSlices',
    initialState,
    extraReducers(builder) {
        builder.addCase(searchFetch.fulfilled, 
            (state, action)=>{
                state.data= action.payload.data
            }
        )
    },
    reducers: {
    }
})

export default citySlices.reducer