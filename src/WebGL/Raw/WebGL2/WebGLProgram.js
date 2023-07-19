"use strict";

export function js_getFragDataLocation(gl, program, name) {
    var int0 = (gl.getFragDataLocation(program, name) | 0);
    return int0;
}

export function js_getProgramParameterGLenum(gl, program, pname) {
    var res = gl.getProgramParameter(
        program,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getProgramParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}
