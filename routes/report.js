const express = require("express");
const route = express.Router();
const reportsController = require("../controllers/reportController");

route.get("/:status", reportsController.status);

module.exports = route;
