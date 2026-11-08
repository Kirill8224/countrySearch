import { useState } from "react";
import { useAppSelector, type CityData } from "../types";
import {  Button } from "@mui/material";
import { SetCity } from "./City";
import { millionPlusCity } from "../API/selectors";

export function CitysGet(){
    const citys: CityData[]= useAppSelector((state)=>{return state.citiesState.data})
    const [million, setMillion]= useState<boolean>(false)
    const bigCity= millionPlusCity(citys)
    console.log(bigCity)
    if(citys.length >= 1){
    return(<div>
        <Button onClick={()=>{setMillion(true)}}>города-миллионники</Button>
        {
        million && bigCity.length > 0 ? bigCity.map((stadt)=>{return(<SetCity city= {stadt} key={stadt.id}/>)}) : citys.map((stadt)=>{return(<SetCity city= {stadt} key={stadt.id}/>)})
    }
    </div>
)}
    else{
        return <h1>городов с похожим названием не найдено</h1>
    }
}

