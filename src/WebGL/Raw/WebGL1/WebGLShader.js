"use strict";

export function js_compileShader(gl, shader) {
    gl.compileShader(shader);
}

export function js_createProgram(gl) {
    return gl.createProgram();
}

export function js_createShader(gl, type0) {
    return gl.createShader(type0);
}

export function js_deleteShader(gl, shader) {
    gl.deleteShader(shader);
}

export function js_getShaderParameterGLboolean(gl, shader, pname) {
    var res = gl.getShaderParameter(
        shader,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getShaderParameterGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getShaderParameterGLenum(gl, shader, pname) {
    var res = gl.getShaderParameter(
        shader,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getShaderParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getShaderPrecisionFormat(gl, shadertype, precisiontype) {
    return gl.getShaderPrecisionFormat(shadertype, precisiontype);
}

export function js_getShaderInfoLog(gl, shader) {
    return gl.getShaderInfoLog(shader);
}

export function js_getShaderSource(gl, shader) {
    return gl.getShaderSource(shader);
}

export function js_isShader(gl, shader) {
    return gl.isShader(shader);
}

export function js_shaderSource(gl, shader, source) {
    gl.shaderSource(shader, source);
}
