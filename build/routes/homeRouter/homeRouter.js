"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homeController_1 = require("../../controllers/homeController");
var homeRouter = (0, express_1.Router)();
homeRouter.get('/', homeController_1.homePageController);
exports.default = homeRouter;
