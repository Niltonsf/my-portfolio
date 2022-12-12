"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
function Chair(_a) {
    var geometry = _a.geometry, bakedTexture = _a.bakedTexture;
    var chairRef = react_1.useRef();
    fiber_1.useFrame(function (state, delta) {
        // chairRef.current.rotation.y =
        //   Math.sin(state.clock.elapsedTime * 0.6) * 0.4 + 900;
    });
    return (React.createElement("mesh", { ref: chairRef, geometry: geometry },
        React.createElement("meshBasicMaterial", { map: bakedTexture })));
}
exports["default"] = Chair;
