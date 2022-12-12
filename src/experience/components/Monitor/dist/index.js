"use strict";
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var THREE = require("three");
var main_1 = require("../../../webpage/main");
function Monitor(_a) {
    var geometry = _a.geometry, screen = _a.screen, bakedTexture = _a.bakedTexture;
    return (React.createElement(React.Fragment, null,
        React.createElement("primitive", { object: screen },
            React.createElement("group", { position: [-2.57, 1.8, -0.01], "rotation-y": 1.565 },
                React.createElement(drei_1.Html, { as: "div", transform: true, prepend: true, scale: 0.35, wrapperClass: "htmlScreen", distanceFactor: 1.17, zIndexRange: [0, 0] },
                    React.createElement(main_1["default"], null)),
                React.createElement("mesh", null,
                    React.createElement("planeGeometry", { args: [1.535, 0.69] }),
                    React.createElement("meshPhysicalMaterial", { blending: THREE.NoBlending, opacity: 0, color: "black", side: THREE.DoubleSide })))),
        React.createElement("mesh", { geometry: geometry },
            React.createElement("meshBasicMaterial", { map: bakedTexture }))));
}
exports["default"] = Monitor;
