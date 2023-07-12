var express = require("express");
var router = express.Router();

const flightCtrl = require("../controllers/flights");

// GET flights
router.get("/", flightCtrl.index);

router.get("/new", flightCtrl.new);

router.post("/", flightCtrl.add);

router.get('/:id', flightCtrl.show);

module.exports = router;
