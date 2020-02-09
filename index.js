/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

const mongoose = require('mongoose');
const Categories = require('./categories/categories-schema.js');
const Products = require('./products/products-schema.js');

const MONGODB_URI = 'mongodb://localhost:27017/first-mongo';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const dish = new Categories({ name: 'table' });
const bottle = new Products({ price: 50, weight: 30, quantity_in_stock: 200 });

dish.save();
bottle.save();