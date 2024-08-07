import express from "express";
import videos from "./routes/videos.js";

import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/videos", videos);

app.listen(PORT, () => {
  console.log("Linstning on port ", PORT);
});
