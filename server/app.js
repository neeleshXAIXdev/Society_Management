import express from "express";
import test from "./src/routers/test.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api", test);

export default app;
