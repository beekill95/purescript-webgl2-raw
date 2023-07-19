"use strict";

export function js_getParameterWebGLVertexArrayObjectOES(gl, pname) {
    var res = gl.getParameter(
        pname
    );
    if (res !== null) {
        if (typeof res !== "object") {
            throw new TypeError(
                "js_getParameterWebGLVertexArrayObjectOES: expected value of type `Maybe WebGLVertexArrayObjectOES`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_createVertexArrayOES(oes_vertex_array_object) {
    return oes_vertex_array_object.createVertexArrayOES();
}

export function js_deleteVertexArrayOES(oes_vertex_array_object
    , arrayObject
) {
    oes_vertex_array_object.deleteVertexArrayOES(arrayObject);
}

export function js_isVertexArrayOES(oes_vertex_array_object, arrayObject) {
    return oes_vertex_array_object.isVertexArrayOES(arrayObject);
}

export function js_bindVertexArrayOES(oes_vertex_array_object
    , arrayObject
) {
    oes_vertex_array_object.bindVertexArrayOES(arrayObject);
}

export function js_getExtensionOES_vertex_array_object(gl) {
    return gl.getExtension("OES_vertex_array_object");
}
