import express from "express";
import cors from "cors";
import UrlRouter from "../routes/UrlRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Linkify Backend API is configured and ready!");
});

app.use((err, req, res, next) => {
  console.error("An unhandled error occurred in app.js:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.use("/", UrlRouter);

export default app;
