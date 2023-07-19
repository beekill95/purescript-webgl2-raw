"use strict";

export function js_attachShader(gl, program, shader) {
    gl.attachShader(program, shader);
}

export function js_bindAttribLocation(gl, program, index, name) {
    gl.bindAttribLocation(program, index, name);
}

export function js_deleteProgram(gl, program) {
    gl.deleteProgram(program);
}

export function js_detachShader(gl, program, shader) {
    gl.detachShader(program, shader);
}

export function js_getAttachedShaders(gl, program) {
    return gl.getAttachedShaders(program);
}

export function js_getProgramParameterGLboolean(gl, program, pname) {
    var res = gl.getProgramParameter(
        program,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getProgramParameterGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getProgramParameterGLint(gl, program, pname) {
    var res = gl.getProgramParameter(
        program,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getProgramParameterGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    var mres;
    if (res == null) {
        mres = null;
    }
    else {
        var int0 = (res | 0);
        mres = int0;
    }
    return mres;
}

export function js_getProgramInfoLog(gl, program) {
    return gl.getProgramInfoLog(program);
}

export function js_isProgram(gl, program) {
    return gl.isProgram(program);
}

export function js_linkProgram(gl, program) {
    gl.linkProgram(program);
}

export function js_useProgram(gl, program) {
    gl.useProgram(program);
}

export function js_validateProgram(gl, program) {
    gl.validateProgram(program);
}
