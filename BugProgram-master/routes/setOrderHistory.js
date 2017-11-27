var express = require('express');
var router = express.Router();
var app = require('../app');

router.get('/', function(req, res) {
  res.render('index', {
    userName: 'get setOrderHistory'
  });
})

router.post('/', function(req, res) {
  app.connection.query('select * from order_history order by id desc limit 1', function(err, rows) {
    let balance = 0;
    let insertSql = 'insert into migration.order_history (product_name, product_prices, balance) values (';

    switch(req.body.grouping) {
      case "0":
        balance = rows[0].balance + Number(req.body.product_price);
        break;
      case "1":
        balance = rows[0].balance - Number(req.body.product_price);
        break;
      default:
        console.log("error");
        break;
    }

    insertSql += '"' + req.body.product_name + '",' + req.body.product_price + ',' + balance + ');';

    app.connection.query(insertSql, function(err, rows) {
      res.redirect('/');
    });
  });
});

module.exports = router;