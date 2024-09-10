const express = require('express');
const router = express.Router();
const {ContactForm} = require("../controllers/FormController")



router.get("/", ContactForm)
router.post("/", ContactForm)

module.exports = router;
