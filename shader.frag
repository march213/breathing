#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform sampler2D displacement1;

varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b) {
    return vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}

void main(void)
{
    vec2 uv = v_texcoord;
    
    // didn't get why it works. Why it moves colors and what part a texture plays
    vec2 point = fract(uv * 0.1 + (u_time * 0.05));
    // i understand that it moved the texture, but why it moves colors?
    vec4 displacementColor = texture2D(displacement1, point);
    //
    
    vec4 tl = rgb(251.0, 41.0, 212.0);
    vec4 tr = rgb(0.0, 255.0, 224.0);
    vec4 bl = rgb(250.0, 255.0, 0.0);
    vec4 br = rgb(231.0, 244.0, 255.0);
    
    float displacementX = mix(-0.5, 0.5, displacementColor.r);
    float displacementY = mix(-0.5, 0.5, displacementColor.r);

    vec4 color = mix(
        mix(tl, tr, uv.x + displacementX),
        mix(bl, br, uv.x - displacementX),
        uv.y + displacementY
    );
    
    gl_FragColor = color;
}