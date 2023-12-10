
import app from "./app";
import { PORT } from "./config";
import connectToDB from "./db";

//mongo
connectToDB();
app.listen(PORT, () => {
  console.log(`--- PUERTO OPEN IN ${PORT} ---`);
});
