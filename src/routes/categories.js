var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "category_id": "CID_1",
      "category_name": "Furniture",
      "description": "Things you sit on",
      "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
      "url": "https://stuff.com/furniture"
    },
    {
      "category_id": "CID_2",
      "category_name": "Desks",
      "description": "Things you sit at",
      "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
      "url": "https://stuff.com/desks"
    },
    {
      "category_id": "CID_3",
      "category_name": "Lighting",
      "description": "Things you see",
      "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
      "url": "https://stuff.com/lighting"
    },
    {
      "category_id": "CID_4",
      "category_name": "Accessories",
      "description": "Things you add onto stuff",
      "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
      "url": "https://stuff.com/accessories"
    }
  ]);
});

module.exports = router;
