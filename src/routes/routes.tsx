import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CarrierSearch from "../pages/Home/CarrierSearch";
import CarrierResults from "../pages/Home/CarrierResults";
const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CarrierSearch />} />
        <Route path="/results" element={<CarrierResults />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
