const express = require("express");
const cors = require("cors");

const PexelsRouter = require("./pexels/pexels-router.js");
// const SpotifyRouter = require("./spotify/spotify-router.js");

const server = express();
server.use(cors());

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/pexels", PexelsRouter);
// server.use("/spotify", SpotifyRouter);

module.exports = server;
