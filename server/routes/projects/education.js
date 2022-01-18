const express = require("express");
const router = express.Router();
const projects = require("../../services/projects/education");

router.get("/", async function (req, res, next) {
  try {
    res.json(await projects.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting projects `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await projects.create(req.body));
  } catch (err) {
    console.error(`Error while posting projects `, err.message);
    next(err);
  }
});

module.exports = router;
