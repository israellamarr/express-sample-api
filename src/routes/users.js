var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      'username': 'guyfawkespaintbrush',
      'name': 'Guy Fawkes'
    }
  ]);
});

module.exports = router;
