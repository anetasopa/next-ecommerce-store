"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.down = exports.up = void 0;
var products = [
    {
        id: 1,
        name: 'Fantasia Blend',
        text1: 'Immerse yourself in a fantastical journey with this whimsical blend.',
        text2: 'Discover a harmonious combination of smooth flavors, dancing with hints of chocolate and caramel.',
        text3: 'Creating a truly magical coffee experience.',
        type: 'bean',
        price: 45
    },
    {
        id: 2,
        name: 'Dream Bean Delight',
        text1: 'Awaken your senses with this delightful blend that transcends reality.',
        text2: 'Experience a heavenly fusion of velvety textures, nutty undertones, and a hint of vanilla.',
        text3: 'Transforming your coffee dreams into a blissful reality.',
        type: 'bean',
        price: 78
    },
    {
        id: 3,
        name: 'Enchanted Roast',
        text1: 'Indulge in the enchantment of this captivating roast.',
        text2: "With every sip, you'll be spellbound by its deep, robust flavors, accented by dark chocolate and a touch of smokiness.",
        text3: 'Leaving you under its bewitching charm.',
        type: 'bean',
        price: 37
    },
    {
        id: 4,
        name: 'Mythic Mornings',
        text1: 'Begin your day with a mythical awakening.',
        text2: 'This invigorating blend combines vibrant notes of citrus and berries, harmonizing with a subtle sweetness and a smooth finish.',
        text3: 'Ensuring every morning feels like an epic adventure.',
        type: 'bean',
        price: 98
    },
    {
        id: 5,
        name: 'SwiftCup Supreme',
        text1: 'Experience instant coffee perfection with SwiftCup Supreme.',
        text2: 'This premium blend offers a smooth and robust flavor profile.',
        text3: 'Ensuring a quick and satisfying coffee experience without compromising on quality.',
        type: 'instant',
        price: 27
    },
    {
        id: 6,
        name: 'QuickMorn Magic',
        text1: 'Start your mornings with QuickMorn Magic, the ultimate instant coffee companion.',
        text2: 'This enchanting blend combines the perfect balance of boldness and smoothness.',
        text3: 'Providing a magical awakening to kickstart your day.',
        type: 'instant',
        price: 56
    },
    {
        id: 7,
        name: 'FlashBrew Elixir',
        text1: 'Experience the power of instant coffee with FlashBrew Elixir.',
        text2: 'This unique blend captivates with its lightning-fast preparation and extraordinary taste.',
        text3: 'Enjoy a bold and invigorating coffee experience that energizes you in an instant.',
        type: 'instant',
        price: 56
    },
    {
        id: 8,
        name: 'InstaRoast Delight',
        text1: 'Indulge in the convenience of InstaRoast Delight.',
        text2: 'This instant coffee delights your taste buds with a rich and aromatic brew.',
        text3: 'Delivering a balanced blend of flavors that will make every sip a moment of pure pleasure.',
        type: 'instant',
        price: 56
    },
    {
        id: 9,
        name: 'JavaPod Bliss',
        text1: 'Indulge in a moment of pure bliss with JavaPod.',
        text2: 'Each capsule contains a harmonious blend of meticulously selected coffee beans.',
        text3: 'Delivering a velvety smooth and rich espresso that will transport your taste buds to a state of pure delight.',
        type: 'capsules',
        price: 41
    },
    {
        id: 10,
        name: 'CapsuBrew Delight',
        text1: 'Unlock a world of delightful flavors with CapsuBrew.',
        text2: 'These innovative coffee capsules offer a symphony of tastes.',
        text3: 'Ranging from subtle notes of caramel to hints of exotic spices, creating an extraordinary coffee experience that will leave you craving more.',
        type: 'capsules',
        price: 18
    },
    {
        id: 11,
        name: 'AromaCaps Encore',
        text1: 'Immerse yourself in a captivating coffee symphony with AromaCaps.',
        text2: 'These carefully crafted capsules release an irresistible aroma that fills the air as they brew.',
        text3: 'leading to a captivating cup of coffee that combines depth, richness, and an exquisite aftertaste.',
        type: 'capsules',
        price: 36
    },
    {
        id: 12,
        name: 'BrewClique Euphoria',
        text1: 'Join the exclusive BrewClique and discover a euphoric coffee experience.',
        text2: 'Each capsule is a work of art, blending premium coffee beans from around the world to create a sublime espresso with a velvety texture.',
        text3: 'Complex flavors, and an enchanting aroma that will leave you in a state of pure bliss.',
        type: 'capsules',
        price: 24
    },
];
function up(sql) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, products_1, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, products_1 = products;
                    _a.label = 1;
                case 1:
                    if (!(_i < products_1.length)) return [3 /*break*/, 4];
                    product = products_1[_i];
                    return [4 /*yield*/, sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    INSERT INTO products\n      (name, text1, text2, text3, type, price)\n    VALUES\n      (", ", ", ", ", ", ", ", ", ", ", ")\n  "], ["\n    INSERT INTO products\n      (name, text1, text2, text3, type, price)\n    VALUES\n      (", ", ", ", ", ", ", ", ", ", ", ")\n  "])), product.name, product.text1, product.text2, product.text3, product.type, product.price)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.up = up;
function down(sql) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, products_2, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, products_2 = products;
                    _a.label = 1;
                case 1:
                    if (!(_i < products_2.length)) return [3 /*break*/, 4];
                    product = products_2[_i];
                    return [4 /*yield*/, sql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      DELETE FROM products WHERE id = ", "\n  "], ["\n      DELETE FROM products WHERE id = ", "\n  "])), product.id)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.down = down;
var templateObject_1, templateObject_2;
