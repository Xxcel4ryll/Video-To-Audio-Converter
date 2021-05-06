const express = require("express");
const router = express.Router();

const { convertVideoToAudio } = require("../controllers/main.controllers");

router.get("/convert_video", convertVideoToAudio);

module.exports = router;
