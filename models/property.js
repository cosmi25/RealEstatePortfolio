const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
	imgUrl: String,
	country: { type: String, required: false },
	address: { type: String, required: false },
	city: String,
	zipcode: { type: String, required: false },
	state: String,
	types: { type: String, required: false },
	beds: String,
	baths: String,
	sqft: String,
	note: String,
	//rented has to be finsihed
	rented: { type: Boolean, default: false },
	//here comes the image array with the first image as home img
	//how to do that ???
	//img:String,
	date: { type: Date, default: Date.now },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
