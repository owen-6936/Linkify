import pool from "../config/db.js";
/**
 * Finds a URL entry by its long URL.
 * @param {string} longUrl The long URL to search for.
 * @returns {Promise<object|null>} An object { id, long_url, short_code, created_at } if found, otherwise null.
 */
export async function findUrlByLongUrl(longUrl) {
  try {
    const [rows] = await pool.query(
      "SELECT id, long_url, short_code, created_at FROM urls WHERE long_url = ?",
      [longUrl]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error finding URL by long URL in service:", error);
    throw new Error("Database error during lookup for existing URL.");
  }
}

export async function createUrlEntry(longUrl, shortCode) {
  try {
    const [result] = await pool.query(
      "INSERT INTO urls (long_url, short_code) VALUES (?, ?)",
      [longUrl, shortCode]
    );
    return result;
  } catch (error) {
    console.error(
      "An error occured while attempting to store the longUrl and shortCode:",
      error
    );
    throw new Error("Database error during lookup for existing URL.");
  }
}

export async function findLongUrlByShortCode(shortCode) {
  try {
    const [rows] = await pool.query(
      "SELECT long_url FROM urls WHERE short_code = ?",
      [shortCode]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error finding URL by short code in service:", error);
    throw new Error("Database error during redirection lookup.");
  }
}
