const express = require("express");

const Pexels = require("./pexels-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Pexels.find()
    .then((photo) => {
      res.json(photo);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get photo", err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Pexels.findById(id)
    .then((photo) => {
      if (photo) {
        res.json(photo);
      } else {
        res
          .status(404)
          .json({ message: "Could not find photo with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get photo", err });
    });
});

module.exports = router;
