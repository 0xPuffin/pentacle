const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "Hello from le server" });
});

module.exports = router;
