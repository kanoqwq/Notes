/*! @sentry/browser 5.15.0 (3ce26d5c) | https://github.com/getsentry/sentry-javascript */
var Sentry = function(n) {
    var t = function(n, r) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(n, t) {
                n.__proto__ = t
            } ||
            function(n, t) {
                for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r])
            })(n, r)
    };

    function r(n, r) {
        function e() {
            this.constructor = n
        }
        t(n, r),
            n.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
    }
    var e = function() {
        return (e = Object.assign ||
            function(n) {
                for (var t, r = 1,
                        e = arguments.length; r < e; r++)
                    for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                return n
            }).apply(this, arguments)
    };

    function i(n) {
        var t = "function" == typeof Symbol && n[Symbol.iterator],
            r = 0;
        return t ? t.call(n) : {
            next: function() {
                return n && r >= n.length && (n = void 0), {
                    value: n && n[r++],
                    done: !n
                }
            }
        }
    }

    function o(n, t) {
        var r = "function" == typeof Symbol && n[Symbol.iterator];
        if (!r) return n;
        var e, i, o = r.call(n),
            u = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(e = o.next()).done;) u.push(e.value)
        } catch (n) {
            i = {
                error: n
            }
        } finally {
            try {
                e && !e.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return u
    }

    function u() {
        for (var n = [], t = 0; t < arguments.length; t++) n = n.concat(o(arguments[t]));
        return n
    }
    var c, a, s, f;
    !
    function(n) {
        n[n.None = 0] = "None",
            n[n.Error = 1] = "Error",
            n[n.Debug = 2] = "Debug",
            n[n.Verbose = 3] = "Verbose"
    }(c || (c = {})),
    (a = n.Severity || (n.Severity = {})).Fatal = "fatal",
        a.Error = "error",
        a.Warning = "warning",
        a.Log = "log",
        a.Info = "info",
        a.Debug = "debug",
        a.Critical = "critical",
        function(n) {
            n.fromString = function(t) {
                switch (t) {
                    case "debug":
                        return n.Debug;
                    case "info":
                        return n.Info;
                    case "warn":
                    case "warning":
                        return n.Warning;
                    case "error":
                        return n.Error;
                    case "fatal":
                        return n.Fatal;
                    case "critical":
                        return n.Critical;
                    case "log":
                    default:
                        return n.Log
                }
            }
        }(n.Severity || (n.Severity = {})),
        function(n) {
            n.Ok = "ok",
                n.DeadlineExceeded = "deadline_exceeded",
                n.Unauthenticated = "unauthenticated",
                n.PermissionDenied = "permission_denied",
                n.NotFound = "not_found",
                n.ResourceExhausted = "resource_exhausted",
                n.InvalidArgument = "invalid_argument",
                n.Unimplemented = "unimplemented",
                n.Unavailable = "unavailable",
                n.InternalError = "internal_error",
                n.UnknownError = "unknown_error",
                n.Cancelled = "cancelled",
                n.AlreadyExists = "already_exists",
                n.FailedPrecondition = "failed_precondition",
                n.Aborted = "aborted",
                n.OutOfRange = "out_of_range",
                n.DataLoss = "data_loss"
        }(s || (s = {})),
        function(n) {
            n.fromHttpCode = function(t) {
                if (t < 400) return n.Ok;
                if (t >= 400 && t < 500) switch (t) {
                    case 401:
                        return n.Unauthenticated;
                    case 403:
                        return n.PermissionDenied;
                    case 404:
                        return n.NotFound;
                    case 409:
                        return n.AlreadyExists;
                    case 413:
                        return n.FailedPrecondition;
                    case 429:
                        return n.ResourceExhausted;
                    default:
                        return n.InvalidArgument
                }
                if (t >= 500 && t < 600) switch (t) {
                    case 501:
                        return n.Unimplemented;
                    case 503:
                        return n.Unavailable;
                    case 504:
                        return n.DeadlineExceeded;
                    default:
                        return n.InternalError
                }
                return n.UnknownError
            }
        }(s || (s = {})),
        (f = n.Status || (n.Status = {})).Unknown = "unknown",
        f.Skipped = "skipped",
        f.Success = "success",
        f.RateLimit = "rate_limit",
        f.Invalid = "invalid",
        f.Failed = "failed",
        function(n) {
            n.fromHttpCode = function(t) {
                return t >= 200 && t < 300 ? n.Success : 429 === t ? n.RateLimit : t >= 400 && t < 500 ? n.Invalid : t >= 500 ? n.Failed : n.Unknown
            }
        }(n.Status || (n.Status = {}));
    var h = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array ?
        function(n, t) {
            return n.__proto__ = t,
                n
        } : function(n, t) {
            for (var r in t) n.hasOwnProperty(r) || (n[r] = t[r]);
            return n
        });
    var v = function(n) {
        function t(t) {
            var r = this.constructor,
                e = n.call(this, t) || this;
            return e.message = t,
                e.name = r.prototype.constructor.name,
                h(e, r.prototype),
                e
        }
        return r(t, n),
            t
    }(Error);

    function l(n) {
        switch (Object.prototype.toString.call(n)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return x(n, Error)
        }
    }

    function d(n) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(n)
    }

    function p(n) {
        return "[object DOMError]" === Object.prototype.toString.call(n)
    }

    function y(n) {
        return "[object String]" === Object.prototype.toString.call(n)
    }

    function m(n) {
        return null === n || "object" != typeof n && "function" != typeof n
    }

    function b(n) {
        return "[object Object]" === Object.prototype.toString.call(n)
    }

    function w(n) {
        return "undefined" != typeof Event && x(n, Event)
    }

    function g(n) {
        return "undefined" != typeof Element && x(n, Element)
    }

    function E(n) {
        return Boolean(n && n.then && "function" == typeof n.then)
    }

    function x(n, t) {
        try {
            return n instanceof t
        } catch (n) {
            return !1
        }
    }

    function j(n, t) {
        return void 0 === t && (t = 0),
            "string" != typeof n || 0 === t ? n : n.length <= t ? n : n.substr(0, t) + "..."
    }

    function k(n, t) {
        if (!Array.isArray(n)) return "";
        for (var r = [], e = 0; e < n.length; e++) {
            var i = n[e];
            try {
                r.push(String(i))
            } catch (n) {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(t)
    }

    function _(n, t) {
        return r = t,
            "[object RegExp]" === Object.prototype.toString.call(r) ? t.test(n) : "string" == typeof t && -1 !== n.indexOf(t);
        var r
    }

    function S(n, t) {
        return n.require(t)
    }

    function O() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }
    var T = {};

    function D() {
        return O() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : T
    }

    function R() {
        var n = D(),
            t = n.crypto || n.msCrypto;
        if (void 0 !== t && t.getRandomValues) {
            var r = new Uint16Array(8);
            t.getRandomValues(r),
                r[3] = 4095 & r[3] | 16384,
                r[4] = 16383 & r[4] | 32768;
            var e = function(n) {
                for (var t = n.toString(16); t.length < 4;) t = "0" + t;
                return t
            };
            return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,
            function(n) {
                var t = 16 * Math.random() | 0;
                return ("x" === n ? t : 3 & t | 8).toString(16)
            })
    }

    function N(n) {
        if (!n) return {};
        var t = n.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        var r = t[6] || "",
            e = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + r + e
        }
    }

    function I(n) {
        if (n.message) return n.message;
        if (n.exception && n.exception.values && n.exception.values[0]) {
            var t = n.exception.values[0];
            return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || n.event_id || "<unknown>"
        }
        return n.event_id || "<unknown>"
    }

    function C(n) {
        var t = D();
        if (!("console" in t)) return n();
        var r = t.console,
            e = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach(function(n) {
            n in t.console && r[n].__sentry_original__ && (e[n] = r[n], r[n] = r[n].__sentry_original__)
        });
        var i = n();
        return Object.keys(e).forEach(function(n) {
                r[n] = e[n]
            }),
            i
    }

    function M(n, t, r) {
        n.exception = n.exception || {},
            n.exception.values = n.exception.values || [],
            n.exception.values[0] = n.exception.values[0] || {},
            n.exception.values[0].value = n.exception.values[0].value || t || "",
            n.exception.values[0].type = n.exception.values[0].type || r || "Error"
    }

    function A(n, t) {
        void 0 === t && (t = {});
        try {
            n.exception.values[0].mechanism = n.exception.values[0].mechanism || {},
                Object.keys(t).forEach(function(r) {
                    n.exception.values[0].mechanism[r] = t[r]
                })
        } catch (n) {}
    }

    function U(n) {
        try {
            for (var t = n,
                    r = [], e = 0, i = 0, o = " > ".length, u = void 0; t && e++ < 5 && !("html" === (u = q(t)) || e > 1 && i + r.length * o + u.length >= 80);) r.push(u),
                i += u.length,
                t = t.parentNode;
            return r.reverse().join(" > ")
        } catch (n) {
            return "<unknown>"
        }
    }

    function q(n) {
        var t, r, e, i, o, u = n,
            c = [];
        if (!u || !u.tagName) return "";
        if (c.push(u.tagName.toLowerCase()), u.id && c.push("#" + u.id), (t = u.className) && y(t))
            for (r = t.split(/\s+/), o = 0; o < r.length; o++) c.push("." + r[o]);
        var a = ["type", "name", "title", "alt"];
        for (o = 0; o < a.length; o++) e = a[o],
            (i = u.getAttribute(e)) && c.push("[" + e + '="' + i + '"]');
        return c.join("")
    }
    var L = Date.now(),
        H = 0,
        P = {
            now: function() {
                var n = Date.now() - L;
                return n < H && (n = H),
                    H = n,
                    n
            },
            timeOrigin: L
        },
        F = function() {
            if (O()) try {
                return S(module, "perf_hooks").performance
            } catch (n) {
                return P
            }
            return D().performance && void 0 === performance.timeOrigin && (performance.timeOrigin = performance.timing && performance.timing.navigationStart || L),
                D().performance || P
        }();

    function W() {
        return (F.timeOrigin + F.now()) / 1e3
    }
    var X = 6e4;

    function B(n, t) {
        if (!t) return X;
        var r = parseInt("" + t, 10);
        if (!isNaN(r)) return 1e3 * r;
        var e = Date.parse("" + t);
        return isNaN(e) ? X : e - n
    }
    var $ = "<anonymous>";

    function G(n) {
        try {
            return n && "function" == typeof n && n.name || $
        } catch (n) {
            return $
        }
    }
    var J = D(),
        z = "Sentry Logger ",
        V = function() {
            function n() {
                this.t = !1
            }
            return n.prototype.disable = function() {
                    this.t = !1
                },
                n.prototype.enable = function() {
                    this.t = !0
                },
                n.prototype.log = function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    this.t && C(function() {
                        J.console.log(z + "[Log]: " + n.join(" "))
                    })
                },
                n.prototype.warn = function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    this.t && C(function() {
                        J.console.warn(z + "[Warn]: " + n.join(" "))
                    })
                },
                n.prototype.error = function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    this.t && C(function() {
                        J.console.error(z + "[Error]: " + n.join(" "))
                    })
                },
                n
        }();
    J.__SENTRY__ = J.__SENTRY__ || {};
    var K, Q = J.__SENTRY__.logger || (J.__SENTRY__.logger = new V),
        Y = function() {
            function n() {
                this.i = "function" == typeof WeakSet,
                    this.o = this.i ? new WeakSet : []
            }
            return n.prototype.memoize = function(n) {
                    if (this.i) return !!this.o.has(n) || (this.o.add(n), !1);
                    for (var t = 0; t < this.o.length; t++) {
                        if (this.o[t] === n) return !0
                    }
                    return this.o.push(n), !1
                },
                n.prototype.unmemoize = function(n) {
                    if (this.i) this.o.delete(n);
                    else
                        for (var t = 0; t < this.o.length; t++)
                            if (this.o[t] === n) {
                                this.o.splice(t, 1);
                                break
                            }
                },
                n
        }();

    function Z(n, t, r) {
        if (t in n) {
            var e = n[t],
                i = r(e);
            if ("function" == typeof i) try {
                i.prototype = i.prototype || {},
                    Object.defineProperties(i, {
                        __sentry_original__: {
                            enumerable: !1,
                            value: e
                        }
                    })
            } catch (n) {}
            n[t] = i
        }
    }

    function nn(n) {
        if (l(n)) {
            var t = n,
                r = {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                };
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
            return r
        }
        if (w(n)) {
            var i = n,
                o = {};
            o.type = i.type;
            try {
                o.target = g(i.target) ? U(i.target) : Object.prototype.toString.call(i.target)
            } catch (n) {
                o.target = "<unknown>"
            }
            try {
                o.currentTarget = g(i.currentTarget) ? U(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
            } catch (n) {
                o.currentTarget = "<unknown>"
            }
            for (var e in "undefined" != typeof CustomEvent && x(n, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, e) && (o[e] = i);
            return o
        }
        return n
    }

    function tn(n) {
        return function(n) {
            return ~-encodeURI(n).split(/%..|./).length
        }(JSON.stringify(n))
    }

    function rn(n, t, r) {
        void 0 === t && (t = 3),
            void 0 === r && (r = 102400);
        var e = un(n, t);
        return tn(e) > r ? rn(n, t - 1, r) : e
    }

    function en(n, t) {
        return "domain" === t && n && "object" == typeof n && n.u ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && n === global ? "[Global]" : "undefined" != typeof window && n === window ? "[Window]" : "undefined" != typeof document && n === document ? "[Document]" : b(r = n) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : "number" == typeof n && n != n ? "[NaN]" : void 0 === n ? "[undefined]" : "function" == typeof n ? "[Function: " + G(n) + "]" : n;
        var r
    }

    function on(n, t, r, e) {
        if (void 0 === r && (r = 1 / 0), void 0 === e && (e = new Y), 0 === r) return function(n) {
            var t = Object.prototype.toString.call(n);
            if ("string" == typeof n) return n;
            if ("[object Object]" === t) return "[Object]";
            if ("[object Array]" === t) return "[Array]";
            var r = en(n);
            return m(r) ? r : t
        }(t);
        if (null != t && "function" == typeof t.toJSON) return t.toJSON();
        var i = en(t, n);
        if (m(i)) return i;
        var o = nn(t),
            u = Array.isArray(t) ? [] : {};
        if (e.memoize(t)) return "[Circular ~]";
        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (u[c] = on(c, o[c], r - 1, e));
        return e.unmemoize(t),
            u
    }

    function un(n, t) {
        try {
            return JSON.parse(JSON.stringify(n,
                function(n, r) {
                    return on(n, r, t)
                }))
        } catch (n) {
            return "**non-serializable**"
        }
    }

    function cn(n, t) {
        void 0 === t && (t = 40);
        var r = Object.keys(nn(n));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return j(r[0], t);
        for (var e = r.length; e > 0; e--) {
            var i = r.slice(0, e).join(", ");
            if (!(i.length > t)) return e === r.length ? i : j(i, t)
        }
        return ""
    }!
    function(n) {
        n.PENDING = "PENDING",
            n.RESOLVED = "RESOLVED",
            n.REJECTED = "REJECTED"
    }(K || (K = {}));
    var an = function() {
            function n(n) {
                var t = this;
                this.s = K.PENDING,
                    this.h = [],
                    this.v = function(n) {
                        t.l(K.RESOLVED, n)
                    },
                    this.p = function(n) {
                        t.l(K.REJECTED, n)
                    },
                    this.l = function(n, r) {
                        t.s === K.PENDING && (E(r) ? r.then(t.v, t.p) : (t.s = n, t.m = r, t.g()))
                    },
                    this.j = function(n) {
                        t.h = t.h.concat(n),
                            t.g()
                    },
                    this.g = function() {
                        t.s !== K.PENDING && (t.s === K.REJECTED ? t.h.forEach(function(n) {
                            n.onrejected && n.onrejected(t.m)
                        }) : t.h.forEach(function(n) {
                            n.onfulfilled && n.onfulfilled(t.m)
                        }), t.h = [])
                    };
                try {
                    n(this.v, this.p)
                } catch (n) {
                    this.p(n)
                }
            }
            return n.prototype.toString = function() {
                    return "[object SyncPromise]"
                },
                n.resolve = function(t) {
                    return new n(function(n) {
                        n(t)
                    })
                },
                n.reject = function(t) {
                    return new n(function(n, r) {
                        r(t)
                    })
                },
                n.all = function(t) {
                    return new n(function(r, e) {
                        if (Array.isArray(t))
                            if (0 !== t.length) {
                                var i = t.length,
                                    o = [];
                                t.forEach(function(t, u) {
                                    n.resolve(t).then(function(n) {
                                        o[u] = n,
                                            0 === (i -= 1) && r(o)
                                    }).then(null, e)
                                })
                            } else r([]);
                        else e(new TypeError("Promise.all requires an array as input."))
                    })
                },
                n.prototype.then = function(t, r) {
                    var e = this;
                    return new n(function(n, i) {
                        e.j({
                            onfulfilled: function(r) {
                                if (t) try {
                                    return void n(t(r))
                                } catch (n) {
                                    return void i(n)
                                } else n(r)
                            },
                            onrejected: function(t) {
                                if (r) try {
                                    return void n(r(t))
                                } catch (n) {
                                    return void i(n)
                                } else i(t)
                            }
                        })
                    })
                },
                n.prototype.
            catch = function(n) {
                    return this.then(function(n) {
                            return n
                        },
                        n)
                },
                n.prototype.
            finally = function(t) {
                    var r = this;
                    return new n(function(n, e) {
                        var i, o;
                        return r.then(function(n) {
                                o = !1,
                                    i = n,
                                    t && t()
                            },
                            function(n) {
                                o = !0,
                                    i = n,
                                    t && t()
                            }).then(function() {
                            o ? e(i) : n(i)
                        })
                    })
                },
                n
        }(),
        sn = function() {
            function n(n) {
                this.k = n,
                    this._ = []
            }
            return n.prototype.isReady = function() {
                    return void 0 === this.k || this.length() < this.k
                },
                n.prototype.add = function(n) {
                    var t = this;
                    return this.isReady() ? (-1 === this._.indexOf(n) && this._.push(n), n.then(function() {
                        return t.remove(n)
                    }).then(null,
                        function() {
                            return t.remove(n).then(null,
                                function() {})
                        }), n) : an.reject(new v("Not adding Promise due to buffer limit reached."))
                },
                n.prototype.remove = function(n) {
                    return this._.splice(this._.indexOf(n), 1)[0]
                },
                n.prototype.length = function() {
                    return this._.length
                },
                n.prototype.drain = function(n) {
                    var t = this;
                    return new an(function(r) {
                        var e = setTimeout(function() {
                                n && n > 0 && r(!1)
                            },
                            n);
                        an.all(t._).then(function() {
                            clearTimeout(e),
                                r(!0)
                        }).then(null,
                            function() {
                                r(!0)
                            })
                    })
                },
                n
        }();

    function fn() {
        if (!("fetch" in D())) return !1;
        try {
            return new Headers,
                new Request(""),
                new Response, !0
        } catch (n) {
            return !1
        }
    }

    function hn(n) {
        return n && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())
    }

    function vn() {
        if (!fn()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (n) {
            return !1
        }
    }
    var ln, dn = D(),
        pn = {},
        yn = {};

    function mn(n) {
        if (!yn[n]) switch (yn[n] = !0, n) {
            case "console":
                !
                function() {
                    if (!("console" in dn)) return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach(function(n) {
                        n in dn.console && Z(dn.console, n,
                            function(t) {
                                return function() {
                                    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                                    wn("console", {
                                            args: r,
                                            level: n
                                        }),
                                        t && Function.prototype.apply.call(t, dn.console, r)
                                }
                            })
                    })
                }();
                break;
            case "dom":
                !
                function() {
                    if (!("document" in dn)) return;
                    dn.document.addEventListener("click", Sn("click", wn.bind(null, "dom")), !1),
                        dn.document.addEventListener("keypress", On(wn.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach(function(n) {
                            var t = dn[n] && dn[n].prototype;
                            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (Z(t, "addEventListener",
                                function(n) {
                                    return function(t, r, e) {
                                        return r && r.handleEvent ? ("click" === t && Z(r, "handleEvent",
                                                function(n) {
                                                    return function(t) {
                                                        return Sn("click", wn.bind(null, "dom"))(t),
                                                            n.call(this, t)
                                                    }
                                                }), "keypress" === t && Z(r, "handleEvent",
                                                function(n) {
                                                    return function(t) {
                                                        return On(wn.bind(null, "dom"))(t),
                                                            n.call(this, t)
                                                    }
                                                })) : ("click" === t && Sn("click", wn.bind(null, "dom"), !0)(this), "keypress" === t && On(wn.bind(null, "dom"))(this)),
                                            n.call(this, t, r, e)
                                    }
                                }), Z(t, "removeEventListener",
                                function(n) {
                                    return function(t, r, e) {
                                        var i = r;
                                        try {
                                            i = i && (i.__sentry_wrapped__ || i)
                                        } catch (n) {}
                                        return n.call(this, t, i, e)
                                    }
                                }))
                        })
                }();
                break;
            case "xhr":
                !
                function() {
                    if (!("XMLHttpRequest" in dn)) return;
                    var n = XMLHttpRequest.prototype;
                    Z(n, "open",
                            function(n) {
                                return function() {
                                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                    var e = t[1];
                                    return this.__sentry_xhr__ = {
                                            method: y(t[0]) ? t[0].toUpperCase() : t[0],
                                            url: t[1]
                                        },
                                        y(e) && "POST" === this.__sentry_xhr__.method && e.match(/sentry_key/) && (this.__sentry_own_request__ = !0),
                                        n.apply(this, t)
                                }
                            }),
                        Z(n, "send",
                            function(n) {
                                return function() {
                                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                    var i = this,
                                        o = {
                                            args: t,
                                            startTimestamp: Date.now(),
                                            xhr: i
                                        };
                                    return wn("xhr", e({},
                                            o)),
                                        i.addEventListener("readystatechange",
                                            function() {
                                                if (4 === i.readyState) {
                                                    try {
                                                        i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status)
                                                    } catch (n) {}
                                                    wn("xhr", e({},
                                                        o, {
                                                            endTimestamp: Date.now()
                                                        }))
                                                }
                                            }),
                                        n.apply(this, t)
                                }
                            })
                }();
                break;
            case "fetch":
                !
                function() {
                    if (!
                        function() {
                            if (!fn()) return !1;
                            var n = D();
                            if (hn(n.fetch)) return !0;
                            var t = !1,
                                r = n.document;
                            if (r) try {
                                var e = r.createElement("iframe");
                                e.hidden = !0,
                                    r.head.appendChild(e),
                                    e.contentWindow && e.contentWindow.fetch && (t = hn(e.contentWindow.fetch)),
                                    r.head.removeChild(e)
                            } catch (n) {
                                Q.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
                            }
                            return t
                        }()) return;
                    Z(dn, "fetch",
                        function(n) {
                            return function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                var i = {
                                    args: t,
                                    fetchData: {
                                        method: gn(t),
                                        url: En(t)
                                    },
                                    startTimestamp: Date.now()
                                };
                                return wn("fetch", e({},
                                        i)),
                                    n.apply(dn, t).then(function(n) {
                                            return wn("fetch", e({},
                                                    i, {
                                                        endTimestamp: Date.now(),
                                                        response: n
                                                    })),
                                                n
                                        },
                                        function(n) {
                                            throw wn("fetch", e({},
                                                    i, {
                                                        endTimestamp: Date.now(),
                                                        error: n
                                                    })),
                                                n
                                        })
                            }
                        })
                }();
                break;
            case "history":
                !
                function() {
                    if (n = D(), t = n.chrome, r = t && t.app && t.app.runtime, e = "history" in n && !!n.history.pushState && !!n.history.replaceState, r || !e) return;
                    var n, t, r, e;
                    var i = dn.onpopstate;

                    function o(n) {
                        return function() {
                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            var e = t.length > 2 ? t[2] : void 0;
                            if (e) {
                                var i = ln,
                                    o = String(e);
                                ln = o,
                                    wn("history", {
                                        from: i,
                                        to: o
                                    })
                            }
                            return n.apply(this, t)
                        }
                    }
                    dn.onpopstate = function() {
                            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                            var r = dn.location.href,
                                e = ln;
                            if (ln = r, wn("history", {
                                    from: e,
                                    to: r
                                }), i) return i.apply(this, n)
                        },
                        Z(dn.history, "pushState", o),
                        Z(dn.history, "replaceState", o)
                }();
                break;
            case "error":
                Tn = dn.onerror,
                    dn.onerror = function(n, t, r, e, i) {
                        return wn("error", {
                            column: e,
                            error: i,
                            line: r,
                            msg: n,
                            url: t
                        }), !!Tn && Tn.apply(this, arguments)
                    };
                break;
            case "unhandledrejection":
                Dn = dn.onunhandledrejection,
                    dn.onunhandledrejection = function(n) {
                        return wn("unhandledrejection", n), !Dn || Dn.apply(this, arguments)
                    };
                break;
            default:
                Q.warn("unknown instrumentation type:", n)
        }
    }

    function bn(n) {
        n && "string" == typeof n.type && "function" == typeof n.callback && (pn[n.type] = pn[n.type] || [], pn[n.type].push(n.callback), mn(n.type))
    }

    function wn(n, t) {
        var r, e;
        if (n && pn[n]) try {
            for (var o = i(pn[n] || []), u = o.next(); !u.done; u = o.next()) {
                var c = u.value;
                try {
                    c(t)
                } catch (t) {
                    Q.error("Error while triggering instrumentation handler.\nType: " + n + "\nName: " + G(c) + "\nError: " + t)
                }
            }
        } catch (n) {
            r = {
                error: n
            }
        } finally {
            try {
                u && !u.done && (e = o.return) && e.call(o)
            } finally {
                if (r) throw r.error
            }
        }
    }

    function gn(n) {
        return void 0 === n && (n = []),
            "Request" in dn && x(n[0], Request) && n[0].method ? String(n[0].method).toUpperCase() : n[1] && n[1].method ? String(n[1].method).toUpperCase() : "GET"
    }

    function En(n) {
        return void 0 === n && (n = []),
            "string" == typeof n[0] ? n[0] : "Request" in dn && x(n[0], Request) ? n[0].url : String(n[0])
    }
    var xn, jn, kn = 1e3,
        _n = 0;

    function Sn(n, t, r) {
        return void 0 === r && (r = !1),
            function(e) {
                xn = void 0,
                    e && jn !== e && (jn = e, _n && clearTimeout(_n), r ? _n = setTimeout(function() {
                        t({
                            event: e,
                            name: n
                        })
                    }) : t({
                        event: e,
                        name: n
                    }))
            }
    }

    function On(n) {
        return function(t) {
            var r;
            try {
                r = t.target
            } catch (n) {
                return
            }
            var e = r && r.tagName;
            e && ("INPUT" === e || "TEXTAREA" === e || r.isContentEditable) && (xn || Sn("input", n)(t), clearTimeout(xn), xn = setTimeout(function() {
                    xn = void 0
                },
                kn))
        }
    }
    var Tn = null;
    var Dn = null;
    var Rn = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        Nn = function() {
            function n(n) {
                "string" == typeof n ? this.S(n) : this.O(n),
                    this.T()
            }
            return n.prototype.toString = function(n) {
                    void 0 === n && (n = !1);
                    var t = this,
                        r = t.host,
                        e = t.path,
                        i = t.pass,
                        o = t.port,
                        u = t.projectId;
                    return t.protocol + "://" + t.user + (n && i ? ":" + i : "") + "@" + r + (o ? ":" + o : "") + "/" + (e ? e + "/" : e) + u
                },
                n.prototype.S = function(n) {
                    var t = Rn.exec(n);
                    if (!t) throw new v("Invalid Dsn");
                    var r = o(t.slice(1), 6),
                        e = r[0],
                        i = r[1],
                        u = r[2],
                        c = void 0 === u ? "" : u,
                        a = r[3],
                        s = r[4],
                        f = void 0 === s ? "" : s,
                        h = "",
                        l = r[5],
                        d = l.split("/");
                    d.length > 1 && (h = d.slice(0, -1).join("/"), l = d.pop()),
                        this.O({
                            host: a,
                            pass: c,
                            path: h,
                            projectId: l,
                            port: f,
                            protocol: e,
                            user: i
                        })
                },
                n.prototype.O = function(n) {
                    this.protocol = n.protocol,
                        this.user = n.user,
                        this.pass = n.pass || "",
                        this.host = n.host,
                        this.port = n.port || "",
                        this.path = n.path || "",
                        this.projectId = n.projectId
                },
                n.prototype.T = function() {
                    var n = this;
                    if (["protocol", "user", "host", "projectId"].forEach(function(t) {
                            if (!n[t]) throw new v("Invalid Dsn")
                        }), "http" !== this.protocol && "https" !== this.protocol) throw new v("Invalid Dsn");
                    if (this.port && isNaN(parseInt(this.port, 10))) throw new v("Invalid Dsn")
                },
                n
        }(),
        In = function() {
            function n() {
                this.D = !1,
                    this.R = [],
                    this.N = [],
                    this.I = [],
                    this.C = {},
                    this.M = {},
                    this.A = {},
                    this.U = {}
            }
            return n.prototype.addScopeListener = function(n) {
                    this.R.push(n)
                },
                n.prototype.addEventProcessor = function(n) {
                    return this.N.push(n),
                        this
                },
                n.prototype.q = function() {
                    var n = this;
                    this.D || (this.D = !0, setTimeout(function() {
                        n.R.forEach(function(t) {
                                t(n)
                            }),
                            n.D = !1
                    }))
                },
                n.prototype.L = function(n, t, r, i) {
                    var o = this;
                    return void 0 === i && (i = 0),
                        new an(function(u, c) {
                            var a = n[i];
                            if (null === t || "function" != typeof a) u(t);
                            else {
                                var s = a(e({},
                                    t), r);
                                E(s) ? s.then(function(t) {
                                    return o.L(n, t, r, i + 1).then(u)
                                }).then(null, c) : o.L(n, s, r, i + 1).then(u).then(null, c)
                            }
                        })
                },
                n.prototype.setUser = function(n) {
                    return this.C = n || {},
                        this.q(),
                        this
                },
                n.prototype.setTags = function(n) {
                    return this.M = e({},
                            this.M, n),
                        this.q(),
                        this
                },
                n.prototype.setTag = function(n, t) {
                    var r;
                    return this.M = e({},
                            this.M, ((r = {})[n] = t, r)),
                        this.q(),
                        this
                },
                n.prototype.setExtras = function(n) {
                    return this.A = e({},
                            this.A, n),
                        this.q(),
                        this
                },
                n.prototype.setExtra = function(n, t) {
                    var r;
                    return this.A = e({},
                            this.A, ((r = {})[n] = t, r)),
                        this.q(),
                        this
                },
                n.prototype.setFingerprint = function(n) {
                    return this.H = n,
                        this.q(),
                        this
                },
                n.prototype.setLevel = function(n) {
                    return this.P = n,
                        this.q(),
                        this
                },
                n.prototype.setTransaction = function(n) {
                    return this.F = n,
                        this.W && (this.W.transaction = n),
                        this.q(),
                        this
                },
                n.prototype.setContext = function(n, t) {
                    var r;
                    return this.U = e({},
                            this.U, ((r = {})[n] = t, r)),
                        this.q(),
                        this
                },
                n.prototype.setSpan = function(n) {
                    return this.W = n,
                        this.q(),
                        this
                },
                n.prototype.getSpan = function() {
                    return this.W
                },
                n.clone = function(t) {
                    var r = new n;
                    return t && (r.I = u(t.I), r.M = e({},
                            t.M), r.A = e({},
                            t.A), r.U = e({},
                            t.U), r.C = t.C, r.P = t.P, r.W = t.W, r.F = t.F, r.H = t.H, r.N = u(t.N)),
                        r
                },
                n.prototype.clear = function() {
                    return this.I = [],
                        this.M = {},
                        this.A = {},
                        this.C = {},
                        this.U = {},
                        this.P = void 0,
                        this.F = void 0,
                        this.H = void 0,
                        this.W = void 0,
                        this.q(),
                        this
                },
                n.prototype.addBreadcrumb = function(n, t) {
                    var r = e({
                            timestamp: W()
                        },
                        n);
                    return this.I = void 0 !== t && t >= 0 ? u(this.I, [r]).slice(-t) : u(this.I, [r]),
                        this.q(),
                        this
                },
                n.prototype.clearBreadcrumbs = function() {
                    return this.I = [],
                        this.q(),
                        this
                },
                n.prototype.X = function(n) {
                    n.fingerprint = n.fingerprint ? Array.isArray(n.fingerprint) ? n.fingerprint : [n.fingerprint] : [],
                        this.H && (n.fingerprint = n.fingerprint.concat(this.H)),
                        n.fingerprint && !n.fingerprint.length && delete n.fingerprint
                },
                n.prototype.applyToEvent = function(n, t) {
                    return this.A && Object.keys(this.A).length && (n.extra = e({},
                            this.A, n.extra)),
                        this.M && Object.keys(this.M).length && (n.tags = e({},
                            this.M, n.tags)),
                        this.C && Object.keys(this.C).length && (n.user = e({},
                            this.C, n.user)),
                        this.U && Object.keys(this.U).length && (n.contexts = e({},
                            this.U, n.contexts)),
                        this.P && (n.level = this.P),
                        this.F && (n.transaction = this.F),
                        this.W && (n.contexts = e({
                                trace: this.W.getTraceContext()
                            },
                            n.contexts)),
                        this.X(n),
                        n.breadcrumbs = u(n.breadcrumbs || [], this.I),
                        n.breadcrumbs = n.breadcrumbs.length > 0 ? n.breadcrumbs : void 0,
                        this.L(u(Cn(), this.N), n, t)
                },
                n
        }();

    function Cn() {
        var n = D();
        return n.__SENTRY__ = n.__SENTRY__ || {},
            n.__SENTRY__.globalEventProcessors = n.__SENTRY__.globalEventProcessors || [],
            n.__SENTRY__.globalEventProcessors
    }

    function Mn(n) {
        Cn().push(n)
    }
    var An = 3,
        Un = function() {
            function n(n, t, r) {
                void 0 === t && (t = new In),
                    void 0 === r && (r = An),
                    this.B = r,
                    this.$ = [],
                    this.$.push({
                        client: n,
                        scope: t
                    })
            }
            return n.prototype.G = function(n) {
                    for (var t, r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
                    var i = this.getStackTop();
                    i && i.client && i.client[n] && (t = i.client)[n].apply(t, u(r, [i.scope]))
                },
                n.prototype.isOlderThan = function(n) {
                    return this.B < n
                },
                n.prototype.bindClient = function(n) {
                    this.getStackTop().client = n,
                        n && n.setupIntegrations && n.setupIntegrations()
                },
                n.prototype.pushScope = function() {
                    var n = this.getStack(),
                        t = n.length > 0 ? n[n.length - 1].scope : void 0,
                        r = In.clone(t);
                    return this.getStack().push({
                            client: this.getClient(),
                            scope: r
                        }),
                        r
                },
                n.prototype.popScope = function() {
                    return void 0 !== this.getStack().pop()
                },
                n.prototype.withScope = function(n) {
                    var t = this.pushScope();
                    try {
                        n(t)
                    } finally {
                        this.popScope()
                    }
                },
                n.prototype.getClient = function() {
                    return this.getStackTop().client
                },
                n.prototype.getScope = function() {
                    return this.getStackTop().scope
                },
                n.prototype.getStack = function() {
                    return this.$
                },
                n.prototype.getStackTop = function() {
                    return this.$[this.$.length - 1]
                },
                n.prototype.captureException = function(n, t) {
                    var r = this.J = R(),
                        i = t;
                    if (!t) {
                        var o = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (n) {
                            o = n
                        }
                        i = {
                            originalException: n,
                            syntheticException: o
                        }
                    }
                    return this.G("captureException", n, e({},
                            i, {
                                event_id: r
                            })),
                        r
                },
                n.prototype.captureMessage = function(n, t, r) {
                    var i = this.J = R(),
                        o = r;
                    if (!r) {
                        var u = void 0;
                        try {
                            throw new Error(n)
                        } catch (n) {
                            u = n
                        }
                        o = {
                            originalException: n,
                            syntheticException: u
                        }
                    }
                    return this.G("captureMessage", n, t, e({},
                            o, {
                                event_id: i
                            })),
                        i
                },
                n.prototype.captureEvent = function(n, t) {
                    var r = this.J = R();
                    return this.G("captureEvent", n, e({},
                            t, {
                                event_id: r
                            })),
                        r
                },
                n.prototype.lastEventId = function() {
                    return this.J
                },
                n.prototype.addBreadcrumb = function(n, t) {
                    var r = this.getStackTop();
                    if (r.scope && r.client) {
                        var i = r.client.getOptions && r.client.getOptions() || {},
                            o = i.beforeBreadcrumb,
                            u = void 0 === o ? null : o,
                            c = i.maxBreadcrumbs,
                            a = void 0 === c ? 100 : c;
                        if (!(a <= 0)) {
                            var s = W(),
                                f = e({
                                        timestamp: s
                                    },
                                    n),
                                h = u ? C(function() {
                                    return u(f, t)
                                }) : f;
                            null !== h && r.scope.addBreadcrumb(h, Math.min(a, 100))
                        }
                    }
                },
                n.prototype.setUser = function(n) {
                    var t = this.getStackTop();
                    t.scope && t.scope.setUser(n)
                },
                n.prototype.setTags = function(n) {
                    var t = this.getStackTop();
                    t.scope && t.scope.setTags(n)
                },
                n.prototype.setExtras = function(n) {
                    var t = this.getStackTop();
                    t.scope && t.scope.setExtras(n)
                },
                n.prototype.setTag = function(n, t) {
                    var r = this.getStackTop();
                    r.scope && r.scope.setTag(n, t)
                },
                n.prototype.setExtra = function(n, t) {
                    var r = this.getStackTop();
                    r.scope && r.scope.setExtra(n, t)
                },
                n.prototype.setContext = function(n, t) {
                    var r = this.getStackTop();
                    r.scope && r.scope.setContext(n, t)
                },
                n.prototype.configureScope = function(n) {
                    var t = this.getStackTop();
                    t.scope && t.client && n(t.scope)
                },
                n.prototype.run = function(n) {
                    var t = Ln(this);
                    try {
                        n(this)
                    } finally {
                        Ln(t)
                    }
                },
                n.prototype.getIntegration = function(n) {
                    var t = this.getClient();
                    if (!t) return null;
                    try {
                        return t.getIntegration(n)
                    } catch (t) {
                        return Q.warn("Cannot retrieve integration " + n.id + " from the current Hub"),
                            null
                    }
                },
                n.prototype.startSpan = function(n, t) {
                    return void 0 === t && (t = !1),
                        this.V("startSpan", n, t)
                },
                n.prototype.traceHeaders = function() {
                    return this.V("traceHeaders")
                },
                n.prototype.V = function(n) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    var e = qn().__SENTRY__;
                    if (e && e.extensions && "function" == typeof e.extensions[n]) return e.extensions[n].apply(this, t);
                    Q.warn("Extension method " + n + " couldn't be found, doing nothing.")
                },
                n
        }();

    function qn() {
        var n = D();
        return n.__SENTRY__ = n.__SENTRY__ || {
                extensions: {},
                hub: void 0
            },
            n
    }

    function Ln(n) {
        var t = qn(),
            r = Fn(t);
        return Wn(t, n),
            r
    }

    function Hn() {
        var n = qn();
        return Pn(n) && !Fn(n).isOlderThan(An) || Wn(n, new Un),
            O() ?
            function(n) {
                try {
                    var t = S(module, "domain"),
                        r = t.active;
                    if (!r) return Fn(n);
                    if (!Pn(r) || Fn(r).isOlderThan(An)) {
                        var e = Fn(n).getStackTop();
                        Wn(r, new Un(e.client, In.clone(e.scope)))
                    }
                    return Fn(r)
                } catch (t) {
                    return Fn(n)
                }
            }(n) : Fn(n)
    }

    function Pn(n) {
        return !!(n && n.__SENTRY__ && n.__SENTRY__.hub)
    }

    function Fn(n) {
        return n && n.__SENTRY__ && n.__SENTRY__.hub ? n.__SENTRY__.hub : (n.__SENTRY__ = n.__SENTRY__ || {},
            n.__SENTRY__.hub = new Un, n.__SENTRY__.hub)
    }

    function Wn(n, t) {
        return !!n && (n.__SENTRY__ = n.__SENTRY__ || {},
            n.__SENTRY__.hub = t, !0)
    }

    function Xn(n) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        var e = Hn();
        if (e && e[n]) return e[n].apply(e, u(t));
        throw new Error("No hub defined or " + n + " was not found on the hub, please open a bug report.")
    }

    function captureException(n) {
        var t;
        try {
            throw new Error("Sentry syntheticException")
        } catch (n) {
            t = n
        }
        return Xn("captureException", n, {
            originalException: n,
            syntheticException: t
        })
    }

    function Bn(n) {
        Xn("withScope", n)
    }
    var $n = function() {
            function n(n) {
                this.dsn = n,
                    this.K = new Nn(n)
            }
            return n.prototype.getDsn = function() {
                    return this.K
                },
                n.prototype.getStoreEndpoint = function() {
                    return "" + this.Y() + this.getStoreEndpointPath()
                },
                n.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                    var n, t = {
                        sentry_key: this.K.user,
                        sentry_version: "7"
                    };
                    return this.getStoreEndpoint() + "?" + (n = t, Object.keys(n).map(function(t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(n[t])
                    }).join("&"))
                },
                n.prototype.Y = function() {
                    var n = this.K,
                        t = n.protocol ? n.protocol + ":" : "",
                        r = n.port ? ":" + n.port : "";
                    return t + "//" + n.host + r
                },
                n.prototype.getStoreEndpointPath = function() {
                    var n = this.K;
                    return (n.path ? "/" + n.path : "") + "/api/" + n.projectId + "/store/"
                },
                n.prototype.getRequestHeaders = function(n, t) {
                    var r = this.K,
                        e = ["Sentry sentry_version=7"];
                    return e.push("sentry_client=" + n + "/" + t),
                        e.push("sentry_key=" + r.user),
                        r.pass && e.push("sentry_secret=" + r.pass), {
                            "Content-Type": "application/json",
                            "X-Sentry-Auth": e.join(", ")
                        }
                },
                n.prototype.getReportDialogEndpoint = function(n) {
                    void 0 === n && (n = {});
                    var t = this.K,
                        r = this.Y() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/",
                        e = [];
                    for (var i in e.push("dsn=" + t.toString()), n)
                        if ("user" === i) {
                            if (!n.user) continue;
                            n.user.name && e.push("name=" + encodeURIComponent(n.user.name)),
                                n.user.email && e.push("email=" + encodeURIComponent(n.user.email))
                        } else e.push(encodeURIComponent(i) + "=" + encodeURIComponent(n[i]));
                    return e.length ? r + "?" + e.join("&") : r
                },
                n
        }(),
        Gn = [];

    function Jn(n) {
        var t = {};
        return function(n) {
                var t = n.defaultIntegrations && u(n.defaultIntegrations) || [],
                    r = n.integrations,
                    e = [];
                if (Array.isArray(r)) {
                    var i = r.map(function(n) {
                            return n.name
                        }),
                        o = [];
                    t.forEach(function(n) {
                            -1 === i.indexOf(n.name) && -1 === o.indexOf(n.name) && (e.push(n), o.push(n.name))
                        }),
                        r.forEach(function(n) {
                            -1 === o.indexOf(n.name) && (e.push(n), o.push(n.name))
                        })
                } else "function" == typeof r ? (e = r(t), e = Array.isArray(e) ? e : [e]) : e = u(t);
                var c = e.map(function(n) {
                    return n.name
                });
                return -1 !== c.indexOf("Debug") && e.push.apply(e, u(e.splice(c.indexOf("Debug"), 1))),
                    e
            }(n).forEach(function(n) {
                t[n.name] = n,
                    function(n) {
                        -1 === Gn.indexOf(n.name) && (n.setupOnce(Mn, Hn), Gn.push(n.name), Q.log("Integration installed: " + n.name))
                    }(n)
            }),
            t
    }
    var zn, Vn = function() {
            function n(n, t) {
                this.Z = {},
                    this.nn = !1,
                    this.tn = new n(t),
                    this.rn = t,
                    t.dsn && (this.en = new Nn(t.dsn))
            }
            return n.prototype.captureException = function(n, t, r) {
                    var e = this,
                        i = t && t.event_id;
                    return this.nn = !0,
                        this.in().eventFromException(n, t).then(function(n) {
                            return e.on(n, t, r)
                        }).then(function(n) {
                            i = n && n.event_id,
                                e.nn = !1
                        }).then(null,
                            function(n) {
                                Q.error(n),
                                    e.nn = !1
                            }),
                        i
                },
                n.prototype.captureMessage = function(n, t, r, e) {
                    var i = this,
                        o = r && r.event_id;
                    return this.nn = !0,
                        (m(n) ? this.in().eventFromMessage("" + n, t, r) : this.in().eventFromException(n, r)).then(function(n) {
                            return i.on(n, r, e)
                        }).then(function(n) {
                            o = n && n.event_id,
                                i.nn = !1
                        }).then(null,
                            function(n) {
                                Q.error(n),
                                    i.nn = !1
                            }),
                        o
                },
                n.prototype.captureEvent = function(n, t, r) {
                    var e = this,
                        i = t && t.event_id;
                    return this.nn = !0,
                        this.on(n, t, r).then(function(n) {
                            i = n && n.event_id,
                                e.nn = !1
                        }).then(null,
                            function(n) {
                                Q.error(n),
                                    e.nn = !1
                            }),
                        i
                },
                n.prototype.getDsn = function() {
                    return this.en
                },
                n.prototype.getOptions = function() {
                    return this.rn
                },
                n.prototype.flush = function(n) {
                    var t = this;
                    return this.un(n).then(function(r) {
                        return clearInterval(r.interval),
                            t.in().getTransport().close(n).then(function(n) {
                                return r.ready && n
                            })
                    })
                },
                n.prototype.close = function(n) {
                    var t = this;
                    return this.flush(n).then(function(n) {
                        return t.getOptions().enabled = !1,
                            n
                    })
                },
                n.prototype.setupIntegrations = function() {
                    this.cn() && (this.Z = Jn(this.rn))
                },
                n.prototype.getIntegration = function(n) {
                    try {
                        return this.Z[n.id] || null
                    } catch (t) {
                        return Q.warn("Cannot retrieve integration " + n.id + " from the current Client"),
                            null
                    }
                },
                n.prototype.un = function(n) {
                    var t = this;
                    return new an(function(r) {
                        var e = 0,
                            i = 0;
                        clearInterval(i),
                            i = setInterval(function() {
                                    t.nn ? (e += 1, n && e >= n && r({
                                        interval: i,
                                        ready: !1
                                    })) : r({
                                        interval: i,
                                        ready: !0
                                    })
                                },
                                1)
                    })
                },
                n.prototype.in = function() {
                    return this.tn
                },
                n.prototype.cn = function() {
                    return !1 !== this.getOptions().enabled && void 0 !== this.en
                },
                n.prototype.an = function(n, t, r) {
                    var i = this,
                        o = this.getOptions(),
                        u = o.environment,
                        c = o.release,
                        a = o.dist,
                        s = o.maxValueLength,
                        f = void 0 === s ? 250 : s,
                        h = o.normalizeDepth,
                        v = void 0 === h ? 3 : h,
                        l = e({},
                            n);
                    void 0 === l.environment && void 0 !== u && (l.environment = u),
                        void 0 === l.release && void 0 !== c && (l.release = c),
                        void 0 === l.dist && void 0 !== a && (l.dist = a),
                        l.message && (l.message = j(l.message, f));
                    var d = l.exception && l.exception.values && l.exception.values[0];
                    d && d.value && (d.value = j(d.value, f));
                    var p = l.request;
                    p && p.url && (p.url = j(p.url, f)),
                        void 0 === l.event_id && (l.event_id = r && r.event_id ? r.event_id : R()),
                        this.sn(l.sdk);
                    var y = an.resolve(l);
                    return t && (y = t.applyToEvent(l, r)),
                        y.then(function(n) {
                            return "number" == typeof v && v > 0 ? i.fn(n, v) : n
                        })
                },
                n.prototype.fn = function(n, t) {
                    return n ? e({},
                        n, n.breadcrumbs && {
                            breadcrumbs: n.breadcrumbs.map(function(n) {
                                return e({},
                                    n, n.data && {
                                        data: un(n.data, t)
                                    })
                            })
                        },
                        n.user && {
                            user: un(n.user, t)
                        },
                        n.contexts && {
                            contexts: un(n.contexts, t)
                        },
                        n.extra && {
                            extra: un(n.extra, t)
                        }) : null
                },
                n.prototype.sn = function(n) {
                    var t = Object.keys(this.Z);
                    n && t.length > 0 && (n.integrations = t)
                },
                n.prototype.on = function(n, t, r) {
                    var e = this,
                        i = this.getOptions(),
                        o = i.beforeSend,
                        u = i.sampleRate;
                    return this.cn() ? "number" == typeof u && Math.random() > u ? an.reject("This event has been sampled, will not send event.") : new an(function(i, u) {
                        e.an(n, r, t).then(function(n) {
                            if (null !== n) {
                                var r = n;
                                if (t && t.data && !0 === t.data.__sentry__ || !o) return e.in().sendEvent(r),
                                    void i(r);
                                var c = o(n, t);
                                if (void 0 === c) Q.error("`beforeSend` method has to return `null` or a valid event.");
                                else if (E(c)) e.hn(c, i, u);
                                else {
                                    if (null === (r = c)) return Q.log("`beforeSend` returned `null`, will not send event."),
                                        void i(null);
                                    e.in().sendEvent(r),
                                        i(r)
                                }
                            } else u("An event processor returned null, will not send event.")
                        }).then(null,
                            function(n) {
                                e.captureException(n, {
                                        data: {
                                            __sentry__: !0
                                        },
                                        originalException: n
                                    }),
                                    u("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + n)
                            })
                    }) : an.reject("SDK not enabled, will not send event.")
                },
                n.prototype.hn = function(n, t, r) {
                    var e = this;
                    n.then(function(n) {
                        null !== n ? (e.in().sendEvent(n), t(n)) : r("`beforeSend` returned `null`, will not send event.")
                    }).then(null,
                        function(n) {
                            r("beforeSend rejected with " + n)
                        })
                },
                n
        }(),
        Kn = function() {
            function t() {}
            return t.prototype.sendEvent = function(t) {
                    return an.resolve({
                        reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                        status: n.Status.Skipped
                    })
                },
                t.prototype.close = function(n) {
                    return an.resolve(!0)
                },
                t
        }(),
        Qn = function() {
            function n(n) {
                this.rn = n,
                    this.rn.dsn || Q.warn("No DSN provided, backend will not do anything."),
                    this.vn = this.ln()
            }
            return n.prototype.ln = function() {
                    return new Kn
                },
                n.prototype.eventFromException = function(n, t) {
                    throw new v("Backend has to implement `eventFromException` method")
                },
                n.prototype.eventFromMessage = function(n, t, r) {
                    throw new v("Backend has to implement `eventFromMessage` method")
                },
                n.prototype.sendEvent = function(n) {
                    this.vn.sendEvent(n).then(null,
                        function(n) {
                            Q.error("Error while sending event: " + n)
                        })
                },
                n.prototype.getTransport = function() {
                    return this.vn
                },
                n
        }();
    var Yn = function() {
            function n() {
                this.name = n.id
            }
            return n.prototype.setupOnce = function() {
                    zn = Function.prototype.toString,
                        Function.prototype.toString = function() {
                            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                            var r = this.__sentry_original__ || this;
                            return zn.apply(r, n)
                        }
                },
                n.id = "FunctionToString",
                n
        }(),
        Zn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        nt = function() {
            function n(t) {
                void 0 === t && (t = {}),
                    this.rn = t,
                    this.name = n.id
            }
            return n.prototype.setupOnce = function() {
                    Mn(function(t) {
                        var r = Hn();
                        if (!r) return t;
                        var e = r.getIntegration(n);
                        if (e) {
                            var i = r.getClient(),
                                o = i ? i.getOptions() : {},
                                u = e.dn(o);
                            if (e.pn(t, u)) return null
                        }
                        return t
                    })
                },
                n.prototype.pn = function(n, t) {
                    return this.yn(n, t) ? (Q.warn("Event dropped due to being internal Sentry Error.\nEvent: " + I(n)), !0) : this.mn(n, t) ? (Q.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + I(n)), !0) : this.bn(n, t) ? (Q.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + I(n) + ".\nUrl: " + this.wn(n)), !0) : !this.gn(n, t) && (Q.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + I(n) + ".\nUrl: " + this.wn(n)), !0)
                },
                n.prototype.yn = function(n, t) {
                    if (void 0 === t && (t = {}), !t.ignoreInternal) return !1;
                    try {
                        return n && n.exception && n.exception.values && n.exception.values[0] && "SentryError" === n.exception.values[0].type || !1
                    } catch (n) {
                        return !1
                    }
                },
                n.prototype.mn = function(n, t) {
                    return void 0 === t && (t = {}), !(!t.ignoreErrors || !t.ignoreErrors.length) && this.En(n).some(function(n) {
                        return t.ignoreErrors.some(function(t) {
                            return _(n, t)
                        })
                    })
                },
                n.prototype.bn = function(n, t) {
                    if (void 0 === t && (t = {}), !t.blacklistUrls || !t.blacklistUrls.length) return !1;
                    var r = this.wn(n);
                    return !!r && t.blacklistUrls.some(function(n) {
                        return _(r, n)
                    })
                },
                n.prototype.gn = function(n, t) {
                    if (void 0 === t && (t = {}), !t.whitelistUrls || !t.whitelistUrls.length) return !0;
                    var r = this.wn(n);
                    return !r || t.whitelistUrls.some(function(n) {
                        return _(r, n)
                    })
                },
                n.prototype.dn = function(n) {
                    return void 0 === n && (n = {}), {
                        blacklistUrls: u(this.rn.blacklistUrls || [], n.blacklistUrls || []),
                        ignoreErrors: u(this.rn.ignoreErrors || [], n.ignoreErrors || [], Zn),
                        ignoreInternal: void 0 === this.rn.ignoreInternal || this.rn.ignoreInternal,
                        whitelistUrls: u(this.rn.whitelistUrls || [], n.whitelistUrls || [])
                    }
                },
                n.prototype.En = function(n) {
                    if (n.message) return [n.message];
                    if (n.exception) try {
                        var t = n.exception.values && n.exception.values[0] || {},
                            r = t.type,
                            e = void 0 === r ? "" : r,
                            i = t.value,
                            o = void 0 === i ? "" : i;
                        return ["" + o, e + ": " + o]
                    } catch (t) {
                        return Q.error("Cannot extract message for event " + I(n)), []
                    }
                    return []
                },
                n.prototype.wn = function(n) {
                    try {
                        if (n.stacktrace) {
                            var t = n.stacktrace.frames;
                            return t && t[t.length - 1].filename || null
                        }
                        if (n.exception) {
                            var r = n.exception.values && n.exception.values[0].stacktrace && n.exception.values[0].stacktrace.frames;
                            return r && r[r.length - 1].filename || null
                        }
                        return null
                    } catch (t) {
                        return Q.error("Cannot extract url for event " + I(n)),
                            null
                    }
                },
                n.id = "InboundFilters",
                n
        }(),
        tt = Object.freeze({
            FunctionToString: Yn,
            InboundFilters: nt
        }),
        rt = "?",
        et = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        it = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        ot = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ut = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        ct = /\((\S*)(?::(\d+))(?::(\d+))\)/;

    function at(n) {
        var t = null,
            r = n && n.framesToPop;
        try {
            if (t = function(n) {
                    if (!n || !n.stacktrace) return null;
                    for (var t, r = n.stacktrace,
                            e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                            i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                            o = r.split("\n"), u = [], c = 0; c < o.length; c += 2) {
                        var a = null;
                        (t = e.exec(o[c])) ? a = {
                                url: t[2],
                                func: t[3],
                                args: [],
                                line: +t[1],
                                column: null
                            }: (t = i.exec(o[c])) && (a = {
                                url: t[6],
                                func: t[3] || t[4],
                                args: t[5] ? t[5].split(",") : [],
                                line: +t[1],
                                column: +t[2]
                            }),
                            a && (!a.func && a.line && (a.func = rt), u.push(a))
                    }
                    if (!u.length) return null;
                    return {
                        message: ft(n),
                        name: n.name,
                        stack: u
                    }
                }(n)) return st(t, r)
        } catch (n) {}
        try {
            if (t = function(n) {
                    if (!n || !n.stack) return null;
                    for (var t, r, e, i = [], o = n.stack.split("\n"), u = 0; u < o.length; ++u) {
                        if (r = et.exec(o[u])) {
                            var c = r[2] && 0 === r[2].indexOf("native");
                            r[2] && 0 === r[2].indexOf("eval") && (t = ct.exec(r[2])) && (r[2] = t[1], r[3] = t[2], r[4] = t[3]),
                                e = {
                                    url: r[2] && 0 === r[2].indexOf("address at ") ? r[2].substr("address at ".length) : r[2],
                                    func: r[1] || rt,
                                    args: c ? [r[2]] : [],
                                    line: r[3] ? +r[3] : null,
                                    column: r[4] ? +r[4] : null
                                }
                        } else if (r = ot.exec(o[u])) e = {
                            url: r[2],
                            func: r[1] || rt,
                            args: [],
                            line: +r[3],
                            column: r[4] ? +r[4] : null
                        };
                        else {
                            if (!(r = it.exec(o[u]))) continue;
                            r[3] && r[3].indexOf(" > eval") > -1 && (t = ut.exec(r[3])) ? (r[1] = r[1] || "eval", r[3] = t[1], r[4] = t[2], r[5] = "") : 0 !== u || r[5] || void 0 === n.columnNumber || (i[0].column = n.columnNumber + 1),
                                e = {
                                    url: r[3],
                                    func: r[1] || rt,
                                    args: r[2] ? r[2].split(",") : [],
                                    line: r[4] ? +r[4] : null,
                                    column: r[5] ? +r[5] : null
                                }
                        }!e.func && e.line && (e.func = rt),
                            i.push(e)
                    }
                    if (!i.length) return null;
                    return {
                        message: ft(n),
                        name: n.name,
                        stack: i
                    }
                }(n)) return st(t, r)
        } catch (n) {}
        return {
            message: ft(n),
            name: n && n.name,
            stack: [],
            failed: !0
        }
    }

    function st(n, t) {
        try {
            return e({},
                n, {
                    stack: n.stack.slice(t)
                })
        } catch (t) {
            return n
        }
    }

    function ft(n) {
        var t = n && n.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }
    var ht = 50;

    function vt(n) {
        var t = dt(n.stack),
            r = {
                type: n.name,
                value: n.message
            };
        return t && t.length && (r.stacktrace = {
                frames: t
            }),
            void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
            r
    }

    function lt(n) {
        return {
            exception: {
                values: [vt(n)]
            }
        }
    }

    function dt(n) {
        if (!n || !n.length) return [];
        var t = n,
            r = t[0].func || "",
            e = t[t.length - 1].func || "";
        return -1 === r.indexOf("captureMessage") && -1 === r.indexOf("captureException") || (t = t.slice(1)), -1 !== e.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
            t.map(function(n) {
                return {
                    colno: null === n.column ? void 0 : n.column,
                    filename: n.url || t[0].url,
                    function: n.func || "?",
                    in_app: !0,
                    lineno: null === n.line ? void 0 : n.line
                }
            }).slice(0, ht).reverse()
    }

    function pt(n, t, r) {
        var e, i;
        if (void 0 === r && (r = {}), d(n) && n.error) return e = lt(at(n = n.error));
        if (p(n) || (i = n, "[object DOMException]" === Object.prototype.toString.call(i))) {
            var o = n,
                u = o.name || (p(o) ? "DOMError" : "DOMException"),
                c = o.message ? u + ": " + o.message : u;
            return M(e = yt(c, t, r), c),
                e
        }
        return l(n) ? e = lt(at(n)) : b(n) || w(n) ? (A(e = function(n, t, r) {
            var e = {
                exception: {
                    values: [{
                        type: w(n) ? n.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (r ? "promise rejection" : "exception") + " captured with keys: " + cn(n)
                    }]
                },
                extra: {
                    __serialized__: rn(n)
                }
            };
            if (t) {
                var i = dt(at(t).stack);
                e.stacktrace = {
                    frames: i
                }
            }
            return e
        }(n, t, r.rejection), {
            synthetic: !0
        }), e) : (M(e = yt(n, t, r), "" + n, void 0), A(e, {
            synthetic: !0
        }), e)
    }

    function yt(n, t, r) {
        void 0 === r && (r = {});
        var e = {
            message: n
        };
        if (r.attachStacktrace && t) {
            var i = dt(at(t).stack);
            e.stacktrace = {
                frames: i
            }
        }
        return e
    }
    var mt = function() {
            function n(n) {
                this.options = n,
                    this._ = new sn(30),
                    this.url = new $n(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
            }
            return n.prototype.sendEvent = function(n) {
                    throw new v("Transport Class has to implement `sendEvent` method")
                },
                n.prototype.close = function(n) {
                    return this._.drain(n)
                },
                n
        }(),
        bt = D(),
        wt = function(t) {
            function e() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.xn = new Date(Date.now()),
                    n
            }
            return r(e, t),
                e.prototype.sendEvent = function(t) {
                    var r = this;
                    if (new Date(Date.now()) < this.xn) return Promise.reject({
                        event: t,
                        reason: "Transport locked till " + this.xn + " due to too many requests.",
                        status: 429
                    });
                    var e = {
                        body: JSON.stringify(t),
                        method: "POST",
                        referrerPolicy: vn() ? "origin" : ""
                    };
                    return void 0 !== this.options.headers && (e.headers = this.options.headers),
                        this._.add(new an(function(t, i) {
                            bt.fetch(r.url, e).then(function(e) {
                                var o = n.Status.fromHttpCode(e.status);
                                if (o !== n.Status.Success) {
                                    if (o === n.Status.RateLimit) {
                                        var u = Date.now();
                                        r.xn = new Date(u + B(u, e.headers.get("Retry-After"))),
                                            Q.warn("Too many requests, backing off till: " + r.xn)
                                    }
                                    i(e)
                                } else t({
                                    status: o
                                })
                            }).
                            catch(i)
                        }))
                },
                e
        }(mt),
        gt = function(t) {
            function e() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.xn = new Date(Date.now()),
                    n
            }
            return r(e, t),
                e.prototype.sendEvent = function(t) {
                    var r = this;
                    return new Date(Date.now()) < this.xn ? Promise.reject({
                        event: t,
                        reason: "Transport locked till " + this.xn + " due to too many requests.",
                        status: 429
                    }) : this._.add(new an(function(e, i) {
                        var o = new XMLHttpRequest;
                        for (var u in o.onreadystatechange = function() {
                                    if (4 === o.readyState) {
                                        var t = n.Status.fromHttpCode(o.status);
                                        if (t !== n.Status.Success) {
                                            if (t === n.Status.RateLimit) {
                                                var u = Date.now();
                                                r.xn = new Date(u + B(u, o.getResponseHeader("Retry-After"))),
                                                    Q.warn("Too many requests, backing off till: " + r.xn)
                                            }
                                            i(o)
                                        } else e({
                                            status: t
                                        })
                                    }
                                },
                                o.open("POST", r.url), r.options.headers) r.options.headers.hasOwnProperty(u) && o.setRequestHeader(u, r.options.headers[u]);
                        o.send(JSON.stringify(t))
                    }))
                },
                e
        }(mt),
        Et = Object.freeze({
            BaseTransport: mt,
            FetchTransport: wt,
            XHRTransport: gt
        }),
        xt = function(t) {
            function i() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r(i, t),
                i.prototype.ln = function() {
                    if (!this.rn.dsn) return t.prototype.ln.call(this);
                    var n = e({},
                        this.rn.transportOptions, {
                            dsn: this.rn.dsn
                        });
                    return this.rn.transport ? new this.rn.transport(n) : fn() ? new wt(n) : new gt(n)
                },
                i.prototype.eventFromException = function(t, r) {
                    var e = pt(t, r && r.syntheticException || void 0, {
                        attachStacktrace: this.rn.attachStacktrace
                    });
                    return A(e, {
                            handled: !0,
                            type: "generic"
                        }),
                        e.level = n.Severity.Error,
                        r && r.event_id && (e.event_id = r.event_id),
                        an.resolve(e)
                },
                i.prototype.eventFromMessage = function(t, r, e) {
                    void 0 === r && (r = n.Severity.Info);
                    var i = yt(t, e && e.syntheticException || void 0, {
                        attachStacktrace: this.rn.attachStacktrace
                    });
                    return i.level = r,
                        e && e.event_id && (i.event_id = e.event_id),
                        an.resolve(i)
                },
                i
        }(Qn),
        jt = "sentry.javascript.browser",
        kt = function(n) {
            function t(t) {
                return void 0 === t && (t = {}),
                    n.call(this, xt, t) || this
            }
            return r(t, n),
                t.prototype.an = function(t, r, i) {
                    return t.platform = t.platform || "javascript",
                        t.sdk = e({},
                            t.sdk, {
                                name: jt,
                                packages: u(t.sdk && t.sdk.packages || [], [{
                                    name: "npm:@sentry/browser",
                                    version: "5.15.0"
                                }]),
                                version: "5.15.0"
                            }),
                        n.prototype.an.call(this, t, r, i)
                },
                t.prototype.showReportDialog = function(n) {
                    void 0 === n && (n = {});
                    var t = D().document;
                    if (t)
                        if (this.cn()) {
                            var r = n.dsn || this.getDsn();
                            if (n.eventId)
                                if (r) {
                                    var e = t.createElement("script");
                                    e.async = !0,
                                        e.src = new $n(r).getReportDialogEndpoint(n),
                                        n.onLoad && (e.onload = n.onLoad),
                                        (t.head || t.body).appendChild(e)
                                } else Q.error("Missing `Dsn` option in showReportDialog call");
                            else Q.error("Missing `eventId` option in showReportDialog call")
                        } else Q.error("Trying to call showReportDialog with Sentry Client is disabled")
                },
                t
        }(Vn),
        _t = 0;

    function St() {
        return _t > 0
    }

    function Ot(n, t, r) {
        if (void 0 === t && (t = {}), "function" != typeof n) return n;
        try {
            if (n.__sentry__) return n;
            if (n.__sentry_wrapped__) return n.__sentry_wrapped__
        } catch (t) {
            return n
        }
        var sentryWrapped = function() {
            var i = Array.prototype.slice.call(arguments);
            try {
                r && "function" == typeof r && r.apply(this, arguments);
                var o = i.map(function(n) {
                    return Ot(n, t)
                });
                return n.handleEvent ? n.handleEvent.apply(this, o) : n.apply(this, o)
            } catch (n) {
                throw _t += 1,
                    setTimeout(function() {
                        _t -= 1
                    }),
                    Bn(function(r) {
                        r.addEventProcessor(function(n) {
                                var r = e({},
                                    n);
                                return t.mechanism && (M(r, void 0, void 0), A(r, t.mechanism)),
                                    r.extra = e({},
                                        r.extra, {
                                            arguments: i
                                        }),
                                    r
                            }),
                            captureException(n)
                    }),
                    n
            }
        };
        try {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (sentryWrapped[i] = n[i])
        } catch (n) {}
        n.prototype = n.prototype || {},
            sentryWrapped.prototype = n.prototype,
            Object.defineProperty(n, "__sentry_wrapped__", {
                enumerable: !1,
                value: sentryWrapped
            }),
            Object.defineProperties(sentryWrapped, {
                __sentry__: {
                    enumerable: !1,
                    value: !0
                },
                __sentry_original__: {
                    enumerable: !1,
                    value: n
                }
            });
        try {
            Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable && Object.defineProperty(sentryWrapped, "name", {
                get: function() {
                    return n.name
                }
            })
        } catch (n) {}
        return sentryWrapped
    }
    var Tt = function() {
            function t(n) {
                this.name = t.id,
                    this.jn = !1,
                    this.kn = !1,
                    this.rn = e({
                            onerror: !0,
                            onunhandledrejection: !0
                        },
                        n)
            }
            return t.prototype.setupOnce = function() {
                    Error.stackTraceLimit = 50,
                        this.rn.onerror && (Q.log("Global Handler attached: onerror"), this._n()),
                        this.rn.onunhandledrejection && (Q.log("Global Handler attached: onunhandledrejection"), this.Sn())
                },
                t.prototype._n = function() {
                    var n = this;
                    this.jn || (bn({
                        callback: function(r) {
                            var e = r.error,
                                i = Hn(),
                                o = i.getIntegration(t),
                                u = e && !0 === e.__sentry_own_request__;
                            if (o && !St() && !u) {
                                var c = i.getClient(),
                                    a = m(e) ? n.On(r.msg, r.url, r.line, r.column) : n.Tn(pt(e, void 0, {
                                        attachStacktrace: c && c.getOptions().attachStacktrace,
                                        rejection: !1
                                    }), r.url, r.line, r.column);
                                A(a, {
                                        handled: !1,
                                        type: "onerror"
                                    }),
                                    i.captureEvent(a, {
                                        originalException: e
                                    })
                            }
                        },
                        type: "error"
                    }), this.jn = !0)
                },
                t.prototype.Sn = function() {
                    var r = this;
                    this.kn || (bn({
                        callback: function(e) {
                            var i = e;
                            try {
                                "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason)
                            } catch (n) {}
                            var o = Hn(),
                                u = o.getIntegration(t),
                                c = i && !0 === i.__sentry_own_request__;
                            if (!u || St() || c) return !0;
                            var a = o.getClient(),
                                s = m(i) ? r.Dn(i) : pt(i, void 0, {
                                    attachStacktrace: a && a.getOptions().attachStacktrace,
                                    rejection: !0
                                });
                            s.level = n.Severity.Error,
                                A(s, {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }),
                                o.captureEvent(s, {
                                    originalException: i
                                })
                        },
                        type: "unhandledrejection"
                    }), this.kn = !0)
                },
                t.prototype.On = function(n, t, r, e) {
                    var i, o = d(n) ? n.message : n;
                    if (y(o)) {
                        var u = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        u && (i = u[1], o = u[2])
                    }
                    var c = {
                        exception: {
                            values: [{
                                type: i || "Error",
                                value: o
                            }]
                        }
                    };
                    return this.Tn(c, t, r, e)
                },
                t.prototype.Dn = function(n) {
                    return {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: "Non-Error promise rejection captured with value: " + n
                            }]
                        }
                    }
                },
                t.prototype.Tn = function(n, t, r, e) {
                    n.exception = n.exception || {},
                        n.exception.values = n.exception.values || [],
                        n.exception.values[0] = n.exception.values[0] || {},
                        n.exception.values[0].stacktrace = n.exception.values[0].stacktrace || {},
                        n.exception.values[0].stacktrace.frames = n.exception.values[0].stacktrace.frames || [];
                    var i = isNaN(parseInt(e, 10)) ? void 0 : e,
                        o = isNaN(parseInt(r, 10)) ? void 0 : r,
                        u = y(t) && t.length > 0 ? t : function() {
                            try {
                                return document.location.href
                            } catch (n) {
                                return ""
                            }
                        }();
                    return 0 === n.exception.values[0].stacktrace.frames.length && n.exception.values[0].stacktrace.frames.push({
                            colno: i,
                            filename: u,
                            function: "?",
                            in_app: !0,
                            lineno: o
                        }),
                        n
                },
                t.id = "GlobalHandlers",
                t
        }(),
        Dt = function() {
            function n() {
                this.Rn = 0,
                    this.name = n.id
            }
            return n.prototype.Nn = function(n) {
                    return function() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        var e = t[0];
                        return t[0] = Ot(e, {
                                mechanism: {
                                    data: {
                                        function: G(n)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }),
                            n.apply(this, t)
                    }
                },
                n.prototype.In = function(n) {
                    return function(t) {
                        return n(Ot(t, {
                            mechanism: {
                                data: {
                                    function: "requestAnimationFrame",
                                    handler: G(n)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    }
                },
                n.prototype.Cn = function(n) {
                    var t = D(),
                        r = t[n] && t[n].prototype;
                    r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (Z(r, "addEventListener",
                        function(t) {
                            return function(r, e, i) {
                                try {
                                    "function" == typeof e.handleEvent && (e.handleEvent = Ot(e.handleEvent.bind(e), {
                                        mechanism: {
                                            data: {
                                                function: "handleEvent",
                                                handler: G(e),
                                                target: n
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }))
                                } catch (n) {}
                                return t.call(this, r, Ot(e, {
                                    mechanism: {
                                        data: {
                                            function: "addEventListener",
                                            handler: G(e),
                                            target: n
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), i)
                            }
                        }), Z(r, "removeEventListener",
                        function(n) {
                            return function(t, r, e) {
                                var i = r;
                                try {
                                    i = i && (i.__sentry_wrapped__ || i)
                                } catch (n) {}
                                return n.call(this, t, i, e)
                            }
                        }))
                },
                n.prototype.Mn = function(n) {
                    return function() {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        var e = this;
                        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(n) {
                                n in e && "function" == typeof e[n] && Z(e, n,
                                    function(t) {
                                        var r = {
                                            mechanism: {
                                                data: {
                                                    function: n,
                                                    handler: G(t)
                                                },
                                                handled: !0,
                                                type: "instrument"
                                            }
                                        };
                                        return t.__sentry_original__ && (r.mechanism.data.handler = G(t.__sentry_original__)),
                                            Ot(t, r)
                                    })
                            }),
                            n.apply(this, t)
                    }
                },
                n.prototype.setupOnce = function() {
                    this.Rn = this.Rn;
                    var n = D();
                    Z(n, "setTimeout", this.Nn.bind(this)),
                        Z(n, "setInterval", this.Nn.bind(this)),
                        Z(n, "requestAnimationFrame", this.In.bind(this)),
                        "XMLHttpRequest" in n && Z(XMLHttpRequest.prototype, "send", this.Mn.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this.Cn.bind(this))
                },
                n.id = "TryCatch",
                n
        }(),
        Rt = function() {
            function t(n) {
                this.name = t.id,
                    this.rn = e({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        },
                        n)
            }
            return t.prototype.An = function(t) {
                    var r = {
                        category: "console",
                        data: {
                            arguments: t.args,
                            logger: "console"
                        },
                        level: n.Severity.fromString(t.level),
                        message: k(t.args, " ")
                    };
                    if ("assert" === t.level) {
                        if (!1 !== t.args[0]) return;
                        r.message = "Assertion failed: " + (k(t.args.slice(1), " ") || "console.assert"),
                            r.data.arguments = t.args.slice(1)
                    }
                    Hn().addBreadcrumb(r, {
                        input: t.args,
                        level: t.level
                    })
                },
                t.prototype.Un = function(n) {
                    var t;
                    try {
                        t = n.event.target ? U(n.event.target) : U(n.event)
                    } catch (n) {
                        t = "<unknown>"
                    }
                    0 !== t.length && Hn().addBreadcrumb({
                        category: "ui." + n.name,
                        message: t
                    }, {
                        event: n.event,
                        name: n.name
                    })
                },
                t.prototype.qn = function(n) {
                    if (n.endTimestamp) {
                        if (n.xhr.__sentry_own_request__) return;
                        Hn().addBreadcrumb({
                            category: "xhr",
                            data: n.xhr.__sentry_xhr__,
                            type: "http"
                        }, {
                            xhr: n.xhr
                        })
                    } else this.rn.sentry && n.xhr.__sentry_own_request__ && Nt(n.args[0])
                },
                t.prototype.Ln = function(t) {
                    if (t.endTimestamp) {
                        var r = Hn().getClient(),
                            i = r && r.getDsn();
                        if (this.rn.sentry && i) {
                            var o = new $n(i).getStoreEndpoint();
                            if (o && -1 !== t.fetchData.url.indexOf(o) && "POST" === t.fetchData.method && t.args[1] && t.args[1].body) return void Nt(t.args[1].body)
                        }
                        t.error ? Hn().addBreadcrumb({
                            category: "fetch",
                            data: e({},
                                t.fetchData, {
                                    status_code: t.response.status
                                }),
                            level: n.Severity.Error,
                            type: "http"
                        }, {
                            data: t.error,
                            input: t.args
                        }) : Hn().addBreadcrumb({
                            category: "fetch",
                            data: e({},
                                t.fetchData, {
                                    status_code: t.response.status
                                }),
                            type: "http"
                        }, {
                            input: t.args,
                            response: t.response
                        })
                    }
                },
                t.prototype.Hn = function(n) {
                    var t = D(),
                        r = n.from,
                        e = n.to,
                        i = N(t.location.href),
                        o = N(r),
                        u = N(e);
                    o.path || (o = i),
                        i.protocol === u.protocol && i.host === u.host && (e = u.relative),
                        i.protocol === o.protocol && i.host === o.host && (r = o.relative),
                        Hn().addBreadcrumb({
                            category: "navigation",
                            data: {
                                from: r,
                                to: e
                            }
                        })
                },
                t.prototype.setupOnce = function() {
                    var n = this;
                    this.rn.console && bn({
                            callback: function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                n.An.apply(n, u(t))
                            },
                            type: "console"
                        }),
                        this.rn.dom && bn({
                            callback: function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                n.Un.apply(n, u(t))
                            },
                            type: "dom"
                        }),
                        this.rn.xhr && bn({
                            callback: function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                n.qn.apply(n, u(t))
                            },
                            type: "xhr"
                        }),
                        this.rn.fetch && bn({
                            callback: function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                n.Ln.apply(n, u(t))
                            },
                            type: "fetch"
                        }),
                        this.rn.history && bn({
                            callback: function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                n.Hn.apply(n, u(t))
                            },
                            type: "history"
                        })
                },
                t.id = "Breadcrumbs",
                t
        }();

    function Nt(t) {
        try {
            var r = JSON.parse(t);
            Hn().addBreadcrumb({
                category: "sentry." + ("transaction" === r.type ? "transaction" : "event"),
                event_id: r.event_id,
                level: r.level || n.Severity.fromString("error"),
                message: I(r)
            }, {
                event: r
            })
        } catch (n) {
            Q.error("Error while adding sentry type breadcrumb")
        }
    }
    var It = "cause",
        Ct = 5,
        Mt = function() {
            function n(t) {
                void 0 === t && (t = {}),
                    this.name = n.id,
                    this.Pn = t.key || It,
                    this.k = t.limit || Ct
            }
            return n.prototype.setupOnce = function() {
                    Mn(function(t, r) {
                        var e = Hn().getIntegration(n);
                        return e ? e.Fn(t, r) : t
                    })
                },
                n.prototype.Fn = function(n, t) {
                    if (!(n.exception && n.exception.values && t && x(t.originalException, Error))) return n;
                    var r = this.Wn(t.originalException, this.Pn);
                    return n.exception.values = u(r, n.exception.values),
                        n
                },
                n.prototype.Wn = function(n, t, r) {
                    if (void 0 === r && (r = []), !x(n[t], Error) || r.length + 1 >= this.k) return r;
                    var e = vt(at(n[t]));
                    return this.Wn(n[t], t, u([e], r))
                },
                n.id = "LinkedErrors",
                n
        }(),
        At = D(),
        Ut = function() {
            function n() {
                this.name = n.id
            }
            return n.prototype.setupOnce = function() {
                    Mn(function(t) {
                        if (Hn().getIntegration(n)) {
                            if (!At.navigator || !At.location) return t;
                            var r = t.request || {};
                            return r.url = r.url || At.location.href,
                                r.headers = r.headers || {},
                                r.headers["User-Agent"] = At.navigator.userAgent,
                                e({},
                                    t, {
                                        request: r
                                    })
                        }
                        return t
                    })
                },
                n.id = "UserAgent",
                n
        }(),
        qt = Object.freeze({
            GlobalHandlers: Tt,
            TryCatch: Dt,
            Breadcrumbs: Rt,
            LinkedErrors: Mt,
            UserAgent: Ut
        }),
        Lt = [new nt, new Yn, new Dt, new Rt, new Tt, new Mt, new Ut];
    var Ht = {},
        Pt = D();
    Pt.Sentry && Pt.Sentry.Integrations && (Ht = Pt.Sentry.Integrations);
    var Ft = e({},
        Ht, tt, qt);
    return n.BrowserClient = kt,
        n.Hub = Un,
        n.Integrations = Ft,
        n.SDK_NAME = jt,
        n.SDK_VERSION = "5.15.0",
        n.Scope = In,
        n.Transports = Et,
        n.addBreadcrumb = function(n) {
            Xn("addBreadcrumb", n)
        },
        n.addGlobalEventProcessor = Mn,
        n.captureEvent = function(n) {
            return Xn("captureEvent", n)
        },
        n.captureException = captureException,
        n.captureMessage = function(n, t) {
            var r;
            try {
                throw new Error(n)
            } catch (n) {
                r = n
            }
            return Xn("captureMessage", n, t, {
                originalException: n,
                syntheticException: r
            })
        },
        n.close = function(n) {
            var t = Hn().getClient();
            return t ? t.close(n) : an.reject(!1)
        },
        n.configureScope = function(n) {
            Xn("configureScope", n)
        },
        n.defaultIntegrations = Lt,
        n.flush = function(n) {
            var t = Hn().getClient();
            return t ? t.flush(n) : an.reject(!1)
        },
        n.forceLoad = function() {},
        n.getCurrentHub = Hn,
        n.getHubFromCarrier = Fn,
        n.init = function(n) {
            if (void 0 === n && (n = {}), void 0 === n.defaultIntegrations && (n.defaultIntegrations = Lt), void 0 === n.release) {
                var t = D();
                t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (n.release = t.SENTRY_RELEASE.id)
            }!
            function(n, t) {
                !0 === t.debug && Q.enable();
                var r = Hn(),
                    e = new n(t);
                r.bindClient(e)
            }(kt, n)
        },
        n.lastEventId = function() {
            return Hn().lastEventId()
        },
        n.onLoad = function(n) {
            n()
        },
        n.setContext = function(n, t) {
            Xn("setContext", n, t)
        },
        n.setExtra = function(n, t) {
            Xn("setExtra", n, t)
        },
        n.setExtras = function(n) {
            Xn("setExtras", n)
        },
        n.setTag = function(n, t) {
            Xn("setTag", n, t)
        },
        n.setTags = function(n) {
            Xn("setTags", n)
        },
        n.setUser = function(n) {
            Xn("setUser", n)
        },
        n.showReportDialog = function(n) {
            void 0 === n && (n = {}),
                n.eventId || (n.eventId = Hn().lastEventId());
            var t = Hn().getClient();
            t && t.showReportDialog(n)
        },
        n.withScope = Bn,
        n.wrap = function(n) {
            return Ot(n)()
        },
        n
}({});