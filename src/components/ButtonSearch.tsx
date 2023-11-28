"use client"
import { Button } from "@mui/material";

interface ButtonSearchProps {
  getWeather: () => void;
  loading: boolean;
}


function ButtonSearch({ getWeather, loading }) {
  return (
    <Button variant="contained" onClick={getWeather} disabled={loading}>
      {loading ? "Loading..." : "Buscar"}
    </Button>
  )
}

export default ButtonSearch