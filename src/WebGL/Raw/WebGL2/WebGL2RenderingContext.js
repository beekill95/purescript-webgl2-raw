"use strict";

export function js_vertexAttribDivisor(gl, index, divisor) {
    gl.vertexAttribDivisor(index, divisor);
}

export function js_drawArraysInstanced(gl
    , mode
    , first
    , count
    , instanceCount
) {
    gl.drawArraysInstanced(mode, first, count, instanceCount);
}

export function js_drawElementsInstanced(gl
    , mode
    , count
    , type0
    , offset
    , instanceCount
) {
    gl.drawElementsInstanced(mode, count, type0, offset, instanceCount);
}

export function js_drawRangeElements(gl
    , mode
    , start
    , end
    , count
    , type0
    , offset
) {
    gl.drawRangeElements(mode, start, end, count, type0, offset);
}

export function js_readPixelsPackBuffer(gl
    , x
    , y
    , width
    , height
    , format
    , type0
    , offset
) {
    gl.readPixels(x, y, width, height, format, type0, offset);
}

export function js_readPixels(gl
    , x
    , y
    , width
    , height
    , format
    , type0
    , dstData
    , dstOffset
) {
    gl.readPixels(x, y, width, height, format, type0, dstData, dstOffset);
}

export function js_drawBuffers(gl, buffers) {
    gl.drawBuffers(buffers);
}

export function js_clearBufferfv(gl
    , buffer
    , drawbuffer
    , values
    , srcOffset
) {
    gl.clearBufferfv(buffer, drawbuffer, values, srcOffset);
}

export function js_clearBufferiv(gl
    , buffer
    , drawbuffer
    , values
    , srcOffset
) {
    gl.clearBufferiv(buffer, drawbuffer, values, srcOffset);
}

export function js_clearBufferuiv(gl
    , buffer
    , drawbuffer
    , values
    , srcOffset
) {
    gl.clearBufferuiv(buffer, drawbuffer, values, srcOffset);
}

export function js_clearBufferfi(gl, buffer, drawbuffer, depth, stencil) {
    gl.clearBufferfi(buffer, drawbuffer, depth, stencil);
}

export function js_getIndexedParameterGLintptr(gl, target, index) {
    var res = gl.getIndexedParameter(
        target,
        index
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getIndexedParameterGLintptr: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getIndexedParameterGLsizeiptr(gl, target, index) {
    var res = gl.getIndexedParameter(
        target,
        index
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getIndexedParameterGLsizeiptr: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getIndexedParameterWebGLBuffer(gl, target, index) {
    var res = gl.getIndexedParameter(
        target,
        index
    );
    if (res !== null) {
        if (!(res instanceof WebGLBuffer)) {
            throw new TypeError(
                "js_getIndexedParameterWebGLBuffer: expected value of type `Maybe WebGLBuffer`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterGLint64(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getParameterGLint64: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLSampler(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLSampler)) {
            throw new TypeError(
                "js_getParameterWebGLSampler: expected value of type `Maybe WebGLSampler`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLTransformFeedback(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLTransformFeedback)) {
            throw new TypeError(
                "js_getParameterWebGLTransformFeedback: expected value of type `Maybe WebGLTransformFeedback`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getParameterWebGLVertexArrayObject(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLVertexArrayObject)) {
            throw new TypeError(
                "js_getParameterWebGLVertexArrayObject: expected value of type `Maybe WebGLVertexArrayObject`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getWebGL2RenderingContext(canvas, attributes) {
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
    return canvas.getContext("webgl2", attributes1);
}
