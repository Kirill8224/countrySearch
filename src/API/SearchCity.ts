import axios from "axios"
import type { AnswerResponse } from "../types"
export async function searchCity(city: string){
    console.log('функция началась')
    const res= await axios.get<AnswerResponse>('/api/v1/cities',{
        params: {
            search: city
        }})
    console.log(res.data)
    return(res.data)
}

