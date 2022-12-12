"use strict";
exports.__esModule = true;
exports.ObjectForReference = void 0;
function ObjectForReference(_a) {
    // This is an invisible object for reference, so we can make the camera look at a place
    var meshRef = _a.meshRef, position = _a.position;
    return (React.createElement("mesh", { ref: meshRef, position: position, visible: false },
        React.createElement("planeGeometry", null)));
}
exports.ObjectForReference = ObjectForReference;
