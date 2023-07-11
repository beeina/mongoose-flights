const Flight = require("../models/flights");

module.exports = {
  index,
  new: newFlight,
  add,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function add(req, res) {
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
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
