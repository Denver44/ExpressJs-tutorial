"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var homeController_1 = require("../../controllers/homeController");
var middleware_1 = require("../../middleware/middleware");
var homeRouter = (0, express_1.Router)();
homeRouter.route('/').get(middleware_1.requireAuth, homeController_1.getHomePage);
homeRouter.route('/logout').get(homeController_1.getLogout);
exports.default = homeRouter;
