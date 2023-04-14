"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
var app = (0, express_1.default)();
// middlewares
app.use('/auth', AuthRoutes_1.default);
// routes
app.get('/', function (req, res, next) {
    res.send('server working');
});
// server setup
mongoose_1.default
    .connect("mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASS, "@").concat(process.env.DB_URI, "/test"))
    .then(function () {
    (0, console_1.log)('db connected');
    var PORT = process.env.PORT || 3500;
    app.listen(PORT, function () {
        (0, console_1.log)('server connected to port', PORT);
    });
})
    .catch(function (err) {
    (0, console_1.log)(err);
});
