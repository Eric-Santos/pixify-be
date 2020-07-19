const express = require("express");

const PexelsRouter = require("./pexels/pexels-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/pexels", PexelsRouter);

module.exports = server;
