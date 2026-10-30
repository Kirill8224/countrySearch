import axios from "axios";
import type { AnswerResponse } from "../types";
const API_URL= import.meta.env.VITE_API_URL
export async function searchCity(city: string) {
  console.log("функция началась");
  const res = await axios.get<AnswerResponse>(`${API_URL}/cities`, {
    params: {
      search: city,
    },
  });
  console.log('API_URL', API_URL);
  return res.data;
}
