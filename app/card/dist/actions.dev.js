"use strict";
'use server';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateQuantity = createOrUpdateQuantity;
exports.addQuantity = addQuantity;
exports.removeQuantity = removeQuantity;

var _headers = require("next/headers");

var _cookies = require("../../util/cookies");

var _json = require("../../util/json");

function createOrUpdateQuantity(productId, quantity) {
  var productQuantityCookie, productQuantities, quantityToUpdate;
  return regeneratorRuntime.async(function createOrUpdateQuantity$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          productQuantityCookie = (0, _cookies.getCookie)('cart');
          productQuantities = !productQuantityCookie ? [] : (0, _json.parseJson)(productQuantityCookie);
          quantityToUpdate = productQuantities.find(function (quantityNumber) {
            return quantityNumber.id === productId;
          });

          if (quantityToUpdate) {
            quantityToUpdate.quantity = Number(quantityToUpdate.quantity) + Number(quantity);
          } else {
            productQuantities.push({
              id: productId,
              quantity: quantity
            });
          }

          _context.next = 6;
          return regeneratorRuntime.awrap((0, _headers.cookies)().set('cart', JSON.stringify(productQuantities)));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function addQuantity(productId, quantity) {
  var productQuantityCookie, productQuantities, addValueQuantity;
  return regeneratorRuntime.async(function addQuantity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          productQuantityCookie = (0, _cookies.getCookie)('cart');
          productQuantities = !productQuantityCookie ? [] : (0, _json.parseJson)(productQuantityCookie);
          addValueQuantity = productQuantities.find(function (quantityNumber) {
            return quantityNumber.id === productId;
          });

          if (addValueQuantity) {
            addValueQuantity.quantity = Number(addValueQuantity.quantity) + Number(quantity);
          } else {
            productQuantities.push({
              id: productId,
              quantity: quantity
            });
          }

          _context2.next = 6;
          return regeneratorRuntime.awrap((0, _headers.cookies)().set('cart', JSON.stringify(productQuantities)));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function removeQuantity(productId, quantity) {
  var productQuantityCookie, productQuantities, removeValueQuantity;
  return regeneratorRuntime.async(function removeQuantity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          productQuantityCookie = (0, _cookies.getCookie)('cart');
          productQuantities = !productQuantityCookie ? [] : (0, _json.parseJson)(productQuantityCookie);
          removeValueQuantity = productQuantities.find(function (quantityNumber) {
            return quantityNumber.id === productId;
          });

          if (removeValueQuantity) {
            removeValueQuantity.quantity = Number(removeValueQuantity.quantity) - Number(quantity);
          } else {
            productQuantities.push({
              id: productId,
              quantity: quantity
            });
          }

          _context3.next = 6;
          return regeneratorRuntime.awrap((0, _headers.cookies)().set('cart', JSON.stringify(productQuantities)));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}