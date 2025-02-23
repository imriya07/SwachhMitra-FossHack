const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  phone: String,
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female", "Doesn't want to mention"] }
});

module.exports = mongoose.model("formDataSchema", formDataSchema);