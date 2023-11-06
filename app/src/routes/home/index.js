"use strict";
const express = require("express");
const { login } = require("./home.ctrl");
const { hello } = require("./home.ctrl");
const router = express.Router();
router.get("/", hello);
router.get("/login", login);

module.exports = router;
