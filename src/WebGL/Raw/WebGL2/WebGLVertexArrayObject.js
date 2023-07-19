"use strict";

export function js_createVertexArray(gl) {
    return gl.createVertexArray();
}

export function js_deleteVertexArray(gl, vertexArray) {
    gl.deleteVertexArray(vertexArray);
}

export function js_isVertexArray(gl, vertexArray) {
    return gl.isVertexArray(vertexArray);
}

export function js_bindVertexArray(gl, array) {
    gl.bindVertexArray(array);
}
