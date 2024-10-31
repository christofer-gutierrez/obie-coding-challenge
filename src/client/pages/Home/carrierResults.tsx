import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import "../../styles/carrierResults.css";
//test
function CarrierResults() {
  const [carriers, setCarriers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const useQuery = () => new URLSearchParams(location.search);
  const query = useQuery();
  const state = query.get("state");
  const coverageType = query.get("coverageType");

  useEffect(() => {
    const fetchCarriers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://obie-coding-challenge.onrender.com/carriers",
          {
            params: { state, coverageType },
          }
        );
        setCarriers(response.data.carriers);
      } catch (error) {
        console.error("Error fetching carriers:", error);
      } finally {
        setLoading(false);
      }
    };

    if (state && coverageType) {
      fetchCarriers();
    }
  }, [state, coverageType]);

  if (loading) {
    return null;
  }

  return (
    <>
      <ResponsiveAppBar />
      <Container className="carrier-results-container">
        <motion.div
          className="carrier-results-content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Your Insurance Options</h1>
          {loading ? (
            <p>Loading carriers...</p>
          ) : carriers.length > 0 ? (
            <ul>
              {carriers.map((carrier, index) => (
                <li key={index}>{carrier}</li>
              ))}
            </ul>
          ) : (
            <p>No carriers found for the selected criteria.</p>
          )}

          <button className="custom-button" onClick={() => navigate(-1)}>
            Back to Search
          </button>
        </motion.div>
      </Container>
    </>
  );
}

export default CarrierResults;
