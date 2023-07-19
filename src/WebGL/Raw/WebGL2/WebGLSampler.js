"use strict";

export function js_createSampler(gl) {
    return gl.createSampler();
}

export function js_deleteSampler(gl, sampler) {
    gl.deleteSampler(sampler);
}

export function js_isSampler(gl, sampler) {
    return gl.isSampler(sampler);
}

export function js_bindSampler(gl, unit, sampler) {
    gl.bindSampler(unit, sampler);
}

export function js_samplerParameteri(gl, sampler, pname, param) {
    gl.samplerParameteri(sampler, pname, param);
}

export function js_samplerParameterf(gl, sampler, pname, param) {
    gl.samplerParameterf(sampler, pname, param);
}

export function js_getSamplerParameterGLenum(gl, sampler, pname) {
    var res = gl.getSamplerParameter(
        sampler,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getSamplerParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getSamplerParameterGLfloat(gl, sampler, pname) {
    var res = gl.getSamplerParameter(
        sampler,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getSamplerParameterGLfloat: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}
