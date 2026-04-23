import express from "express";
import health from "./src/routers/health.route.js";
import handleError from "./src/middleware/error.middleware.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api", health);

app.use(handleError);

export default app;
