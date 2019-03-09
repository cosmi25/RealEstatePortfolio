const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  country: { type: String, required: true },
  address: { type: String, required: true },
  city: String,
  zipcode: { type: String, required: true },
  state: String,
  beds: String,
  baths: String,
  sqft: String,
  note:String,
  img:String,
  date: { type: Date, default: Date.now }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
