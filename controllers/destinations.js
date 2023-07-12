const Flight = require("../models/flights");

module.exports = {
  create,
};

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);

  flight.destinations.push(req.body);
  try {
    await flight.save();
  } catch (err) {
    console.log(err);
  }
  // Respond to the Request with a redirect back to movies show page
  res.redirect(`/flights/${flight._id}`);
}
