"use strict";

export function js_getTranslatedShaderSource(webgl_debug_shaders, shader) {
    return webgl_debug_shaders.getTranslatedShaderSource(shader);
}

export function js_getExtensionWEBGL_debug_shaders(gl) {
    return gl.getExtension("WEBGL_debug_shaders");
}
