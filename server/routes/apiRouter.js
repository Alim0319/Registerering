const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Endret ruten fra "/api/env" til "/env"
  const envData = {
    DATABASE_URI: process.env.DATABASE_URI,
  };

  res.json(envData);
});

module.exports = router;
