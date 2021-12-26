"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var requireAuth = function (req, res, next) {
    var _a;
    if ((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not allowed');
};
exports.requireAuth = requireAuth;
