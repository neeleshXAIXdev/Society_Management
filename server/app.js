import express from "express";
import health from "./src/routers/health.route.js";
import handleError from "./src/middleware/error.middleware.js";
import authRoute from "./src/routers/auth.route.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "https://society-management-5we2.vercel.app",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api", health);
app.use("/api/v1/auth", authRoute);

app.use(handleError);

export default app;
