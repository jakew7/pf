import sslRedirect from 'heroku-ssl-redirect';
var express = require('express');
var router = express.Router();

app.use(sslRedirect());
 
app.get('/', (req, res) => {
  res.send('hello world');
});
 
app.listen(process.env.PORT || 3000);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
