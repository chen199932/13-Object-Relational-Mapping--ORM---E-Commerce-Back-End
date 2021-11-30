const { Product } = require('../models');

const productData = [
	{
		product_name: 'T-Shirt',
		price: 17.99,
		stock: 20,
		category_id: 1,
	},
	{
		product_name: 'Sneakers',
		price: 65.0,
		stock: 30,
		category_id: 5,
	},
	{
		product_name: 'Baseball Hat',
		price: 19.99,
		stock: 12,
		category_id: 4,
	},
	{
		product_name: 'Records',
		price: 24.99,
		stock: 50,
		category_id: 3,
	},
	{
		product_name: 'Cargo Shorts',
		price: 23.99,
		stock: 22,
		category_id: 2,
	},
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
