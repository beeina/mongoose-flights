const Ticket = require("../models/ticket");
const Flight = require("../models/flights");

module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
  // console.log(req.params.id);
  res.render("tickets/new", { flight_id: req.params.id });
}

async function create(req, res) {
  try {
    // console.log(req.params.id);
    req.body.flight = req.params.id;
    // console.log(req.body.flight);
    await Ticket.create(req.body);
    res.redirect("/flights/" + req.params.id);
  } catch (err) {
    console.log(err);
  }
}
