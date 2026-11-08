import type { CityData } from "../types";
import { createSelector } from "@reduxjs/toolkit";
const BigPeopleCity= (data: CityData[])=>{return(data)}
export const millionPlusCity= createSelector([BigPeopleCity], (cities)=>{
    return(cities.filter((city)=>city.population > 1000000).sort((a, b)=> b.population - a.population))
})

