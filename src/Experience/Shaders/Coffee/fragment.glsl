#pragma glslify: perlin2d = require('../Partials/perlin2d.glsl');

varying vec2 vUv;

uniform vec3 uColor;
uniform vec2 uUvFrequency;
uniform float uTime;
uniform float uTimeFrequency;


void main() {
	vec2 uv = vUv * uUvFrequency;
	uv.y += uTime * uTimeFrequency;

	float borderAlpha = min(vUv.x * 3.0, (1.0 + vUv.x) * 3.0);
	borderAlpha = borderAlpha * (1.0 + vUv.y);

	float perlin = perlin2d(uv);
	perlin *= borderAlpha;
	perlin *= 0.6;
	perlin = min(perlin, 1.0);

	gl_FragColor = vec4(uColor, perlin);
}