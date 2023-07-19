"use strict";

export function js_createTransformFeedback(gl) {
    return gl.createTransformFeedback();
}

export function js_deleteTransformFeedback(gl, tf) {
    gl.deleteTransformFeedback(tf);
}

export function js_isTransformFeedback(gl, tf) {
    return gl.isTransformFeedback(tf);
}

export function js_bindTransformFeedback(gl, target, tf) {
    gl.bindTransformFeedback(target, tf);
}

export function js_beginTransformFeedback(gl, primitiveMode) {
    gl.beginTransformFeedback(primitiveMode);
}

export function js_endTransformFeedback(gl) {
    gl.endTransformFeedback();
}

export function js_transformFeedbackVaryings(gl
    , program
    , varyings
    , bufferMode
) {
    gl.transformFeedbackVaryings(program, varyings, bufferMode);
}

export function js_getTransformFeedbackVarying(gl, program, index) {
    return gl.getTransformFeedbackVarying(program, index);
}

export function js_pauseTransformFeedback(gl) {
    gl.pauseTransformFeedback();
}

export function js_resumeTransformFeedback(gl) {
    gl.resumeTransformFeedback();
}
