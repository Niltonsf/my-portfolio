"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
function IFrame(_a) {
    var _b, _c;
    var children = _a.children, props = __rest(_a, ["children"]);
    var _d = react_1.useState(null), contentRef = _d[0], setContentRef = _d[1];
    var mountNode = (_c = (_b = contentRef === null || contentRef === void 0 ? void 0 : contentRef.contentWindow) === null || _b === void 0 ? void 0 : _b.document) === null || _c === void 0 ? void 0 : _c.body;
    return (react_1["default"].createElement("iframe", __assign({}, props, { ref: setContentRef }), mountNode && react_dom_1.createPortal(children, mountNode)));
}
exports["default"] = IFrame;
