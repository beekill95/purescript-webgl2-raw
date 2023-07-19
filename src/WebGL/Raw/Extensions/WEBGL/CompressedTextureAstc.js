"use strict";

export function js_getSupportedProfiles(webgl_compressed_texture_astc) {
    return webgl_compressed_texture_astc.getSupportedProfiles();
}

export function js_getExtensionWEBGL_compressed_texture_astc(gl) {
    return gl.getExtension("WEBGL_compressed_texture_astc");
}
