const express = require("express");
const router = express.Router();

// @route  POST api/users
// @des    Register a user
// @access public

router.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = router;
