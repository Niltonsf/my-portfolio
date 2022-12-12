"use strict";
exports.__esModule = true;
var react_1 = require("react");
var drei_1 = require("@react-three/drei");
var fiber_1 = require("@react-three/fiber");
var r3f_perf_1 = require("r3f-perf");
var leva_1 = require("leva");
var ObjectForReference_1 = require("./components/ObjectForReference");
var THREE = require("three");
var Room_1 = require("./components/Room");
function Experience() {
    var orbitControlsRef = react_1.useRef();
    var invisibleObjectRef = react_1.useRef();
    var camera = fiber_1.useThree().camera;
    var focusOnHtml = leva_1.useControls({
        focusOnHtml: false
    }).focusOnHtml;
    react_1.useEffect(function () {
        if (focusOnHtml) {
            orbitControlsRef.current.object.position.set(-1.5, 1.9, 0);
            camera.lookAt(invisibleObjectRef.current.position);
        }
        else {
            orbitControlsRef.current.reset();
            orbitControlsRef.current.target.set(0, 1, 0);
        }
    }, [focusOnHtml]);
    return (React.createElement(React.Fragment, null,
        React.createElement(r3f_perf_1.Perf, { position: "top-left" }),
        React.createElement(drei_1.OrbitControls, { ref: orbitControlsRef, makeDefault: true, target: [0, 1, 0], enabled: !focusOnHtml }),
        React.createElement(ObjectForReference_1.ObjectForReference, { meshRef: invisibleObjectRef, position: new THREE.Vector3(-4, 1.7, 0) }),
        React.createElement(Room_1["default"], null)));
}
exports["default"] = Experience;
