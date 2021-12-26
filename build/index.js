"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send("\n    <h1> Hi there!</h1>");
});
app.listen(PORT, function () {
    console.log('Listening on Port ', PORT);
});
