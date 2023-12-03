import { FormEvent } from "react";
import { Button } from "@mui/material";

// Replace `WeatherData` with the actual type of the weather data
interface Props {
  functionWeather: (e: FormEvent) => void;
  loading: boolean;
}


function ButtonSearch({ functionWeather, loading }: Props) {
  return (
    <Button variant="contained" onClick={functionWeather} disabled={loading}>
      {loading ? "Loading..." : "Buscar"}
    </Button>
  );
}

export default ButtonSearch;
