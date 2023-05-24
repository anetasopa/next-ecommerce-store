"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.sql = void 0;
require("server-only");
var dotenv_safe_1 = require("dotenv-safe");
var postgres_1 = require("postgres");
dotenv_safe_1.config();
// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
    if (!globalThis.postgresSqlClient) {
        globalThis.postgresSqlClient = postgres_1["default"]({
            transform: __assign(__assign({}, postgres_1["default"].camel), { undefined: null })
        });
    }
    return globalThis.postgresSqlClient;
}
// Connect to PostgreSQL
exports.sql = connectOneTimeToDatabase();
