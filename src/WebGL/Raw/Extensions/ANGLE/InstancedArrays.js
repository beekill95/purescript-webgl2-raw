"use strict";

export function js_drawArraysInstancedANGLE(angle_instanced_arrays
    , mode
    , first
    , count
    , primcount
) {
    angle_instanced_arrays.drawArraysInstancedANGLE(
        mode,
        first,
        count,
        primcount
    );
}

export function js_drawElementsInstancedANGLE(angle_instanced_arrays
    , mode
    , count
    , type0
    , offset
    , primcount
) {
    angle_instanced_arrays.drawElementsInstancedANGLE(
        mode,
        count,
        type0,
        offset,
        primcount
    );
}

export function js_vertexAttribDivisorANGLE(angle_instanced_arrays
    , index
    , divisor
) {
    angle_instanced_arrays.vertexAttribDivisorANGLE(index, divisor);
}

export function js_getExtensionANGLE_instanced_arrays(gl) {
    return gl.getExtension("ANGLE_instanced_arrays");
}
