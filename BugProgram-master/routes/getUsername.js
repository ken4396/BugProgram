var express = require('express');
var router = express.Router();
var app = require('../app');

router.get('/', function(req, res) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  app.connection.query('select * from user', function(err, rows) {
    rows.forEach(function(row) {
      if (req.query.id == row.id) {
        res.end(JSON.stringify(row));
      }
    })
    res.end(JSON.stringify({name: 'NotFound'}));
  });
});

module.exports = router;