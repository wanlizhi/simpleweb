var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.cookies.logged){
		res.cookie('logged',  true);
	}
  res.render('index', { title: 'Express' });
});

module.exports = router;
