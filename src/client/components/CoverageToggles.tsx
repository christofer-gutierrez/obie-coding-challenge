import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import "../styles/home.css";

interface CoverageTogglesProps {
  coverageType: string;
  setCoverageType: React.Dispatch<React.SetStateAction<string>>;
}

export default function CoverageToggles({
  coverageType,
  setCoverageType,
}: CoverageTogglesProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoverageType(event.target.value);
  };

  return (
    <FormControl
      component="fieldset"
      variant="standard"
      className="coverage-container"
    >
      <h3 className="coverage-header">Insurance Coverage</h3>
      <FormGroup className="coverage-form-group">
        <RadioGroup value={coverageType} onChange={handleChange}>
          <FormControlLabel
            control={<Radio className="custom-radio" />}
            label={<span className="custom-label">Auto</span>}
            value="Auto"
          />
          <FormControlLabel
            control={<Radio className="custom-radio" />}
            label={<span className="custom-label">Fire</span>}
            value="Fire"
          />
          <FormControlLabel
            control={<Radio className="custom-radio" />}
            label={<span className="custom-label">Both</span>}
            value="Both"
          />
        </RadioGroup>
      </FormGroup>
    </FormControl>
  );
}
