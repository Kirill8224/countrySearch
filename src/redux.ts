import type { AnswerSearch } from "./types";
import { searchCity } from "./API/SearchCity";
import { createAppSlice } from "./createAppSlice";
 

const initialState: AnswerSearch= {
    data: [],
    status: {
    loading: false,
    error: false,
    searched: false,
    errorMessage: null}
}

export const citySlices= createAppSlice({
    name: 'reduxSlices',
    initialState,
    reducers: (create)=> ({
        searchFetch: create.asyncThunk.withTypes<{rejectValue: string}>()(
            async (nameCity: string, thunkApi)=>{
                try {
                const answer= await searchCity(nameCity)
                return answer
                } catch {
                    return(thunkApi.rejectWithValue('ошибка получения городов с сервера'))
                }
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
                rejected : (state, action)=> { 
                    state.status.error= true
                    state.status.loading= false
                    state.status.searched= false
                    state.status.errorMessage ?? action.payload
                }
            }
        )
    })
})

export default citySlices.reducer
export const {searchFetch}= citySlices.actions


