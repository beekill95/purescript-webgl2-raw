"use strict";

export function js_bindBufferBase(gl, target, index, buffer) {
    gl.bindBufferBase(target, index, buffer);
}

export function js_bindBufferRange(gl
    , target
    , index
    , buffer
    , offset
    , size
) {
    gl.bindBufferRange(target, index, buffer, offset, size);
}

export function js_getUniformIndices(gl, program, uniformNames) {
    return gl.getUniformIndices(program, uniformNames);
}

export function js_getActiveUniformsGLbooleanArray(gl
    , program
    , uniformIndices
    , pname
) {
    var res = gl.getActiveUniforms(
        program,
        uniformIndices,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Array]") {
            throw new TypeError(
                "js_getActiveUniformsGLbooleanArray: expected value of type `Maybe Array Boolean`, got " + Object.prototype.toString.call(
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
                    "js_getActiveUniformsGLbooleanArray: expected array of type `Boolean`, got array containing " + Object.prototype.toString.call(
                        e
                    )
                );
            }
        }
    }
    return res;
}

export function js_getActiveUniformsGLenumArray(gl
    , program
    , uniformIndices
    , pname
) {
    var res = gl.getActiveUniforms(
        program,
        uniformIndices,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Array]") {
            throw new TypeError(
                "js_getActiveUniformsGLenumArray: expected value of type `Maybe Array Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
        var i;
        var e;
        for (i = 0; i < res.length; i += 1) {
            e = res[i];
            if (Object.prototype.toString.call(e) !== "[object Number]") {
                throw new TypeError(
                    "js_getActiveUniformsGLenumArray: expected array of type `Number`, got array containing " + Object.prototype.toString.call(
                        e
                    )
                );
            }
        }
    }
    return res;
}

export function js_getActiveUniformsGLintArray(gl
    , program
    , uniformIndices
    , pname
) {
    var res = gl.getActiveUniforms(
        program,
        uniformIndices,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Array]") {
            throw new TypeError(
                "js_getActiveUniformsGLintArray: expected value of type `Maybe Array Int`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
        var i;
        var e;
        for (i = 0; i < res.length; i += 1) {
            e = res[i];
            if (Object.prototype.toString.call(e) !== "[object Number]") {
                throw new TypeError(
                    "js_getActiveUniformsGLintArray: expected array of type `Int`, got array containing " + Object.prototype.toString.call(
                        e
                    )
                );
            }
        }
    }
    return res;
}

export function js_getActiveUniformsGLuintArray(gl
    , program
    , uniformIndices
    , pname
) {
    var res = gl.getActiveUniforms(
        program,
        uniformIndices,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Array]") {
            throw new TypeError(
                "js_getActiveUniformsGLuintArray: expected value of type `Maybe Array Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
        var i;
        var e;
        for (i = 0; i < res.length; i += 1) {
            e = res[i];
            if (Object.prototype.toString.call(e) !== "[object Number]") {
                throw new TypeError(
                    "js_getActiveUniformsGLuintArray: expected array of type `Number`, got array containing " + Object.prototype.toString.call(
                        e
                    )
                );
            }
        }
    }
    return res;
}

export function js_getUniformBlockIndex(gl, program, uniformBlockName) {
    return gl.getUniformBlockIndex(program, uniformBlockName);
}

export function js_getActiveUniformBlockParameterGLboolean(gl
    , program
    , uniformBlockIndex
    , pname
) {
    var res = gl.getActiveUniformBlockParameter(
        program,
        uniformBlockIndex,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getActiveUniformBlockParameterGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getActiveUniformBlockParameterGLuint(gl
    , program
    , uniformBlockIndex
    , pname
) {
    var res = gl.getActiveUniformBlockParameter(
        program,
        uniformBlockIndex,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getActiveUniformBlockParameterGLuint: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getActiveUniformBlockParameterUint32Array(gl
    , program
    , uniformBlockIndex
    , pname
) {
    var res = gl.getActiveUniformBlockParameter(
        program,
        uniformBlockIndex,
        pname
    );
    if (res !== null) {
        if (!(res instanceof Uint32Array)) {
            throw new TypeError(
                "js_getActiveUniformBlockParameterUint32Array: expected value of type `Maybe Uint32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getActiveUniformBlockName(gl
    , program
    , uniformBlockIndex
) {
    return gl.getActiveUniformBlockName(program, uniformBlockIndex);
}

export function js_uniformBlockBinding(gl
    , program
    , uniformBlockIndex
    , uniformBlockBinding0
) {
    gl.uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding0);
}
