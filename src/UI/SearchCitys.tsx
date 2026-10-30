import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { searchFetch } from "../redux";
import { CitysGet } from "./City";
import { useAppDispatch, useAppSelector } from "../types";

export function SearchCitys() {
  const dispatch = useAppDispatch();
  const [nameCity, setNameCity] = useState<string>("");
  const loading = useAppSelector((state) => state.citiesState.loading);
  const error = useAppSelector((state) => state.citiesState.error);
  const searched = useAppSelector((state) => state.citiesState.searched);
  async function getCitys() {
    await dispatch(searchFetch(nameCity));
  }
  return (
    <>
      <TextField
        onChange={(e) => {
          setNameCity(e.target.value);
        }}
        sx={{ m: 1 }}
        label="название города"
        placeholder="пример: Belgorod"
      />
      <Button
        onClick={() => {
          getCitys();
        }}
        variant="contained"
        color="success"
      >
        искать город
      </Button>
      {searched && <CitysGet />}
      {error && <h1 style={{ color: "red" }}>ошибка</h1>}
      {loading && <h1>загрузка</h1>}
    </>
  );
}
