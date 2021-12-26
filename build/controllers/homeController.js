"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogout = exports.getHomePage = void 0;
var getHomePage = function (req, res) {
    var _a;
    if ((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send("\n      <div>\n      <div> You are Logged In \uD83D\uDE04</div>\n      <a href=\"/logout\">Logout</a>\n      </div>\n      ");
    }
    else {
        res.send("\n      <div>\n      <div> You are not Logged In</div>\n      <a href=\"/login\">Login</a>\n      </div>\n      ");
    }
};
exports.getHomePage = getHomePage;
var getLogout = function (req, res) {
    req.session = undefined;
    res.redirect('/');
};
exports.getLogout = getLogout;
