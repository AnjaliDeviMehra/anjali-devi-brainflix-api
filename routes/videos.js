import express from "express";
import fs from "fs";
const router = express.Router();

const DATA_PATH = "./data/videos.json";

const getData = () => {
  const videosData = JSON.parse(fs.readFileSync(DATA_PATH));
  return videosData;
};
router.get("/", (req, res) => {
  const videosList = getData();
  res.status(200).send(videosList);
});

export default router;
