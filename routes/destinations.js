const express = require('express');
const router = express.Router();

// import reviews controller 
const destinationsCtrl = require("../controllers/destinations");

// Define create Route for review below;
router.post("/flights/:id/destinations", destinationsCtrl.create)

module.exports = router;
