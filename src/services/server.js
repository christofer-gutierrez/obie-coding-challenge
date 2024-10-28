import express from "express";
import cors from "cors";
import carriersData from "../data/carriers.json" assert { type: "json" };

const app = express();
app.use(cors());

app.get("/carriers", (req, res) => {
  const { state, coverageType } = req.query;

  if (!state || !coverageType) {
    return res
      .status(400)
      .json({ error: "State and coverageType are required" });
  }

  const result = carriersData.carriers.filter((carrier) => {
    return carrier.coverage[state] === coverageType;
  });

  if (result.length > 0) {
    res.json({ carriers: result.map((carrier) => carrier.name) });
  } else {
    res.json({ carriers: [] });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
