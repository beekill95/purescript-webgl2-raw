"use strict";

export function js_getCanvas(gl) {
    return gl.canvas;
}

export function js_getDrawingBufferWidth(gl) {
    var int0 = (gl.drawingBufferWidth | 0);
    return int0;
}

export function js_getDrawingBufferHeight(gl) {
    var int0 = (gl.drawingBufferHeight | 0);
    return int0;
}

export function js_getContextAttributes(gl) {
    var mcheck = gl.getContextAttributes();
    var mres;
    if (mcheck == null) {
        mres = null;
    }
    else {
        var clean_record;
        var alpha = ((mcheck.alpha == null) ? null : mcheck.alpha);
        var depth = ((mcheck.depth == null) ? null : mcheck.depth);
        var stencil = ((mcheck.stencil == null) ? null : mcheck.stencil);
        var antialias = ((mcheck.antialias == null) ? null : mcheck.antialias);
        var premultipliedAlpha = ((mcheck.premultipliedAlpha == null)
            ? null
            : mcheck.premultipliedAlpha);
        var preserveDrawingBuffer = ((mcheck.preserveDrawingBuffer == null)
            ? null
            : mcheck.preserveDrawingBuffer);
        var powerPreference = ((mcheck.powerPreference == null)
            ? null
            : mcheck.powerPreference);
        var failIfMajorPerformanceCaveat = ((mcheck.failIfMajorPerformanceCaveat == null)
            ? null
            : mcheck.failIfMajorPerformanceCaveat);
        clean_record = {
            alpha: alpha,
            depth: depth,
            stencil: stencil,
            antialias: antialias,
            premultipliedAlpha: premultipliedAlpha,
            preserveDrawingBuffer: preserveDrawingBuffer,
            powerPreference: powerPreference,
            failIfMajorPerformanceCaveat: failIfMajorPerformanceCaveat
        };
        mres = clean_record;
    }
    return mres;
}

export function js_isContextLost(gl) {
    return gl.isContextLost();
}

export function js_getSupportedExtensions(gl) {
    return gl.getSupportedExtensions();
}

export function js_activeTexture(gl, texture) {
    gl.activeTexture(texture);
}

export function js_blendColor(gl, red, green, blue, alpha) {
    gl.blendColor(red, green, blue, alpha);
}

export function js_blendEquation(gl, mode) {
    gl.blendEquation(mode);
}

export function js_blendEquationSeparate(gl, modeRGB, modeAlpha) {
    gl.blendEquationSeparate(modeRGB, modeAlpha);
}

export function js_blendFunc(gl, sfactor, dfactor) {
    gl.blendFunc(sfactor, dfactor);
}

export function js_blendFuncSeparate(gl
    , srcRGB
    , dstRGB
    , srcAlpha
    , dstAlpha
) {
    gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
}

export function js_clear(gl, mask) {
    gl.clear(mask);
}

export function js_clearColor(gl, red, green, blue, alpha) {
    gl.clearColor(red, green, blue, alpha);
}

export function js_clearDepth(gl, depth) {
    gl.clearDepth(depth);
}

export function js_clearStencil(gl, s) {
    gl.clearStencil(s);
}

export function js_colorMask(gl, red, green, blue, alpha) {
    gl.colorMask(red, green, blue, alpha);
}

export function js_cullFace(gl, mode) {
    gl.cullFace(mode);
}

export function js_depthFunc(gl, func) {
    gl.depthFunc(func);
}

export function js_depthMask(gl, flag) {
    gl.depthMask(flag);
}

export function js_depthRange(gl, zNear, zFar) {
    gl.depthRange(zNear, zFar);
}

export function js_disable(gl, cap) {
    gl.disable(cap);
}

export function js_drawArrays(gl, mode, first, count) {
    gl.drawArrays(mode, first, count);
}

export function js_drawElements(gl, mode, count, type0, offset) {
    gl.drawElements(mode, count, type0, offset);
}

export function js_enable(gl, cap) {
    gl.enable(cap);
}

export function js_finish(gl) {
    gl.finish();
}

export function js_flush(gl) {
    gl.flush();
}

export function js_frontFace(gl, mode) {
    gl.frontFace(mode);
}

export function js_getParameterBoolean(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getParameterBoolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterString(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object String]") {
            throw new TypeError(
                "js_getParameterString: expected value of type `Maybe String`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterGLboolean(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getParameterGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterGLenum(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterGLfloat(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getParameterGLfloat: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterGLint(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getParameterGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_getParameterGLuint(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getParameterGLuint: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterGLuint64EXT(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getParameterGLuint64EXT: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLBuffer(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLBuffer)) {
            throw new TypeError(
                "js_getParameterWebGLBuffer: expected value of type `Maybe WebGLBuffer`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLFramebuffer(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLFramebuffer)) {
            throw new TypeError(
                "js_getParameterWebGLFramebuffer: expected value of type `Maybe WebGLFramebuffer`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLProgram(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLProgram)) {
            throw new TypeError(
                "js_getParameterWebGLProgram: expected value of type `Maybe WebGLProgram`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLRenderbuffer(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLRenderbuffer)) {
            throw new TypeError(
                "js_getParameterWebGLRenderbuffer: expected value of type `Maybe WebGLRenderbuffer`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLTexture(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLTexture)) {
            throw new TypeError(
                "js_getParameterWebGLTexture: expected value of type `Maybe WebGLTexture`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterGLbooleanArray(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Array]") {
            throw new TypeError(
                "js_getParameterGLbooleanArray: expected value of type `Maybe Array Boolean`, got " + Object.prototype.toString.call(
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
                    "js_getParameterGLbooleanArray: expected array of type `Boolean`, got array containing " + Object.prototype.toString.call(
                        e
                    )
                );
            }
        }
    }
    return res;
}

export function js_getParameterInt32Array(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof Int32Array)) {
            throw new TypeError(
                "js_getParameterInt32Array: expected value of type `Maybe Int32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterUint32Array(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof Uint32Array)) {
            throw new TypeError(
                "js_getParameterUint32Array: expected value of type `Maybe Uint32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterFloat32Array(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof Float32Array)) {
            throw new TypeError(
                "js_getParameterFloat32Array: expected value of type `Maybe Float32Array`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getError(gl) {
    return gl.getError();
}

export function js_hint(gl, target, mode) {
    gl.hint(target, mode);
}

export function js_isEnabled(gl, cap) {
    return gl.isEnabled(cap);
}

export function js_lineWidth(gl, width) {
    gl.lineWidth(width);
}

export function js_pixelStorei(gl, pname, param) {
    gl.pixelStorei(pname, param);
}

export function js_polygonOffset(gl, factor, units) {
    gl.polygonOffset(factor, units);
}

export function js_readPixels(gl
    , x
    , y
    , width
    , height
    , format
    , type0
    , pixels
) {
    gl.readPixels(x, y, width, height, format, type0, pixels);
}

export function js_sampleCoverage(gl, value, invert) {
    gl.sampleCoverage(value, invert);
}

export function js_scissor(gl, x, y, width, height) {
    gl.scissor(x, y, width, height);
}

export function js_stencilFunc(gl, func, ref, mask) {
    gl.stencilFunc(func, ref, mask);
}

export function js_stencilFuncSeparate(gl, face, func, ref, mask) {
    gl.stencilFuncSeparate(face, func, ref, mask);
}

export function js_stencilMask(gl, mask) {
    gl.stencilMask(mask);
}

export function js_stencilMaskSeparate(gl, face, mask) {
    gl.stencilMaskSeparate(face, mask);
}

export function js_stencilOp(gl, fail, zfail, zpass) {
    gl.stencilOp(fail, zfail, zpass);
}

export function js_stencilOpSeparate(gl, face, fail, zfail, zpass) {
    gl.stencilOpSeparate(face, fail, zfail, zpass);
}

export function js_viewport(gl, x, y, width, height) {
    gl.viewport(x, y, width, height);
}

export function js_getWebGLRenderingContext(canvas, attributes) {
    var attributes1;
    if (attributes != null) {
        var attributes0 = {};
        if (attributes.alpha != null) {
            attributes0.alpha = attributes.alpha;
        }
        if (attributes.depth != null) {
            attributes0.depth = attributes.depth;
        }
        if (attributes.stencil != null) {
            attributes0.stencil = attributes.stencil;
        }
        if (attributes.antialias != null) {
            attributes0.antialias = attributes.antialias;
        }
        if (attributes.premultipliedAlpha != null) {
            attributes0.premultipliedAlpha = attributes.premultipliedAlpha;
        }
        if (attributes.preserveDrawingBuffer != null) {
            attributes0.preserveDrawingBuffer = attributes.preserveDrawingBuffer;
        }
        if (attributes.powerPreference != null) {
            attributes0.powerPreference = attributes.powerPreference;
        }
        if (attributes.failIfMajorPerformanceCaveat != null) {
            attributes0.failIfMajorPerformanceCaveat = attributes.failIfMajorPerformanceCaveat;
        }
        attributes1 = attributes0;
    }
    else {
        attributes1 = attributes;
    }
    return canvas.getContext("webgl", attributes1);
}
