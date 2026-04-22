import express from "express";
import health from "./src/routers/health.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api", health);

export default app;
