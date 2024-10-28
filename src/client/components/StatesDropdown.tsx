import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface StateDropdownProps {
  state: string;
  setState: (value: string) => void;
}

export default function StatesDropdown({
  state,
  setState,
}: StateDropdownProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <div>
      <FormControl
        variant="filled"
        sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
      >
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={state}
          onChange={handleChange}
        >
          <MenuItem value="IL">Illinois</MenuItem>
          <MenuItem value="IN">Indiana</MenuItem>
          <MenuItem value="MI">Michigan</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
