(() => {
    var __webpack_modules__ = {
        958: function(module) {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2024 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.9
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }("undefined" != typeof self && self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        3976: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, n) {
                                if (void 0 === n) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = n;
                            };
                        },
                        3776: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var n, i;
                                u(this[0]) && e && (n = this[0].eventRegistry, i = this[0], e.split(" ").forEach((function(e) {
                                    var a = o(e.split("."), 2);
                                    (function(e, i) {
                                        var a, r, o = [];
                                        if (e.length > 0) if (void 0 === t) for (a = 0, r = n[e][i].length; a < r; a++) o.push({
                                            ev: e,
                                            namespace: i && i.length > 0 ? i : "global",
                                            handler: n[e][i][a]
                                        }); else o.push({
                                            ev: e,
                                            namespace: i && i.length > 0 ? i : "global",
                                            handler: t
                                        }); else if (i.length > 0) for (var l in n) for (var s in n[l]) if (s === i) if (void 0 === t) for (a = 0, 
                                        r = n[l][s].length; a < r; a++) o.push({
                                            ev: l,
                                            namespace: s,
                                            handler: n[l][s][a]
                                        }); else o.push({
                                            ev: l,
                                            namespace: s,
                                            handler: t
                                        });
                                        return o;
                                    })(a[0], a[1]).forEach((function(e) {
                                        var t = e.ev, a = e.handler;
                                        !function(e, t, a) {
                                            if (e in n == 1) if (i.removeEventListener ? i.removeEventListener(e, a, !1) : i.detachEvent && i.detachEvent("on".concat(e), a), 
                                            "global" === t) for (var r in n[e]) n[e][r].splice(n[e][r].indexOf(a), 1); else n[e][t].splice(n[e][t].indexOf(a), 1);
                                        }(t, e.namespace, a);
                                    }));
                                })));
                                return this;
                            }, t.on = function(e, t) {
                                if (u(this[0])) {
                                    var n = this[0].eventRegistry, i = this[0];
                                    e.split(" ").forEach((function(e) {
                                        var a = o(e.split("."), 2), r = a[0], l = a[1];
                                        !function(e, a) {
                                            i.addEventListener ? i.addEventListener(e, t, !1) : i.attachEvent && i.attachEvent("on".concat(e), t), 
                                            n[e] = n[e] || {}, n[e][a] = n[e][a] || [], n[e][a].push(t);
                                        }(r, void 0 === l ? "global" : l);
                                    }));
                                }
                                return this;
                            }, t.trigger = function(e) {
                                var t = arguments;
                                if (u(this[0])) for (var n = this[0].eventRegistry, i = this[0], o = "string" == typeof e ? e.split(" ") : [ e.type ], l = 0; l < o.length; l++) {
                                    var s = o[l].split("."), f = s[0], p = s[1] || "global";
                                    if (void 0 !== c && "global" === p) {
                                        var d, h = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            composed: !0,
                                            detail: arguments[1]
                                        };
                                        if (c.createEvent) {
                                            try {
                                                if ("input" === f) h.inputType = "insertText", d = new InputEvent(f, h); else d = new CustomEvent(f, h);
                                            } catch (e) {
                                                (d = c.createEvent("CustomEvent")).initCustomEvent(f, h.bubbles, h.cancelable, h.detail);
                                            }
                                            e.type && (0, a.default)(d, e), i.dispatchEvent(d);
                                        } else (d = c.createEventObject()).eventType = f, d.detail = arguments[1], e.type && (0, 
                                        a.default)(d, e), i.fireEvent("on" + d.eventType, d);
                                    } else if (void 0 !== n[f]) {
                                        arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]), 
                                        arguments[0].detail = arguments.slice(1);
                                        var v = n[f];
                                        ("global" === p ? Object.values(v).flat() : v[p]).forEach((function(e) {
                                            return e.apply(i, t);
                                        }));
                                    }
                                }
                                return this;
                            };
                            var i = s(n(9380)), a = s(n(600)), r = s(n(4963));
                            function o(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != n) {
                                        var i, a, r, o, l = [], s = !0, c = !1;
                                        try {
                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                if (Object(n) !== n) return;
                                                s = !1;
                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return l;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return l(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function l(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var c = i.default.document;
                            function u(e) {
                                return e instanceof Element;
                            }
                            var f = t.Event = void 0;
                            "function" == typeof i.default.CustomEvent ? t.Event = f = i.default.CustomEvent : i.default.Event && c && c.createEvent ? (t.Event = f = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    composed: !0,
                                    detail: void 0
                                };
                                var n = c.createEvent("CustomEvent");
                                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                            }, f.prototype = i.default.Event.prototype) : "undefined" != typeof Event && (t.Event = f = Event);
                        },
                        600: function(e, t) {
                            function n(e) {
                                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, n(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, i, a, r, o, l, s = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                                "boolean" == typeof s && (f = s, s = arguments[c] || {}, c++);
                                "object" !== n(s) && "function" != typeof s && (s = {});
                                for (;c < u; c++) if (null != (t = arguments[c])) for (i in t) a = s[i], s !== (r = t[i]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                l = a && Array.isArray(a) ? a : []) : l = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                                s[i] = e(f, l, r)) : void 0 !== r && (s[i] = r));
                                return s;
                            };
                        },
                        4963: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = l(n(9380)), a = l(n(253)), r = n(3776), o = l(n(600));
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = i.default.document;
                            function c(e) {
                                return e instanceof c ? e : this instanceof c ? void (null != e && e !== i.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                            }
                            c.prototype = {
                                on: r.on,
                                off: r.off,
                                trigger: r.trigger
                            }, c.extend = o.default, c.data = a.default, c.Event = r.Event;
                            t.default = c;
                        },
                        9845: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mobile = t.iphone = t.ie = void 0;
                            var i, a = (i = n(9380)) && i.__esModule ? i : {
                                default: i
                            };
                            var r = a.default.navigator && a.default.navigator.userAgent || "";
                            t.ie = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, t.mobile = a.default.navigator && a.default.navigator.userAgentData && a.default.navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, 
                            t.iphone = /iphone/i.test(r);
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(n, "\\$1");
                            };
                            var n = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, n) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var a, r = n(9845), o = (a = n(9380)) && a.__esModule ? a : {
                                default: a
                            }, l = n(7760), s = n(2839), c = n(8711), u = n(7215), f = n(4713);
                            function p() {
                                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ p = function() {
                                    return t;
                                };
                                var e, t = {}, n = Object.prototype, a = n.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                                    e[t] = n.value;
                                }, o = "function" == typeof Symbol ? Symbol : {}, l = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
                                function u(e, t, n) {
                                    return Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }), e[t];
                                }
                                try {
                                    u({}, "");
                                } catch (e) {
                                    u = function(e, t, n) {
                                        return e[t] = n;
                                    };
                                }
                                function f(e, t, n, i) {
                                    var a = t && t.prototype instanceof k ? t : k, o = Object.create(a.prototype), l = new D(i || []);
                                    return r(o, "_invoke", {
                                        value: E(e, n, l)
                                    }), o;
                                }
                                function d(e, t, n) {
                                    try {
                                        return {
                                            type: "normal",
                                            arg: e.call(t, n)
                                        };
                                    } catch (e) {
                                        return {
                                            type: "throw",
                                            arg: e
                                        };
                                    }
                                }
                                t.wrap = f;
                                var h = "suspendedStart", v = "suspendedYield", m = "executing", g = "completed", y = {};
                                function k() {}
                                function b() {}
                                function x() {}
                                var w = {};
                                u(w, l, (function() {
                                    return this;
                                }));
                                var P = Object.getPrototypeOf, S = P && P(P(L([])));
                                S && S !== n && a.call(S, l) && (w = S);
                                var O = x.prototype = k.prototype = Object.create(w);
                                function _(e) {
                                    [ "next", "throw", "return" ].forEach((function(t) {
                                        u(e, t, (function(e) {
                                            return this._invoke(t, e);
                                        }));
                                    }));
                                }
                                function M(e, t) {
                                    function n(r, o, l, s) {
                                        var c = d(e[r], e, o);
                                        if ("throw" !== c.type) {
                                            var u = c.arg, f = u.value;
                                            return f && "object" == i(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                                n("next", e, l, s);
                                            }), (function(e) {
                                                n("throw", e, l, s);
                                            })) : t.resolve(f).then((function(e) {
                                                u.value = e, l(u);
                                            }), (function(e) {
                                                return n("throw", e, l, s);
                                            }));
                                        }
                                        s(c.arg);
                                    }
                                    var o;
                                    r(this, "_invoke", {
                                        value: function(e, i) {
                                            function a() {
                                                return new t((function(t, a) {
                                                    n(e, i, t, a);
                                                }));
                                            }
                                            return o = o ? o.then(a, a) : a();
                                        }
                                    });
                                }
                                function E(t, n, i) {
                                    var a = h;
                                    return function(r, o) {
                                        if (a === m) throw new Error("Generator is already running");
                                        if (a === g) {
                                            if ("throw" === r) throw o;
                                            return {
                                                value: e,
                                                done: !0
                                            };
                                        }
                                        for (i.method = r, i.arg = o; ;) {
                                            var l = i.delegate;
                                            if (l) {
                                                var s = j(l, i);
                                                if (s) {
                                                    if (s === y) continue;
                                                    return s;
                                                }
                                            }
                                            if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                                if (a === h) throw a = g, i.arg;
                                                i.dispatchException(i.arg);
                                            } else "return" === i.method && i.abrupt("return", i.arg);
                                            a = m;
                                            var c = d(t, n, i);
                                            if ("normal" === c.type) {
                                                if (a = i.done ? g : v, c.arg === y) continue;
                                                return {
                                                    value: c.arg,
                                                    done: i.done
                                                };
                                            }
                                            "throw" === c.type && (a = g, i.method = "throw", i.arg = c.arg);
                                        }
                                    };
                                }
                                function j(t, n) {
                                    var i = n.method, a = t.iterator[i];
                                    if (a === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", 
                                    n.arg = e, j(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", 
                                    n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
                                    var r = d(a, t.iterator, n.arg);
                                    if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, 
                                    y;
                                    var o = r.arg;
                                    return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", 
                                    n.arg = e), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), 
                                    n.delegate = null, y);
                                }
                                function T(e) {
                                    var t = {
                                        tryLoc: e[0]
                                    };
                                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                                    this.tryEntries.push(t);
                                }
                                function A(e) {
                                    var t = e.completion || {};
                                    t.type = "normal", delete t.arg, e.completion = t;
                                }
                                function D(e) {
                                    this.tryEntries = [ {
                                        tryLoc: "root"
                                    } ], e.forEach(T, this), this.reset(!0);
                                }
                                function L(t) {
                                    if (t || "" === t) {
                                        var n = t[l];
                                        if (n) return n.call(t);
                                        if ("function" == typeof t.next) return t;
                                        if (!isNaN(t.length)) {
                                            var r = -1, o = function n() {
                                                for (;++r < t.length; ) if (a.call(t, r)) return n.value = t[r], n.done = !1, n;
                                                return n.value = e, n.done = !0, n;
                                            };
                                            return o.next = o;
                                        }
                                    }
                                    throw new TypeError(i(t) + " is not iterable");
                                }
                                return b.prototype = x, r(O, "constructor", {
                                    value: x,
                                    configurable: !0
                                }), r(x, "constructor", {
                                    value: b,
                                    configurable: !0
                                }), b.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                                    var t = "function" == typeof e && e.constructor;
                                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
                                }, t.mark = function(e) {
                                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), 
                                    e.prototype = Object.create(O), e;
                                }, t.awrap = function(e) {
                                    return {
                                        __await: e
                                    };
                                }, _(M.prototype), u(M.prototype, s, (function() {
                                    return this;
                                })), t.AsyncIterator = M, t.async = function(e, n, i, a, r) {
                                    void 0 === r && (r = Promise);
                                    var o = new M(f(e, n, i, a), r);
                                    return t.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                                        return e.done ? e.value : o.next();
                                    }));
                                }, _(O), u(O, c, "Generator"), u(O, l, (function() {
                                    return this;
                                })), u(O, "toString", (function() {
                                    return "[object Generator]";
                                })), t.keys = function(e) {
                                    var t = Object(e), n = [];
                                    for (var i in t) n.push(i);
                                    return n.reverse(), function e() {
                                        for (;n.length; ) {
                                            var i = n.pop();
                                            if (i in t) return e.value = i, e.done = !1, e;
                                        }
                                        return e.done = !0, e;
                                    };
                                }, t.values = L, D.prototype = {
                                    constructor: D,
                                    reset: function(t) {
                                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, 
                                        this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                                    },
                                    stop: function() {
                                        this.done = !0;
                                        var e = this.tryEntries[0].completion;
                                        if ("throw" === e.type) throw e.arg;
                                        return this.rval;
                                    },
                                    dispatchException: function(t) {
                                        if (this.done) throw t;
                                        var n = this;
                                        function i(i, a) {
                                            return l.type = "throw", l.arg = t, n.next = i, a && (n.method = "next", n.arg = e), 
                                            !!a;
                                        }
                                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                            var o = this.tryEntries[r], l = o.completion;
                                            if ("root" === o.tryLoc) return i("end");
                                            if (o.tryLoc <= this.prev) {
                                                var s = a.call(o, "catchLoc"), c = a.call(o, "finallyLoc");
                                                if (s && c) {
                                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                                } else if (s) {
                                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                                } else {
                                                    if (!c) throw new Error("try statement without catch or finally");
                                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                                }
                                            }
                                        }
                                    },
                                    abrupt: function(e, t) {
                                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                            var i = this.tryEntries[n];
                                            if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                                var r = i;
                                                break;
                                            }
                                        }
                                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                                        var o = r ? r.completion : {};
                                        return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, 
                                        y) : this.complete(o);
                                    },
                                    complete: function(e, t) {
                                        if ("throw" === e.type) throw e.arg;
                                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                                        this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                                        y;
                                    },
                                    finish: function(e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var n = this.tryEntries[t];
                                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y;
                                        }
                                    },
                                    catch: function(e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var n = this.tryEntries[t];
                                            if (n.tryLoc === e) {
                                                var i = n.completion;
                                                if ("throw" === i.type) {
                                                    var a = i.arg;
                                                    A(n);
                                                }
                                                return a;
                                            }
                                        }
                                        throw new Error("illegal catch attempt");
                                    },
                                    delegateYield: function(t, n, i) {
                                        return this.delegate = {
                                            iterator: L(t),
                                            resultName: n,
                                            nextLoc: i
                                        }, "next" === this.method && (this.arg = e), y;
                                    }
                                }, t;
                            }
                            function d(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return h(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === n && e.constructor && (n = e.constructor.name);
                                        if ("Map" === n || "Set" === n) return Array.from(e);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var i = 0, a = function() {};
                                        return {
                                            s: a,
                                            n: function() {
                                                return i >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[i++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: a
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, l = !1;
                                return {
                                    s: function() {
                                        n = n.call(e);
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        l = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == n.return || n.return();
                                        } finally {
                                            if (l) throw r;
                                        }
                                    }
                                };
                            }
                            function h(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function v(e, t, n, i, a, r, o) {
                                try {
                                    var l = e[r](o), s = l.value;
                                } catch (e) {
                                    return void n(e);
                                }
                                l.done ? t(s) : Promise.resolve(s).then(i, a);
                            }
                            var m, g, y = t.EventHandlers = {
                                keyEvent: function(e, t, n, i, a) {
                                    var o = this.inputmask, p = o.opts, d = o.dependencyLib, h = o.maskset, v = this, m = d(v), g = e.key, k = c.caret.call(o, v), b = p.onKeyDown.call(this, e, c.getBuffer.call(o), k, p);
                                    if (void 0 !== b) return b;
                                    if (g === s.keys.Backspace || g === s.keys.Delete || r.iphone && g === s.keys.BACKSPACE_SAFARI || e.ctrlKey && g === s.keys.x && !("oncut" in v)) e.preventDefault(), 
                                    u.handleRemove.call(o, v, g, k), (0, l.writeBuffer)(v, c.getBuffer.call(o, !0), h.p, e, v.inputmask._valueGet() !== c.getBuffer.call(o).join("")); else if (g === s.keys.End || g === s.keys.PageDown) {
                                        e.preventDefault();
                                        var x = c.seekNext.call(o, c.getLastValidPosition.call(o));
                                        c.caret.call(o, v, e.shiftKey ? k.begin : x, x, !0);
                                    } else g === s.keys.Home && !e.shiftKey || g === s.keys.PageUp ? (e.preventDefault(), 
                                    c.caret.call(o, v, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && g === s.keys.Escape && !0 !== e.altKey ? ((0, 
                                    l.checkVal)(v, !0, !1, o.undoValue.split("")), m.trigger("click")) : g !== s.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== o.userOptions.insertMode ? !0 === p.tabThrough && g === s.keys.Tab ? !0 === e.shiftKey ? (k.end = c.seekPrevious.call(o, k.end, !0), 
                                    !0 === f.getTest.call(o, k.end - 1).match.static && k.end--, k.begin = c.seekPrevious.call(o, k.end, !0), 
                                    k.begin >= 0 && k.end > 0 && (e.preventDefault(), c.caret.call(o, v, k.begin, k.end))) : (k.begin = c.seekNext.call(o, k.begin, !0), 
                                    k.end = c.seekNext.call(o, k.begin, !0), k.end < h.maskLength && k.end--, k.begin <= h.maskLength && (e.preventDefault(), 
                                    c.caret.call(o, v, k.begin, k.end))) : e.shiftKey || (p.insertModeVisual && !1 === p.insertMode ? g === s.keys.ArrowRight ? setTimeout((function() {
                                        var e = c.caret.call(o, v);
                                        c.caret.call(o, v, e.begin);
                                    }), 0) : g === s.keys.ArrowLeft && setTimeout((function() {
                                        var e = c.translatePosition.call(o, v.inputmask.caretPos.begin);
                                        c.translatePosition.call(o, v.inputmask.caretPos.end);
                                        o.isRTL ? c.caret.call(o, v, e + (e === h.maskLength ? 0 : 1)) : c.caret.call(o, v, e - (0 === e ? 0 : 1));
                                    }), 0) : void 0 === o.keyEventHook || o.keyEventHook(e)) : u.isSelection.call(o, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                                    c.caret.call(o, v, k.begin, k.begin));
                                    return o.isComposing = g == s.keys.Process || g == s.keys.Unidentified, o.ignorable = g.length > 1 && !("textarea" === v.tagName.toLowerCase() && g == s.keys.Enter), 
                                    y.keypressEvent.call(this, e, t, n, i, a);
                                },
                                keypressEvent: function(e, t, n, i, a) {
                                    var r = this.inputmask || this, o = r.opts, f = r.dependencyLib, p = r.maskset, d = r.el, h = f(d), v = e.key;
                                    if (!0 === t || e.ctrlKey && e.altKey && !r.ignorable || !(e.ctrlKey || e.metaKey || r.ignorable)) {
                                        if (v) {
                                            var m, g = t ? {
                                                begin: a,
                                                end: a
                                            } : c.caret.call(r, d);
                                            t || (v = o.substitutes[v] || v), p.writeOutBuffer = !0;
                                            var y = u.isValid.call(r, g, v, i, void 0, void 0, void 0, t);
                                            if (!1 !== y && (c.resetMaskSet.call(r, !0), m = void 0 !== y.caret ? y.caret : c.seekNext.call(r, y.pos.begin ? y.pos.begin : y.pos), 
                                            p.p = m), m = o.numericInput && void 0 === y.caret ? c.seekPrevious.call(r, m) : m, 
                                            !1 !== n && (setTimeout((function() {
                                                o.onKeyValidation.call(d, v, y);
                                            }), 0), p.writeOutBuffer && !1 !== y)) {
                                                var k = c.getBuffer.call(r);
                                                (0, l.writeBuffer)(d, k, m, e, !0 !== t);
                                            }
                                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                        }
                                    } else v === s.keys.Enter && r.undoValue !== r._valueGet(!0) && (r.undoValue = r._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0));
                                },
                                pasteEvent: (m = p().mark((function e(t) {
                                    var n, i, a, r, s, u;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            n = function(e, n, i, a, o) {
                                                var s = c.caret.call(e, n, void 0, void 0, !0), u = i.substr(0, s.begin), f = i.substr(s.end, i.length);
                                                if (u == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(0, s.begin).join("") && (u = ""), 
                                                f == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(s.end).join("") && (f = ""), 
                                                a = u + a + f, e.isRTL && !0 !== r.numericInput) {
                                                    a = a.split("");
                                                    var p, h = d(c.getBufferTemplate.call(e));
                                                    try {
                                                        for (h.s(); !(p = h.n()).done; ) {
                                                            var v = p.value;
                                                            a[0] === v && a.shift();
                                                        }
                                                    } catch (e) {
                                                        h.e(e);
                                                    } finally {
                                                        h.f();
                                                    }
                                                    a = a.reverse().join("");
                                                }
                                                var m = a;
                                                if ("function" == typeof o) {
                                                    if (!1 === (m = o.call(e, m, r))) return !1;
                                                    m || (m = i);
                                                }
                                                (0, l.checkVal)(n, !0, !1, m.toString().split(""), t);
                                            }, i = this, a = this.inputmask, r = a.opts, s = a._valueGet(!0), a.skipInputEvent = !0, 
                                            t.clipboardData && t.clipboardData.getData ? u = t.clipboardData.getData("text/plain") : o.default.clipboardData && o.default.clipboardData.getData && (u = o.default.clipboardData.getData("Text")), 
                                            n(a, i, s, u, r.onBeforePaste), t.preventDefault();

                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }), e, this);
                                })), g = function() {
                                    var e = this, t = arguments;
                                    return new Promise((function(n, i) {
                                        var a = m.apply(e, t);
                                        function r(e) {
                                            v(a, n, i, r, o, "next", e);
                                        }
                                        function o(e) {
                                            v(a, n, i, r, o, "throw", e);
                                        }
                                        r(void 0);
                                    }));
                                }, function(e) {
                                    return g.apply(this, arguments);
                                }),
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                                    var a, o = this, u = o.inputmask._valueGet(!0), p = (t.isRTL ? c.getBuffer.call(t).slice().reverse() : c.getBuffer.call(t)).join(""), d = c.caret.call(t, o, void 0, void 0, !0);
                                    if (p !== u) {
                                        if (a = function(e, i, a) {
                                            for (var r, o, l, s = e.substr(0, a.begin).split(""), u = e.substr(a.begin).split(""), p = i.substr(0, a.begin).split(""), d = i.substr(a.begin).split(""), h = s.length >= p.length ? s.length : p.length, v = u.length >= d.length ? u.length : d.length, m = "", g = [], y = "~"; s.length < h; ) s.push(y);
                                            for (;p.length < h; ) p.push(y);
                                            for (;u.length < v; ) u.unshift(y);
                                            for (;d.length < v; ) d.unshift(y);
                                            var k = s.concat(u), b = p.concat(d);
                                            for (o = 0, r = k.length; o < r; o++) switch (l = f.getPlaceholder.call(t, c.translatePosition.call(t, o)), 
                                            m) {
                                              case "insertText":
                                                b[o - 1] === k[o] && a.begin == k.length - 1 && g.push(k[o]), o = r;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                k[o] === y ? a.end++ : o = r;
                                                break;

                                              default:
                                                k[o] !== b[o] && (k[o + 1] !== y && k[o + 1] !== l && void 0 !== k[o + 1] || (b[o] !== l || b[o + 1] !== y) && b[o] !== y ? b[o + 1] === y && b[o] === k[o + 1] ? (m = "insertText", 
                                                g.push(k[o]), a.begin--, a.end--) : k[o] !== l && k[o] !== y && (k[o + 1] === y || b[o] !== k[o] && b[o + 1] === k[o + 1]) ? (m = "insertReplacementText", 
                                                g.push(k[o]), a.begin--) : k[o] === y ? (m = "deleteContentBackward", (c.isMask.call(t, c.translatePosition.call(t, o), !0) || b[o] === n.radixPoint) && a.end++) : o = r : (m = "insertText", 
                                                g.push(k[o]), a.begin--, a.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: a
                                            };
                                        }(u, p, d), (o.inputmask.shadowRoot || o.ownerDocument).activeElement !== o && o.focus(), 
                                        (0, l.writeBuffer)(o, c.getBuffer.call(t)), c.caret.call(t, o, d.begin, d.end, !0), 
                                        !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === a.action && t.isComposing) return !1;
                                        switch ("insertCompositionText" === e.inputType && "insertText" === a.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                                        a.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            a.data.forEach((function(e, n) {
                                                var a = new i.Event("keypress");
                                                a.key = e, t.ignorable = !1, y.keypressEvent.call(o, a);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var h = new i.Event("keydown");
                                            h.key = s.keys.Backspace, y.keyEvent.call(o, h);
                                            break;

                                          default:
                                            (0, l.applyInputValue)(o, u), c.caret.call(t, o, d.begin, d.end, !0);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, n = t.dependencyLib, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, l.applyInputValue)(i, a, new n.Event("input")), 
                                    (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && c.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, n = t.opts, i = t && t._valueGet();
                                    n.showMaskOnFocus && i !== c.getBuffer.call(t).join("") && (0, l.writeBuffer)(this, c.getBuffer.call(t), c.seekNext.call(t, c.getLastValidPosition.call(t))), 
                                    !0 !== n.positionCaretOnTab || !1 !== t.mouseEnter || u.isComplete.call(t, c.getBuffer.call(t)) && -1 !== c.getLastValidPosition.call(t) || y.clickEvent.apply(this, [ e, !0 ]), 
                                    t.undoValue = t && t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, n = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n && (0, 
                                    l.HandleNativePlaceholder)(n, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var n = this.inputmask;
                                    n.clicked++;
                                    var i = this;
                                    if ((i.inputmask.shadowRoot || i.ownerDocument).activeElement === i) {
                                        var a = c.determineNewCaretPosition.call(n, c.caret.call(n, i), t);
                                        void 0 !== a && c.caret.call(n, i, a);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, n = t.maskset, i = this, a = c.caret.call(t, i), r = t.isRTL ? c.getBuffer.call(t).slice(a.end, a.begin) : c.getBuffer.call(t).slice(a.begin, a.end), f = t.isRTL ? r.reverse().join("") : r.join("");
                                    o.default.navigator && o.default.navigator.clipboard ? o.default.navigator.clipboard.writeText(f) : o.default.clipboardData && o.default.clipboardData.getData && o.default.clipboardData.setData("Text", f), 
                                    u.handleRemove.call(t, i, s.keys.Delete, a), (0, l.writeBuffer)(i, c.getBuffer.call(t), n.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                                    t.clicked = 0;
                                    var a = i(this), r = this;
                                    if (r.inputmask) {
                                        (0, l.HandleNativePlaceholder)(r, t.originalPlaceholder);
                                        var o = r.inputmask._valueGet(), s = c.getBuffer.call(t).slice();
                                        "" !== o && (n.clearMaskOnLostFocus && (-1 === c.getLastValidPosition.call(t) && o === c.getBufferTemplate.call(t).join("") ? s = [] : l.clearOptionalTail.call(t, s)), 
                                        !1 === u.isComplete.call(t, s) && (setTimeout((function() {
                                            a.trigger("incomplete");
                                        }), 0), n.clearIncomplete && (c.resetMaskSet.call(t, !1), s = n.clearMaskOnLostFocus ? [] : c.getBufferTemplate.call(t).slice())), 
                                        (0, l.writeBuffer)(r, s, void 0, e)), o = t._valueGet(!0), t.undoValue !== o && ("" != o || t.undoValue != c.getBufferTemplate.call(t).join("") || t.undoValue == c.getBufferTemplate.call(t).join("") && t.maskset.validPositions.length > 0) && (t.undoValue = o, 
                                        a.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts.showMaskOnHover, n = this;
                                    if (e.mouseEnter = !0, (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n) {
                                        var i = (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).join("");
                                        t && (0, l.HandleNativePlaceholder)(n, i);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === c.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === c.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === u.isComplete.call(e, c.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, l.writeBuffer)(e.el, c.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, l.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                        },
                        9716: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var i, a = n(7760), r = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            }, o = n(2839), l = n(8711);
                            t.EventRuler = {
                                on: function(e, t, n) {
                                    var i = e.inputmask.dependencyLib, s = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var s, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                                        if (void 0 === u && "FORM" !== this.nodeName) {
                                            var p = i.data(c, "_inputmask_opts");
                                            i(c).off(), p && new r.default(p).mask(c);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === o.keys.c || !1 === f.tabThrough && t.key === o.keys.Tab))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, a.HandleNativePlaceholder)(e, (u.isRTL ? l.getBufferTemplate.call(u).slice().reverse() : l.getBufferTemplate.call(u)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (s = arguments, void setTimeout((function() {
                                                        e.inputmask && n.apply(c, s);
                                                    }), 0));
                                                }
                                                var d = n.apply(c, arguments);
                                                return !1 === d && (t.preventDefault(), t.stopPropagation()), d;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && i(e.form).on(t, s)) : i(e).on(t, s), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var n = e.inputmask.dependencyLib, i = e.inputmask.events;
                                        for (var a in t && ((i = [])[t] = e.inputmask.events[t]), i) {
                                            for (var r = i[a]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(a) ? null !== e.form && n(e.form).off(a, o) : n(e).off(a, o);
                                            }
                                            delete e.inputmask.events[a];
                                        }
                                    }
                                }
                            };
                        },
                        219: function(e, t, n) {
                            var i = p(n(7184)), a = p(n(2394)), r = n(2839), o = n(8711), l = n(4713);
                            function s(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != n) {
                                        var i, a, r, o, l = [], s = !0, c = !1;
                                        try {
                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                if (Object(n) !== n) return;
                                                s = !1;
                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return l;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function u(e) {
                                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, u(e);
                            }
                            function f(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                                    Object.defineProperty(e, (a = i.key, r = void 0, r = function(e, t) {
                                        if ("object" !== u(e) || null === e) return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var i = n.call(e, t || "default");
                                            if ("object" !== u(i)) return i;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(a, "string"), "symbol" === u(r) ? r : String(r)), i);
                                }
                                var a, r;
                            }
                            function p(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            n(1313);
                            var d = a.default.dependencyLib, h = function() {
                                function e(t, n, i, a) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = n, this.opts = i, this.inputmask = a, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts, this.inputmask);
                                }
                                var t, n, i;
                                return t = e, (n = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts, this.inputmask)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t, n) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var a = /\d+$/.exec(i[0]), r = a ? i[0][0] + "x" : i[0], o = void 0;
                                            if (void 0 !== e) {
                                                if (a) {
                                                    var s = P(t).lastIndex, c = j.call(n, i.index, t, n && n.maskset);
                                                    P(t).lastIndex = s, o = e.slice(0, e.indexOf(c.nextMatch[0]));
                                                } else {
                                                    for (var u = i[0][0], f = i.index; n && (t.placeholder[l.getTest.call(n, f).match.placeholder] || l.getTest.call(n, f).match.placeholder) === u; ) f++;
                                                    var p = f - i.index;
                                                    o = e.slice(0, p || y[r] && y[r][4] || r.length);
                                                }
                                                e = e.slice(o.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(y, r) && this.setValue(this, o, r, y[r][2], y[r][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, n, i, a) {
                                        if (void 0 !== t) switch (i) {
                                          case "ampm":
                                            e[i] = t, e["raw" + i] = t.replace(/\s/g, "_");
                                            break;

                                          case "month":
                                            if ("mmm" === n || "mmmm" === n) {
                                                e[i] = _("mmm" === n ? m.monthNames.slice(0, 12).findIndex((function(e) {
                                                    return t.toLowerCase() === e.toLowerCase();
                                                })) + 1 : m.monthNames.slice(12, 24).findIndex((function(e) {
                                                    return t.toLowerCase() === e.toLowerCase();
                                                })) + 1, 2), e[i] = "00" === e[i] ? "" : e[i].toString(), e["raw" + i] = e[i];
                                                break;
                                            }

                                          default:
                                            e[i] = t.replace(/[^0-9]/g, "0"), e["raw" + i] = t.replace(/\s/g, "_");
                                        }
                                        if (void 0 !== a) {
                                            var r = e[i];
                                            ("day" === i && 29 === parseInt(r) || "month" === i && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === i && (g = !0, 0 === parseInt(r) && (r = 1)), "month" === i && (g = !0), 
                                            "year" === i && (g = !0, r.length < y[n][4] && (r = _(r, y[n][4], !0))), ("" !== r && !isNaN(r) || "ampm" === i) && a.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, n), i && f(t, i), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = a.default.prototype.i18n, g = !1, y = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return _(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return _(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ m.monthNames.slice(0, 12).join("|"), function(e) {
                                    var t = m.monthNames.slice(0, 12).findIndex((function(t) {
                                        return e.toLowerCase() === t.toLowerCase();
                                    }));
                                    return -1 !== t && Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return m.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
                                } ],
                                mmmm: [ m.monthNames.slice(12, 24).join("|"), function(e) {
                                    var t = m.monthNames.slice(12, 24).findIndex((function(t) {
                                        return e.toLowerCase() === t.toLowerCase();
                                    }));
                                    return -1 !== t && Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return m.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
                                } ],
                                yy: [ "[0-9]{2}", function(e) {
                                    var t = (new Date).getFullYear().toString().slice(0, 2);
                                    Date.prototype.setFullYear.call(this, "".concat(t).concat(e));
                                }, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 2);
                                }, 2 ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 4);
                                }, 4 ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return _(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return _(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return _(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 3);
                                }, 3 ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 2);
                                }, 2 ],
                                t: [ "[ap]", b, "ampm", x, 1 ],
                                tt: [ "[ap]m", b, "ampm", x, 2 ],
                                T: [ "[AP]", b, "ampm", x, 1 ],
                                TT: [ "[AP]M", b, "ampm", x, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return s(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, k = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function b(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function x() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function w(e) {
                                var t = /\d+$/.exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var n = y[e[0][0] + "x"].slice("");
                                    return n[0] = n[0](t[0]), n[3] = n[3](t[0]), n;
                                }
                                if (y[e[0]]) return y[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], n = [];
                                    for (var i in y) if (/\.*x$/.test(i)) {
                                        var a = i[0] + "\\d+";
                                        -1 === n.indexOf(a) && n.push(a);
                                    } else -1 === t.indexOf(i[0]) && t.push(i[0]);
                                    e.tokenizer = "(" + (n.length > 0 ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function S(e, t, n) {
                                if (!g) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var i = j.call(this, t.pos, n, this.maskset);
                                    if (i.targetMatch && "yyyy" === i.targetMatch[0] && t.pos - i.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if (2 == e.date.getMonth() && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function O(e, t, n, a) {
                                var r, o, l = "", s = 0, c = {};
                                for (P(n).lastIndex = 0; r = P(n).exec(e); ) {
                                    if (void 0 === t) if (o = w(r)) l += "(" + o[0] + ")", n.placeholder && "" !== n.placeholder ? (c[s] = n.placeholder[r.index % n.placeholder.length], 
                                    c[n.placeholder[r.index % n.placeholder.length]] = r[0].charAt(0)) : c[s] = r[0].charAt(0); else switch (r[0]) {
                                      case "[":
                                        l += "(";
                                        break;

                                      case "]":
                                        l += ")?";
                                        break;

                                      default:
                                        l += (0, i.default)(r[0]), c[s] = r[0].charAt(0);
                                    } else if (o = w(r)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += r[0]; else l += r[0];
                                    s++;
                                }
                                return void 0 === t && (n.placeholder = c), l;
                            }
                            function _(e, t, n) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = n ? e + "0" : "0" + e;
                                return e;
                            }
                            function M(e, t, n) {
                                return "string" == typeof e ? new h(e, t, n, this) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function E(e, t) {
                                return O(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function j(e, t, n) {
                                var i, a, r = this, o = n && n.tests[e] ? t.placeholder[n.tests[e][0].match.placeholder] || n.tests[e][0].match.placeholder : "", s = 0, c = 0;
                                for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                                    var u = /\d+$/.exec(a[0]);
                                    if (u) c = parseInt(u[0]); else {
                                        for (var f = a[0][0], p = s; r && (t.placeholder[l.getTest.call(r, p).match.placeholder] || l.getTest.call(r, p).match.placeholder) === f; ) p++;
                                        0 === (c = p - s) && (c = a[0].length);
                                    }
                                    if (s += c, -1 != a[0].indexOf(o) || s >= e + 1) {
                                        i = a, a = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: s - c,
                                    nextMatch: a,
                                    targetMatch: i
                                };
                            }
                            a.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, y.S = m.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.regex = O(e.inputFormat, void 0, e), e.min = M(e.min, e.inputFormat, e), e.max = M(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    preValidation: function(e, t, n, i, a, r, o, l) {
                                        if (l) return !0;
                                        if (isNaN(n) && e[t] !== n) {
                                            var s = j.call(this, t, a, r);
                                            if (s.nextMatch && s.nextMatch[0] === n && s.targetMatch[0].length > 1) {
                                                var c = w(s.targetMatch)[0];
                                                if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, n, i, a, r, o, s) {
                                        var c, u, f = this;
                                        if (o) return !0;
                                        if (!1 === i && (((c = j.call(f, t + 1, a, r)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]] || (c = j.call(f, t + 2, a, r)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]]) && (u = w(c.targetMatch)[0]), 
                                        void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(n + "0") ? (e[t] = n, 
                                        e[t + 1] = "0", i = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(u).test("0" + n) && (e[t] = "0", e[t + 1] = n, i = {
                                            pos: t + 2
                                        })), !1 === i)) return i;
                                        if (i.fuzzy && (e = i.buffer, t = i.pos), (c = j.call(f, t, a, r)).targetMatch && c.targetMatch[0] && void 0 !== y[c.targetMatch[0]]) {
                                            var p = w(c.targetMatch);
                                            u = p[0];
                                            var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                            if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                            "year" == p[2]) for (var h = l.getMaskTemplate.call(f, !1, 1, void 0, !0), m = t + 1; m < e.length; m++) e[m] = h[m], 
                                            r.validPositions.splice(t + 1, 1);
                                        }
                                        var g = i, k = M.call(f, e.join(""), a.inputFormat, a);
                                        return g && !isNaN(k.date.getTime()) && (a.prefillYear && (g = function(e, t, n) {
                                            if (e.year !== e.rawyear) {
                                                var i = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = i.slice(0, a.length), o = i.slice(a.length);
                                                if (2 === a.length && a === r) {
                                                    var l = new Date(v, e.month - 1, e.day);
                                                    e.day == l.getDate() && (!n.max || n.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = i, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(k, g, a)), g = function(e, t, n, i) {
                                            if (!t) return t;
                                            if (t && n.min && !isNaN(n.min.date.getTime())) {
                                                var r;
                                                for (e.reset(), P(n).lastIndex = 0; r = P(n).exec(n.inputFormat); ) {
                                                    var o;
                                                    if ((o = w(r)) && o[3]) {
                                                        for (var l = o[1], s = e[o[2]], c = n.min[o[2]], u = n.max ? n.max[o[2]] : c + 1, f = [], p = !1, d = 0; d < c.length; d++) void 0 !== i.validPositions[d + r.index] || p ? (f[d] = s[d], 
                                                        p = p || s[d] > c[d]) : (d + r.index == 0 && s[d] < c[d] ? (f[d] = s[d], p = !0) : f[d] = c[d], 
                                                        "year" === o[2] && s.length - 1 == d && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && c != u && n.min.date.getTime() > e.date.getTime() && (f[d] = u[d]));
                                                        l.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = n.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && n.max && (isNaN(n.max.date.getTime()) || (t = n.max.date.getTime() >= e.date.getTime())), 
                                            t;
                                        }(k, g = S.call(f, k, g, a), a, r)), void 0 !== t && g && i.pos !== t ? {
                                            buffer: O(a.inputFormat, k, a).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: i.pos
                                            },
                                            pos: i.caret || i.pos
                                        } : g;
                                    },
                                    onKeyDown: function(e, t, n, i) {
                                        e.ctrlKey && e.key === r.keys.ArrowRight && (this.inputmask._valueSet(E(new Date, i)), 
                                        d(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, n) {
                                        return t ? O(n.outputFormat, M.call(this, e, n.inputFormat, n), n, !0) : t;
                                    },
                                    casing: function(e, t, n, i) {
                                        if (0 == t.nativeDef.indexOf("[ap]")) return e.toLowerCase();
                                        if (0 == t.nativeDef.indexOf("[AP]")) return e.toUpperCase();
                                        var a = l.getTest.call(this, [ n - 1 ]);
                                        return 0 == a.match.def.indexOf("[AP]") || 0 === n || a && a.input === String.fromCharCode(r.keyCode.Space) || a && a.match.def === String.fromCharCode(r.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = E(e, t)), e;
                                    },
                                    insertMode: !1,
                                    insertModeVisual: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        1313: function(e, t, n) {
                            var i, a = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            };
                            a.default.dependencyLib.extend(!0, a.default.prototype.i18n, {
                                dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                ordinalSuffix: [ "st", "nd", "rd", "th" ]
                            });
                        },
                        3851: function(e, t, n) {
                            var i, a = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            }, r = n(8711), o = n(4713);
                            function l(e) {
                                return function(e) {
                                    if (Array.isArray(e)) return s(e);
                                }(e) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                                }(e) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return s(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                }(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            a.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var c = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
                            function u(e, t, n, i, a) {
                                if (n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, 
                                a.greedy && parseInt(e) > 255 && c.test("00" + e.charAt(2))) {
                                    var r = [].concat(l(t.buffer.slice(0, n)), [ ".", e.charAt(2) ]);
                                    if (r.join("").match(/\./g).length < 4) return {
                                        refreshFromBuffer: !0,
                                        buffer: r,
                                        caret: n + 2
                                    };
                                }
                                return c.test(e);
                            }
                            a.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: u
                                        },
                                        j: {
                                            validator: u
                                        },
                                        k: {
                                            validator: u
                                        },
                                        l: {
                                            validator: u
                                        }
                                    },
                                    onUnMask: function(e, t, n) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = e.separator, n = e.quantifier, i = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = i;
                                        if (t) for (var r = 0; r < n; r++) a += "[".concat(t).concat(i, "]");
                                        return a;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, n) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, n, i, a, l, s) {
                                        var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, n) {
                            var i = l(n(7184)), a = l(n(2394)), r = n(2839), o = n(8711);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = a.default.dependencyLib;
                            function c(e, t) {
                                for (var n = "", i = 0; i < e.length; i++) a.default.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker[0] === e.charAt(i) || t.optionalmarker[1] === e.charAt(i) || t.quantifiermarker[0] === e.charAt(i) || t.quantifiermarker[1] === e.charAt(i) || t.groupmarker[0] === e.charAt(i) || t.groupmarker[1] === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
                                return n;
                            }
                            function u(e, t, n, i) {
                                if (e.length > 0 && t > 0 && (!n.digitsOptional || i)) {
                                    var a = e.indexOf(n.radixPoint), r = !1;
                                    n.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(n.radixPoint), 
                                    a = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                                }
                                return r && e.push(n.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var n = 0;
                                for (var i in "+" === e && (n = o.seekNext.call(this, t.validPositions.length - 1)), 
                                t.tests) if ((i = parseInt(i)) >= n) for (var a = 0, r = t.tests[i].length; a < r; a++) if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][a].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
                                return n;
                            }
                            function p(e, t) {
                                for (var n = -1, i = 0, a = t.validPositions.length; i < a; i++) {
                                    var r = t.validPositions[i];
                                    if (r && r.match.def === e) {
                                        n = i;
                                        break;
                                    }
                                }
                                return n;
                            }
                            function d(e, t, n, i, a) {
                                var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || i && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                                return !i && a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === n ? r + 1 : r,
                                        c: a.radixPoint
                                    },
                                    pos: n
                                } : o;
                            }
                            a.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", n = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[n] && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[n].placeholder = e.radixPoint, e.definitions[n].static = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var a, r = "[+]";
                                        if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += n + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = r + n + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : r += n + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return r += c(e.suffix, e), r += "[-]", a && (r = [ a + c(e.suffix, e) + "[-]", r ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            i.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, i.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        r;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    substituteRadixPoint: !0,
                                    definitions: {
                                        0: {
                                            validator: d
                                        },
                                        1: {
                                            validator: d,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, n, i, a) {
                                                return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, n, i, a) {
                                                return a.allowMinus && e === a.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, n, i, a, r, o, l) {
                                        var s = this;
                                        if (!1 !== a.__financeInput && n === a.radixPoint) return !1;
                                        var c = e.indexOf(a.radixPoint), u = t;
                                        if (t = function(e, t, n, i, a) {
                                            return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= n && (n > 0 || t == a.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, n, c, r, a), "-" === n || n === a.negationSymbol.front) {
                                            if (!0 !== a.allowMinus) return !1;
                                            var d = !1, h = p("+", r), v = p("-", r);
                                            return -1 !== h && (d = [ h ], -1 !== v && d.push(v)), !1 !== d ? {
                                                remove: d,
                                                caret: u - a.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(s, "+", r),
                                                    c: a.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(s, "-", r),
                                                    c: a.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: u + a.negationSymbol.back.length
                                            };
                                        }
                                        if (n === a.groupSeparator) return {
                                            caret: u
                                        };
                                        if (l) return !0;
                                        if (-1 !== c && !0 === a._radixDance && !1 === i && n === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && c !== t) {
                                            var m = f.call(s, a.radixPoint, r);
                                            return r.validPositions[m] && (r.validPositions[m].generatedInput = r.validPositions[m].generated || !1), 
                                            {
                                                caret: a._radixDance && t === c - 1 ? c + 1 : c
                                            };
                                        }
                                        if (!1 === a.__financeInput) if (i) {
                                            if (a.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!a.digitsOptional) {
                                                if (o.begin > c && o.end <= c) return n === a.radixPoint ? {
                                                    insert: {
                                                        pos: c + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: c
                                                } : {
                                                    rewritePosition: c + 1
                                                };
                                                if (o.begin < c) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: c
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, n, i, a, r, o) {
                                        if (!1 === i) return i;
                                        if (o) return !0;
                                        if (null !== a.min || null !== a.max) {
                                            var l = a.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== a.min && l < a.min && (l.toString().length > a.min.toString().length || l < 0)) return !1;
                                            if (null !== a.max && l > a.max) return !!a.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                            };
                                        }
                                        return i;
                                    },
                                    onUnMask: function(e, t, n) {
                                        if ("" === t && !0 === n.nullable) return t;
                                        var a = e.replace(n.prefix, "");
                                        return a = (a = a.replace(n.suffix, "")).replace(new RegExp((0, i.default)(n.groupSeparator), "g"), ""), 
                                        "" !== n.placeholder.charAt(0) && (a = a.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), 
                                        n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== a.indexOf(n.radixPoint) && (a = a.replace(i.default.call(this, n.radixPoint), ".")), 
                                        a = (a = a.replace(new RegExp("^" + (0, i.default)(n.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        i.default)(n.negationSymbol.back) + "$"), ""), Number(a)) : a;
                                    },
                                    isComplete: function(e, t) {
                                        var n = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return n = (n = (n = (n = (n = n.replace(new RegExp("^" + (0, i.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        i.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        i.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace((0, 
                                        i.default)(t.radixPoint), ".")), isFinite(n);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var n;
                                        e = null !== (n = e) && void 0 !== n ? n : "";
                                        var a = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === a || (e = e.toString().replace(".", a));
                                        var r = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, o = e.split(a), l = o[0].replace(/[^\-0-9]/g, ""), s = o.length > 1 ? o[1].replace(/[^0-9]/g, "") : "", c = o.length > 1;
                                        e = l + ("" !== s ? a + s : s);
                                        var f = 0;
                                        if ("" !== a && (f = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                                        "" !== s || !t.digitsOptional)) {
                                            var p = Math.pow(10, f || 1);
                                            e = e.replace((0, i.default)(a), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * p) / p).toFixed(f)), 
                                            e = e.toString().replace(".", a);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(a) && (e = e.substring(0, e.indexOf(a))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(a, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", a) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", a));
                                        }
                                        return r && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), f, t, c).join("");
                                    },
                                    onBeforeWrite: function(e, t, n, a) {
                                        function r(e, t) {
                                            if (!1 !== a.__financeInput || t) {
                                                var n = e.indexOf(a.radixPoint);
                                                -1 !== n && e.splice(n, 1);
                                            }
                                            if ("" !== a.groupSeparator) for (;-1 !== (n = e.indexOf(a.groupSeparator)); ) e.splice(n, 1);
                                            return e;
                                        }
                                        var o, l;
                                        if (a.stripLeadingZeroes && (l = function(e, t) {
                                            var n = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, i.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            i.default)(t.prefix) + ")(.*)(" + (0, i.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            i.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = n ? n[2] : "", r = !1;
                                            return a && (a = a.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                            !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < a.length)) && r;
                                        }(t, a))) for (var c = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, p = l[0].length - f; p > 0; p--) this.maskset.validPositions.splice(c + p, 1), 
                                        delete t[c + p];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== a.min) {
                                                var d = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== a.min && d < a.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: u(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === a.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, i.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                                i.default)(a.prefix) + ")(.*)(" + (0, i.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                                i.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== a.radixPoint) t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: r(t)
                                            }));
                                            if (a.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = u(v, a.digits, a, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, n, i) {
                                        var a, o = s(this);
                                        if (3 != e.location) {
                                            var l, c = e.key;
                                            if ((l = i.shortcuts && i.shortcuts[c]) && l.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(l)), 
                                            o.trigger("setvalue"), !1;
                                        }
                                        if (e.ctrlKey) switch (e.key) {
                                          case r.keys.ArrowUp:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), 
                                            o.trigger("setvalue"), !1;

                                          case r.keys.ArrowDown:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), 
                                            o.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.key === r.keys.Delete || e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI) && n.begin !== t.length) {
                                            if (t[e.key === r.keys.Delete ? n.begin - 1 : n.end] === i.negationSymbol.front) return a = t.slice().reverse(), 
                                            "" !== i.negationSymbol.front && a.shift(), "" !== i.negationSymbol.back && a.pop(), 
                                            o.trigger("setvalue", [ a.join(""), n.begin ]), !1;
                                            if (!0 === i._radixDance) {
                                                var f, p = t.indexOf(i.radixPoint);
                                                if (i.digitsOptional) {
                                                    if (0 === p) return (a = t.slice().reverse()).pop(), o.trigger("setvalue", [ a.join(""), n.begin >= a.length ? a.length : n.begin ]), 
                                                    !1;
                                                } else if (-1 !== p && (n.begin < p || n.end < p || e.key === r.keys.Delete && (n.begin === p || n.begin - 1 === p))) return n.begin === n.end && (e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI ? n.begin++ : e.key === r.keys.Delete && n.begin - 1 === p && (f = s.extend({}, n), 
                                                n.begin--, n.end--)), (a = t.slice().reverse()).splice(a.length - n.begin, n.begin - n.end + 1), 
                                                a = u(a, i.digits, i).join(""), f && (n = f), o.trigger("setvalue", [ a, n.begin >= a.length ? p + 1 : n.begin ]), 
                                                !1;
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = n ? window : {};
                        },
                        7760: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var n = e ? e.inputmask : this;
                                if (i.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var a = o.getBuffer.call(n).slice(), r = e.inputmask._valueGet();
                                        if (r !== t) {
                                            var l = o.getLastValidPosition.call(n);
                                            -1 === l && r === o.getBufferTemplate.call(n).join("") ? a = [] : -1 !== l && u.call(n, a), 
                                            p(e, a);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, n = t.opts, i = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                for (var a = [], r = i.validPositions, l = 0, s = r.length; l < s; l++) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(i.metadata) && !0 !== r[l].generatedInput) && a.push(r[l].input);
                                var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                                if ("function" == typeof n.onUnMask) {
                                    var f = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                                    u = n.onUnMask.call(t, f, u, n);
                                }
                                return u;
                            }, t.writeBuffer = p;
                            var i = n(9845), a = n(6030), r = n(2839), o = n(8711), l = n(7215), s = n(4713);
                            function c(e, t, n) {
                                var i = e ? e.inputmask : this, a = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                                f(e, !0, !1, t = (t || "").toString().split(""), n), i.undoValue = i._valueGet(!0), 
                                (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function u(e) {
                                e.length = 0;
                                for (var t, n = s.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = n.shift()); ) e.push(t);
                                return e;
                            }
                            function f(e, t, n, i, r) {
                                var c, u = e ? e.inputmask : this, f = u.maskset, d = u.opts, h = u.dependencyLib, v = i.slice(), m = "", g = -1, y = d.skipOptionalPartCharacter;
                                d.skipOptionalPartCharacter = "", o.resetMaskSet.call(u, !1), u.clicked = 0, g = d.radixPoint ? o.determineNewCaretPosition.call(u, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === d.__financeInput ? "radixFocus" : void 0).begin : 0, f.p = g, u.caretPos = {
                                    begin: g
                                };
                                var k = [], b = u.caretPos;
                                if (v.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var i = new h.Event("_checkval");
                                        i.key = e, m += e;
                                        var r = o.getLastValidPosition.call(u, void 0, !0);
                                        !function(e, t) {
                                            for (var n = s.getMaskTemplate.call(u, !0, 0).slice(e, o.seekNext.call(u, e, !1, !1)).join("").replace(/'/g, ""), i = n.indexOf(t); i > 0 && " " === n[i - 1]; ) i--;
                                            var a = 0 === i && !o.isMask.call(u, e) && (s.getTest.call(u, e).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e).match.static && s.getTest.call(u, e).match.nativeDef === "'" + t.charAt(0) || " " === s.getTest.call(u, e).match.nativeDef && (s.getTest.call(u, e + 1).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e + 1).match.static && s.getTest.call(u, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!a && i > 0 && !o.isMask.call(u, e, !1, !0)) {
                                                var r = o.seekNext.call(u, e);
                                                u.caretPos.begin < r && (u.caretPos = {
                                                    begin: r
                                                });
                                            }
                                            return a;
                                        }(g, m) ? (c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, u.caretPos.begin)) && (g = u.caretPos.begin + 1, 
                                        m = "") : c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, r + 1), c ? (void 0 !== c.pos && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static && void 0 === f.validPositions[c.pos].alternation && (k.push(c.pos), 
                                        u.isRTL || (c.forwardPosition = c.pos + 1)), p.call(u, void 0, o.getBuffer.call(u), c.forwardPosition, i, !1), 
                                        u.caretPos = {
                                            begin: c.forwardPosition,
                                            end: c.forwardPosition
                                        }, b = u.caretPos) : void 0 === f.validPositions[t] && v[t] === s.getPlaceholder.call(u, t) && o.isMask.call(u, t, !0) ? u.caretPos.begin++ : u.caretPos = b;
                                    }
                                })), k.length > 0) {
                                    var x, w, P = o.seekNext.call(u, -1, void 0, !1);
                                    if (!l.isComplete.call(u, o.getBuffer.call(u)) && k.length <= P || l.isComplete.call(u, o.getBuffer.call(u)) && k.length > 0 && k.length !== P && 0 === k[0]) for (var S = P; void 0 !== (x = k.shift()); ) if (x < S) {
                                        var O = new h.Event("_checkval");
                                        if ((w = f.validPositions[x]).generatedInput = !0, O.key = w.input, (c = a.EventHandlers.keypressEvent.call(u, O, !0, !1, n, S)) && void 0 !== c.pos && c.pos !== x && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static) k.push(c.pos); else if (!c) break;
                                        S++;
                                    }
                                }
                                t && p.call(u, e, o.getBuffer.call(u), c ? c.forwardPosition : u.caretPos.begin, r || new h.Event("checkval"), r && ("input" === r.type && u.undoValue !== o.getBuffer.call(u).join("") || "paste" === r.type)), 
                                d.skipOptionalPartCharacter = y;
                            }
                            function p(e, t, n, i, a) {
                                var s = e ? e.inputmask : this, c = s.opts, u = s.dependencyLib;
                                if (i && "function" == typeof c.onBeforeWrite) {
                                    var f = c.onBeforeWrite.call(s, i, t, n, c);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var p = f.refreshFromBuffer;
                                            l.refreshFromBuffer.call(s, !0 === p ? p : p.start, p.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                                        }
                                        void 0 !== n && (n = void 0 !== f.caret ? f.caret : n);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === n || void 0 !== i && "blur" === i.type || o.caret.call(s, e, n, void 0, void 0, void 0 !== i && "keydown" === i.type && (i.key === r.keys.Delete || i.key === r.keys.Backspace)), 
                                void 0 === e.inputmask.writeBufferHook || e.inputmask.writeBufferHook(n), !0 === a)) {
                                    var d = u(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, d.trigger("input"), setTimeout((function() {
                                        h === o.getBufferTemplate.call(s).join("") ? d.trigger("cleared") : !0 === l.isComplete.call(s, t) && d.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = v(n(3976)), a = v(n(7392)), r = v(n(4963)), o = n(9716), l = v(n(9380)), s = n(7760), c = n(157), u = n(2391), f = n(8711), p = n(7215), d = n(4713);
                            function h(e) {
                                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, h(e);
                            }
                            function v(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var m = l.default.document, g = "_inputmask_opts";
                            function y(e, t, n) {
                                if (!(this instanceof y)) return new y(e, t, n);
                                this.dependencyLib = r.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                !0 !== n && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                e && (t.alias = e)), this.opts = r.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                this.userOptions = t || {}, k(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                                this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                                this.isComposing = !1, this.hasAlternator = !1;
                            }
                            function k(e, t, n) {
                                var i = y.prototype.aliases[e];
                                return i ? (i.alias && k(i.alias, void 0, n), r.default.extend(!0, n, i), r.default.extend(!0, n, t), 
                                !0) : (null === n.mask && (n.mask = e), !1);
                            }
                            y.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: i.default,
                                definitions: a.default,
                                aliases: {},
                                masksCache: {},
                                i18n: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, n) {
                                        var i = r.default.extend(!0, {}, t.opts);
                                        if (function(e, t, n, i) {
                                            function a(t, a) {
                                                var r = "" === i ? t : i + "-" + t;
                                                null !== (a = void 0 !== a ? a : e.getAttribute(r)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = l.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                                n[t] = a);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var o, s, c, u, f = e.getAttribute(i);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                                s) for (u in c = void 0, s) if ("alias" === u.toLowerCase()) {
                                                    c = s[u];
                                                    break;
                                                }
                                                for (o in a("alias", c), n.alias && k(n.alias, n, t), t) {
                                                    if (s) for (u in c = void 0, s) if (u.toLowerCase() === o.toLowerCase()) {
                                                        c = s[u];
                                                        break;
                                                    }
                                                    a(o, c);
                                                }
                                            }
                                            r.default.extend(!0, t, n), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(n).length;
                                        }(e, i, r.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var a = (0, u.generateMaskSet)(i, t.noMasksCache);
                                            void 0 !== a && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = i, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = r.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, r.default)(e), e.inputmask.maskset = a, r.default.data(e, g, t.userOptions), 
                                            c.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === h(e) ? (r.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        s.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, f.getBuffer.call(this), 0, this.opts);
                                    }
                                    return s.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        r.default.data(this.el, g, null);
                                        var e = this.opts.autoUnmask ? (0, s.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== f.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        o.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : m.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    (this.isRTL ? f.getBufferTemplate.call(this).reverse() : f.getBufferTemplate.call(this)).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    p.isComplete.call(this, f.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = d.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        s.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                                    for (var n = f.getBuffer.call(this), i = f.determineLastRequiredPosition.call(this), a = n.length - 1; a > i && !f.isMask.call(this, a); a--) ;
                                    return n.splice(i, a + 1 - i), p.isComplete.call(this, n) && e === (this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache);
                                    var n = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    s.checkVal.call(this, void 0, !0, !1, n);
                                    var i = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                                    return t ? {
                                        value: i,
                                        metadata: this.getmetadata()
                                    } : i;
                                },
                                setValue: function(e) {
                                    this.el && (0, r.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: u.analyseMask
                            }, y.extendDefaults = function(e) {
                                r.default.extend(!0, y.prototype.defaults, e);
                            }, y.extendDefinitions = function(e) {
                                r.default.extend(!0, y.prototype.definitions, e);
                            }, y.extendAliases = function(e) {
                                r.default.extend(!0, y.prototype.aliases, e);
                            }, y.format = function(e, t, n) {
                                return y(t).format(e, n);
                            }, y.unmask = function(e, t) {
                                return y(t).unmaskedvalue(e);
                            }, y.isValid = function(e, t) {
                                return y(t).isValid(e);
                            }, y.remove = function(e) {
                                "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, y.setValue = function(e, t) {
                                "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, r.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, y.dependencyLib = r.default, l.default.Inputmask = y;
                            t.default = y;
                        },
                        5296: function(e, t, n) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            var a = d(n(9380)), r = d(n(2394));
                            function o(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                                        if ("object" !== i(e) || null === e) return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var a = n.call(e, t || "default");
                                            if ("object" !== i(a)) return a;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(r, "string"), "symbol" === i(o) ? o : String(o)), a);
                                }
                                var r, o;
                            }
                            function l(e) {
                                var t = u();
                                return function() {
                                    var n, a = p(e);
                                    if (t) {
                                        var r = p(this).constructor;
                                        n = Reflect.construct(a, arguments, r);
                                    } else n = a.apply(this, arguments);
                                    return function(e, t) {
                                        if (t && ("object" === i(t) || "function" == typeof t)) return t;
                                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                        return function(e) {
                                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return e;
                                        }(e);
                                    }(this, n);
                                };
                            }
                            function s(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return s = function(e) {
                                    if (null === e || !function(e) {
                                        try {
                                            return -1 !== Function.toString.call(e).indexOf("[native code]");
                                        } catch (t) {
                                            return "function" == typeof e;
                                        }
                                    }(e)) return e;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, n);
                                    }
                                    function n() {
                                        return c(e, arguments, p(this).constructor);
                                    }
                                    return n.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: n,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), f(n, e);
                                }, s(e);
                            }
                            function c(e, t, n) {
                                return c = u() ? Reflect.construct.bind() : function(e, t, n) {
                                    var i = [ null ];
                                    i.push.apply(i, t);
                                    var a = new (Function.bind.apply(e, i));
                                    return n && f(a, n.prototype), a;
                                }, c.apply(null, arguments);
                            }
                            function u() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function f(e, t) {
                                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                    return e.__proto__ = t, e;
                                }, f(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var h = a.default.document;
                            if (h && h.head && h.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                                var v = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), Object.defineProperty(e, "prototype", {
                                            writable: !1
                                        }), t && f(e, t);
                                    }(s, e);
                                    var t, n, i, a = l(s);
                                    function s() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, s);
                                        var t = (e = a.call(this)).getAttributeNames(), n = e.attachShadow({
                                            mode: "closed"
                                        });
                                        for (var i in e.input = h.createElement("input"), e.input.type = "text", n.appendChild(e.input), 
                                        t) Object.prototype.hasOwnProperty.call(t, i) && e.input.setAttribute(t[i], e.getAttribute(t[i]));
                                        var o = new r.default;
                                        return o.dataAttribute = "", o.mask(e.input), e.input.inputmask.shadowRoot = n, 
                                        e;
                                    }
                                    return t = s, (n = [ {
                                        key: "attributeChangedCallback",
                                        value: function(e, t, n) {
                                            this.input.setAttribute(e, n);
                                        }
                                    }, {
                                        key: "value",
                                        get: function() {
                                            return this.input.value;
                                        },
                                        set: function(e) {
                                            this.input.value = e;
                                        }
                                    } ]) && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                                        writable: !1
                                    }), s;
                                }(s(HTMLElement));
                                a.default.customElements.define("input-mask", v);
                            }
                        },
                        2839: function(e, t) {
                            function n(e) {
                                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, n(e);
                            }
                            function i(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != n) {
                                        var i, a, r, o, l = [], s = !0, c = !1;
                                        try {
                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                if (Object(n) !== n) return;
                                                s = !1;
                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return l;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return a(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function a(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function r(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                    }))), n.push.apply(n, i);
                                }
                                return n;
                            }
                            function o(e, t, i) {
                                return (t = function(e) {
                                    var t = function(e, t) {
                                        if ("object" !== n(e) || null === e) return e;
                                        var i = e[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var a = i.call(e, t || "default");
                                            if ("object" !== n(a)) return a;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(e, "string");
                                    return "symbol" === n(t) ? t : String(t);
                                }(t)) in e ? Object.defineProperty(e, t, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = i, e;
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                                return s[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                            }, t.toKeyCode = function(e) {
                                return l[e];
                            };
                            var l = t.keyCode = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                                        o(e, t, n[t]);
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                    }));
                                }
                                return e;
                            }({
                                c: 67,
                                x: 88,
                                z: 90,
                                BACKSPACE_SAFARI: 127,
                                Enter: 13,
                                Meta_LEFT: 91,
                                Meta_RIGHT: 92,
                                Space: 32
                            }, {
                                Alt: 18,
                                AltGraph: 18,
                                ArrowDown: 40,
                                ArrowLeft: 37,
                                ArrowRight: 39,
                                ArrowUp: 38,
                                Backspace: 8,
                                CapsLock: 20,
                                Control: 17,
                                ContextMenu: 93,
                                Dead: 221,
                                Delete: 46,
                                End: 35,
                                Escape: 27,
                                F1: 112,
                                F2: 113,
                                F3: 114,
                                F4: 115,
                                F5: 116,
                                F6: 117,
                                F7: 118,
                                F8: 119,
                                F9: 120,
                                F10: 121,
                                F11: 122,
                                F12: 123,
                                Home: 36,
                                Insert: 45,
                                NumLock: 144,
                                PageDown: 34,
                                PageUp: 33,
                                Pause: 19,
                                PrintScreen: 44,
                                Process: 229,
                                Shift: 16,
                                ScrollLock: 145,
                                Tab: 9,
                                Unidentified: 229
                            }), s = Object.entries(l).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0], r = n[1];
                                return e[r] = void 0 === e[r] ? a : e[r], e;
                            }), {});
                            t.keys = Object.entries(l).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0];
                                n[1];
                                return e[a] = "Space" === a ? " " : a, e;
                            }), {});
                        },
                        2391: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, n) {
                                var i, a, s, c, u, f, p = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, h = !1, v = new o.default, m = [], g = [], y = !1;
                                function k(e, i, a) {
                                    a = void 0 !== a ? a : e.matches.length;
                                    var o = e.matches[a - 1];
                                    if (t) {
                                        if (0 === i.indexOf("[") || h && /\\d|\\s|\\w|\\p/i.test(i) || "." === i) {
                                            var s = n.casing ? "i" : "";
                                            /\\p\{.*}/i.test(i) && (s += "u"), e.matches.splice(a++, 0, {
                                                fn: new RegExp(i, s),
                                                static: !1,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== i,
                                                casing: null,
                                                def: i,
                                                placeholder: "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                                nativeDef: i
                                            });
                                        } else h && (i = i[i.length - 1]), i.split("").forEach((function(t, i) {
                                            o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                                fn: /[a-z]/i.test(n.staticDefinitionSymbol || t) ? new RegExp("[" + (n.staticDefinitionSymbol || t) + "]", n.casing ? "i" : "") : null,
                                                static: !0,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                                casing: null,
                                                def: n.staticDefinitionSymbol || t,
                                                placeholder: void 0 !== n.staticDefinitionSymbol ? t : "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                                nativeDef: (h ? "'" : "") + t
                                            });
                                        }));
                                        h = !1;
                                    } else {
                                        var c = n.definitions && n.definitions[i] || n.usePrototypeDefinitions && r.default.prototype.definitions[i];
                                        c && !h ? e.matches.splice(a++, 0, {
                                            fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, n.casing ? "i" : "") : new function() {
                                                this.test = c.validator;
                                            } : /./,
                                            static: c.static || !1,
                                            optionality: c.optional || !1,
                                            defOptionality: c.optional || !1,
                                            newBlockMarker: void 0 === o || c.optional ? "master" : o.def !== (c.definitionSymbol || i),
                                            casing: c.casing,
                                            def: c.definitionSymbol || i,
                                            placeholder: c.placeholder,
                                            nativeDef: i,
                                            generated: c.generated
                                        }) : (e.matches.splice(a++, 0, {
                                            fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== i && !0 !== o.static,
                                            casing: null,
                                            def: n.staticDefinitionSymbol || i,
                                            placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0,
                                            nativeDef: (h ? "'" : "") + i
                                        }), h = !1);
                                    }
                                }
                                function b() {
                                    if (m.length > 0) {
                                        if (k(c = m[m.length - 1], a), c.isAlternator) {
                                            u = m.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                            m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                                        }
                                    } else k(v, a);
                                }
                                function x(e) {
                                    var t = new o.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function w() {
                                    if ((s = m.pop()).openGroup = !1, void 0 !== s) if (m.length > 0) {
                                        if ((c = m[m.length - 1]).matches.push(s), c.isAlternator) {
                                            u = m.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup = !1, u.matches[e].alternatorGroup = !1;
                                            m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                                        }
                                    } else v.matches.push(s); else b();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = x([ e.pop(), t ])), t;
                                }
                                t && (n.optionalmarker[0] = void 0, n.optionalmarker[1] = void 0);
                                for (;i = t ? d.exec(e) : p.exec(e); ) {
                                    if (a = i[0], t) {
                                        switch (a.charAt(0)) {
                                          case "?":
                                            a = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            a = "{" + a + "}";
                                            break;

                                          case "|":
                                            if (0 === m.length) {
                                                var S = x(v.matches);
                                                S.openGroup = !0, m.push(S), v.matches = [], y = !0;
                                            }
                                        }
                                        switch (a) {
                                          case "\\d":
                                            a = "[0-9]";
                                            break;

                                          case "\\p":
                                            a += d.exec(e)[0], a += d.exec(e)[0];
                                        }
                                    }
                                    if (h) b(); else switch (a.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || b();
                                        break;

                                      case n.escapeChar:
                                        h = !0, t && b();
                                        break;

                                      case n.optionalmarker[1]:
                                      case n.groupmarker[1]:
                                        w();
                                        break;

                                      case n.optionalmarker[0]:
                                        m.push(new o.default(!1, !0));
                                        break;

                                      case n.groupmarker[0]:
                                        m.push(new o.default(!0));
                                        break;

                                      case n.quantifiermarker[0]:
                                        var O = new o.default(!1, !1, !0), _ = (a = a.replace(/[{}?]/g, "")).split("|"), M = _[0].split(","), E = isNaN(M[0]) ? M[0] : parseInt(M[0]), j = 1 === M.length ? E : isNaN(M[1]) ? M[1] : parseInt(M[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                        "*" !== E && "+" !== E || (E = "*" === j ? 0 : 1), O.quantifier = {
                                            min: E,
                                            max: j,
                                            jit: T
                                        };
                                        var A = m.length > 0 ? m[m.length - 1].matches : v.matches;
                                        (i = A.pop()).isGroup || (i = x([ i ])), A.push(i), A.push(O);
                                        break;

                                      case n.alternatormarker:
                                        if (m.length > 0) {
                                            var D = (c = m[m.length - 1]).matches[c.matches.length - 1];
                                            f = c.openGroup && (void 0 === D.matches || !1 === D.isGroup && !1 === D.isAlternator) ? m.pop() : P(c.matches);
                                        } else f = P(v.matches);
                                        if (f.isAlternator) m.push(f); else if (f.alternatorGroup ? (u = m.pop(), f.alternatorGroup = !1) : u = new o.default(!1, !1, !1, !0), 
                                        u.matches.push(f), m.push(u), f.openGroup) {
                                            f.openGroup = !1;
                                            var L = new o.default(!0);
                                            L.alternatorGroup = !0, m.push(L);
                                        }
                                        break;

                                      default:
                                        b();
                                    }
                                }
                                y && w();
                                for (;m.length > 0; ) s = m.pop(), v.matches.push(s);
                                v.matches.length > 0 && (!function e(i) {
                                    i && i.matches && i.matches.forEach((function(a, r) {
                                        var o = i.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                                        t || (k(a, n.groupmarker[0], 0), !0 !== a.openGroup && k(a, n.groupmarker[1]))), 
                                        e(a);
                                    }));
                                }(v), g.push(v));
                                (n.numericInput || n.isRTL) && function e(t) {
                                    for (var i in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, i)) {
                                        var a = parseInt(i);
                                        if (t.matches[i].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                            var r = t.matches[i];
                                            t.matches.splice(i, 1), t.matches.splice(a + 1, 0, r);
                                        }
                                        void 0 !== t.matches[i].matches ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === n.optionalmarker[0] ? o = n.optionalmarker[1] : o === n.optionalmarker[1] ? o = n.optionalmarker[0] : o === n.groupmarker[0] ? o = n.groupmarker[1] : o === n.groupmarker[1] && (o = n.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(g[0]);
                                return g;
                            }, t.generateMaskSet = function(e, t) {
                                var n;
                                function o(e, t) {
                                    var n = t.repeat, i = t.groupmarker, r = t.quantifiermarker, o = t.keepStatic;
                                    if (n > 0 || "*" === n || "+" === n) {
                                        var l = "*" === n ? 0 : "+" === n ? 1 : n;
                                        if (l != n) e = i[0] + e + i[1] + r[0] + l + "," + n + r[1]; else for (var c = e, u = 1; u < l; u++) e += c;
                                    }
                                    if (!0 === o) {
                                        var f = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                                        f && f.forEach((function(t, n) {
                                            var i = function(e, t) {
                                                return function(e) {
                                                    if (Array.isArray(e)) return e;
                                                }(e) || function(e, t) {
                                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                    if (null != n) {
                                                        var i, a, r, o, l = [], s = !0, c = !1;
                                                        try {
                                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                                if (Object(n) !== n) return;
                                                                s = !1;
                                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                                        } catch (e) {
                                                            c = !0, a = e;
                                                        } finally {
                                                            try {
                                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                                            } finally {
                                                                if (c) throw a;
                                                            }
                                                        }
                                                        return l;
                                                    }
                                                }(e, t) || function(e, t) {
                                                    if (!e) return;
                                                    if ("string" == typeof e) return s(e, t);
                                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                                }(e, t) || function() {
                                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                }();
                                            }(t.split("["), 2), r = i[0], o = i[1];
                                            o = o.replace("]", ""), e = e.replace(new RegExp("".concat((0, a.default)(r), "\\[").concat((0, 
                                            a.default)(o), "\\]")), r.charAt(0) === o.charAt(0) ? "(".concat(r, "|").concat(r).concat(o, ")") : "".concat(r, "[").concat(o, "]"));
                                        }));
                                    }
                                    return e;
                                }
                                function c(e, n, a) {
                                    var s, c, u = !1;
                                    return null !== e && "" !== e || ((u = null !== a.regex) ? e = (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (u = !0, 
                                    e = ".*")), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), 
                                    e = o(e, a), c = u ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== a.keepStatic && (c = "ks_" + a.keepStatic + c), "object" === l(a.placeholder) && (c = "ph_" + JSON.stringify(a.placeholder) + c), 
                                    void 0 === r.default.prototype.masksCache[c] || !0 === t ? (s = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, u, a),
                                        validPositions: [],
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: n,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[c] = s, s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]))) : s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]), 
                                    s;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var u = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            u.length > 1 && (u += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? u += t.mask : u += t;
                                        })), c(u += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                n = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? c(e.mask.mask, e.mask, e) : c(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return n;
                            };
                            var i = c(n(4963)), a = c(n(7184)), r = c(n(2394)), o = c(n(9695));
                            function l(e) {
                                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, l(e);
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function c(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, n = this.el, c = this.dependencyLib;
                                r.EventRuler.off(n);
                                var u = function(t, n) {
                                    var i = t.getAttribute("type"), a = "input" === t.tagName.toLowerCase() && n.supportsInputType.includes(i) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!a) if ("input" === t.tagName.toLowerCase()) {
                                        var s = document.createElement("input");
                                        s.setAttribute("type", i), a = "text" === s.type, s = null;
                                    } else a = "partial";
                                    return !1 !== a ? function(t) {
                                        var i, a;
                                        function s() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== l.getLastValidPosition.call(e) || !0 !== n.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && n.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, l.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, l.getBuffer.call(e).slice())).join("") : i.call(this) : "" : i.call(this);
                                        }
                                        function u(e) {
                                            a.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== n.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (i = f.get, a = f.set, Object.defineProperty(t, "value", {
                                                        get: s,
                                                        set: u,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (i = function() {
                                                        return this.textContent;
                                                    }, a = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: s,
                                                        set: u,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (i = t.__lookupGetter__("value"), 
                                                a = t.__lookupSetter__("value"), t.__defineGetter__("value", s), t.__defineSetter__("value", u));
                                                t.inputmask.__valueGet = i, t.inputmask.__valueSet = a;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? i.call(this.el).split("").reverse().join("") : i.call(this.el);
                                            }, t.inputmask._valueSet = function(t, n) {
                                                a.call(this.el, null == t ? "" : !0 !== n && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === i && (i = function() {
                                                return this.value;
                                            }, a = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (c.valHooks && (void 0 === c.valHooks[t] || !0 !== c.valHooks[t].inputmaskpatch)) {
                                                    var i = c.valHooks[t] && c.valHooks[t].get ? c.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, a = c.valHooks[t] && c.valHooks[t].set ? c.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    c.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var a = i(t);
                                                                return -1 !== l.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== n.nullable ? a : "";
                                                            }
                                                            return i(t);
                                                        },
                                                        set: function(e, t) {
                                                            var n = a(e, t);
                                                            return e.inputmask && (0, o.applyInputValue)(e, t), n;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(e) {
                                                r.EventRuler.on(e, "mouseenter", (function() {
                                                    var e = this, t = e.inputmask._valueGet(!0);
                                                    t != (e.inputmask.isRTL ? l.getBuffer.call(e.inputmask).slice().reverse() : l.getBuffer.call(e.inputmask)).join("") && (0, 
                                                    o.applyInputValue)(e, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, a;
                                }(n, t);
                                if (!1 !== u) {
                                    e.originalPlaceholder = n.placeholder, e.maxLength = void 0 !== n ? n.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in n && null === n.getAttribute("inputmode") && (n.inputMode = t.inputmode, 
                                    n.setAttribute("inputmode", t.inputmode)), !0 === u && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(n.autocomplete), 
                                    i.iphone && (t.insertModeVisual = !1, n.setAttribute("autocorrect", "off")), r.EventRuler.on(n, "submit", a.EventHandlers.submitEvent), 
                                    r.EventRuler.on(n, "reset", a.EventHandlers.resetEvent), r.EventRuler.on(n, "blur", a.EventHandlers.blurEvent), 
                                    r.EventRuler.on(n, "focus", a.EventHandlers.focusEvent), r.EventRuler.on(n, "invalid", a.EventHandlers.invalidEvent), 
                                    r.EventRuler.on(n, "click", a.EventHandlers.clickEvent), r.EventRuler.on(n, "mouseleave", a.EventHandlers.mouseleaveEvent), 
                                    r.EventRuler.on(n, "mouseenter", a.EventHandlers.mouseenterEvent), r.EventRuler.on(n, "paste", a.EventHandlers.pasteEvent), 
                                    r.EventRuler.on(n, "cut", a.EventHandlers.cutEvent), r.EventRuler.on(n, "complete", t.oncomplete), 
                                    r.EventRuler.on(n, "incomplete", t.onincomplete), r.EventRuler.on(n, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && r.EventRuler.on(n, "keydown", a.EventHandlers.keyEvent), 
                                    (i.mobile || t.inputEventOnly) && n.removeAttribute("maxLength"), r.EventRuler.on(n, "input", a.EventHandlers.inputFallBackEvent)), 
                                    r.EventRuler.on(n, "setvalue", a.EventHandlers.setValueEvent), void 0 === e.applyMaskHook || e.applyMaskHook(), 
                                    l.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                                    var f = (n.inputmask.shadowRoot || n.ownerDocument).activeElement;
                                    if ("" !== n.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || f === n) {
                                        (0, o.applyInputValue)(n, n.inputmask._valueGet(!0), t);
                                        var p = l.getBuffer.call(e).slice();
                                        !1 === s.isComplete.call(e, p) && t.clearIncomplete && l.resetMaskSet.call(e, !1), 
                                        t.clearMaskOnLostFocus && f !== n && (-1 === l.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && f === n || "" !== n.inputmask._valueGet(!0)) && (0, 
                                        o.writeBuffer)(n, p), f === n && l.caret.call(e, n, l.seekNext.call(e, l.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var i = n(9845), a = n(6030), r = n(9716), o = n(7760), l = n(8711), s = n(7215);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, n, i) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var n = Object(this), i = n.length >>> 0;
                                    if (0 === i) return !1;
                                    for (var a = 0 | t, r = Math.max(a >= 0 ? a : i - Math.abs(a), 0); r < i; ) {
                                        if (n[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        9302: function() {
                            var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), n = Function.bind.call(Function.call, Array.prototype.concat), i = Object.keys;
                            Object.entries || (Object.entries = function(a) {
                                return e(i(a), (function(e, i) {
                                    return n(e, "string" == typeof i && t(a, i) ? [ [ i, a[i] ] ] : []);
                                }), []);
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        4013: function() {
                            String.prototype.includes || (String.prototype.includes = function(e, t) {
                                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                            });
                        },
                        8711: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, n, i, r) {
                                var o, l = this, s = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                n = e.selectionEnd) : a.default.getSelection ? (o = a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, 
                                n = o.endOffset) : document.selection && document.selection.createRange && (n = (t = 0 - (o = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length), 
                                {
                                    begin: i ? t : f.call(l, t),
                                    end: i ? n : f.call(l, n)
                                };
                                if (Array.isArray(t) && (n = l.isRTL ? t[0] : t[1], t = l.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (n = l.isRTL ? t.begin : t.end, t = l.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = i ? t : f.call(l, t), n = "number" == typeof (n = i ? n : f.call(l, n)) ? n : t;
                                    var c = parseInt(((e.ownerDocument.defaultView || a.default).getComputedStyle ? (e.ownerDocument.defaultView || a.default).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                                    if (e.scrollLeft = c > e.scrollWidth ? c : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: n
                                    }, s.insertModeVisual && !1 === s.insertMode && t === n && (r || n++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) {
                                        if ("setSelectionRange" in e) e.setSelectionRange(t, n); else if (a.default.getSelection) {
                                            if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                                var u = document.createTextNode("");
                                                e.appendChild(u);
                                            }
                                            o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                            o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length), 
                                            o.collapse(!0);
                                            var p = a.default.getSelection();
                                            p.removeAllRanges(), p.addRange(o);
                                        } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", n), 
                                        o.moveStart("character", t), o.select());
                                        void 0 === e.inputmask.caretHook || e.inputmask.caretHook.call(l, {
                                            begin: t,
                                            end: n
                                        });
                                    }
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, n, i = this, a = i.maskset, l = i.dependencyLib, c = s.call(i), u = {}, f = a.validPositions[c], p = o.getMaskTemplate.call(i, !0, s.call(i), !0, !0), d = p.length, h = void 0 !== f ? f.locator.slice() : void 0;
                                for (t = c + 1; t < p.length; t++) h = (n = o.getTestTemplate.call(i, t, h, t - 1)).locator.slice(), 
                                u[t] = l.extend(!0, {}, n);
                                var v = f && void 0 !== f.alternation ? f.locator[f.alternation] : void 0;
                                for (t = d - 1; t > c && ((n = u[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || v && (v !== u[t].locator[f.alternation] && !0 !== n.match.static || !0 === n.match.static && n.locator[f.alternation] && r.checkAlternationMatch.call(i, n.locator[f.alternation].toString().split(","), v.toString().split(",")) && "" !== o.getTests.call(i, t)[0].def)) && p[t] === o.getPlaceholder.call(i, t, n.match); t--) d--;
                                return e ? {
                                    l: d,
                                    def: u[d] ? u[d].match : void 0
                                } : d;
                            }, t.determineNewCaretPosition = function(e, t, n) {
                                var i, a, r, f = this, p = f.maskset, d = f.opts;
                                t && (f.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (n = n || d.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: l.call(f).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = u.call(f, s.call(f));
                                        break;

                                      case "radixFocus":
                                        if (f.clicked > 1 && 0 === p.validPositions.length) break;
                                        if (function(e) {
                                            if ("" !== d.radixPoint && 0 !== d.digits) {
                                                var t = p.validPositions;
                                                if (void 0 === t[e] || void 0 === t[e].input) {
                                                    if (e < u.call(f, -1)) return !0;
                                                    var n = l.call(f).indexOf(d.radixPoint);
                                                    if (-1 !== n) {
                                                        for (var i = 0, a = t.length; i < a; i++) if (t[i] && n < i && t[i].input !== o.getPlaceholder.call(f, i)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var h = l.call(f).join("").indexOf(d.radixPoint);
                                            e.end = e.begin = d.numericInput ? u.call(f, h) : h;
                                            break;
                                        }

                                      default:
                                        if (i = e.begin, a = s.call(f, i, !0), i <= (r = u.call(f, -1 !== a || c.call(f, 0) ? a : -1))) e.end = e.begin = c.call(f, i, !1, !0) ? i : u.call(f, i); else {
                                            var v = p.validPositions[a], m = o.getTestTemplate.call(f, r, v ? v.match.locator : void 0, v), g = o.getPlaceholder.call(f, r, m.match);
                                            if ("" !== g && l.call(f)[r] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !c.call(f, r, d.keepStatic, !0) && m.match.def === g) {
                                                var y = u.call(f, r);
                                                (i >= y || i === r) && (r = y);
                                            }
                                            e.end = e.begin = r;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = l, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = o.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = s, t.isMask = c, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                                !1 === e && (t.tests = {}, t.jitOffset = {});
                            }, t.seekNext = u, t.seekPrevious = function(e, t) {
                                var n = this, i = e - 1;
                                if (e <= 0) return 0;
                                for (;i > 0 && (!0 === t && (!0 !== o.getTest.call(n, i).match.newBlockMarker || !c.call(n, i, void 0, !0)) || !0 !== t && !c.call(n, i, void 0, !0)); ) i--;
                                return i;
                            }, t.translatePosition = f;
                            var i, a = (i = n(9380)) && i.__esModule ? i : {
                                default: i
                            }, r = n(7215), o = n(4713);
                            function l(e) {
                                var t = this, n = t.maskset;
                                return void 0 !== n.buffer && !0 !== e || (n.buffer = o.getMaskTemplate.call(t, !0, s.call(t), !0), 
                                void 0 === n._buffer && (n._buffer = n.buffer.slice())), n.buffer;
                            }
                            function s(e, t, n) {
                                var i = this.maskset, a = -1, r = -1, o = n || i.validPositions;
                                void 0 === e && (e = -1);
                                for (var l = 0, s = o.length; l < s; l++) o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), 
                                l >= e && (r = l));
                                return -1 === a || a === e ? r : -1 === r || e - a < r - e ? a : r;
                            }
                            function c(e, t, n) {
                                var i = this, a = this.maskset, r = o.getTestTemplate.call(i, e).match;
                                if ("" === r.def && (r = o.getTest.call(i, e).match), !0 !== r.static) return r.fn;
                                if (!0 === n && void 0 !== a.validPositions[e] && !0 !== a.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (n) {
                                        var l = o.getTests.call(i, e);
                                        return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                                    }
                                    var s = o.determineTestTemplate.call(i, e, o.getTests.call(i, e)), c = o.getPlaceholder.call(i, e, s.match);
                                    return s.match.def !== c;
                                }
                                return !1;
                            }
                            function u(e, t, n) {
                                var i = this;
                                void 0 === n && (n = !0);
                                for (var a = e + 1; "" !== o.getTest.call(i, a).match.def && (!0 === t && (!0 !== o.getTest.call(i, a).match.newBlockMarker || !c.call(i, a, void 0, !0)) || !0 !== t && !c.call(i, a, void 0, n)); ) a++;
                                return a;
                            }
                            function f(e) {
                                var t = this.opts, n = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !n || (e = this._valueGet().length - e) < 0 && (e = 0), 
                                e;
                            }
                        },
                        4713: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = f, t.getDecisionTaker = s, t.getMaskTemplate = function(e, t, n, i, a) {
                                var r = this, o = this.opts, l = this.maskset, s = o.greedy;
                                a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, d, v, m, g = [], y = 0;
                                do {
                                    if (!0 === e && l.validPositions[y]) d = (v = a && l.validPositions[y].match.optionality && void 0 === l.validPositions[y + 1] && (!0 === l.validPositions[y].generatedInput || l.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? f.call(r, y, h.call(r, y, p, y - 1)) : l.validPositions[y]).match, 
                                    p = v.locator.slice(), g.push(!0 === n ? v.input : !1 === n ? d.nativeDef : c.call(r, y, d)); else {
                                        d = (v = u.call(r, y, p, y - 1)).match, p = v.locator.slice();
                                        var k = !0 !== i && (!1 !== o.jitMasking ? o.jitMasking : d.jit);
                                        (m = (m || l.validPositions[y - 1]) && d.static && d.def !== o.groupSeparator && null === d.fn) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === n ? d.nativeDef : c.call(r, g.length, d)) : m = !1;
                                    }
                                    y++;
                                } while (!0 !== d.static || "" !== d.def || t > y);
                                "" === g[g.length - 1] && g.pop();
                                !1 === n && void 0 !== l.maskLength || (l.maskLength = y - 1);
                                return o.greedy = s, g;
                            }, t.getPlaceholder = c, t.getTest = p, t.getTestTemplate = u, t.getTests = h, t.isSubsetOf = d;
                            var i, a = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            }, r = n(8711);
                            function o(e) {
                                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, o(e);
                            }
                            function l(e, t) {
                                var n = (null != e.alternation ? e.mloc[s(e)] : e.locator).join("");
                                if ("" !== n) for (n = n.split(":")[0]; n.length < t; ) n += "0";
                                return n;
                            }
                            function s(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function c(e, t, n) {
                                var i = this, a = this.opts, l = this.maskset;
                                if (void 0 !== (t = t || p.call(i, e).match).placeholder || !0 === n) {
                                    if ("" !== t.placeholder && !0 === t.static && !0 !== t.generated) {
                                        var s = r.getLastValidPosition.call(i, e), c = r.seekNext.call(i, s);
                                        return (n ? e <= c : e < c) ? a.staticDefinitionSymbol && t.static ? t.nativeDef : t.def : "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                    }
                                    return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                }
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === l.validPositions[e]) {
                                        var u, f = h.call(i, e), d = [];
                                        if ("string" == typeof a.placeholder && f.length > 1 + ("" === f[f.length - 1].match.def ? 1 : 0)) for (var v = 0; v < f.length; v++) if ("" !== f[v].match.def && !0 !== f[v].match.optionality && !0 !== f[v].match.optionalQuantifier && (!0 === f[v].match.static || void 0 === u || !1 !== f[v].match.fn.test(u.match.def, l, e, !0, a)) && (d.push(f[v]), 
                                        !0 === f[v].match.static && (u = f[v]), d.length > 1 && /[0-9a-bA-Z]/.test(d[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return "object" === o(a.placeholder) ? t.def : a.placeholder.charAt(e % a.placeholder.length);
                            }
                            function u(e, t, n) {
                                return this.maskset.validPositions[e] || f.call(this, e, h.call(this, e, t ? t.slice() : t, n));
                            }
                            function f(e, t) {
                                var n = this.opts, i = 0, a = function(e, t) {
                                    var n = 0, i = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== n && n !== e.match.optionality && (i = !0), (0 === n || n > e.match.optionality) && (n = e.match.optionality));
                                    })), n && (0 == e || 1 == t.length ? n = 0 : i || (n = 0));
                                    return n;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var r, o, s, c = l(p.call(this, e));
                                n.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (i = 1);
                                for (var u = 0; u < t.length - i; u++) {
                                    var f = t[u];
                                    r = l(f, c.length);
                                    var d = Math.abs(r - c);
                                    (!0 !== f.unMatchedAlternationStopped || t.filter((function(e) {
                                        return !0 !== e.unMatchedAlternationStopped;
                                    })).length <= 1) && (void 0 === o || "" !== r && d < o || s && !n.greedy && s.match.optionality && s.match.optionality - a > 0 && "master" === s.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || s && !n.greedy && s.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                                    s = f);
                                }
                                return s;
                            }
                            function p(e, t) {
                                var n = this.maskset;
                                return n.validPositions[e] ? n.validPositions[e] : (t || h.call(this, e))[0];
                            }
                            function d(e, t, n) {
                                function i(e) {
                                    for (var t, n = [], i = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++i < t; ) n.push(String.fromCharCode(i)); else i = e.charCodeAt(a), 
                                    n.push(e.charAt(a));
                                    return n.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(n.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && ("." === t.match.fn.source || -1 !== i(t.match.fn.source.replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.source.replace(/[[\]/]/g, ""))));
                            }
                            function h(e, t, n) {
                                var i, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, u = this.el, p = s.maskToken, h = t ? n : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "", k = !1;
                                function b(t, n, r, l) {
                                    function f(r, l, p) {
                                        function v(e, t) {
                                            var n = 0 === t.matches.indexOf(e);
                                            return n || t.matches.every((function(i, a) {
                                                return !0 === i.isQuantifier ? n = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(i, "matches") && (n = v(e, i)), 
                                                !n;
                                            })), n;
                                        }
                                        function w(e, t, n) {
                                            var i, a;
                                            if ((s.tests[e] || s.validPositions[e]) && (s.validPositions[e] ? [ s.validPositions[e] ] : s.tests[e]).every((function(e, r) {
                                                if (e.mloc[t]) return i = e, !1;
                                                var o = void 0 !== n ? n : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === a || l < a) && -1 !== l && (i = e, a = l), !0;
                                            })), i) {
                                                var r = i.locator[i.alternation], o = i.mloc[t] || i.mloc[r] || i.locator;
                                                if (-1 !== o[o.length - 1].toString().indexOf(":")) o.pop();
                                                return o.slice((void 0 !== n ? n : i.alternation) + 1);
                                            }
                                            return void 0 !== n ? w(e, t) : void 0;
                                        }
                                        function P(t, n) {
                                            return !0 === t.match.static && !0 !== n.match.static && n.match.fn.test(t.match.def, s, e, !1, c, !1);
                                        }
                                        function S(e, t) {
                                            var n = e.alternation, i = void 0 === t || n <= t.alternation && -1 === e.locator[n].toString().indexOf(t.locator[n]);
                                            if (!i && n > t.alternation) for (var a = 0; a < n; a++) if (e.locator[a] !== t.locator[a]) {
                                                n = a, i = !0;
                                                break;
                                            }
                                            return !!i && function(n) {
                                                e.mloc = e.mloc || {};
                                                var i = e.locator[n];
                                                if (void 0 !== i) {
                                                    if ("string" == typeof i && (i = i.split(",")[0]), void 0 === e.mloc[i] && (e.mloc[i] = e.locator.slice(), 
                                                    e.mloc[i].push(":".concat(e.alternation))), void 0 !== t) {
                                                        for (var a in t.mloc) "string" == typeof a && (a = parseInt(a.split(",")[0])), e.mloc[a + 0] = t.mloc[a];
                                                        e.locator[n] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return e.alternation > n && (e.alternation = n), !0;
                                                }
                                                return e.alternation = void 0, !1;
                                            }(n);
                                        }
                                        function O(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var n = e.alternation + 1; n < e.locator.length; n++) if (e.locator[n] !== t.locator[n]) return !1;
                                            return !0;
                                        }
                                        if (h > e + c._maxTestPos) throw new Error("Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ".concat(s.mask));
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: l.reverse(),
                                                cd: y,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== p || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && p !== r) return function() {
                                                if (r = f(t.matches[t.matches.indexOf(r) + 1], l, p)) return !0;
                                            }();
                                            if (r.isOptional) return function() {
                                                var t = r, a = m.length;
                                                if (r = b(r, n, l, p), m.length > 0) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), i = m[m.length - 1].match, void 0 !== p || !v(i, t)) return r;
                                                    g = !0, h = e;
                                                }
                                            }();
                                            if (r.isAlternator) return function() {
                                                function i(e) {
                                                    for (var t, n = e.matches[0].matches ? e.matches[0].matches.length : 1, i = 0; i < e.matches.length && n === (t = e.matches[i].matches ? e.matches[i].matches.length : 1); i++) ;
                                                    return n !== t;
                                                }
                                                o.hasAlternator = !0;
                                                var a, v = r, y = [], b = m.slice(), x = l.length, _ = n.length > 0 ? n.shift() : -1;
                                                if (-1 === _ || "string" == typeof _) {
                                                    var M, E = h, j = n.slice(), T = [];
                                                    if ("string" == typeof _) T = _.split(","); else for (M = 0; M < v.matches.length; M++) T.push(M.toString());
                                                    if (void 0 !== s.excludes[e]) {
                                                        for (var A = T.slice(), D = 0, L = s.excludes[e].length; D < L; D++) {
                                                            var C = s.excludes[e][D].toString().split(":");
                                                            l.length == C[1] && T.splice(T.indexOf(C[0]), 1);
                                                        }
                                                        0 === T.length && (delete s.excludes[e], T = A);
                                                    }
                                                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && E >= c.keepStatic) && (T = T.slice(0, 1));
                                                    for (var B = 0; B < T.length; B++) {
                                                        M = parseInt(T[B]), m = [], n = "string" == typeof _ && w(h, M, x) || j.slice();
                                                        var I = v.matches[M];
                                                        if (I && f(I, [ M ].concat(l), p)) r = !0; else if (0 === B && (k = i(v)), I && I.matches && I.matches.length > v.matches[0].matches.length) break;
                                                        a = m.slice(), h = E, m = [];
                                                        for (var R = 0; R < a.length; R++) {
                                                            var F = a[R], N = !1;
                                                            F.alternation = F.alternation || x, S(F);
                                                            for (var V = 0; V < y.length; V++) {
                                                                var G = y[V];
                                                                if ("string" != typeof _ || void 0 !== F.alternation && T.includes(F.locator[F.alternation].toString())) {
                                                                    if (F.match.nativeDef === G.match.nativeDef) {
                                                                        N = !0, S(G, F);
                                                                        break;
                                                                    }
                                                                    if (d(F, G, c)) {
                                                                        S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F));
                                                                        break;
                                                                    }
                                                                    if (d(G, F, c)) {
                                                                        S(G, F);
                                                                        break;
                                                                    }
                                                                    if (P(F, G)) {
                                                                        O(F, G) || void 0 !== u.inputmask.userOptions.keepStatic ? S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F)) : c.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                    if (P(G, F)) {
                                                                        S(G, F);
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            N || y.push(F);
                                                        }
                                                    }
                                                    m = b.concat(y), h = e, g = m.length > 0 && k, r = y.length > 0 && !k, k && g && !r && m.forEach((function(e, t) {
                                                        e.unMatchedAlternationStopped = !0;
                                                    })), n = j.slice();
                                                } else r = f(v.matches[_] || t.matches[_], [ _ ].concat(l), p);
                                                if (r) return !0;
                                            }();
                                            if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                                for (var a = r, o = !1, u = n.length > 0 ? n.shift() : 0; u < (isNaN(a.quantifier.max) ? u + 1 : a.quantifier.max) && h <= e; u++) {
                                                    var p = t.matches[t.matches.indexOf(a) - 1];
                                                    if (r = f(p, [ u ].concat(l), p)) {
                                                        if (m.forEach((function(t, n) {
                                                            (i = x(p, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = u >= a.quantifier.min, 
                                                            i.jit = (u + 1) * (p.matches.indexOf(i) + 1) > a.quantifier.jit, i.optionalQuantifier && v(i, p) && (g = !0, 
                                                            h = e, c.greedy && null == s.validPositions[e - 1] && u > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                            y = void 0), o = !0, r = !1), !o && i.jit && (s.jitOffset[e] = p.matches.length - p.matches.indexOf(i));
                                                        })), o) break;
                                                        return !0;
                                                    }
                                                }
                                            }();
                                            if (r = b(r, n, l, p)) return !0;
                                        } else h++;
                                    }
                                    for (var p = n.length > 0 ? n.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                                        var v = f(t.matches[p], [ p ].concat(r), l);
                                        if (v && h === e) return v;
                                        if (h > e) break;
                                    }
                                }
                                function x(e, t) {
                                    var n = -1 != e.matches.indexOf(t);
                                    return n || e.matches.forEach((function(e, i) {
                                        void 0 === e.matches || n || (n = x(e, t));
                                    })), n;
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var w, P = e - 1; void 0 === (w = s.validPositions[P] || s.tests[P]) && P > -1; ) P--;
                                        void 0 !== w && P > -1 && (v = function(e, t) {
                                            var n, i = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (i = f.call(o, e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === i.length ? (n = e.alternation, i = e.locator.slice()) : e.locator[n] && -1 === i[n].toString().indexOf(e.locator[n]) && (i[n] += "," + e.locator[n]));
                                            }))), i;
                                        }(P, w), y = v.join(""), h = P);
                                    }
                                    if (s.tests[e] && s.tests[e][0].cd === y) return s.tests[e];
                                    for (var S = v.shift(); S < p.length; S++) if (b(p[S], v, [ S ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: k && 0 === m.filter((function(e) {
                                        return !0 !== e.unMatchedAlternationStopped;
                                    })).length ? [ 0 ] : [],
                                    mloc: {},
                                    cd: y
                                }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                                r = s.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = e.match.defOptionality || !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = l, t.checkAlternationMatch = function(e, t, n) {
                                for (var i, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== n ? n.split(",") : [], l = 0; l < o.length; l++) -1 !== (i = e.indexOf(o[l])) && e.splice(i, 1);
                                for (var s = 0; s < e.length; s++) if (a.includes(e[s])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, n, i, s) {
                                var c = this, u = this.maskset, f = this.opts;
                                if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                                c.isRTL)) {
                                    var p = n.end;
                                    n.end = n.begin, n.begin = p;
                                }
                                var d, h = r.getLastValidPosition.call(c, void 0, !0);
                                n.end >= r.getBuffer.call(c).length && h >= n.end && (n.end = h + 1);
                                t === a.keys.Backspace ? n.end - n.begin < 1 && (n.begin = r.seekPrevious.call(c, n.begin)) : t === a.keys.Delete && n.begin === n.end && (n.end = r.isMask.call(c, n.end, !0, !0) ? n.end + 1 : r.seekNext.call(c, n.end) + 1);
                                !1 !== (d = v.call(c, n)) && ((!0 !== i && !1 !== f.keepStatic || null !== f.regex && -1 !== o.getTest.call(c, n.begin).match.def.indexOf("|")) && l.call(c, !0), 
                                !0 !== i && (u.p = t === a.keys.Delete ? n.begin + d : n.begin, u.p = r.determineNewCaretPosition.call(c, {
                                    begin: u.p,
                                    end: u.p
                                }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin));
                            }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = d, 
                            t.revalidateMask = v;
                            var i = n(6030), a = n(2839), r = n(8711), o = n(4713);
                            function l(e, t, n, i, a, s) {
                                var c = this, u = this.dependencyLib, p = this.opts, d = c.maskset;
                                if (!c.hasAlternator) return !1;
                                var h, v, m, g, y, k, b, x, w, P, S, O = u.extend(!0, [], d.validPositions), _ = u.extend(!0, {}, d.tests), M = !1, E = !1, j = void 0 !== a ? a : r.getLastValidPosition.call(c);
                                if (s && (P = s.begin, S = s.end, s.begin > s.end && (P = s.end, S = s.begin)), 
                                -1 === j && void 0 === a) h = 0, v = (g = o.getTest.call(c, h)).alternation; else for (;j >= 0; j--) if ((m = d.validPositions[j]) && void 0 !== m.alternation) {
                                    if (j <= (e || 0) && g && g.locator[m.alternation] !== m.locator[m.alternation]) break;
                                    h = j, v = d.validPositions[h].alternation, g = m;
                                }
                                if (void 0 !== v) {
                                    b = parseInt(h), d.excludes[b] = d.excludes[b] || [], !0 !== e && d.excludes[b].push((0, 
                                    o.getDecisionTaker)(g) + ":" + g.alternation);
                                    var T = [], A = -1;
                                    for (y = b; b < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) -1 === A && e <= y && void 0 !== t && (T.push(t), 
                                    A = T.length - 1), (k = d.validPositions[b]) && !0 !== k.generatedInput && (void 0 === s || y < P || y >= S) && T.push(k.input), 
                                    d.validPositions.splice(b, 1);
                                    for (-1 === A && void 0 !== t && (T.push(t), A = T.length - 1); void 0 !== d.excludes[b] && d.excludes[b].length < 10; ) {
                                        for (d.tests = {}, r.resetMaskSet.call(c, !0), M = !0, y = 0; y < T.length && (x = M.caret || 0 == p.insertMode && null != x ? r.seekNext.call(c, x) : r.getLastValidPosition.call(c, void 0, !0) + 1, 
                                        w = T[y], M = f.call(c, x, w, !1, i, !0)); y++) y === A && (E = M), 1 == e && M && (E = {
                                            caretPos: y
                                        });
                                        if (M) break;
                                        if (r.resetMaskSet.call(c), g = o.getTest.call(c, b), d.validPositions = u.extend(!0, [], O), 
                                        d.tests = u.extend(!0, {}, _), !d.excludes[b]) {
                                            E = l.call(c, e, t, n, i, b - 1, s);
                                            break;
                                        }
                                        if (null != g.alternation) {
                                            var D = (0, o.getDecisionTaker)(g);
                                            if (-1 !== d.excludes[b].indexOf(D + ":" + g.alternation)) {
                                                E = l.call(c, e, t, n, i, b - 1, s);
                                                break;
                                            }
                                            for (d.excludes[b].push(D + ":" + g.alternation), y = b; y < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) d.validPositions.splice(b);
                                        } else delete d.excludes[b];
                                    }
                                }
                                return E && !1 === p.keepStatic || delete d.excludes[b], E;
                            }
                            function s(e, t, n) {
                                var i = this.opts, r = this.maskset;
                                switch (i.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = r.validPositions[n - 1];
                                    e = 0 === n || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof i.casing) {
                                        var l = Array.prototype.slice.call(arguments);
                                        l.push(r.validPositions), e = i.casing.apply(this, l);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, n = this.opts, i = this.maskset;
                                if ("function" == typeof n.isComplete) return n.isComplete(e, n);
                                if ("*" !== n.repeat) {
                                    var a = !1, l = r.determineLastRequiredPosition.call(t, !0), s = l.l;
                                    if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                                        a = !0;
                                        for (var c = 0; c <= s; c++) {
                                            var u = o.getTestTemplate.call(t, c).match;
                                            if (!0 !== u.static && void 0 === i.validPositions[c] && (!1 === u.optionality || void 0 === u.optionality || u.optionality && 0 == u.newBlockMarker) && (!1 === u.optionalQuantifier || void 0 === u.optionalQuantifier) || !0 === u.static && "" != u.def && e[c] !== o.getPlaceholder.call(t, c, u)) {
                                                a = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return a;
                                }
                            }
                            function u(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function f(e, t, n, i, a, p, m) {
                                var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                                n = !0 === n;
                                var x = e;
                                function w(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                                        })).forEach((function(e) {
                                            v.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : i);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            d.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function P(t, n, a) {
                                    var l = !1;
                                    return o.getTests.call(g, t).every((function(c, f) {
                                        var p = c.match;
                                        if (r.getBuffer.call(g, !0), !1 !== (l = (!p.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != p.fn ? p.fn.test(n, b, t, a, k, u.call(g, e)) : (n === p.def || n === k.skipOptionalPartCharacter) && "" !== p.def && {
                                            c: o.getPlaceholder.call(g, t, p, !0) || p.def,
                                            pos: t
                                        }))) {
                                            var d = void 0 !== l.c ? l.c : n, h = t;
                                            return d = d === k.skipOptionalPartCharacter && !0 === p.static ? o.getPlaceholder.call(g, t, p, !0) || p.def : d, 
                                            !0 !== (l = w(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                                input: s.call(g, d, p, h)
                                            }), i, h) && (l = !1), !1);
                                        }
                                        return !0;
                                    })), l;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, O = y.extend(!0, [], b.validPositions);
                                if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== a && !0 !== i) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                                delete b.tests[_]);
                                if ("function" == typeof k.preValidation && !0 !== i && !0 !== p && (S = w(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, n || a))), 
                                !0 === S) {
                                    if (S = P(x, t, n), (!n || !0 === i) && !1 === S && !0 !== p) {
                                        var M = b.validPositions[x];
                                        if (!M || !0 !== M.match.static || M.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                            if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                                var E = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== a && (S.caret = x), 
                                                E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var j = x + 1, T = r.seekNext.call(g, x, !1, 0 !== x); j <= T; j++) if (!1 !== (S = P(j, t, n))) {
                                                    S = h.call(g, x, void 0 !== S.pos ? S.pos : j) || S, x = j;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: r.seekNext.call(g, x)
                                        };
                                    }
                                    g.hasAlternator && !0 !== a && !n && (a = !0, !1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = l.call(g, x, t, n, i, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = l.call(g, !0))), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof k.postValidation && !0 !== i && !0 !== p) {
                                    var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, n, m);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === p ? (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], O)) : h.call(g, void 0, x, !0);
                                var D = w(S);
                                void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !i && (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], O), D = !1);
                                return D;
                            }
                            function p(e, t, n) {
                                for (var i = this.maskset, a = !1, r = o.getTests.call(this, e), l = 0; l < r.length; l++) {
                                    if (r[l].match && (r[l].match.nativeDef === t.match[n.shiftPositions ? "def" : "nativeDef"] && (!n.shiftPositions || !t.match.static) || r[l].match.nativeDef === t.match.nativeDef || n.regex && !r[l].match.static && r[l].match.fn.test(t.input, i, e, !1, n))) {
                                        a = !0;
                                        break;
                                    }
                                    if (r[l].match && r[l].match.def === t.match.nativeDef) {
                                        a = void 0;
                                        break;
                                    }
                                }
                                return !1 === a && void 0 !== i.jitOffset[e] && (a = p.call(this, e + i.jitOffset[e], t, n)), 
                                a;
                            }
                            function d(e, t, n) {
                                var a, o, l = this, s = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, p = l.isRTL ? n.slice().reverse() : n;
                                if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(l, !1), e = 0, 
                                t = n.length, o = r.determineNewCaretPosition.call(l, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (a = e; a < t; a++) s.validPositions.splice(e, 0);
                                    o = e;
                                }
                                var d = new u.Event("keypress");
                                for (a = e; a < t; a++) {
                                    d.key = p[a].toString(), l.ignorable = !1;
                                    var h = i.EventHandlers.keypressEvent.call(l, d, !0, !1, !1, o);
                                    !1 !== h && void 0 !== h && (o = h.forwardPosition);
                                }
                                c.skipOptionalPartCharacter = f;
                            }
                            function h(e, t, n) {
                                var i = this, a = this.maskset, l = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !a.validPositions[e]; e--) ;
                                for (var s = e; s < t; s++) if (void 0 === a.validPositions[s] && !r.isMask.call(i, s, !1)) if (0 == s ? o.getTest.call(i, s) : a.validPositions[s - 1]) {
                                    var c = o.getTests.call(i, s).slice();
                                    "" === c[c.length - 1].match.def && c.pop();
                                    var u, p = o.determineTestTemplate.call(i, s, c);
                                    if (p && (!0 !== p.match.jit || "master" === p.match.newBlockMarker && (u = a.validPositions[s + 1]) && !0 === u.match.optionalQuantifier) && ((p = l.extend({}, p, {
                                        input: o.getPlaceholder.call(i, s, p.match, !0) || p.match.def
                                    })).generatedInput = !0, v.call(i, s, p, !0), !0 !== n)) {
                                        var d = a.validPositions[t].input;
                                        return a.validPositions[t] = void 0, f.call(i, t, d, !0, !0);
                                    }
                                }
                            }
                            function v(e, t, n, i) {
                                var a = this, l = this.maskset, s = this.opts, c = this.dependencyLib;
                                function d(e, t, n) {
                                    var i = t[e];
                                    if (void 0 !== i && !0 === i.match.static && !0 !== i.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var a = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return a && r;
                                    }
                                    return !1;
                                }
                                var h = 0, v = void 0 !== e.begin ? e.begin : e, m = void 0 !== e.end ? e.end : e, g = !0;
                                if (e.begin > e.end && (v = e.end, m = e.begin), i = void 0 !== i ? i : v, void 0 === n && (v !== m || s.insertMode && void 0 !== l.validPositions[i] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                                    var y, k = c.extend(!0, [], l.validPositions), b = r.getLastValidPosition.call(a, void 0, !0);
                                    l.p = v;
                                    var x = u.call(a, e) ? v : i;
                                    for (y = b; y >= x; y--) l.validPositions.splice(y, 1), void 0 === t && delete l.tests[y + 1];
                                    var w, P, S = i, O = S;
                                    for (t && (l.validPositions[i] = c.extend(!0, {}, t), O++, S++), null == k[m] && l.jitOffset[m] && (m += l.jitOffset[m] + 1), 
                                    y = t ? m : m - 1; y <= b; y++) {
                                        if (void 0 !== (w = k[y]) && !0 !== w.generatedInput && (y >= m || y >= v && d(y, k, {
                                            begin: v,
                                            end: m
                                        }))) {
                                            for (;"" !== o.getTest.call(a, O).match.def; ) {
                                                if (!1 !== (P = p.call(a, O, w, s)) || "+" === w.match.def) {
                                                    "+" === w.match.def && r.getBuffer.call(a, !0);
                                                    var _ = f.call(a, O, w.input, "+" !== w.match.def, !0);
                                                    if (g = !1 !== _, S = (_.pos || O) + 1, !g && P) break;
                                                } else g = !1;
                                                if (g) {
                                                    void 0 === t && w.match.static && y === e.begin && h++;
                                                    break;
                                                }
                                                if (!g && r.getBuffer.call(a), O > l.maskLength) break;
                                                O++;
                                            }
                                            "" == o.getTest.call(a, O).match.def && (g = !1), O = S;
                                        }
                                        if (!g) break;
                                    }
                                    if (!g) return l.validPositions = c.extend(!0, [], k), r.resetMaskSet.call(a, !0), 
                                    !1;
                                } else t && o.getTest.call(a, i).match.cd === t.match.cd && (l.validPositions[i] = c.extend(!0, {}, t));
                                return r.resetMaskSet.call(a, !0), h;
                            }
                        }
                    }, t = {};
                    function n(i) {
                        var a = t[i];
                        if (void 0 !== a) return a.exports;
                        var r = t[i] = {
                            exports: {}
                        };
                        return e[i](r, r.exports, n), r.exports;
                    }
                    var i = {};
                    return function() {
                        var e = i;
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.default = void 0, n(7149), n(3194), n(9302), n(4013), n(3851), n(219), n(207), 
                        n(5296);
                        var t, a = (t = n(2394)) && t.__esModule ? t : {
                            default: t
                        };
                        e.default = a.default;
                    }(), i;
                }();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const dropdownLang = () => {
            document.addEventListener("click", (_ref => {
                let {target} = _ref;
                if (target.closest("[data-dropdown-button]")) {
                    const languageBlock = target.closest(".language-top-header");
                    if (languageBlock) languageBlock.classList.toggle("is-active");
                } else {
                    const languageBlock = document.querySelector(".language-top-header");
                    if (languageBlock && languageBlock.classList.contains("is-active")) languageBlock.classList.remove("is-active");
                }
            }));
        };
        const getHash = () => location.hash ? location.hash.replace("#", "") : null;
        const setHash = hash => {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        };
        const FLS = message => {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        };
        const uniqArray = array => array.filter(((item, index, self) => self.indexOf(item) === index));
        const dataMediaQueries = (array, dataSetValue) => {
            const media = Array.from(array).filter((item => item.dataset[dataSetValue] ? item.dataset[dataSetValue].split(",")[0] : null));
            if (!media.length) return;
            const breakpointsArray = [];
            media.forEach((item => {
                const params = item.dataset[dataSetValue];
                const breakpoint = {};
                const paramsArray = params.split(",");
                breakpoint.value = paramsArray[0];
                breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                breakpoint.item = item;
                breakpointsArray.push(breakpoint);
            }));
            let mdQueries = breakpointsArray.map((item => `(${item.type}-width: ${item.value}px),${item.value},${item.type}`));
            mdQueries = uniqArray(mdQueries);
            const mdQueriesArray = [];
            if (mdQueries.length) {
                mdQueries.forEach((breakpoint => {
                    const paramsArray = breakpoint.split(",");
                    const mediaBreakpoint = paramsArray[1];
                    const mediaType = paramsArray[2];
                    const matchMedia = window.matchMedia(paramsArray[0]);
                    const itemsArray = breakpointsArray.filter((item => {
                        if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                    }));
                    mdQueriesArray.push({
                        itemsArray,
                        matchMedia
                    });
                }));
                return mdQueriesArray;
            }
        };
        const isPCViewPort = () => window.innerWidth >= 1230 ? true : false;
        const utils_debounce = function(func) {
            let delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 250;
            return function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                let timer;
                clearTimeout(timer);
                timer = setTimeout((() => {
                    func.apply(this, args);
                }), delay);
            };
        };
        const setItemToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
        const getItemFromLocalStorage = key => JSON.parse(localStorage.getItem(key));
        const removeItemFromLocalStorage = key => {
            localStorage.removeItem(key);
        };
        const addLoadedClass = () => {
            if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (() => {
                setTimeout((() => document.documentElement.classList.add("loaded")), 0);
            }));
        };
        const headerHeight = () => {
            const getHeaderHeight = () => {
                const header = document.querySelector(".header");
                const headerHeight = header.offsetHeight;
                const topHeaderHeight = header.querySelector(".header__top").offsetHeight;
                document.querySelector(":root").style.setProperty("--header-height", `${headerHeight}px`);
                document.querySelector(":root").style.setProperty("--top-header-height", `${topHeaderHeight}px`);
            };
            getHeaderHeight();
            window.addEventListener("orientationchange", getHeaderHeight);
            window.addEventListener("resize", utils_debounce(getHeaderHeight, 200));
        };
        const gotoBlock = function(targetSelector) {
            let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const targetBlockElement = document.querySelector(targetSelector);
            if (!targetBlockElement) {
                FLS(`[GotoBlock]: There is no such block on the page: ${targetSelector}`);
                return;
            }
            let defaultConfig = {
                noHeader: false,
                speed: 500,
                offsetTop: 0
            };
            const {noHeader, speed, offsetTop} = {
                ...defaultConfig,
                ...config
            };
            const getHeaderHeight = () => {
                const headerElement = document.querySelector("header.header");
                let headerHeight = 0;
                if (!headerElement.classList.contains("header-scroll")) {
                    headerElement.style.cssText = `transition-duration: 0s;`;
                    headerElement.classList.add("header-scroll");
                    headerHeight = headerElement.offsetHeight;
                    headerElement.classList.remove("header-scroll");
                    setTimeout((() => {
                        headerElement.style.cssText = ``;
                    }), 0);
                } else headerHeight = headerElement.offsetHeight;
                return headerHeight;
            };
            const headerItemHeight = noHeader ? getHeaderHeight() : 0;
            if (document.documentElement.classList.contains("menu-open")) menuClose();
            const targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY - headerItemHeight - offsetTop;
            window.scrollTo({
                top: targetBlockElementPosition,
                behavior: "smooth"
            });
            FLS(`[GotoBlock]: We go to ${targetSelector}`);
        };
        let bodyLockStatus = true;
        const bodyUnlock = function() {
            let delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    lockPaddingElements.forEach((lockPaddingElement => {
                        lockPaddingElement.style.paddingRight = "";
                    }));
                    document.body.style.paddingRight = "";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((() => {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        const bodyLock = function() {
            let delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = lockPaddingValue;
                }));
                document.body.style.paddingRight = lockPaddingValue;
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((() => {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        const bodyLockToggle = function() {
            let delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
            document.documentElement.classList.contains("lock") ? bodyUnlock(delay) : bodyLock(delay);
        };
        const menuClose = () => {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        };
        const _slideUp = function(target) {
            let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
            let showmore = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            if (!target.classList.contains("slide")) {
                target.classList.add("slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        const _slideDown = function(target) {
            let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
            let showmore = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            if (!target.classList.contains("slide")) {
                target.classList.add("slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        const _slideToggle = function(target) {
            let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
            target.hidden ? _slideDown(target, duration) : _slideUp(target, duration);
        };
        const megaMenuShow = () => {
            document.addEventListener("click", (_ref => {
                let {target} = _ref;
                return megaMenuAction(target);
            }));
            function megaMenuAction(target) {
                document.querySelector("[data-mega-menu]");
                if (bodyLockStatus && target.closest(".main-header__search-form > .form__input")) {
                    if (!document.documentElement.classList.contains("mega-menu-open")) {
                        document.documentElement.classList.add("mega-menu-open");
                        bodyLock();
                    }
                } else {
                    if (target.closest("[data-mega-menu]") && !target.closest("[data-close-menu]")) return;
                    if (bodyLockStatus && document.documentElement.classList.contains("mega-menu-open")) {
                        document.documentElement.classList.remove("mega-menu-open");
                        bodyUnlock();
                    }
                }
            }
        };
        const burgerMenu = () => {
            const burger = document.querySelector("[data-burger-button]");
            if (burger) document.addEventListener("click", (_ref => {
                let {target} = _ref;
                if (bodyLockStatus && target.closest("[data-burger-button]")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        };
        const showSearchInput = () => {
            document.addEventListener("click", (_ref => {
                let {target} = _ref;
                if (target.closest("[data-show-input]")) {
                    const searchForm = target.closest(".main-header__search").querySelector(".main-header__search-form");
                    if (!searchForm.classList.contains("is-show")) searchForm.classList.add("is-show");
                } else {
                    const searchForm = document.querySelector(".main-header__search-form");
                    if (searchForm.classList.contains("is-show") && !target.closest(".main-header__search-form")) searchForm.classList.remove("is-show");
                }
            }));
        };
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const startPoint = +header.dataset.scroll || 1;
            let scrollDirection = 0;
            document.addEventListener("windowScroll", (e => {
                const {scrollTop} = e.detail;
                if (scrollTop >= startPoint) {
                    toggleClass(header, "header--scroll", true);
                    if (headerShow) if (scrollTop < scrollDirection) toggleClass(header, "header--show", false); else toggleClass(header, "header--show", true);
                } else {
                    toggleClass(header, "header--scroll", false);
                    if (headerShow) toggleClass(header, "header--show", false);
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
            function toggleClass(element, className, condition) {
                if (condition) {
                    if (!element.classList.contains(className)) element.classList.add(className);
                } else if (element.classList.contains(className)) element.classList.remove(className);
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) window.addEventListener("scroll", (() => {
                const scrollTop = window.scrollY;
                const windowScroll = new CustomEvent("windowScroll", {
                    detail: {
                        scrollTop
                    }
                });
                document.dispatchEvent(windowScroll);
            }));
        }), 0);
        function initTimer() {
            const timer = document.querySelector("[data-countdown-timer]");
            if (!timer) return;
            const lang = timer.dataset.countdownTimer;
            const daysValue = timer.querySelector(".timer__days .timer__value");
            const hoursValue = timer.querySelector(".timer__hours .timer__value");
            const minutesValue = timer.querySelector(".timer__minutes .timer__value");
            const secondsValue = timer.querySelector(".timer__seconds .timer__value");
            const daysText = timer.querySelector(".timer__days .timer__text");
            const hoursText = timer.querySelector(".timer__hours .timer__text");
            const minutesText = timer.querySelector(".timer__minutes .timer__text");
            const secondsText = timer.querySelector(".timer__seconds .timer__text");
            const declOfNumIntl = function(number, forms) {
                let locale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "en";
                const pluralRules = new Intl.PluralRules(locale);
                const rulesMap = {
                    uk: {
                        one: forms[0],
                        few: forms[1],
                        many: forms[2],
                        other: forms[2]
                    },
                    en: {
                        one: forms[0],
                        other: forms[1]
                    }
                };
                const form = pluralRules.select(number);
                return (rulesMap[locale] || rulesMap["en"])[form];
            };
            const format = value => value < 10 ? "0" + value : value;
            const langMap = {
                uk: {
                    days: [ "день", "дня", "днів" ],
                    hours: [ "година", "години", "годин" ],
                    minutes: [ "хвилина", "хвилини", "хвилин" ],
                    seconds: [ "секунда", "секунди", "секунд" ]
                },
                en: {
                    days: [ "day", "days" ],
                    hours: [ "hour", "hours" ],
                    minutes: [ "minute", "minutes" ],
                    seconds: [ "second", "seconds" ]
                }
            };
            const forms = langMap[lang] || langMap.en;
            const updateTimer = () => {
                const {offerEndDate} = timer.dataset;
                const currentDate = new Date;
                const limitedDate = new Date(offerEndDate);
                const endDate = limitedDate - currentDate;
                if (endDate <= 0) {
                    daysValue.textContent = hoursValue.textContent = minutesValue.textContent = secondsValue.textContent = "00";
                    return;
                }
                const days = Math.floor(endDate / 1e3 / 60 / 60 / 24);
                const hours = Math.floor(endDate / 1e3 / 60 / 60) % 24;
                const minutes = Math.floor(endDate / 1e3 / 60) % 60;
                const seconds = Math.floor(endDate / 1e3) % 60;
                daysValue.textContent = format(days);
                hoursValue.textContent = format(hours);
                minutesValue.textContent = format(minutes);
                secondsValue.textContent = format(seconds);
                daysText.textContent = declOfNumIntl(days, forms.days, lang);
                hoursText.textContent = declOfNumIntl(hours, forms.hours, lang);
                minutesText.textContent = declOfNumIntl(minutes, forms.minutes, lang);
                secondsText.textContent = declOfNumIntl(seconds, forms.seconds, lang);
            };
            updateTimer();
            setInterval(updateTimer, 1e3);
        }
        const objectModules = {};
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const {target} = e;
                    if (target.closest("[data-goto]")) {
                        const gotoLink = target.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (objectModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (fullpageSectionId !== null) {
                                objectModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoBlock(gotoLinkSelector, {
                            noHeader,
                            speed: gotoSpeed,
                            offsetTop
                        });
                        e.preventDefault();
                    }
                }
                if (e.type === "watcherCallback" && e.detail) {
                    const {entry: {target, isIntersecting}} = e.detail;
                    if (target.dataset.watch === "navigator") {
                        let navigatorCurrentItem;
                        if (target.id && document.querySelector(`[data-goto="#${target.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${target.id}"]`); else if (target.classList.length) for (let index = 0; index < target.classList.length; index++) {
                            const element = target.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("navigator-active") : null;
                    }
                }
            }
        }
        const cartToggle = target => {
            const cartButton = target.closest(".main-header__button--cart");
            const cartCloseButton = target.closest(".cart__close");
            const isCartOpen = document.documentElement.classList.contains("cart-open");
            const clickOutsideCart = !target.closest(".cart");
            if (cartButton && bodyLockStatus) {
                bodyLockToggle();
                document.documentElement.classList.toggle("cart-open");
                return;
            }
            if (cartCloseButton) {
                bodyLockToggle();
                document.documentElement.classList.remove("cart-open");
                return;
            }
            if (clickOutsideCart && isCartOpen && !cartButton) {
                bodyLockToggle();
                document.documentElement.classList.remove("cart-open");
            }
        };
        const productCartHTML = productItem => {
            const {productId, category, productTitle, productImage, quantity, productPrice, color, size, link} = productItem;
            const productPriceHTML = productPrice => {
                const {price, discountPrice} = productPrice;
                if (!price) return "";
                if (discountPrice) return `\n          <div class="product-item__price" data-now-price=${discountPrice} data-old-price=${price}>\n            <span class="product-item__now">$${discountPrice}</span>\n            <span class="product-item__old">$${price}</span>\n          </div>\n      `; else return ` \n          <div class="product-item__price" data-now-price=${price}>\n            <span>$${price}</span>\n          </div>\n       `;
            };
            const colorProductHTML = color => {
                if (!color) return "";
                return `\n      <div class="info-product__color">\n        Color: <span data-color="${color}">${color}</span>\n      </div>\n    `;
            };
            const sizeProductHTML = size => {
                if (!size) return "";
                return `\n      <div class="info-product__size">\n        Size: <span>${size}</span>\n      </div>\n    `;
            };
            const wishlistButtonHTML = productId => {
                const wishlistButton = document.querySelector(`.product[data-product-id="${productId}"] .content-product__wishlist`);
                if (wishlistButton) return `\n      <button class="product-item__wishlist ${wishlistButton.classList.contains("wishlist-active") ? "wishlist-active" : ""}" data-product-id="${productId}">\n        <span>Move to</span>\n        <svg>\n          <use xlink:href="img/sprite/icons.svg#heard"></use>\n        </svg>\n      </button>\n    `;
            };
            return `\n            <li class="cart__item">\n             <div class="cart__product product-item" data-product-id=${productId} data-category=${category}>\n              <a class="product-item__image" href="${link}">\n                <img src="${productImage}" alt="${productTitle}">\n              </a>\n              <div class="product-item__body">\n                <div class="product-item__info info-product">\n                  <a class="info-product__title" href="${link}">\n                    <span>${productTitle}</span>\n                  </a>\n                  ${colorProductHTML(color)}\n                  ${sizeProductHTML(size)}\n                </div>\n                <div class="product-item__total">\n                  <div class="quantity" data-quantity>\n                    <div class="quantity__input">\n                      <input autocomplete="off" type="text" name="form[quantity]" data-quantity-min="1" data-quantity-max="5" data-quantity-value value="${quantity ? quantity : 1}">\n                    </div>\n                    <button class="quantity__button quantity__button--plus" data-quantity-plus type="button">\n                    </button>\n                    <button class="quantity__button quantity__button--minus" data-quantity-minus type="button">\n                    </button>\n                  </div>\n                  ${productPriceHTML(productPrice)}\n                </div>\n                ${wishlistButtonHTML(productId)}\n              </div>\n              <button class="product-item__remove" aria-label="Remove product">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#delete"></use>\n                </svg>\n              </button>\n            </div>\n          </li>\n  `;
        };
        const updateCartCountItems = cart => {
            if (cart) {
                const cartList = cart.querySelector(".cart__list");
                const countItems = cartList.querySelectorAll(".cart__item").length;
                const cartButtonCount = document.querySelector(".main-header__button--cart span");
                const countTitle = cart.querySelector(".cart__title span");
                cartButtonCount.textContent = countTitle.textContent = countItems > 0 ? countItems : "0";
            }
        };
        const updateTotalPrice = cart => {
            const totalPrice = cart.querySelector(".cart__total-price");
            const cartItems = cart.querySelectorAll(".cart__item");
            if (!cartItems.length) {
                totalPrice.textContent = "$0.00";
                return;
            }
            const price = Array.from(cartItems).map((item => {
                const productPrice = item.querySelector(".product-item__price");
                const {nowPrice, oldPrice} = productPrice.dataset;
                const quantityInputValue = item.querySelector("[data-quantity-value]").value;
                const totalPrice = oldPrice ? oldPrice * +quantityInputValue : nowPrice * +quantityInputValue;
                productPrice.querySelectorAll("span").forEach((itemPrice => itemPrice.textContent = `$${totalPrice.toFixed(2)}`));
                return totalPrice;
            })).reduce(((acc, price) => acc + price));
            totalPrice.textContent = `$${price.toFixed(2)}`;
        };
        const updateProductButton = product => {
            if (!product) return;
            const productButton = product.querySelector(".product__button") || document.querySelector(`.product[data-product-id="${product.dataset.productId}"] .product__button`);
            if (!productButton) return;
            const productCart = document.querySelector(`.product-item[data-product-id="${product.dataset.productId}"]`);
            if (productCart) {
                productButton.classList.add("product__button--active");
                productButton.querySelector("span").textContent = "Added to cart";
            } else {
                productButton.classList.remove("product__button--active");
                productButton.querySelector("span").textContent = "Add to cart";
            }
        };
        const productCartObject = product => {
            const productId = product.dataset.productId;
            const category = product.dataset.category;
            const productTitle = product.querySelector(".product__title-link").textContent;
            const productImage = product.querySelector(".content-product__image img").getAttribute("src");
            const productPrice = {
                price: product.querySelector(".product__price").getAttribute("data-price"),
                discountPrice: product.querySelector(".product__price").getAttribute("data-discount-price")
            };
            const color = product.querySelector(".colors-product__link--active .colors-product__color");
            const sizeInputChecked = Array.from(product.querySelectorAll(".sizes-product__input")).find((input => input.checked));
            const size = sizeInputChecked?.nextElementSibling?.textContent.trim();
            const link = product.querySelector(".product__title-link").getAttribute("href");
            return {
                productId,
                category,
                productTitle,
                productImage,
                productPrice,
                color: color ? color.getAttribute("data-color") : null,
                size,
                link
            };
        };
        const cartActions = e => {
            const {target} = e;
            const cart = document.querySelector("[data-cart]");
            if (!cart) return;
            cartToggle(target);
            if (target.closest(".product__button")) {
                const productButton = target.closest(".product__button");
                if (productButton.classList.contains("product__button--active")) return;
                const product = target.closest(".product");
                const cartList = cart.querySelector(".cart__list");
                const productItem = productCartObject(product);
                cartList.insertAdjacentHTML("beforeend", productCartHTML(productItem));
                updateProductButton(product);
                updateCartCountItems(cart);
                updateTotalPrice(cart);
            }
            if (target.closest(".product-item__remove")) {
                const productItem = target.closest(".cart__item");
                const productCart = productItem.querySelector(".product-cart");
                productItem.remove();
                updateProductButton(productCart);
                updateCartCountItems(cart);
                updateTotalPrice(cart);
            }
        };
        const saveCartToLocalStorage = cart => {
            const cartItems = Array.from(cart.querySelectorAll(".cart__item")).map((item => {
                const productCart = item.querySelector(".product-item");
                const quantityInputValue = item.querySelector("[data-quantity-value]").value || 1;
                return {
                    productId: productCart.dataset.productId,
                    category: productCart.dataset.category,
                    productTitle: productCart.querySelector(".info-product__title span").textContent,
                    productImage: productCart.querySelector(".product-item__image img").getAttribute("src"),
                    productPrice: {
                        price: productCart.querySelector(".product-item__price").getAttribute("data-now-price"),
                        discountPrice: productCart.querySelector(".product-item__price").getAttribute("data-old-price") || null
                    },
                    quantity: quantityInputValue,
                    color: productCart.querySelector(".info-product__color span")?.textContent || null,
                    size: productCart.querySelector(".info-product__size span")?.textContent || null,
                    link: productCart.querySelector(".info-product__title").getAttribute("href")
                };
            }));
            setItemToLocalStorage("cart", cartItems);
        };
        const loadCartFromLocalStorage = () => {
            const cartData = getItemFromLocalStorage("cart") || [];
            const cart = document.querySelector("[data-cart]");
            if (cartData.length && cart) {
                const cartList = document.querySelector(".cart__list");
                cartData.forEach((productItem => {
                    cartList.insertAdjacentHTML("beforeend", productCartHTML(productItem));
                    updateProductButton(document.querySelector(`.product[data-product-id="${productItem.productId}"]`));
                }));
                updateCartCountItems(cart);
                updateTotalPrice(cart);
            }
        };
        window.addEventListener("load", (() => loadCartFromLocalStorage()));
        document.addEventListener("click", (e => {
            const cart = document.querySelector("[data-cart]");
            cartActions(e);
            saveCartToLocalStorage(cart);
        }));
        const formQuantity = () => {
            const quantityActions = e => {
                const {type, target} = e;
                if (!target.closest("[data-quantity]")) return;
                const cart = document.querySelector("[data-cart]");
                if (type === "click") if (target.closest("[data-quantity-plus]") || target.closest("[data-quantity-minus]")) {
                    const valueElement = target.closest("[data-quantity]").querySelector("[data-quantity-value]");
                    if (!valueElement) return;
                    const minQuantity = +valueElement.dataset.quantityMin || 1;
                    const maxQuantity = +valueElement.dataset.quantityMax || 1 / 0;
                    const step = +valueElement.dataset.quantityStep;
                    let value = parseInt(valueElement.value) || minQuantity;
                    if (target.hasAttribute("data-quantity-plus")) {
                        step && step > 0 ? value += step : value++;
                        if (maxQuantity && value > maxQuantity) value = maxQuantity;
                    } else {
                        step && step > 0 ? value -= step : value--;
                        if (minQuantity && value < minQuantity) value = minQuantity; else if (!minQuantity && value < 1) value = 1;
                    }
                    valueElement.value = value;
                    if (cart) updateTotalPrice(cart);
                }
                if (type === "input") {
                    if (!target.closest("[data-quantity-value]")) return;
                    const valueElement = target.closest("[data-quantity-value]");
                    if (/[^0-9]/gi.test(valueElement.value)) valueElement.value = 1;
                }
                if (type === "focusout") {
                    if (!target.closest("[data-quantity-value]")) return;
                    const valueElement = target.closest("[data-quantity-value]");
                    const minQuantity = +valueElement.dataset.quantityMin || 1;
                    const maxQuantity = +valueElement.dataset.quantityMax || 1 / 0;
                    const step = +valueElement.dataset.quantityStep;
                    let value = parseInt(valueElement.value);
                    if (isNaN(value) || value <= 1) {
                        valueElement.value = minQuantity || 1;
                        return;
                    }
                    if (step && step > 0 && value % step !== 0) {
                        value = Math.round(value / step) * step;
                        valueElement.value = value;
                        return;
                    }
                    if (minQuantity && value < minQuantity) valueElement.value = minQuantity;
                    if (maxQuantity && value > maxQuantity) valueElement.value = maxQuantity;
                    if (cart) updateTotalPrice(cart);
                }
            };
            document.addEventListener("click", quantityActions);
            document.addEventListener("input", quantityActions);
            document.addEventListener("focusout", quantityActions);
        };
        const pagination = () => {
            const pagination = document.querySelectorAll("[data-pagination]");
            if (!pagination.length) return;
            const paginationArray = Array.from(pagination).filter((item => !item.dataset.pagination.split(",")[0]));
            if (paginationArray.length > 0) initPagination(paginationArray);
            let mdQueriesArray = dataMediaQueries(pagination, "pagination");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", (() => {
                    initPagination(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                initPagination(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            function initPagination(paginationElementArray) {
                let matchMedia = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                paginationElementArray.forEach((paginationElement => {
                    paginationElement = matchMedia ? paginationElement.item : paginationElement;
                    if (matchMedia.matches || !matchMedia) {
                        paginationElement.classList.add("pagination-init");
                        updatePaginationContent(paginationElement);
                    } else {
                        paginationElement.classList.remove("pagination-init");
                        updatePaginationContent(paginationElement, false);
                    }
                }));
                function updatePaginationContent(paginationElement) {
                    let updatePagination = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                    const paginationList = paginationElement.querySelector(".pagination__list");
                    const paginationItems = paginationList.querySelectorAll(".pagination__item");
                    const paginationArrowPrev = paginationElement.querySelector(".pagination__arrow--prev");
                    const paginationArrowNext = paginationElement.querySelector(".pagination__arrow--next");
                    const activeIndex = Array.from(paginationItems).findIndex((item => item.classList.contains("pagination__item--active")));
                    if (paginationArrowPrev) paginationArrowPrev.style.display = activeIndex === 0 ? "none" : "";
                    if (paginationArrowNext) paginationArrowNext.style.display = activeIndex === paginationItems.length - 1 ? "none" : "";
                    paginationItems.forEach((item => item.style.display = "none"));
                    !updatePagination ? paginationItems[0].style.display = "" : paginationItems[activeIndex].style.display = "";
                    paginationItems[paginationItems.length - 1].style.display = "";
                    const start = Math.max(1, !updatePagination ? activeIndex - 1 : activeIndex);
                    const end = Math.min(paginationItems.length - 2, !updatePagination ? activeIndex + 2 : activeIndex);
                    for (let i = start; i <= end; i++) paginationItems[i].style.display = "";
                    paginationList.querySelectorAll(".pagination__dots").forEach((el => el.remove()));
                    if (start > 1) {
                        const dots = document.createElement("li");
                        dots.className = "pagination__dots";
                        !updatePagination ? dots.textContent = "..." : dots.style.display = "none";
                        paginationList.insertBefore(dots, paginationItems[start]);
                    }
                    const beforeLast = !updatePagination ? 2 : 1;
                    if (end < paginationItems.length - beforeLast) {
                        const dots = document.createElement("li");
                        dots.className = "pagination__dots";
                        !updatePagination ? dots.textContent = "..." : dots.textContent = "/";
                        updatePagination && paginationItems.length === activeIndex + 1 ? dots.style.display = "none" : paginationList.insertBefore(dots, paginationItems[paginationItems.length - 1]);
                    }
                }
            }
        };
        function accordion() {
            const accordionsRegular = document.querySelectorAll("[data-accordions]");
            if (!accordionsRegular.length) return;
            const accordionsArray = Array.from(accordionsRegular).filter((item => !item.dataset.accordions.split(",")[0]));
            if (accordionsArray.length > 0) initAccordions(accordionsArray);
            let mdQueriesArray = dataMediaQueries(accordionsRegular, "accordions");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", (() => {
                    initAccordions(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                initAccordions(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            function initAccordions(accordionsArray) {
                let matchMedia = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                accordionsArray.forEach((accordionBlock => {
                    accordionBlock = matchMedia ? accordionBlock.item : accordionBlock;
                    if (matchMedia.matches || !matchMedia) {
                        accordionBlock.classList.add("accordion-init");
                        initAccordionContent(accordionBlock);
                    } else {
                        accordionBlock.classList.remove("accordion-init");
                        initAccordionContent(accordionBlock, false);
                    }
                }));
            }
            function initAccordionContent(accordionBlock) {
                let hideAccrdionContent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                const accordionItems = accordionBlock.querySelectorAll("details");
                if (accordionItems.length > 0) accordionItems.forEach((accordionItem => {
                    const accordionControl = accordionItem.querySelector("summary");
                    if (hideAccrdionContent) {
                        accordionControl.removeAttribute("tabindex");
                        if (!accordionItem.hasAttribute("data-open")) {
                            accordionItem.open = false;
                            accordionControl.nextElementSibling.hidden = true;
                            updateAccordionAttributes(accordionControl);
                        } else {
                            accordionControl.classList.add("is-active");
                            accordionItem.open = true;
                            updateAccordionAttributes(accordionControl, true);
                        }
                    } else {
                        accordionControl.setAttribute("tabindex", "-1");
                        accordionControl.classList.remove("is-active");
                        accordionItem.open = true;
                        accordionControl.nextElementSibling.hidden = false;
                        updateAccordionAttributes(accordionControl, true);
                    }
                }));
            }
            document.addEventListener("click", accordionAction);
            function accordionAction(e) {
                const {target} = e;
                if (target.closest("summary") && target.closest("[data-accordions]")) {
                    e.preventDefault();
                    if (target.closest("[data-accordions]").classList.contains("accordion-init")) {
                        const accordionControl = target.closest("summary");
                        const accordionBlock = accordionControl.closest("details");
                        const accordionParent = accordionControl.closest("[data-accordions]");
                        const oneAccordion = accordionParent.hasAttribute("data-one-accordion");
                        const scrollAccordion = accordionBlock.hasAttribute("data-accordion-scroll");
                        const accordionDuration = getAccordionDuration(accordionParent);
                        if (!accordionParent.querySelectorAll(".slide").length) {
                            if (oneAccordion && !accordionBlock.open) hideAccordionContent(accordionParent);
                            !accordionBlock.open ? accordionBlock.open = true : setTimeout((() => accordionBlock.open = false), accordionDuration);
                            accordionControl.classList.toggle("is-active");
                            _slideToggle(accordionControl.nextElementSibling, accordionDuration);
                            accordionControl.classList.contains("is-active") ? updateAccordionAttributes(accordionControl, true) : updateAccordionAttributes(accordionControl);
                            if (scrollAccordion && accordionControl.classList.contains("is-active")) setScrollAccordion(accordionBlock);
                        }
                    }
                }
                if (!target.closest("[data-accordions]")) {
                    const accordionsClose = document.querySelectorAll("[data-accordion-close]");
                    if (accordionsClose.length > 0) accordionsClose.forEach((accordionClose => {
                        const accordionParent = accordionClose.closest("[data-accordions]");
                        const accordionCloseBlock = accordionClose.parentNode;
                        if (accordionParent.classList.contains("accordion-init")) {
                            const accordionDuration = getAccordionDuration(accordionParent);
                            accordionClose.classList.remove("is-active");
                            _slideUp(accordionClose.nextElementSibling, accordionDuration);
                            setTimeout((() => accordionCloseBlock.open = false), accordionDuration);
                            updateAccordionAttributes(accordionClose);
                        }
                    }));
                }
            }
            function hideAccordionContent(accordionParent) {
                const accordionActiveBlock = accordionParent.querySelector("details[open]");
                if (accordionActiveBlock && !accordionParent.querySelectorAll(".slide").length) {
                    const accordionActiveControl = accordionActiveBlock.querySelector("summary");
                    const accordionDuration = getAccordionDuration(accordionParent);
                    accordionActiveControl.classList.remove("is-active");
                    _slideUp(accordionActiveControl.nextElementSibling, accordionDuration);
                    setTimeout((() => accordionActiveBlock.open = false), accordionDuration);
                    updateAccordionAttributes(accordionActiveControl);
                }
            }
            function setScrollAccordion(accordionBlock) {
                const scrollAccordionValue = accordionBlock.dataset.accordionScroll;
                const scrollAccordionOffset = scrollAccordionValue ? +scrollAccordionValue : 0;
                const scrollAccordionNoHeader = accordionBlock.hasAttribute("data-accordion-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                window.scrollTo({
                    top: accordionBlock.offsetTop - (scrollAccordionOffset + scrollAccordionNoHeader),
                    behavior: "smooth"
                });
            }
            function getAccordionDuration(accordionParent) {
                return +accordionParent.dataset.accordionDuration || 500;
            }
            function updateAccordionAttributes(accordionControl) {
                let isOpen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                const ariaExpanded = isOpen ? "true" : "false";
                const ariaHidden = isOpen ? "false" : "true";
                accordionControl.setAttribute("aria-expanded", ariaExpanded);
                accordionControl.nextElementSibling.setAttribute("aria-hidden", ariaHidden);
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            if (!tabs.length) return;
            const hash = getHash();
            let tabsActiveHash = hash && hash.startsWith("tab-") ? hash.replace("tab-", "").split("-") : [];
            tabs.forEach(((tabsBlock, index) => {
                initTabs(tabsBlock, index);
                tabsBlock.addEventListener("click", tabsAction);
                tabsBlock.addEventListener("keydown", keyDownAction);
            }));
            let mdQueriesArray = dataMediaQueries(tabs, "tabs");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", (() => {
                    updateControlPosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                updateControlPosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            function updateControlPosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    const tabsControl = tabsMediaItem.querySelector("[data-tabs-controls]");
                    const tabsControls = tabsMediaItem.querySelectorAll("[data-tabs-control]");
                    const tabsContent = tabsMediaItem.querySelector("[data-tabs-content]");
                    const tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    const tabsControlArray = Array.from(tabsControls).filter((tabControl => tabControl.closest("[data-tabs]") === tabsMediaItem));
                    const tabsContentArray = Array.from(tabsContentItems).filter((tabContentItem => tabContentItem.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentArray.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsControlArray[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("tab-accordion");
                        } else {
                            tabsControl.append(tabsControlArray[index]);
                            tabsMediaItem.classList.remove("tab-accordion");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock, index) {
                tabsBlock.classList.add("tab-init");
                tabsBlock.setAttribute("data-tabs-index", index);
                const tabsControlNavigation = tabsBlock.querySelector("[data-tabs-controls]");
                const tabsControlButtons = tabsBlock.querySelectorAll("[data-tabs-controls]>*");
                const tabsContentItems = tabsBlock.querySelectorAll("[data-tabs-content]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabControlActive = tabsBlock.querySelector("[data-tabs-controls]>.is-active");
                    if (tabControlActive) tabControlActive.classList.remove("is-active");
                }
                tabsControlNavigation.setAttribute("role", "tablist");
                tabsContentItems.forEach(((tabsContentItem, index) => {
                    tabsControlButtons[index].setAttribute("data-tabs-control", "");
                    tabsControlButtons[index].setAttribute("role", "tab");
                    tabsControlButtons[index].setAttribute("id", `${tabsBlock.classList[0]}${index + 1}`);
                    tabsControlButtons[index].setAttribute("aria-selected", true);
                    tabsContentItem.setAttribute("role", "tabpanel");
                    tabsContentItem.setAttribute("data-tabs-item", "");
                    tabsContentItem.setAttribute("aria-labelledby", tabsControlButtons[index].id);
                    if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsControlButtons[index].classList.add("is-active");
                    if (!tabsControlButtons[index].classList.contains("is-active")) {
                        tabsContentItem.hidden = true;
                        tabsContentItem.setAttribute("tabindex", "-1");
                        tabsControlButtons[index].setAttribute("tabindex", "-1");
                        tabsControlButtons[index].setAttribute("aria-selected", false);
                    }
                }));
            }
            function updateTabsStatus(tabsBlock) {
                const tabsControls = tabsBlock.querySelectorAll("[data-tabs-control]");
                const tabsContentItems = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockAnimateDuration = getTabsAnimateDuration(tabsBlock);
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                if (tabsContentItems.length > 0) {
                    const tabsContentArray = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    const tabsControlsArray = Array.from(tabsControls).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContentArray.forEach(((tabsContentItem, index) => {
                        if (tabsControlsArray[index].classList.contains("is-active")) {
                            tabsContentItem.removeAttribute("tabindex");
                            contentTabsToggle(tabsContentItem, tabsBlockAnimateDuration);
                            if (isHash && !tabsContentItem.closest(".modal")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else {
                            tabsContentItem.setAttribute("tabindex", "-1");
                            contentTabsToggle(tabsContentItem, tabsBlockAnimateDuration, false);
                        }
                    }));
                }
            }
            function contentTabsToggle(tabsContentItem, animateDuration) {
                let isActive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                if (isActive) animateDuration ? _slideDown(tabsContentItem, animateDuration) : tabsContentItem.hidden = false; else animateDuration ? _slideUp(tabsContentItem, animateDuration) : tabsContentItem.hidden = true;
            }
            function tabsAction(e) {
                const {target} = e;
                if (!target.closest("[data-tabs-control]")) return;
                const tabControl = target.closest("[data-tabs-control]");
                const tabsBlock = tabControl.closest("[data-tabs]");
                const tabsControlItems = tabsBlock.querySelectorAll("[data-tabs-control]");
                if (!tabControl.classList.contains("is-active") && !tabsBlock.querySelector(".slide")) {
                    const [tabActiveControl] = Array.from(tabsControlItems).filter((item => item.classList.contains("is-active") && item.closest("[data-tabs]") === tabsBlock));
                    if (tabActiveControl) toggleTabSelected(tabActiveControl);
                    toggleTabSelected(tabControl, true);
                    updateTabsStatus(tabsBlock);
                }
                e.preventDefault();
            }
            function keyDownAction(e) {
                const {target, key} = e;
                if (!target.closest("[data-tabs-control]")) return;
                const tabControl = target.closest("[data-tabs-control]");
                const tabsBlock = tabControl.closest("[data-tabs]");
                const tabsControls = [ ...tabsBlock.querySelectorAll("[data-tabs-control]") ];
                if (tabControl.classList.contains("is-active") && !tabsBlock.querySelector(".slide")) {
                    const currentIndex = tabsControls.findIndex((itemIndex => itemIndex === tabControl));
                    const [tabActiveControl] = tabsControls.filter((item => item.classList.contains("is-active") && item.closest("[data-tabs]") === tabsBlock));
                    let nextIndex;
                    if (key === "ArrowRight" || key === "ArrowDown") nextIndex = currentIndex === tabsControls.length - 1 ? 0 : currentIndex + 1; else if (key === "ArrowLeft" || key === "ArrowUp") nextIndex = currentIndex === 0 ? tabsControls.length - 1 : currentIndex - 1; else return;
                    if (tabActiveControl) toggleTabSelected(tabActiveControl);
                    toggleTabSelected(tabsControls[nextIndex], true);
                    tabsControls[nextIndex].focus();
                    updateTabsStatus(tabsBlock);
                }
            }
            function getTabsAnimateDuration(tabsBlock) {
                if (tabsBlock.hasAttribute("data-tabs-animate")) return +tabsBlock.dataset.tabsAnimate || 500;
            }
            function toggleTabSelected(tabControl) {
                let isActive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                !isActive ? tabControl.setAttribute("tabindex", "-1") : tabControl.removeAttribute("tabindex");
                tabControl.setAttribute("aria-selected", `${!isActive ? false : true}`);
                tabControl.classList.toggle("is-active");
            }
        }
        const starRating = () => {
            const starBlocks = document.querySelectorAll(".star-rating");
            if (!starBlocks.length) return;
            starBlocks.forEach((block => {
                const rating = parseInt(block.dataset.rating, 10) || 0;
                const stars = block.querySelectorAll("img");
                stars.forEach(((star, index) => {
                    if (index < rating) star.src = "img/icons/star-active.svg"; else star.src = "img/icons/star.svg";
                    star.alt = "";
                }));
                block.setAttribute("aria-label", `Rating: ${rating} out of 5`);
            }));
        };
        const sidebarToggle = () => {
            const sidebar = document.querySelector("aside.aside-blog");
            if (!sidebar) return;
            const sidebarAction = e => {
                const {target} = e;
                if (target.closest(".sidebar-button") && bodyLockStatus) {
                    sidebar.classList.toggle("is-open");
                    document.documentElement.classList.toggle("aside-active");
                    bodyLockToggle();
                    return;
                }
                if (!target.closest("aside.aside-blog") && sidebar.classList.contains("is-open")) {
                    sidebar.classList.remove("is-open");
                    document.documentElement.classList.remove("aside-active");
                    bodyLockToggle();
                    return;
                }
            };
            document.addEventListener("click", sidebarAction);
        };
        const filter = document.querySelector("[data-filter]");
        if (filter) {
            filter.classList.add("is-hidden");
            const filterList = document.querySelector(".list-filter");
            if (filterList) checkFilterListItems();
            document.addEventListener("click", filterAction);
            const mediaQuery = window.matchMedia("(min-width: 1230px)");
            function handleViewportChange(e) {
                if (!document.documentElement.classList.contains("show-filter")) return;
                if (e.matches) bodyUnlock(); else bodyLock();
            }
            mediaQuery.addEventListener("change", handleViewportChange);
            function filterAction(e) {
                if (e.target.closest("[data-filter-button]")) {
                    const filterButton = e.target.closest("[data-filter-button]");
                    filter.classList.toggle("is-hidden");
                    document.documentElement.classList.toggle("show-filter");
                    filter.classList.contains("is-hidden") ? filterButton.querySelector("span").textContent = "Show filters" : filterButton.querySelector("span").textContent = "Hide filters";
                    if (!isPCViewPort() && bodyLockStatus) bodyLockToggle(); else bodyUnlock();
                    return;
                }
                if (e.target.closest("[data-filter-close]") && document.documentElement.classList.contains("show-filter")) {
                    filter.classList.add("is-hidden");
                    document.documentElement.classList.remove("show-filter");
                    if (!isPCViewPort() && document.documentElement.classList.contains("lock")) bodyUnlock();
                    return;
                }
                if (!isPCViewPort() && !e.target.closest("[data-filter]") && document.documentElement.classList.contains("show-filter")) {
                    filter.classList.add("is-hidden");
                    document.documentElement.classList.remove("show-filter");
                    if (document.documentElement.classList.contains("lock")) bodyUnlock();
                    return;
                }
                if (e.target.closest("[data-filter]") && !e.target.closest("[data-filter-button]")) {
                    const label = e.target.closest(".checkbox__label");
                    if (label) {
                        const checkboxValue = label.childNodes[0].textContent.trim();
                        const alreadyExists = [ ...filterList.children ].some((el => el.textContent.trim() === checkboxValue));
                        if (!alreadyExists) {
                            filterList?.insertAdjacentHTML("beforeend", createButtonFilterHTML(checkboxValue));
                            checkFilterListItems();
                        } else {
                            const filterItem = [ ...filterList.children ].find((el => el.textContent.trim() === checkboxValue));
                            if (filterItem) {
                                filterItem.remove();
                                checkFilterListItems();
                            }
                        }
                    }
                }
                if (e.target.closest(".list-filter__button") && !e.target.closest("[data-clear-all]")) {
                    const button = e.target.closest(".list-filter__button");
                    const buttonText = button.querySelector("span").textContent.trim();
                    const filterItem = [ ...filterList.children ].find((el => el.textContent.trim() === buttonText));
                    if (filterItem) {
                        filterItem.remove();
                        checkFilterListItems();
                        checkCheckBoxChecked(buttonText);
                    }
                }
                if (e.target.closest("[data-clear-all]")) {
                    const filterItems = [ ...filterList.children ];
                    filterItems.forEach(((item, index) => index !== 0 ? item.remove() : null));
                    checkFilterListItems();
                    const checkboxes = document.querySelector(".filter__blocks").querySelectorAll(".checkbox__input");
                    checkboxes.forEach((checkbox => checkbox.checked = false));
                }
            }
            function checkFilterListItems() {
                if (filterList) [ ...filterList.children ].forEach((el => {
                    if (filterList.children.length === 1) el.style.display = "none"; else el.style.display = "";
                }));
            }
            function createButtonFilterHTML(checkboxValue) {
                return `<li class="list-filter__item">\n              <button class="list-filter__button">\n                <svg>\n                 <use xlink:href="img/sprite/icons.svg#cross"></use>\n              </svg>\n               <span>${checkboxValue}</span>\n              </button>\n            </li>`;
            }
            function checkCheckBoxChecked(text) {
                const checkboxes = document.querySelector(".filter__blocks").querySelectorAll(".checkbox__input");
                checkboxes.forEach((checkbox => {
                    const label = checkbox.nextElementSibling;
                    if (label) {
                        const labelText = label.childNodes[0].textContent.trim();
                        if (labelText === text && checkbox.checked) checkbox.checked = false;
                    }
                }));
            }
        }
        var PipsMode;
        (function(PipsMode) {
            PipsMode["Range"] = "range";
            PipsMode["Steps"] = "steps";
            PipsMode["Positions"] = "positions";
            PipsMode["Count"] = "count";
            PipsMode["Values"] = "values";
        })(PipsMode || (PipsMode = {}));
        var PipsType;
        (function(PipsType) {
            PipsType[PipsType["None"] = -1] = "None";
            PipsType[PipsType["NoValue"] = 0] = "NoValue";
            PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
            PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
        })(PipsType || (PipsType = {}));
        function isValidFormatter(entry) {
            return isValidPartialFormatter(entry) && typeof entry.from === "function";
        }
        function isValidPartialFormatter(entry) {
            return typeof entry === "object" && typeof entry.to === "function";
        }
        function removeElement(el) {
            el.parentElement.removeChild(el);
        }
        function isSet(value) {
            return value !== null && value !== void 0;
        }
        function preventDefault(e) {
            e.preventDefault();
        }
        function unique(array) {
            return array.filter((function(a) {
                return !this[a] ? this[a] = true : false;
            }), {});
        }
        function closest(value, to) {
            return Math.round(value / to) * to;
        }
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
            return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
        }
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout((function() {
                    removeClass(element, className);
                }), duration);
            }
        }
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }
        function asArray(a) {
            return Array.isArray(a) ? a : [ a ];
        }
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }
        function addClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
        }
        function removeClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
        function hasClass(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
        }
        function getPageOffset(doc) {
            var supportPageOffset = window.pageXOffset !== void 0;
            var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
            var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
            var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
            return {
                x,
                y
            };
        }
        function getActions() {
            return window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            };
        }
        function getSupportsPassive() {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, "passive", {
                    get: function() {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("test", null, opts);
            } catch (e) {}
            return supportsPassive;
        }
        function getSupportsTouchActionNone() {
            return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        function subRangeRatio(pa, pb) {
            return 100 / (pb - pa);
        }
        function fromPercentage(range, value, startRange) {
            return value * 100 / (range[startRange + 1] - range[startRange]);
        }
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
        }
        function isPercentage(range, value) {
            return value * (range[1] - range[0]) / 100 + range[0];
        }
        function getJ(value, arr) {
            var j = 1;
            while (value >= arr[j]) j += 1;
            return j;
        }
        function toStepping(xVal, xPct, value) {
            if (value >= xVal.slice(-1)[0]) return 100;
            var j = getJ(value, xVal);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
        }
        function fromStepping(xVal, xPct, value) {
            if (value >= 100) return xVal.slice(-1)[0];
            var j = getJ(value, xPct);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
        }
        function getStep(xPct, xSteps, snap, value) {
            if (value === 100) return value;
            var j = getJ(value, xPct);
            var a = xPct[j - 1];
            var b = xPct[j];
            if (snap) {
                if (value - a > (b - a) / 2) return b;
                return a;
            }
            if (!xSteps[j - 1]) return value;
            return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
        }
        var Spectrum = function() {
            function Spectrum(entry, snap, singleStep) {
                this.xPct = [];
                this.xVal = [];
                this.xSteps = [];
                this.xNumSteps = [];
                this.xHighestCompleteStep = [];
                this.xSteps = [ singleStep || false ];
                this.xNumSteps = [ false ];
                this.snap = snap;
                var index;
                var ordered = [];
                Object.keys(entry).forEach((function(index) {
                    ordered.push([ asArray(entry[index]), index ]);
                }));
                ordered.sort((function(a, b) {
                    return a[0][0] - b[0][0];
                }));
                for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                this.xNumSteps = this.xSteps.slice(0);
                for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
            }
            Spectrum.prototype.getDistance = function(value) {
                var distances = [];
                for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                return distances;
            };
            Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                var xPct_index = 0;
                if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                if (distances === null) distances = [];
                var start_factor;
                var rest_factor = 1;
                var rest_rel_distance = distances[xPct_index];
                var range_pct = 0;
                var rel_range_distance = 0;
                var abs_distance_counter = 0;
                var range_counter = 0;
                if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                while (rest_rel_distance > 0) {
                    range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                    if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                        rel_range_distance = range_pct * start_factor;
                        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                        start_factor = 1;
                    } else {
                        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                        rest_factor = 0;
                    }
                    if (direction) {
                        abs_distance_counter -= rel_range_distance;
                        if (this.xPct.length + range_counter >= 1) range_counter--;
                    } else {
                        abs_distance_counter += rel_range_distance;
                        if (this.xPct.length - range_counter >= 1) range_counter++;
                    }
                    rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                }
                return value + abs_distance_counter;
            };
            Spectrum.prototype.toStepping = function(value) {
                value = toStepping(this.xVal, this.xPct, value);
                return value;
            };
            Spectrum.prototype.fromStepping = function(value) {
                return fromStepping(this.xVal, this.xPct, value);
            };
            Spectrum.prototype.getStep = function(value) {
                value = getStep(this.xPct, this.xSteps, this.snap, value);
                return value;
            };
            Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                var j = getJ(value, this.xPct);
                if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                return (this.xVal[j] - this.xVal[j - 1]) / size;
            };
            Spectrum.prototype.getNearbySteps = function(value) {
                var j = getJ(value, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[j - 2],
                        step: this.xNumSteps[j - 2],
                        highestStep: this.xHighestCompleteStep[j - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[j - 1],
                        step: this.xNumSteps[j - 1],
                        highestStep: this.xHighestCompleteStep[j - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[j],
                        step: this.xNumSteps[j],
                        highestStep: this.xHighestCompleteStep[j]
                    }
                };
            };
            Spectrum.prototype.countStepDecimals = function() {
                var stepDecimals = this.xNumSteps.map(countDecimals);
                return Math.max.apply(null, stepDecimals);
            };
            Spectrum.prototype.hasNoSize = function() {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
            };
            Spectrum.prototype.convert = function(value) {
                return this.getStep(this.toStepping(value));
            };
            Spectrum.prototype.handleEntryPoint = function(index, value) {
                var percentage;
                if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
                if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(percentage);
                this.xVal.push(value[0]);
                var value1 = Number(value[1]);
                if (!percentage) {
                    if (!isNaN(value1)) this.xSteps[0] = value1;
                } else this.xSteps.push(isNaN(value1) ? false : value1);
                this.xHighestCompleteStep.push(0);
            };
            Spectrum.prototype.handleStepPoint = function(i, n) {
                if (!n) return;
                if (this.xVal[i] === this.xVal[i + 1]) {
                    this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                    return;
                }
                this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                this.xHighestCompleteStep[i] = step;
            };
            return Spectrum;
        }();
        var defaultFormatter = {
            to: function(value) {
                return value === void 0 ? "" : value.toFixed(2);
            },
            from: Number
        };
        var cssClasses = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        };
        var INTERNAL_EVENT_NS = {
            tooltips: ".__tooltips",
            aria: ".__aria"
        };
        function testStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
            parsed.singleStep = entry;
        }
        function testKeyboardPageMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
            parsed.keyboardPageMultiplier = entry;
        }
        function testKeyboardMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
            parsed.keyboardMultiplier = entry;
        }
        function testKeyboardDefaultStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
            parsed.keyboardDefaultStep = entry;
        }
        function testRange(parsed, entry) {
            if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
            if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
        }
        function testStart(parsed, entry) {
            entry = asArray(entry);
            if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
            parsed.handles = entry.length;
            parsed.start = entry;
        }
        function testSnap(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
            parsed.snap = entry;
        }
        function testAnimate(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
            parsed.animate = entry;
        }
        function testAnimationDuration(parsed, entry) {
            if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
            parsed.animationDuration = entry;
        }
        function testConnect(parsed, entry) {
            var connect = [ false ];
            var i;
            if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
            if (entry === true || entry === false) {
                for (i = 1; i < parsed.handles; i++) connect.push(entry);
                connect.push(false);
            } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
            parsed.connect = connect;
        }
        function testOrientation(parsed, entry) {
            switch (entry) {
              case "horizontal":
                parsed.ort = 0;
                break;

              case "vertical":
                parsed.ort = 1;
                break;

              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
        }
        function testMargin(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (entry === 0) return;
            parsed.margin = parsed.spectrum.getDistance(entry);
        }
        function testLimit(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            parsed.limit = parsed.spectrum.getDistance(entry);
            if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
        function testPadding(parsed, entry) {
            var index;
            if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (entry === 0) return;
            if (!Array.isArray(entry)) entry = [ entry, entry ];
            parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
            for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var totalPadding = entry[0] + entry[1];
            var firstValue = parsed.spectrum.xVal[0];
            var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
            if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
        function testDirection(parsed, entry) {
            switch (entry) {
              case "ltr":
                parsed.dir = 0;
                break;

              case "rtl":
                parsed.dir = 1;
                break;

              default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
            }
        }
        function testBehaviour(parsed, entry) {
            if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var tap = entry.indexOf("tap") >= 0;
            var drag = entry.indexOf("drag") >= 0;
            var fixed = entry.indexOf("fixed") >= 0;
            var snap = entry.indexOf("snap") >= 0;
            var hover = entry.indexOf("hover") >= 0;
            var unconstrained = entry.indexOf("unconstrained") >= 0;
            var invertConnects = entry.indexOf("invert-connects") >= 0;
            var dragAll = entry.indexOf("drag-all") >= 0;
            var smoothSteps = entry.indexOf("smooth-steps") >= 0;
            if (fixed) {
                if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                testMargin(parsed, parsed.start[1] - parsed.start[0]);
            }
            if (invertConnects && parsed.handles !== 2) throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
            if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
            parsed.events = {
                tap: tap || snap,
                drag,
                dragAll,
                smoothSteps,
                fixed,
                snap,
                hover,
                unconstrained,
                invertConnects
            };
        }
        function testTooltips(parsed, entry) {
            if (entry === false) return;
            if (entry === true || isValidPartialFormatter(entry)) {
                parsed.tooltips = [];
                for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
            } else {
                entry = asArray(entry);
                if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                entry.forEach((function(formatter) {
                    if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }));
                parsed.tooltips = entry;
            }
        }
        function testHandleAttributes(parsed, entry) {
            if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
            parsed.handleAttributes = entry;
        }
        function testAriaFormat(parsed, entry) {
            if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            parsed.ariaFormat = entry;
        }
        function testFormat(parsed, entry) {
            if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
            parsed.format = entry;
        }
        function testKeyboardSupport(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
            parsed.keyboardSupport = entry;
        }
        function testDocumentElement(parsed, entry) {
            parsed.documentElement = entry;
        }
        function testCssPrefix(parsed, entry) {
            if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
            parsed.cssPrefix = entry;
        }
        function testCssClasses(parsed, entry) {
            if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
            if (typeof parsed.cssPrefix === "string") {
                parsed.cssClasses = {};
                Object.keys(entry).forEach((function(key) {
                    parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                }));
            } else parsed.cssClasses = entry;
        }
        function testOptions(options) {
            var parsed = {
                margin: null,
                limit: null,
                padding: null,
                animate: true,
                animationDuration: 300,
                ariaFormat: defaultFormatter,
                format: defaultFormatter
            };
            var tests = {
                step: {
                    r: false,
                    t: testStep
                },
                keyboardPageMultiplier: {
                    r: false,
                    t: testKeyboardPageMultiplier
                },
                keyboardMultiplier: {
                    r: false,
                    t: testKeyboardMultiplier
                },
                keyboardDefaultStep: {
                    r: false,
                    t: testKeyboardDefaultStep
                },
                start: {
                    r: true,
                    t: testStart
                },
                connect: {
                    r: true,
                    t: testConnect
                },
                direction: {
                    r: true,
                    t: testDirection
                },
                snap: {
                    r: false,
                    t: testSnap
                },
                animate: {
                    r: false,
                    t: testAnimate
                },
                animationDuration: {
                    r: false,
                    t: testAnimationDuration
                },
                range: {
                    r: true,
                    t: testRange
                },
                orientation: {
                    r: false,
                    t: testOrientation
                },
                margin: {
                    r: false,
                    t: testMargin
                },
                limit: {
                    r: false,
                    t: testLimit
                },
                padding: {
                    r: false,
                    t: testPadding
                },
                behaviour: {
                    r: true,
                    t: testBehaviour
                },
                ariaFormat: {
                    r: false,
                    t: testAriaFormat
                },
                format: {
                    r: false,
                    t: testFormat
                },
                tooltips: {
                    r: false,
                    t: testTooltips
                },
                keyboardSupport: {
                    r: true,
                    t: testKeyboardSupport
                },
                documentElement: {
                    r: false,
                    t: testDocumentElement
                },
                cssPrefix: {
                    r: true,
                    t: testCssPrefix
                },
                cssClasses: {
                    r: true,
                    t: testCssClasses
                },
                handleAttributes: {
                    r: false,
                    t: testHandleAttributes
                }
            };
            var defaults = {
                connect: false,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: true,
                cssPrefix: "noUi-",
                cssClasses,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10
            };
            if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
            Object.keys(tests).forEach((function(name) {
                if (!isSet(options[name]) && defaults[name] === void 0) {
                    if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                    return;
                }
                tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
            }));
            parsed.pips = options.pips;
            var d = document.createElement("div");
            var msPrefix = d.style.msTransform !== void 0;
            var noPrefix = d.style.transform !== void 0;
            parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
            var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
            parsed.style = styles[parsed.dir][parsed.ort];
            return parsed;
        }
        function scope(target, options, originalOptions) {
            var actions = getActions();
            var supportsTouchActionNone = getSupportsTouchActionNone();
            var supportsPassive = supportsTouchActionNone && getSupportsPassive();
            var scope_Target = target;
            var scope_Base;
            var scope_ConnectBase;
            var scope_Handles;
            var scope_Connects;
            var scope_Pips;
            var scope_Tooltips;
            var scope_Spectrum = options.spectrum;
            var scope_Values = [];
            var scope_Locations = [];
            var scope_HandleNumbers = [];
            var scope_ActiveHandlesCount = 0;
            var scope_Events = {};
            var scope_ConnectsInverted = false;
            var scope_Document = target.ownerDocument;
            var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
            var scope_Body = scope_Document.body;
            var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
            function addNodeTo(addTarget, className) {
                var div = scope_Document.createElement("div");
                if (className) addClass(div, className);
                addTarget.appendChild(div);
                return div;
            }
            function addOrigin(base, handleNumber) {
                var origin = addNodeTo(base, options.cssClasses.origin);
                var handle = addNodeTo(origin, options.cssClasses.handle);
                addNodeTo(handle, options.cssClasses.touchArea);
                handle.setAttribute("data-handle", String(handleNumber));
                if (options.keyboardSupport) {
                    handle.setAttribute("tabindex", "0");
                    handle.addEventListener("keydown", (function(event) {
                        return eventKeydown(event, handleNumber);
                    }));
                }
                if (options.handleAttributes !== void 0) {
                    var attributes_1 = options.handleAttributes[handleNumber];
                    Object.keys(attributes_1).forEach((function(attribute) {
                        handle.setAttribute(attribute, attributes_1[attribute]);
                    }));
                }
                handle.setAttribute("role", "slider");
                handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                origin.handle = handle;
                return origin;
            }
            function addConnect(base, add) {
                if (!add) return false;
                return addNodeTo(base, options.cssClasses.connect);
            }
            function addElements(connectOptions, base) {
                scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
                scope_Handles = [];
                scope_Connects = [];
                scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
                for (var i = 0; i < options.handles; i++) {
                    scope_Handles.push(addOrigin(base, i));
                    scope_HandleNumbers[i] = i;
                    scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
                }
            }
            function addSlider(addTarget) {
                addClass(addTarget, options.cssClasses.target);
                if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                var textDirection = getComputedStyle(addTarget).direction;
                if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                return addNodeTo(addTarget, options.cssClasses.base);
            }
            function addTooltip(handle, handleNumber) {
                if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
            }
            function isSliderDisabled() {
                return scope_Target.hasAttribute("disabled");
            }
            function isHandleDisabled(handleNumber) {
                var handleOrigin = scope_Handles[handleNumber];
                return handleOrigin.hasAttribute("disabled");
            }
            function disable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].setAttribute("disabled", "");
                    scope_Handles[handleNumber].handle.removeAttribute("tabindex");
                } else {
                    scope_Target.setAttribute("disabled", "");
                    scope_Handles.forEach((function(handle) {
                        handle.handle.removeAttribute("tabindex");
                    }));
                }
            }
            function enable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].removeAttribute("disabled");
                    scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
                } else {
                    scope_Target.removeAttribute("disabled");
                    scope_Handles.forEach((function(handle) {
                        handle.removeAttribute("disabled");
                        handle.handle.setAttribute("tabindex", "0");
                    }));
                }
            }
            function removeTooltips() {
                if (scope_Tooltips) {
                    removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                    scope_Tooltips.forEach((function(tooltip) {
                        if (tooltip) removeElement(tooltip);
                    }));
                    scope_Tooltips = null;
                }
            }
            function tooltips() {
                removeTooltips();
                scope_Tooltips = scope_Handles.map(addTooltip);
                bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                    if (!scope_Tooltips || !options.tooltips) return;
                    if (scope_Tooltips[handleNumber] === false) return;
                    var formattedValue = values[handleNumber];
                    if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                    scope_Tooltips[handleNumber].innerHTML = formattedValue;
                }));
            }
            function aria() {
                removeEvent("update" + INTERNAL_EVENT_NS.aria);
                bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                    scope_HandleNumbers.forEach((function(index) {
                        var handle = scope_Handles[index];
                        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                        var now = positions[index];
                        var text = String(options.ariaFormat.to(unencoded[index]));
                        min = scope_Spectrum.fromStepping(min).toFixed(1);
                        max = scope_Spectrum.fromStepping(max).toFixed(1);
                        now = scope_Spectrum.fromStepping(now).toFixed(1);
                        handle.children[0].setAttribute("aria-valuemin", min);
                        handle.children[0].setAttribute("aria-valuemax", max);
                        handle.children[0].setAttribute("aria-valuenow", now);
                        handle.children[0].setAttribute("aria-valuetext", text);
                    }));
                }));
            }
            function getGroup(pips) {
                if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
                if (pips.mode === PipsMode.Count) {
                    if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                    var interval = pips.values - 1;
                    var spread = 100 / interval;
                    var values = [];
                    while (interval--) values[interval] = interval * spread;
                    values.push(100);
                    return mapToRange(values, pips.stepped);
                }
                if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                if (pips.mode === PipsMode.Values) {
                    if (pips.stepped) return pips.values.map((function(value) {
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    }));
                    return pips.values;
                }
                return [];
            }
            function mapToRange(values, stepped) {
                return values.map((function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                }));
            }
            function generateSpread(pips) {
                function safeIncrement(value, increment) {
                    return Number((value + increment).toFixed(7));
                }
                var group = getGroup(pips);
                var indexes = {};
                var firstInRange = scope_Spectrum.xVal[0];
                var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                var ignoreFirst = false;
                var ignoreLast = false;
                var prevPct = 0;
                group = unique(group.slice().sort((function(a, b) {
                    return a - b;
                })));
                if (group[0] !== firstInRange) {
                    group.unshift(firstInRange);
                    ignoreFirst = true;
                }
                if (group[group.length - 1] !== lastInRange) {
                    group.push(lastInRange);
                    ignoreLast = true;
                }
                group.forEach((function(current, index) {
                    var step;
                    var i;
                    var q;
                    var low = current;
                    var high = group[index + 1];
                    var newPct;
                    var pctDifference;
                    var pctPos;
                    var type;
                    var steps;
                    var realSteps;
                    var stepSize;
                    var isSteps = pips.mode === PipsMode.Steps;
                    if (isSteps) step = scope_Spectrum.xNumSteps[index];
                    if (!step) step = high - low;
                    if (high === void 0) high = low;
                    step = Math.max(step, 1e-7);
                    for (i = low; i <= high; i = safeIncrement(i, step)) {
                        newPct = scope_Spectrum.toStepping(i);
                        pctDifference = newPct - prevPct;
                        steps = pctDifference / (pips.density || 1);
                        realSteps = Math.round(steps);
                        stepSize = pctDifference / realSteps;
                        for (q = 1; q <= realSteps; q += 1) {
                            pctPos = prevPct + q * stepSize;
                            indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                        }
                        type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                        if (!index && ignoreFirst && i !== high) type = 0;
                        if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                        prevPct = newPct;
                    }
                }));
                return indexes;
            }
            function addMarking(spread, filterFunc, formatter) {
                var _a, _b;
                var element = scope_Document.createElement("div");
                var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
                _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
                _a);
                var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
                _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
                _b);
                var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                addClass(element, options.cssClasses.pips);
                addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                function getClasses(type, source) {
                    var a = source === options.cssClasses.value;
                    var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                    var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                    return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                }
                function addSpread(offset, value, type) {
                    type = filterFunc ? filterFunc(value, type) : type;
                    if (type === PipsType.None) return;
                    var node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.marker);
                    node.style[options.style] = offset + "%";
                    if (type > PipsType.NoValue) {
                        node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.value);
                        node.setAttribute("data-value", String(value));
                        node.style[options.style] = offset + "%";
                        node.innerHTML = String(formatter.to(value));
                    }
                }
                Object.keys(spread).forEach((function(offset) {
                    addSpread(offset, spread[offset][0], spread[offset][1]);
                }));
                return element;
            }
            function removePips() {
                if (scope_Pips) {
                    removeElement(scope_Pips);
                    scope_Pips = null;
                }
            }
            function pips(pips) {
                removePips();
                var spread = generateSpread(pips);
                var filter = pips.filter;
                var format = pips.format || {
                    to: function(value) {
                        return String(Math.round(value));
                    }
                };
                scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                return scope_Pips;
            }
            function baseSize() {
                var rect = scope_Base.getBoundingClientRect();
                var alt = "offset" + [ "Width", "Height" ][options.ort];
                return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
            }
            function attachEvent(events, element, callback, data) {
                var method = function(event) {
                    var e = fixEvent(event, data.pageOffset, data.target || element);
                    if (!e) return false;
                    if (isSliderDisabled() && !data.doNotReject) return false;
                    if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                    if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                    if (data.hover && e.buttons) return false;
                    if (!supportsPassive) e.preventDefault();
                    e.calcPoint = e.points[options.ort];
                    callback(e, data);
                    return;
                };
                var methods = [];
                events.split(" ").forEach((function(eventName) {
                    element.addEventListener(eventName, method, supportsPassive ? {
                        passive: true
                    } : false);
                    methods.push([ eventName, method ]);
                }));
                return methods;
            }
            function fixEvent(e, pageOffset, eventTarget) {
                var touch = e.type.indexOf("touch") === 0;
                var mouse = e.type.indexOf("mouse") === 0;
                var pointer = e.type.indexOf("pointer") === 0;
                var x = 0;
                var y = 0;
                if (e.type.indexOf("MSPointer") === 0) pointer = true;
                if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
                if (touch) {
                    var isTouchOnTarget = function(checkTouch) {
                        var target = checkTouch.target;
                        return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                    };
                    if (e.type === "touchstart") {
                        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                        if (targetTouches.length > 1) return false;
                        x = targetTouches[0].pageX;
                        y = targetTouches[0].pageY;
                    } else {
                        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                        if (!targetTouch) return false;
                        x = targetTouch.pageX;
                        y = targetTouch.pageY;
                    }
                }
                pageOffset = pageOffset || getPageOffset(scope_Document);
                if (mouse || pointer) {
                    x = e.clientX + pageOffset.x;
                    y = e.clientY + pageOffset.y;
                }
                e.pageOffset = pageOffset;
                e.points = [ x, y ];
                e.cursor = mouse || pointer;
                return e;
            }
            function calcPointToPercentage(calcPoint) {
                var location = calcPoint - offset(scope_Base, options.ort);
                var proposal = location * 100 / baseSize();
                proposal = limit(proposal);
                return options.dir ? 100 - proposal : proposal;
            }
            function getClosestHandle(clickedPosition) {
                var smallestDifference = 100;
                var handleNumber = false;
                scope_Handles.forEach((function(handle, index) {
                    if (isHandleDisabled(index)) return;
                    var handlePosition = scope_Locations[index];
                    var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                    var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                    var isCloser = differenceWithThisHandle < smallestDifference;
                    var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                    if (isCloser || isCloserAfter || clickAtEdge) {
                        handleNumber = index;
                        smallestDifference = differenceWithThisHandle;
                    }
                }));
                return handleNumber;
            }
            function documentLeave(event, data) {
                if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
            }
            function eventMove(event, data) {
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
                var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                var proposal = movement * 100 / data.baseSize;
                moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
            }
            function eventEnd(event, data) {
                if (data.handle) {
                    removeClass(data.handle, options.cssClasses.active);
                    scope_ActiveHandlesCount -= 1;
                }
                data.listeners.forEach((function(c) {
                    scope_DocumentElement.removeEventListener(c[0], c[1]);
                }));
                if (scope_ActiveHandlesCount === 0) {
                    removeClass(scope_Target, options.cssClasses.drag);
                    setZindex();
                    if (event.cursor) {
                        scope_Body.style.cursor = "";
                        scope_Body.removeEventListener("selectstart", preventDefault);
                    }
                }
                if (options.events.smoothSteps) {
                    data.handleNumbers.forEach((function(handleNumber) {
                        setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                    }));
                    data.handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                    }));
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    fireEvent("end", handleNumber);
                }));
            }
            function eventStart(event, data) {
                if (data.handleNumbers.some(isHandleDisabled)) return;
                var handle;
                if (data.handleNumbers.length === 1) {
                    var handleOrigin = scope_Handles[data.handleNumbers[0]];
                    handle = handleOrigin.children[0];
                    scope_ActiveHandlesCount += 1;
                    addClass(handle, options.cssClasses.active);
                }
                event.stopPropagation();
                var listeners = [];
                var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                    target: event.target,
                    handle,
                    connect: data.connect,
                    listeners,
                    startCalcPoint: event.calcPoint,
                    baseSize: baseSize(),
                    pageOffset: event.pageOffset,
                    handleNumbers: data.handleNumbers,
                    buttonsProperty: event.buttons,
                    locations: scope_Locations.slice()
                });
                var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                if (event.cursor) {
                    scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                    if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                    scope_Body.addEventListener("selectstart", preventDefault, false);
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("start", handleNumber);
                }));
            }
            function eventTap(event) {
                event.stopPropagation();
                var proposal = calcPointToPercentage(event.calcPoint);
                var handleNumber = getClosestHandle(proposal);
                if (handleNumber === false) return;
                if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                setHandle(handleNumber, proposal, true, true);
                setZindex();
                fireEvent("slide", handleNumber, true);
                fireEvent("update", handleNumber, true);
                if (!options.events.snap) {
                    fireEvent("change", handleNumber, true);
                    fireEvent("set", handleNumber, true);
                } else eventStart(event, {
                    handleNumbers: [ handleNumber ]
                });
            }
            function eventHover(event) {
                var proposal = calcPointToPercentage(event.calcPoint);
                var to = scope_Spectrum.getStep(proposal);
                var value = scope_Spectrum.fromStepping(to);
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, value);
                    }));
                }));
            }
            function eventKeydown(event, handleNumber) {
                if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                var horizontalKeys = [ "Left", "Right" ];
                var verticalKeys = [ "Down", "Up" ];
                var largeStepKeys = [ "PageDown", "PageUp" ];
                var edgeKeys = [ "Home", "End" ];
                if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                    verticalKeys.reverse();
                    largeStepKeys.reverse();
                }
                var key = event.key.replace("Arrow", "");
                var isLargeDown = key === largeStepKeys[0];
                var isLargeUp = key === largeStepKeys[1];
                var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                var isMin = key === edgeKeys[0];
                var isMax = key === edgeKeys[1];
                if (!isDown && !isUp && !isMin && !isMax) return true;
                event.preventDefault();
                var to;
                if (isUp || isDown) {
                    var direction = isDown ? 0 : 1;
                    var steps = getNextStepsForHandle(handleNumber);
                    var step = steps[direction];
                    if (step === null) return false;
                    if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                    if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                    step = Math.max(step, 1e-7);
                    step *= isDown ? -1 : 1;
                    to = scope_Values[handleNumber] + step;
                } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                fireEvent("slide", handleNumber);
                fireEvent("update", handleNumber);
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                return false;
            }
            function bindSliderEvents(behaviour) {
                if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [ index ]
                    });
                }));
                if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
                if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [ connect ];
                    var handlesToDrag = [ handleBefore, handleAfter ];
                    var handleNumbersToDrag = [ index - 1, index ];
                    addClass(connect, options.cssClasses.draggable);
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach((function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect
                        });
                    }));
                }));
            }
            function bindEvent(namespacedEvent, callback) {
                scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                scope_Events[namespacedEvent].push(callback);
                if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                    fireEvent("update", index);
                }));
            }
            function isInternalNamespace(namespace) {
                return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
            }
            function removeEvent(namespacedEvent) {
                var event = namespacedEvent && namespacedEvent.split(".")[0];
                var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                Object.keys(scope_Events).forEach((function(bind) {
                    var tEvent = bind.split(".")[0];
                    var tNamespace = bind.substring(tEvent.length);
                    if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                }));
            }
            function fireEvent(eventName, handleNumber, tap) {
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    var eventType = targetEvent.split(".")[0];
                    if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                    }));
                }));
            }
            function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                var distance;
                if (scope_Handles.length > 1 && !options.events.unconstrained) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                        to = Math.max(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                        to = Math.min(to, distance);
                    }
                }
                if (scope_Handles.length > 1 && options.limit) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                        to = Math.min(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                        to = Math.max(to, distance);
                    }
                }
                if (options.padding) {
                    if (handleNumber === 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                        to = Math.max(to, distance);
                    }
                    if (handleNumber === scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                        to = Math.min(to, distance);
                    }
                }
                if (!smoothSteps) to = scope_Spectrum.getStep(to);
                to = limit(to);
                if (to === reference[handleNumber] && !getValue) return false;
                return to;
            }
            function inRuleOrder(v, a) {
                var o = options.ort;
                return (o ? a : v) + ", " + (o ? v : a);
            }
            function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                var proposals = locations.slice();
                var firstHandle = handleNumbers[0];
                var smoothSteps = options.events.smoothSteps;
                var b = [ !upward, upward ];
                var f = [ upward, !upward ];
                handleNumbers = handleNumbers.slice();
                if (upward) handleNumbers.reverse();
                if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    if (to === false) proposal = 0; else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                })); else b = f = [ true ];
                var state = false;
                handleNumbers.forEach((function(handleNumber, o) {
                    state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                }));
                if (state) {
                    handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                        fireEvent("slide", handleNumber);
                    }));
                    if (connect != void 0) fireEvent("drag", firstHandle);
                }
            }
            function transformDirection(a, b) {
                return options.dir ? 100 - a - b : a;
            }
            function updateHandlePosition(handleNumber, to) {
                scope_Locations[handleNumber] = to;
                scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                var translation = transformDirection(to, 0) - scope_DirOffset;
                var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                if (options.events.invertConnects && scope_Locations.length > 1) {
                    var handlesAreInOrder = scope_Locations.every((function(position, index, locations) {
                        return index === 0 || position >= locations[index - 1];
                    }));
                    if (scope_ConnectsInverted !== !handlesAreInOrder) {
                        invertConnects();
                        return;
                    }
                }
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
                if (scope_ConnectsInverted) {
                    updateConnect(handleNumber - 1);
                    updateConnect(handleNumber + 2);
                }
            }
            function setZindex() {
                scope_HandleNumbers.forEach((function(handleNumber) {
                    var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                    var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                    scope_Handles[handleNumber].style.zIndex = String(zIndex);
                }));
            }
            function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                if (to === false) return false;
                updateHandlePosition(handleNumber, to);
                return true;
            }
            function updateConnect(index) {
                if (!scope_Connects[index]) return;
                var locations = scope_Locations.slice();
                if (scope_ConnectsInverted) locations.sort((function(a, b) {
                    return a - b;
                }));
                var l = 0;
                var h = 100;
                if (index !== 0) l = locations[index - 1];
                if (index !== scope_Connects.length - 1) h = locations[index];
                var connectWidth = h - l;
                var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
            }
            function resolveToValue(to, handleNumber) {
                if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
                if (typeof to === "number") to = String(to);
                to = options.format.from(to);
                if (to !== false) to = scope_Spectrum.toStepping(to);
                if (to === false || isNaN(to)) return scope_Locations[handleNumber];
                return to;
            }
            function valueSet(input, fireSetEvent, exactInput) {
                var values = asArray(input);
                var isInit = scope_Locations[0] === void 0;
                fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
                if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                }));
                var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                if (isInit && scope_Spectrum.hasNoSize()) {
                    exactInput = true;
                    scope_Locations[0] = 0;
                    if (scope_HandleNumbers.length > 1) {
                        var space_1 = 100 / (scope_HandleNumbers.length - 1);
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            scope_Locations[handleNumber] = handleNumber * space_1;
                        }));
                    }
                }
                for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                }));
                setZindex();
                scope_HandleNumbers.forEach((function(handleNumber) {
                    fireEvent("update", handleNumber);
                    if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
                }));
            }
            function valueReset(fireSetEvent) {
                valueSet(options.start, fireSetEvent);
            }
            function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                handleNumber = Number(handleNumber);
                if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                fireEvent("update", handleNumber);
                if (fireSetEvent) fireEvent("set", handleNumber);
            }
            function valueGet(unencoded) {
                if (unencoded === void 0) unencoded = false;
                if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                var values = scope_Values.map(options.format.to);
                if (values.length === 1) return values[0];
                return values;
            }
            function destroy() {
                removeEvent(INTERNAL_EVENT_NS.aria);
                removeEvent(INTERNAL_EVENT_NS.tooltips);
                Object.keys(options.cssClasses).forEach((function(key) {
                    removeClass(scope_Target, options.cssClasses[key]);
                }));
                while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                delete scope_Target.noUiSlider;
            }
            function getNextStepsForHandle(handleNumber) {
                var location = scope_Locations[handleNumber];
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[handleNumber];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;
                if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                if (location === 100) increment = null; else if (location === 0) decrement = null;
                var stepDecimals = scope_Spectrum.countStepDecimals();
                if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
                if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
                return [ decrement, increment ];
            }
            function getNextSteps() {
                return scope_HandleNumbers.map(getNextStepsForHandle);
            }
            function updateOptions(optionsToUpdate, fireSetEvent) {
                var v = valueGet();
                var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips", "connect" ];
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
                }));
                var newOptions = testOptions(originalOptions);
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
                }));
                scope_Spectrum = newOptions.spectrum;
                options.margin = newOptions.margin;
                options.limit = newOptions.limit;
                options.padding = newOptions.padding;
                if (options.pips) pips(options.pips); else removePips();
                if (options.tooltips) tooltips(); else removeTooltips();
                scope_Locations = [];
                valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
                if (optionsToUpdate.connect) updateConnectOption();
            }
            function updateConnectOption() {
                while (scope_ConnectBase.firstChild) scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
                for (var i = 0; i <= options.handles; i++) {
                    scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
                    updateConnect(i);
                }
                bindSliderEvents({
                    drag: options.events.drag,
                    fixed: true
                });
            }
            function invertConnects() {
                scope_ConnectsInverted = !scope_ConnectsInverted;
                testConnect(options, options.connect.map((function(b) {
                    return !b;
                })));
                updateConnectOption();
            }
            function setupSlider() {
                scope_Base = addSlider(scope_Target);
                addElements(options.connect, scope_Base);
                bindSliderEvents(options.events);
                valueSet(options.start);
                if (options.pips) pips(options.pips);
                if (options.tooltips) tooltips();
                aria();
            }
            setupSlider();
            var scope_Self = {
                destroy,
                steps: getNextSteps,
                on: bindEvent,
                off: removeEvent,
                get: valueGet,
                set: valueSet,
                setHandle: valueSetHandle,
                reset: valueReset,
                disable,
                enable,
                __moveHandles: function(upward, proposal, handleNumbers) {
                    moveHandles(upward, proposal, scope_Locations, handleNumbers);
                },
                options: originalOptions,
                updateOptions,
                target: scope_Target,
                removePips,
                removeTooltips,
                getPositions: function() {
                    return scope_Locations.slice();
                },
                getTooltips: function() {
                    return scope_Tooltips;
                },
                getOrigins: function() {
                    return scope_Handles;
                },
                pips
            };
            return scope_Self;
        }
        function initialize(target, originalOptions) {
            if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
            if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
            var options = testOptions(originalOptions);
            var api = scope(target, options, originalOptions);
            target.noUiSlider = api;
            return api;
        }
        const rangeInit = () => {
            const priceSlider = document.querySelector("[data-range-slider]");
            if (priceSlider) {
                initialize(priceSlider, {
                    start: [ 480, 800 ],
                    connect: true,
                    step: 1,
                    keyboardDefaultStep: 50,
                    tooltips: [ {
                        to: value => `$${Math.round(value)}`,
                        from: value => Number(value.replace(/[^\d]/g, ""))
                    }, {
                        to: value => `$${Math.round(value)}`,
                        from: value => Number(value.replace(/[^\d]/g, ""))
                    } ],
                    handleAttributes: [ {
                        "aria-label": "Price lower"
                    }, {
                        "aria-label": "Price is higher"
                    } ],
                    range: {
                        min: [ 10 ],
                        max: [ 1e3 ]
                    }
                });
                const priceStart = document.querySelector("[data-range-value-from]");
                const priceEnd = document.querySelector("[data-range-value-to]");
                const inputs = [ priceStart, priceEnd ];
                priceSlider.noUiSlider.on("update", (function(values, handle) {
                    inputs[handle].value = Math.round(values[handle]);
                }));
                inputs.forEach(((input, index) => {
                    input.addEventListener("change", (_ref => {
                        let {target} = _ref;
                        setPriceValue(index, target.value);
                    }));
                }));
                function setPriceValue(index, value) {
                    let arr = [ null, null ];
                    arr[index] = value;
                    priceSlider.noUiSlider.set(arr);
                }
            }
        };
        if (document.querySelector("[data-range]")) window.addEventListener("load", rangeInit);
        const addWishlistButtonClass = button => {
            if (!button.classList.contains("wishlist-active")) button.classList.add("wishlist-active");
            if (button.closest(".product-cart__wishlist")) {
                const productId = button.closest(".product-cart").dataset.productId;
                const productButton = document.querySelector(`.product[data-product-id="${productId}"] .content-product__wishlist`);
                if (productButton && !productButton.classList.contains("wishlist-active")) productButton.classList.add("wishlist-active");
            }
        };
        const saveWishlistToLocalStorage = () => {
            const favoriteProducts = document.querySelectorAll(".content-product__wishlist.wishlist-active");
            const wishlistItems = Array.from(favoriteProducts).map((product => ({
                productId: product.closest(".product").dataset.productId,
                productName: product.closest(".product").querySelector(".product__title-link").textContent.trim(),
                productImage: product.closest(".product").querySelector(".content-product__image img").getAttribute("src"),
                productPrice: {
                    price: product.closest(".product").querySelector(".product__price").getAttribute("data-price"),
                    discountPrice: product.closest(".product").querySelector(".product__price").getAttribute("data-discount-price") || null
                },
                productLink: product.closest(".product").querySelector(".product__title").href
            })));
            const wishlisCount = document.querySelector(".main-header__button--wishlist span");
            wishlisCount.textContent = wishlistItems.length;
            setItemToLocalStorage("wishlist", wishlistItems);
        };
        const wishListAction = e => {
            const {target} = e;
            if (target.closest(".content-product__wishlist") || target.closest(".product-cart__wishlist")) {
                const product = target.closest(".product") || target.closest(".product-cart");
                const wishlistButton = product.querySelector(".content-product__wishlist") || product.querySelector(".product-cart__wishlist");
                addWishlistButtonClass(wishlistButton);
                saveWishlistToLocalStorage();
            }
        };
        const loadWishlistFromLocalStorage = () => {
            const wishlistData = getItemFromLocalStorage("wishlist") || [];
            const wishlisCount = document.querySelector(".main-header__button--wishlist span");
            if (wishlisCount) wishlisCount.textContent = wishlistData.length;
            if (wishlistData.length === 0) return;
            wishlistData.forEach((product => {
                const productItem = document.querySelector(`.product[data-product-id="${product.productId}"]`);
                const productCart = document.querySelector(`.product-cart[data-product-id="${product.productId}"]`);
                if (!productItem && !productCart) return;
                const wishlistButton = productItem?.querySelector(".content-product__wishlist");
                const wishlistButtonCart = productCart?.querySelector(".product-cart__wishlist");
                wishlistButton?.classList.add("wishlist-active");
                wishlistButtonCart?.classList.add("wishlist-active");
            }));
        };
        window.addEventListener("load", (() => loadWishlistFromLocalStorage()));
        document.addEventListener("click", wishListAction);
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            Object.keys(src).filter((key => noExtend.indexOf(key) < 0)).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            const window = ssr_window_esm_getWindow();
            const children = [ ...element.children ];
            if (window.HTMLSlotElement && element instanceof HTMLSlotElement) children.push(...element.assignedElements());
            if (!selector) return children;
            return children.filter((el => el.matches(selector)));
        }
        function elementIsChildOfSlot(el, slot) {
            const elementsQueue = [ slot ];
            while (elementsQueue.length > 0) {
                const elementToCheck = elementsQueue.shift();
                if (el === elementToCheck) return true;
                elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
            }
        }
        function elementIsChildOf(el, parent) {
            const window = ssr_window_esm_getWindow();
            let isChild = parent.contains(el);
            if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
                const children = [ ...parent.assignedElements() ];
                isChild = children.includes(el);
                if (!isChild) isChild = elementIsChildOfSlot(el, parent);
            }
            return isChild;
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
                if (allSlidesSize + offsetSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        const toggleSlideClasses$1 = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                }
                toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
                toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        const toggleSlideClasses = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.find((slideEl => slideEl.column === activeIndex));
                nextSlide = slides.find((slideEl => slideEl.column === activeIndex + 1));
                prevSlide = slides.find((slideEl => slideEl.column === activeIndex - 1));
            } else activeSlide = slides[activeIndex];
            if (activeSlide) if (!gridEnabled) {
                nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
            }
            slides.forEach((slideEl => {
                toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
                toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
                toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
            }));
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.find((slideEl => slideEl.column === activeIndex));
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        swiper.animating = false;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            const isInitialVirtual = isVirtual && initial;
            if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            const browser = getBrowser();
            const isSafari = browser.isSafari;
            if (isVirtual && !initial && isSafari && swiper.isElement) swiper.virtual.update(false, false, slideIndex);
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)).column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)).column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            const isFreeMode = params.freeMode && params.freeMode.enabled;
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex, initial) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next",
                initial
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, initial, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides, initialSlide} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
            let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.find((el => el.classList.contains(params.slideActiveClass)))); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                if (isInitialOverflow) slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
                if (appendSlidesIndexes.includes(activeSlideIndex)) appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
                if (prependSlidesIndexes.includes(activeSlideIndex)) prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].find((t => t.identifier === data.touchId));
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) return; else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) return;
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== "mouse") document.activeElement.blur();
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true,
                        detail: {
                            bySwiperTouchMove: true
                        }
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].find((t => t.identifier === data.touchId));
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!el || typeof el === "string") return;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const document = ssr_window_esm_getDocument();
            const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
            const breakpointContainer = [ "window", "container" ].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
            const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasGrabCursor = swiper.params.grabCursor;
            const isGrabCursor = breakpointParams.grabCursor;
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            if (!el || typeof el === "string") return;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)));
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate(void 0, true);
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    if (el && typeof el !== "string") el.removeAttribute("style");
                    if (wrapperEl) wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
                if (swiper.isElement && !targetIsButton) {
                    const path = e.path || e.composedPath && e.composedPath();
                    if (path) targetIsButton = path.find((pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl)));
                }
                if (swiper.params.navigation.hideOnClick && !targetIsButton) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function getMoveDirection(prevIndex, nextIndex, length) {
                prevIndex %= length;
                nextIndex %= length;
                if (nextIndex === prevIndex + 1) return "next"; else if (nextIndex === prevIndex - 1) return "previous";
                return;
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
                    if (moveDirection === "next") swiper.slideNext(); else if (moveDirection === "previous") swiper.slidePrev(); else swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.find((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = utils_makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit, params} = _ref;
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime();
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            let pausedByPointerEnter;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) return;
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.find((slideEl => slideEl.classList.contains("swiper-slide-active"))); else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                autoplayStartTime = (new Date).getTime();
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pausedByPointerEnter = true;
                if (swiper.animating || swiper.autoplay.paused) return;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                pausedByPointerEnter = false;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                if (swiper.el && typeof swiper.el !== "string") {
                    swiper.el.removeEventListener("pointerenter", onPointerEnter);
                    swiper.el.removeEventListener("pointerleave", onPointerLeave);
                }
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("_freeModeStaticRelease", (() => {
                if (pausedByTouch || pausedByInteraction) resume();
            }));
            on("_freeModeNoMomentumRelease", (() => {
                if (!swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        //! Стилі Swiper
        const initSliders = () => {
            const heroSlider = document.querySelector("[data-hero-slider]");
            const arrivalsSlider = document.querySelector("[data-slider-arrivals]");
            if (heroSlider) {
                const speedSlider = 800;
                document.body.style.setProperty("--hero-slider-speed", `${speedSlider}ms`);
                new Swiper(heroSlider, {
                    modules: [ Navigation, Pagination, Autoplay ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: false,
                    speed: 800,
                    autoplay: {
                        delay: 3e3,
                        disableOnInteraction: true
                    },
                    pagination: {
                        el: ".slider-hero__pagination",
                        clickable: true,
                        renderBullet: (index, className) => `<button class=${className} aria-label="Slide number ${index + 1}" type="button">${index <= 9 ? "0" + (index + 1) : index + 1}</button>`
                    },
                    navigation: {
                        prevEl: ".slider-hero__button-prev",
                        nextEl: ".slider-hero__button-next"
                    },
                    on: {}
                });
            }
            if (arrivalsSlider) {
                const speedSlider = 1e3;
                document.body.style.setProperty("--arrivals-slider-speed", `${speedSlider}ms`);
                new Swiper(arrivalsSlider, {
                    modules: [ Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    autoHeight: false,
                    speed: speedSlider,
                    pagination: {
                        el: ".slider-arrivals__pagination",
                        dynamicBullets: true,
                        clickable: true
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 2.5
                        },
                        768: {
                            slidesPerView: 3.5
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                        1496: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        1920: {
                            slidesPerView: 6,
                            spaceBetween: 30
                        }
                    },
                    on: {}
                });
            }
        };
        const blockSliderInit = blockSlider => {
            if (blockSlider) {
                const mainSlider = blockSlider.querySelector(".block-slider__content.swiper");
                const prevSlideButton = blockSlider.querySelector(".block-slider__button-prev");
                const nextSlideButton = blockSlider.querySelector(".block-slider__button-next");
                if (mainSlider) {
                    new Swiper(mainSlider, {
                        modules: [ Navigation ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        autoHeight: false,
                        speed: 800,
                        navigation: {
                            prevEl: prevSlideButton,
                            nextEl: nextSlideButton
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {}
                    });
                    initProductSlider(blockSlider);
                }
            }
        };
        const initProductSlider = function() {
            let blockSlider = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            const productSliders = blockSlider ? blockSlider.querySelectorAll(".content-product__images.swiper") : document.querySelectorAll(".content-product__images.swiper");
            if (productSliders.length > 0) productSliders.forEach((productSlider => {
                new Swiper(productSlider, {
                    modules: [ Navigation ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: false,
                    speed: 800,
                    allowTouchMove: false,
                    navigation: {
                        prevEl: ".images-content-product__button-prev",
                        nextEl: ".images-content-product__button-next"
                    },
                    on: {}
                });
            }));
        };
        window.addEventListener("load", (() => {
            initSliders();
        }));
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.objects = [];
                this.daClassname = "dynamic-adapt";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const object = {};
                    object.element = node;
                    object.parent = node.parentNode;
                    object.destination = document.querySelector(`${dataArray[0].trim()}`);
                    object.breakpoint = dataArray[1] ? dataArray[1].trim() : "767.98";
                    object.place = dataArray[2] ? dataArray[2].trim() : "last";
                    object.index = this.indexInParent(object.parent, object.element);
                    this.objects.push(object);
                }));
                this.arraySort(this.objects);
                this.mediaQueries = this.objects.map((_ref => {
                    let {breakpoint} = _ref;
                    return `(${this.type}-width: ${breakpoint / 16}em),${breakpoint}`;
                })).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const objectsFilter = this.objects.filter((_ref2 => {
                        let {breakpoint} = _ref2;
                        return breakpoint === mediaBreakpoint;
                    }));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, objectsFilter);
                    }));
                    this.mediaHandler(matchMedia, objectsFilter);
                }));
            }
            mediaHandler(matchMedia, objects) {
                if (matchMedia.matches) objects.forEach((object => {
                    this.moveTo(object.place, object.element, object.destination);
                })); else objects.forEach((_ref3 => {
                    let {parent, element, index} = _ref3;
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        class FormsValidation {
            constructor(options) {
                let defaultConfig = {
                    viewpass: false,
                    autoHeight: false,
                    logging: true,
                    errorMesseges: {
                        valueMissing: "Будь ласка, заповніть це поле.",
                        validateName: {
                            enterName: `Будь ласка, введіть Ваше ім’я.`,
                            containsNumbers: `Ім’я не може містити цифри.`,
                            containsOnlyAlphabet: `Ім’я може містити лише літери українського алфавіту та починатися з великої літери.`
                        },
                        validateEmail: {
                            enterEmail: `Будь ласка, введіть Ваш email`,
                            invalidEmail: {
                                incorrectEmail: `Ви ввели некоректну єлектронну адресу`,
                                missingAtSymbol: value => `Електронна адреса має містити символ "@". Єлектронна адреса "${value}" не містить символ "@"`
                            }
                        },
                        validatePhone: {
                            enterPhone: "Будь ласка, введіть Ваш номер телефону.",
                            invalidPhone: {
                                incorrectPhone: "Ви ввели некоректний номер."
                            }
                        },
                        validateSelect: `Будь ласка, виберіть варіант зі списку.`
                    },
                    reqexp: {
                        name: /^[А-ЩЬЮЯЄІЇҐ][а-щьюяєіїґ']{1,29}(-[А-ЩЬЮЯЄІЇҐ][а-щьюяєіїґ']{1,29})?$/,
                        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/,
                        phone: /^\+38\(\d{3}\)[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/
                    },
                    on: {
                        formSend: () => {}
                    }
                };
                this.config = {
                    ...defaultConfig,
                    ...options,
                    errorMesseges: {
                        ...defaultConfig.errorMesseges,
                        ...options?.errorMesseges
                    },
                    reqexp: {
                        ...defaultConfig.reqexp,
                        ...options?.reqexp
                    },
                    on: {
                        ...defaultConfig.on,
                        ...options?.on
                    }
                };
                this.formAttributes = {
                    required: "data-required",
                    validate: "data-validate",
                    noValidate: "data-no-validate",
                    noFocusClasses: "data-no-focus-classes",
                    modalMessage: "data-modal-message",
                    gotoError: "data-goto-error",
                    autoHeight: "data-autoheight",
                    autoHeightMin: "data-autoheight-min",
                    autoHeightMax: "data-autoheight-max",
                    error: "data-error",
                    ajax: "data-ajax",
                    dev: "data-dev"
                };
                this.formClasses = {
                    formFocus: "form-focus",
                    formSuccess: "form-success",
                    formError: "form-error",
                    formSending: "form-sending",
                    viewPass: "viewpass",
                    viewPassActive: "viewpass-active"
                };
                this.eventsForm();
                if (this.config.autoHeight) this.autoHeight();
            }
            eventsForm() {
                document.addEventListener("focusin", (_ref => {
                    let {target} = _ref;
                    return this.focusIn(target);
                }));
                document.addEventListener("focusout", (_ref2 => {
                    let {target} = _ref2;
                    return this.focusOut(target);
                }));
                document.addEventListener("change", (_ref3 => {
                    let {target} = _ref3;
                    return this.inputChange(target);
                }));
                document.addEventListener("selectCallback", (_ref4 => {
                    let {detail} = _ref4;
                    return this.selectChange(detail);
                }));
                if (this.config.viewpass) document.addEventListener("click", (_ref5 => {
                    let {target} = _ref5;
                    return this.inputViewPass(target);
                }));
                document.addEventListener("submit", (e => this.formSubmit(e)));
            }
            formSubmit(e) {
                const formElement = e.target.closest("[data-form]");
                if (!formElement) return;
                this.formSubmitAction(formElement, e);
            }
            async formSubmitAction(form, e) {
                e.preventDefault();
                const error = !form.hasAttribute(this.formAttributes.noValidate) ? this.getErrorField(form) : 0;
                if (error !== 0) {
                    if (form.querySelector(this.formClasses.formError) && form.hasAttribute(this.formAttributes.gotoError)) {
                        const formGoToErrorClass = form.dataset.gotoError || ".form-error";
                        gotoBlock(formGoToErrorClass, {
                            noHeader: true,
                            speed: 1e3
                        });
                    }
                    return;
                }
                const ajax = form.hasAttribute(this.formAttributes.ajax);
                const dev = form.hasAttribute(this.formAttributes.dev);
                try {
                    if (ajax) {
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add(this.formClasses.formSending);
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formMethod !== "GET" ? formData : null
                        });
                        if (!response.ok) {
                            const errorMassage = "Щось пішло не так!";
                            throw new Error(errorMassage);
                        }
                        const responseData = await response.json();
                        this.formSending(form, responseData);
                    }
                    if (dev) this.formSending(form);
                } catch (error) {
                    this.#formLogging(error);
                } finally {
                    form.classList.remove(this.formClasses.formSending);
                }
            }
            formSending(form) {
                arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (objectModules.modal) {
                        const {modalMessage} = form.dataset;
                        if (modalMessage) objectModules.modal.open(modalMessage);
                    }
                }), 0);
                this.config.on.formSend(form);
                this.formClean(form);
                this.#formLogging(`Form send!`);
            }
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    const inputs = form.querySelectorAll("input,textarea");
                    const checkboxes = form.querySelectorAll("input[type=checkbox]");
                    const radioButtons = form.querySelectorAll("input[type=radio]");
                    if (inputs.length > 0) inputs.forEach((input => {
                        this.removeFieldError(input);
                        this.removeFieldSuccess(input);
                    }));
                    if (checkboxes.length > 0) checkboxes.forEach((checkbox => checkbox.checked = false));
                    if (radioButtons.length > 0) radioButtons.forEach((radio => radio.checked = false));
                    if (objectModules.select) {
                        const selects = form.querySelectorAll("div.select");
                        if (selects.length > 0) selects.forEach((selectItem => {
                            const originalSelect = selectItem.querySelector("select");
                            const {options, multiple} = originalSelect;
                            this.removeSelectFieldError(selectItem, originalSelect);
                            this.removeSelectFieldSuccess(selectItem, originalSelect);
                            Array.from(options).forEach(((option, index) => {
                                if (!multiple) index === 0 ? option.setAttribute("selected", "") : option.removeAttribute("selected"); else option.removeAttribute("selected");
                            }));
                            objectModules.select.selectBuild(originalSelect);
                        }));
                    }
                }), 0);
            }
            inputViewPass(target) {
                if (target.closest(`[class*="__${this.formClasses.viewPass}"]`)) {
                    const viewPassButton = target.closest(`[class*="__${this.formClasses.viewPass}"]`);
                    let inputType = viewPassButton.classList.contains(this.formClasses.viewPassActive) ? "password" : "text";
                    viewPassButton.parentElement.querySelector("input").setAttribute("type", inputType);
                    viewPassButton.classList.toggle(this.formClasses.viewPassActive);
                }
            }
            autoHeight() {
                const textareas = document.querySelectorAll(`textarea[${this.formAttributes.autoHeight}]`);
                if (textareas.length > 0) textareas.forEach((textarea => {
                    const startHeight = textarea.hasAttribute(this.formAttributes.autoHeightMin) ? +textarea.dataset.autoheightMin : +textarea.offsetHeight;
                    const maxHeight = textarea.hasAttribute(this.formAttributes.autoHeightMax) ? +textarea.dataset.autoheightMax : 1 / 0;
                    this.#setTextareaHeight(textarea, Math.min(startHeight, maxHeight));
                    textarea.addEventListener("input", (() => {
                        if (textarea.scrollHeight > startHeight) {
                            textarea.style.height = `auto`;
                            this.#setTextareaHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                        }
                    }));
                }));
            }
            #setTextareaHeight(textarea, height) {
                textarea.style.height = `${height}px`;
            }
            inputChange(target) {
                const {type} = target;
                if (type === "checkbox" || type === "radio") this.validateField(target);
            }
            focusIn(target) {
                const {tagName} = target;
                if ((tagName === "INPUT" || tagName === "TEXTAREA") && target.closest("[data-form]")) {
                    if (!target.hasAttribute(this.formAttributes.noFocusClasses)) {
                        target.classList.add(this.formClasses.formFocus);
                        target.parentElement.classList.add(this.formClasses.formFocus);
                    }
                    if (target.hasAttribute(this.formAttributes.validate)) this.removeFieldError(target);
                }
            }
            focusOut(target) {
                const {tagName} = target;
                if ((tagName === "INPUT" || tagName === "TEXTAREA") && target.closest("[data-form]")) {
                    if (!target.hasAttribute(this.formAttributes.noFocusClasses)) {
                        target.classList.remove(this.formClasses.formFocus);
                        target.parentElement.classList.remove(this.formClasses.formFocus);
                    }
                    if (target.hasAttribute(this.formAttributes.validate)) this.validateField(target);
                }
            }
            selectChange(detail) {
                const {select} = detail;
                if (select) this.validateField(select);
            }
            getErrorField(form) {
                let error = 0;
                const formRequiredItems = form.querySelectorAll(`*[${this.formAttributes.required}]`);
                if (formRequiredItems.length > 0) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateField(formRequiredItem);
                }));
                return error;
            }
            validateField(formRequiredItem) {
                const {required} = formRequiredItem.dataset;
                const {type, tagName} = formRequiredItem;
                let error = 0;
                if (required === "name") {
                    if (!formRequiredItem.value.trim()) {
                        this.removeFieldSuccess(formRequiredItem);
                        this.addFieldError(formRequiredItem, this.config.errorMesseges.validateName.enterName);
                        error++;
                        return;
                    }
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.#digitsTest(formRequiredItem)) {
                        this.removeFieldSuccess(formRequiredItem);
                        this.addFieldError(formRequiredItem, this.config.errorMesseges.validateName.containsNumbers);
                        error++;
                        return;
                    }
                    if (this.#nameTest(formRequiredItem)) {
                        this.removeFieldSuccess(formRequiredItem);
                        this.addFieldError(formRequiredItem, this.config.errorMesseges.validateName.containsOnlyAlphabet);
                        error++;
                    } else {
                        this.removeFieldError(formRequiredItem);
                        this.addFieldSuccess(formRequiredItem);
                    }
                }
                if (required === "email") {
                    if (!formRequiredItem.value.trim()) {
                        this.removeFieldSuccess(formRequiredItem);
                        this.addFieldError(formRequiredItem, this.config.errorMesseges.validateEmail.enterEmail);
                        error++;
                        return;
                    }
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.#emailTest(formRequiredItem)) {
                        this.removeFieldSuccess(formRequiredItem);
                        this.addFieldError(formRequiredItem, this.config.errorMesseges.validateEmail.invalidEmail.incorrectEmail);
                        if (!formRequiredItem.value.includes("@")) this.addFieldError(formRequiredItem, this.config.errorMesseges.validateEmail.invalidEmail.missingAtSymbol(formRequiredItem.value));
                        error++;
                    } else {
                        this.removeFieldError(formRequiredItem);
                        this.addFieldSuccess(formRequiredItem);
                    }
                }
                if (required === "phone") {
                    if (!formRequiredItem.value.trim()) {
                        this.removeFieldSuccess(formRequiredItem);
                        this.addFieldError(formRequiredItem, this.config.errorMesseges.validatePhone.enterPhone);
                        error++;
                        return;
                    }
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.#phoneTest(formRequiredItem)) {
                        this.addFieldError(formRequiredItem, this.config.errorMesseges.validatePhone.invalidPhone.incorrectPhone);
                        this.removeFieldSuccess(formRequiredItem);
                        error++;
                    } else {
                        this.removeFieldError(formRequiredItem);
                        this.addFieldSuccess(formRequiredItem);
                    }
                }
                if (type === "checkbox" && formRequiredItem.closest("[data-form]")) if (!formRequiredItem.checked && formRequiredItem.hasAttribute(this.formAttributes.required)) {
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.valueMissing);
                    this.removeFieldSuccess(formRequiredItem);
                    error++;
                } else {
                    this.removeFieldError(formRequiredItem);
                    this.addFieldSuccess(formRequiredItem);
                }
                if (type === "radio" && formRequiredItem.closest("[data-form]")) {
                    const {name} = formRequiredItem;
                    const radioGroup = document.querySelectorAll(`input[name="${name}"]`);
                    const isChecked = Array.from(radioGroup).some((radio => radio.checked));
                    const parentBlock = formRequiredItem.closest("fieldset") || formRequiredItem.parentElement;
                    const formErrorItem = parentBlock.querySelector(".form__error");
                    if (formErrorItem) parentBlock.removeChild(formErrorItem);
                    if (!isChecked) {
                        if (!formErrorItem && parentBlock.hasAttribute(this.formAttributes.error)) {
                            const {error} = parentBlock.dataset;
                            parentBlock.insertAdjacentHTML("beforeend", this.getFormErrorHTML(error, this.config.errorMesseges.valueMissing));
                        }
                        radioGroup.forEach((radio => {
                            this.addFieldError(radio);
                            this.removeFieldSuccess(radio);
                        }));
                        if (!parentBlock.classList.contains(this.formClasses.formError)) parentBlock.classList.add(this.formClasses.formError);
                        error++;
                    } else {
                        radioGroup.forEach((radio => {
                            this.removeFieldError(radio);
                            this.addFieldSuccess(radio);
                        }));
                        if (parentBlock.classList.contains(this.formClasses.formError)) parentBlock.classList.remove(this.formClasses.formError);
                    }
                }
                if (objectModules.select && tagName === "SELECT" && formRequiredItem.closest("[data-form]")) {
                    const selectItem = formRequiredItem.parentElement;
                    if (formRequiredItem.multiple) {
                        const selectedOptions = Array.from(formRequiredItem.selectedOptions).filter((option => option.value));
                        if (!selectedOptions.length) {
                            this.removeSelectFieldSuccess(selectItem, formRequiredItem);
                            this.addSelectFieldError(selectItem, formRequiredItem, this.config.errorMesseges.validateSelect);
                            error++;
                        } else {
                            this.removeSelectFieldError(selectItem, formRequiredItem);
                            this.addSelectFieldSuccess(selectItem, formRequiredItem);
                        }
                    } else if (!formRequiredItem.value.trim()) {
                        this.removeSelectFieldSuccess(selectItem, formRequiredItem);
                        this.addSelectFieldError(selectItem, formRequiredItem, this.config.errorMesseges.validateSelect);
                        error++;
                    } else {
                        this.removeSelectFieldError(selectItem, formRequiredItem);
                        this.addSelectFieldSuccess(selectItem, formRequiredItem);
                    }
                }
                if (tagName !== "SELECT" && type !== "checkbox" && type !== "radio" && required === "") if (!formRequiredItem.value.trim()) {
                    this.removeFieldSuccess(formRequiredItem);
                    this.addFieldError(formRequiredItem, this.config.errorMesseges.valueMissing);
                    error++;
                } else {
                    this.removeFieldError(formRequiredItem);
                    this.addFieldSuccess(formRequiredItem);
                }
                return error;
            }
            addSelectFieldError(selectItem, originalSelect) {
                let errorMessage = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
                const parentSelectFormField = selectItem.parentElement;
                const formErrorItem = parentSelectFormField?.querySelector(".form__error");
                if (formErrorItem) parentSelectFormField.removeChild(formErrorItem);
                this.formFieldsToggleErrorClass(selectItem, parentSelectFormField, true);
                this.formFieldSetInvalidAttr(originalSelect);
                this.formFieldSetInvalidAttr(selectItem);
                if (originalSelect.hasAttribute(this.formAttributes.error)) {
                    const {error} = originalSelect.dataset;
                    parentSelectFormField.insertAdjacentHTML("beforeend", this.getFormErrorHTML(error, errorMessage));
                }
            }
            removeSelectFieldError(selectItem) {
                const parentSelectFormField = selectItem.parentElement;
                const formErrorItem = parentSelectFormField?.querySelector(".form__error");
                if (formErrorItem) parentSelectFormField.removeChild(formErrorItem);
                this.formFieldsToggleErrorClass(selectItem, parentSelectFormField);
            }
            addSelectFieldSuccess(selectItem, originalSelect) {
                const parentSelectFormField = selectItem.parentElement;
                this.formFieldsToggleSuccessClass(selectItem, parentSelectFormField, true);
                this.formFieldSetInvalidAttr(originalSelect, false);
                this.formFieldSetInvalidAttr(selectItem, false);
            }
            removeSelectFieldSuccess(selectItem) {
                const parentSelectFormField = selectItem.parentElement;
                this.formFieldsToggleSuccessClass(selectItem, parentSelectFormField);
            }
            addFieldError(formRequiredItem) {
                let errorMessage = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
                const parentFormField = formRequiredItem.parentElement;
                const formErrorItem = parentFormField.querySelector(".form__error");
                if (formErrorItem) parentFormField.removeChild(formErrorItem);
                this.formFieldsToggleErrorClass(formRequiredItem, parentFormField, true);
                this.formFieldSetInvalidAttr(formRequiredItem);
                if (formRequiredItem.hasAttribute(this.formAttributes.error)) {
                    const {error} = formRequiredItem.dataset;
                    parentFormField.insertAdjacentHTML("beforeend", this.getFormErrorHTML(error, errorMessage));
                }
            }
            removeFieldError(formRequiredItem) {
                const parentFormField = formRequiredItem.parentElement;
                const formErrorItem = parentFormField.querySelector(".form__error");
                this.formFieldsToggleErrorClass(formRequiredItem, parentFormField);
                if (formErrorItem) parentFormField.removeChild(formErrorItem);
            }
            addFieldSuccess(formRequiredItem) {
                const parentFormField = formRequiredItem.parentElement;
                this.formFieldsToggleSuccessClass(formRequiredItem, parentFormField, true);
                this.formFieldSetInvalidAttr(formRequiredItem, false);
            }
            removeFieldSuccess(formRequiredItem) {
                const parentFormField = formRequiredItem.parentElement;
                this.formFieldsToggleSuccessClass(formRequiredItem, parentFormField);
            }
            formFieldSetInvalidAttr(formRequiredItem) {
                let isInvalid = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                formRequiredItem.setAttribute("aria-invalid", `${isInvalid ? true : false}`);
            }
            formFieldsToggleSuccessClass(formRequiredItem, parentFormField) {
                let isSuccess = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                if (!isSuccess) {
                    formRequiredItem.classList.remove(this.formClasses.formSuccess);
                    parentFormField.classList.remove(this.formClasses.formSuccess);
                } else {
                    formRequiredItem.classList.add(this.formClasses.formSuccess);
                    parentFormField.classList.add(this.formClasses.formSuccess);
                }
            }
            formFieldsToggleErrorClass(formRequiredItem, parentFormField) {
                let isError = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                if (!isError) {
                    formRequiredItem.classList.remove(this.formClasses.formError);
                    parentFormField.classList.remove(this.formClasses.formError);
                } else {
                    formRequiredItem.classList.add(this.formClasses.formError);
                    parentFormField.classList.add(this.formClasses.formError);
                }
            }
            getFormErrorHTML(error, errorMassage) {
                return `<div class="form__error">${error || errorMassage}</div>`;
            }
            #nameTest(formRequiredItem) {
                return !this.config.reqexp.name.test(formRequiredItem.value);
            }
            #emailTest(formRequiredItem) {
                return !this.config.reqexp.email.test(formRequiredItem.value);
            }
            #phoneTest(formRequiredItem) {
                return !this.config.reqexp.phone.test(formRequiredItem.value);
            }
            #digitsTest(formRequiredItem) {
                return /\d/.test(formRequiredItem.value);
            }
            #formLogging(message) {
                this.config.logging ? console.log(`[Форми]: ${message}`) : null;
            }
        }
        objectModules.formsValidation = new FormsValidation({
            viewpass: true
        });
        const accountPage = document.querySelector(".account");
        const getWishlistToLocalStorage = () => {
            const wishlistData = getItemFromLocalStorage("wishlist") || [];
            if (wishlistData.length > 0) return wishlistData;
            return [];
        };
        if (accountPage) {
            const wishListTabButtonCount = document.querySelector(".menu-account__title-count");
            const wishlistItems = getWishlistToLocalStorage();
            if (wishlistItems.length > 0) wishListTabButtonCount.textContent = wishlistItems.length; else wishListTabButtonCount.textContent = "0";
            document.addEventListener("click", accountActions);
            function accountActions(e) {
                const {target} = e;
                if (!target.closest(".body-account__button")) return;
                const deleteButton = target.closest(".body-account__button");
                const parentBlock = deleteButton.closest(".body-account");
                const wishlistBlock = parentBlock.querySelector(".body-account__wishlist");
                if (wishlistBlock) {
                    const wishlistItems = wishlistBlock.children;
                    if (wishlistItems.length === 0) return;
                    const wishlisCount = document.querySelector(".main-header__button--wishlist span");
                    Array.from(wishlistItems).forEach((item => item.remove()));
                    removeItemFromLocalStorage("wishlist");
                    wishListTabButtonCount.textContent = "0";
                    if (wishlisCount) wishlisCount.textContent = "0";
                    return;
                }
            }
        }
        const products = "data/products.json";
        const newArrivalsContainer = document.querySelector("[data-slider-arrivals] .slider-arrivals__wrapper");
        const catalogContainer = document.querySelector(".content-catalog .content-catalog__body");
        const blocksSlider = document.querySelectorAll("[data-block-slider]");
        const wishlistContainer = document.querySelector(".wishlist-account");
        const productsHTML = function(product) {
            let sliderBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            let dropdown = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            const {id, link, category, images, price, sale, discount, description, sizes, colors, rating} = product;
            const ratingHTML = () => {
                if (!rating) return "";
                return `\n          <div class="content-product__star-rating star-rating" data-rating="${rating}" role="img">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n             <img src="img/icons/star.svg" width="14" height="13" alt="">\n        </div>\n     `;
            };
            const sizesHTML = () => {
                let seizesTemplateHTML = ``;
                if (sizes && sizes.length > 0) {
                    seizesTemplateHTML += `<div class="product__sizes sizes-product">`;
                    seizesTemplateHTML += sizes.map(((size, index) => `\n              <div class="sizes-product__item">\n                  <input class="sizes-product__input" type="radio" ${index === 0 ? "checked" : ""} name="size-${id}" id="size-${size}-${id}">\n                  <label class="sizes-product__label" for="size-${size}-${id}">${size}</label>\n              </div>\n          `)).join("");
                    seizesTemplateHTML += `</div>`;
                    return seizesTemplateHTML;
                } else return seizesTemplateHTML;
            };
            const colorsHTML = () => {
                let colorsTemplateHTML = ``;
                if (colors && colors.length > 0) {
                    colorsTemplateHTML += `<div class="product__colors colors-product">`;
                    colorsTemplateHTML += colors.map(((color, index) => `\n          <a class="colors-product__link ${index === 0 ? "colors-product__link--active" : ""}" href=${link}>\n           <div class="colors-product__color" data-color=${color} style="--color: ${color}"></div>\n          </a>\n        `)).join("");
                    colorsTemplateHTML += `</div>`;
                    return colorsTemplateHTML;
                } else return colorsTemplateHTML;
            };
            const imagesSliderHTML = () => images.map((image => `\n        <a class="content-product__image swiper-slide" href=${link}>\n          <img src="${image}" width="285" height="320" loading="lazy" alt="${description}">\n        </a>\n      `)).join("");
            const discountLabelHTML = () => {
                if (!sale) return "";
                return `\n        <div class="content-product__labels labels">\n        <span class="labels__item">${discount}%</span>\n        </div>\n      `;
            };
            const salePriceHTML = () => {
                if (sale) return `\n          <div class="product__price price" data-discount-price=${(price - price * discount / 100).toFixed(2)} data-price=${price.toFixed(2)}>\n          <div class="price__sale">\n            <span class="price__now">$${(price - price * discount / 100).toFixed(2)}</span>\n            <span class="price__old">$${price.toFixed(2)}</span>\n          </div>\n        </div>\n      `; else return `\n        <div class="product__price price" data-price=${price.toFixed(2)}>\n          <span>$${price.toFixed(2)}</span>\n        </div>\n      `;
            };
            const imageHTML = () => {
                if (!sliderBlock) return `\n          <a class="content-product__image" href=${link}>\n            <img src="${images[0]}" width="285" height="320" loading="lazy" alt="${description}">\n          </a>\n        `; else return `\n            <div class="content-product__images images-content-product swiper">\n              <div class="images-content-product__wrapper swiper-wrapper">\n                ${imagesSliderHTML()}\n              </div>\n              <button type="button" class="images-content-product__button-prev" aria-label="Previous slide">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#down-shevron"></use>\n                </svg>\n              </button>\n              <button type="button" class="images-content-product__button-next" aria-label="Next slide">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#down-shevron"></use>\n                </svg>\n              </button>\n          </div>\n      `;
            };
            const dropdownHTML = () => `\n            <div class="product__dropdown">\n               ${sizesHTML()}\n               ${colorsHTML()}\n            <button class="product__button button" aria-label="Add to cart" type="button">\n              <svg>\n                <use xlink:href="img/sprite/icons.svg#cart"></use>\n              </svg>\n              <span>Add to cart</span>\n            </button>\n          </div>\n    `;
            return `\n          <article data-product-id=${id} data-category=${category} class="${catalogContainer || wishlistContainer ? "" : "slider-arrivals__slide swiper-slide"} product">\n            <div class="product__content content-product">\n               ${imageHTML()}\n               ${ratingHTML()}\n              <button class="content-product__wishlist" aria-label="Add to wishlist">\n                <svg>\n                  <use xlink:href="img/sprite/icons.svg#heard"></use>\n                </svg>\n              </button>\n              ${discountLabelHTML()}\n            </div>\n            <div class="product__info">\n              <h4 class="product__title">\n                <a class="product__title-link" href=${link}>${description}</a>\n              </h4>\n            ${salePriceHTML()}\n            </div>\n            ${sliderBlock || dropdown ? dropdownHTML() : ""}\n          </article>\n  `;
        };
        const renderProducts = async products => {
            if (newArrivalsContainer) {
                const newProductsArray = products.filter((product => product.new === true));
                newArrivalsContainer.innerHTML = newProductsArray.map((product => productsHTML(product))).join("");
            }
            if (blocksSlider.length > 0) blocksSlider.forEach((blockSlider => {
                const typeSlider = blockSlider.dataset.blockSlider;
                const blockSliderContent = blockSlider.querySelector(".block-slider__content");
                const blockSliderWrapper = blockSliderContent.querySelector(".block-slider__wrapper");
                if (typeSlider === "trending") {
                    const trendingProductsArray = products.filter((product => product.trending === true));
                    blockSliderWrapper.innerHTML = trendingProductsArray.map((product => productsHTML(product, true))).join("");
                    blockSliderInit(blockSlider);
                }
                if (typeSlider === "sale") {
                    const saleProductsArray = products.filter((product => product.sale === true));
                    blockSliderWrapper.innerHTML = saleProductsArray.map((product => productsHTML(product, true))).join("");
                    blockSliderInit(blockSlider);
                }
            }));
            if (catalogContainer) {
                const catalogProductsArray = products.slice(0, 12);
                catalogContainer.innerHTML = catalogProductsArray.map((product => productsHTML(product, false, true))).join("");
            }
            if (wishlistContainer) {
                const wishlistProductsArray = getWishlistToLocalStorage();
                if (!wishlistProductsArray.length) return;
                const wishlistProductsId = wishlistProductsArray.map((item => String(item.productId)));
                const productsInWishlist = products.filter((product => product.id && wishlistProductsId.includes(String(product.id))));
                wishlistContainer.innerHTML = productsInWishlist.map((product => productsHTML(product, true, true))).join("");
                initProductSlider();
            }
            starRating();
        };
        const getProducts = async () => {
            try {
                const response = await fetch(products);
                if (!response.ok) throw new Error("Response is not OK");
                const data = await response.json();
                renderProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
                return [];
            }
        };
        if (newArrivalsContainer || blocksSlider.length > 0 || catalogContainer || wishlistContainer) getProducts();
        class Modal {
            #isOpen=false;
            #reopen=false;
            #bodyLock=false;
            #focusElements=[ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
            youTubeCode;
            hash=false;
            dataValue=false;
            selectorOpen=false;
            lastFocusElement=false;
            targetOpen={
                selector: false,
                element: false
            };
            previousOpen={
                selector: false,
                element: false
            };
            lastClosed={
                selector: false,
                element: false
            };
            constructor(options) {
                let defaultConfig = {
                    logging: true,
                    init: true,
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    setAutoplayYoutube: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: () => {},
                        afterOpen: () => {},
                        beforeClose: () => {},
                        afterClose: () => {}
                    }
                };
                this.modalClasses = {
                    modal: "modal",
                    modalWrapper: "modal__wrapper",
                    modalContent: "modal__content",
                    modalActive: "modal--show",
                    bodyActive: "modal-show"
                };
                this.modalAttributes = {
                    openButton: "data-modal",
                    closeButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtube: "data-modal-youtube",
                    youtubePlace: "data-modal-youtube-place"
                };
                this.options = {
                    ...defaultConfig,
                    ...options,
                    hashSettings: {
                        ...defaultConfig.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...defaultConfig.on,
                        ...options?.on
                    }
                };
                this.options.init ? this.initModals() : null;
            }
            initModals() {
                this.#modalLogging(`Initializing a modal window`);
                this.eventsModal();
            }
            eventsModal() {
                document.addEventListener("click", (e => {
                    const {target} = e;
                    const buttonOpen = target.closest(`[${this.modalAttributes.openButton}]`);
                    const buttonClose = target.closest(`[${this.modalAttributes.closeButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this.dataValue = buttonOpen.getAttribute(this.modalAttributes.openButton) || "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.modalAttributes.youtube) || null;
                        if (this.dataValue === "error") {
                            this.#modalLogging(`The attribute is not filled ${buttonOpen.classList}`);
                            return;
                        }
                        if (!this.#isOpen) this.lastFocusElement = buttonOpen;
                        this.targetOpen.selector = `${this.dataValue}`;
                        this.selectorOpen = true;
                        this.open();
                        return;
                    }
                    if (buttonClose || !target.closest(`.${this.modalClasses.modalContent}`) && this.#isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }));
                document.addEventListener("keydown", (e => {
                    if (this.options.closeEsc && e.key === "Escape" && this.#isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.key === "Tab" && this.#isOpen) {
                        this.#focusCatch(e);
                        return;
                    }
                }));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", (() => {
                        if (window.location.hash) this.#openToHash(); else this.close(this.targetOpen.selector);
                    }));
                    window.addEventListener("load", (() => {
                        if (window.location.hash) this.#openToHash();
                    }));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.#bodyLock = document.documentElement.classList.contains("lock") && !this.#isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this.selectorOpen = true;
                    }
                    if (this.#isOpen) {
                        this.#reopen = true;
                        this.close();
                    }
                    if (!this.selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (!this.targetOpen.element) {
                        this.#modalLogging(`Modal not found. Check the selector.`);
                        return;
                    }
                    if (this.youTubeCode) {
                        const iframe = document.createElement("iframe");
                        iframe.setAttribute("allowfullscreen", "");
                        iframe.setAttribute("allow", `${this.options.setAutoplayYoutube ? "autoplay;" : ""} encrypted-media`);
                        iframe.setAttribute("src", `https://www.youtube.com/embed/${this.youTubeCode}?rel=0&showinfo=0&autoplay=1`);
                        const youtubePlace = this.targetOpen.element.querySelector(`[${this.modalAttributes.youtubePlace}]`);
                        youtubePlace?.appendChild(iframe);
                    }
                    if (this.options.hashSettings.location) {
                        this.#getHash();
                        this.#setHash();
                    }
                    this.options.on.beforeOpen(this);
                    document.dispatchEvent(new CustomEvent("beforeModalOpen", {
                        detail: {
                            modal: this
                        }
                    }));
                    this.targetOpen.element.classList.add(this.modalClasses.modalActive);
                    document.documentElement.classList.add(this.modalClasses.bodyActive);
                    !this.#reopen ? !this.#bodyLock ? bodyLock() : null : this.#reopen = false;
                    this.targetOpen.element.setAttribute("aria-hidden", "false");
                    this.previousOpen = {
                        ...this.targetOpen
                    };
                    this.selectorOpen = false;
                    this.#isOpen = true;
                    setTimeout((() => this.#focusTrap()), 50);
                    this.options.on.afterOpen(this);
                    document.dispatchEvent(new CustomEvent("afterModalOpen", {
                        detail: {
                            modal: this
                        }
                    }));
                    this.#modalLogging(`Open modal window`);
                }
            }
            close(selectorValue) {
                if (!this.#isOpen || !bodyLockStatus) return;
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforeModalClose", {
                    detail: {
                        modal: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.modalAttributes.youtubePlace}]`)) this.targetOpen.element.querySelector(`[${this.modalAttributes.youtubePlace}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.modalClasses.modalActive);
                if (!this.#reopen) {
                    document.documentElement.classList.remove(this.modalClasses.bodyActive);
                    !this.#bodyLock ? bodyUnlock() : null;
                    this.#isOpen = false;
                }
                setTimeout((() => {
                    this.#focusTrap();
                    this.previousOpen.element.setAttribute("aria-hidden", "true");
                }), 50);
                this.#removeHash();
                if (this.selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterModalClose", {
                    detail: {
                        modal: this
                    }
                }));
                this.#modalLogging(`Close modal window`);
            }
            #getHash() {
                this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            #openToHash() {
                const classInHash = this.#getHashSelector();
                const button = document.querySelector(`[${this.modalAttributes.openButton} = "${classInHash}"]`) ? document.querySelector(`[${this.modalAttributes.openButton} = "${classInHash}"]`) : document.querySelector(`[${this.modalAttributes.openButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = button.getAttribute(this.modalAttributes.youtube) || null;
                if (button && classInHash) this.open(classInHash);
            }
            #getHashSelector() {
                if (document.querySelector(`.${window.location.hash.replace("#", "")}`)) return `.${window.location.hash.replace("#", "")}`; else if (document.querySelector(`${window.location.hash}`)) return `${window.location.hash}`;
            }
            #setHash() {
                history.pushState("", "", this.hash);
            }
            #removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            #focusCatch(e) {
                const focusArray = [ ...this.targetOpen.element.querySelectorAll(this.#focusElements) ];
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            #focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this.#focusElements);
                if (!this.lastFocusElement) this.lastFocusElement = document.querySelectorAll(this.#focusElements)[0];
                if (!this.#isOpen && this.lastFocusElement) this.lastFocusElement.focus(); else focusable[0].focus();
            }
            #modalLogging(message) {
                if (this.options.logging) FLS(`[Modal window]: ${message}`);
            }
        }
        objectModules.modal = new Modal({});
        class Select {
            #highlightedIndex=0;
            constructor(options) {
                let defaultConfig = {
                    init: true,
                    logging: true,
                    speed: 150,
                    placeholder: true,
                    showSelected: true,
                    searchSelected: false,
                    removeItemButton: true,
                    selectOptionText: "Press to select",
                    noResultsText: "No results found"
                };
                this.config = {
                    ...defaultConfig,
                    ...options
                };
                this.selectAttributes = {
                    open: "data-open",
                    show: "data-show",
                    oneSelect: "data-one-select",
                    checkbox: "data-checkbox",
                    submit: "data-submit",
                    scroll: "data-scroll",
                    hrefBlank: "data-href-blank",
                    tags: "data-tags"
                };
                this.selectClasses = {
                    select: "select",
                    selectBody: "select__body",
                    selectTitle: "select__title",
                    selectPlaceholder: "select__placeholder",
                    selectInput: "select__input",
                    selectLink: "select__link",
                    selectOptions: "select__options",
                    selectDropdown: "select__dropdown",
                    selectOption: "select__option",
                    selectNotice: "select__notice",
                    selectRow: "select__row",
                    selectData: "select__asset",
                    selectText: "select__text",
                    selectButton: "select__button",
                    selectDisabled: "select-disabled",
                    selectTag: "select-tag",
                    selectOpen: "select-open",
                    selectActive: "select-active",
                    selectFocus: "select-focus",
                    selectSingle: "select-single",
                    selectMultiple: "select-multiple",
                    selectCheckBox: "select-checkbox",
                    selectOptionSelected: "select-selected",
                    selectHighlighted: "select-highlighted"
                };
                if (this.config.init) {
                    const selectItems = document.querySelectorAll("select");
                    if (!selectItems.length) {
                        this.#setLogging("There is no select");
                        return;
                    }
                    this.selectsInit(selectItems);
                    this.selectEvents();
                    this.#setLogging(`I made selects: (${selectItems.length})`);
                }
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
            }
            selectEvents() {
                document.addEventListener("click", (e => this.selectsActions(e)));
                document.addEventListener("pointerover", (e => this.selectsActions(e)));
                document.addEventListener("keydown", (e => this.selectsActions(e)));
                document.addEventListener("focusin", (e => this.selectsActions(e)));
                document.addEventListener("focusout", (e => this.selectsActions(e)));
            }
            selectInit(originalSelect, index) {
                const {multiple, options, id, dataset} = originalSelect;
                const selectContainer = document.createElement("div");
                const selectedOption = Array.from(options).some((option => option.selected));
                const selectPlaceholder = Array.from(options).find((option => !option.value));
                const emptyOptionValue = !selectedOption && multiple ? selectPlaceholder : null;
                const selectLabel = this.getSelectLabel(id);
                this.resetHighLightedIndex(multiple, selectPlaceholder);
                selectContainer.classList.add(this.selectClasses.select);
                originalSelect.parentNode.insertBefore(selectContainer, originalSelect);
                selectContainer.appendChild(originalSelect);
                this.selectContainerAddAttr(selectContainer, selectLabel, multiple);
                if (emptyOptionValue) {
                    Array.from(options).forEach((option => option.removeAttribute("selected")));
                    emptyOptionValue.setAttribute("selected", "");
                }
                originalSelect.hidden = true;
                originalSelect.setAttribute("tabindex", "-1");
                originalSelect.dataset.speed = dataset.speed || this.config.speed;
                if (index) dataset.id = index;
                this.config.speed = +dataset.speed;
                selectContainer.insertAdjacentHTML("beforeend", this.getSelectBodyHTML());
                if (selectPlaceholder) this.selectPlaceholder(originalSelect, selectPlaceholder);
                this.selectBuild(originalSelect);
                originalSelect.addEventListener("change", (e => this.selectChange(e)));
            }
            selectPlaceholder(originalSelect, selectPlaceholder) {
                const {value} = this.getSelectPlaceholder(selectPlaceholder);
                originalSelect.dataset.placeholder = value;
            }
            selectContainerAddAttr(selectContainer, selectLabel) {
                let multiple = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                selectContainer.setAttribute("tabindex", "0");
                if (selectLabel && !multiple) selectContainer.setAttribute("aria-label", selectLabel.textContent);
                if (multiple) selectContainer.setAttribute("aria-autocomplete", "list");
                selectContainer.setAttribute("aria-haspopup", true);
                selectContainer.setAttribute("role", `${multiple ? "combobox" : "listbox"}`);
                selectContainer.setAttribute("aria-expanded", false);
            }
            selectBuild(originalSelect) {
                const {multiple, dataset} = originalSelect;
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                if (dataset.classModif) selectItem.classList.add(`select--${dataset.classModif}`);
                if (multiple) {
                    selectItem.classList.add(this.selectClasses.selectMultiple);
                    selectItem.classList.remove(this.selectClasses.selectSingle);
                } else {
                    selectItem.classList.add(this.selectClasses.selectSingle);
                    selectItem.classList.remove(this.selectClasses.selectMultiple);
                }
                originalSelect.hasAttribute(this.selectAttributes.checkbox) && multiple ? selectItem.classList.add(this.selectClasses.selectCheckBox) : selectItem.classList.remove(this.selectClasses.selectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                if (multiple) this.searchActions(selectItem);
                if (originalSelect.hasAttribute(this.selectAttributes.open)) this.selectAction(selectItem);
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const {target, type, code, pointerType} = e;
                const select = target.closest(this.getSelectClass(this.selectClasses.select));
                const selectTag = target.closest(this.getSelectClass(this.selectClasses.selectTag));
                const selectButton = target.closest(this.getSelectClass(this.selectClasses.selectButton));
                const selectTitle = target.closest(this.getSelectClass(this.selectClasses.selectTitle));
                const selectOption = target.closest(this.getSelectClass(this.selectClasses.selectOption));
                const selectInput = target.closest(this.getSelectClass(this.selectClasses.selectInput));
                if (!select && !selectTag) {
                    if (type === "pointerover") return;
                    this.closeSelects();
                    return;
                }
                const selectItem = select || document.querySelector(`${this.getSelectClass(this.selectClasses.select)}[data-id="${selectTag.dataset.selectId}"]`);
                const {originalSelect} = this.getSelectElement(selectItem);
                const {multiple, options, disabled} = originalSelect;
                const selectPlaceholder = Array.from(options).find((option => !option.value));
                this.removeSelectItemActiveDescendant(selectItem);
                if (type === "pointerover" && pointerType === "mouse") if (selectOption) {
                    this.removeOptionHighlightedClass(selectItem);
                    selectOption.classList.add(this.selectClasses.selectHighlighted);
                    this.#highlightedIndex = this.getVisibleSelectOptionsItems(selectItem).findIndex((option => option === selectOption));
                    this.setSelectItemActiveDescendant(selectItem, selectOption);
                }
                if (type === "click" && !disabled) {
                    this.removeOptionHighlightedClass(selectItem);
                    if (!multiple) this.resetHighLightedIndex(multiple, selectPlaceholder);
                    if (selectTag || selectButton) {
                        const {selectId, value} = selectTag?.dataset || selectButton?.dataset;
                        const optionItem = document.querySelector(`.${this.selectClasses.select}[data-id="${selectId}"] .select__option[data-value="${value}"]`);
                        this.optionAction(selectItem, originalSelect, optionItem);
                    } else if (selectTitle || selectInput) this.selectAction(selectItem); else if (selectOption) this.optionAction(selectItem, originalSelect, selectOption);
                }
                if (type === "focusin" || type === "focusout") {
                    if (select) type === "focusin" ? selectItem.classList.add(this.selectClasses.selectFocus) : selectItem.classList.remove(this.selectClasses.selectFocus);
                    return;
                }
                if (type === "keydown" && !disabled) {
                    if (code === "Escape") {
                        this.closeSelects();
                        return;
                    }
                    if (code === "Tab" && selectItem.classList.contains(this.selectClasses.selectOpen)) {
                        this.closeSelects();
                        return;
                    }
                    const selectVisibleOptionsItems = this.getVisibleSelectOptionsItems(selectItem);
                    if (selectVisibleOptionsItems.length === 0) return;
                    if (code === "ArrowDown" || code === "ArrowUp") {
                        e.preventDefault();
                        const highlightOption = (selectOptionsItems, highlightedIndex) => {
                            selectOptionsItems.forEach(((selectOptionsItem, index) => {
                                selectOptionsItem.classList.toggle(this.selectClasses.selectHighlighted, highlightedIndex === index);
                            }));
                        };
                        if (code === "ArrowDown") this.#highlightedIndex = (this.#highlightedIndex + 1) % selectVisibleOptionsItems.length; else if (code === "ArrowUp") this.#highlightedIndex = (this.#highlightedIndex - 1 + selectVisibleOptionsItems.length) % selectVisibleOptionsItems.length;
                        highlightOption(selectVisibleOptionsItems, this.#highlightedIndex);
                        this.setSelectItemActiveDescendant(selectItem, selectVisibleOptionsItems[this.#highlightedIndex]);
                    }
                    if (code === "Backspace") {
                        e.preventDefault();
                        if (this.#highlightedIndex !== -1) {
                            const highlightedOption = selectVisibleOptionsItems[this.#highlightedIndex];
                            if (highlightedOption && highlightedOption.classList.contains(this.selectClasses.selectOptionSelected)) {
                                this.optionAction(selectItem, originalSelect, highlightedOption);
                                return;
                            }
                        }
                    }
                    if (code === "Enter") {
                        e.preventDefault();
                        const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
                        if (selectButton) {
                            const {selectId, value} = selectButton.dataset;
                            const optionItem = document.querySelector(`.${this.selectClasses.select}[data-id="${selectId}"] .select__option[data-value="${value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                            this.selectAction(selectItem);
                            return;
                        }
                        if (!selectItem.classList.contains(this.selectClasses.selectOpen)) {
                            this.selectAction(selectItem);
                            if (selectInput) selectInput.focus();
                            return;
                        }
                        if (this.#highlightedIndex !== -1) {
                            this.optionAction(selectItem, originalSelect, selectVisibleOptionsItems[this.#highlightedIndex]);
                            const selectedOptionItem = selectVisibleOptionsItems[this.#highlightedIndex];
                            if (!multiple && selectedOptionItem) {
                                selectedOptionItem.classList.remove(this.selectClasses.selectHighlighted);
                                if (this.config.showSelected) if (selectedOptionItem.classList.contains(this.selectClasses.selectPlaceholder)) this.#highlightedIndex = 0; else this.#highlightedIndex = this.#highlightedIndex;
                            } else {
                                this.removeOptionHighlightedClass(selectItem);
                                this.#highlightedIndex = this.#highlightedIndex;
                            }
                        }
                    }
                }
            }
            selectAction(selectItem) {
                const {originalSelect} = this.getSelectElement(selectItem);
                const {speed, zIndex} = originalSelect.dataset;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                const selectOpenzIndex = zIndex || 3;
                this.setOptionsPosition(selectItem);
                if (originalSelect.closest(`[${this.selectAttributes.oneSelect}]`)) {
                    const selectOneGroup = originalSelect.closest(`[${this.selectAttributes.oneSelect}]`);
                    this.closeSelects(selectOneGroup);
                }
                if (!selectOptions.classList.contains("slide")) {
                    selectItem.classList.toggle(this.selectClasses.selectOpen);
                    _slideToggle(selectOptions, speed);
                    if (selectItem.classList.contains(this.selectClasses.selectOpen)) {
                        this.updateAriaExpandedAttr(selectItem, selectOptions, true);
                        selectItem.style.zIndex = selectOpenzIndex;
                    } else {
                        this.updateAriaExpandedAttr(selectItem, selectOptions);
                        setTimeout((() => {
                            selectItem.style.zIndex = "";
                        }), speed);
                    }
                }
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (!optionItem) return;
                const {multiple} = originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                const selectOptionItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
                if (!selectOptions.classList.contains("slide")) {
                    if (multiple) optionItem.classList.toggle(this.selectClasses.selectOptionSelected); else {
                        selectOptionItems.forEach((selectOptionItem => {
                            selectOptionItem.setAttribute("aria-selected", false);
                            selectOptionItem.classList.remove(this.selectClasses.selectOptionSelected);
                        }));
                        optionItem.classList.add(this.selectClasses.selectOptionSelected);
                    }
                    optionItem.classList.contains(this.selectClasses.selectOptionSelected) ? optionItem.setAttribute("aria-selected", true) : optionItem.setAttribute("aria-selected", false);
                    if (!multiple) {
                        if (!this.config.showSelected) {
                            const hiddenOption = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.selectOption)}[hidden]`);
                            setTimeout((() => {
                                if (hiddenOption) hiddenOption.hidden = false;
                                optionItem.hidden = true;
                            }), this.config.speed);
                        }
                        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                        this.selectAction(selectItem);
                    }
                    this.updateOriginalSelectSelectedOptions(originalSelect, selectItem);
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }
            updateAriaExpandedAttr(selectItem, selectOptions) {
                let isOpen = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                selectItem.setAttribute("aria-expanded", `${isOpen ? true : false}`);
                selectOptions.setAttribute("aria-expanded", `${isOpen ? true : false}`);
            }
            updateOriginalSelectSelectedOptions(originalSelect, selectItem) {
                const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.selectOptionSelected));
                originalSelectSelectedItems.forEach((selectedItem => selectedItem.removeAttribute("selected")));
                selectSelectedItems.forEach((selectSelectedItems => {
                    originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "");
                }));
            }
            searchActions(selectItem) {
                if (!this.config.searchSelected) return;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
                if (selectInput?.value === "") selectOptionsItems.forEach((selectOptionsItem => selectOptionsItem.hidden = false));
                const checkHiddenOptions = () => !selectOptions.querySelector(`${this.getSelectClass(this.selectClasses.selectOption)}:not([hidden])`);
                const checkSelectedOptions = () => Array.from(selectOptionsItems).every((selectOptionsItem => selectOptionsItem.classList.contains(this.selectClasses.selectOptionSelected)));
                const filteredOptions = value => {
                    if (checkSelectedOptions()) return;
                    const selectNotice = selectOptions.querySelector(this.getSelectClass(this.selectClasses.selectNotice));
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().includes(value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    if (checkHiddenOptions()) {
                        if (selectNotice) return;
                        selectOptions.insertAdjacentHTML("afterbegin", `<div class=${this.selectClasses.selectNotice}>${this.config.noResultsText}</div>`);
                    } else if (selectNotice) selectNotice.remove();
                    if (selectOptions.hidden === true) this.selectAction(selectItem);
                };
                selectInput?.addEventListener("input", (_ref => {
                    let {target: {value}} = _ref;
                    return utils_debounce(filteredOptions(value));
                }), 200);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute(this.selectAttributes.submit) && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                const {selectElement} = this.getSelectElement(selectItem, this.selectClasses.selectTitle);
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.selectDisabled);
                    if (selectElement) selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.selectDisabled);
                    if (selectElement) selectElement.disabled = false;
                }
            }
            closeSelects(selectOneGroup) {
                const selectsGroup = selectOneGroup || document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.select)}${this.getSelectClass(this.selectClasses.selectOpen)}`);
                if (selectActiveItems.length > 0) selectActiveItems.forEach((selectActiveItem => this.closeCurrentSelect(selectActiveItem)));
            }
            closeCurrentSelect(selectItem) {
                const {originalSelect} = this.getSelectElement(selectItem);
                const {speed} = originalSelect.dataset;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                if (!selectOptions.classList.contains("slide")) {
                    selectItem.classList.remove(this.selectClasses.selectOpen);
                    this.updateAriaExpandedAttr(selectItem, selectOptions);
                    _slideUp(selectOptions, speed);
                    setTimeout((() => {
                        selectItem.style.zIndex = "";
                    }), speed);
                }
            }
            removeSelectItemActiveDescendant(selectItem) {
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
                selectItem.removeAttribute("aria-activedescendant");
                if (selectInput) selectInput.removeAttribute("aria-activedescendant");
            }
            removeOptionHighlightedClass(selectItem) {
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
                if (selectOptionsItems.length > 0) selectOptionsItems.forEach((selectOptionItem => selectOptionItem.classList.remove(this.selectClasses.selectHighlighted)));
            }
            resetHighLightedIndex(multiple) {
                let selectPlaceholder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (!multiple) {
                    if (this.config.showSelected) if (selectPlaceholder && this.getSelectPlaceholder(selectPlaceholder).show) this.#highlightedIndex = 0; else this.#highlightedIndex = -1;
                } else this.#highlightedIndex = -1;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptionsHTML(originalSelect);
            }
            setSelectItemActiveDescendant(selectItem, selectOption) {
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
                const selectOptionId = this.getSelectOptionId(selectOption);
                selectItem.setAttribute("aria-activedescendant", selectOptionId);
                if (selectInput) selectInput.setAttribute("aria-activedescendant", selectOptionId);
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const {multiple} = originalSelect;
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.selectBody).selectElement;
                const selectItemTitles = selectItemBody.querySelectorAll(this.getSelectClass(this.selectClasses.selectTitle));
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
                if (selectItemTitles.length > 0) selectItemTitles.forEach((title => title.remove()));
                if (selectInput) selectInput.value = "";
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                if (multiple) this.searchActions(selectItem);
            }
            setOptionsPosition(selectItem) {
                const {originalSelect} = this.getSelectElement(selectItem);
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                const selectItemDropdown = this.getSelectElement(selectItem, this.selectClasses.selectDropdown).selectElement;
                if (!selectOptions || !selectItemDropdown) return;
                const {scroll, optionsMargin, speed} = originalSelect.dataset;
                const customMaxHeightValue = +scroll ? `${+scroll}px` : ``;
                const selectOptionsPosMargin = +optionsMargin || 10;
                if (selectItem.classList.contains(this.selectClasses.selectOpen)) {
                    setTimeout((() => {
                        selectItem.classList.remove("select--show-top");
                        selectItemDropdown.style.maxHeight = customMaxHeightValue;
                    }), +speed);
                    return;
                }
                selectOptions.hidden = false;
                const selectItemDropdownHeight = selectItemDropdown.offsetHeight || parseInt(window.getComputedStyle(selectItemDropdown).getPropertyValue("max-height"));
                const selectOptionsHeight = selectOptions.offsetHeight > selectItemDropdownHeight ? selectOptions.offsetHeight : selectItemDropdownHeight + selectOptions.offsetHeight;
                const selectOptionsScrollHeight = selectOptionsHeight - selectItemDropdownHeight;
                selectOptions.hidden = true;
                const selectItemHeight = selectItem.offsetHeight;
                const selectItemPos = selectItem.getBoundingClientRect().top;
                const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                if (selectItemResult < 0) {
                    const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                    if (newMaxHeightValue < 100) {
                        selectItem.classList.add("select--show-top");
                        selectItemDropdown.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                    } else {
                        selectItem.classList.remove("select--show-top");
                        selectItemDropdown.style.maxHeight = `${newMaxHeightValue}px`;
                    }
                }
            }
            getOptionsHTML(originalSelect) {
                const {multiple, options, dataset} = originalSelect;
                const selectOptionsScroll = originalSelect.hasAttribute(this.selectAttributes.scroll) ? `data-simplebar` : "";
                const customMaxHeightValue = +dataset.scroll || 200;
                const ariaMultiselectTable = multiple ? `aria-multiselectable="true"` : "";
                let selectOptions = [ ...options ];
                if (!selectOptions.length) return;
                const selectPlaceholder = selectOptions.find((option => !option.value));
                if (selectPlaceholder && !this.getSelectPlaceholder(selectPlaceholder).show || multiple) selectOptions = selectOptions.filter((option => option.value));
                const selectOptionsHTML = `\n       <div \n          class="${this.selectClasses.selectDropdown}"\n          ${selectOptionsScroll} \n          ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""}\n          ${ariaMultiselectTable}\n          role="listbox"\n          >\n           ${selectOptions.map(((option, index) => this.getOptionHTML(option, originalSelect, index + 1))).join("")}\n       </div>`;
                return selectOptionsHTML;
            }
            getOptionHTML(selectOption, originalSelect, index) {
                const {selected, value, dataset} = selectOption;
                const {multiple, id, name} = originalSelect;
                const selectOptionId = id || name || `selected`;
                const placeholderClass = !value && this.config.placeholder ? ` ${this.selectClasses.selectPlaceholder}` : "";
                const selectOptionSelected = selected ? ` ${this.selectClasses.selectOptionSelected}` : "";
                const selectOptionHide = selected && !this.config.showSelected && !multiple ? `hidden` : ``;
                const selectOptionClass = dataset.class ? ` ${dataset.class}` : "";
                const selectOptionLink = dataset.href || false;
                const selectLinkClass = selectOptionLink ? ` ${this.selectClasses.selectLink}` : "";
                const ariaSelected = selected ? `aria-selected="true"` : `aria-selected="false"`;
                const selectOptionLinkTarget = selectOption.hasAttribute(this.selectAttributes.hrefBlank) ? `target="_blank"` : "";
                const optionText = this.config.selectOptionText ? `data-select-text="${this.config.selectOptionText}"` : "";
                let selectOptionHTML = ``;
                if (selectOptionLink) selectOptionHTML = `\n          <a \n            id=select--${selectOptionId}-item-${index}\n            class="${this.selectClasses.selectOption}${selectLinkClass}${selectOptionClass}${placeholderClass}${selectOptionSelected}" \n            href="${selectOptionLink}"\n            role="option"\n            ${selectOptionLinkTarget} \n            data-value="${value}" \n            ${optionText}\n            ${selectOptionHide} \n            ${ariaSelected}>\n              ${this.getSelectElementContent(selectOption)}\n          </a>`; else selectOptionHTML = `\n          <button \n            id=select--${selectOptionId}-item-${index}\n            class="${this.selectClasses.selectOption}${selectOptionClass}${placeholderClass}${selectOptionSelected}" \n            data-value="${value}"\n            role="option"\n            ${selectOptionHide} \n            ${optionText}\n            ${ariaSelected} \n            type="button">\n              ${this.getSelectElementContent(selectOption)}\n          </button>`;
                return selectOptionHTML;
            }
            getSelectTitleValue(selectItem, originalSelect) {
                const {multiple, id, dataset: {placeholder, tags}} = originalSelect;
                const {elements, values, html} = this.getSelectedOptionsData(originalSelect);
                const selectLabel = this.getSelectLabel(id);
                const emptyValue = Array.from(originalSelect.options).find((option => !option.value));
                const customClass = elements[0]?.dataset.class ? ` ${elements[0].dataset.class}` : "";
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.selectInput).selectElement;
                const selectTitleValue = [];
                if (html.length) selectTitleValue.push(html);
                values.length ? selectItem.classList.add(this.selectClasses.selectActive) : selectItem.classList.remove(this.selectClasses.selectActive);
                const renderOption = optionValue => {
                    const placeholderClass = emptyValue?.textContent.includes(optionValue) && this.config.placeholder && !multiple ? ` ${this.selectClasses.selectPlaceholder}` : "";
                    return `\n              <div\n                class="${this.selectClasses.selectTitle}${customClass}${placeholderClass}"\n                data-select-id="${selectItem.dataset.id}"\n                data-value="${optionValue}"\n                aria-selected="true"\n                role="option"\n              >\n                ${optionValue}\n                ${this.config.removeItemButton && multiple ? this.getRemoveItemButtonHTML(selectItem, optionValue) : ""}\n              </div>\n          `;
                };
                if (multiple) {
                    if (tags && document.querySelector(tags)) elements.length ? document.querySelector(tags).innerHTML = elements.map((option => this.getSelectTagHTML(selectItem, option))).join("") : document.querySelector(tags).innerHTML = "";
                    if (!selectInput) return this.getSearchInputHTML(placeholder, selectLabel?.textContent); else return elements.map((option => renderOption(option.value))).join("");
                }
                return renderOption(selectTitleValue);
            }
            getSelectTagHTML(selectItem, option) {
                return `\n        <span\n          class="${this.selectClasses.selectTag}"\n          data-select-id="${selectItem.dataset.id}"\n          data-value="${option.value}"\n          aria-label="Remove item: ${option.value}"\n          role=button>\n           ${this.getSelectElementContent(option)}\n        </span>\n     `;
            }
            getSearchInputHTML(placeholder, label) {
                return `\n        <input\n          class="${this.selectClasses.selectInput}"\n          type="search"\n          autocomplete="off"\n          autocapitalize="off"\n          aria-autocomplete="list"\n          spellcheck="false"\n          role="textbox"\n          ${placeholder || label ? `aria-label="${placeholder || label}"` : ""}\n          ${placeholder ? `placeholder="${placeholder}"` : ""}\n          ${placeholder ? `data-placeholder="${placeholder}"` : ""}\n        >\n      `;
            }
            getRemoveItemButtonHTML(selectItem, value) {
                return `\n        <button\n          class="${this.selectClasses.selectButton}"\n          data-select-id="${selectItem.dataset.id}"\n          data-value="${value}"\n          aria-label="Remove item: ${value}"\n          type=button\n        ></button>\n    `;
            }
            getSelectBodyHTML() {
                return `\n      <div class="${this.selectClasses.selectBody}" role="listbox">\n         <div hidden class="${this.selectClasses.selectOptions}" aria-expanded=false></div>\n      </div>`;
            }
            getVisibleSelectOptionsItems(selectItem) {
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.selectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(this.getSelectClass(this.selectClasses.selectOption));
                return Array.from(selectOptionsItems).filter((option => !option.hidden));
            }
            getSelectedOptionsData(originalSelect) {
                const {multiple, options, selectedIndex} = originalSelect;
                const selectedOptions = multiple ? Array.from(options).filter((option => option.value && option.selected)) : [ options[selectedIndex] ];
                return {
                    elements: selectedOptions,
                    values: selectedOptions.map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getSelectElementContent(selectOption) {
                const {asset} = selectOption.dataset;
                const selectOptionDataHTML = asset?.includes("img") ? `<img src="${asset}" alt="">` : asset || "";
                let selectOptionContentHTML = ``;
                if (asset) selectOptionContentHTML += `\n              <div class="${this.selectClasses.selectRow}">\n                <div class="${this.selectClasses.selectData}">\n                  ${selectOptionDataHTML || ""}\n                </div>\n                <span class="${this.selectClasses.selectText}">\n                  ${selectOption.textContent}\n                </span>\n              </div>\n            `; else selectOptionContentHTML = selectOption.textContent;
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(selectPlaceholder) {
                const {textContent: value} = selectPlaceholder;
                return {
                    value,
                    show: selectPlaceholder.hasAttribute(this.selectAttributes.show)
                };
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            getSelectOptionId(selectOption) {
                return selectOption.getAttribute("id");
            }
            getSelectLabel(selectId) {
                return Array.from(document.querySelectorAll("label")).find((label => label.getAttribute("for") === selectId));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        parent: selectItem,
                        select: originalSelect
                    }
                }));
            }
            #setLogging(message) {
                if (this.config.logging) FLS(`[Select]: ${message} `);
            }
        }
        objectModules.select = new Select({
            selectOptionText: ""
        });
        __webpack_require__(958);
        const inputMasks = document.querySelectorAll('input[type="tel"]');
        if (inputMasks.length) Inputmask("+38(099)999-99-99").mask(inputMasks);
        window["FLS"] = true;
        sidebarToggle();
        addLoadedClass();
        starRating();
        pagination();
        accordion();
        tabs();
        pageNavigation();
        formQuantity();
        initTimer();
        headerScroll();
        headerHeight();
        dropdownLang();
        megaMenuShow();
        burgerMenu();
        showSearchInput();
    })();
})();