"use strict";

export function js_createQueryEXT(ext_disjoint_timer_query) {
    return ext_disjoint_timer_query.createQueryEXT();
}

export function js_deleteQueryEXT(ext_disjoint_timer_query, query) {
    ext_disjoint_timer_query.deleteQueryEXT(query);
}

export function js_isQueryEXT(ext_disjoint_timer_query, query) {
    return ext_disjoint_timer_query.isQueryEXT(query);
}

export function js_beginQueryEXT(ext_disjoint_timer_query, target, query) {
    ext_disjoint_timer_query.beginQueryEXT(target, query);
}

export function js_endQueryEXT(ext_disjoint_timer_query, target) {
    ext_disjoint_timer_query.endQueryEXT(target);
}

export function js_queryCounterEXT(ext_disjoint_timer_query
    , query
    , target
) {
    ext_disjoint_timer_query.queryCounterEXT(query, target);
}

export function js_getQueryEXTGLint(ext_disjoint_timer_query
    , target
    , pname
) {
    var res = ext_disjoint_timer_query.getQueryEXT(
        target,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getQueryEXTGLint: expected value of type `Maybe Int`, got " + Object.prototype.toString.call(
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

export function js_getQueryEXTWebGLQuery(ext_disjoint_timer_query
    , target
    , pname
) {
    var res = ext_disjoint_timer_query.getQueryEXT(
        target,
        pname
    );
    if (res !== null) {
        if (!(res instanceof WebGLQuery)) {
            throw new TypeError(
                "js_getQueryEXTWebGLQuery: expected value of type `Maybe WebGLQuery`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getQueryObjectEXTBoolean(ext_disjoint_timer_query
    , query
    , pname
) {
    var res = ext_disjoint_timer_query.getQueryObjectEXT(
        query,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Boolean]") {
            throw new TypeError(
                "js_getQueryObjectEXTBoolean: expected value of type `Maybe Boolean`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getQueryObjectEXTGLuint64EXT(ext_disjoint_timer_query
    , query
    , pname
) {
    var res = ext_disjoint_timer_query.getQueryObjectEXT(
        query,
        pname
    );
    if (res !== null) {
        if (Object.prototype.toString.call(
            res
        ) !== "[object Number]") {
            throw new TypeError(
                "js_getQueryObjectEXTGLuint64EXT: expected value of type `Maybe Number`, got " + Object.prototype.toString.call(
                    res
                )
            );
        }
    }
    return res;
}

export function js_getExtensionEXT_disjoint_timer_query(gl) {
    return gl.getExtension("EXT_disjoint_timer_query");
}
