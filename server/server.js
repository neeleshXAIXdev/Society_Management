require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.use("/", (req, res) => {
  res.send("Server running");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
