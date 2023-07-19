"use strict";

export function js_fenceSync(gl, condition, flags) {
    return gl.fenceSync(condition, flags);
}

export function js_isSync(gl, sync) {
    return gl.isSync(sync);
}

export function js_deleteSync(gl, sync) {
    gl.deleteSync(sync);
}

export function js_clientWaitSync(gl, sync, flags, timeout) {
    return gl.clientWaitSync(sync, flags, timeout);
}

export function js_waitSync(gl, sync, flags, timeout) {
    gl.waitSync(sync, flags, timeout);
}

export function js_getSyncParameterGLbitfield(gl, sync, pname) {
    var res = gl.getSyncParameter(
        sync,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getSyncParameterGLbitfield: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getSyncParameterGLenum(gl, sync, pname) {
    var res = gl.getSyncParameter(
        sync,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getSyncParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}
