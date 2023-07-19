"use strict";

export function js_vertexAttribI4i(gl, index, x, y, z, w) {
    gl.vertexAttribI4i(index, x, y, z, w);
}

export function js_vertexAttribI4iv(gl, index, values) {
    gl.vertexAttribI4iv(index, values);
}

export function js_vertexAttribI4ui(gl, index, x, y, z, w) {
    gl.vertexAttribI4ui(index, x, y, z, w);
}

export function js_vertexAttribI4uiv(gl, index, values) {
    gl.vertexAttribI4uiv(index, values);
}

export function js_vertexAttribIPointer(gl
    , index
    , size
    , type0
    , stride
    , offset
) {
    gl.vertexAttribIPointer(index, size, type0, stride, offset);
}

export function js_getVertexAttribInt32Array(gl, index, pname) {
    var res = gl.getVertexAttrib(
        index,
        pname
    );
    if (res !== null) {
        if (!(res instanceof Int32Array)) {
            throw new TypeError(
                "js_getVertexAttribInt32Array: expected value of type `Maybe Int32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getVertexAttribUint32Array(gl, index, pname) {
    var res = gl.getVertexAttrib(
        index,
        pname
    );
    if (res !== null) {
        if (!(res instanceof Uint32Array)) {
            throw new TypeError(
                "js_getVertexAttribUint32Array: expected value of type `Maybe Uint32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}
