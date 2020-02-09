/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

const CategoriesSchema = require('./categories-schema.js');

class Categories {

  get(_id) {
    if (_id) {
      return CategoriesSchema.findOne({ _id });
    } else {
      return CategoriesSchema.find({});
    }
  }

  create(record) {
    let newRecord = new CategoriesSchema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return CategoriesSchema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return CategoriesSchema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;