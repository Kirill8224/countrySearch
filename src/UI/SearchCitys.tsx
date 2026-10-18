import { useState } from "react"
import { TextField, Button } from "@mui/material"
import type { CityData } from "../types"
import { searchCity } from "../API/SearchCity"
import type { AnswerSearch } from "../types"
import { CitysGet } from "./City"

export function SearchCitys(){
    const [nameCity,  setNameCity]= useState<string>('')
    const [citys,  setCitys]= useState<CityData[]>([])
    async function getCitys(){
        const answer: AnswerSearch= await searchCity(nameCity)
        console.log(answer)
        setCitys(answer.data.data)
    }
    return(<>
    <TextField onChange={(e)=>{setNameCity(e.target.value)}} sx={{m: 1}} label="название города" placeholder="пример: Belgorod" />
    <Button onClick={()=>{getCitys()}} variant="contained" color="success">искать город</Button>
    {citys && <CitysGet citys= {citys}/>}
    </>)
}