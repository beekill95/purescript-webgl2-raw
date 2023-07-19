"use strict";

export function js_disableVertexAttribArray(gl, index) {
    gl.disableVertexAttribArray(index);
}

export function js_enableVertexAttribArray(gl, index) {
    gl.enableVertexAttribArray(index);
}

export function js_getActiveAttrib(gl, program, index) {
    return gl.getActiveAttrib(program, index);
}

export function js_getAttribLocation(gl, program, name) {
    var int0 = (gl.getAttribLocation(program, name) | 0);
    return int0;
}

export function js_getVertexAttribGLboolean(gl, index, pname) {
    var res = gl.getVertexAttrib(
        index,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getVertexAttribGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getVertexAttribGLenum(gl, index, pname) {
    var res = gl.getVertexAttrib(
        index,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getVertexAttribGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getVertexAttribGLint(gl, index, pname) {
    var res = gl.getVertexAttrib(
        index,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getVertexAttribGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_getVertexAttribWebGLBuffer(gl, index, pname) {
    var res = gl.getVertexAttrib(
        index,
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLBuffer)) {
            throw new TypeError(
                "js_getVertexAttribWebGLBuffer: expected value of type `Maybe WebGLBuffer`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getVertexAttribFloat32Array(gl, index, pname) {
    var res = gl.getVertexAttrib(
        index,
        pname
    );
    if (res !== null) {
        if (!(res instanceof Float32Array)) {
            throw new TypeError(
                "js_getVertexAttribFloat32Array: expected value of type `Maybe Float32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getVertexAttribOffset(gl, index, pname) {
    return gl.getVertexAttribOffset(index, pname);
}

export function js_vertexAttrib1f(gl, index, x) {
    gl.vertexAttrib1f(index, x);
}

export function js_vertexAttrib2f(gl, index, x, y) {
    gl.vertexAttrib2f(index, x, y);
}

export function js_vertexAttrib3f(gl, index, x, y, z) {
    gl.vertexAttrib3f(index, x, y, z);
}

export function js_vertexAttrib4f(gl, index, x, y, z, w) {
    gl.vertexAttrib4f(index, x, y, z, w);
}

export function js_vertexAttrib1fv(gl, index, values) {
    gl.vertexAttrib1fv(index, values);
}

export function js_vertexAttrib2fv(gl, index, values) {
    gl.vertexAttrib2fv(index, values);
}

export function js_vertexAttrib3fv(gl, index, values) {
    gl.vertexAttrib3fv(index, values);
}

export function js_vertexAttrib4fv(gl, index, values) {
    gl.vertexAttrib4fv(index, values);
}

export function js_vertexAttribPointer(gl
    , index
    , size
    , type0
    , normalized
    , stride
    , offset
) {
    gl.vertexAttribPointer(index, size, type0, normalized, stride, offset);
}
