var express = require('express');
var router = express.Router();


/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',  title1: 'Parantap Mathur' });
});*/

module.exports = router;

router.get('/', function(req, res, next) {
  console.log('Accessing the get section ...')
  res.send('respond w ith a resource');
  })