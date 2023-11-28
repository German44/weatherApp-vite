import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
const Input = ({city}) => {
    return (
        <TextField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="Ciudad"
            variant="standard"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>),
            }} />
    )
}

export default Input