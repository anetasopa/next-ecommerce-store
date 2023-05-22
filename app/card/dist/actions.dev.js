"use strict";
'use server';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeItem = removeItem;
exports.addQuantity = addQuantity;
exports.removeQuantity = removeQuantity;

var _headers = require("next/headers");

var _cookies = require("../../util/cookies");

var _json = require("../../util/json");

function removeItem(item) {
  var productQuantityCookie, productQuantities, removeCart;
  return regeneratorRuntime.async(function removeItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          productQuantityCookie = (0, _cookies.getCookie)('cart'); // Get cookie from client as string

          productQuantities = !productQuantityCookie ? [] : (0, _json.parseJson)(productQuantityCookie); // Check cookie and return array of objects

          removeCart = productQuantities.filter(function (product) {
            return product.id !== item.id;
          });
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _headers.cookies)().set('cart', JSON.stringify(removeCart)));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function addQuantity(item) {
  var productQuantityCookie, productQuantities, addValueQuantity;
  return regeneratorRuntime.async(function addQuantity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          productQuantityCookie = (0, _cookies.getCookie)('cart');
          productQuantities = !productQuantityCookie ? [] : (0, _json.parseJson)(productQuantityCookie);
          addValueQuantity = productQuantities.find(function (product) {
            return product.id === item.id;
          });
          addValueQuantity.quantity += 1;
          _context2.next = 6;
          return regeneratorRuntime.awrap((0, _headers.cookies)().set('cart', JSON.stringify(productQuantities)));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function removeQuantity(item) {
  var productQuantityCookie, productQuantities, removeValueQuantity;
  return regeneratorRuntime.async(function removeQuantity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          productQuantityCookie = (0, _cookies.getCookie)('cart');
          productQuantities = !productQuantityCookie ? [] : (0, _json.parseJson)(productQuantityCookie);
          removeValueQuantity = productQuantities.find(function (product) {
            return product.id === item.id;
          });
          removeValueQuantity.quantity -= 1;
          _context3.next = 6;
          return regeneratorRuntime.awrap((0, _headers.cookies)().set('cart', JSON.stringify(productQuantities)));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}