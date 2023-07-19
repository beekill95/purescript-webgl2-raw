"use strict";

export function js_createQuery(gl) {
    return gl.createQuery();
}

export function js_deleteQuery(gl, query) {
    gl.deleteQuery(query);
}

export function js_isQuery(gl, query) {
    return gl.isQuery(query);
}

export function js_beginQuery(gl, target, query) {
    gl.beginQuery(target, query);
}

export function js_endQuery(gl, target) {
    gl.endQuery(target);
}

export function js_getQuery(gl, target, pname) {
    return gl.getQuery(target, pname);
}

export function js_getQueryParameterGLboolean(gl, query, pname) {
    var res = gl.getQueryParameter(
        query,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getQueryParameterGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getQueryParameterGLuint(gl, query, pname) {
    var res = gl.getQueryParameter(
        query,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getQueryParameterGLuint: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}
