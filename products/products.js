/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';


const ProductsSchema = require('./products-schema.js');

class Products {

  get(_id) {
    if (_id) {
      return ProductsSchema.findOne({ _id });
    } else {
      return ProductsSchema.find({});
    }
  }

  create(record) {
    let newRecord = new ProductsSchema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return ProductsSchema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return ProductsSchema.findByIdAndDelete(_id);
  }

}

module.exports = Products;