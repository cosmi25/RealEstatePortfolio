const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/RealEstatePortfolio'
);

const propertySeed = [
	{
		country: 'usa',
		address: '123, Maple Street',
		city: 'Paris',
		zipcode: '12345',
		state: 'Texas',
		type: 'single family',
		baths: '2',
		beds: '4',
		sqft: '2800',
		rented: true,
		imgUrl:
			'https://cdn.pixabay.com/photo/2015/09/27/22/36/house-961401__340.jpg',
		date: new Date(Date.now()),
	},
	{
		country: 'usa',
		address: '443, Marigold Street',
		city: 'Madrid',
		zipcode: '13345',
		state: 'Texas',
		type: 'single family',
		baths: '2',
		beds: '3',
		sqft: '2100',
		rented: false,
		imgUrl:
			'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187__340.jpg',
		date: new Date(Date.now()),
	},
	{
		country: 'usa',
		address: '123 Happy Street',
		city: 'Dallas',
		zipcode: '12345',
		state: 'Texas',
		type: 'single family',
		baths: '2',
		beds: '3',
		sqft: '2750',
		rented: true,
		imgUrl:
			'https://cdn.pixabay.com/photo/2017/06/17/12/59/luxury-home-2412145__340.jpg',
		date: new Date(Date.now()),
	},

	{
		country: 'usa',
		address: '456 Balloon Street',
		city: 'Dallas',
		zipcode: '11345',
		state: 'Texas',
		type: 'single family',
		baths: '3',
		beds: '5',
		sqft: '3500',
		rented: true,
		imgUrl:
			'https://cdn.pixabay.com/photo/2016/09/20/11/24/home-1682300__340.jpg',
		date: new Date(Date.now()),
	},
	{
		country: 'usa',
		address: '1289 Straus Street',
		city: 'Paris',
		zipcode: '11345',
		state: 'Texas',
		type: 'single family',
		baths: '3',
		beds: '5',
		sqft: '3500',
		rented: true,
		imgUrl:
			'https://cdn.pixabay.com/photo/2016/09/20/11/26/home-1682316__340.jpg',
		date: new Date(Date.now()),
	},
	{
		country: 'usa',
		address: ' 222 Blueberry Street',
		city: 'Dallas',
		zipcode: '11345',
		state: 'Texas',
		type: 'single family',
		baths: '3',
		beds: '5',
		sqft: '3100',
		rented: false,
		imgUrl:
			'https://cdn.pixabay.com/photo/2017/06/19/04/06/house-2418106__340.jpg',
		date: new Date(Date.now()),
	},
];

db.Property.remove({})
	.then(() => db.Property.collection.insertMany(propertySeed))
	.then(data => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
