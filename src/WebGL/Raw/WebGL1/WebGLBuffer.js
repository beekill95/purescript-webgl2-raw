"use strict";

export function js_bindBuffer(gl, target, buffer) {
    gl.bindBuffer(target, buffer);
}

export function js_bufferDataSetSize(gl, target, size, usage) {
    gl.bufferData(target, size, usage);
}

export function js_bufferData(gl, target, data0, usage) {
    gl.bufferData(target, data0, usage);
}

export function js_bufferSubData(gl, target, offset, data0) {
    gl.bufferSubData(target, offset, data0);
}

export function js_createBuffer(gl) {
    return gl.createBuffer();
}

export function js_deleteBuffer(gl, buffer) {
    gl.deleteBuffer(buffer);
}

export function js_getBufferParameterGLenum(gl, target, pname) {
    var res = gl.getBufferParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getBufferParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getBufferParameterGLint(gl, target, pname) {
    var res = gl.getBufferParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getBufferParameterGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_isBuffer(gl, buffer) {
    return gl.isBuffer(buffer);
}
