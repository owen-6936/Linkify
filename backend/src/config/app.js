import express from "express";
import cors from "cors";
import helment from "helmet";
import { config } from "dotenv";
import UrlRouter from "../routes/UrlRoutes.js";
config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") app.use(helment());

app.use((err, req, res, next) => {
  console.error("An unhandled error occurred in app.js:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.use("/", UrlRouter);

export default app;
