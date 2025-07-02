import app from "./src/config/app.js";
import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) console.error(error.message);
  console.log(`server started at port ${port}`);
});
