const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  title: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: String,
  homePhone: String,
  mobile: String,
  birthDate: String,
  note: String,
  date: { type: Date, default: Date.now }
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;