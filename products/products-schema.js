/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable strict */
'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  price: { type: Number, required: true },
  weight: { type: Number },
  quantity_in_stock: { type: Number, required: true },
});

module.exports = mongoose.model('products', products);