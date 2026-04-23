import "dotenv/config";
import app from "./app.js";
import connectDb from "./src/config/db.js";

connectDb();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
