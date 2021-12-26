"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = exports.getLoginDetails = void 0;
var formTemplate = "\n<form method=\"POST\">\n  <div>\n    <label>Email</label>\n    <input name=\"email\" />\n  </div>\n  <div>\n    <label>Password</label>\n    <input name=\"password\" type=\"password\" />\n  </div>\n  <button>Submit</button>\n</form>\n";
var getLoginDetails = function (req, res) {
    res.send(formTemplate);
};
exports.getLoginDetails = getLoginDetails;
var loginHandler = function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send("Form Submitted Successfully email+pass=".concat(email + password));
};
exports.loginHandler = loginHandler;
