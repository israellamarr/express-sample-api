var express = require('express');
var router = express.Router();

const url = "http://localhost:3000";
const urls = [
  `${ url }/products`,
  `${ url }/categories`,
  `${ url }/orders`,
  `${ url }/users`
];

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title: 'Express static and restful api sample',
    description: `This is a sample Express app for static pages and serving json to example react & angular applications`,
    urls: urls
  };
  res.render('index', data);
});

module.exports = router;
