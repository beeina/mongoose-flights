const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United", "Delta"],
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    required: true,
    default: function () {
      return new Date().getFullYear();
    },
  },
});

module.exports = mongoose.model("Flight", flightSchema);