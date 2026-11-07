import type { CityData } from "../types";
import { createSelector } from "@reduxjs/toolkit";
const BigPeopleCity= (data: CityData[])=>{return(data.filter((city)=>city.population > 1000000))}
export const millionPlusCity= createSelector([BigPeopleCity], (cities)=>{
    return(cities.sort((a, b)=> b.population - a.population))
})

