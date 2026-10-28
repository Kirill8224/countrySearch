import { useSelector, useDispatch } from "react-redux";
import type { RootState, DispathType } from "./API/store";
export const useAppDispatch= useDispatch.withTypes<DispathType>()
export const useAppSelector= useSelector.withTypes<RootState>()

export type  CityData ={
    alternate_names: {
      ru: string;
    };
    ascii_name: string;
    country_code: string;
    feature_class: string;
    feature_code: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    population: number;
    timezone_id: string;
  }
  
export type AnswerSearch= {
    data: CityData[]
    loading: boolean,
    error: boolean,
    searched: boolean
}

export type AnswerResponse= {
  data: CityData[],
  meta:{ 
    count: number,
    has_more: boolean}
}