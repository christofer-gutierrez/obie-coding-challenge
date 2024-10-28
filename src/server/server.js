import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import carriersData from "./data/carriers.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/carriers", (req, res) => {
  const { state, coverageType } = req.query;

  if (!state || !coverageType) {
    return res.status(400).json({ error: "State and Coverage are required" });
  }

  const result = carriersData.carriers.filter((carrier) => {
    return carrier.coverage[state] === coverageType;
  });

  res.json({
    carriers: result.length > 0 ? result.map((carrier) => carrier.name) : [],
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
