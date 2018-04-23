var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "status": 5,
      "order_id": "10234",
      "customer_name": "Karen Short",
      "customer_comment": "This order needs to be refunded",
      "products": [
        {
          "product_id": "PID_2983",
          "product_name": "Furniture 1",
          "product_type": "PHYSICAL",
          "quantity": 1,
          "category": "furniture",
          "price": 999.99,
          "img_slug": "https://cdn.shopify.com/s/files/1/0202/3990/products/Bras_Highback_Wood_Base_Lounge_Chair.jpg?v=1483052223",
          "url": "https://stuff.com/product-name"
        },
        {
          "product_id": "PID_2982",
          "product_name": "Desk 1",
          "product_type": "PHYSICAL",
          "quantity": 1,
          "category": "desks",
          "price": 119.99,
          "img_slug": "https://cdn.shopify.com/s/files/1/2100/4737/products/DES01-2_900x.png?v=1510673387",
          "url": "https://stuff.com/product-name"
        }
      ],
      "sub_total": 1119.98,
      "tax": 5.9,
      "shipping": 7.00,
      "total": 1182.97
    },
    {
      "status": 1,
      "order_id": "10233",
      "customer_name": "Brad Chesney",
      "customer_comment": "",
      "products": [
        {
          "product_id": "PID_2980",
          "product_name": "Tea Kettle",
          "product_type": "PHYSICAL",
          "quantity": 10,
          "category": "accessories",
          "price": 1.99,
          "description": "This accessory could have destroyed you but it decided that humans deserve a chance to fail.",
          "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
          "url": "https://stuff.com/product-name"
        }
      ],
      "sub_total": 19.9,
      "tax": .99,
      "shipping": 7.99,
      "total": 28.88
    },
    {
      "status": 3,
      "order_id": "10232",
      "customer_name": "Tim Johnson",
      "customer_comment": "Shipping address changed",
      "products": [
        {
          "product_id": "PID_2980",
          "product_name": "Tea Kettle",
          "product_type": "PHYSICAL",
          "quantity": 5,
          "category": "accessories",
          "price": 1.99,
          "description": "This accessory could have destroyed you but it decided that humans deserve a chance to fail.",
          "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
          "url": "https://stuff.com/product-name"
        }
      ],
      "sub_total": 9.95,
      "tax": .49,
      "shipping": 7.99,
      "total": 18.43
    },
    {
      "status": 4,
      "order_id": "10231",
      "customer_name": "Tim Johnson",
      "customer_comment": "Shipping address changed",
      "products": [
        {
          "product_id": "PID_2980",
          "product_name": "Tea Kettle",
          "product_type": "PHYSICAL",
          "quantity": 5,
          "category": "accessories",
          "price": 1.99,
          "description": "This accessory could have destroyed you but it decided that humans deserve a chance to fail.",
          "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
          "url": "https://stuff.com/product-name"
        }
      ],
      "sub_total": 9.95,
      "tax": .49,
      "shipping": 7.99,
      "total": 18.43
    },
    {
      "status": 6,
      "order_id": "10230",
      "customer_name": "Shay Ericson",
      "customer_comment": "",
      "products": [
        {
          "product_id": "PID_2980",
          "product_name": "Tea Kettle",
          "product_type": "PHYSICAL",
          "quantity": 5,
          "category": "accessories",
          "price": 1.99,
          "description": "This accessory could have destroyed you but it decided that humans deserve a chance to fail.",
          "img_slug": "https://images-na.ssl-images-amazon.com/images/I/71MEIX1jvEL._SX355_.jpg",
          "url": "https://stuff.com/product-name"
        }
      ],
      "sub_total": 9.95,
      "tax": .49,
      "shipping": 7.99,
      "total": 18.43
    }
  ]);
});

module.exports = router;
