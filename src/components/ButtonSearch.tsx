import { Button } from "@mui/material";
import React from "react";

interface ButtonSearchProps {
  functionWeather: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
}

function ButtonSearch({ functionWeather, loading }: ButtonSearchProps) {
  return (
    <Button variant="contained" onClick={functionWeather} disabled={loading}>
      {loading ? "Loading..." : "Buscar"}
    </Button>
  );
}

export default ButtonSearch;
