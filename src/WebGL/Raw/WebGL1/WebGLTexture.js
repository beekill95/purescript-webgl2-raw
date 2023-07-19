"use strict";

export function js_bindTexture(gl, target, texture) {
    gl.bindTexture(target, texture);
}

export function js_compressedTexImage2D(gl
    , target
    , level
    , internalformat
    , width
    , height
    , border
    , data0
) {
    gl.compressedTexImage2D(
        target,
        level,
        internalformat,
        width,
        height,
        border,
        data0
    );
}

export function js_compressedTexSubImage2D(gl
    , target
    , level
    , xoffset
    , yoffset
    , width
    , height
    , format
    , data0
) {
    gl.compressedTexSubImage2D(
        target,
        level,
        xoffset,
        yoffset,
        width,
        height,
        format,
        data0
    );
}

export function js_copyTexImage2D(gl
    , target
    , level
    , internalformat
    , x
    , y
    , width
    , height
    , border
) {
    gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
}

export function js_copyTexSubImage2D(gl
    , target
    , level
    , xoffset
    , yoffset
    , x
    , y
    , width
    , height
) {
    gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
}

export function js_createTexture(gl) {
    return gl.createTexture();
}

export function js_deleteTexture(gl, texture) {
    gl.deleteTexture(texture);
}

export function js_generateMipmap(gl, target) {
    gl.generateMipmap(target);
}

export function js_getTexParameterGLenum(gl, target, pname) {
    var res = gl.getTexParameter(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getTexParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_isTexture(gl, texture) {
    return gl.isTexture(texture);
}

export function js_texImage2D(gl
    , target
    , level
    , internalformat
    , width
    , height
    , border
    , format
    , type0
    , pixels
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
        pixels
    );
}

export function js_texImage2DImageSource(gl
    , target
    , level
    , internalformat
    , format
    , type0
    , source
) {
    gl.texImage2D(target, level, internalformat, format, type0, source);
}

export function js_texParameterf(gl, target, pname, param) {
    gl.texParameterf(target, pname, param);
}

export function js_texParameteri(gl, target, pname, param) {
    gl.texParameteri(target, pname, param);
}

export function js_texSubImage2D(gl
    , target
    , level
    , xoffset
    , yoffset
    , width
    , height
    , format
    , type0
    , pixels
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
        pixels
    );
}

export function js_texSubImage2DImageSource(gl
    , target
    , level
    , xoffset
    , yoffset
    , format
    , type0
    , source
) {
    gl.texSubImage2D(target, level, xoffset, yoffset, format, type0, source);
}
