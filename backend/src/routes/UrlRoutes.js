import { Router } from "express";
import { shortenUrl } from "../controllers/UrlController.js";

const UrlRouter = Router();

UrlRouter.post("/api/shorten", shortenUrl);

UrlRouter.get("/:shortUrl", shortenUrl);

export default UrlRouter;
