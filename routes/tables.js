var express = require('express');
var router = express.Router();

router.get('/:template', function(req, res, next) {
  res.render('tables/' + req.params.template);
});

module.exports = router;
