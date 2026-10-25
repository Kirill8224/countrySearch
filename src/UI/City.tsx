import { useAppSelector, type CityData } from "../types";
import { Card, Typography } from "@mui/material";

export function CitysGet(){
    const citys: CityData[]= useAppSelector((state)=>{return state.citiesState.data.data})
    return(citys.map((city)=>{return(
        <Card sx={{m: 1}} key={city.id}>
            <Typography variant="h2">{city.name}</Typography>
            <Typography>страна: {city.country_code}</Typography>
            <Typography>население: {city.population}</Typography>
            <Typography>регион: {city.timezone_id}</Typography>
            <Typography>{city.latitude} {city.longitude}</Typography>
        </Card>
    )
    }))
}
