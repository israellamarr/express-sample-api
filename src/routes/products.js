var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "product_id": "PID_2983",
      "product_name": "Furniture 1",
      "product_type": "PHYSICAL",
      "category": "furniture",
      "price": 999.99,
      "description": "This product truly is a furniture.",
      "img_slug": "https://cdn.shopify.com/s/files/1/0202/3990/products/Bras_Highback_Wood_Base_Lounge_Chair.jpg?v=1483052223",
      "url": "https://stuff.com/product-name"
    },
    {
      "product_id": "PID_2982",
      "product_name": "Desk 1",
      "product_type": "PHYSICAL",
      "category": "desks",
      "price": 119.99,
      "description": "This desk saved my life.",
      "img_slug": "https://cdn.shopify.com/s/files/1/2100/4737/products/DES01-2_900x.png?v=1510673387",
      "url": "https://stuff.com/product-name"
    },
    {
      "product_id": "PID_2981",
      "product_name": "Lamp 1",
      "product_type": "PHYSICAL",
      "category": "lighting",
      "price": 39.99,
      "description": "Is this a lamp? I can't tell; it's too dark in here..",
      "img_slug": "https://s-media-cache-ak0.pinimg.com/originals/3a/47/70/3a4770f9ab6ea84060fe213493ef66d0.jpg",
      "url": "https://stuff.com/product-name"
    },
    {
      "product_id": "PID_2980",
      "product_name": "Tea Kettle",
      "product_type": "PHYSICAL",
      "category": "accessories",
      "price": 1.99,
      "description": "This accessory could have destroyed you but it decided that humans deserve a chance to fail.",
      "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
      "url": "https://stuff.com/product-name"
    }
  ]);
});

module.exports = router;
