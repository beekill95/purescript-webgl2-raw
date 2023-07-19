"use strict";

export function js_texStorage2D(gl
    , target
    , levels
    , internalformat
    , width
    , height
) {
    gl.texStorage2D(target, levels, internalformat, width, height);
}

export function js_texStorage3D(gl
    , target
    , levels
    , internalformat
    , width
    , height
    , depth
) {
    gl.texStorage3D(target, levels, internalformat, width, height, depth);
}

export function js_texImage2DUnpackBuffer(gl
    , target
    , level
    , internalformat
    , width
    , height
    , border
    , format
    , type0
    , pboOffset
) {
    gl.texImage2D(
        target,
        level,
        internalformat,
        width,
        height,
        border,
        format,
        type0,
        pboOffset
    );
}

export function js_texImage2DImageSourceWithSize(gl
    , target
    , level
    , internalformat
    , width
    , height
    , border
    , format
    , type0
    , source
) {
    gl.texImage2D(
        target,
        level,
        internalformat,
        width,
        height,
        border,
        format,
        type0,
        source
    );
}

export function js_texImage2DWithSize(gl) {
    return function(target
        , level
        , internalformat
        , width
        , height
        , border
        , format
        , type0
        , srcData
        , srcOffset
    ) {
        gl.texImage2D(
            target,
            level,
            internalformat,
            width,
            height,
            border,
            format,
            type0,
            srcData,
            srcOffset
        );
    };
}

export function js_texImage3DUnpackBuffer(gl) {
    return function(target
        , level
        , internalformat
        , width
        , height
        , depth
        , border
        , format
        , type0
        , pboOffset
    ) {
        gl.texImage3D(
            target,
            level,
            internalformat,
            width,
            height,
            depth,
            border,
            format,
            type0,
            pboOffset
        );
    };
}

export function js_texImage3DImageSource(gl) {
    return function(target
        , level
        , internalformat
        , width
        , height
        , depth
        , border
        , format
        , type0
        , source
    ) {
        gl.texImage3D(
            target,
            level,
            internalformat,
            width,
            height,
            depth,
            border,
            format,
            type0,
            source
        );
    };
}

export function js_texImage3D(gl) {
    return function(target
        , level
        , internalformat
        , width
        , height
        , depth
        , border
        , format
        , type0
        , srcData
    ) {
        gl.texImage3D(
            target,
            level,
            internalformat,
            width,
            height,
            depth,
            border,
            format,
            type0,
            srcData
        );
    };
}

export function js_texImage3DOffset(gl, target) {
    return function(level
        , internalformat
        , width
        , height
        , depth
        , border
        , format
        , type0
        , srcData
        , srcOffset
    ) {
        gl.texImage3D(
            target,
            level,
            internalformat,
            width,
            height,
            depth,
            border,
            format,
            type0,
            srcData,
            srcOffset
        );
    };
}

export function js_texSubImage2DUnpackBuffer(gl
    , target
    , level
    , xoffset
    , yoffset
    , width
    , height
    , format
    , type0
    , pboOffset
) {
    gl.texSubImage2D(
        target,
        level,
        xoffset,
        yoffset,
        width,
        height,
        format,
        type0,
        pboOffset
    );
}

export function js_texSubImage2DImageSourceWithSize(gl
    , target
    , level
    , xoffset
    , yoffset
    , width
    , height
    , format
    , type0
    , source
) {
    gl.texSubImage2D(
        target,
        level,
        xoffset,
        yoffset,
        width,
        height,
        format,
        type0,
        source
    );
}

export function js_texSubImage2DWithSize(gl) {
    return function(target
        , level
        , xoffset
        , yoffset
        , width
        , height
        , format
        , type0
        , srcData
        , srcOffset
    ) {
        gl.texSubImage2D(
            target,
            level,
            xoffset,
            yoffset,
            width,
            height,
            format,
            type0,
            srcData,
            srcOffset
        );
    };
}

export function js_texSubImage3DUnpackBuffer(gl, target) {
    return function(level
        , xoffset
        , yoffset
        , zoffset
        , width
        , height
        , depth
        , format
        , type0
        , pboOffset
    ) {
        gl.texSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            type0,
            pboOffset
        );
    };
}

export function js_texSubImage3DImageSource(gl, target) {
    return function(level
        , xoffset
        , yoffset
        , zoffset
        , width
        , height
        , depth
        , format
        , type0
        , source
    ) {
        gl.texSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            type0,
            source
        );
    };
}

export function js_texSubImage3D(gl, target, level) {
    return function(xoffset
        , yoffset
        , zoffset
        , width
        , height
        , depth
        , format
        , type0
        , srcData
        , srcOffset
    ) {
        gl.texSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            type0,
            srcData,
            srcOffset
        );
    };
}

export function js_copyTexSubImage3D(gl
    , target
    , level
    , xoffset
    , yoffset
    , zoffset
    , x
    , y
    , width
    , height
) {
    gl.copyTexSubImage3D(
        target,
        level,
        xoffset,
        yoffset,
        zoffset,
        x,
        y,
        width,
        height
    );
}

export function js_compressedTexImage2DUnpackBuffer(gl
    , target
    , level
    , internalformat
    , width
    , height
    , border
    , imageSize
    , offset
) {
    gl.compressedTexImage2D(
        target,
        level,
        internalformat,
        width,
        height,
        border,
        imageSize,
        offset
    );
}

export function js_compressedTexImage2D(gl
    , target
    , level
    , internalformat
    , width
    , height
    , border
    , srcData
    , srcOffset
    , srcLengthOverride
) {
    gl.compressedTexImage2D(
        target,
        level,
        internalformat,
        width,
        height,
        border,
        srcData,
        srcOffset,
        srcLengthOverride
    );
}

export function js_compressedTexImage3DUnpackBuffer(gl
    , target
    , level
    , internalformat
    , width
    , height
    , depth
    , border
    , imageSize
    , offset
) {
    gl.compressedTexImage3D(
        target,
        level,
        internalformat,
        width,
        height,
        depth,
        border,
        imageSize,
        offset
    );
}

export function js_compressedTexImage3D(gl) {
    return function(target
        , level
        , internalformat
        , width
        , height
        , depth
        , border
        , srcData
        , srcOffset
        , srcLengthOverride
    ) {
        gl.compressedTexImage3D(
            target,
            level,
            internalformat,
            width,
            height,
            depth,
            border,
            srcData,
            srcOffset,
            srcLengthOverride
        );
    };
}

export function js_compressedTexSubImage2DUnpackBuffer(gl
    , target
    , level
    , xoffset
    , yoffset
    , width
    , height
    , format
    , imageSize
    , offset
) {
    gl.compressedTexSubImage2D(
        target,
        level,
        xoffset,
        yoffset,
        width,
        height,
        format,
        imageSize,
        offset
    );
}

export function js_compressedTexSubImage2D(gl) {
    return function(target
        , level
        , xoffset
        , yoffset
        , width
        , height
        , format
        , srcData
        , srcOffset
        , srcLengthOverride
    ) {
        gl.compressedTexSubImage2D(
            target,
            level,
            xoffset,
            yoffset,
            width,
            height,
            format,
            srcData,
            srcOffset,
            srcLengthOverride
        );
    };
}

export function js_compressedTexSubImage3DUnpackBuffer(gl, target) {
    return function(level
        , xoffset
        , yoffset
        , zoffset
        , width
        , height
        , depth
        , format
        , imageSize
        , offset
    ) {
        gl.compressedTexSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            imageSize,
            offset
        );
    };
}

export function js_compressedTexSubImage3D(gl, target, level) {
    return function(xoffset
        , yoffset
        , zoffset
        , width
        , height
        , depth
        , format
        , srcData
        , srcOffset
        , srcLengthOverride
    ) {
        gl.compressedTexSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            srcData,
            srcOffset,
            srcLengthOverride
        );
    };
}

export function js_getTexParameterGLboolean(gl, target, pname) {
    var res = gl.getTexParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getTexParameterGLboolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getTexParameterGLfloat(gl, target, pname) {
    var res = gl.getTexParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getTexParameterGLfloat: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getTexParameterGLint(gl, target, pname) {
    var res = gl.getTexParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getTexParameterGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_getTexParameterGLuint(gl, target, pname) {
    var res = gl.getTexParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getTexParameterGLuint: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}
