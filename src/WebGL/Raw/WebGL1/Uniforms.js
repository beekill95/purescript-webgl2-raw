"use strict";

export function js_getActiveUniform(gl, program, index) {
    return gl.getActiveUniform(program, index);
}

export function js_getUniformGLboolean(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getUniformGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getUniformGLfloat(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getUniformGLfloat: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getUniformGLint(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getUniformGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_getUniformGLbooleanArray(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Array]") {
            throw new TypeError(
                "js_getUniformGLbooleanArray: expected value of type `Maybe Array Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
        var i;
        var e;
        for (i = 0; i < res.length; i += 1) {
            e = res[i];
            if (Object.prototype.toString.call(e) !== "[object Boolean]") {
                throw new TypeError(
                    "js_getUniformGLbooleanArray: expected array of type `Boolean`, got array containing " + Object.prototype.toString.call(
                        e
                    )
                );
            }
        }
    }
    return res;
}

export function js_getUniformInt32Array(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (!(res instanceof Int32Array)) {
            throw new TypeError(
                "js_getUniformInt32Array: expected value of type `Maybe Int32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getUniformFloat32Array(gl, program, location) {
    var res = gl.getUniform(
        program,
        location
    );
    if (res !== null) {
        if (!(res instanceof Float32Array)) {
            throw new TypeError(
                "js_getUniformFloat32Array: expected value of type `Maybe Float32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getUniformLocation(gl, program, name) {
    return gl.getUniformLocation(program, name);
}

export function js_uniform1f(gl, location, x) {
    gl.uniform1f(location, x);
}

export function js_uniform2f(gl, location, x, y) {
    gl.uniform2f(location, x, y);
}

export function js_uniform3f(gl, location, x, y, z) {
    gl.uniform3f(location, x, y, z);
}

export function js_uniform4f(gl, location, x, y, z, w) {
    gl.uniform4f(location, x, y, z, w);
}

export function js_uniform1i(gl, location, x) {
    gl.uniform1i(location, x);
}

export function js_uniform2i(gl, location, x, y) {
    gl.uniform2i(location, x, y);
}

export function js_uniform3i(gl, location, x, y, z) {
    gl.uniform3i(location, x, y, z);
}

export function js_uniform4i(gl, location, x, y, z, w) {
    gl.uniform4i(location, x, y, z, w);
}

export function js_uniform1fv(gl, location, v) {
    gl.uniform1fv(location, v);
}

export function js_uniform2fv(gl, location, v) {
    gl.uniform2fv(location, v);
}

export function js_uniform3fv(gl, location, v) {
    gl.uniform3fv(location, v);
}

export function js_uniform4fv(gl, location, v) {
    gl.uniform4fv(location, v);
}

export function js_uniform1iv(gl, location, v) {
    gl.uniform1iv(location, v);
}

export function js_uniform2iv(gl, location, v) {
    gl.uniform2iv(location, v);
}

export function js_uniform3iv(gl, location, v) {
    gl.uniform3iv(location, v);
}

export function js_uniform4iv(gl, location, v) {
    gl.uniform4iv(location, v);
}

export function js_uniformMatrix2fv(gl, location, transpose, value) {
    gl.uniformMatrix2fv(location, transpose, value);
}

export function js_uniformMatrix3fv(gl, location, transpose, value) {
    gl.uniformMatrix3fv(location, transpose, value);
}

export function js_uniformMatrix4fv(gl, location, transpose, value) {
    gl.uniformMatrix4fv(location, transpose, value);
}
