"use strict";

export function js_uniform1ui(gl, location, v0) {
    gl.uniform1ui(location, v0);
}

export function js_uniform2ui(gl, location, v0, v1) {
    gl.uniform2ui(location, v0, v1);
}

export function js_uniform3ui(gl, location, v0, v1, v2) {
    gl.uniform3ui(location, v0, v1, v2);
}

export function js_uniform4ui(gl, location, v0, v1, v2, v3) {
    gl.uniform4ui(location, v0, v1, v2, v3);
}

export function js_uniform1fv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform1fv(location, data0, srcOffset, srcLength);
}

export function js_uniform2fv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform2fv(location, data0, srcOffset, srcLength);
}

export function js_uniform3fv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform3fv(location, data0, srcOffset, srcLength);
}

export function js_uniform4fv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform4fv(location, data0, srcOffset, srcLength);
}

export function js_uniform1iv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform1iv(location, data0, srcOffset, srcLength);
}

export function js_uniform2iv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform2iv(location, data0, srcOffset, srcLength);
}

export function js_uniform3iv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform3iv(location, data0, srcOffset, srcLength);
}

export function js_uniform4iv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform4iv(location, data0, srcOffset, srcLength);
}

export function js_uniform1uiv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform1uiv(location, data0, srcOffset, srcLength);
}

export function js_uniform2uiv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform2uiv(location, data0, srcOffset, srcLength);
}

export function js_uniform3uiv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform3uiv(location, data0, srcOffset, srcLength);
}

export function js_uniform4uiv(gl, location, data0, srcOffset, srcLength) {
    gl.uniform4uiv(location, data0, srcOffset, srcLength);
}

export function js_uniformMatrix2fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix2fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix3x2fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix3x2fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix4x2fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix4x2fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix2x3fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix2x3fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix3fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix3fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix4x3fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix4x3fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix2x4fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix2x4fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix3x4fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix3x4fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_uniformMatrix4fv(gl
    , location
    , transpose
    , data0
    , srcOffset
    , srcLength
) {
    gl.uniformMatrix4fv(location, transpose, data0, srcOffset, srcLength);
}

export function js_getUniformGLuint(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getUniformGLuint: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getUniformUint32Array(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (!(res instanceof Uint32Array)) {
            throw new TypeError(
                "js_getUniformUint32Array: expected value of type `Maybe Uint32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}
