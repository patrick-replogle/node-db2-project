const express = require("express");
const db = require("../utils/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await db("cars").select());
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await db("cars")
      .where("id", req.params.id)
      .select()
      .first();
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = {
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price,
      color: req.body.color
    };

    const [id] = await db("cars").insert(payload);
    res.json(
      await db("cars")
        .where("id", id)
        .first()
    );
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const payload = {
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      price: req.body.price,
      color: req.body.color
    };
    await db("cars")
      .where("id", req.params.id)
      .update(payload);
    res.json(
      await db("cars")
        .where("id", req.params.id)
        .first()
    );
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await db("cars")
      .where("id", req.params.id)
      .del();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: "Please try again later" });
  }
});

module.exports = router;
