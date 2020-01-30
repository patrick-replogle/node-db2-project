const express = require("express");
const db = require("../utils/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

router.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

router.post("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

module.exports = router;
