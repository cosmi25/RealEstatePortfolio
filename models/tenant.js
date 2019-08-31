const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
	title: String,
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: String,
	homePhone: String,
	mobile: String,
	birthDate: String,
	note: String,
	date: { type: Date, default: Date.now },
	propertyId: String,
});

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
