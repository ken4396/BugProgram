'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('order_history', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    product_name: 'string',
    product_prices: 'int',
    balance: 'int'
  })
  return null;
};

exports.down = function(db) {
  db.dropTable('oerder_history');
  return null;
};

exports._meta = {
  "version": 1
};
