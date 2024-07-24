import express from "express";
import videos from "./routes/videos.js";

import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/videos", videos);

app.listen(PORT, () => {
  console.log("Linstning on port ", PORT);
});
