"use strict";

export function js_drawBuffersWEBGL(webgl_draw_buffers, buffers) {
    webgl_draw_buffers.drawBuffersWEBGL(buffers);
}

export function js_getExtensionWEBGL_draw_buffers(gl) {
    return gl.getExtension("WEBGL_draw_buffers");
}
