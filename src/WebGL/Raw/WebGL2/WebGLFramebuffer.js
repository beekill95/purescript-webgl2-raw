"use strict";

export function js_blitFramebuffer(gl) {
    return function(srcX0
        , srcY0
        , srcX1
        , srcY1
        , dstX0
        , dstY0
        , dstX1
        , dstY1
        , mask
        , filter
    ) {
        gl.blitFramebuffer(
            srcX0,
            srcY0,
            srcX1,
            srcY1,
            dstX0,
            dstY0,
            dstX1,
            dstY1,
            mask,
            filter
        );
    };
}

export function js_framebufferTextureLayer(gl
    , target
    , attachment
    , texture
    , level
    , layer
) {
    gl.framebufferTextureLayer(target, attachment, texture, level, layer);
}

export function js_invalidateFramebuffer(gl, target, attachments) {
    gl.invalidateFramebuffer(target, attachments);
}

export function js_invalidateSubFramebuffer(gl
    , target
    , attachments
    , x
    , y
    , width
    , height
) {
    gl.invalidateSubFramebuffer(target, attachments, x, y, width, height);
}

export function js_readBuffer(gl, src) {
    gl.readBuffer(src);
}
