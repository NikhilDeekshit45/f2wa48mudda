var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x = Math.random() * 10;
  var result1 = Math.log2(x);
  var result2 = Math.cosh(x);
  var result3 = Math.floor(x);
  res.render('computation', { title: 'Bonus', data:x, result1: result1, result2: result2 , result3: result3 });
});

module.exports = router;
