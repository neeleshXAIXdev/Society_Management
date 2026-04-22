import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Health is ok!");
});

export default router;
