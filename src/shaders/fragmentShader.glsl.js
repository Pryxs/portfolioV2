
const fragmentShader = `
uniform float amount;
uniform vec3 customColor;
uniform sampler2D tDiffuse;
varying vec2 vUv;

float random( vec2 p )
{
  vec2 K1 = vec2(
    23.14069263277926, // e^pi (Gelfond's constant)
    2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
  );
return fract( cos( dot(p,K1) ) * 12345.6789 );
}

void main() {
  vec4 color = texture2D( tDiffuse, vUv );
  vec2 uvRandom = vUv;
  uvRandom.y *= random(vec2(uvRandom.y,amount));
  color.rgb = customColor;
  color.rgb += random(uvRandom)*0.12;
  gl_FragColor = vec4( color );
}
`

export default fragmentShader;