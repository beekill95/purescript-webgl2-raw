"use strict";

export function js_bufferData(gl
    , target
    , srcData
    , usage
    , srcOffset
    , length
) {
    gl.bufferData(target, srcData, usage, srcOffset, length);
}

export function js_bufferSubData(gl
    , target
    , dstByteOffset
    , srcData
    , srcOffset
    , length
) {
    gl.bufferSubData(target, dstByteOffset, srcData, srcOffset, length);
}

export function js_copyBufferSubData(gl
    , readTarget
    , writeTarget
    , readOffset
    , writeOffset
    , size
) {
    gl.copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size);
}

export function js_getBufferSubData(gl
    , target
    , srcByteOffset
    , dstBuffer
    , dstOffset
    , length
) {
    gl.getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length);
}
