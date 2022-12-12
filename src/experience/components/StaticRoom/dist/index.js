"use strict";
exports.__esModule = true;
var react_1 = require("react");
function StaticRoom(_a) {
    var geometry = _a.geometry, bakedTexture = _a.bakedTexture;
    return (react_1["default"].createElement("mesh", { geometry: geometry },
        react_1["default"].createElement("meshBasicMaterial", { map: bakedTexture })));
}
exports["default"] = StaticRoom;
