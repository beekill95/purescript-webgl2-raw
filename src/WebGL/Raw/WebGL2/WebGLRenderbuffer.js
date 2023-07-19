"use strict";

export function js_getInternalformatParameterInt32Array(gl
    , target
    , internalformat
    , pname
) {
    var res = gl.getInternalformatParameter(
        target,
        internalformat,
        pname
    );
    if (res !== null) {
        if (!(res instanceof Int32Array)) {
            throw new TypeError(
                "js_getInternalformatParameterInt32Array: expected value of type `Maybe Int32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_renderbufferStorageMultisample(gl
    , target
    , samples
    , internalformat
    , width
    , height
) {
    gl.renderbufferStorageMultisample(
        target,
        samples,
        internalformat,
        width,
        height
    );
}
