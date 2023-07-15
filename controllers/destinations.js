const Flight = require("../models/flights");

module.exports = {
  create,
};

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);

  flight.destinations.push(req.body);
  // console.log(flight);
  // console.log(req.params.id);
  // console.log(req.body);
  try {
    await flight.save();
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/flights/${flight._id}`);
}
