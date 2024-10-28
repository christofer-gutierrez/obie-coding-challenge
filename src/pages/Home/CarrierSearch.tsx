import { useState } from "react";
import Container from "@mui/material/Container";
import StateDropdown from "../../components/StatesDropdown";
import CoverageToggles from "../../components/coverageToggles";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import "../../styles/home.css";

function CarrierSearch() {
  const [coverageType, setCoverageType] = useState("Auto");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (state && coverageType) {
      navigate(`/results?state=${state}&coverageType=${coverageType}`);
    } else {
      alert("Please select both a state and coverage type.");
    }
  };

  return (
    <>
      <ResponsiveAppBar />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <Container className="carrier-results-container">
          <h1>Insurance Search</h1>
          <StateDropdown state={state} setState={setState} />
          <CoverageToggles
            coverageType={coverageType}
            setCoverageType={setCoverageType}
          />
          <Button className="custom-button" onClick={handleSubmit}>
            Search
          </Button>
        </Container>
      </motion.div>
    </>
  );
}

export default CarrierSearch;
