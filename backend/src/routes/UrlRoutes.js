import { Router } from "express";
import { shortenUrl, redirectToLongUrl } from "../controllers/UrlController.js";

const UrlRouter = Router();

UrlRouter.post("/api/shorten", shortenUrl);

UrlRouter.get("/:shortCode", redirectToLongUrl);

export default UrlRouter;
