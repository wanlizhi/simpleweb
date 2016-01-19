var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('newPost', { message: req.body.message, user:'bcai' });
});

module.exports = router;
