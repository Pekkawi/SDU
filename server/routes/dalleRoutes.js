import express, { response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from dallE");
});

export default router;
