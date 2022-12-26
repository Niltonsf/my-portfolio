// eslint-disable-next-line import/no-anonymous-default-export
export default /* glsl */
`
uniform float uAlpha;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
}
`;
