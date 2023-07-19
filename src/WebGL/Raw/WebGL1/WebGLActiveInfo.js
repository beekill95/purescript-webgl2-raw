"use strict";

export function js_getSize(webglactiveinfo) {
    var int0 = (webglactiveinfo.size | 0);
    return int0;
}

export function js_getType(webglactiveinfo) {
    return webglactiveinfo.type;
}

export function js_getName(webglactiveinfo) {
    return webglactiveinfo.name;
}
