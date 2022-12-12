"use strict";
exports.__esModule = true;
var Experience_1 = require("./Experience");
var fiber_1 = require("@react-three/fiber");
var react_1 = require("react");
var drei_1 = require("@react-three/drei");
var leva_1 = require("leva");
var onCreated = function (state) {
    state.gl.domElement.style.position = "absolute";
    state.gl.domElement.style.zIndex = 10;
};
function MainExperience() {
    return (React.createElement(React.Fragment, null,
        React.createElement(leva_1.Leva, null),
        React.createElement(react_1.Suspense, null,
            React.createElement(fiber_1.Canvas, { eventSource: document.getElementById("root"), camera: {
                    fov: 55,
                    near: 0.1,
                    far: 2000,
                    position: [4, 3.5, 6]
                }, onCreated: onCreated },
                React.createElement(Experience_1["default"], null))),
        React.createElement(drei_1.Loader, null)));
}
exports["default"] = MainExperience;
