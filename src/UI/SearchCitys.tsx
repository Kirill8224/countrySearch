import { useState } from "react"
import { TextField, Button } from "@mui/material"
import {searchFetch} from '../redux'
import { CitysGet } from "./City"
import { useAppDispatch } from "../types"

export function SearchCitys(){
    const dispatch= useAppDispatch()
    const [nameCity,  setNameCity]= useState<string>('')
    const [click,  setClick]= useState<boolean>(false)
    async function getCitys(){
        await dispatch(searchFetch(nameCity))
        setClick(true)}
    return(<>
    <TextField onChange={(e)=>{setNameCity(e.target.value)}} sx={{m: 1}} label="название города" placeholder="пример: Belgorod" />
    <Button onClick={()=>{getCitys()}} variant="contained" color="success">искать город</Button>
    {click && <CitysGet />}
    </>)
}
