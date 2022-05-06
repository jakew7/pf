var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

// shibu page
router.get('/shibu', function(req, res, next) {
  res.render('shibu', { 
    title: 'Express' 
  });
});

// shibu page
router.get('/junk', function(req, res, next) {
  res.render('junk', { 
    title: 'Express' 
  });
});

// about page
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'Express' 
  });
});

module.exports = router;
