"use strict";

export function js_bindRenderbuffer(gl, target, renderbuffer) {
    gl.bindRenderbuffer(target, renderbuffer);
}

export function js_createRenderbuffer(gl) {
    return gl.createRenderbuffer();
}

export function js_deleteRenderbuffer(gl, renderbuffer) {
    gl.deleteRenderbuffer(renderbuffer);
}

export function js_getRenderbufferParameterGLenum(gl, target, pname) {
    var res = gl.getRenderbufferParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getRenderbufferParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getRenderbufferParameterGLint(gl, target, pname) {
    var res = gl.getRenderbufferParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getRenderbufferParameterGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_isRenderbuffer(gl, renderbuffer) {
    return gl.isRenderbuffer(renderbuffer);
}

export function js_renderbufferStorage(gl
    , target
    , internalformat
    , width
    , height
) {
    gl.renderbufferStorage(target, internalformat, width, height);
}
