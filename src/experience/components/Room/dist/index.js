"use strict";
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var react_1 = require("react");
var Chair_1 = require("../Chair");
var Floor_1 = require("../Floor");
var Macbook_1 = require("../Macbook");
var Monitor_1 = require("../Monitor");
var OverlayLoading_1 = require("../OverlayLoading");
var StaticRoom_1 = require("../StaticRoom");
function Room(_a) {
    var setIsPointerOnHtml = _a.setIsPointerOnHtml, isFocusOnHtml = _a.isFocusOnHtml, setOrbitControlsDisabled = _a.setOrbitControlsDisabled, setHiddenLeva = _a.setHiddenLeva;
    // Hide overaly
    var _b = react_1.useState(false), hideOverlay = _b[0], setHideOverlay = _b[1];
    // Loading models
    var nodes = drei_1.useGLTF("./models/room/room.glb").nodes;
    var bakedTexture = drei_1.useTexture("./models/room/baked.png");
    bakedTexture.flipY = false;
    return (React.createElement(React.Fragment, null,
        !hideOverlay && (React.createElement(OverlayLoading_1["default"], { setOrbitControlsDisabled: setOrbitControlsDisabled, setHiddenLeva: setHiddenLeva, setHideOverlay: setHideOverlay })),
        React.createElement(react_1.Suspense, null,
            React.createElement(StaticRoom_1["default"], { geometry: nodes.room.geometry, bakedTexture: bakedTexture }),
            React.createElement(Chair_1["default"], { geometry: nodes.chair.geometry, bakedTexture: bakedTexture }),
            React.createElement(Monitor_1["default"], { geometry: nodes.monitor.geometry, screen: nodes.screen, bakedTexture: bakedTexture, setIsPointerOnHtml: setIsPointerOnHtml, isFocusOnHtml: isFocusOnHtml }),
            React.createElement(Macbook_1["default"], { geometry: nodes.macbook.geometry, bakedTexture: bakedTexture }),
            React.createElement(Floor_1["default"], { geometry: nodes.Floor.geometry, bakedTexture: bakedTexture }))));
}
exports["default"] = Room;
