var $jscomp = $jscomp || {};
$jscomp.scope = {};


$jscomp.getGlobal = function(k) {
    return "undefined" != typeof window && window === k ? k : "undefined" != typeof global && null != global ? global : k
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(k, B, x, L) {
    if (B) {
        x = $jscomp.global;
        k = k.split(".");
        for (L = 0; L < k.length - 1; L++) {
            var G = k[L];
            G in x || (x[G] = {});
            x = x[G]
        }
        k = k[k.length - 1];
        L = x[k];
        B = B(L);
        B != L && null != B && $jscomp.defineProperty(x, k, {
            configurable: !0,
            writable: !0,
            value: B
        })
    }
};

(function(k, B) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = k.document ? B(k, !0) : function(k) {
        if (!k.document) throw Error("jQuery requires a window with a document");
        return B(k)
    } : B(k)
})("undefined" !== typeof window ? window : this, function(k, B) {
    function x(a) {
        var b = !!a && "length" in a && a.length,
            c = d.type(a);
        return "function" === c || d.isWindow(a) ? !1 : "array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function L(a, b, c) {
        if (d.isFunction(b)) return d.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return d.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" === typeof b) {
            if (Jb.test(b)) return d.filter(b, a, c);
            b = d.filter(b, a)
        }
        return d.grep(a, function(a) {
            return -1 < Ea.call(b, a) !== c
        })
    }

    function G(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function M(a) {
        var b = {};
        d.each(a.match(R) || [], function(a, d) {
            b[d] = !0
        });
        return b
    }

    function S() {
        r.removeEventListener("DOMContentLoaded", S);
        k.removeEventListener("load", S);
        d.ready()
    }

    function y() {
        this.expando = d.expando + y.uid++
    }

    function n(a, b, c) {
        if (void 0 === c && 1 === a.nodeType)
            if (c = "data-" + b.replace(ab, "-$&").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Kb.test(c) ? d.parseJSON(c) : c
                } catch (e) {}
                D.set(a, b, c)
            } else c = void 0;
        return c
    }

    function t(a, b, c, e) {
        var f, g = 1,
            h = 20,
            l = e ? function() {
                return e.cur()
            } : function() {
                return d.css(a, b, "")
            },
            m = l(),
            v = c && c[3] || (d.cssNumber[b] ? "" : "px"),
            k = (d.cssNumber[b] || "px" !== v && +m) && va.exec(d.css(a, b));
        if (k && k[3] !== v) {
            v = v || k[3];
            c = c || [];
            k = +m || 1;
            do g = g || ".5", k /= g, d.style(a, b, k + v); while (g !== (g = l() / m) && 1 !== g && --h)
        }
        c && (k = +k || +m || 0, f = c[1] ? k + (c[1] + 1) * c[2] : +c[2], e && (e.unit = v, e.start = k, e.end = f));
        return f
    }

    function q(a, b) {
        var c = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && d.nodeName(a, b) ? d.merge([a], c) : c
    }

    function U(a, b) {
        for (var c = 0, d = a.length; c < d; c++) z.set(a[c], "globalEval", !b || z.get(b[c], "globalEval"))
    }

    function I(a, b, c, e, f) {
        for (var g, h, l, m = b.createDocumentFragment(),
                k = [], ha = 0, p = a.length; ha < p; ha++)
            if ((g = a[ha]) || 0 === g)
                if ("object" === d.type(g)) d.merge(k, g.nodeType ? [g] : g);
                else if (Lb.test(g)) {
            h = h || m.appendChild(b.createElement("div"));
            l = (bb.exec(g) || ["", ""])[1].toLowerCase();
            l = V[l] || V._default;
            h.innerHTML = l[1] + d.htmlPrefilter(g) + l[2];
            for (l = l[0]; l--;) h = h.lastChild;
            d.merge(k, h.childNodes);
            h = m.firstChild;
            h.textContent = ""
        } else k.push(b.createTextNode(g));
        m.textContent = "";
        for (ha = 0; g = k[ha++];)
            if (e && -1 < d.inArray(g, e)) f && f.push(g);
            else if (a = d.contains(g.ownerDocument, g), h = q(m.appendChild(g), "script"), a && U(h), c)
            for (l = 0; g = h[l++];) cb.test(g.type || "") && c.push(g);
        return m
    }

    function T() {
        return !0
    }

    function Z() {
        return !1
    }

    function Fa() {
        try {
            return r.activeElement
        } catch (a) {}
    }

    function ya(a, b, c, e, f, g) {
        var h, l;
        if ("object" === typeof b) {
            "string" !== typeof c && (e = e || c, c = void 0);
            for (l in b) ya(a, l, c, e, b[l], g);
            return a
        }
        null == e && null == f ? (f = c, e = c = void 0) : null == f && ("string" === typeof c ? (f = e, e = void 0) : (f = e, e = c, c = void 0));
        if (!1 === f) f = Z;
        else if (!f) return a;
        1 === g && (h = f, f = function(a) {
            d().off(a);
            return h.apply(this, arguments)
        }, f.guid = h.guid || (h.guid = d.guid++));
        return a.each(function() {
            d.event.add(this, b, f, e, c)
        })
    }

    function Ga(a, b) {
        return d.nodeName(a, "table") && d.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function oa(a) {
        a.type = (null !== a.getAttribute("type")) + "/" + a.type;
        return a
    }

    function Ha(a) {
        var b = Mb.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }

    function pa(a, b) {
        var c, e, f, g;
        if (1 === b.nodeType) {
            if (z.hasData(a) && (g = z.access(a), c = z.set(b, g), g = g.events))
                for (f in delete c.handle, c.events = {}, g)
                    for (c = 0, e = g[f].length; c < e; c++) d.event.add(b, f, g[f][c]);
            D.hasData(a) && (f = D.access(a), f = d.extend({}, f), D.set(b, f))
        }
    }

    function X(a, b, c, e) {
        b = db.apply([], b);
        var f, g, h, l, m = 0,
            k = a.length,
            ha = k - 1,
            p = b[0],
            n = d.isFunction(p);
        if (n || 1 < k && "string" === typeof p && !C.checkClone && Nb.test(p)) return a.each(function(d) {
            var f = a.eq(d);
            n && (b[0] = p.call(this, d, f.html()));
            X(f, b, c, e)
        });
        if (k && (f = I(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
            g = d.map(q(f, "script"), oa);
            for (h = g.length; m < k; m++) l = f, m !== ha && (l = d.clone(l, !0, !0), h && d.merge(g, q(l, "script"))), c.call(a[m], l, m);
            if (h)
                for (f = g[g.length - 1].ownerDocument, d.map(g, Ha), m = 0; m < h; m++) l = g[m], cb.test(l.type || "") && !z.access(l, "globalEval") && d.contains(f, l) && (l.src ? d._evalUrl && d._evalUrl(l.src) : d.globalEval(l.textContent.replace(Ob, "")))
        }
        return a
    }

    function ga(a, b, c) {
        for (var e = b ? d.filter(b, a) : a, f = 0; null != (b = e[f]); f++) c || 1 !== b.nodeType || d.cleanData(q(b)), b.parentNode && (c && d.contains(b.ownerDocument, b) && U(q(b, "script")), b.parentNode.removeChild(b));
        return a
    }

    function eb(a, b) {
        var c = d(b.createElement(a)).appendTo(b.body),
            e = d.css(c[0], "display");
        c.detach();
        return e
    }

    function Oa(a) {
        var b = r,
            c = fb[a];
        c || (c = eb(a, b), "none" !== c && c || (Ia = (Ia || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ia[0].contentDocument, b.write(), b.close(), c = eb(a, b), Ia.detach()), fb[a] = c);
        return c
    }

    function qa(a, b, c) {
        var e, f, g = a.style;
        f = (c = c || Ja(a)) ? c.getPropertyValue(b) || c[b] : void 0;
        "" !== f && void 0 !== f || d.contains(a.ownerDocument, a) || (f = d.style(a, b));
        c && !C.pixelMarginRight() && Pa.test(f) && gb.test(b) && (a = g.width, b = g.minWidth, e = g.maxWidth, g.minWidth = g.maxWidth = g.width = f, f = c.width, g.width = a, g.minWidth = b, g.maxWidth = e);
        return void 0 !== f ? f + "" : f
    }

    function Qa(a, b) {
        return {
            get: function() {
                if (a()) delete this.get;
                else return (this.get = b).apply(this, arguments)
            }
        }
    }

    function hb(a) {
        if (a in ib) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = jb.length; c--;)
            if (a = jb[c] + b, a in ib) return a
    }

    function kb(a, b, c) {
        return (a = va.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }

    function lb(a, b, c, e, f) {
        b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var g = 0; 4 > b; b += 2) "margin" === c && (g += d.css(a, c + ia[b], !0, f)), e ? ("content" === c && (g -= d.css(a, "padding" + ia[b], !0, f)), "margin" !== c && (g -= d.css(a, "border" + ia[b] + "Width", !0, f))) : (g += d.css(a, "padding" + ia[b], !0, f), "padding" !== c && (g += d.css(a, "border" + ia[b] + "Width", !0, f)));
        return g
    }

    function mb(a, b, c) {
        var e = !0,
            f = "width" === b ? a.offsetWidth : a.offsetHeight,
            g = Ja(a),
            h = "border-box" === d.css(a, "boxSizing", !1, g);
        if (0 >= f || null == f) {
            f = qa(a, b, g);
            if (0 > f || null == f) f = a.style[b];
            if (Pa.test(f)) return f;
            e = h && (C.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) || 0
        }
        return f + lb(a, b, c || (h ? "border" : "content"), e, g) + "px"
    }

    function nb(a, b) {
        for (var c, e, f, g = [], h = 0, l = a.length; h < l; h++) e = a[h], e.style && (g[h] = z.get(e, "olddisplay"), c = e.style.display, b ? (g[h] || "none" !== c || (e.style.display = ""), "" === e.style.display && aa(e) && (g[h] = z.access(e, "olddisplay", Oa(e.nodeName)))) : (f = aa(e), "none" === c && f || z.set(e, "olddisplay", f ? c : d.css(e, "display"))));
        for (h = 0; h < l; h++) e = a[h], !e.style || b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? g[h] || "" : "none");
        return a
    }

    function O(a, b, c, d, f) {
        return new O.prototype.init(a, b, c, d, f)
    }

    function ob() {
        k.setTimeout(function() {
            ja = void 0
        });
        return ja = d.now()
    }

    function Ka(a, b) {
        var c, d = 0,
            f = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = ia[d], f["margin" + c] = f["padding" + c] = a;
        b && (f.opacity = f.width = a);
        return f
    }

    function pb(a, b, c) {
        for (var d, f = (W.tweeners[b] || []).concat(W.tweeners["*"]), g = 0, h = f.length; g < h; g++)
            if (d = f[g].call(c, b, a)) return d
    }

    function Pb(a, b) {
        var c, e, f, g, h;
        for (c in a)
            if (e = d.camelCase(c), f = b[e], g = a[c], d.isArray(g) && (f = g[1], g = a[c] = g[0]), c !== e && (a[e] = g, delete a[c]), (h = d.cssHooks[e]) && "expand" in h)
                for (c in g = h.expand(g), delete a[e], g) c in a || (a[c] = g[c], b[c] = f);
            else b[e] = f
    }

    function W(a, b, c) {
        var e, f = 0,
            g = W.prefilters.length,
            h = d.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (e) return !1;
                for (var b = ja || ob(), b = Math.max(0, m.startTime + m.duration - b), c = 1 - (b / m.duration || 0), d = 0, f = m.tweens.length; d < f; d++) m.tweens[d].run(c);
                h.notifyWith(a, [m, c, b]);
                if (1 > c && f) return b;
                h.resolveWith(a, [m]);
                return !1
            },
            m = h.promise({
                elem: a,
                props: d.extend({}, b),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ja || ob(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var e = d.Tween(a, m.opts, b, c, m.opts.specialEasing[b] || m.opts.easing);
                    m.tweens.push(e);
                    return e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? m.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) m.tweens[c].run(1);
                    b ? (h.notifyWith(a, [m, 1, 0]), h.resolveWith(a, [m, b])) : h.rejectWith(a, [m, b]);
                    return this
                }
            });
        c = m.props;
        for (Pb(c, m.opts.specialEasing); f < g; f++)
            if (b = W.prefilters[f].call(m, a, c, m.opts)) return d.isFunction(b.stop) && (d._queueHooks(m.elem, m.opts.queue).stop = d.proxy(b.stop, b)), b;
        d.map(c, pb, m);
        d.isFunction(m.opts.start) && m.opts.start.call(a, m);
        d.fx.timer(d.extend(l, {
            elem: a,
            anim: m,
            queue: m.opts.queue
        }));
        return m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
    }

    function Y(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function qb(a) {
        return function(b, c) {
            "string" !== typeof b && (c = b, b = "*");
            var e, f = 0,
                g = b.toLowerCase().match(R) || [];
            if (d.isFunction(c))
                for (; e = g[f++];) "+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
        }
    }

    function rb(a, b, c, e) {
        function f(l) {
            var m;
            g[l] = !0;
            d.each(a[l] || [], function(a, d) {
                var l = d(b, c, e);
                if ("string" === typeof l && !h && !g[l]) return b.dataTypes.unshift(l), f(l), !1;
                if (h) return !(m = l)
            });
            return m
        }
        var g = {},
            h = a === Ra;
        return f(b.dataTypes[0]) || !g["*"] && f("*")
    }

    function Sa(a, b) {
        var c, e, f = d.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((f[c] ? a : e || (e = {}))[c] = b[c]);
        e && d.extend(!0, a, e);
        return a
    }

    function Ta(a, b, c, e) {
        var f;
        if (d.isArray(b)) d.each(b, function(b, d) {
            c || Qb.test(a) ? e(a, d) : Ta(a + "[" + ("object" === typeof d && null != d ? b : "") + "]", d, c, e)
        });
        else if (c || "object" !== d.type(b)) e(a, b);
        else
            for (f in b) Ta(a + "[" + f + "]", b[f], c, e)
    }

    function sb(a) {
        return d.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var ka = [],
        r = k.document,
        ba = ka.slice,
        db = ka.concat,
        Ua = ka.push,
        Ea = ka.indexOf,
        La = {},
        Rb = La.toString,
        wa = La.hasOwnProperty,
        C = {},
        d = function(a, b) {
            return new d.fn.init(a, b)
        },
        Sb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Tb = /^-ms-/,
        Ub = /-([\da-z])/gi,
        Vb = function(a, b) {
            return b.toUpperCase()
        };
    d.fn = d.prototype = {
        jquery: "2.2.4",
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return ba.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : ba.call(this)
        },
        pushStack: function(a) {
            a = d.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a) {
            return d.each(this, a)
        },
        map: function(a) {
            return this.pushStack(d.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ba.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Ua,
        sort: ka.sort,
        splice: ka.splice
    };
    d.extend = d.fn.extend = function() {
        var a, b, c, e, f, g = arguments[0] || {},
            h = 1,
            l = arguments.length,
            m = !1;
        "boolean" === typeof g && (m = g, g = arguments[h] || {}, h++);
        "object" === typeof g || d.isFunction(g) || (g = {});
        h === l && (g = this, h--);
        for (; h < l; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], e = a[b], g !== e && (m && e && (d.isPlainObject(e) || (f = d.isArray(e))) ? (f ? (f = !1, c = c && d.isArray(c) ? c : []) : c = c && d.isPlainObject(c) ? c : {}, g[b] = d.extend(m, c, e)) : void 0 !== e && (g[b] = e));
        return g
    };
    d.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === d.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !d.isArray(a) && 0 <= b - parseFloat(b) + 1
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== d.type(a) || a.nodeType || d.isWindow(a) || a.constructor && !wa.call(a, "constructor") && !wa.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || wa.call(a, b)
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? La[Rb.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b;
            b = eval;
            if (a = d.trim(a)) 1 === a.indexOf("use strict") ? (b = r.createElement("script"), b.text = a, r.head.appendChild(b).parentNode.removeChild(b)) : b(a)
        },
        camelCase: function(a) {
            return a.replace(Tb, "ms-").replace(Ub, Vb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (x(a))
                for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
            else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(Sb, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            null != a && (x(Object(a)) ? d.merge(c, "string" === typeof a ? [a] : a) : Ua.call(c, a));
            return c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : Ea.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, f = a.length; d < c; d++) a[f++] = b[d];
            a.length = f;
            return a
        },
        grep: function(a, b, c) {
            for (var d = [], f = 0, g = a.length, h = !c; f < g; f++) c = !b(a[f], f), c !== h && d.push(a[f]);
            return d
        },
        map: function(a, b, c) {
            var d, f, g = 0,
                h = [];
            if (x(a))
                for (d = a.length; g < d; g++) f = b(a[g], g, c), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, c), null != f && h.push(f);
            return db.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e;
            "string" === typeof b && (c = a[b], b = a, a = c);
            if (d.isFunction(a)) return e = ba.call(arguments, 2), c = function() {
                return a.apply(b || this, e.concat(ba.call(arguments)))
            }, c.guid = a.guid = a.guid || d.guid++, c
        },
        now: Date.now,
        support: C
    });
    "function" === typeof Symbol && (d.fn[Symbol.iterator] = ka[Symbol.iterator]);
    d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        La["[object " + b + "]"] = b.toLowerCase()
    });
    var fa = function(a) {
        function b(a, b, c, d) {
            var e, f, g, w, h, J = b && b.ownerDocument,
                K = b ? b.nodeType : 9;
            c = c || [];
            if ("string" !== typeof a || !a || 1 !== K && 9 !== K && 11 !== K) return c;
            if (!d && ((b ? b.ownerDocument || b : ca) !== A && ra(b), b = b || A, da)) {
                if (11 !== K && (w = wa.exec(a)))
                    if (e = w[1])
                        if (9 === K)
                            if (f = b.getElementById(e)) {
                                if (f.id === e) return c.push(f), c
                            } else return c;
                else {
                    if (J && (f = J.getElementById(e)) && L(b, f) && f.id === e) return c.push(f), c
                } else {
                    if (w[2]) return N.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = w[3]) && E.getElementsByClassName && b.getElementsByClassName) return N.apply(c, b.getElementsByClassName(e)), c
                }
                if (!(!E.qsa || R[a + " "] || H && H.test(a))) {
                    if (1 !== K) J = b, h = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (g = b.getAttribute("id")) ? g = g.replace(xa, "\\$&"): b.setAttribute("id", g = F);
                        w = Ba(a);
                        e = w.length;
                        for (f = ja.test(g) ? "#" + g : "[id='" + g + "']"; e--;) w[e] = f + " " + q(w[e]);
                        h = w.join(",");
                        J = na.test(a) && n(b.parentNode) || b
                    }
                    if (h) try {
                        return N.apply(c, J.querySelectorAll(h)), c
                    } catch (vc) {} finally {
                        g === F && b.removeAttribute("id")
                    }
                }
            }
            return ya(a.replace(Y, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                b.push(c + " ") > u.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            a[F] = !0;
            return a
        }

        function f(a) {
            var b = A.createElement("div");
            try {
                return !!a(b)
            } catch (J) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function g(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) u.attrHandle[c[d]] = b
        }

        function h(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function l(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function m(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function k(a) {
            return d(function(b) {
                b = +b;
                return d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function n(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function p() {}

        function q(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function t(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Fa++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var w, h, J = [G, f];
                if (g)
                    for (; b = b[d];) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                h = b[F] || (b[F] = {});
                                h = h[b.uniqueID] || (h[b.uniqueID] = {});
                                if ((w = h[d]) && w[0] === G && w[1] === f) return J[2] = w[2];
                                h[d] = J;
                                if (J[2] = a(b, c, g)) return !0
                            }
            }
        }

        function z(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function r(a, b, c, d, e) {
            for (var f, g = [], h = 0, w = a.length, J = null != b; h < w; h++)
                if (f = a[h])
                    if (!c || c(f, d, e)) g.push(f), J && b.push(h);
            return g
        }

        function T(a, c, e, f, g, h) {
            f && !f[F] && (f = T(f));
            g && !g[F] && (g = T(g, h));
            return d(function(d, h, w, J) {
                var l, K, m = [],
                    p = [],
                    k = h.length,
                    P;
                if (!(P = d)) {
                    P = c || "*";
                    for (var v = w.nodeType ? [w] : w, n = [], za = 0, q = v.length; za < q; za++) b(P, v[za], n);
                    P = n
                }
                P = !a || !d && c ? P : r(P, m, a, w, J);
                v = e ? g || (d ? a : k || f) ? [] : h : P;
                e && e(P, v, w, J);
                if (f)
                    for (l = r(v, p), f(l, [], w, J), w = l.length; w--;)
                        if (K = l[w]) v[p[w]] = !(P[p[w]] = K);
                if (d) {
                    if (g || a) {
                        if (g) {
                            l = [];
                            for (w = v.length; w--;)(K = v[w]) && l.push(P[w] = K);
                            g(null, v = [], l, J)
                        }
                        for (w = v.length; w--;)(K = v[w]) && -1 < (l = g ? M(d, K) : m[w]) && (d[l] = !(h[l] = K))
                    }
                } else v = r(v === h ? v.splice(k, v.length) : v), g ? g(null, h, v, J) : N.apply(h, v)
            })
        }

        function U(a) {
            var b, c, d, e = a.length,
                f = u.relative[a[0].type];
            c = f || u.relative[" "];
            for (var g = f ? 1 : 0, h = t(function(a) {
                    return a === b
                }, c, !0), w = t(function(a) {
                    return -1 < M(b, a)
                }, c, !0), l = [function(a, c, d) {
                    a = !f && (d || c !== B) || ((b = c).nodeType ? h(a, c, d) : w(a, c, d));
                    b = null;
                    return a
                }]; g < e; g++)
                if (c = u.relative[a[g].type]) l = [t(z(l), c)];
                else {
                    c = u.filter[a[g].type].apply(null, a[g].matches);
                    if (c[F]) {
                        for (d = ++g; d < e && !u.relative[a[d].type]; d++);
                        return T(1 < g && z(l), 1 < g && q(a.slice(0, g - 1).concat({
                            value: " " === a[g - 2].type ? "*" : ""
                        })).replace(Y, "$1"), c, g < d && U(a.slice(g, d)), d < e && U(a = a.slice(d)), d < e && q(a))
                    }
                    l.push(c)
                }
            return z(l)
        }

        function C(a, c) {
            var e = 0 < c.length,
                f = 0 < a.length,
                g = function(d, g, h, w, l) {
                    var J, m, K, p = 0,
                        k = "0",
                        P = d && [],
                        v = [],
                        n = B,
                        q = d || f && u.find.TAG("*", l),
                        za = G += null == n ? 1 : Math.random() || .1,
                        ha = q.length;
                    for (l && (B = g === A || g || l); k !== ha && null != (J = q[k]); k++) {
                        if (f && J) {
                            m = 0;
                            g || J.ownerDocument === A || (ra(J), h = !da);
                            for (; K = a[m++];)
                                if (K(J, g || A, h)) {
                                    w.push(J);
                                    break
                                }
                            l && (G = za)
                        }
                        e && ((J = !K && J) && p--, d && P.push(J))
                    }
                    p += k;
                    if (e && k !== p) {
                        for (m = 0; K = c[m++];) K(P, v, g, h);
                        if (d) {
                            if (0 < p)
                                for (; k--;) P[k] || v[k] || (v[k] = S.call(w));
                            v = r(v)
                        }
                        N.apply(w, v);
                        l && !d && 0 < v.length && 1 < p + c.length && b.uniqueSort(w)
                    }
                    l && (G = za, B = n);
                    return P
                };
            return e ? d(g) : g
        }
        var y, E, u, Q, I, Ba, x, ya, B, sa, Aa, ra, A, ea, da, H, D, Z, L, F = "sizzle" + 1 * new Date,
            ca = a.document,
            G = 0,
            Fa = 0,
            O = c(),
            V = c(),
            R = c(),
            W = function(a, b) {
                a === b && (Aa = !0);
                return 0
            },
            X = {}.hasOwnProperty,
            ga = [],
            S = ga.pop,
            Ga = ga.push,
            N = ga.push,
            ba = ga.slice,
            M = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ia = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
            Y = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            ka = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            oa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            pa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            qa = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            ja = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            fa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            ta = /^(?:input|select|textarea|button)$/i,
            va = /^h\d$/i,
            aa = /^[^{]+\{\s*\[native \w/,
            wa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            na = /[+~]/,
            xa = /'|\\/g,
            la = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            ma = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            },
            ua = function() {
                ra()
            };
        try {
            N.apply(ga = ba.call(ca.childNodes), ca.childNodes), ga[ca.childNodes.length].nodeType
        } catch (w) {
            N = {
                apply: ga.length ? function(a, b) {
                    Ga.apply(a, ba.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        E = b.support = {};
        I = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        ra = b.setDocument = function(a) {
            var b;
            a = a ? a.ownerDocument || a : ca;
            if (a === A || 9 !== a.nodeType || !a.documentElement) return A;
            A = a;
            ea = A.documentElement;
            da = !I(A);
            (b = A.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", ua, !1) : b.attachEvent && b.attachEvent("onunload", ua));
            E.attributes = f(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            E.getElementsByTagName = f(function(a) {
                a.appendChild(A.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            E.getElementsByClassName = aa.test(A.getElementsByClassName);
            E.getById = f(function(a) {
                ea.appendChild(a).id = F;
                return !A.getElementsByName || !A.getElementsByName(F).length
            });
            E.getById ? (u.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && da) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, u.filter.ID = function(a) {
                var b = a.replace(la, ma);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete u.find.ID, u.filter.ID = function(a) {
                var b = a.replace(la, ma);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            });
            u.find.TAG = E.getElementsByTagName ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
                if (E.qsa) return b.querySelectorAll(a)
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            };
            u.find.CLASS = E.getElementsByClassName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByClassName && da) return b.getElementsByClassName(a)
            };
            D = [];
            H = [];
            if (E.qsa = aa.test(A.querySelectorAll)) f(function(a) {
                ea.appendChild(a).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || H.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + F + "-]").length || H.push("~=");
                a.querySelectorAll(":checked").length || H.push(":checked");
                a.querySelectorAll("a#" + F + "+*").length || H.push(".#.+[+~]")
            }), f(function(a) {
                var b = A.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && H.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                H.push(",.*:")
            });
            (E.matchesSelector = aa.test(Z = ea.matches || ea.webkitMatchesSelector || ea.mozMatchesSelector || ea.oMatchesSelector || ea.msMatchesSelector)) && f(function(a) {
                E.disconnectedMatch = Z.call(a, "div");
                Z.call(a, "[s!='']:x");
                D.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            });
            H = H.length && new RegExp(H.join("|"));
            D = D.length && new RegExp(D.join("|"));
            L = (b = aa.test(ea.compareDocumentPosition)) || aa.test(ea.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && 1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            };
            W = b ? function(a, b) {
                if (a === b) return Aa = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (c) return c;
                c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                return c & 1 || !E.sortDetached && b.compareDocumentPosition(a) === c ? a === A || a.ownerDocument === ca && L(ca, a) ? -1 : b === A || b.ownerDocument === ca && L(ca, b) ? 1 : sa ? M(sa, a) - M(sa, b) : 0 : c & 4 ? -1 : 1
            } : function(a, b) {
                if (a === b) return Aa = !0, 0;
                var c, d = 0;
                c = a.parentNode;
                var e = b.parentNode,
                    f = [a],
                    g = [b];
                if (!c || !e) return a === A ? -1 : b === A ? 1 : c ? -1 : e ? 1 : sa ? M(sa, a) - M(sa, b) : 0;
                if (c === e) return h(a, b);
                for (c = a; c = c.parentNode;) f.unshift(c);
                for (c = b; c = c.parentNode;) g.unshift(c);
                for (; f[d] === g[d];) d++;
                return d ? h(f[d], g[d]) : f[d] === ca ? -1 : g[d] === ca ? 1 : 0
            };
            return A
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            (a.ownerDocument || a) !== A && ra(a);
            c = c.replace(pa, "='$1']");
            if (!(!E.matchesSelector || !da || R[c + " "] || D && D.test(c) || H && H.test(c))) try {
                var d = Z.call(a, c);
                if (d || E.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (P) {}
            return 0 < b(c, A, null, [a]).length
        };
        b.contains = function(a, b) {
            (a.ownerDocument || a) !== A && ra(a);
            return L(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== A && ra(a);
            var c = u.attrHandle[b.toLowerCase()],
                c = c && X.call(u.attrHandle, b.toLowerCase()) ? c(a, b, !da) : void 0;
            return void 0 !== c ? c : E.attributes || !da ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            Aa = !E.detectDuplicates;
            sa = !E.sortStable && a.slice(0);
            a.sort(W);
            if (Aa) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            sa = null;
            return a
        };
        Q = b.getText = function(a) {
            var b, c = "",
                d = 0;
            b = a.nodeType;
            if (!b)
                for (; b = a[d++];) c += Q(b);
            else if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += Q(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        };
        u = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: fa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(la, ma);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(la, ma);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    if (fa.CHILD.test(a[0])) return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : c && qa.test(c) && (b = Ba(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(la, ma).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = O[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), O(a, function(a) {
                        return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        e = b.attr(e, a);
                        if (null == e) return "!=" === c;
                        if (!c) return !0;
                        e += "";
                        return "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e.replace(ia, " ") + " ").indexOf(d) : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, l) {
                        var m, w, k, p, v;
                        c = f !== g ? "nextSibling" : "previousSibling";
                        var K = b.parentNode,
                            J = h && b.nodeName.toLowerCase();
                        l = !l && !h;
                        m = !1;
                        if (K) {
                            if (f) {
                                for (; c;) {
                                    for (k = b; k = k[c];)
                                        if (h ? k.nodeName.toLowerCase() === J : 1 === k.nodeType) return !1;
                                    v = c = "only" === a && !v && "nextSibling"
                                }
                                return !0
                            }
                            v = [g ? K.firstChild : K.lastChild];
                            if (g && l)
                                for (k = K, w = k[F] || (k[F] = {}), w = w[k.uniqueID] || (w[k.uniqueID] = {}), m = w[a] || [], m = (p = m[0] === G && m[1]) && m[2], k = p && K.childNodes[p]; k = ++p && k && k[c] || (m = p = 0) || v.pop();) {
                                    if (1 === k.nodeType && ++m && k === b) {
                                        w[a] = [G, p, m];
                                        break
                                    }
                                } else if (l && (k = b, w = k[F] || (k[F] = {}), w = w[k.uniqueID] || (w[k.uniqueID] = {}), m = w[a] || [], m = p = m[0] === G && m[1]), !1 === m)
                                    for (;
                                        (k = ++p && k && k[c] || (m = p = 0) || v.pop()) && ((h ? k.nodeName.toLowerCase() !== J : 1 !== k.nodeType) || !++m || (l && (w = k[F] || (k[F] = {}), w = w[k.uniqueID] || (w[k.uniqueID] = {}), w[a] = [G, m]), k !== b)););
                            m -= e;
                            return m === d || 0 === m % d && 0 <= m / d
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = u.pseudos[a] || u.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[F] ? f(c) : 1 < f.length ? (e = [a, a, "", c], u.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = M(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = x(a.replace(Y, "$1"));
                    return e[F] ? d(function(a, b, c, d) {
                        d = e(a, null, d, []);
                        for (var f = a.length; f--;)
                            if (c = d[f]) a[f] = !(b[f] = c)
                    }) : function(a, d, f) {
                        b[0] = a;
                        e(b, null, f, c);
                        b[0] = null;
                        return !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: d(function(a) {
                    a = a.replace(la, ma);
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || Q(b)).indexOf(a)
                    }
                }),
                lang: d(function(a) {
                    ja.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(la, ma).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = da ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === ea
                },
                focus: function(a) {
                    return a === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !u.pseudos.empty(a)
                },
                header: function(a) {
                    return va.test(a.nodeName)
                },
                input: function(a) {
                    return ta.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: k(function() {
                    return [0]
                }),
                last: k(function(a, b) {
                    return [b - 1]
                }),
                eq: k(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: k(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: k(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: k(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: k(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        u.pseudos.nth = u.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) u.pseudos[y] = l(y);
        for (y in {
                submit: !0,
                reset: !0
            }) u.pseudos[y] = m(y);
        p.prototype = u.filters = u.pseudos;
        u.setFilters = new p;
        Ba = b.tokenize = function(a, c) {
            var d, e, f, g, h, l, m;
            if (h = V[a + " "]) return c ? 0 : h.slice(0);
            h = a;
            l = [];
            for (m = u.preFilter; h;) {
                if (!d || (e = ka.exec(h))) e && (h = h.slice(e[0].length) || h), l.push(f = []);
                d = !1;
                if (e = oa.exec(h)) d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(Y, " ")
                }), h = h.slice(d.length);
                for (g in u.filter) !(e = fa[g].exec(h)) || m[g] && !(e = m[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : V(a, l).slice(0)
        };
        x = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = R[a + " "];
            if (!f) {
                b || (b = Ba(a));
                for (c = b.length; c--;) f = U(b[c]), f[F] ? d.push(f) : e.push(f);
                f = R(a, C(e, d));
                f.selector = a
            }
            return f
        };
        ya = b.select = function(a, b, c, d) {
            var e, f, g, h, l = "function" === typeof a && a,
                m = !d && Ba(a = l.selector || a);
            c = c || [];
            if (1 === m.length) {
                f = m[0] = m[0].slice(0);
                if (2 < f.length && "ID" === (g = f[0]).type && E.getById && 9 === b.nodeType && da && u.relative[f[1].type]) {
                    b = (u.find.ID(g.matches[0].replace(la, ma), b) || [])[0];
                    if (!b) return c;
                    l && (b = b.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (e = fa.needsContext.test(a) ? 0 : f.length; e--;) {
                    g = f[e];
                    if (u.relative[h = g.type]) break;
                    if (h = u.find[h])
                        if (d = h(g.matches[0].replace(la, ma), na.test(f[0].type) && n(b.parentNode) || b)) {
                            f.splice(e, 1);
                            a = d.length && q(f);
                            if (!a) return N.apply(c, d), c;
                            break
                        }
                }
            }(l || x(a, m))(d, b, !da, c, !b || na.test(a) && n(b.parentNode) || b);
            return c
        };
        E.sortStable = F.split("").sort(W).join("") === F;
        E.detectDuplicates = !!Aa;
        ra();
        E.sortDetached = f(function(a) {
            return a.compareDocumentPosition(A.createElement("div")) & 1
        });
        f(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        E.attributes && f(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || g("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        });
        f(function(a) {
            return null == a.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        });
        return b
    }(k);
    d.find = fa;
    d.expr = fa.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.uniqueSort = d.unique = fa.uniqueSort;
    d.text = fa.getText;
    d.isXMLDoc = fa.isXML;
    d.contains = fa.contains;
    var ta = function(a, b, c) {
            for (var e = [], f = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (f && d(a).is(c)) break;
                    e.push(a)
                }
            return e
        },
        tb = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        ub = d.expr.match.needsContext,
        vb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Jb = /^.[^:#\[\.,]*$/;
    d.filter = function(a, b, c) {
        var e = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? d.find.matchesSelector(e, a) ? [e] : [] : d.find.matches(a, d.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    };
    d.fn.extend({
        find: function(a) {
            var b, c = this.length,
                e = [],
                f = this;
            if ("string" !== typeof a) return this.pushStack(d(a).filter(function() {
                for (b = 0; b < c; b++)
                    if (d.contains(f[b], this)) return !0
            }));
            for (b = 0; b < c; b++) d.find(a, f[b], e);
            e = this.pushStack(1 < c ? d.unique(e) : e);
            e.selector = this.selector ? this.selector + " " + a : a;
            return e
        },
        filter: function(a) {
            return this.pushStack(L(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(L(this, a || [], !0))
        },
        is: function(a) {
            return !!L(this, "string" === typeof a && ub.test(a) ? d(a) : a || [], !1).length
        }
    });
    var wb, Xb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(a, b, c) {
        var e;
        if (!a) return this;
        c = c || wb;
        if ("string" === typeof a) {
            e = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Xb.exec(a);
            if (!e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : r, !0)), vb.test(e[1]) && d.isPlainObject(b))
                    for (e in b)
                        if (d.isFunction(this[e])) this[e](b[e]);
                        else this.attr(e, b[e])
            } else(b = r.getElementById(e[2])) && b.parentNode && (this.length = 1, this[0] = b), this.context = r, this.selector = a;
            return this
        }
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if (d.isFunction(a)) return void 0 !== c.ready ? c.ready(a) : a(d);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return d.makeArray(a, this)
    }).prototype = d.fn;
    wb = d(r);
    var Yb = /^(?:parents|prev(?:Until|All))/,
        Zb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    d.fn.extend({
        has: function(a) {
            var b = d(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (d.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, e = 0, f = this.length, g = [], h = ub.test(a) || "string" !== typeof a ? d(a, b || this.context) : 0; e < f; e++)
                for (c = this[e]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (h ? -1 < h.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, a))) {
                        g.push(c);
                        break
                    }
            return this.pushStack(1 < g.length ? d.uniqueSort(g) : g)
        },
        index: function(a) {
            return a ? "string" === typeof a ? Ea.call(d(a), this[0]) : Ea.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    d.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return ta(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ta(a, "parentNode", c)
        },
        next: function(a) {
            return G(a, "nextSibling")
        },
        prev: function(a) {
            return G(a, "previousSibling")
        },
        nextAll: function(a) {
            return ta(a, "nextSibling")
        },
        prevAll: function(a) {
            return ta(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ta(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ta(a, "previousSibling", c)
        },
        siblings: function(a) {
            return tb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return tb(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || d.merge([], a.childNodes)
        }
    }, function(a, b) {
        d.fn[a] = function(c, e) {
            var f = d.map(this, b, c);
            "Until" !== a.slice(-5) && (e = c);
            e && "string" === typeof e && (f = d.filter(e, f));
            1 < this.length && (Zb[a] || d.uniqueSort(f), Yb.test(a) && f.reverse());
            return this.pushStack(f)
        }
    });
    var R = /\S+/g;
    d.Callbacks = function(a) {
        a = "string" === typeof a ? M(a) : d.extend({}, a);
        var b, c, e, f, g = [],
            h = [],
            l = -1,
            m = function() {
                f = a.once;
                for (e = b = !0; h.length; l = -1)
                    for (c = h.shift(); ++l < g.length;) !1 === g[l].apply(c[0], c[1]) && a.stopOnFalse && (l = g.length, c = !1);
                a.memory || (c = !1);
                b = !1;
                f && (g = c ? [] : "")
            },
            k = {
                add: function() {
                    g && (c && !b && (l = g.length -
                        1, h.push(c)), function p(b) {
                        d.each(b, function(b, c) {
                            d.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== d.type(c) && p(c)
                        })
                    }(arguments), c && !b && m());
                    return this
                },
                remove: function() {
                    d.each(arguments, function(a, b) {
                        for (var c; - 1 < (c = d.inArray(b, g, c));) g.splice(c, 1), c <= l && l--
                    });
                    return this
                },
                has: function(a) {
                    return a ? -1 < d.inArray(a, g) : 0 < g.length
                },
                empty: function() {
                    g && (g = []);
                    return this
                },
                disable: function() {
                    f = h = [];
                    g = c = "";
                    return this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    f = h = [];
                    c || (g = c = "");
                    return this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(a, c) {
                    f || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || m());
                    return this
                },
                fire: function() {
                    k.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return k
    };
    d.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        f.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return d.Deferred(function(c) {
                            d.each(b, function(b, g) {
                                var h = d.isFunction(a[b]) && a[b];
                                f[g[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    if (a && d.isFunction(a.promise)) a.promise().progress(c.notify).done(c.resolve).fail(c.reject);
                                    else c[g[0] + "With"](this === e ? c.promise() : this, h ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? d.extend(a, e) : e
                    }
                },
                f = {};
            e.pipe = e.then;
            d.each(b, function(a, d) {
                var g = d[2],
                    h = d[3];
                e[d[1]] = g.add;
                h && g.add(function() {
                    c = h
                }, b[a ^ 1][2].disable, b[2][2].lock);
                f[d[0]] = function() {
                    f[d[0] + "With"](this === f ? e : this, arguments);
                    return this
                };
                f[d[0] + "With"] = g.fireWith
            });
            e.promise(f);
            a && a.call(f, f);
            return f
        },
        when: function(a) {
            var b = 0,
                c = ba.call(arguments),
                e = c.length,
                f = 1 !== e || a && d.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : d.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? ba.call(arguments) : d;
                        c === l ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                l, m, k;
            if (1 < e)
                for (l = Array(e), m = Array(e), k = Array(e); b < e; b++) c[b] && d.isFunction(c[b].promise) ? c[b].promise().progress(h(b, m, l)).done(h(b, k, c)).fail(g.reject) : --f;
            f || g.resolveWith(k, c);
            return g.promise()
        }
    });
    var Ma;
    d.fn.ready = function(a) {
        d.ready.promise().done(a);
        return this
    };
    d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? d.readyWait++ : d.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== a && 0 < --d.readyWait || (Ma.resolveWith(r, [d]), d.fn.triggerHandler && (d(r).triggerHandler("ready"), d(r).off("ready"))))
        }
    });
    d.ready.promise = function(a) {
        Ma || (Ma = d.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? k.setTimeout(d.ready) : (r.addEventListener("DOMContentLoaded", S), k.addEventListener("load", S)));
        return Ma.promise(a)
    };
    d.ready.promise();
    var N = function(a, b, c, e, f, g, h) {
            var l = 0,
                m = a.length,
                k = null == c;
            if ("object" === d.type(c))
                for (l in f = !0, c) N(a, b, l, c[l], !0, g, h);
            else if (void 0 !== e && (f = !0, d.isFunction(e) || (h = !0), k && (h ? (b.call(a, e), b = null) : (k = b, b = function(a, b, c) {
                    return k.call(d(a), c)
                })), b))
                for (; l < m; l++) b(a[l], c, h ? e : e.call(a[l], l, b(a[l], c)));
            return f ? a : k ? b.call(a) : m ? b(a[0], c) : g
        },
        na = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    y.uid = 1;
    y.prototype = {
        register: function(a, b) {
            var c = b || {};
            a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            });
            return a[this.expando]
        },
        cache: function(a) {
            if (!na(a)) return {};
            var b = a[this.expando];
            b || (b = {}, na(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            })));
            return b
        },
        set: function(a, b, c) {
            var d;
            a = this.cache(a);
            if ("string" === typeof b) a[b] = c;
            else
                for (d in b) a[d] = b[d];
            return a
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            if (void 0 === b || b && "string" === typeof b && void 0 === c) return c = this.get(a, b), void 0 !== c ? c : this.get(a, d.camelCase(b));
            this.set(a, b, c);
            return void 0 !== c ? c : b
        },
        remove: function(a, b) {
            var c, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else
                    for (d.isArray(b) ? e = b.concat(b.map(d.camelCase)) : (c = d.camelCase(b), b in f ? e = [b, c] : (e = c, e = e in f ? [e] : e.match(R) || [])), c = e.length; c--;) delete f[e[c]];
                if (void 0 === b || d.isEmptyObject(f)) a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]
            }
        },
        hasData: function(a) {
            a = a[this.expando];
            return void 0 !== a && !d.isEmptyObject(a)
        }
    };
    var z = new y,
        D = new y,
        Kb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ab = /[A-Z]/g;
    d.extend({
        hasData: function(a) {
            return D.hasData(a) || z.hasData(a)
        },
        data: function(a, b, c) {
            return D.access(a, b, c)
        },
        removeData: function(a, b) {
            D.remove(a, b)
        },
        _data: function(a, b, c) {
            return z.access(a, b, c)
        },
        _removeData: function(a, b) {
            z.remove(a, b)
        }
    });
    d.fn.extend({
        data: function(a, b) {
            var c, e, f, g = this[0],
                h = g && g.attributes;
            if (void 0 === a) {
                if (this.length && (f = D.get(g), 1 === g.nodeType && !z.get(g, "hasDataAttrs"))) {
                    for (c = h.length; c--;) h[c] && (e = h[c].name, 0 === e.indexOf("data-") && (e = d.camelCase(e.slice(5)), n(g, e, f[e])));
                    z.set(g, "hasDataAttrs", !0)
                }
                return f
            }
            return "object" === typeof a ? this.each(function() {
                D.set(this, a)
            }) : N(this, function(b) {
                var c, e;
                if (g && void 0 === b) {
                    c = D.get(g, a) || D.get(g, a.replace(ab, "-$&").toLowerCase());
                    if (void 0 !== c) return c;
                    e = d.camelCase(a);
                    c = D.get(g, e);
                    if (void 0 !== c) return c;
                    c = n(g, e, void 0);
                    if (void 0 !== c) return c
                } else e = d.camelCase(a), this.each(function() {
                    var c = D.get(this, e);
                    D.set(this, e, b); - 1 < a.indexOf("-") && void 0 !== c && D.set(this, a, b)
                })
            }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                D.remove(this, a)
            })
        }
    });
    d.extend({
        queue: function(a, b, c) {
            var e;
            if (a) return b = (b || "fx") + "queue", e = z.get(a, b), c && (!e || d.isArray(c) ? e = z.access(a, b, d.makeArray(c)) : e.push(c)), e || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = d.queue(a, b),
                e = c.length,
                f = c.shift(),
                g = d._queueHooks(a, b),
                h = function() {
                    d.dequeue(a, b)
                };
            "inprogress" === f && (f = c.shift(), e--);
            f && ("fx" === b && c.unshift("inprogress"), delete g.stop, f.call(a, h, g));
            !e && g && g.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return z.get(a, c) || z.access(a, c, {
                empty: d.Callbacks("once memory").add(function() {
                    z.remove(a, [b + "queue", c])
                })
            })
        }
    });
    d.fn.extend({
        queue: function(a, b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length < c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = d.queue(this, a, b);
                d._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && d.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                d.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, e = 1,
                f = d.Deferred(),
                g = this,
                h = this.length,
                l = function() {
                    --e || f.resolveWith(g, [g])
                };
            "string" !== typeof a && (b = a, a = void 0);
            for (a = a || "fx"; h--;)(c = z.get(g[h], a + "queueHooks")) && c.empty && (e++, c.empty.add(l));
            l();
            return f.promise(b)
        }
    });
    var xb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        va = new RegExp("^(?:([+-])=|)(" + xb + ")([a-z%]*)$", "i"),
        ia = ["Top", "Right", "Bottom", "Left"],
        aa = function(a, b) {
            a = b || a;
            return "none" === d.css(a, "display") || !d.contains(a.ownerDocument, a)
        },
        yb = /^(?:checkbox|radio)$/i,
        bb = /<([\w:-]+)/,
        cb = /^$|\/(?:java|ecma)script/i,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    var Lb = /<|&#?\w+;/;
    (function() {
        var a = r.createDocumentFragment().appendChild(r.createElement("div")),
            b = r.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        C.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        C.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    })();
    var $b = /^key/,
        ac = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        zb = /^([^.]*)(?:\.(.+)|)/;
    d.event = {
        global: {},
        add: function(a, b, c, e, f) {
            var g, h, l, k, v, n, p, q, t;
            if (v = z.get(a))
                for (c.handler && (g = c, c = g.handler, f = g.selector), c.guid || (c.guid = d.guid++), (k = v.events) || (k = v.events = {}), (h = v.handle) || (h = v.handle = function(b) {
                        return "undefined" !== typeof d && d.event.triggered !== b.type ? d.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(R) || [""], v = b.length; v--;) l = zb.exec(b[v]) || [], q = n = l[1], t = (l[2] || "").split(".").sort(), q && (l = d.event.special[q] || {}, q = (f ? l.delegateType : l.bindType) || q, l = d.event.special[q] || {}, n = d.extend({
                    type: q,
                    origType: n,
                    data: e,
                    handler: c,
                    guid: c.guid,
                    selector: f,
                    needsContext: f && d.expr.match.needsContext.test(f),
                    namespace: t.join(".")
                }, g), (p = k[q]) || (p = k[q] = [], p.delegateCount = 0, l.setup && !1 !== l.setup.call(a, e, t, h) || a.addEventListener && a.addEventListener(q, h)), l.add && (l.add.call(a, n), n.handler.guid || (n.handler.guid = c.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), d.event.global[q] = !0)
        },
        remove: function(a, b, c, e, f) {
            var g, h, l, k, n, q, p, t, r, T, y, U = z.hasData(a) && z.get(a);
            if (U && (k = U.events)) {
                b = (b || "").match(R) || [""];
                for (n = b.length; n--;)
                    if (l = zb.exec(b[n]) || [], r = y = l[1], T = (l[2] || "").split(".").sort(), r) {
                        p = d.event.special[r] || {};
                        r = (e ? p.delegateType : p.bindType) || r;
                        t = k[r] || [];
                        l = l[2] && new RegExp("(^|\\.)" + T.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (h = g = t.length; g--;) q = t[g], !f && y !== q.origType || c && c.guid !== q.guid || l && !l.test(q.namespace) || e && e !== q.selector && ("**" !== e || !q.selector) || (t.splice(g, 1), q.selector && t.delegateCount--, p.remove && p.remove.call(a, q));
                        h && !t.length && (p.teardown && !1 !== p.teardown.call(a, T, U.handle) || d.removeEvent(a, r, U.handle), delete k[r])
                    } else
                        for (r in k) d.event.remove(a, r + b[n], c, e, !0);
                d.isEmptyObject(k) && z.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = d.event.fix(a);
            var b, c, e, f, g, h = ba.call(arguments);
            b = (z.get(this, "events") || {})[a.type] || [];
            var l = d.event.special[a.type] || {};
            h[0] = a;
            a.delegateTarget = this;
            if (!l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                g = d.event.handlers.call(this, a, b);
                for (b = 0;
                    (f = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, c = 0;
                        (e = f.handlers[c++]) && !a.isImmediatePropagationStopped();)
                        if (!a.rnamespace || a.rnamespace.test(e.namespace)) a.handleObj = e, a.data = e.data, e = ((d.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, h), void 0 !== e && !1 === (a.result = e) && (a.preventDefault(), a.stopPropagation());
                l.postDispatch && l.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var c, e, f, g, h = [],
                l = b.delegateCount,
                k = a.target;
            if (l && k.nodeType && ("click" !== a.type || isNaN(a.button) || 1 > a.button))
                for (; k !== this; k = k.parentNode || this)
                    if (1 === k.nodeType && (!0 !== k.disabled || "click" !== a.type)) {
                        e = [];
                        for (c = 0; c < l; c++) g = b[c], f = g.selector + " ", void 0 === e[f] && (e[f] = g.needsContext ? -1 < d(f, this).index(k) : d.find(f, this, null, [k]).length), e[f] && e.push(g);
                        e.length && h.push({
                            elem: k,
                            handlers: e
                        })
                    }
            l < b.length && h.push({
                elem: this,
                handlers: b.slice(l)
            });
            return h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, f = b.button;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || r, d = c.documentElement, c = c.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0));
                a.which || void 0 === f || (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[d.expando]) return a;
            var b, c, e;
            b = a.type;
            var f = a,
                g = this.fixHooks[b];
            g || (this.fixHooks[b] = g = ac.test(b) ? this.mouseHooks : $b.test(b) ? this.keyHooks : {});
            e = g.props ? this.props.concat(g.props) : this.props;
            a = new d.Event(f);
            for (b = e.length; b--;) c = e[b], a[c] = f[c];
            a.target || (a.target = r);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            return g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Fa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Fa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && d.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return d.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    };
    d.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    };
    d.Event = function(a, b) {
        if (!(this instanceof d.Event)) return new d.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? T : Z) : this.type = a;
        b && d.extend(this, b);
        this.timeStamp = a && a.timeStamp || d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = T;
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = T;
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = T;
            a && !this.isSimulated && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        d.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, f = a.relatedTarget,
                    g = a.handleObj;
                if (!f || f !== this && !d.contains(this, f)) a.type = g.origType, c = g.handler.apply(this, arguments), a.type = b;
                return c
            }
        }
    });
    d.fn.extend({
        on: function(a, b, c, d) {
            return ya(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ya(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var e;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, d(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" === typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b) c = b, b = void 0;
            !1 === c && (c = Z);
            return this.each(function() {
                d.event.remove(this, a, c, b)
            })
        }
    });
    var bc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        cc = /<script|<style|<link/i,
        Nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mb = /^true\/(.*)/,
        Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    d.extend({
        htmlPrefilter: function(a) {
            return a.replace(bc, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var e, f, g, h, l = a.cloneNode(!0),
                k = d.contains(a.ownerDocument, a);
            if (!(C.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a)))
                for (h = q(l), g = q(a), e = 0, f = g.length; e < f; e++) {
                    var n = g[e],
                        t = h[e],
                        p = t.nodeName.toLowerCase();
                    if ("input" === p && yb.test(n.type)) t.checked = n.checked;
                    else if ("input" === p || "textarea" === p) t.defaultValue = n.defaultValue
                }
            if (b)
                if (c)
                    for (g = g || q(a), h = h || q(l), e = 0, f = g.length; e < f; e++) pa(g[e], h[e]);
                else pa(a, l);
            h = q(l, "script");
            0 < h.length && U(h, !k && q(a, "script"));
            return l
        },
        cleanData: function(a) {
            for (var b, c, e, f = d.event.special, g = 0; void 0 !== (c = a[g]); g++)
                if (na(c)) {
                    if (b = c[z.expando]) {
                        if (b.events)
                            for (e in b.events) f[e] ? d.event.remove(c, e) : d.removeEvent(c, e, b.handle);
                        c[z.expando] = void 0
                    }
                    c[D.expando] && (c[D.expando] = void 0)
                }
        }
    });
    d.fn.extend({
        domManip: X,
        detach: function(a) {
            return ga(this, a, !0)
        },
        remove: function(a) {
            return ga(this, a)
        },
        text: function(a) {
            return N(this, function(a) {
                return void 0 === a ? d.text(this) : this.empty().each(function() {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return X(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ga(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return X(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ga(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return X(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return X(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (d.cleanData(q(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return d.clone(this, a, b)
            })
        },
        html: function(a) {
            return N(this, function(a) {
                var b = this[0] || {},
                    e = 0,
                    f = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" === typeof a && !cc.test(a) && !V[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = d.htmlPrefilter(a);
                    try {
                        for (; e < f; e++) b = this[e] || {}, 1 === b.nodeType && (d.cleanData(q(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (g) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return X(this, arguments, function(b) {
                var c = this.parentNode;
                0 > d.inArray(this, a) && (d.cleanData(q(this)), c && c.replaceChild(b, this))
            }, a)
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        d.fn[a] = function(a) {
            for (var c = [], f = d(a), g = f.length - 1, h = 0; h <= g; h++) a = h === g ? this : this.clone(!0), d(f[h])[b](a), Ua.apply(c, a.get());
            return this.pushStack(c)
        }
    });
    var Ia, fb = {
            HTML: "block",
            BODY: "block"
        },
        gb = /^margin/,
        Pa = new RegExp("^(" + xb + ")(?!px)[a-z%]+$", "i"),
        Ja = function(a) {
            var b = a.ownerDocument.defaultView;
            b && b.opener || (b = k);
            return b.getComputedStyle(a)
        },
        Va = function(a, b, c, d) {
            var e, g = {};
            for (e in b) g[e] = a.style[e], a.style[e] = b[e];
            c = c.apply(a, d || []);
            for (e in b) a.style[e] = g[e];
            return c
        },
        xa = r.documentElement;
    (function() {
        function a() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            h.innerHTML = "";
            xa.appendChild(g);
            var a = k.getComputedStyle(h);
            b = "1%" !== a.top;
            f = "2px" === a.marginLeft;
            c = "4px" === a.width;
            h.style.marginRight = "50%";
            e = "4px" === a.marginRight;
            xa.removeChild(g)
        }
        var b, c, e, f, g = r.createElement("div"),
            h = r.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", C.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), d.extend(C, {
            pixelPosition: function() {
                a();
                return b
            },
            boxSizingReliable: function() {
                null == c && a();
                return c
            },
            pixelMarginRight: function() {
                null == c && a();
                return e
            },
            reliableMarginLeft: function() {
                null == c && a();
                return f
            },
            reliableMarginRight: function() {
                var a, b = h.appendChild(r.createElement("div"));
                b.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                b.style.marginRight = b.style.width = "0";
                h.style.width = "1px";
                xa.appendChild(g);
                a = !parseFloat(k.getComputedStyle(b).marginRight);
                xa.removeChild(g);
                h.removeChild(b);
                return a
            }
        }))
    })();
    var dc = /^(none|table(?!-c[ea]).+)/,
        ec = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ab = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        jb = ["Webkit", "O", "Moz", "ms"],
        ib = r.createElement("div").style;
    d.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = qa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, k = d.camelCase(b),
                    m = a.style;
                b = d.cssProps[k] || (d.cssProps[k] = hb(k) || k);
                h = d.cssHooks[b] || d.cssHooks[k];
                if (void 0 !== c) g = typeof c, "string" === g && (f = va.exec(c)) && f[1] && (c = t(a, b, f), g = "number"), null != c && c === c && ("number" === g && (c += f && f[3] || (d.cssNumber[k] ? "" : "px")), C.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (m[b] = "inherit"), h && "set" in h && void 0 === (c = h.set(a, c, e)) || (m[b] = c));
                else return h && "get" in h && void 0 !== (f = h.get(a, !1, e)) ? f : m[b]
            }
        },
        css: function(a, b, c, e) {
            var f, g;
            g = d.camelCase(b);
            b = d.cssProps[g] || (d.cssProps[g] = hb(g) || g);
            (g = d.cssHooks[b] || d.cssHooks[g]) && "get" in g && (f = g.get(a, !0, c));
            void 0 === f && (f = qa(a, b, e));
            "normal" === f && b in Ab && (f = Ab[b]);
            return "" === c || c ? (a = parseFloat(f), !0 === c || isFinite(a) ? a || 0 : f) : f
        }
    });
    d.each(["height", "width"], function(a, b) {
        d.cssHooks[b] = {
            get: function(a, e, f) {
                if (e) return dc.test(d.css(a, "display")) && 0 === a.offsetWidth ? Va(a, ec, function() {
                    return mb(a, b, f)
                }) : mb(a, b, f)
            },
            set: function(a, e, f) {
                var c, h = f && Ja(a);
                (f = f && lb(a, b, f, "border-box" === d.css(a, "boxSizing", !1, h), h)) && (c = va.exec(e)) && "px" !== (c[3] || "px") && (a.style[b] = e, e = d.css(a, b));
                return kb(a, e, f)
            }
        }
    });
    d.cssHooks.marginLeft = Qa(C.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(qa(a, "marginLeft")) || a.getBoundingClientRect().left - Va(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    });
    d.cssHooks.marginRight = Qa(C.reliableMarginRight, function(a, b) {
        if (b) return Va(a, {
            display: "inline-block"
        }, qa, [a, "marginRight"])
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        d.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                    f = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++) f[a + ia[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        gb.test(a) || (d.cssHooks[a + b].set = kb)
    });
    d.fn.extend({
        css: function(a, b) {
            return N(this, function(a, b, f) {
                var c, e = {},
                    k = 0;
                if (d.isArray(b)) {
                    f = Ja(a);
                    for (c = b.length; k < c; k++) e[b[k]] = d.css(a, b[k], !1, f);
                    return e
                }
                return void 0 !== f ? d.style(a, b, f) : d.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return nb(this, !0)
        },
        hide: function() {
            return nb(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                aa(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.Tween = O;
    O.prototype = {
        constructor: O,
        init: function(a, b, c, e, f, g) {
            this.elem = a;
            this.prop = c;
            this.easing = f || d.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (d.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = O.propHooks[this.prop];
            return a && a.get ? a.get(this) : O.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = O.propHooks[this.prop];
            this.pos = this.options.duration ? b = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : O.propHooks._default.set(this);
            return this
        }
    };
    O.prototype.init.prototype = O.prototype;
    O.propHooks = {
        _default: {
            get: function(a) {
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (a = d.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0
            },
            set: function(a) {
                if (d.fx.step[a.prop]) d.fx.step[a.prop](a);
                else 1 !== a.elem.nodeType || null == a.elem.style[d.cssProps[a.prop]] && !d.cssHooks[a.prop] ? a.elem[a.prop] = a.now : d.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    d.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    d.fx = O.prototype.init;
    d.fx.step = {};
    var ja, Na, fc = /^(?:toggle|show|hide)$/,
        gc = /queueHooks$/;
    d.Animation = d.extend(W, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                t(c.elem, a, va.exec(b), c);
                return c
            }]
        },
        tweener: function(a, b) {
            d.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(R);
            for (var c, e = 0, f = a.length; e < f; e++) c = a[e], W.tweeners[c] = W.tweeners[c] || [], W.tweeners[c].unshift(b)
        },
        prefilters: [function(a, b, c) {
            var e, f, g, h, k, m, n = this,
                q = {},
                p = a.style,
                t = a.nodeType && aa(a),
                r = z.get(a, "fxshow");
            c.queue || (h = d._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function() {
                h.unqueued || k()
            }), h.unqueued++, n.always(function() {
                n.always(function() {
                    h.unqueued--;
                    d.queue(a, "fx").length || h.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], m = d.css(a, "display"), f = "none" === m ? z.get(a, "olddisplay") || Oa(a.nodeName) : m, "inline" === f && "none" === d.css(a, "float") && (p.display = "inline-block"));
            c.overflow && (p.overflow = "hidden", n.always(function() {
                p.overflow = c.overflow[0];
                p.overflowX = c.overflow[1];
                p.overflowY = c.overflow[2]
            }));
            for (e in b)
                if (f = b[e], fc.exec(f)) {
                    delete b[e];
                    g = g || "toggle" === f;
                    if (f === (t ? "hide" : "show"))
                        if ("show" === f && r && void 0 !== r[e]) t = !0;
                        else continue;
                    q[e] = r && r[e] || d.style(a, e)
                } else m = void 0;
            if (d.isEmptyObject(q)) "inline" === ("none" === m ? Oa(a.nodeName) : m) && (p.display = m);
            else
                for (e in r ? "hidden" in r && (t = r.hidden) : r = z.access(a, "fxshow", {}), g && (r.hidden = !t), t ? d(a).show() : n.done(function() {
                        d(a).hide()
                    }), n.done(function() {
                        var b;
                        z.remove(a, "fxshow");
                        for (b in q) d.style(a, b, q[b])
                    }), q) b = pb(t ? r[e] : 0, e, n), e in r || (r[e] = b.start, t && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
        }],
        prefilter: function(a, b) {
            b ? W.prefilters.unshift(a) : W.prefilters.push(a)
        }
    });
    d.speed = function(a, b, c) {
        var e = a && "object" === typeof a ? d.extend({}, a) : {
            complete: c || !c && b || d.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !d.isFunction(b) && b
        };
        e.duration = d.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            d.isFunction(e.old) && e.old.call(this);
            e.queue && d.dequeue(this, e.queue)
        };
        return e
    };
    d.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(aa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, e) {
            var f = d.isEmptyObject(a),
                g = d.speed(b, c, e);
            b = function() {
                var b = W(this, d.extend({}, a), g);
                (f || z.get(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b = !0,
                    g = null != a && a + "queueHooks",
                    h = d.timers,
                    k = z.get(this);
                if (g) k[g] && k[g].stop && e(k[g]);
                else
                    for (g in k) k[g] && k[g].stop && gc.test(g) && e(k[g]);
                for (g = h.length; g--;) h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(c), b = !1, h.splice(g, 1));
                !b && c || d.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b, c = z.get(this),
                    e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = d.timers,
                    g = e ? e.length : 0;
                c.finish = !0;
                d.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"], function(a, b) {
        var c = d.fn[b];
        d.fn[b] = function(a, d, g) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(Ka(b, !0), a, d, g)
        }
    });
    d.each({
        slideDown: Ka("show"),
        slideUp: Ka("hide"),
        slideToggle: Ka("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        d.fn[a] = function(a, d, f) {
            return this.animate(b, a, d, f)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var a, b = 0,
            c = d.timers;
        for (ja = d.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || d.fx.stop();
        ja = void 0
    };
    d.fx.timer = function(a) {
        d.timers.push(a);
        a() ? d.fx.start() : d.timers.pop()
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        Na || (Na = k.setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.stop = function() {
        k.clearInterval(Na);
        Na = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(a, b) {
        a = d.fx ? d.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(b, d) {
            var c = k.setTimeout(b, a);
            d.stop = function() {
                k.clearTimeout(c)
            }
        })
    };
    (function() {
        var a = r.createElement("input"),
            b = r.createElement("select"),
            c = b.appendChild(r.createElement("option"));
        a.type = "checkbox";
        C.checkOn = "" !== a.value;
        C.optSelected = c.selected;
        b.disabled = !0;
        C.optDisabled = !c.disabled;
        a = r.createElement("input");
        a.value = "t";
        a.type = "radio";
        C.radioValue = "t" === a.value
    })();
    var Bb, ua = d.expr.attrHandle;
    d.fn.extend({
        attr: function(a, b) {
            return N(this, d.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                d.removeAttr(this, a)
            })
        }
    });
    d.extend({
        attr: function(a, b, c) {
            var e, f, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) {
                if ("undefined" === typeof a.getAttribute) return d.prop(a, b, c);
                1 === g && d.isXMLDoc(a) || (b = b.toLowerCase(), f = d.attrHooks[b] || (d.expr.match.bool.test(b) ? Bb : void 0));
                if (void 0 !== c) {
                    if (null === c) {
                        d.removeAttr(a, b);
                        return
                    }
                    if (f && "set" in f && void 0 !== (e = f.set(a, c, b))) return e;
                    a.setAttribute(b, c + "");
                    return c
                }
                if (f && "get" in f && null !== (e = f.get(a, b))) return e;
                e = d.find.attr(a, b);
                return null == e ? void 0 : e
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!C.radioValue && "radio" === b && d.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e, f = 0,
                g = b && b.match(R);
            if (g && 1 === a.nodeType)
                for (; c = g[f++];) e = d.propFix[c] || c, d.expr.match.bool.test(c) && (a[e] = !1), a.removeAttribute(c)
        }
    });
    Bb = {
        set: function(a, b, c) {
            !1 === b ? d.removeAttr(a, c) : a.setAttribute(c, c);
            return c
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ua[b] || d.find.attr;
        ua[b] = function(a, b, d) {
            var e, f;
            d || (f = ua[b], ua[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ua[b] = f);
            return e
        }
    });
    var hc = /^(?:input|select|textarea|button)$/i,
        ic = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(a, b) {
            return N(this, d.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[d.propFix[a] || a]
            })
        }
    });
    d.extend({
        prop: function(a, b, c) {
            var e, f, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) return 1 === g && d.isXMLDoc(a) || (b = d.propFix[b] || b, f = d.propHooks[b]), void 0 !== c ? f && "set" in f && void 0 !== (e = f.set(a, c, b)) ? e : a[b] = c : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = d.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : hc.test(a.nodeName) || ic.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    C.optSelected || (d.propHooks.selected = {
        get: function(a) {
            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
            return null
        },
        set: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex
        }
    });
    d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        d.propFix[this.toLowerCase()] = this
    });
    var Wa = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(a) {
            var b, c, e, f, g, h, k = 0;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).addClass(a.call(this, b, Y(this)))
            });
            if ("string" === typeof a && a)
                for (b = a.match(R) || []; c = this[k++];)
                    if (f = Y(c), e = 1 === c.nodeType && (" " + f + " ").replace(Wa, " ")) {
                        for (h = 0; g = b[h++];) 0 > e.indexOf(" " + g + " ") && (e += g + " ");
                        e = d.trim(e);
                        f !== e && c.setAttribute("class", e)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, e, f, g, h, k = 0;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).removeClass(a.call(this, b, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" === typeof a && a)
                for (b = a.match(R) || []; c = this[k++];)
                    if (f = Y(c), e = 1 === c.nodeType && (" " + f + " ").replace(Wa, " ")) {
                        for (h = 0; g = b[h++];)
                            for (; - 1 < e.indexOf(" " + g + " ");) e = e.replace(" " + g + " ", " ");
                        e = d.trim(e);
                        f !== e && c.setAttribute("class", e)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : d.isFunction(a) ? this.each(function(c) {
                d(this).toggleClass(a.call(this, c, Y(this), b), b)
            }) : this.each(function() {
                var b, f, g, h;
                if ("string" === c)
                    for (f = 0, g = d(this), h = a.match(R) || []; b = h[f++];) g.hasClass(b) ? g.removeClass(b) : g.addClass(b);
                else if (void 0 === a || "boolean" === c)(b = Y(this)) && z.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : z.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + Y(b) + " ").replace(Wa, " ").indexOf(a)) return !0;
            return !1
        }
    });
    var jc = /\r/g,
        kc = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(a) {
            var b, c, e, f = this[0];
            if (arguments.length) return e = d.isFunction(a), this.each(function(c) {
                1 === this.nodeType && (c = e ? a.call(this, c, d(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : d.isArray(c) && (c = d.map(c, function(a) {
                    return null == a ? "" : a + ""
                })), b = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            });
            if (f) {
                if ((b = d.valHooks[f.type] || d.valHooks[f.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(f, "value"))) return c;
                c = f.value;
                return "string" === typeof c ? c.replace(jc, "") : null == c ? "" : c
            }
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = d.find.attr(a, "value");
                    return null != b ? b : d.trim(d.text(a)).replace(kc, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ? null : [], g = a ? e + 1 : c.length, h = 0 > e ? g : a ? e : 0; h < g; h++)
                        if (b = c[h], !(!b.selected && h !== e || (C.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && d.nodeName(b.parentNode, "optgroup"))) {
                            b = d(b).val();
                            if (a) return b;
                            f.push(b)
                        }
                    return f
                },
                set: function(a, b) {
                    for (var c, e, f = a.options, g = d.makeArray(b), h = f.length; h--;)
                        if (e = f[h], e.selected = -1 < d.inArray(d.valHooks.option.get(e), g)) c = !0;
                    c || (a.selectedIndex = -1);
                    return g
                }
            }
        }
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(a, b) {
                if (d.isArray(b)) return a.checked = -1 < d.inArray(d(a).val(), b)
            }
        };
        C.checkOn || (d.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Cb = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(a, b, c, e) {
            var f, g, h, l, m, n, q = [c || r],
                p = wa.call(a, "type") ? a.type : a;
            n = wa.call(a, "namespace") ? a.namespace.split(".") : [];
            g = f = c = c || r;
            if (3 !== c.nodeType && 8 !== c.nodeType && !Cb.test(p + d.event.triggered) && (-1 < p.indexOf(".") && (n = p.split("."), p = n.shift(), n.sort()), l = 0 > p.indexOf(":") && "on" + p, a = a[d.expando] ? a : new d.Event(p, "object" === typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = n.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), n = d.event.special[p] || {}, e || !n.trigger || !1 !== n.trigger.apply(c, b))) {
                if (!e && !n.noBubble && !d.isWindow(c)) {
                    h = n.delegateType || p;
                    Cb.test(h + p) || (g = g.parentNode);
                    for (; g; g = g.parentNode) q.push(g), f = g;
                    f === (c.ownerDocument || r) && q.push(f.defaultView || f.parentWindow || k)
                }
                for (f = 0;
                    (g = q[f++]) && !a.isPropagationStopped();) a.type = 1 < f ? h : n.bindType || p, (m = (z.get(g, "events") || {})[a.type] && z.get(g, "handle")) && m.apply(g, b), (m = l && g[l]) && m.apply && na(g) && (a.result = m.apply(g, b), !1 === a.result && a.preventDefault());
                a.type = p;
                e || a.isDefaultPrevented() || n._default && !1 !== n._default.apply(q.pop(), b) || !na(c) || !l || !d.isFunction(c[p]) || d.isWindow(c) || ((f = c[l]) && (c[l] = null), d.event.triggered = p, c[p](), d.event.triggered = void 0, f && (c[l] = f));
                return a.result
            }
        },
        simulate: function(a, b, c) {
            a = d.extend(new d.Event, c, {
                type: a,
                isSimulated: !0
            });
            d.event.trigger(a, null, b)
        }
    });
    d.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                d.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return d.event.trigger(a, b, c, !0)
        }
    });
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        d.fn[b] = function(a, d) {
            return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b)
        }
    });
    d.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    C.focusin = "onfocusin" in k;
    C.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            d.event.simulate(b, a.target, d.event.fix(a))
        };
        d.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    f = z.access(d, b);
                f || d.addEventListener(a, c, !0);
                z.access(d, b, (f || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    f = z.access(d, b) - 1;
                f ? z.access(d, b, f) : (d.removeEventListener(a, c, !0), z.remove(d, b))
            }
        }
    });
    var Ca = k.location,
        Xa = d.now(),
        Ya = /\?/;
    d.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    d.parseXML = function(a) {
        var b;
        if (!a || "string" !== typeof a) return null;
        try {
            b = (new k.DOMParser).parseFromString(a, "text/xml")
        } catch (c) {
            b = void 0
        }
        b && !b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a);
        return b
    };
    var lc = /#.*$/,
        Db = /([?&])_=[^&]*/,
        mc = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        nc = /^(?:GET|HEAD)$/,
        oc = /^\/\//,
        Eb = {},
        Ra = {},
        Fb = "*/".concat("*"),
        Za = r.createElement("a");
    Za.href = Ca.href;
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ca.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ca.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Fb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Sa(Sa(a, d.ajaxSettings), b) : Sa(d.ajaxSettings, a)
        },
        ajaxPrefilter: qb(Eb),
        ajaxTransport: qb(Ra),
        ajax: function(a, b) {
            function c(a, b, c, h) {
                var m, q, r, v;
                v = b;
                if (2 !== I) {
                    I = 2;
                    l && k.clearTimeout(l);
                    e = void 0;
                    g = h || "";
                    u.readyState = 0 < a ? 4 : 0;
                    h = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        r = p;
                        for (var C = u, A, D, E, H, Q = r.contents, x = r.dataTypes;
                            "*" === x[0];) x.shift(), void 0 === A && (A = r.mimeType || C.getResponseHeader("Content-Type"));
                        if (A)
                            for (D in Q)
                                if (Q[D] && Q[D].test(A)) {
                                    x.unshift(D);
                                    break
                                }
                        if (x[0] in c) E = x[0];
                        else {
                            for (D in c) {
                                if (!x[0] || r.converters[D + " " + x[0]]) {
                                    E = D;
                                    break
                                }
                                H || (H = D)
                            }
                            E = E || H
                        }
                        E ? (E !== x[0] && x.unshift(E), r = c[E]) : r = void 0
                    }
                    a: {
                        c = p;A = r;D = u;E = h;
                        var G, F, B, C = {},
                            Q = c.dataTypes.slice();
                        if (Q[1])
                            for (F in c.converters) C[F.toLowerCase()] = c.converters[F];
                        for (H = Q.shift(); H;)
                            if (c.responseFields[H] && (D[c.responseFields[H]] = A), !B && E && c.dataFilter && (A = c.dataFilter(A, c.dataType)), B = H, H = Q.shift())
                                if ("*" === H) H = B;
                                else if ("*" !== B && B !== H) {
                            F = C[B + " " + H] || C["* " + H];
                            if (!F)
                                for (G in C)
                                    if (r = G.split(" "), r[1] === H && (F = C[B + " " + r[0]] || C["* " + r[0]])) {
                                        !0 === F ? F = C[G] : !0 !== C[G] && (H = r[0], Q.unshift(r[1]));
                                        break
                                    }
                            if (!0 !== F)
                                if (F && c["throws"]) A = F(A);
                                else try {
                                    A = F(A)
                                } catch (Wb) {
                                    r = {
                                        state: "parsererror",
                                        error: F ? Wb : "No conversion from " + B + " to " + H
                                    };
                                    break a
                                }
                        }
                        r = {
                            state: "success",
                            data: A
                        }
                    }
                    if (h) p.ifModified && ((v = u.getResponseHeader("Last-Modified")) && (d.lastModified[f] = v), (v = u.getResponseHeader("etag")) && (d.etag[f] = v)), 204 === a || "HEAD" === p.type ? v = "nocontent" : 304 === a ? v = "notmodified" : (v = r.state, m = r.data, q = r.error, h = !q);
                    else if (q = v, a || !v) v = "error", 0 > a && (a = 0);
                    u.status = a;
                    u.statusText = (b || v) + "";
                    h ? T.resolveWith(t, [m, v, u]) : T.rejectWith(t, [u, v, q]);
                    u.statusCode(y);
                    y = void 0;
                    n && z.trigger(h ? "ajaxSuccess" : "ajaxError", [u, p, h ? m : q]);
                    U.fireWith(t, [u, v]);
                    n && (z.trigger("ajaxComplete", [u, p]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, g, h, l, m, n, q, p = d.ajaxSetup({}, b),
                t = p.context || p,
                z = p.context && (t.nodeType || t.jquery) ? d(t) : d.event,
                T = d.Deferred(),
                U = d.Callbacks("once memory"),
                y = p.statusCode || {},
                C = {},
                D = {},
                I = 0,
                E = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === I) {
                            if (!h)
                                for (h = {}; b = mc.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === I ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        I || (a = D[c] = D[c] || a, C[a] = b);
                        return this
                    },
                    overrideMimeType: function(a) {
                        I || (p.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > I)
                                for (b in a) y[b] = [y[b], a[b]];
                            else u.always(a[u.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || E;
                        e && e.abort(a);
                        c(0, a);
                        return this
                    }
                };
            T.promise(u).complete = U.add;
            u.success = u.done;
            u.error = u.fail;
            p.url = ((a || p.url || Ca.href) + "").replace(lc, "").replace(oc, Ca.protocol + "//");
            p.type = b.method || b.type || p.method || p.type;
            p.dataTypes = d.trim(p.dataType || "*").toLowerCase().match(R) || [""];
            if (null == p.crossDomain) {
                m = r.createElement("a");
                try {
                    m.href = p.url, m.href = m.href, p.crossDomain = Za.protocol + "//" + Za.host !== m.protocol + "//" + m.host
                } catch (Q) {
                    p.crossDomain = !0
                }
            }
            p.data && p.processData && "string" !== typeof p.data && (p.data = d.param(p.data, p.traditional));
            rb(Eb, p, b, u);
            if (2 === I) return u;
            (n = d.event && p.global) && 0 === d.active++ && d.event.trigger("ajaxStart");
            p.type = p.type.toUpperCase();
            p.hasContent = !nc.test(p.type);
            f = p.url;
            p.hasContent || (p.data && (f = p.url += (Ya.test(f) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Db.test(f) ? f.replace(Db, "$1_=" + Xa++) : f + (Ya.test(f) ? "&" : "?") + "_=" + Xa++));
            p.ifModified && (d.lastModified[f] && u.setRequestHeader("If-Modified-Since", d.lastModified[f]), d.etag[f] && u.setRequestHeader("If-None-Match", d.etag[f]));
            (p.data && p.hasContent && !1 !== p.contentType || b.contentType) && u.setRequestHeader("Content-Type", p.contentType);
            u.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Fb + "; q=0.01" : "") : p.accepts["*"]);
            for (q in p.headers) u.setRequestHeader(q, p.headers[q]);
            if (p.beforeSend && (!1 === p.beforeSend.call(t, u, p) || 2 === I)) return u.abort();
            E = "abort";
            for (q in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) u[q](p[q]);
            if (e = rb(Ra, p, b, u)) {
                u.readyState = 1;
                n && z.trigger("ajaxSend", [u, p]);
                if (2 === I) return u;
                p.async && 0 < p.timeout && (l = k.setTimeout(function() {
                    u.abort("timeout")
                }, p.timeout));
                try {
                    I = 1, e.send(C, c)
                } catch (Q) {
                    if (2 > I) c(-1, Q);
                    else throw Q;
                }
            } else c(-1, "No Transport");
            return u
        },
        getJSON: function(a, b, c) {
            return d.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return d.get(a, void 0, b, "script")
        }
    });
    d.each(["get", "post"], function(a, b) {
        d[b] = function(a, e, f, g) {
            d.isFunction(e) && (g = g || f, f = e, e = void 0);
            return d.ajax(d.extend({
                url: a,
                type: b,
                dataType: g,
                data: e,
                success: f
            }, d.isPlainObject(a) && a))
        }
    });
    d._evalUrl = function(a) {
        return d.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    d.fn.extend({
        wrapAll: function(a) {
            var b;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).wrapAll(a.call(this, b))
            });
            this[0] && (b = d(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this));
            return this
        },
        wrapInner: function(a) {
            return d.isFunction(a) ? this.each(function(b) {
                d(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = d(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = d.isFunction(a);
            return this.each(function(c) {
                d(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function(a) {
        return !d.expr.filters.visible(a)
    };
    d.expr.filters.visible = function(a) {
        return 0 < a.offsetWidth || 0 < a.offsetHeight || 0 < a.getClientRects().length
    };
    var pc = /%20/g,
        Qb = /\[\]$/,
        Gb = /\r?\n/g,
        qc = /^(?:submit|button|image|reset|file)$/i,
        rc = /^(?:input|select|textarea|keygen)/i;
    d.param = function(a, b) {
        var c, e = [],
            f = function(a, b) {
                b = d.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        void 0 === b && (b = d.ajaxSettings && d.ajaxSettings.traditional);
        if (d.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (c in a) Ta(c, a[c], b, f);
        return e.join("&").replace(pc, "+")
    };
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = d.prop(this, "elements");
                return a ? d.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !d(this).is(":disabled") && rc.test(this.nodeName) && !qc.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = d(this).val();
                return null == c ? null : d.isArray(c) ? d.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Gb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Gb, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = function() {
        try {
            return new k.XMLHttpRequest
        } catch (a) {}
    };
    var sc = {
            0: 200,
            1223: 204
        },
        Da = d.ajaxSettings.xhr();
    C.cors = !!Da && "withCredentials" in Da;
    C.ajax = Da = !!Da;
    d.ajaxTransport(function(a) {
        var b, c;
        if (C.cors || Da && !a.crossDomain) return {
            send: function(d, f) {
                var e, h = a.xhr();
                h.open(a.type, a.url, a.async, a.username, a.password);
                if (a.xhrFields)
                    for (e in a.xhrFields) h[e] = a.xhrFields[e];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (e in d) h.setRequestHeader(e, d[e]);
                b = function(a) {
                    return function() {
                        b && (b = c = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" !== typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(sc[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" !== typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                };
                h.onload = b();
                c = h.onerror = b("error");
                void 0 !== h.onabort ? h.onabort = c : h.onreadystatechange = function() {
                    4 === h.readyState && k.setTimeout(function() {
                        b && c()
                    })
                };
                b = b("abort");
                try {
                    h.send(a.hasContent && a.data || null)
                } catch (l) {
                    if (b) throw l;
                }
            },
            abort: function() {
                b && b()
            }
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                d.globalEval(a);
                return a
            }
        }
    });
    d.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    d.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = d("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && f("error" === a.type ? 404 : 200, a.type)
                    });
                    r.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hb = [],
        $a = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hb.pop() || d.expando + "_" + Xa++;
            this[a] = !0;
            return a
        }
    });
    d.ajaxPrefilter("json jsonp", function(a, b, c) {
        var e, f, g, h = !1 !== a.jsonp && ($a.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && $a.test(a.data) && "data");
        if (h || "jsonp" === a.dataTypes[0]) return e = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace($a, "$1" + e) : !1 !== a.jsonp && (a.url += (Ya.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
            g || d.error(e + " was not called");
            return g[0]
        }, a.dataTypes[0] = "json", f = k[e], k[e] = function() {
            g = arguments
        }, c.always(function() {
            void 0 === f ? d(k).removeProp(e) : k[e] = f;
            a[e] && (a.jsonpCallback = b.jsonpCallback, Hb.push(e));
            g && d.isFunction(f) && f(g[0]);
            g = f = void 0
        }), "script"
    });
    d.parseHTML = function(a, b, c) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || r;
        var e = vb.exec(a);
        c = !c && [];
        if (e) return [b.createElement(e[1])];
        e = I([a], b, c);
        c && c.length && d(c).remove();
        return d.merge([], e.childNodes)
    };
    var Ib = d.fn.load;
    d.fn.load = function(a, b, c) {
        if ("string" !== typeof a && Ib) return Ib.apply(this, arguments);
        var e, f, g, h = this,
            k = a.indexOf(" "); - 1 < k && (e = d.trim(a.slice(k)), a = a.slice(0, k));
        d.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (f = "POST");
        0 < h.length && d.ajax({
            url: a,
            type: f || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            g = arguments;
            h.html(e ? d("<div>").append(d.parseHTML(a)).find(e) : a)
        }).always(c && function(a, b) {
            h.each(function() {
                c.apply(this, g || [a.responseText, b, a])
            })
        });
        return this
    };
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        d.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    d.expr.filters.animated = function(a) {
        return d.grep(d.timers, function(b) {
            return a === b.elem
        }).length
    };
    
    
    
    
    d.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        d.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            d.fn[e] = function(e, g) {
                var f = arguments.length && (c || "boolean" !== typeof e),
                    k = c || (!0 === e || !0 === g ? "margin" : "border");
                return N(this, function(b, c, e) {
                    return d.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === e ? d.css(b, c, k) : d.style(b, c, e, k)
                }, b, f ? e : void 0, f, null)
            }
        })
    });


    var tc = k.jQuery,
        uc = k.$;
    d.noConflict = function(a) {
        k.$ === d && (k.$ = uc);
        a && k.jQuery === d && (k.jQuery = tc);
        return d
    };
    B || (k.jQuery = k.$ = d);
    return d
});
window.yii = function(k) {    
    return y
}(window.jQuery);
window.jQuery(function() {
    window.yii.initModule(window.yii)
});