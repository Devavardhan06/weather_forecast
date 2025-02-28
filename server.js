const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Weather Forecast API is Running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
