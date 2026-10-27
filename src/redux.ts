import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { AnswerSearch } from "./types";
import { searchCity } from "./API/SearchCity";

const initialState: AnswerSearch= {
    data: [],
    loading: false,
    error: false
}

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
                state.error= false
                state.loading= false
            }
        )
        builder.addCase(searchFetch.pending, (state)=>{
            state.loading= true
            state.error= false
        })
        builder.addCase(searchFetch.rejected, (state)=>{
            state.error= true
            state.loading= false
        })
    },
    reducers: {
    }
})

export default citySlices.reducer