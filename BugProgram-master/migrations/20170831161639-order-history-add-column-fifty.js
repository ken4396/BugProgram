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
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("給料", 6000, 30000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("本", 3000, 10000);', function() {
    console.log("OK");
  });
  db.runSql('insert into migration.order_history (product_name, product_prices, balance) values ("ゲーム", 6000, 8000);', function() {
    console.log("OK");
  });
  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
