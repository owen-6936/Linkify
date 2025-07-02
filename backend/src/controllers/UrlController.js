import { nanoid } from "nanoid";
import { config } from "dotenv";
import {
  findLongUrlByShortCode,
  findUrlByLongUrl,
  createUrlEntry,
} from "../services/urlServices.js";
config();

export const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).json({ message: "Please enter a URL to shorten." });
  }

  const hostname = process.env.HOSTNAME;
  if (!hostname) {
    return res
      .status(500)
      .json({ message: "Server hostname is not configured." });
  }

  try {
    try {
      new URL(longUrl);
    } catch (urlError) {
      return res.status(400).json({ message: "Invalid URL format provided." });
    }

    const existingEntry = await findUrlByLongUrl(longUrl);

    if (existingEntry) {
      const existingShortCode = existingEntry.short_code;
      const existingShortUrl = new URL(existingShortCode, hostname).href;
      return res.status(200).json({
        message: "URL already shortened!",
        longUrl,
        shortCode: existingShortCode,
        shortUrl: existingShortUrl,
      });
    }

    const shortCode = nanoid(7);
    await createUrlEntry(longUrl, shortCode);

    const shortUrl = new URL(shortCode, hostname).href;

    return res.status(201).json({
      message: "URL shortened successfully!",
      longUrl,
      shortCode,
      shortUrl,
    });
  } catch (error) {
    console.error("Error in shortenUrl:", error);
    return res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};

export const redirectToLongUrl = async (req, res) => {
  const { shortCode } = req.params;

  if (!shortCode) {
    return res.status(400).json({ message: "Short code is missing." });
  }

  try {
    const urlEntry = await findLongUrlByShortCode(shortCode);

    if (urlEntry && urlEntry.long_url) {
      return res.redirect(302, urlEntry.long_url);
    } else {
      return res
        .status(404)
        .json({ message: "Short URL not found or expired." });
    }
  } catch (error) {
    console.error("Error during redirection lookup:", error);
    return res
      .status(500)
      .json({ message: `Internal server error: ${error.message}` });
  }
};
