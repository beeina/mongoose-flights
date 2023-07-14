const Flight = require("../models/flights");

module.exports = {
  index,
  new: newFlight,
  add,
  show,
};

async function index(req, res) {
  const flights = await Flight.find({});

  res.render("flights/index", { flights: flights });
}

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Flight.find({ _id: { $nin: flight.ticket } }).sort(
    "seat"
  );
  res.render("flights/show", { title: "Flight Detail", flight, tickets });
}

async function add(req, res) {
  // Remove empty properties so that defaults will be applied

  try {
    console.log(req.body);
    await Flight.create(req.body);

    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect("/flights"); // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}
