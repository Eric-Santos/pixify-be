const express = require("express");

const Spotify = require("./spotify-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Spotify.find()
    .then((song) => {
      res.json(song);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get songs", err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Spotify.findById(id)
    .then((song) => {
      if (song) {
        res.json(song);
      } else {
        res.status(404).json({ message: "Could not find song with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get song", err });
    });
});

module.exports = router;
