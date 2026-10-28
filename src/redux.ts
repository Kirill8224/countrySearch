import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { AnswerSearch } from "./types";
import { searchCity } from "./API/SearchCity";
import type { AnswerResponse } from "./types";

const initialState: AnswerSearch= {
    data: [],
    loading: false,
    error: false,
    searched: false
}

export const searchFetch= createAsyncThunk<AnswerResponse, string>(
    'citys', 
     async (nameCity: string)=>{
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
                state.error= false
                state.loading= false
                state.searched= true
            }
        )
        builder.addCase(searchFetch.pending, (state)=>{
            state.loading= true
            state.error= false
            state.searched= false
        })
        builder.addCase(searchFetch.rejected, (state)=>{
            state.error= true
            state.loading= false
            state.searched= false
        })
    },
    reducers: {
    }
})

export default citySlices.reducer