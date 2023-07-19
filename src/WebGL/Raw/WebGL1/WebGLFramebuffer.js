"use strict";

export function js_bindFramebuffer(gl, target, framebuffer) {
    gl.bindFramebuffer(target, framebuffer);
}

export function js_checkFramebufferStatus(gl, target) {
    return gl.checkFramebufferStatus(target);
}

export function js_createFramebuffer(gl) {
    return gl.createFramebuffer();
}

export function js_deleteFramebuffer(gl, framebuffer) {
    gl.deleteFramebuffer(framebuffer);
}

export function js_framebufferRenderbuffer(gl
    , target
    , attachment
    , renderbuffertarget
    , renderbuffer
) {
    gl.framebufferRenderbuffer(
        target,
        attachment,
        renderbuffertarget,
        renderbuffer
    );
}

export function js_framebufferTexture2D(gl
    , target
    , attachment
    , textarget
    , texture
    , level
) {
    gl.framebufferTexture2D(target, attachment, textarget, texture, level);
}

export function js_getFramebufferAttachmentParameterGLenum(gl
    , target
    , attachment
    , pname
) {
    var res = gl.getFramebufferAttachmentParameter(
        target,
        attachment,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getFramebufferAttachmentParameterGLenum: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getFramebufferAttachmentParameterGLint(gl
    , target
    , attachment
    , pname
) {
    var res = gl.getFramebufferAttachmentParameter(
        target,
        attachment,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getFramebufferAttachmentParameterGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_getFramebufferAttachmentParameterWebGLRenderbuffer(gl
    , target
    , attachment
    , pname
) {
    var res = gl.getFramebufferAttachmentParameter(
        target,
        attachment,
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLRenderbuffer)) {
            throw new TypeError(
                "js_getFramebufferAttachmentParameterWebGLRenderbuffer: expected value of type `Maybe WebGLRenderbuffer`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getFramebufferAttachmentParameterWebGLTexture(gl
    , target
    , attachment
    , pname
) {
    var res = gl.getFramebufferAttachmentParameter(
        target,
        attachment,
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLTexture)) {
            throw new TypeError(
                "js_getFramebufferAttachmentParameterWebGLTexture: expected value of type `Maybe WebGLTexture`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_isFramebuffer(gl, framebuffer) {
    return gl.isFramebuffer(framebuffer);
}
