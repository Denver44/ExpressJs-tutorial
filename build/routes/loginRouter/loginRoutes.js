"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginController_1 = require("../../controllers/loginController");
var loginRouter = (0, express_1.Router)();
loginRouter.get('/', loginController_1.loginHandler);
exports.default = loginRouter;
