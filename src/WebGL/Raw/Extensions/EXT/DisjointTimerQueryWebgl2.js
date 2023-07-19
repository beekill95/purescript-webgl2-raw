"use strict";

export function js_queryCounterEXT(ext_disjoint_timer_query_webgl2
    , query
    , target
) {
    ext_disjoint_timer_query_webgl2.queryCounterEXT(query, target);
}

export function js_getExtensionEXT_disjoint_timer_query_webgl2(gl) {
    return gl.getExtension("EXT_disjoint_timer_query_webgl2");
}
