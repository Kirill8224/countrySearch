import axios from "axios"
export async function searchCity(city: string){
    console.log('функция началась')
    const res= await axios.get('/api/v1/cities',{
        params: {
            search: city
        }})
    return(res)
}

