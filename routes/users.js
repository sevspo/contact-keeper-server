const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route  POST api/users
// @des    Register a user
// @access public

router.post(
  "/",
  [
    check("name", "Please enter a name").not().isEmpty(),
    check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with min 6 characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    //gives the user data that is sent in the request.
    //res.send(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("passed");
  }
);

module.exports = router;
