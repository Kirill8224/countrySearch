import type { AnswerSearch } from "./types";
import { searchCity } from "./API/SearchCity";
import { createAppSlice } from "./createAppSlice";


const initialState: AnswerSearch= {
    data: [],
    status: {
    loading: false,
    error: false,
    searched: false}
}

export const citySlices= createAppSlice({
    name: 'reduxSlices',
    initialState,
    reducers: (create)=> ({
        searchFetch: create.asyncThunk(
            async (nameCity: string)=>{
                const answer= await searchCity(nameCity)
                return answer
            }, {
                pending: (state)=> {            
                    state.status.loading= true
                    state.status.error= false
                    state.status.searched= false},
                fulfilled : (state, action)=> {
                    state.data= action.payload.data
                    state.status.error= false
                    state.status.loading= false
                    state.status.searched= true},
                rejected : (state)=> { 
                    state.status.error= true
                    state.status.loading= false
                    state.status.searched= false}
            }
        )
    })
})


export default citySlices.reducer
export const {searchFetch}= citySlices.actions


