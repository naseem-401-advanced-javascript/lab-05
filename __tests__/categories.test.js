/* eslint-disable strict */
'use strict';

const Categories = require('../categories/categories.js');
require('@code-fellows/supergoose');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'testPost' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a category', () => {
    let obj = { name: 'testGet' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can update() a category', () => {
    let obj = { name: 'testUpdate' };
    return categories.create(obj)
      .then(record => {
        record.name = 'updated';
        return categories.update(record._id, record)
          .then(newCategory => {
            return categories.get(newCategory._id)
              .then(category => {
                Object.keys(obj).forEach(key => {
                  expect(category[key]).toEqual(newCategory[key]);
                });
              });
          });
      });
  });
  it('can delete() a category', () => {
    let obj = { name: 'testDelete' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            return categories.delete(category._id)
              .then(() => {
                return categories.get(category._id)
                  .then(catag => {
                    expect(catag).toBeNull();
                  });
              });
          });
      });
  });
});