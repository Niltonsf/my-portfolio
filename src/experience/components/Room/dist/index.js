"use strict";
exports.__esModule = true;
var drei_1 = require("@react-three/drei");
var Chair_1 = require("../Chair");
var Monitor_1 = require("../Monitor");
var StaticRoom_1 = require("../StaticRoom");
function Room() {
    // Loading models
    var nodes = drei_1.useGLTF("./models/room/room.glb").nodes;
    var bakedTexture = drei_1.useTexture("./models/room/baked.png");
    bakedTexture.flipY = false;
    return (React.createElement(React.Fragment, null,
        React.createElement(StaticRoom_1["default"], { geometry: nodes.room.geometry, bakedTexture: bakedTexture }),
        React.createElement(Chair_1["default"], { geometry: nodes.chair.geometry, bakedTexture: bakedTexture }),
        React.createElement(Monitor_1["default"], { geometry: nodes.monitor.geometry, screen: nodes.screen, bakedTexture: bakedTexture })));
}
exports["default"] = Room;
