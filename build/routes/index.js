"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = exports.loginRouter = void 0;
var loginRoute_1 = __importDefault(require("./loginRouter/loginRoute"));
exports.loginRouter = loginRoute_1.default;
var homeRoute_1 = __importDefault(require("./homeRouter/homeRoute"));
exports.homeRouter = homeRoute_1.default;
