var express = require('express');
var router = express.Router();

router.get('/:template', function(req, res, next) {
  res.render('forms/' + req.params.template);
});

module.exports = router;
