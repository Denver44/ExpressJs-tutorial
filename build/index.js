"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var cookie_session_1 = __importDefault(require("cookie-session"));
var PORT = 3000;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded()); // This actually helps us to get the body from request
app.use((0, cookie_session_1.default)({ keys: ['secretSession'] })); // This helps us to get session from request
app.use('/login', index_1.loginRouter);
app.use('/', index_1.homeRouter);
app.listen(PORT, function () {
    console.log('Listening on Port ', PORT);
});
