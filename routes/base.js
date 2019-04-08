var express = require('express');
var router = express.Router();

router.get(/^\/fixed_(\w+)$/i, function(req, res) {
  res.render('base/fixed/fixed_' + req.params[0]);
});

router.get(/^\/page_(\d+)$/i, function(req, res) {
  res.render('base/errors/page_' + req.params[0]);
});

router.get('/:template', function(req, res) {
  res.render('base/' + req.params.template);
});

router.get('/', function(req, res) {
  res.render('home/index');
});

module.exports = router;
