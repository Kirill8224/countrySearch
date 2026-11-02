import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { AnswerSearch } from "./types";
import { searchCity } from "./API/SearchCity";
import type { AnswerResponse } from "./types";


const initialState: AnswerSearch= {
    data: [],
    status: {
    loading: false,
    error: false,
    searched: false}
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
                state.status.error= false
                state.status.loading= false
                state.status.searched= true
            }
        )
        builder.addCase(searchFetch.pending, (state)=>{
            state.status.loading= true
            state.status.error= false
            state.status.searched= false
        })
        builder.addCase(searchFetch.rejected, (state)=>{
            state.status.error= true
            state.status.loading= false
            state.status.searched= false
        })
    },
    reducers: {
    }
})

export default citySlices.reducer