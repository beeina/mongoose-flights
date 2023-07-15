const Flight = require("../models/flights");
const Ticket = require("../models/ticket");
module.exports = {
  new: newFlight,
  add,
  index,
  show,
};

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function add(req, res) {
  try {
    console.log(req.body);
    await Flight.add(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    // console.log(flight);
    res.render("flights/index", { flights });
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  // console.log(flight);
  const tickets = await Ticket.find({ flight: req.params.id });
  // console.log(tickets);
  res.render("flights/show", { title: "Flight Detail", flight, tickets });
}
