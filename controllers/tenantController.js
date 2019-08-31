const db = require('../models');

module.exports = {
	findAll: function(req, res) {
		console.log(
			'tenantController.findAll req.query.propertyId =' + req.query.propertyId
		);

		db.Tenant.find({ propertyId: req.query.propertyId })
			.sort({ firstName: 1, lastName: 1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.Tenant.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	// find: function(req, res) {
	// 	db.Tenant.find(req.query)
	// 		.sort({ propertyId: req.body })
	// 		.then(dbModel => res.json(dbModel))
	// 		.catch(err => res.status(422).json(err));
	// },
	create: function(req, res) {
		db.Tenant.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		db.Tenant.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.Tenant.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
};
