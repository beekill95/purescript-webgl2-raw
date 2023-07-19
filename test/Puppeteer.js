"use strict";

import puppeteerCore from 'puppeteer-core';

var to_js_opts = function(opts) {
    var js_opts = {};

    for (var k in opts) {
        if (opts[k] !== null) {
            js_opts[k] = opts[k];
        }
    }

    return js_opts;
};

export function js_puppeteer(full) {
    return function() {
        if (!full) {
            return puppeteerCore;
        }
        else {
            // FIXME: what should be an equivalent import of this?
            return require('puppeteer');
        }
    };
}

export function js_launch(opts) {
    return function(puppeteer) {
        return function() {
            return puppeteer.launch(to_js_opts(opts));
        };
    };
}

export function js_closeBrowser(browser) {
    return function() {
        return browser.close();
    };
}

export function js_defaultBrowserContext(browser) {
    return function() {
        return browser.defaultBrowserContext();
    };
}

export function js_newPage(browser) {
    return function() {
        return browser.newPage();
    };
}

export function js_onError(fn) {
    return function(page) {
        return function() {
            //      console.log ("JS_ONERROR CALLED");
            var callback = function(err) {
                return fn(new Error("unhandled rejection"))();
            };

            var cancel = function() {
                //        console.log ("CANCELER CALLED!");
                //        process.off("unhandledRejection", callback);
                page.off("error", callback);
            };

            page.on("error", callback);
            //process.on("unhandledRejection", callback);
            //      process.on ("unhandledRejection", function () {
            //        console.log ("UNHANDLED REJECTION");
            //        console.log (arguments);
            //      });

            return cancel;
        };
    };
}

export function js_closePage(page) {
    return function() {
        return page.close();
    };
}

export function js_click(selector) {
    return function(page) {
        return function() {
            return page.click(selector);
        };
    };
}

export function js_evalSelector(selector) {
    return function(script) {
        return function(page) {
            return function() {
                var fn = eval(script);

                if (typeof fn !== 'function') {
                    throw new Error("Not a function: " + script);
                }

                return page.$eval(selector, fn);
            };
        };
    };
}

export function js_goto(url) {
    return function(page) {
        return function() {
            return page.goto(url);
        };
    };
}

export function js_pageContent(page) {
    return function() {
        return page.content();
    };
}

export function js_waitForSelector(sel) {
    return function(opts) {
        return function(page) {
            return function() {
                return page.waitForSelector(sel, to_js_opts(opts));
            };
        };
    };
}
