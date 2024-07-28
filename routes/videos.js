import express from "express";
import fs from "fs";
import crypto from "crypto";
const router = express.Router();

const DATA_PATH = "./data/videos.json";

const getData = () => {
  const videosData = JSON.parse(fs.readFileSync(DATA_PATH));
  return videosData;
};

router.get("/", (req, res) => {
  const videos = getData();
  res.status(200).send(videos);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const videos = getData();
  const requestedVideo = videos.find((video) => video.id === id);
  if (requestedVideo) {
    res.status(200).send(requestedVideo);
  } else {
    res.status(404).send("video not found");
  }
});

// router.post("/", (req, res) => {
//   const albumObj = req.body;
//   const newalbum = {
//     id: crypto.randomUUID(),
//     title: albumObj.title,
//   };

//   // const albumData = readData();
//   // albumData.push(newalbum);
//   // fs.writeFileSync(FILE_PATH, JSON.stringify(albumData));

//   res.status(201).json(newalbum);
// });

// router.post("/", (req, res) => {
//   console.log(req.body);
//   const newVideo = {
//     title: "title",
//   };
//   res.json(newVideo);
// });

router.post("/", (req, res) => {
  const videoObject = req.body;
  const newVideo = {
    id: crypto.randomUUID(),
    title: videoObject.title,
    description: videoObject.description,
    image: videoObject.image,
  };

  const videoData = getData();
  videoData.push(newVideo);
  fs.writeFileSync(DATA_PATH, JSON.stringify(videoData));

  res.status(201).json(newVideo);
});

export default router;
