import express from "express";
import fs from "fs";
const router = express.Router();

const DATA_PATH = "./data/videos.json";

const getData = () => {
  const videosData = JSON.parse(fs.readFileSync(DATA_PATH));
  return videosData;
};

router.get("/", (req, res) => {
  const videos = getData();
  const videosList = videos.videoList;
  res.status(200).send(videosList);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const videos = getData().videoDetails;
  const requestedVideo = videos.find((video) => video.id === id);
  if (requestedVideo) {
    res.status(200).send(requestedVideo);
  } else {
    res.status(404).send("video not found");
  }
});

export default router;
