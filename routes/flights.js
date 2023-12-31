var express = require("express");
var router = express.Router();

const flightCtrl = require("../controllers/flights");

const ticketsCtrl = require("../controllers/tickets");

// GET flights
router.get("/", flightCtrl.index);

router.get("/new", flightCtrl.new);

router.post("/", flightCtrl.add);

router.get("/:id", flightCtrl.show);

router.get("/:id/tickets/new", ticketsCtrl.new);

router.post("/:id/tickets", ticketsCtrl.create);

module.exports = router;
