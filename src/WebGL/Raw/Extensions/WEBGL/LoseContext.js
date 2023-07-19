"use strict";

export function js_loseContext(webgl_lose_context) {
    webgl_lose_context.loseContext();
}

export function js_restoreContext(webgl_lose_context) {
    webgl_lose_context.restoreContext();
}

export function js_getExtensionWEBGL_lose_context(gl) {
    var result;
    done:
    {
        var alts = [
            "WEBGL_lose_context",
            "WEBKIT_WEBGL_lose_context",
            "MOZ_WEBGL_lose_context"
        ];
        var i = 0;
        for (i = 0; i < alts.length; i += 1) {
            result = gl.getExtension(alts[i]);
            if (result != null) {
                break done;
            }
        }
    }
    return result;
}
