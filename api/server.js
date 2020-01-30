const express = require("express");
const helmet = require("helmet");

const carsRouter = require("../cars/cars-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/", (req, res) => {
  res.send("<h3>Cars Cars Cars!</h3>");
});

server.use("/api/cars", carsRouter);

module.exports = server;
