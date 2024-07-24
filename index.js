import express from "express";
import videos from "./routes/videos.js";

const app = express();
const PORT = process.env.PORT || 5231;

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/videos", videos);

app.listen(PORT, () => {
  console.log("Linstning on port ", PORT);
});
