const express = require("express");
const router = express.Router();
const projectsTag = require("../../services/projects/tags");

router.get("/", async function (req, res, next) {
  try {
    res.json(await projectsTag.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting tags `, err.message);
    next(err);
  }
});

module.exports = router;
