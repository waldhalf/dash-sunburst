window.dash_sunburst = function(n) {
    var t = {};

    function e(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    return e.m = n, e.c = t, e.d = function(n, t, r) {
        e.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: r
        })
    }, e.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, e.t = function(n, t) {
        if (1 & t && (n = e(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var i in n) e.d(r, i, function(t) {
                return n[t]
            }.bind(null, i));
        return r
    }, e.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, e.p = "", e(e.s = 0)
}([function(n, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Sunburst = void 0;
    var r = function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }(e(1));
    t.Sunburst = r.default
}, function(n, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function n(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }
            return function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
        }(),
        i = e(2),
        u = l(i),
        o = l(e(3)),
        a = l(e(6));

    function l(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    var c = function(n) {
        function t() {
            return function(n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function(n, t) {
                    if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? n : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(n, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            n.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
        }(t, i.Component), r(t, [{
            key: "componentDidMount",
            value: function() {
                var n = this;
                this.sunburst = new a.default(this.el, this.props, function(t) {
                    var e = n.props.setProps,
                        r = t.selectedPath;
                    e ? e({
                        selectedPath: r
                    }) : n.setState({
                        selectedPath: r
                    })
                })
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.sunburst.update(this.props)
            }
        }, {
            key: "render",
            value: function() {
                var n = this;
                return u.default.createElement("div", {
                    id: this.props.id,
                    ref: function(t) {
                        n.el = t
                    }
                })
            }
        }]), t
    }();
    t.default = c, c.defaultProps = {
        interactive: !0
    }, c.propTypes = {
        id: o.default.string,
        setProps: o.default.func,
        width: o.default.number,
        height: o.default.number,
        padding: o.default.number,
        innerRadius: o.default.number,
        transitionDuration: o.default.number,
        data: o.default.object.isRequired,
        dataVersion: o.default.oneOfType([o.default.string, o.default.number]),
        selectedPath: o.default.arrayOf(o.default.string),
        interactive: o.default.bool
    }
}, function(n, t) {
    n.exports = window.React
}, function(n, t, e) {
    n.exports = e(4)()
}, function(n, t, e) {
    "use strict";
    var r = e(5);

    function i() {}
    n.exports = function() {
        function n(n, t, e, i, u, o) {
            if (o !== r) {
                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw a.name = "Invariant Violation", a
            }
        }

        function t() {
            return n
        }
        n.isRequired = n;
        var e = {
            array: n,
            bool: n,
            func: n,
            number: n,
            object: n,
            string: n,
            symbol: n,
            any: n,
            arrayOf: t,
            element: n,
            instanceOf: t,
            node: n,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return e.checkPropTypes = i, e.PropTypes = e, e
    }
}, function(n, t, e) {
    "use strict";
    n.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(n, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        i = function() {
            function n(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }
            return function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
        }(),
        u = function(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }(e(7));
    var o = 600,
        a = 500,
        l = 10,
        c = 20,
        f = 750,
        s = u.default.format(",.3g"),
        h = 2 * Math.PI;

    function p(n, t, e) {
        return Math.max(t, Math.min(e, n))
    }
    var g = {
            fill: "#444",
            "text-anchor": "middle",
            "font-size": "6px",
            "font-family": "Arial",
            "text-shadow": "white -1px 0px 0.5px, white 0px -1px 0.5px, white 0px 1px 0.5px, white 1px 0px 0.5px"
        },
        d = function() {
            function n(t, e, r) {
                ! function(n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                var i = this;
                i.update = i.update.bind(i), i._update = i._update.bind(i), i.svg = u.default.select(t).append("svg"), i.pathGroup = i.svg.append("g"), i.textGroup = i.svg.append("g").style("pointer-events", "none"), i.angularScale = u.default.scale.linear().range([0, h]), i.radialScale = u.default.scale.sqrt(), i.colorScale = u.default.scale.category20(), i.partition = u.default.layout.partition().value(function(n) {
                    return !n.children && n.size
                }).sort(function(n, t) {
                    return n.i - t.i
                }), i.arc = u.default.svg.arc().startAngle(function(n) {
                    return p(i.angularScale(n.x), 0, h)
                }).endAngle(function(n) {
                    return p(i.angularScale(n.x + n.dx), 0, h)
                }).innerRadius(function(n) {
                    return Math.max(0, i.radialScale(n.y))
                }).outerRadius(function(n) {
                    return Math.max(0, i.radialScale(n.y + n.dy))
                }), i.figure = {}, i.onChange = r, i.initialized = !1, i._promise = Promise.resolve(), i.update(e)
            }
            return i(n, [{
                key: "update",
                value: function(n) {
                    var t = this;
                    t._promise = t._promise.then(function() {
                        return t._update(n)
                    })
                }
            }, {
                key: "_update",
                value: function(n) {
                    var t = this,
                        e = t.figure,
                        i = n.width || o,
                        p = n.height || a,
                        d = !1 !== n.interactive,
                        x = n.padding || l,
                        M = n.innerRadius || c,
                        b = n.transitionDuration || f,
                        _ = n.data,
                        w = n.dataVersion,
                        S = n.selectedPath || [],
                        k = t.figure = {
                            width: i,
                            height: p,
                            interactive: d,
                            padding: x,
                            innerRadius: M,
                            transitionDuration: b,
                            data: _,
                            dataVersion: w,
                            selectedPath: S
                        },
                        N = function(n) {
                            return [n.x, n.x + n.dx]
                        },
                        E = function(n) {
                            return [n.y, 1]
                        },
                        A = function(n) {
                            return [n.y ? t.figure.innerRadius : 0, t.radius]
                        },
                        C = function(n) {
                            return t.radialScale(n.y + n.dy / 2)
                        },
                        T = function(n) {
                            return t.angularScale(n.x + n.dx / 2)
                        },
                        z = function(n) {
                            return C(n) * Math.sin(T(n))
                        },
                        q = function(n) {
                            return -C(n) * Math.cos(T(n))
                        },
                        L = function(n) {
                            return "rotate(" + ((360 * T(n) / h + (function(n) {
                                var e = t.angularScale(n.x + n.dx) - t.angularScale(n.x),
                                    r = t.radialScale(n.y),
                                    i = t.radialScale(n.y + n.dy) / r - 1;
                                return r && i / e > 1
                            }(n) ? 0 : 90)) % 180 - 90) + "," + z(n) + "," + q(n) + ")"
                        },
                        P = function(n) {
                            return T(n) > 0 && T(n) < h && C(n) > 0 && C(n) < t.radius ? 1 : 0
                        },
                        R = function(n) {
                            return {
                                x: n.x,
                                dx: n.dx,
                                y: n.y,
                                dy: n.dy
                            }
                        };

                    function D(n) {
                        return function(e) {
                            return function(r) {
                                var i = t.oldDataMap[y(e)];
                                if (i && i !== e) {
                                    var o = u.default.interpolateObject(R(i), R(e));
                                    return n(o(r))
                                }
                                return n(e)
                            }
                        }
                    }
                    var j = function(n) {
                            t.transitioning = !0;
                            var e = t.svg.transition().duration(t.figure.transitionDuration).tween("scale", function() {
                                var e = u.default.interpolate(t.angularScale.domain(), N(n)),
                                    r = u.default.interpolate(t.radialScale.domain(), E(n)),
                                    i = u.default.interpolate(t.radialScale.range(), A(n));
                                return function(n) {
                                    t.angularScale.domain(e(n)), t.radialScale.domain(r(n)).range(i(n))
                                }
                            });
                            return e.selectAll("path").attrTween("d", D(t.arc)), e.selectAll("text").attrTween("x", D(z)).attrTween("y", D(q)).attrTween("transform", D(L)).attrTween("opacity", D(P)), t.onChange && (t.figure.selectedPath = v(n), t.onChange(t.figure)), e
                        },
                        O = function(n, e, r) {
                            r && (n.enter().append("path").style({
                                stroke: "#fff",
                                strokeWidth: 1
                            }).on("click", function(n) {
                                t.transitioning || (t._promise = t._promise.then(function() {
                                    return new Promise(function(e) {
                                        t.figure.interactive ? j(n).each("end", function() {
                                            t.transitioning = !1, e()
                                        }) : e()
                                    })
                                }))
                            }).append("title"), e.enter().append("text").style(g).text(function(n) {
                                return n.name
                            }));
                            n.attr("d", t.arc).style("fill", function(n) {
                                return n.color || !n.children && n.parent.color || t.colorScale(y(n.children ? n : n.parent))
                            }), n.select("title").text(function(n) {
                                return n.name + "\n" + s(n.value)
                            }), e.attr("x", z).attr("y", q).attr("transform", L).attr("opacity", P);
                            var i = t.oldDataMap = {};
                            n.each(function(n) {
                                i[y(n)] = R(n)
                            })
                        },
                        U = Promise.resolve(),
                        F = function(n, t) {
                            var e = "Version",
                                i = {},
                                u = !1;
                            for (var o in t) o.substr(o.length - e.length) !== e && ("object" === r(t[o]) ? t[o + e] ? t[o + e] !== n[o + e] && (i[o] = 1, u = !0) : JSON.stringify(n[o]) !== JSON.stringify(t[o]) && (i[o] = 1, u = !0) : n[o] !== t[o] && (i[o] = 1, u = !0));
                            return u && i
                        }(e, k);
                    if (!F) return U;
                    var H = F.width || F.height || F.padding,
                        I = F.data,
                        Y = t.rootName,
                        V = t.rootName = _.name,
                        Z = t.selectedPath,
                        X = t.selectedPath = S.slice();
                    H && function() {
                        t.radius = Math.min(p, i) / 2 - x, t.svg.attr({
                            width: i,
                            height: p
                        });
                        var n = "translate(" + i / 2 + "," + p / 2 + ")";
                        t.pathGroup.attr("transform", n), t.textGroup.attr("transform", n)
                    }();
                    var $ = t.pathGroup.selectAll("path"),
                        B = t.textGroup.selectAll("text");
                    I && (t.nodes = t.partition.nodes(function n(t) {
                        t.children && t.children.forEach(function(t, e) {
                            t.i = e, n(t)
                        });
                        return t
                    }(JSON.parse(JSON.stringify(_)))), $ = $.data(t.nodes, y), B = B.data(t.nodes, y), $.exit().remove(), B.exit().remove());
                    var G = m(t.nodes[0], S);
                    if (!G) return U;
                    var J = t.initialized && V === Y && function(n, t) {
                        for (var e = Math.min(n.length, t.length), r = 0; r < e; r++)
                            if (n[r] !== t[r]) return !1;
                        return !0
                    }(Z, X) && (!I || m(e.data, X));
                    return console.log(J, Z, X), J ? U = new Promise(function(n) {
                        j(G).each("end", function() {
                            O($, B, I), t.transitioning = !1, n()
                        })
                    }) : (t.angularScale.domain(N(G)), t.radialScale.domain(E(G)), t.radialScale.range(A(G)), O($, B, I), t.initialized = !0), U
                }
            }]), n
        }();

    function v(n) {
        return n.parent ? v(n.parent).concat([n.name]) : []
    }

    function y(n) {
        return v(n).join(",") || n.name
    }

    function m(n, t) {
        if (!t.length) return n;
        if (!n.children) return !1;
        for (var e = void 0, r = 0; r < n.children.length; r++)
            if ((e = n.children[r]).name === t[0]) return m(e, t.slice(1));
        return !1
    }
    t.default = d
}, function(n, t, e) {
    var r, i;
    ! function() {
        var u = {
                version: "3.5.17"
            },
            o = [].slice,
            a = function(n) {
                return o.call(n)
            },
            l = this.document;

        function c(n) {
            return n && (n.ownerDocument || n.document || n).documentElement
        }

        function f(n) {
            return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView)
        }
        if (l) try {
            a(l.documentElement.childNodes)[0].nodeType
        } catch (n) {
            a = function(n) {
                for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
                return e
            }
        }
        if (Date.now || (Date.now = function() {
                return +new Date
            }), l) try {
            l.createElement("DIV").style.setProperty("opacity", 0, "")
        } catch (n) {
            var s = this.Element.prototype,
                h = s.setAttribute,
                p = s.setAttributeNS,
                g = this.CSSStyleDeclaration.prototype,
                d = g.setProperty;
            s.setAttribute = function(n, t) {
                h.call(this, n, t + "")
            }, s.setAttributeNS = function(n, t, e) {
                p.call(this, n, t, e + "")
            }, g.setProperty = function(n, t, e) {
                d.call(this, n, t + "", e)
            }
        }

        function v(n, t) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }

        function y(n) {
            return null === n ? NaN : +n
        }

        function m(n) {
            return !isNaN(n)
        }

        function x(n) {
            return {
                left: function(t, e, r, i) {
                    for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); r < i;) {
                        var u = r + i >>> 1;
                        n(t[u], e) < 0 ? r = u + 1 : i = u
                    }
                    return r
                },
                right: function(t, e, r, i) {
                    for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); r < i;) {
                        var u = r + i >>> 1;
                        n(t[u], e) > 0 ? i = u : r = u + 1
                    }
                    return r
                }
            }
        }
        u.ascending = v, u.descending = function(n, t) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }, u.min = function(n, t) {
            var e, r, i = -1,
                u = n.length;
            if (1 === arguments.length) {
                for (; ++i < u;)
                    if (null != (r = n[i]) && r >= r) {
                        e = r;
                        break
                    } for (; ++i < u;) null != (r = n[i]) && e > r && (e = r)
            } else {
                for (; ++i < u;)
                    if (null != (r = t.call(n, n[i], i)) && r >= r) {
                        e = r;
                        break
                    } for (; ++i < u;) null != (r = t.call(n, n[i], i)) && e > r && (e = r)
            }
            return e
        }, u.max = function(n, t) {
            var e, r, i = -1,
                u = n.length;
            if (1 === arguments.length) {
                for (; ++i < u;)
                    if (null != (r = n[i]) && r >= r) {
                        e = r;
                        break
                    } for (; ++i < u;) null != (r = n[i]) && r > e && (e = r)
            } else {
                for (; ++i < u;)
                    if (null != (r = t.call(n, n[i], i)) && r >= r) {
                        e = r;
                        break
                    } for (; ++i < u;) null != (r = t.call(n, n[i], i)) && r > e && (e = r)
            }
            return e
        }, u.extent = function(n, t) {
            var e, r, i, u = -1,
                o = n.length;
            if (1 === arguments.length) {
                for (; ++u < o;)
                    if (null != (r = n[u]) && r >= r) {
                        e = i = r;
                        break
                    } for (; ++u < o;) null != (r = n[u]) && (e > r && (e = r), i < r && (i = r))
            } else {
                for (; ++u < o;)
                    if (null != (r = t.call(n, n[u], u)) && r >= r) {
                        e = i = r;
                        break
                    } for (; ++u < o;) null != (r = t.call(n, n[u], u)) && (e > r && (e = r), i < r && (i = r))
            }
            return [e, i]
        }, u.sum = function(n, t) {
            var e, r = 0,
                i = n.length,
                u = -1;
            if (1 === arguments.length)
                for (; ++u < i;) m(e = +n[u]) && (r += e);
            else
                for (; ++u < i;) m(e = +t.call(n, n[u], u)) && (r += e);
            return r
        }, u.mean = function(n, t) {
            var e, r = 0,
                i = n.length,
                u = -1,
                o = i;
            if (1 === arguments.length)
                for (; ++u < i;) m(e = y(n[u])) ? r += e : --o;
            else
                for (; ++u < i;) m(e = y(t.call(n, n[u], u))) ? r += e : --o;
            if (o) return r / o
        }, u.quantile = function(n, t) {
            var e = (n.length - 1) * t + 1,
                r = Math.floor(e),
                i = +n[r - 1],
                u = e - r;
            return u ? i + u * (n[r] - i) : i
        }, u.median = function(n, t) {
            var e, r = [],
                i = n.length,
                o = -1;
            if (1 === arguments.length)
                for (; ++o < i;) m(e = y(n[o])) && r.push(e);
            else
                for (; ++o < i;) m(e = y(t.call(n, n[o], o))) && r.push(e);
            if (r.length) return u.quantile(r.sort(v), .5)
        }, u.variance = function(n, t) {
            var e, r, i = n.length,
                u = 0,
                o = 0,
                a = -1,
                l = 0;
            if (1 === arguments.length)
                for (; ++a < i;) m(e = y(n[a])) && (o += (r = e - u) * (e - (u += r / ++l)));
            else
                for (; ++a < i;) m(e = y(t.call(n, n[a], a))) && (o += (r = e - u) * (e - (u += r / ++l)));
            if (l > 1) return o / (l - 1)
        }, u.deviation = function() {
            var n = u.variance.apply(this, arguments);
            return n ? Math.sqrt(n) : n
        };
        var M = x(v);

        function b(n) {
            return n.length
        }
        u.bisectLeft = M.left, u.bisect = u.bisectRight = M.right, u.bisector = function(n) {
            return x(1 === n.length ? function(t, e) {
                return v(n(t), e)
            } : n)
        }, u.shuffle = function(n, t, e) {
            (u = arguments.length) < 3 && (e = n.length, u < 2 && (t = 0));
            for (var r, i, u = e - t; u;) i = Math.random() * u-- | 0, r = n[u + t], n[u + t] = n[i + t], n[i + t] = r;
            return n
        }, u.permute = function(n, t) {
            for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
            return r
        }, u.pairs = function(n) {
            for (var t = 0, e = n.length - 1, r = n[0], i = new Array(e < 0 ? 0 : e); t < e;) i[t] = [r, r = n[++t]];
            return i
        }, u.transpose = function(n) {
            if (!(i = n.length)) return [];
            for (var t = -1, e = u.min(n, b), r = new Array(e); ++t < e;)
                for (var i, o = -1, a = r[t] = new Array(i); ++o < i;) a[o] = n[o][t];
            return r
        }, u.zip = function() {
            return u.transpose(arguments)
        }, u.keys = function(n) {
            var t = [];
            for (var e in n) t.push(e);
            return t
        }, u.values = function(n) {
            var t = [];
            for (var e in n) t.push(n[e]);
            return t
        }, u.entries = function(n) {
            var t = [];
            for (var e in n) t.push({
                key: e,
                value: n[e]
            });
            return t
        }, u.merge = function(n) {
            for (var t, e, r, i = n.length, u = -1, o = 0; ++u < i;) o += n[u].length;
            for (e = new Array(o); --i >= 0;)
                for (t = (r = n[i]).length; --t >= 0;) e[--o] = r[t];
            return e
        };
        var _ = Math.abs;

        function w(n, t) {
            for (var e in t) Object.defineProperty(n.prototype, e, {
                value: t[e],
                enumerable: !1
            })
        }

        function S() {
            this._ = Object.create(null)
        }
        u.range = function(n, t, e) {
            if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e == 1 / 0) throw new Error("infinite range");
            var r, i = [],
                u = function(n) {
                    var t = 1;
                    for (; n * t % 1;) t *= 10;
                    return t
                }(_(e)),
                o = -1;
            if (n *= u, t *= u, (e *= u) < 0)
                for (;
                    (r = n + e * ++o) > t;) i.push(r / u);
            else
                for (;
                    (r = n + e * ++o) < t;) i.push(r / u);
            return i
        }, u.map = function(n, t) {
            var e = new S;
            if (n instanceof S) n.forEach(function(n, t) {
                e.set(n, t)
            });
            else if (Array.isArray(n)) {
                var r, i = -1,
                    u = n.length;
                if (1 === arguments.length)
                    for (; ++i < u;) e.set(i, n[i]);
                else
                    for (; ++i < u;) e.set(t.call(n, r = n[i], i), r)
            } else
                for (var o in n) e.set(o, n[o]);
            return e
        };
        var k = "__proto__",
            N = "\0";

        function E(n) {
            return (n += "") === k || n[0] === N ? N + n : n
        }

        function A(n) {
            return (n += "")[0] === N ? n.slice(1) : n
        }

        function C(n) {
            return E(n) in this._
        }

        function T(n) {
            return (n = E(n)) in this._ && delete this._[n]
        }

        function z() {
            var n = [];
            for (var t in this._) n.push(A(t));
            return n
        }

        function q() {
            var n = 0;
            for (var t in this._) ++n;
            return n
        }

        function L() {
            for (var n in this._) return !1;
            return !0
        }

        function P() {
            this._ = Object.create(null)
        }

        function R(n) {
            return n
        }

        function D(n, t, e) {
            return function() {
                var r = e.apply(t, arguments);
                return r === t ? n : r
            }
        }

        function j(n, t) {
            if (t in n) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e = 0, r = O.length; e < r; ++e) {
                var i = O[e] + t;
                if (i in n) return i
            }
        }
        w(S, {
            has: C,
            get: function(n) {
                return this._[E(n)]
            },
            set: function(n, t) {
                return this._[E(n)] = t
            },
            remove: T,
            keys: z,
            values: function() {
                var n = [];
                for (var t in this._) n.push(this._[t]);
                return n
            },
            entries: function() {
                var n = [];
                for (var t in this._) n.push({
                    key: A(t),
                    value: this._[t]
                });
                return n
            },
            size: q,
            empty: L,
            forEach: function(n) {
                for (var t in this._) n.call(this, A(t), this._[t])
            }
        }), u.nest = function() {
            var n, t, e = {},
                r = [],
                i = [];

            function o(i, u, a) {
                if (a >= r.length) return t ? t.call(e, u) : n ? u.sort(n) : u;
                for (var l, c, f, s, h = -1, p = u.length, g = r[a++], d = new S; ++h < p;)(s = d.get(l = g(c = u[h]))) ? s.push(c) : d.set(l, [c]);
                return i ? (c = i(), f = function(n, t) {
                    c.set(n, o(i, t, a))
                }) : (c = {}, f = function(n, t) {
                    c[n] = o(i, t, a)
                }), d.forEach(f), c
            }
            return e.map = function(n, t) {
                return o(t, n, 0)
            }, e.entries = function(n) {
                return function n(t, e) {
                    if (e >= r.length) return t;
                    var u = [],
                        o = i[e++];
                    return t.forEach(function(t, r) {
                        u.push({
                            key: t,
                            values: n(r, e)
                        })
                    }), o ? u.sort(function(n, t) {
                        return o(n.key, t.key)
                    }) : u
                }(o(u.map, n, 0), 0)
            }, e.key = function(n) {
                return r.push(n), e
            }, e.sortKeys = function(n) {
                return i[r.length - 1] = n, e
            }, e.sortValues = function(t) {
                return n = t, e
            }, e.rollup = function(n) {
                return t = n, e
            }, e
        }, u.set = function(n) {
            var t = new P;
            if (n)
                for (var e = 0, r = n.length; e < r; ++e) t.add(n[e]);
            return t
        }, w(P, {
            has: C,
            add: function(n) {
                return this._[E(n += "")] = !0, n
            },
            remove: T,
            values: z,
            size: q,
            empty: L,
            forEach: function(n) {
                for (var t in this._) n.call(this, A(t))
            }
        }), u.behavior = {}, u.rebind = function(n, t) {
            for (var e, r = 1, i = arguments.length; ++r < i;) n[e = arguments[r]] = D(n, t, t[e]);
            return n
        };
        var O = ["webkit", "ms", "moz", "Moz", "o", "O"];

        function U() {}

        function F() {}

        function H(n) {
            var t = [],
                e = new S;

            function r() {
                for (var e, r = t, i = -1, u = r.length; ++i < u;)(e = r[i].on) && e.apply(this, arguments);
                return n
            }
            return r.on = function(r, i) {
                var u, o = e.get(r);
                return arguments.length < 2 ? o && o.on : (o && (o.on = null, t = t.slice(0, u = t.indexOf(o)).concat(t.slice(u + 1)), e.remove(r)), i && t.push(e.set(r, {
                    on: i
                })), n)
            }, r
        }

        function I() {
            u.event.preventDefault()
        }

        function Y() {
            for (var n, t = u.event; n = t.sourceEvent;) t = n;
            return t
        }

        function V(n) {
            for (var t = new F, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = H(t);
            return t.of = function(e, r) {
                return function(i) {
                    try {
                        var o = i.sourceEvent = u.event;
                        i.target = n, u.event = i, t[i.type].apply(e, r)
                    } finally {
                        u.event = o
                    }
                }
            }, t
        }
        u.dispatch = function() {
            for (var n = new F, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = H(n);
            return n
        }, F.prototype.on = function(n, t) {
            var e = n.indexOf("."),
                r = "";
            if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
            if (2 === arguments.length) {
                if (null == t)
                    for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
                return this
            }
        }, u.event = null, u.requote = function(n) {
            return n.replace(Z, "\\$&")
        };
        var Z = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
            X = {}.__proto__ ? function(n, t) {
                n.__proto__ = t
            } : function(n, t) {
                for (var e in t) n[e] = t[e]
            };

        function $(n) {
            return X(n, W), n
        }
        var B = function(n, t) {
                return t.querySelector(n)
            },
            G = function(n, t) {
                return t.querySelectorAll(n)
            },
            J = function(n, t) {
                var e = n.matches || n[j(n, "matchesSelector")];
                return (J = function(n, t) {
                    return e.call(n, t)
                })(n, t)
            };
        "function" == typeof Sizzle && (B = function(n, t) {
            return Sizzle(n, t)[0] || null
        }, G = Sizzle, J = Sizzle.matchesSelector), u.selection = function() {
            return u.select(l.documentElement)
        };
        var W = u.selection.prototype = [];

        function K(n) {
            return "function" == typeof n ? n : function() {
                return B(n, this)
            }
        }

        function Q(n) {
            return "function" == typeof n ? n : function() {
                return G(n, this)
            }
        }
        W.select = function(n) {
            var t, e, r, i, u = [];
            n = K(n);
            for (var o = -1, a = this.length; ++o < a;) {
                u.push(t = []), t.parentNode = (r = this[o]).parentNode;
                for (var l = -1, c = r.length; ++l < c;)(i = r[l]) ? (t.push(e = n.call(i, i.__data__, l, o)), e && "__data__" in i && (e.__data__ = i.__data__)) : t.push(null)
            }
            return $(u)
        }, W.selectAll = function(n) {
            var t, e, r = [];
            n = Q(n);
            for (var i = -1, u = this.length; ++i < u;)
                for (var o = this[i], l = -1, c = o.length; ++l < c;)(e = o[l]) && (r.push(t = a(n.call(e, e.__data__, l, i))), t.parentNode = e);
            return $(r)
        };
        var nn = "http://www.w3.org/1999/xhtml",
            tn = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: nn,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };

        function en(n, t) {
            return n = u.ns.qualify(n), null == t ? n.local ? function() {
                this.removeAttributeNS(n.space, n.local)
            } : function() {
                this.removeAttribute(n)
            } : "function" == typeof t ? n.local ? function() {
                var e = t.apply(this, arguments);
                null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
            } : function() {
                var e = t.apply(this, arguments);
                null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
            } : n.local ? function() {
                this.setAttributeNS(n.space, n.local, t)
            } : function() {
                this.setAttribute(n, t)
            }
        }

        function rn(n) {
            return n.trim().replace(/\s+/g, " ")
        }

        function un(n) {
            return new RegExp("(?:^|\\s+)" + u.requote(n) + "(?:\\s+|$)", "g")
        }

        function on(n) {
            return (n + "").trim().split(/^|\s+/)
        }

        function an(n, t) {
            var e = (n = on(n).map(ln)).length;
            return "function" == typeof t ? function() {
                for (var r = -1, i = t.apply(this, arguments); ++r < e;) n[r](this, i)
            } : function() {
                for (var r = -1; ++r < e;) n[r](this, t)
            }
        }

        function ln(n) {
            var t = un(n);
            return function(e, r) {
                if (i = e.classList) return r ? i.add(n) : i.remove(n);
                var i = e.getAttribute("class") || "";
                r ? (t.lastIndex = 0, t.test(i) || e.setAttribute("class", rn(i + " " + n))) : e.setAttribute("class", rn(i.replace(t, " ")))
            }
        }

        function cn(n, t, e) {
            return null == t ? function() {
                this.style.removeProperty(n)
            } : "function" == typeof t ? function() {
                var r = t.apply(this, arguments);
                null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
            } : function() {
                this.style.setProperty(n, t, e)
            }
        }

        function fn(n, t) {
            return null == t ? function() {
                delete this[n]
            } : "function" == typeof t ? function() {
                var e = t.apply(this, arguments);
                null == e ? delete this[n] : this[n] = e
            } : function() {
                this[n] = t
            }
        }

        function sn(n) {
            return "function" == typeof n ? n : (n = u.ns.qualify(n)).local ? function() {
                return this.ownerDocument.createElementNS(n.space, n.local)
            } : function() {
                var t = this.ownerDocument,
                    e = this.namespaceURI;
                return e === nn && t.documentElement.namespaceURI === nn ? t.createElement(n) : t.createElementNS(e, n)
            }
        }

        function hn() {
            var n = this.parentNode;
            n && n.removeChild(this)
        }

        function pn(n) {
            return {
                __data__: n
            }
        }

        function gn(n) {
            return function() {
                return J(this, n)
            }
        }

        function dn(n, t) {
            for (var e = 0, r = n.length; e < r; e++)
                for (var i, u = n[e], o = 0, a = u.length; o < a; o++)(i = u[o]) && t(i, o, e);
            return n
        }

        function vn(n) {
            return X(n, yn), n
        }
        u.ns = {
            prefix: tn,
            qualify: function(n) {
                var t = n.indexOf(":"),
                    e = n;
                return t >= 0 && "xmlns" !== (e = n.slice(0, t)) && (n = n.slice(t + 1)), tn.hasOwnProperty(e) ? {
                    space: tn[e],
                    local: n
                } : n
            }
        }, W.attr = function(n, t) {
            if (arguments.length < 2) {
                if ("string" == typeof n) {
                    var e = this.node();
                    return (n = u.ns.qualify(n)).local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
                }
                for (t in n) this.each(en(t, n[t]));
                return this
            }
            return this.each(en(n, t))
        }, W.classed = function(n, t) {
            if (arguments.length < 2) {
                if ("string" == typeof n) {
                    var e = this.node(),
                        r = (n = on(n)).length,
                        i = -1;
                    if (t = e.classList) {
                        for (; ++i < r;)
                            if (!t.contains(n[i])) return !1
                    } else
                        for (t = e.getAttribute("class"); ++i < r;)
                            if (!un(n[i]).test(t)) return !1;
                    return !0
                }
                for (t in n) this.each(an(t, n[t]));
                return this
            }
            return this.each(an(n, t))
        }, W.style = function(n, t, e) {
            var r = arguments.length;
            if (r < 3) {
                if ("string" != typeof n) {
                    for (e in r < 2 && (t = ""), n) this.each(cn(e, n[e], t));
                    return this
                }
                if (r < 2) {
                    var i = this.node();
                    return f(i).getComputedStyle(i, null).getPropertyValue(n)
                }
                e = ""
            }
            return this.each(cn(n, t, e))
        }, W.property = function(n, t) {
            if (arguments.length < 2) {
                if ("string" == typeof n) return this.node()[n];
                for (t in n) this.each(fn(t, n[t]));
                return this
            }
            return this.each(fn(n, t))
        }, W.text = function(n) {
            return arguments.length ? this.each("function" == typeof n ? function() {
                var t = n.apply(this, arguments);
                this.textContent = null == t ? "" : t
            } : null == n ? function() {
                this.textContent = ""
            } : function() {
                this.textContent = n
            }) : this.node().textContent
        }, W.html = function(n) {
            return arguments.length ? this.each("function" == typeof n ? function() {
                var t = n.apply(this, arguments);
                this.innerHTML = null == t ? "" : t
            } : null == n ? function() {
                this.innerHTML = ""
            } : function() {
                this.innerHTML = n
            }) : this.node().innerHTML
        }, W.append = function(n) {
            return n = sn(n), this.select(function() {
                return this.appendChild(n.apply(this, arguments))
            })
        }, W.insert = function(n, t) {
            return n = sn(n), t = K(t), this.select(function() {
                return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
            })
        }, W.remove = function() {
            return this.each(hn)
        }, W.data = function(n, t) {
            var e, r, i = -1,
                u = this.length;
            if (!arguments.length) {
                for (n = new Array(u = (e = this[0]).length); ++i < u;)(r = e[i]) && (n[i] = r.__data__);
                return n
            }

            function o(n, e) {
                var r, i, u, o = n.length,
                    f = e.length,
                    s = Math.min(o, f),
                    h = new Array(f),
                    p = new Array(f),
                    g = new Array(o);
                if (t) {
                    var d, v = new S,
                        y = new Array(o);
                    for (r = -1; ++r < o;)(i = n[r]) && (v.has(d = t.call(i, i.__data__, r)) ? g[r] = i : v.set(d, i), y[r] = d);
                    for (r = -1; ++r < f;)(i = v.get(d = t.call(e, u = e[r], r))) ? !0 !== i && (h[r] = i, i.__data__ = u) : p[r] = pn(u), v.set(d, !0);
                    for (r = -1; ++r < o;) r in y && !0 !== v.get(y[r]) && (g[r] = n[r])
                } else {
                    for (r = -1; ++r < s;) i = n[r], u = e[r], i ? (i.__data__ = u, h[r] = i) : p[r] = pn(u);
                    for (; r < f; ++r) p[r] = pn(e[r]);
                    for (; r < o; ++r) g[r] = n[r]
                }
                p.update = h, p.parentNode = h.parentNode = g.parentNode = n.parentNode, a.push(p), l.push(h), c.push(g)
            }
            var a = vn([]),
                l = $([]),
                c = $([]);
            if ("function" == typeof n)
                for (; ++i < u;) o(e = this[i], n.call(e, e.parentNode.__data__, i));
            else
                for (; ++i < u;) o(e = this[i], n);
            return l.enter = function() {
                return a
            }, l.exit = function() {
                return c
            }, l
        }, W.datum = function(n) {
            return arguments.length ? this.property("__data__", n) : this.property("__data__")
        }, W.filter = function(n) {
            var t, e, r, i = [];
            "function" != typeof n && (n = gn(n));
            for (var u = 0, o = this.length; u < o; u++) {
                i.push(t = []), t.parentNode = (e = this[u]).parentNode;
                for (var a = 0, l = e.length; a < l; a++)(r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r)
            }
            return $(i)
        }, W.order = function() {
            for (var n = -1, t = this.length; ++n < t;)
                for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0;)(e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e);
            return this
        }, W.sort = function(n) {
            n = function(n) {
                arguments.length || (n = v);
                return function(t, e) {
                    return t && e ? n(t.__data__, e.__data__) : !t - !e
                }
            }.apply(this, arguments);
            for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
            return this.order()
        }, W.each = function(n) {
            return dn(this, function(t, e, r) {
                n.call(t, t.__data__, e, r)
            })
        }, W.call = function(n) {
            var t = a(arguments);
            return n.apply(t[0] = this, t), this
        }, W.empty = function() {
            return !this.node()
        }, W.node = function() {
            for (var n = 0, t = this.length; n < t; n++)
                for (var e = this[n], r = 0, i = e.length; r < i; r++) {
                    var u = e[r];
                    if (u) return u
                }
            return null
        }, W.size = function() {
            var n = 0;
            return dn(this, function() {
                ++n
            }), n
        };
        var yn = [];

        function mn(n, t, e) {
            var r = "__on" + n,
                i = n.indexOf("."),
                o = Mn;
            i > 0 && (n = n.slice(0, i));
            var l = xn.get(n);

            function c() {
                var t = this[r];
                t && (this.removeEventListener(n, t, t.$), delete this[r])
            }
            return l && (n = l, o = bn), i ? t ? function() {
                var i = o(t, a(arguments));
                c.call(this), this.addEventListener(n, this[r] = i, i.$ = e), i._ = t
            } : c : t ? U : function() {
                var t, e = new RegExp("^__on([^.]+)" + u.requote(n) + "$");
                for (var r in this)
                    if (t = r.match(e)) {
                        var i = this[r];
                        this.removeEventListener(t[1], i, i.$), delete this[r]
                    }
            }
        }
        u.selection.enter = vn, u.selection.enter.prototype = yn, yn.append = W.append, yn.empty = W.empty, yn.node = W.node, yn.call = W.call, yn.size = W.size, yn.select = function(n) {
            for (var t, e, r, i, u, o = [], a = -1, l = this.length; ++a < l;) {
                r = (i = this[a]).update, o.push(t = []), t.parentNode = i.parentNode;
                for (var c = -1, f = i.length; ++c < f;)(u = i[c]) ? (t.push(r[c] = e = n.call(i.parentNode, u.__data__, c, a)), e.__data__ = u.__data__) : t.push(null)
            }
            return $(o)
        }, yn.insert = function(n, t) {
            return arguments.length < 2 && (t = function(n) {
                var t, e;
                return function(r, i, u) {
                    var o, a = n[u].update,
                        l = a.length;
                    for (u != e && (e = u, t = 0), i >= t && (t = i + 1); !(o = a[t]) && ++t < l;);
                    return o
                }
            }(this)), W.insert.call(this, n, t)
        }, u.select = function(n) {
            var t;
            return "string" == typeof n ? (t = [B(n, l)]).parentNode = l.documentElement : (t = [n]).parentNode = c(n), $([t])
        }, u.selectAll = function(n) {
            var t;
            return "string" == typeof n ? (t = a(G(n, l))).parentNode = l.documentElement : (t = a(n)).parentNode = null, $([t])
        }, W.on = function(n, t, e) {
            var r = arguments.length;
            if (r < 3) {
                if ("string" != typeof n) {
                    for (e in r < 2 && (t = !1), n) this.each(mn(e, n[e], t));
                    return this
                }
                if (r < 2) return (r = this.node()["__on" + n]) && r._;
                e = !1
            }
            return this.each(mn(n, t, e))
        };
        var xn = u.map({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        });

        function Mn(n, t) {
            return function(e) {
                var r = u.event;
                u.event = e, t[0] = this.__data__;
                try {
                    n.apply(this, t)
                } finally {
                    u.event = r
                }
            }
        }

        function bn(n, t) {
            var e = Mn(n, t);
            return function(n) {
                var t = n.relatedTarget;
                t && (t === this || 8 & t.compareDocumentPosition(this)) || e.call(this, n)
            }
        }
        l && xn.forEach(function(n) {
            "on" + n in l && xn.remove(n)
        });
        var _n, wn = 0;

        function Sn(n) {
            var t = ".dragsuppress-" + ++wn,
                e = "click" + t,
                r = u.select(f(n)).on("touchmove" + t, I).on("dragstart" + t, I).on("selectstart" + t, I);
            if (null == _n && (_n = !("onselectstart" in n) && j(n.style, "userSelect")), _n) {
                var i = c(n).style,
                    o = i[_n];
                i[_n] = "none"
            }
            return function(n) {
                if (r.on(t, null), _n && (i[_n] = o), n) {
                    var u = function() {
                        r.on(e, null)
                    };
                    r.on(e, function() {
                        I(), u()
                    }, !0), setTimeout(u, 0)
                }
            }
        }
        u.mouse = function(n) {
            return Nn(n, Y())
        };
        var kn = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;

        function Nn(n, t) {
            t.changedTouches && (t = t.changedTouches[0]);
            var e = n.ownerSVGElement || n;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                if (kn < 0) {
                    var i = f(n);
                    if (i.scrollX || i.scrollY) {
                        var o = (e = u.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important"))[0][0].getScreenCTM();
                        kn = !(o.f || o.e), e.remove()
                    }
                }
                return kn ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
            }
            var a = n.getBoundingClientRect();
            return [t.clientX - a.left - n.clientLeft, t.clientY - a.top - n.clientTop]
        }

        function En() {
            return u.event.changedTouches[0].identifier
        }
        u.touch = function(n, t, e) {
            if (arguments.length < 3 && (e = t, t = Y().changedTouches), t)
                for (var r, i = 0, u = t.length; i < u; ++i)
                    if ((r = t[i]).identifier === e) return Nn(n, r)
        }, u.behavior.drag = function() {
            var n = V(i, "drag", "dragstart", "dragend"),
                t = null,
                e = o(U, u.mouse, f, "mousemove", "mouseup"),
                r = o(En, u.touch, R, "touchmove", "touchend");

            function i() {
                this.on("mousedown.drag", e).on("touchstart.drag", r)
            }

            function o(e, r, i, o, a) {
                return function() {
                    var l, c = u.event.target.correspondingElement || u.event.target,
                        f = this.parentNode,
                        s = n.of(this, arguments),
                        h = 0,
                        p = e(),
                        g = ".drag" + (null == p ? "" : "-" + p),
                        d = u.select(i(c)).on(o + g, function() {
                            var n, t, e = r(f, p);
                            if (!e) return;
                            n = e[0] - y[0], t = e[1] - y[1], h |= n | t, y = e, s({
                                type: "drag",
                                x: e[0] + l[0],
                                y: e[1] + l[1],
                                dx: n,
                                dy: t
                            })
                        }).on(a + g, function() {
                            if (!r(f, p)) return;
                            d.on(o + g, null).on(a + g, null), v(h), s({
                                type: "dragend"
                            })
                        }),
                        v = Sn(c),
                        y = r(f, p);
                    l = t ? [(l = t.apply(this, arguments)).x - y[0], l.y - y[1]] : [0, 0], s({
                        type: "dragstart"
                    })
                }
            }
            return i.origin = function(n) {
                return arguments.length ? (t = n, i) : t
            }, u.rebind(i, n, "on")
        }, u.touches = function(n, t) {
            return arguments.length < 2 && (t = Y().touches), t ? a(t).map(function(t) {
                var e = Nn(n, t);
                return e.identifier = t.identifier, e
            }) : []
        };
        var An = 1e-6,
            Cn = An * An,
            Tn = Math.PI,
            zn = 2 * Tn,
            qn = zn - An,
            Ln = Tn / 2,
            Pn = Tn / 180,
            Rn = 180 / Tn;

        function Dn(n) {
            return n > 0 ? 1 : n < 0 ? -1 : 0
        }

        function jn(n, t, e) {
            return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
        }

        function On(n) {
            return n > 1 ? 0 : n < -1 ? Tn : Math.acos(n)
        }

        function Un(n) {
            return n > 1 ? Ln : n < -1 ? -Ln : Math.asin(n)
        }

        function Fn(n) {
            return ((n = Math.exp(n)) + 1 / n) / 2
        }

        function Hn(n) {
            return (n = Math.sin(n / 2)) * n
        }
        var In = Math.SQRT2;
        u.interpolateZoom = function(n, t) {
            var e, r, i = n[0],
                u = n[1],
                o = n[2],
                a = t[0],
                l = t[1],
                c = t[2],
                f = a - i,
                s = l - u,
                h = f * f + s * s;
            if (h < Cn) r = Math.log(c / o) / In, e = function(n) {
                return [i + n * f, u + n * s, o * Math.exp(In * n * r)]
            };
            else {
                var p = Math.sqrt(h),
                    g = (c * c - o * o + 4 * h) / (2 * o * 2 * p),
                    d = (c * c - o * o - 4 * h) / (2 * c * 2 * p),
                    v = Math.log(Math.sqrt(g * g + 1) - g),
                    y = Math.log(Math.sqrt(d * d + 1) - d);
                r = (y - v) / In, e = function(n) {
                    var t = n * r,
                        e = Fn(v),
                        a = o / (2 * p) * (e * function(n) {
                            return ((n = Math.exp(2 * n)) - 1) / (n + 1)
                        }(In * t + v) - function(n) {
                            return ((n = Math.exp(n)) - 1 / n) / 2
                        }(v));
                    return [i + a * f, u + a * s, o * e / Fn(In * t + v)]
                }
            }
            return e.duration = 1e3 * r, e
        }, u.behavior.zoom = function() {
            var n, t, e, r, i, o, a, c, s, h = {
                    x: 0,
                    y: 0,
                    k: 1
                },
                p = [960, 500],
                g = Zn,
                d = 250,
                v = 0,
                y = "mousedown.zoom",
                m = "mousemove.zoom",
                x = "mouseup.zoom",
                M = "touchstart.zoom",
                b = V(_, "zoomstart", "zoom", "zoomend");

            function _(n) {
                n.on(y, z).on(Vn + ".zoom", L).on("dblclick.zoom", P).on(M, q)
            }

            function w(n) {
                return [(n[0] - h.x) / h.k, (n[1] - h.y) / h.k]
            }

            function S(n) {
                h.k = Math.max(g[0], Math.min(g[1], n))
            }

            function k(n, t) {
                t = function(n) {
                    return [n[0] * h.k + h.x, n[1] * h.k + h.y]
                }(t), h.x += n[0] - t[0], h.y += n[1] - t[1]
            }

            function N(n, e, r, i) {
                n.__chart__ = {
                    x: h.x,
                    y: h.y,
                    k: h.k
                }, S(Math.pow(2, i)), k(t = e, r), n = u.select(n), d > 0 && (n = n.transition().duration(d)), n.call(_.event)
            }

            function E() {
                a && a.domain(o.range().map(function(n) {
                    return (n - h.x) / h.k
                }).map(o.invert)), s && s.domain(c.range().map(function(n) {
                    return (n - h.y) / h.k
                }).map(c.invert))
            }

            function A(n) {
                v++ || n({
                    type: "zoomstart"
                })
            }

            function C(n) {
                E(), n({
                    type: "zoom",
                    scale: h.k,
                    translate: [h.x, h.y]
                })
            }

            function T(n) {
                --v || (n({
                    type: "zoomend"
                }), t = null)
            }

            function z() {
                var n = this,
                    t = b.of(n, arguments),
                    e = 0,
                    r = u.select(f(n)).on(m, function() {
                        e = 1, k(u.mouse(n), i), C(t)
                    }).on(x, function() {
                        r.on(m, null).on(x, null), o(e), T(t)
                    }),
                    i = w(u.mouse(n)),
                    o = Sn(n);
                pa.call(n), A(t)
            }

            function q() {
                var n, t = this,
                    e = b.of(t, arguments),
                    r = {},
                    o = 0,
                    a = ".zoom-" + u.event.changedTouches[0].identifier,
                    l = "touchmove" + a,
                    c = "touchend" + a,
                    f = [],
                    s = u.select(t),
                    p = Sn(t);

                function g() {
                    var e = u.touches(t);
                    return n = h.k, e.forEach(function(n) {
                        n.identifier in r && (r[n.identifier] = w(n))
                    }), e
                }

                function d() {
                    var n = u.event.target;
                    u.select(n).on(l, v).on(c, m), f.push(n);
                    for (var e = u.event.changedTouches, a = 0, s = e.length; a < s; ++a) r[e[a].identifier] = null;
                    var p = g(),
                        d = Date.now();
                    if (1 === p.length) {
                        if (d - i < 500) {
                            var y = p[0];
                            N(t, y, r[y.identifier], Math.floor(Math.log(h.k) / Math.LN2) + 1), I()
                        }
                        i = d
                    } else if (p.length > 1) {
                        y = p[0];
                        var x = p[1],
                            M = y[0] - x[0],
                            b = y[1] - x[1];
                        o = M * M + b * b
                    }
                }

                function v() {
                    var a, l, c, f, s = u.touches(t);
                    pa.call(t);
                    for (var h = 0, p = s.length; h < p; ++h, f = null)
                        if (c = s[h], f = r[c.identifier]) {
                            if (l) break;
                            a = c, l = f
                        } if (f) {
                        var g = (g = c[0] - a[0]) * g + (g = c[1] - a[1]) * g,
                            d = o && Math.sqrt(g / o);
                        a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], l = [(l[0] + f[0]) / 2, (l[1] + f[1]) / 2], S(d * n)
                    }
                    i = null, k(a, l), C(e)
                }

                function m() {
                    if (u.event.touches.length) {
                        for (var n = u.event.changedTouches, t = 0, i = n.length; t < i; ++t) delete r[n[t].identifier];
                        for (var o in r) return void g()
                    }
                    u.selectAll(f).on(a, null), s.on(y, z).on(M, q), p(), T(e)
                }
                d(), A(e), s.on(y, null).on(M, d)
            }

            function L() {
                var i = b.of(this, arguments);
                r ? clearTimeout(r) : (pa.call(this), n = w(t = e || u.mouse(this)), A(i)), r = setTimeout(function() {
                    r = null, T(i)
                }, 50), I(), S(Math.pow(2, .002 * Yn()) * h.k), k(t, n), C(i)
            }

            function P() {
                var n = u.mouse(this),
                    t = Math.log(h.k) / Math.LN2;
                N(this, n, w(n), u.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1)
            }
            return Vn || (Vn = "onwheel" in l ? (Yn = function() {
                return -u.event.deltaY * (u.event.deltaMode ? 120 : 1)
            }, "wheel") : "onmousewheel" in l ? (Yn = function() {
                return u.event.wheelDelta
            }, "mousewheel") : (Yn = function() {
                return -u.event.detail
            }, "MozMousePixelScroll")), _.event = function(n) {
                n.each(function() {
                    var n = b.of(this, arguments),
                        e = h;
                    va ? u.select(this).transition().each("start.zoom", function() {
                        h = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                        }, A(n)
                    }).tween("zoom:zoom", function() {
                        var r = p[0],
                            i = p[1],
                            o = t ? t[0] : r / 2,
                            a = t ? t[1] : i / 2,
                            l = u.interpolateZoom([(o - h.x) / h.k, (a - h.y) / h.k, r / h.k], [(o - e.x) / e.k, (a - e.y) / e.k, r / e.k]);
                        return function(t) {
                            var e = l(t),
                                i = r / e[2];
                            this.__chart__ = h = {
                                x: o - e[0] * i,
                                y: a - e[1] * i,
                                k: i
                            }, C(n)
                        }
                    }).each("interrupt.zoom", function() {
                        T(n)
                    }).each("end.zoom", function() {
                        T(n)
                    }) : (this.__chart__ = h, A(n), C(n), T(n))
                })
            }, _.translate = function(n) {
                return arguments.length ? (h = {
                    x: +n[0],
                    y: +n[1],
                    k: h.k
                }, E(), _) : [h.x, h.y]
            }, _.scale = function(n) {
                return arguments.length ? (h = {
                    x: h.x,
                    y: h.y,
                    k: null
                }, S(+n), E(), _) : h.k
            }, _.scaleExtent = function(n) {
                return arguments.length ? (g = null == n ? Zn : [+n[0], +n[1]], _) : g
            }, _.center = function(n) {
                return arguments.length ? (e = n && [+n[0], +n[1]], _) : e
            }, _.size = function(n) {
                return arguments.length ? (p = n && [+n[0], +n[1]], _) : p
            }, _.duration = function(n) {
                return arguments.length ? (d = +n, _) : d
            }, _.x = function(n) {
                return arguments.length ? (a = n, o = n.copy(), h = {
                    x: 0,
                    y: 0,
                    k: 1
                }, _) : a
            }, _.y = function(n) {
                return arguments.length ? (s = n, c = n.copy(), h = {
                    x: 0,
                    y: 0,
                    k: 1
                }, _) : s
            }, u.rebind(_, b, "on")
        };
        var Yn, Vn, Zn = [0, 1 / 0];

        function Xn() {}

        function $n(n, t, e) {
            return this instanceof $n ? (this.h = +n, this.s = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof $n ? new $n(n.h, n.s, n.l) : dt("" + n, vt, $n) : new $n(n, t, e)
        }
        u.color = Xn, Xn.prototype.toString = function() {
            return this.rgb() + ""
        }, u.hsl = $n;
        var Bn = $n.prototype = new Xn;

        function Gn(n, t, e) {
            var r, i;

            function u(n) {
                return Math.round(255 * function(n) {
                    return n > 360 ? n -= 360 : n < 0 && (n += 360), n < 60 ? r + (i - r) * n / 60 : n < 180 ? i : n < 240 ? r + (i - r) * (240 - n) / 60 : r
                }(n))
            }
            return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t, r = 2 * (e = e < 0 ? 0 : e > 1 ? 1 : e) - (i = e <= .5 ? e * (1 + t) : e + t - e * t), new ft(u(n + 120), u(n), u(n - 120))
        }

        function Jn(n, t, e) {
            return this instanceof Jn ? (this.h = +n, this.c = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof Jn ? new Jn(n.h, n.c, n.l) : ot(n instanceof Qn ? n.l : (n = yt((n = u.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new Jn(n, t, e)
        }
        Bn.brighter = function(n) {
            return n = Math.pow(.7, arguments.length ? n : 1), new $n(this.h, this.s, this.l / n)
        }, Bn.darker = function(n) {
            return n = Math.pow(.7, arguments.length ? n : 1), new $n(this.h, this.s, n * this.l)
        }, Bn.rgb = function() {
            return Gn(this.h, this.s, this.l)
        }, u.hcl = Jn;
        var Wn = Jn.prototype = new Xn;

        function Kn(n, t, e) {
            return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new Qn(e, Math.cos(n *= Pn) * t, Math.sin(n) * t)
        }

        function Qn(n, t, e) {
            return this instanceof Qn ? (this.l = +n, this.a = +t, void(this.b = +e)) : arguments.length < 2 ? n instanceof Qn ? new Qn(n.l, n.a, n.b) : n instanceof Jn ? Kn(n.h, n.c, n.l) : yt((n = ft(n)).r, n.g, n.b) : new Qn(n, t, e)
        }
        Wn.brighter = function(n) {
            return new Jn(this.h, this.c, Math.min(100, this.l + nt * (arguments.length ? n : 1)))
        }, Wn.darker = function(n) {
            return new Jn(this.h, this.c, Math.max(0, this.l - nt * (arguments.length ? n : 1)))
        }, Wn.rgb = function() {
            return Kn(this.h, this.c, this.l).rgb()
        }, u.lab = Qn;
        var nt = 18,
            tt = .95047,
            et = 1,
            rt = 1.08883,
            it = Qn.prototype = new Xn;

        function ut(n, t, e) {
            var r = (n + 16) / 116,
                i = r + t / 500,
                u = r - e / 200;
            return new ft(ct(3.2404542 * (i = at(i) * tt) - 1.5371385 * (r = at(r) * et) - .4985314 * (u = at(u) * rt)), ct(-.969266 * i + 1.8760108 * r + .041556 * u), ct(.0556434 * i - .2040259 * r + 1.0572252 * u))
        }

        function ot(n, t, e) {
            return n > 0 ? new Jn(Math.atan2(e, t) * Rn, Math.sqrt(t * t + e * e), n) : new Jn(NaN, NaN, n)
        }

        function at(n) {
            return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
        }

        function lt(n) {
            return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
        }

        function ct(n) {
            return Math.round(255 * (n <= .00304 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
        }

        function ft(n, t, e) {
            return this instanceof ft ? (this.r = ~~n, this.g = ~~t, void(this.b = ~~e)) : arguments.length < 2 ? n instanceof ft ? new ft(n.r, n.g, n.b) : dt("" + n, ft, Gn) : new ft(n, t, e)
        }

        function st(n) {
            return new ft(n >> 16, n >> 8 & 255, 255 & n)
        }

        function ht(n) {
            return st(n) + ""
        }
        it.brighter = function(n) {
            return new Qn(Math.min(100, this.l + nt * (arguments.length ? n : 1)), this.a, this.b)
        }, it.darker = function(n) {
            return new Qn(Math.max(0, this.l - nt * (arguments.length ? n : 1)), this.a, this.b)
        }, it.rgb = function() {
            return ut(this.l, this.a, this.b)
        }, u.rgb = ft;
        var pt = ft.prototype = new Xn;

        function gt(n) {
            return n < 16 ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
        }

        function dt(n, t, e) {
            var r, i, u, o = 0,
                a = 0,
                l = 0;
            if (r = /([a-z]+)\((.*)\)/.exec(n = n.toLowerCase())) switch (i = r[2].split(","), r[1]) {
                case "hsl":
                    return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                case "rgb":
                    return t(xt(i[0]), xt(i[1]), xt(i[2]))
            }
            return (u = Mt.get(n)) ? t(u.r, u.g, u.b) : (null == n || "#" !== n.charAt(0) || isNaN(u = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & u) >> 4, o |= o >> 4, a = 240 & u, a |= a >> 4, l = 15 & u, l |= l << 4) : 7 === n.length && (o = (16711680 & u) >> 16, a = (65280 & u) >> 8, l = 255 & u)), t(o, a, l))
        }

        function vt(n, t, e) {
            var r, i, u = Math.min(n /= 255, t /= 255, e /= 255),
                o = Math.max(n, t, e),
                a = o - u,
                l = (o + u) / 2;
            return a ? (i = l < .5 ? a / (o + u) : a / (2 - o - u), r = n == o ? (t - e) / a + (t < e ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = NaN, i = l > 0 && l < 1 ? 0 : r), new $n(r, i, l)
        }

        function yt(n, t, e) {
            var r = lt((.4124564 * (n = mt(n)) + .3575761 * (t = mt(t)) + .1804375 * (e = mt(e))) / tt),
                i = lt((.2126729 * n + .7151522 * t + .072175 * e) / et);
            return Qn(116 * i - 16, 500 * (r - i), 200 * (i - lt((.0193339 * n + .119192 * t + .9503041 * e) / rt)))
        }

        function mt(n) {
            return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
        }

        function xt(n) {
            var t = parseFloat(n);
            return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
        }
        pt.brighter = function(n) {
            n = Math.pow(.7, arguments.length ? n : 1);
            var t = this.r,
                e = this.g,
                r = this.b,
                i = 30;
            return t || e || r ? (t && t < i && (t = i), e && e < i && (e = i), r && r < i && (r = i), new ft(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new ft(i, i, i)
        }, pt.darker = function(n) {
            return new ft((n = Math.pow(.7, arguments.length ? n : 1)) * this.r, n * this.g, n * this.b)
        }, pt.hsl = function() {
            return vt(this.r, this.g, this.b)
        }, pt.toString = function() {
            return "#" + gt(this.r) + gt(this.g) + gt(this.b)
        };
        var Mt = u.map({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        });

        function bt(n) {
            return "function" == typeof n ? n : function() {
                return n
            }
        }

        function _t(n) {
            return function(t, e, r) {
                return 2 === arguments.length && "function" == typeof e && (r = e, e = null), wt(t, e, n, r)
            }
        }

        function wt(n, t, e, r) {
            var i = {},
                o = u.dispatch("beforesend", "progress", "load", "error"),
                l = {},
                c = new XMLHttpRequest,
                f = null;

            function s() {
                var n, t = c.status;
                if (!t && function(n) {
                        var t = n.responseType;
                        return t && "text" !== t ? n.response : n.responseText
                    }(c) || t >= 200 && t < 300 || 304 === t) {
                    try {
                        n = e.call(i, c)
                    } catch (n) {
                        return void o.error.call(i, n)
                    }
                    o.load.call(i, n)
                } else o.error.call(i, c)
            }
            return !this.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = s : c.onreadystatechange = function() {
                c.readyState > 3 && s()
            }, c.onprogress = function(n) {
                var t = u.event;
                u.event = n;
                try {
                    o.progress.call(i, c)
                } finally {
                    u.event = t
                }
            }, i.header = function(n, t) {
                return n = (n + "").toLowerCase(), arguments.length < 2 ? l[n] : (null == t ? delete l[n] : l[n] = t + "", i)
            }, i.mimeType = function(n) {
                return arguments.length ? (t = null == n ? null : n + "", i) : t
            }, i.responseType = function(n) {
                return arguments.length ? (f = n, i) : f
            }, i.response = function(n) {
                return e = n, i
            }, ["get", "post"].forEach(function(n) {
                i[n] = function() {
                    return i.send.apply(i, [n].concat(a(arguments)))
                }
            }), i.send = function(e, r, u) {
                if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in l || (l.accept = t + ",*/*"), c.setRequestHeader)
                    for (var a in l) c.setRequestHeader(a, l[a]);
                return null != t && c.overrideMimeType && c.overrideMimeType(t), null != f && (c.responseType = f), null != u && i.on("error", u).on("load", function(n) {
                    u(null, n)
                }), o.beforesend.call(i, c), c.send(null == r ? null : r), i
            }, i.abort = function() {
                return c.abort(), i
            }, u.rebind(i, o, "on"), null == r ? i : i.get(function(n) {
                return 1 === n.length ? function(t, e) {
                    n(null == t ? e : null)
                } : n
            }(r))
        }
        Mt.forEach(function(n, t) {
            Mt.set(n, st(t))
        }), u.functor = bt, u.xhr = _t(R), u.dsv = function(n, t) {
            var e = new RegExp('["' + n + "\n]"),
                r = n.charCodeAt(0);

            function i(n, e, r) {
                arguments.length < 3 && (r = e, e = null);
                var i = wt(n, t, null == e ? u : o(e), r);
                return i.row = function(n) {
                    return arguments.length ? i.response(null == (e = n) ? u : o(n)) : e
                }, i
            }

            function u(n) {
                return i.parse(n.responseText)
            }

            function o(n) {
                return function(t) {
                    return i.parse(t.responseText, n)
                }
            }

            function a(t) {
                return t.map(l).join(n)
            }

            function l(n) {
                return e.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
            }
            return i.parse = function(n, t) {
                var e;
                return i.parseRows(n, function(n, r) {
                    if (e) return e(n, r - 1);
                    var i = new Function("d", "return {" + n.map(function(n, t) {
                        return JSON.stringify(n) + ": d[" + t + "]"
                    }).join(",") + "}");
                    e = t ? function(n, e) {
                        return t(i(n), e)
                    } : i
                })
            }, i.parseRows = function(n, t) {
                var e, i, u = {},
                    o = {},
                    a = [],
                    l = n.length,
                    c = 0,
                    f = 0;

                function s() {
                    if (c >= l) return o;
                    if (i) return i = !1, u;
                    var t = c;
                    if (34 === n.charCodeAt(t)) {
                        for (var e = t; e++ < l;)
                            if (34 === n.charCodeAt(e)) {
                                if (34 !== n.charCodeAt(e + 1)) break;
                                ++e
                            } return c = e + 2, 13 === (a = n.charCodeAt(e + 1)) ? (i = !0, 10 === n.charCodeAt(e + 2) && ++c) : 10 === a && (i = !0), n.slice(t + 1, e).replace(/""/g, '"')
                    }
                    for (; c < l;) {
                        var a, f = 1;
                        if (10 === (a = n.charCodeAt(c++))) i = !0;
                        else if (13 === a) i = !0, 10 === n.charCodeAt(c) && (++c, ++f);
                        else if (a !== r) continue;
                        return n.slice(t, c - f)
                    }
                    return n.slice(t)
                }
                for (;
                    (e = s()) !== o;) {
                    for (var h = []; e !== u && e !== o;) h.push(e), e = s();
                    t && null == (h = t(h, f++)) || a.push(h)
                }
                return a
            }, i.format = function(t) {
                if (Array.isArray(t[0])) return i.formatRows(t);
                var e = new P,
                    r = [];
                return t.forEach(function(n) {
                    for (var t in n) e.has(t) || r.push(e.add(t))
                }), [r.map(l).join(n)].concat(t.map(function(t) {
                    return r.map(function(n) {
                        return l(t[n])
                    }).join(n)
                })).join("\n")
            }, i.formatRows = function(n) {
                return n.map(a).join("\n")
            }, i
        }, u.csv = u.dsv(",", "text/csv"), u.tsv = u.dsv("\t", "text/tab-separated-values");
        var St, kt, Nt, Et, At = this[j(this, "requestAnimationFrame")] || function(n) {
            setTimeout(n, 17)
        };

        function Ct(n, t, e) {
            var r = arguments.length;
            r < 2 && (t = 0), r < 3 && (e = Date.now());
            var i = {
                c: n,
                t: e + t,
                n: null
            };
            return kt ? kt.n = i : St = i, kt = i, Nt || (Et = clearTimeout(Et), Nt = 1, At(Tt)), i
        }

        function Tt() {
            var n = zt(),
                t = qt() - n;
            t > 24 ? (isFinite(t) && (clearTimeout(Et), Et = setTimeout(Tt, t)), Nt = 0) : (Nt = 1, At(Tt))
        }

        function zt() {
            for (var n = Date.now(), t = St; t;) n >= t.t && t.c(n - t.t) && (t.c = null), t = t.n;
            return n
        }

        function qt() {
            for (var n, t = St, e = 1 / 0; t;) t.c ? (t.t < e && (e = t.t), t = (n = t).n) : t = n ? n.n = t.n : St = t.n;
            return kt = n, e
        }

        function Lt(n, t) {
            return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
        }
        u.timer = function() {
            Ct.apply(this, arguments)
        }, u.timer.flush = function() {
            zt(), qt()
        }, u.round = function(n, t) {
            return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
        };
        var Pt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(function(n, t) {
            var e = Math.pow(10, 3 * _(8 - t));
            return {
                scale: t > 8 ? function(n) {
                    return n / e
                } : function(n) {
                    return n * e
                },
                symbol: n
            }
        });
        u.formatPrefix = function(n, t) {
            var e = 0;
            return (n = +n) && (n < 0 && (n *= -1), t && (n = u.round(n, Lt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), Pt[8 + e / 3]
        };
        var Rt = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
            Dt = u.map({
                b: function(n) {
                    return n.toString(2)
                },
                c: function(n) {
                    return String.fromCharCode(n)
                },
                o: function(n) {
                    return n.toString(8)
                },
                x: function(n) {
                    return n.toString(16)
                },
                X: function(n) {
                    return n.toString(16).toUpperCase()
                },
                g: function(n, t) {
                    return n.toPrecision(t)
                },
                e: function(n, t) {
                    return n.toExponential(t)
                },
                f: function(n, t) {
                    return n.toFixed(t)
                },
                r: function(n, t) {
                    return (n = u.round(n, Lt(n, t))).toFixed(Math.max(0, Math.min(20, Lt(n * (1 + 1e-15), t))))
                }
            });

        function jt(n) {
            return n + ""
        }
        var Ot = u.time = {},
            Ut = Date;

        function Ft() {
            this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
        }
        Ft.prototype = {
            getDate: function() {
                return this._.getUTCDate()
            },
            getDay: function() {
                return this._.getUTCDay()
            },
            getFullYear: function() {
                return this._.getUTCFullYear()
            },
            getHours: function() {
                return this._.getUTCHours()
            },
            getMilliseconds: function() {
                return this._.getUTCMilliseconds()
            },
            getMinutes: function() {
                return this._.getUTCMinutes()
            },
            getMonth: function() {
                return this._.getUTCMonth()
            },
            getSeconds: function() {
                return this._.getUTCSeconds()
            },
            getTime: function() {
                return this._.getTime()
            },
            getTimezoneOffset: function() {
                return 0
            },
            valueOf: function() {
                return this._.valueOf()
            },
            setDate: function() {
                Ht.setUTCDate.apply(this._, arguments)
            },
            setDay: function() {
                Ht.setUTCDay.apply(this._, arguments)
            },
            setFullYear: function() {
                Ht.setUTCFullYear.apply(this._, arguments)
            },
            setHours: function() {
                Ht.setUTCHours.apply(this._, arguments)
            },
            setMilliseconds: function() {
                Ht.setUTCMilliseconds.apply(this._, arguments)
            },
            setMinutes: function() {
                Ht.setUTCMinutes.apply(this._, arguments)
            },
            setMonth: function() {
                Ht.setUTCMonth.apply(this._, arguments)
            },
            setSeconds: function() {
                Ht.setUTCSeconds.apply(this._, arguments)
            },
            setTime: function() {
                Ht.setTime.apply(this._, arguments)
            }
        };
        var Ht = Date.prototype;

        function It(n, t, e) {
            function r(t) {
                var e = n(t),
                    r = u(e, 1);
                return t - e < r - t ? e : r
            }

            function i(e) {
                return t(e = n(new Ut(e - 1)), 1), e
            }

            function u(n, e) {
                return t(n = new Ut(+n), e), n
            }

            function o(n, r, u) {
                var o = i(n),
                    a = [];
                if (u > 1)
                    for (; o < r;) e(o) % u || a.push(new Date(+o)), t(o, 1);
                else
                    for (; o < r;) a.push(new Date(+o)), t(o, 1);
                return a
            }
            n.floor = n, n.round = r, n.ceil = i, n.offset = u, n.range = o;
            var a = n.utc = Yt(n);
            return a.floor = a, a.round = Yt(r), a.ceil = Yt(i), a.offset = Yt(u), a.range = function(n, t, e) {
                try {
                    Ut = Ft;
                    var r = new Ft;
                    return r._ = n, o(r, t, e)
                } finally {
                    Ut = Date
                }
            }, n
        }

        function Yt(n) {
            return function(t, e) {
                try {
                    Ut = Ft;
                    var r = new Ft;
                    return r._ = t, n(r, e)._
                } finally {
                    Ut = Date
                }
            }
        }
        Ot.year = It(function(n) {
            return (n = Ot.day(n)).setMonth(0, 1), n
        }, function(n, t) {
            n.setFullYear(n.getFullYear() + t)
        }, function(n) {
            return n.getFullYear()
        }), Ot.years = Ot.year.range, Ot.years.utc = Ot.year.utc.range, Ot.day = It(function(n) {
            var t = new Ut(2e3, 0);
            return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
        }, function(n, t) {
            n.setDate(n.getDate() + t)
        }, function(n) {
            return n.getDate() - 1
        }), Ot.days = Ot.day.range, Ot.days.utc = Ot.day.utc.range, Ot.dayOfYear = function(n) {
            var t = Ot.year(n);
            return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
        }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
            t = 7 - t;
            var e = Ot[n] = It(function(n) {
                return (n = Ot.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
            }, function(n, t) {
                n.setDate(n.getDate() + 7 * Math.floor(t))
            }, function(n) {
                var e = Ot.year(n).getDay();
                return Math.floor((Ot.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
            });
            Ot[n + "s"] = e.range, Ot[n + "s"].utc = e.utc.range, Ot[n + "OfYear"] = function(n) {
                var e = Ot.year(n).getDay();
                return Math.floor((Ot.dayOfYear(n) + (e + t) % 7) / 7)
            }
        }), Ot.week = Ot.sunday, Ot.weeks = Ot.sunday.range, Ot.weeks.utc = Ot.sunday.utc.range, Ot.weekOfYear = Ot.sundayOfYear;
        var Vt = {
                "-": "",
                _: " ",
                0: "0"
            },
            Zt = /^\s*\d+/,
            Xt = /^%/;

        function $t(n, t, e) {
            var r = n < 0 ? "-" : "",
                i = (r ? -n : n) + "",
                u = i.length;
            return r + (u < e ? new Array(e - u + 1).join(t) + i : i)
        }

        function Bt(n) {
            return new RegExp("^(?:" + n.map(u.requote).join("|") + ")", "i")
        }

        function Gt(n) {
            for (var t = new S, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
            return t
        }

        function Jt(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 1));
            return r ? (n.w = +r[0], e + r[0].length) : -1
        }

        function Wt(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e));
            return r ? (n.U = +r[0], e + r[0].length) : -1
        }

        function Kt(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e));
            return r ? (n.W = +r[0], e + r[0].length) : -1
        }

        function Qt(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 4));
            return r ? (n.y = +r[0], e + r[0].length) : -1
        }

        function ne(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 2));
            return r ? (n.y = function(n) {
                return n + (n > 68 ? 1900 : 2e3)
            }(+r[0]), e + r[0].length) : -1
        }

        function te(n, t, e) {
            return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1
        }

        function ee(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 2));
            return r ? (n.m = r[0] - 1, e + r[0].length) : -1
        }

        function re(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 2));
            return r ? (n.d = +r[0], e + r[0].length) : -1
        }

        function ie(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 3));
            return r ? (n.j = +r[0], e + r[0].length) : -1
        }

        function ue(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 2));
            return r ? (n.H = +r[0], e + r[0].length) : -1
        }

        function oe(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 2));
            return r ? (n.M = +r[0], e + r[0].length) : -1
        }

        function ae(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 2));
            return r ? (n.S = +r[0], e + r[0].length) : -1
        }

        function le(n, t, e) {
            Zt.lastIndex = 0;
            var r = Zt.exec(t.slice(e, e + 3));
            return r ? (n.L = +r[0], e + r[0].length) : -1
        }

        function ce(n) {
            var t = n.getTimezoneOffset(),
                e = t > 0 ? "-" : "+",
                r = _(t) / 60 | 0,
                i = _(t) % 60;
            return e + $t(r, "0", 2) + $t(i, "0", 2)
        }

        function fe(n, t, e) {
            Xt.lastIndex = 0;
            var r = Xt.exec(t.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }

        function se(n) {
            for (var t = n.length, e = -1; ++e < t;) n[e][0] = this(n[e][0]);
            return function(t) {
                for (var e = 0, r = n[e]; !r[1](t);) r = n[++e];
                return r[0](t)
            }
        }
        u.locale = function(n) {
            return {
                numberFormat: function(n) {
                    var t = n.decimal,
                        e = n.thousands,
                        r = n.grouping,
                        i = n.currency,
                        o = r && e ? function(n, t) {
                            for (var i = n.length, u = [], o = 0, a = r[0], l = 0; i > 0 && a > 0 && (l + a + 1 > t && (a = Math.max(1, t - l)), u.push(n.substring(i -= a, i + a)), !((l += a + 1) > t));) a = r[o = (o + 1) % r.length];
                            return u.reverse().join(e)
                        } : R;
                    return function(n) {
                        var e = Rt.exec(n),
                            r = e[1] || " ",
                            a = e[2] || ">",
                            l = e[3] || "-",
                            c = e[4] || "",
                            f = e[5],
                            s = +e[6],
                            h = e[7],
                            p = e[8],
                            g = e[9],
                            d = 1,
                            v = "",
                            y = "",
                            m = !1,
                            x = !0;
                        switch (p && (p = +p.substring(1)), (f || "0" === r && "=" === a) && (f = r = "0", a = "="), g) {
                            case "n":
                                h = !0, g = "g";
                                break;
                            case "%":
                                d = 100, y = "%", g = "f";
                                break;
                            case "p":
                                d = 100, y = "%", g = "r";
                                break;
                            case "b":
                            case "o":
                            case "x":
                            case "X":
                                "#" === c && (v = "0" + g.toLowerCase());
                            case "c":
                                x = !1;
                            case "d":
                                m = !0, p = 0;
                                break;
                            case "s":
                                d = -1, g = "r"
                        }
                        "$" === c && (v = i[0], y = i[1]), "r" != g || p || (g = "g"), null != p && ("g" == g ? p = Math.max(1, Math.min(21, p)) : "e" != g && "f" != g || (p = Math.max(0, Math.min(20, p)))), g = Dt.get(g) || jt;
                        var M = f && h;
                        return function(n) {
                            var e = y;
                            if (m && n % 1) return "";
                            var i = n < 0 || 0 === n && 1 / n < 0 ? (n = -n, "-") : "-" === l ? "" : l;
                            if (d < 0) {
                                var c = u.formatPrefix(n, p);
                                n = c.scale(n), e = c.symbol + y
                            } else n *= d;
                            var b, _, w = (n = g(n, p)).lastIndexOf(".");
                            if (w < 0) {
                                var S = x ? n.lastIndexOf("e") : -1;
                                S < 0 ? (b = n, _ = "") : (b = n.substring(0, S), _ = n.substring(S))
                            } else b = n.substring(0, w), _ = t + n.substring(w + 1);
                            !f && h && (b = o(b, 1 / 0));
                            var k = v.length + b.length + _.length + (M ? 0 : i.length),
                                N = k < s ? new Array(k = s - k + 1).join(r) : "";
                            return M && (b = o(N + b, N.length ? s - _.length : 1 / 0)), i += v, n = b + _, ("<" === a ? i + n + N : ">" === a ? N + i + n : "^" === a ? N.substring(0, k >>= 1) + i + n + N.substring(k) : i + (M ? n : N + n)) + e
                        }
                    }
                }(n),
                timeFormat: function(n) {
                    var t = n.dateTime,
                        e = n.date,
                        r = n.time,
                        i = n.periods,
                        o = n.days,
                        a = n.shortDays,
                        l = n.months,
                        c = n.shortMonths;

                    function f(n) {
                        var t = n.length;

                        function e(e) {
                            for (var r, i, u, o = [], a = -1, l = 0; ++a < t;) 37 === n.charCodeAt(a) && (o.push(n.slice(l, a)), null != (i = Vt[r = n.charAt(++a)]) && (r = n.charAt(++a)), (u = b[r]) && (r = u(e, null == i ? "e" === r ? " " : "0" : i)), o.push(r), l = a + 1);
                            return o.push(n.slice(l, a)), o.join("")
                        }
                        return e.parse = function(t) {
                            var e = {
                                y: 1900,
                                m: 0,
                                d: 1,
                                H: 0,
                                M: 0,
                                S: 0,
                                L: 0,
                                Z: null
                            };
                            if (s(e, n, t, 0) != t.length) return null;
                            "p" in e && (e.H = e.H % 12 + 12 * e.p);
                            var r = null != e.Z && Ut !== Ft,
                                i = new(r ? Ft : Ut);
                            return "j" in e ? i.setFullYear(e.y, 0, e.j) : "W" in e || "U" in e ? ("w" in e || (e.w = "W" in e ? 1 : 0), i.setFullYear(e.y, 0, 1), i.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (i.getDay() + 5) % 7 : e.w + 7 * e.U - (i.getDay() + 6) % 7)) : i.setFullYear(e.y, e.m, e.d), i.setHours(e.H + (e.Z / 100 | 0), e.M + e.Z % 100, e.S, e.L), r ? i._ : i
                        }, e.toString = function() {
                            return n
                        }, e
                    }

                    function s(n, t, e, r) {
                        for (var i, u, o, a = 0, l = t.length, c = e.length; a < l;) {
                            if (r >= c) return -1;
                            if (37 === (i = t.charCodeAt(a++))) {
                                if (o = t.charAt(a++), !(u = _[o in Vt ? t.charAt(a++) : o]) || (r = u(n, e, r)) < 0) return -1
                            } else if (i != e.charCodeAt(r++)) return -1
                        }
                        return r
                    }
                    f.utc = function(n) {
                        var t = f(n);

                        function e(n) {
                            try {
                                var e = new(Ut = Ft);
                                return e._ = n, t(e)
                            } finally {
                                Ut = Date
                            }
                        }
                        return e.parse = function(n) {
                            try {
                                Ut = Ft;
                                var e = t.parse(n);
                                return e && e._
                            } finally {
                                Ut = Date
                            }
                        }, e.toString = t.toString, e
                    }, f.multi = f.utc.multi = se;
                    var h = u.map(),
                        p = Bt(o),
                        g = Gt(o),
                        d = Bt(a),
                        v = Gt(a),
                        y = Bt(l),
                        m = Gt(l),
                        x = Bt(c),
                        M = Gt(c);
                    i.forEach(function(n, t) {
                        h.set(n.toLowerCase(), t)
                    });
                    var b = {
                            a: function(n) {
                                return a[n.getDay()]
                            },
                            A: function(n) {
                                return o[n.getDay()]
                            },
                            b: function(n) {
                                return c[n.getMonth()]
                            },
                            B: function(n) {
                                return l[n.getMonth()]
                            },
                            c: f(t),
                            d: function(n, t) {
                                return $t(n.getDate(), t, 2)
                            },
                            e: function(n, t) {
                                return $t(n.getDate(), t, 2)
                            },
                            H: function(n, t) {
                                return $t(n.getHours(), t, 2)
                            },
                            I: function(n, t) {
                                return $t(n.getHours() % 12 || 12, t, 2)
                            },
                            j: function(n, t) {
                                return $t(1 + Ot.dayOfYear(n), t, 3)
                            },
                            L: function(n, t) {
                                return $t(n.getMilliseconds(), t, 3)
                            },
                            m: function(n, t) {
                                return $t(n.getMonth() + 1, t, 2)
                            },
                            M: function(n, t) {
                                return $t(n.getMinutes(), t, 2)
                            },
                            p: function(n) {
                                return i[+(n.getHours() >= 12)]
                            },
                            S: function(n, t) {
                                return $t(n.getSeconds(), t, 2)
                            },
                            U: function(n, t) {
                                return $t(Ot.sundayOfYear(n), t, 2)
                            },
                            w: function(n) {
                                return n.getDay()
                            },
                            W: function(n, t) {
                                return $t(Ot.mondayOfYear(n), t, 2)
                            },
                            x: f(e),
                            X: f(r),
                            y: function(n, t) {
                                return $t(n.getFullYear() % 100, t, 2)
                            },
                            Y: function(n, t) {
                                return $t(n.getFullYear() % 1e4, t, 4)
                            },
                            Z: ce,
                            "%": function() {
                                return "%"
                            }
                        },
                        _ = {
                            a: function(n, t, e) {
                                d.lastIndex = 0;
                                var r = d.exec(t.slice(e));
                                return r ? (n.w = v.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            A: function(n, t, e) {
                                p.lastIndex = 0;
                                var r = p.exec(t.slice(e));
                                return r ? (n.w = g.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            b: function(n, t, e) {
                                x.lastIndex = 0;
                                var r = x.exec(t.slice(e));
                                return r ? (n.m = M.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            B: function(n, t, e) {
                                y.lastIndex = 0;
                                var r = y.exec(t.slice(e));
                                return r ? (n.m = m.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            c: function(n, t, e) {
                                return s(n, b.c.toString(), t, e)
                            },
                            d: re,
                            e: re,
                            H: ue,
                            I: ue,
                            j: ie,
                            L: le,
                            m: ee,
                            M: oe,
                            p: function(n, t, e) {
                                var r = h.get(t.slice(e, e += 2).toLowerCase());
                                return null == r ? -1 : (n.p = r, e)
                            },
                            S: ae,
                            U: Wt,
                            w: Jt,
                            W: Kt,
                            x: function(n, t, e) {
                                return s(n, b.x.toString(), t, e)
                            },
                            X: function(n, t, e) {
                                return s(n, b.X.toString(), t, e)
                            },
                            y: ne,
                            Y: Qt,
                            Z: te,
                            "%": fe
                        };
                    return f
                }(n)
            }
        };
        var he = u.locale({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            date: "%m/%d/%Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });

        function pe() {}
        u.format = he.numberFormat, u.geo = {}, pe.prototype = {
            s: 0,
            t: 0,
            add: function(n) {
                de(n, this.t, ge), de(ge.s, this.s, this), this.s ? this.t += ge.t : this.s = ge.t
            },
            reset: function() {
                this.s = this.t = 0
            },
            valueOf: function() {
                return this.s
            }
        };
        var ge = new pe;

        function de(n, t, e) {
            var r = e.s = n + t,
                i = r - n,
                u = r - i;
            e.t = n - u + (t - i)
        }

        function ve(n, t) {
            n && me.hasOwnProperty(n.type) && me[n.type](n, t)
        }
        u.geo.stream = function(n, t) {
            n && ye.hasOwnProperty(n.type) ? ye[n.type](n, t) : ve(n, t)
        };
        var ye = {
                Feature: function(n, t) {
                    ve(n.geometry, t)
                },
                FeatureCollection: function(n, t) {
                    for (var e = n.features, r = -1, i = e.length; ++r < i;) ve(e[r].geometry, t)
                }
            },
            me = {
                Sphere: function(n, t) {
                    t.sphere()
                },
                Point: function(n, t) {
                    n = n.coordinates, t.point(n[0], n[1], n[2])
                },
                MultiPoint: function(n, t) {
                    for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) n = e[r], t.point(n[0], n[1], n[2])
                },
                LineString: function(n, t) {
                    xe(n.coordinates, t, 0)
                },
                MultiLineString: function(n, t) {
                    for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) xe(e[r], t, 0)
                },
                Polygon: function(n, t) {
                    Me(n.coordinates, t)
                },
                MultiPolygon: function(n, t) {
                    for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) Me(e[r], t)
                },
                GeometryCollection: function(n, t) {
                    for (var e = n.geometries, r = -1, i = e.length; ++r < i;) ve(e[r], t)
                }
            };

        function xe(n, t, e) {
            var r, i = -1,
                u = n.length - e;
            for (t.lineStart(); ++i < u;) r = n[i], t.point(r[0], r[1], r[2]);
            t.lineEnd()
        }

        function Me(n, t) {
            var e = -1,
                r = n.length;
            for (t.polygonStart(); ++e < r;) xe(n[e], t, 1);
            t.polygonEnd()
        }
        u.geo.area = function(n) {
            return be = 0, u.geo.stream(n, Pe), be
        };
        var be, _e, we, Se, ke, Ne, Ee, Ae, Ce, Te, ze, qe, Le = new pe,
            Pe = {
                sphere: function() {
                    be += 4 * Tn
                },
                point: U,
                lineStart: U,
                lineEnd: U,
                polygonStart: function() {
                    Le.reset(), Pe.lineStart = Re
                },
                polygonEnd: function() {
                    var n = 2 * Le;
                    be += n < 0 ? 4 * Tn + n : n, Pe.lineStart = Pe.lineEnd = Pe.point = U
                }
            };

        function Re() {
            var n, t, e, r, i;

            function u(n, t) {
                t = t * Pn / 2 + Tn / 4;
                var u = (n *= Pn) - e,
                    o = u >= 0 ? 1 : -1,
                    a = o * u,
                    l = Math.cos(t),
                    c = Math.sin(t),
                    f = i * c,
                    s = r * l + f * Math.cos(a),
                    h = f * o * Math.sin(a);
                Le.add(Math.atan2(h, s)), e = n, r = l, i = c
            }
            Pe.point = function(o, a) {
                Pe.point = u, e = (n = o) * Pn, r = Math.cos(a = (t = a) * Pn / 2 + Tn / 4), i = Math.sin(a)
            }, Pe.lineEnd = function() {
                u(n, t)
            }
        }

        function De(n) {
            var t = n[0],
                e = n[1],
                r = Math.cos(e);
            return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
        }

        function je(n, t) {
            return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
        }

        function Oe(n, t) {
            return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
        }

        function Ue(n, t) {
            n[0] += t[0], n[1] += t[1], n[2] += t[2]
        }

        function Fe(n, t) {
            return [n[0] * t, n[1] * t, n[2] * t]
        }

        function He(n) {
            var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
            n[0] /= t, n[1] /= t, n[2] /= t
        }

        function Ie(n) {
            return [Math.atan2(n[1], n[0]), Un(n[2])]
        }

        function Ye(n, t) {
            return _(n[0] - t[0]) < An && _(n[1] - t[1]) < An
        }
        u.geo.bounds = function() {
            var n, t, e, r, i, o, a, l, c, f, s, h = {
                point: p,
                lineStart: d,
                lineEnd: v,
                polygonStart: function() {
                    h.point = y, h.lineStart = m, h.lineEnd = x, c = 0, Pe.polygonStart()
                },
                polygonEnd: function() {
                    Pe.polygonEnd(), h.point = p, h.lineStart = d, h.lineEnd = v, Le < 0 ? (n = -(e = 180), t = -(r = 90)) : c > An ? r = 90 : c < -An && (t = -90), s[0] = n, s[1] = e
                }
            };

            function p(i, u) {
                f.push(s = [n = i, e = i]), u < t && (t = u), u > r && (r = u)
            }

            function g(u, o) {
                var a = De([u * Pn, o * Pn]);
                if (l) {
                    var c = Oe(l, a),
                        f = Oe([c[1], -c[0], 0], c);
                    He(f), f = Ie(f);
                    var s = u - i,
                        h = s > 0 ? 1 : -1,
                        g = f[0] * Rn * h,
                        d = _(s) > 180;
                    if (d ^ (h * i < g && g < h * u))(v = f[1] * Rn) > r && (r = v);
                    else if (d ^ (h * i < (g = (g + 360) % 360 - 180) && g < h * u)) {
                        var v;
                        (v = -f[1] * Rn) < t && (t = v)
                    } else o < t && (t = o), o > r && (r = o);
                    d ? u < i ? M(n, u) > M(n, e) && (e = u) : M(u, e) > M(n, e) && (n = u) : e >= n ? (u < n && (n = u), u > e && (e = u)) : u > i ? M(n, u) > M(n, e) && (e = u) : M(u, e) > M(n, e) && (n = u)
                } else p(u, o);
                l = a, i = u
            }

            function d() {
                h.point = g
            }

            function v() {
                s[0] = n, s[1] = e, h.point = p, l = null
            }

            function y(n, t) {
                if (l) {
                    var e = n - i;
                    c += _(e) > 180 ? e + (e > 0 ? 360 : -360) : e
                } else o = n, a = t;
                Pe.point(n, t), g(n, t)
            }

            function m() {
                Pe.lineStart()
            }

            function x() {
                y(o, a), Pe.lineEnd(), _(c) > An && (n = -(e = 180)), s[0] = n, s[1] = e, l = null
            }

            function M(n, t) {
                return (t -= n) < 0 ? t + 360 : t
            }

            function b(n, t) {
                return n[0] - t[0]
            }

            function w(n, t) {
                return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
            }
            return function(i) {
                if (r = e = -(n = t = 1 / 0), f = [], u.geo.stream(i, h), c = f.length) {
                    f.sort(b);
                    for (var o = 1, a = [d = f[0]]; o < c; ++o) w((p = f[o])[0], d) || w(p[1], d) ? (M(d[0], p[1]) > M(d[0], d[1]) && (d[1] = p[1]), M(p[0], d[1]) > M(d[0], d[1]) && (d[0] = p[0])) : a.push(d = p);
                    for (var l, c, p, g = -1 / 0, d = (o = 0, a[c = a.length - 1]); o <= c; d = p, ++o) p = a[o], (l = M(d[1], p[0])) > g && (g = l, n = p[0], e = d[1])
                }
                return f = s = null, n === 1 / 0 || t === 1 / 0 ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [n, t],
                    [e, r]
                ]
            }
        }(), u.geo.centroid = function(n) {
            _e = we = Se = ke = Ne = Ee = Ae = Ce = Te = ze = qe = 0, u.geo.stream(n, Ve);
            var t = Te,
                e = ze,
                r = qe,
                i = t * t + e * e + r * r;
            return i < Cn && (t = Ee, e = Ae, r = Ce, we < An && (t = Se, e = ke, r = Ne), (i = t * t + e * e + r * r) < Cn) ? [NaN, NaN] : [Math.atan2(e, t) * Rn, Un(r / Math.sqrt(i)) * Rn]
        };
        var Ve = {
            sphere: U,
            point: Ze,
            lineStart: $e,
            lineEnd: Be,
            polygonStart: function() {
                Ve.lineStart = Ge
            },
            polygonEnd: function() {
                Ve.lineStart = $e
            }
        };

        function Ze(n, t) {
            n *= Pn;
            var e = Math.cos(t *= Pn);
            Xe(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
        }

        function Xe(n, t, e) {
            Se += (n - Se) / ++_e, ke += (t - ke) / _e, Ne += (e - Ne) / _e
        }

        function $e() {
            var n, t, e;

            function r(r, i) {
                r *= Pn;
                var u = Math.cos(i *= Pn),
                    o = u * Math.cos(r),
                    a = u * Math.sin(r),
                    l = Math.sin(i),
                    c = Math.atan2(Math.sqrt((c = t * l - e * a) * c + (c = e * o - n * l) * c + (c = n * a - t * o) * c), n * o + t * a + e * l);
                we += c, Ee += c * (n + (n = o)), Ae += c * (t + (t = a)), Ce += c * (e + (e = l)), Xe(n, t, e)
            }
            Ve.point = function(i, u) {
                i *= Pn;
                var o = Math.cos(u *= Pn);
                n = o * Math.cos(i), t = o * Math.sin(i), e = Math.sin(u), Ve.point = r, Xe(n, t, e)
            }
        }

        function Be() {
            Ve.point = Ze
        }

        function Ge() {
            var n, t, e, r, i;

            function u(n, t) {
                n *= Pn;
                var u = Math.cos(t *= Pn),
                    o = u * Math.cos(n),
                    a = u * Math.sin(n),
                    l = Math.sin(t),
                    c = r * l - i * a,
                    f = i * o - e * l,
                    s = e * a - r * o,
                    h = Math.sqrt(c * c + f * f + s * s),
                    p = e * o + r * a + i * l,
                    g = h && -On(p) / h,
                    d = Math.atan2(h, p);
                Te += g * c, ze += g * f, qe += g * s, we += d, Ee += d * (e + (e = o)), Ae += d * (r + (r = a)), Ce += d * (i + (i = l)), Xe(e, r, i)
            }
            Ve.point = function(o, a) {
                n = o, t = a, Ve.point = u, o *= Pn;
                var l = Math.cos(a *= Pn);
                e = l * Math.cos(o), r = l * Math.sin(o), i = Math.sin(a), Xe(e, r, i)
            }, Ve.lineEnd = function() {
                u(n, t), Ve.lineEnd = Be, Ve.point = Ze
            }
        }

        function Je(n, t) {
            function e(e, r) {
                return e = n(e, r), t(e[0], e[1])
            }
            return n.invert && t.invert && (e.invert = function(e, r) {
                return (e = t.invert(e, r)) && n.invert(e[0], e[1])
            }), e
        }

        function We() {
            return !0
        }

        function Ke(n, t, e, r, i) {
            var u = [],
                o = [];
            if (n.forEach(function(n) {
                    if (!((t = n.length - 1) <= 0)) {
                        var t, e = n[0],
                            r = n[t];
                        if (Ye(e, r)) {
                            i.lineStart();
                            for (var a = 0; a < t; ++a) i.point((e = n[a])[0], e[1]);
                            i.lineEnd()
                        } else {
                            var l = new nr(e, n, null, !0),
                                c = new nr(e, null, l, !1);
                            l.o = c, u.push(l), o.push(c), c = new nr(r, null, l = new nr(r, n, null, !1), !0), l.o = c, u.push(l), o.push(c)
                        }
                    }
                }), o.sort(t), Qe(u), Qe(o), u.length) {
                for (var a = 0, l = e, c = o.length; a < c; ++a) o[a].e = l = !l;
                for (var f, s, h = u[0];;) {
                    for (var p = h, g = !0; p.v;)
                        if ((p = p.n) === h) return;
                    f = p.z, i.lineStart();
                    do {
                        if (p.v = p.o.v = !0, p.e) {
                            if (g)
                                for (a = 0, c = f.length; a < c; ++a) i.point((s = f[a])[0], s[1]);
                            else r(p.x, p.n.x, 1, i);
                            p = p.n
                        } else {
                            if (g)
                                for (a = (f = p.p.z).length - 1; a >= 0; --a) i.point((s = f[a])[0], s[1]);
                            else r(p.x, p.p.x, -1, i);
                            p = p.p
                        }
                        f = (p = p.o).z, g = !g
                    } while (!p.v);
                    i.lineEnd()
                }
            }
        }

        function Qe(n) {
            if (t = n.length) {
                for (var t, e, r = 0, i = n[0]; ++r < t;) i.n = e = n[r], e.p = i, i = e;
                i.n = e = n[0], e.p = i
            }
        }

        function nr(n, t, e, r) {
            this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
        }

        function tr(n, t, e, r) {
            return function(i, o) {
                var a, l = t(o),
                    c = i.invert(r[0], r[1]),
                    f = {
                        point: s,
                        lineStart: p,
                        lineEnd: g,
                        polygonStart: function() {
                            f.point = M, f.lineStart = b, f.lineEnd = _, a = [], d = []
                        },
                        polygonEnd: function() {
                            f.point = s, f.lineStart = p, f.lineEnd = g, a = u.merge(a);
                            var n = function(n, t) {
                                var e = n[0],
                                    r = n[1],
                                    i = [Math.sin(e), -Math.cos(e), 0],
                                    u = 0,
                                    o = 0;
                                Le.reset();
                                for (var a = 0, l = t.length; a < l; ++a) {
                                    var c = t[a],
                                        f = c.length;
                                    if (f)
                                        for (var s = c[0], h = s[0], p = s[1] / 2 + Tn / 4, g = Math.sin(p), d = Math.cos(p), v = 1;;) {
                                            v === f && (v = 0);
                                            var y = (n = c[v])[0],
                                                m = n[1] / 2 + Tn / 4,
                                                x = Math.sin(m),
                                                M = Math.cos(m),
                                                b = y - h,
                                                _ = b >= 0 ? 1 : -1,
                                                w = _ * b,
                                                S = w > Tn,
                                                k = g * x;
                                            if (Le.add(Math.atan2(k * _ * Math.sin(w), d * M + k * Math.cos(w))), u += S ? b + _ * zn : b, S ^ h >= e ^ y >= e) {
                                                var N = Oe(De(s), De(n));
                                                He(N);
                                                var E = Oe(i, N);
                                                He(E);
                                                var A = (S ^ b >= 0 ? -1 : 1) * Un(E[2]);
                                                (r > A || r === A && (N[0] || N[1])) && (o += S ^ b >= 0 ? 1 : -1)
                                            }
                                            if (!v++) break;
                                            h = y, g = x, d = M, s = n
                                        }
                                }
                                return (u < -An || u < An && Le < -An) ^ 1 & o
                            }(c, d);
                            a.length ? (x || (o.polygonStart(), x = !0), Ke(a, ir, n, e, o)) : n && (x || (o.polygonStart(), x = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), x && (o.polygonEnd(), x = !1), a = d = null
                        },
                        sphere: function() {
                            o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                        }
                    };

                function s(t, e) {
                    var r = i(t, e);
                    n(t = r[0], e = r[1]) && o.point(t, e)
                }

                function h(n, t) {
                    var e = i(n, t);
                    l.point(e[0], e[1])
                }

                function p() {
                    f.point = h, l.lineStart()
                }

                function g() {
                    f.point = s, l.lineEnd()
                }
                var d, v, y = rr(),
                    m = t(y),
                    x = !1;

                function M(n, t) {
                    v.push([n, t]);
                    var e = i(n, t);
                    m.point(e[0], e[1])
                }

                function b() {
                    m.lineStart(), v = []
                }

                function _() {
                    M(v[0][0], v[0][1]), m.lineEnd();
                    var n, t = m.clean(),
                        e = y.buffer(),
                        r = e.length;
                    if (v.pop(), d.push(v), v = null, r)
                        if (1 & t) {
                            var i, u = -1;
                            if ((r = (n = e[0]).length - 1) > 0) {
                                for (x || (o.polygonStart(), x = !0), o.lineStart(); ++u < r;) o.point((i = n[u])[0], i[1]);
                                o.lineEnd()
                            }
                        } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), a.push(e.filter(er))
                }
                return f
            }
        }

        function er(n) {
            return n.length > 1
        }

        function rr() {
            var n, t = [];
            return {
                lineStart: function() {
                    t.push(n = [])
                },
                point: function(t, e) {
                    n.push([t, e])
                },
                lineEnd: U,
                buffer: function() {
                    var e = t;
                    return t = [], n = null, e
                },
                rejoin: function() {
                    t.length > 1 && t.push(t.pop().concat(t.shift()))
                }
            }
        }

        function ir(n, t) {
            return ((n = n.x)[0] < 0 ? n[1] - Ln - An : Ln - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ln - An : Ln - t[1])
        }
        var ur = tr(We, function(n) {
            var t, e = NaN,
                r = NaN,
                i = NaN;
            return {
                lineStart: function() {
                    n.lineStart(), t = 1
                },
                point: function(u, o) {
                    var a = u > 0 ? Tn : -Tn,
                        l = _(u - e);
                    _(l - Tn) < An ? (n.point(e, r = (r + o) / 2 > 0 ? Ln : -Ln), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(u, r), t = 0) : i !== a && l >= Tn && (_(e - i) < An && (e -= i * An), _(u - a) < An && (u -= a * An), r = function(n, t, e, r) {
                        var i, u, o = Math.sin(n - e);
                        return _(o) > An ? Math.atan((Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) / (i * u * o)) : (t + r) / 2
                    }(e, r, u, o), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = u, r = o), i = a
                },
                lineEnd: function() {
                    n.lineEnd(), e = r = NaN
                },
                clean: function() {
                    return 2 - t
                }
            }
        }, function(n, t, e, r) {
            var i;
            if (null == n) i = e * Ln, r.point(-Tn, i), r.point(0, i), r.point(Tn, i), r.point(Tn, 0), r.point(Tn, -i), r.point(0, -i), r.point(-Tn, -i), r.point(-Tn, 0), r.point(-Tn, i);
            else if (_(n[0] - t[0]) > An) {
                var u = n[0] < t[0] ? Tn : -Tn;
                i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i)
            } else r.point(t[0], t[1])
        }, [-Tn, -Tn / 2]);

        function or(n, t, e, r) {
            return function(i) {
                var u, o = i.a,
                    a = i.b,
                    l = o.x,
                    c = o.y,
                    f = 0,
                    s = 1,
                    h = a.x - l,
                    p = a.y - c;
                if (u = n - l, h || !(u > 0)) {
                    if (u /= h, h < 0) {
                        if (u < f) return;
                        u < s && (s = u)
                    } else if (h > 0) {
                        if (u > s) return;
                        u > f && (f = u)
                    }
                    if (u = e - l, h || !(u < 0)) {
                        if (u /= h, h < 0) {
                            if (u > s) return;
                            u > f && (f = u)
                        } else if (h > 0) {
                            if (u < f) return;
                            u < s && (s = u)
                        }
                        if (u = t - c, p || !(u > 0)) {
                            if (u /= p, p < 0) {
                                if (u < f) return;
                                u < s && (s = u)
                            } else if (p > 0) {
                                if (u > s) return;
                                u > f && (f = u)
                            }
                            if (u = r - c, p || !(u < 0)) {
                                if (u /= p, p < 0) {
                                    if (u > s) return;
                                    u > f && (f = u)
                                } else if (p > 0) {
                                    if (u < f) return;
                                    u < s && (s = u)
                                }
                                return f > 0 && (i.a = {
                                    x: l + f * h,
                                    y: c + f * p
                                }), s < 1 && (i.b = {
                                    x: l + s * h,
                                    y: c + s * p
                                }), i
                            }
                        }
                    }
                }
            }
        }
        var ar = 1e9;

        function lr(n, t, e, r) {
            return function(l) {
                var c, f, s, h, p, g, d, v, y, m, x, M = l,
                    b = rr(),
                    _ = or(n, t, e, r),
                    w = {
                        point: N,
                        lineStart: function() {
                            w.point = E, f && f.push(s = []);
                            m = !0, y = !1, d = v = NaN
                        },
                        lineEnd: function() {
                            c && (E(h, p), g && y && b.rejoin(), c.push(b.buffer()));
                            w.point = N, y && l.lineEnd()
                        },
                        polygonStart: function() {
                            l = b, c = [], f = [], x = !0
                        },
                        polygonEnd: function() {
                            l = M, c = u.merge(c);
                            var t = function(n) {
                                    for (var t = 0, e = f.length, r = n[1], i = 0; i < e; ++i)
                                        for (var u, o = 1, a = f[i], l = a.length, c = a[0]; o < l; ++o) u = a[o], c[1] <= r ? u[1] > r && jn(c, u, n) > 0 && ++t : u[1] <= r && jn(c, u, n) < 0 && --t, c = u;
                                    return 0 !== t
                                }([n, r]),
                                e = x && t,
                                i = c.length;
                            (e || i) && (l.polygonStart(), e && (l.lineStart(), S(null, null, 1, l), l.lineEnd()), i && Ke(c, o, t, S, l), l.polygonEnd()), c = f = s = null
                        }
                    };

                function S(u, o, l, c) {
                    var f = 0,
                        s = 0;
                    if (null == u || (f = i(u, l)) !== (s = i(o, l)) || a(u, o) < 0 ^ l > 0)
                        do {
                            c.point(0 === f || 3 === f ? n : e, f > 1 ? r : t)
                        } while ((f = (f + l + 4) % 4) !== s);
                    else c.point(o[0], o[1])
                }

                function k(i, u) {
                    return n <= i && i <= e && t <= u && u <= r
                }

                function N(n, t) {
                    k(n, t) && l.point(n, t)
                }

                function E(n, t) {
                    var e = k(n = Math.max(-ar, Math.min(ar, n)), t = Math.max(-ar, Math.min(ar, t)));
                    if (f && s.push([n, t]), m) h = n, p = t, g = e, m = !1, e && (l.lineStart(), l.point(n, t));
                    else if (e && y) l.point(n, t);
                    else {
                        var r = {
                            a: {
                                x: d,
                                y: v
                            },
                            b: {
                                x: n,
                                y: t
                            }
                        };
                        _(r) ? (y || (l.lineStart(), l.point(r.a.x, r.a.y)), l.point(r.b.x, r.b.y), e || l.lineEnd(), x = !1) : e && (l.lineStart(), l.point(n, t), x = !1)
                    }
                    d = n, v = t, y = e
                }
                return w
            };

            function i(r, i) {
                return _(r[0] - n) < An ? i > 0 ? 0 : 3 : _(r[0] - e) < An ? i > 0 ? 2 : 1 : _(r[1] - t) < An ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
            }

            function o(n, t) {
                return a(n.x, t.x)
            }

            function a(n, t) {
                var e = i(n, 1),
                    r = i(t, 1);
                return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
            }
        }

        function cr(n) {
            var t = 0,
                e = Tn / 3,
                r = zr(n),
                i = r(t, e);
            return i.parallels = function(n) {
                return arguments.length ? r(t = n[0] * Tn / 180, e = n[1] * Tn / 180) : [t / Tn * 180, e / Tn * 180]
            }, i
        }

        function fr(n, t) {
            var e = Math.sin(n),
                r = (e + Math.sin(t)) / 2,
                i = 1 + e * (2 * r - e),
                u = Math.sqrt(i) / r;

            function o(n, t) {
                var e = Math.sqrt(i - 2 * r * Math.sin(t)) / r;
                return [e * Math.sin(n *= r), u - e * Math.cos(n)]
            }
            return o.invert = function(n, t) {
                var e = u - t;
                return [Math.atan2(n, e) / r, Un((i - (n * n + e * e) * r * r) / (2 * r))]
            }, o
        }
        u.geo.clipExtent = function() {
            var n, t, e, r, i, u, o = {
                stream: function(n) {
                    return i && (i.valid = !1), (i = u(n)).valid = !0, i
                },
                extent: function(a) {
                    return arguments.length ? (u = lr(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), o) : [
                        [n, t],
                        [e, r]
                    ]
                }
            };
            return o.extent([
                [0, 0],
                [960, 500]
            ])
        }, (u.geo.conicEqualArea = function() {
            return cr(fr)
        }).raw = fr, u.geo.albers = function() {
            return u.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
        }, u.geo.albersUsa = function() {
            var n, t, e, r, i = u.geo.albers(),
                o = u.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                a = u.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                l = {
                    point: function(t, e) {
                        n = [t, e]
                    }
                };

            function c(i) {
                var u = i[0],
                    o = i[1];
                return n = null, t(u, o), n || (e(u, o), n) || r(u, o), n
            }
            return c.invert = function(n) {
                var t = i.scale(),
                    e = i.translate(),
                    r = (n[0] - e[0]) / t,
                    u = (n[1] - e[1]) / t;
                return (u >= .12 && u < .234 && r >= -.425 && r < -.214 ? o : u >= .166 && u < .234 && r >= -.214 && r < -.115 ? a : i).invert(n)
            }, c.stream = function(n) {
                var t = i.stream(n),
                    e = o.stream(n),
                    r = a.stream(n);
                return {
                    point: function(n, i) {
                        t.point(n, i), e.point(n, i), r.point(n, i)
                    },
                    sphere: function() {
                        t.sphere(), e.sphere(), r.sphere()
                    },
                    lineStart: function() {
                        t.lineStart(), e.lineStart(), r.lineStart()
                    },
                    lineEnd: function() {
                        t.lineEnd(), e.lineEnd(), r.lineEnd()
                    },
                    polygonStart: function() {
                        t.polygonStart(), e.polygonStart(), r.polygonStart()
                    },
                    polygonEnd: function() {
                        t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                    }
                }
            }, c.precision = function(n) {
                return arguments.length ? (i.precision(n), o.precision(n), a.precision(n), c) : i.precision()
            }, c.scale = function(n) {
                return arguments.length ? (i.scale(n), o.scale(.35 * n), a.scale(n), c.translate(i.translate())) : i.scale()
            }, c.translate = function(n) {
                if (!arguments.length) return i.translate();
                var u = i.scale(),
                    f = +n[0],
                    s = +n[1];
                return t = i.translate(n).clipExtent([
                    [f - .455 * u, s - .238 * u],
                    [f + .455 * u, s + .238 * u]
                ]).stream(l).point, e = o.translate([f - .307 * u, s + .201 * u]).clipExtent([
                    [f - .425 * u + An, s + .12 * u + An],
                    [f - .214 * u - An, s + .234 * u - An]
                ]).stream(l).point, r = a.translate([f - .205 * u, s + .212 * u]).clipExtent([
                    [f - .214 * u + An, s + .166 * u + An],
                    [f - .115 * u - An, s + .234 * u - An]
                ]).stream(l).point, c
            }, c.scale(1070)
        };
        var sr, hr, pr, gr, dr, vr, yr = {
            point: U,
            lineStart: U,
            lineEnd: U,
            polygonStart: function() {
                hr = 0, yr.lineStart = mr
            },
            polygonEnd: function() {
                yr.lineStart = yr.lineEnd = yr.point = U, sr += _(hr / 2)
            }
        };

        function mr() {
            var n, t, e, r;

            function i(n, t) {
                hr += r * n - e * t, e = n, r = t
            }
            yr.point = function(u, o) {
                yr.point = i, n = e = u, t = r = o
            }, yr.lineEnd = function() {
                i(n, t)
            }
        }
        var xr = {
            point: function(n, t) {
                n < pr && (pr = n);
                n > dr && (dr = n);
                t < gr && (gr = t);
                t > vr && (vr = t)
            },
            lineStart: U,
            lineEnd: U,
            polygonStart: U,
            polygonEnd: U
        };

        function Mr(n) {
            return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
        }
        var br, _r = {
            point: wr,
            lineStart: Sr,
            lineEnd: kr,
            polygonStart: function() {
                _r.lineStart = Nr
            },
            polygonEnd: function() {
                _r.point = wr, _r.lineStart = Sr, _r.lineEnd = kr
            }
        };

        function wr(n, t) {
            Se += n, ke += t, ++Ne
        }

        function Sr() {
            var n, t;

            function e(e, r) {
                var i = e - n,
                    u = r - t,
                    o = Math.sqrt(i * i + u * u);
                Ee += o * (n + e) / 2, Ae += o * (t + r) / 2, Ce += o, wr(n = e, t = r)
            }
            _r.point = function(r, i) {
                _r.point = e, wr(n = r, t = i)
            }
        }

        function kr() {
            _r.point = wr
        }

        function Nr() {
            var n, t, e, r;

            function i(n, t) {
                var i = n - e,
                    u = t - r,
                    o = Math.sqrt(i * i + u * u);
                Ee += o * (e + n) / 2, Ae += o * (r + t) / 2, Ce += o, Te += (o = r * n - e * t) * (e + n), ze += o * (r + t), qe += 3 * o, wr(e = n, r = t)
            }
            _r.point = function(u, o) {
                _r.point = i, wr(n = e = u, t = r = o)
            }, _r.lineEnd = function() {
                i(n, t)
            }
        }

        function Er(n) {
            var t = .5,
                e = Math.cos(30 * Pn),
                r = 16;

            function i(t) {
                return (r ? function(t) {
                    var e, i, o, a, l, c, f, s, h, p, g, d, v = {
                        point: y,
                        lineStart: m,
                        lineEnd: M,
                        polygonStart: function() {
                            t.polygonStart(), v.lineStart = b
                        },
                        polygonEnd: function() {
                            t.polygonEnd(), v.lineStart = m
                        }
                    };

                    function y(e, r) {
                        e = n(e, r), t.point(e[0], e[1])
                    }

                    function m() {
                        s = NaN, v.point = x, t.lineStart()
                    }

                    function x(e, i) {
                        var o = De([e, i]),
                            a = n(e, i);
                        u(s, h, f, p, g, d, s = a[0], h = a[1], f = e, p = o[0], g = o[1], d = o[2], r, t), t.point(s, h)
                    }

                    function M() {
                        v.point = y, t.lineEnd()
                    }

                    function b() {
                        m(), v.point = _, v.lineEnd = w
                    }

                    function _(n, t) {
                        x(e = n, t), i = s, o = h, a = p, l = g, c = d, v.point = x
                    }

                    function w() {
                        u(s, h, f, p, g, d, i, o, e, a, l, c, r, t), v.lineEnd = M, M()
                    }
                    return v
                } : function(t) {
                    return Cr(t, function(e, r) {
                        e = n(e, r), t.point(e[0], e[1])
                    })
                })(t)
            }

            function u(r, i, o, a, l, c, f, s, h, p, g, d, v, y) {
                var m = f - r,
                    x = s - i,
                    M = m * m + x * x;
                if (M > 4 * t && v--) {
                    var b = a + p,
                        w = l + g,
                        S = c + d,
                        k = Math.sqrt(b * b + w * w + S * S),
                        N = Math.asin(S /= k),
                        E = _(_(S) - 1) < An || _(o - h) < An ? (o + h) / 2 : Math.atan2(w, b),
                        A = n(E, N),
                        C = A[0],
                        T = A[1],
                        z = C - r,
                        q = T - i,
                        L = x * z - m * q;
                    (L * L / M > t || _((m * z + x * q) / M - .5) > .3 || a * p + l * g + c * d < e) && (u(r, i, o, a, l, c, C, T, E, b /= k, w /= k, S, v, y), y.point(C, T), u(C, T, E, b, w, S, f, s, h, p, g, d, v, y))
                }
            }
            return i.precision = function(n) {
                return arguments.length ? (r = (t = n * n) > 0 && 16, i) : Math.sqrt(t)
            }, i
        }

        function Ar(n) {
            this.stream = n
        }

        function Cr(n, t) {
            return {
                point: t,
                sphere: function() {
                    n.sphere()
                },
                lineStart: function() {
                    n.lineStart()
                },
                lineEnd: function() {
                    n.lineEnd()
                },
                polygonStart: function() {
                    n.polygonStart()
                },
                polygonEnd: function() {
                    n.polygonEnd()
                }
            }
        }

        function Tr(n) {
            return zr(function() {
                return n
            })()
        }

        function zr(n) {
            var t, e, r, i, o, a, l = Er(function(n, e) {
                    return [(n = t(n, e))[0] * c + i, o - n[1] * c]
                }),
                c = 150,
                f = 480,
                s = 250,
                h = 0,
                p = 0,
                g = 0,
                d = 0,
                v = 0,
                y = ur,
                m = R,
                x = null,
                M = null;

            function b(n) {
                return [(n = r(n[0] * Pn, n[1] * Pn))[0] * c + i, o - n[1] * c]
            }

            function w(n) {
                return (n = r.invert((n[0] - i) / c, (o - n[1]) / c)) && [n[0] * Rn, n[1] * Rn]
            }

            function S() {
                r = Je(e = Rr(g, d, v), t);
                var n = t(h, p);
                return i = f - n[0] * c, o = s + n[1] * c, k()
            }

            function k() {
                return a && (a.valid = !1, a = null), b
            }
            return b.stream = function(n) {
                    return a && (a.valid = !1), (a = qr(y(e, l(m(n))))).valid = !0, a
                }, b.clipAngle = function(n) {
                    return arguments.length ? (y = null == n ? (x = n, ur) : function(n) {
                        var t = Math.cos(n),
                            e = t > 0,
                            r = _(t) > An;
                        return tr(i, function(n) {
                            var t, a, l, c, f;
                            return {
                                lineStart: function() {
                                    c = l = !1, f = 1
                                },
                                point: function(s, h) {
                                    var p, g = [s, h],
                                        d = i(s, h),
                                        v = e ? d ? 0 : o(s, h) : d ? o(s + (s < 0 ? Tn : -Tn), h) : 0;
                                    if (!t && (c = l = d) && n.lineStart(), d !== l && (p = u(t, g), (Ye(t, p) || Ye(g, p)) && (g[0] += An, g[1] += An, d = i(g[0], g[1]))), d !== l) f = 0, d ? (n.lineStart(), p = u(g, t), n.point(p[0], p[1])) : (p = u(t, g), n.point(p[0], p[1]), n.lineEnd()), t = p;
                                    else if (r && t && e ^ d) {
                                        var y;
                                        v & a || !(y = u(g, t, !0)) || (f = 0, e ? (n.lineStart(), n.point(y[0][0], y[0][1]), n.point(y[1][0], y[1][1]), n.lineEnd()) : (n.point(y[1][0], y[1][1]), n.lineEnd(), n.lineStart(), n.point(y[0][0], y[0][1])))
                                    }!d || t && Ye(t, g) || n.point(g[0], g[1]), t = g, l = d, a = v
                                },
                                lineEnd: function() {
                                    l && n.lineEnd(), t = null
                                },
                                clean: function() {
                                    return f | (c && l) << 1
                                }
                            }
                        }, Ur(n, 6 * Pn), e ? [0, -n] : [-Tn, n - Tn]);

                        function i(n, e) {
                            return Math.cos(n) * Math.cos(e) > t
                        }

                        function u(n, e, r) {
                            var i = [1, 0, 0],
                                u = Oe(De(n), De(e)),
                                o = je(u, u),
                                a = u[0],
                                l = o - a * a;
                            if (!l) return !r && n;
                            var c = t * o / l,
                                f = -t * a / l,
                                s = Oe(i, u),
                                h = Fe(i, c);
                            Ue(h, Fe(u, f));
                            var p = s,
                                g = je(h, p),
                                d = je(p, p),
                                v = g * g - d * (je(h, h) - 1);
                            if (!(v < 0)) {
                                var y = Math.sqrt(v),
                                    m = Fe(p, (-g - y) / d);
                                if (Ue(m, h), m = Ie(m), !r) return m;
                                var x, M = n[0],
                                    b = e[0],
                                    w = n[1],
                                    S = e[1];
                                b < M && (x = M, M = b, b = x);
                                var k = b - M,
                                    N = _(k - Tn) < An;
                                if (!N && S < w && (x = w, w = S, S = x), N || k < An ? N ? w + S > 0 ^ m[1] < (_(m[0] - M) < An ? w : S) : w <= m[1] && m[1] <= S : k > Tn ^ (M <= m[0] && m[0] <= b)) {
                                    var E = Fe(p, (-g + y) / d);
                                    return Ue(E, h), [m, Ie(E)]
                                }
                            }
                        }

                        function o(t, r) {
                            var i = e ? n : Tn - n,
                                u = 0;
                            return t < -i ? u |= 1 : t > i && (u |= 2), r < -i ? u |= 4 : r > i && (u |= 8), u
                        }
                    }((x = +n) * Pn), k()) : x
                }, b.clipExtent = function(n) {
                    return arguments.length ? (M = n, m = n ? lr(n[0][0], n[0][1], n[1][0], n[1][1]) : R, k()) : M
                }, b.scale = function(n) {
                    return arguments.length ? (c = +n, S()) : c
                }, b.translate = function(n) {
                    return arguments.length ? (f = +n[0], s = +n[1], S()) : [f, s]
                }, b.center = function(n) {
                    return arguments.length ? (h = n[0] % 360 * Pn, p = n[1] % 360 * Pn, S()) : [h * Rn, p * Rn]
                }, b.rotate = function(n) {
                    return arguments.length ? (g = n[0] % 360 * Pn, d = n[1] % 360 * Pn, v = n.length > 2 ? n[2] % 360 * Pn : 0, S()) : [g * Rn, d * Rn, v * Rn]
                }, u.rebind(b, l, "precision"),
                function() {
                    return t = n.apply(this, arguments), b.invert = t.invert && w, S()
                }
        }

        function qr(n) {
            return Cr(n, function(t, e) {
                n.point(t * Pn, e * Pn)
            })
        }

        function Lr(n, t) {
            return [n, t]
        }

        function Pr(n, t) {
            return [n > Tn ? n - zn : n < -Tn ? n + zn : n, t]
        }

        function Rr(n, t, e) {
            return n ? t || e ? Je(jr(n), Or(t, e)) : jr(n) : t || e ? Or(t, e) : Pr
        }

        function Dr(n) {
            return function(t, e) {
                return [(t += n) > Tn ? t - zn : t < -Tn ? t + zn : t, e]
            }
        }

        function jr(n) {
            var t = Dr(n);
            return t.invert = Dr(-n), t
        }

        function Or(n, t) {
            var e = Math.cos(n),
                r = Math.sin(n),
                i = Math.cos(t),
                u = Math.sin(t);

            function o(n, t) {
                var o = Math.cos(t),
                    a = Math.cos(n) * o,
                    l = Math.sin(n) * o,
                    c = Math.sin(t),
                    f = c * e + a * r;
                return [Math.atan2(l * i - f * u, a * e - c * r), Un(f * i + l * u)]
            }
            return o.invert = function(n, t) {
                var o = Math.cos(t),
                    a = Math.cos(n) * o,
                    l = Math.sin(n) * o,
                    c = Math.sin(t),
                    f = c * i - l * u;
                return [Math.atan2(l * i + c * u, a * e + f * r), Un(f * e - a * r)]
            }, o
        }

        function Ur(n, t) {
            var e = Math.cos(n),
                r = Math.sin(n);
            return function(i, u, o, a) {
                var l = o * t;
                null != i ? (i = Fr(e, i), u = Fr(e, u), (o > 0 ? i < u : i > u) && (i += o * zn)) : (i = n + o * zn, u = n - .5 * l);
                for (var c, f = i; o > 0 ? f > u : f < u; f -= l) a.point((c = Ie([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], c[1])
            }
        }

        function Fr(n, t) {
            var e = De(t);
            e[0] -= n, He(e);
            var r = On(-e[1]);
            return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - An) % (2 * Math.PI)
        }

        function Hr(n, t, e) {
            var r = u.range(n, t - An, e).concat(t);
            return function(n) {
                return r.map(function(t) {
                    return [n, t]
                })
            }
        }

        function Ir(n, t, e) {
            var r = u.range(n, t - An, e).concat(t);
            return function(n) {
                return r.map(function(t) {
                    return [t, n]
                })
            }
        }

        function Yr(n) {
            return n.source
        }

        function Vr(n) {
            return n.target
        }
        u.geo.path = function() {
            var n, t, e, r, i, o = 4.5;

            function a(n) {
                return n && ("function" == typeof o && r.pointRadius(+o.apply(this, arguments)), i && i.valid || (i = e(r)), u.geo.stream(n, i)), r.result()
            }

            function l() {
                return i = null, a
            }
            return a.area = function(n) {
                return sr = 0, u.geo.stream(n, e(yr)), sr
            }, a.centroid = function(n) {
                return Se = ke = Ne = Ee = Ae = Ce = Te = ze = qe = 0, u.geo.stream(n, e(_r)), qe ? [Te / qe, ze / qe] : Ce ? [Ee / Ce, Ae / Ce] : Ne ? [Se / Ne, ke / Ne] : [NaN, NaN]
            }, a.bounds = function(n) {
                return dr = vr = -(pr = gr = 1 / 0), u.geo.stream(n, e(xr)), [
                    [pr, gr],
                    [dr, vr]
                ]
            }, a.projection = function(t) {
                return arguments.length ? (e = (n = t) ? t.stream || function(n) {
                    var t = Er(function(t, e) {
                        return n([t * Rn, e * Rn])
                    });
                    return function(n) {
                        return qr(t(n))
                    }
                }(t) : R, l()) : n
            }, a.context = function(n) {
                return arguments.length ? (r = null == (t = n) ? new function() {
                    var n = Mr(4.5),
                        t = [],
                        e = {
                            point: r,
                            lineStart: function() {
                                e.point = i
                            },
                            lineEnd: o,
                            polygonStart: function() {
                                e.lineEnd = a
                            },
                            polygonEnd: function() {
                                e.lineEnd = o, e.point = r
                            },
                            pointRadius: function(t) {
                                return n = Mr(t), e
                            },
                            result: function() {
                                if (t.length) {
                                    var n = t.join("");
                                    return t = [], n
                                }
                            }
                        };

                    function r(e, r) {
                        t.push("M", e, ",", r, n)
                    }

                    function i(n, r) {
                        t.push("M", n, ",", r), e.point = u
                    }

                    function u(n, e) {
                        t.push("L", n, ",", e)
                    }

                    function o() {
                        e.point = r
                    }

                    function a() {
                        t.push("Z")
                    }
                    return e
                } : new function(n) {
                    var t = 4.5,
                        e = {
                            point: r,
                            lineStart: function() {
                                e.point = i
                            },
                            lineEnd: o,
                            polygonStart: function() {
                                e.lineEnd = a
                            },
                            polygonEnd: function() {
                                e.lineEnd = o, e.point = r
                            },
                            pointRadius: function(n) {
                                return t = n, e
                            },
                            result: U
                        };

                    function r(e, r) {
                        n.moveTo(e + t, r), n.arc(e, r, t, 0, zn)
                    }

                    function i(t, r) {
                        n.moveTo(t, r), e.point = u
                    }

                    function u(t, e) {
                        n.lineTo(t, e)
                    }

                    function o() {
                        e.point = r
                    }

                    function a() {
                        n.closePath()
                    }
                    return e
                }(n), "function" != typeof o && r.pointRadius(o), l()) : t
            }, a.pointRadius = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : (r.pointRadius(+n), +n), a) : o
            }, a.projection(u.geo.albersUsa()).context(null)
        }, u.geo.transform = function(n) {
            return {
                stream: function(t) {
                    var e = new Ar(t);
                    for (var r in n) e[r] = n[r];
                    return e
                }
            }
        }, Ar.prototype = {
            point: function(n, t) {
                this.stream.point(n, t)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        }, u.geo.projection = Tr, u.geo.projectionMutator = zr, (u.geo.equirectangular = function() {
            return Tr(Lr)
        }).raw = Lr.invert = Lr, u.geo.rotation = function(n) {
            function t(t) {
                return (t = n(t[0] * Pn, t[1] * Pn))[0] *= Rn, t[1] *= Rn, t
            }
            return n = Rr(n[0] % 360 * Pn, n[1] * Pn, n.length > 2 ? n[2] * Pn : 0), t.invert = function(t) {
                return (t = n.invert(t[0] * Pn, t[1] * Pn))[0] *= Rn, t[1] *= Rn, t
            }, t
        }, Pr.invert = Lr, u.geo.circle = function() {
            var n, t, e = [0, 0],
                r = 6;

            function i() {
                var n = "function" == typeof e ? e.apply(this, arguments) : e,
                    r = Rr(-n[0] * Pn, -n[1] * Pn, 0).invert,
                    i = [];
                return t(null, null, 1, {
                    point: function(n, t) {
                        i.push(n = r(n, t)), n[0] *= Rn, n[1] *= Rn
                    }
                }), {
                    type: "Polygon",
                    coordinates: [i]
                }
            }
            return i.origin = function(n) {
                return arguments.length ? (e = n, i) : e
            }, i.angle = function(e) {
                return arguments.length ? (t = Ur((n = +e) * Pn, r * Pn), i) : n
            }, i.precision = function(e) {
                return arguments.length ? (t = Ur(n * Pn, (r = +e) * Pn), i) : r
            }, i.angle(90)
        }, u.geo.distance = function(n, t) {
            var e, r = (t[0] - n[0]) * Pn,
                i = n[1] * Pn,
                u = t[1] * Pn,
                o = Math.sin(r),
                a = Math.cos(r),
                l = Math.sin(i),
                c = Math.cos(i),
                f = Math.sin(u),
                s = Math.cos(u);
            return Math.atan2(Math.sqrt((e = s * o) * e + (e = c * f - l * s * a) * e), l * f + c * s * a)
        }, u.geo.graticule = function() {
            var n, t, e, r, i, o, a, l, c, f, s, h, p = 10,
                g = p,
                d = 90,
                v = 360,
                y = 2.5;

            function m() {
                return {
                    type: "MultiLineString",
                    coordinates: x()
                }
            }

            function x() {
                return u.range(Math.ceil(r / d) * d, e, d).map(s).concat(u.range(Math.ceil(l / v) * v, a, v).map(h)).concat(u.range(Math.ceil(t / p) * p, n, p).filter(function(n) {
                    return _(n % d) > An
                }).map(c)).concat(u.range(Math.ceil(o / g) * g, i, g).filter(function(n) {
                    return _(n % v) > An
                }).map(f))
            }
            return m.lines = function() {
                return x().map(function(n) {
                    return {
                        type: "LineString",
                        coordinates: n
                    }
                })
            }, m.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [s(r).concat(h(a).slice(1), s(e).reverse().slice(1), h(l).reverse().slice(1))]
                }
            }, m.extent = function(n) {
                return arguments.length ? m.majorExtent(n).minorExtent(n) : m.minorExtent()
            }, m.majorExtent = function(n) {
                return arguments.length ? (r = +n[0][0], e = +n[1][0], l = +n[0][1], a = +n[1][1], r > e && (n = r, r = e, e = n), l > a && (n = l, l = a, a = n), m.precision(y)) : [
                    [r, l],
                    [e, a]
                ]
            }, m.minorExtent = function(e) {
                return arguments.length ? (t = +e[0][0], n = +e[1][0], o = +e[0][1], i = +e[1][1], t > n && (e = t, t = n, n = e), o > i && (e = o, o = i, i = e), m.precision(y)) : [
                    [t, o],
                    [n, i]
                ]
            }, m.step = function(n) {
                return arguments.length ? m.majorStep(n).minorStep(n) : m.minorStep()
            }, m.majorStep = function(n) {
                return arguments.length ? (d = +n[0], v = +n[1], m) : [d, v]
            }, m.minorStep = function(n) {
                return arguments.length ? (p = +n[0], g = +n[1], m) : [p, g]
            }, m.precision = function(u) {
                return arguments.length ? (y = +u, c = Hr(o, i, 90), f = Ir(t, n, y), s = Hr(l, a, 90), h = Ir(r, e, y), m) : y
            }, m.majorExtent([
                [-180, -90 + An],
                [180, 90 - An]
            ]).minorExtent([
                [-180, -80 - An],
                [180, 80 + An]
            ])
        }, u.geo.greatArc = function() {
            var n, t, e = Yr,
                r = Vr;

            function i() {
                return {
                    type: "LineString",
                    coordinates: [n || e.apply(this, arguments), t || r.apply(this, arguments)]
                }
            }
            return i.distance = function() {
                return u.geo.distance(n || e.apply(this, arguments), t || r.apply(this, arguments))
            }, i.source = function(t) {
                return arguments.length ? (e = t, n = "function" == typeof t ? null : t, i) : e
            }, i.target = function(n) {
                return arguments.length ? (r = n, t = "function" == typeof n ? null : n, i) : r
            }, i.precision = function() {
                return arguments.length ? i : 0
            }, i
        }, u.geo.interpolate = function(n, t) {
            return function(n, t, e, r) {
                var i = Math.cos(t),
                    u = Math.sin(t),
                    o = Math.cos(r),
                    a = Math.sin(r),
                    l = i * Math.cos(n),
                    c = i * Math.sin(n),
                    f = o * Math.cos(e),
                    s = o * Math.sin(e),
                    h = 2 * Math.asin(Math.sqrt(Hn(r - t) + i * o * Hn(e - n))),
                    p = 1 / Math.sin(h),
                    g = h ? function(n) {
                        var t = Math.sin(n *= h) * p,
                            e = Math.sin(h - n) * p,
                            r = e * l + t * f,
                            i = e * c + t * s,
                            o = e * u + t * a;
                        return [Math.atan2(i, r) * Rn, Math.atan2(o, Math.sqrt(r * r + i * i)) * Rn]
                    } : function() {
                        return [n * Rn, t * Rn]
                    };
                return g.distance = h, g
            }(n[0] * Pn, n[1] * Pn, t[0] * Pn, t[1] * Pn)
        }, u.geo.length = function(n) {
            return br = 0, u.geo.stream(n, Zr), br
        };
        var Zr = {
            sphere: U,
            point: U,
            lineStart: function() {
                var n, t, e;

                function r(r, i) {
                    var u = Math.sin(i *= Pn),
                        o = Math.cos(i),
                        a = _((r *= Pn) - n),
                        l = Math.cos(a);
                    br += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = e * u - t * o * l) * a), t * u + e * o * l), n = r, t = u, e = o
                }
                Zr.point = function(i, u) {
                    n = i * Pn, t = Math.sin(u *= Pn), e = Math.cos(u), Zr.point = r
                }, Zr.lineEnd = function() {
                    Zr.point = Zr.lineEnd = U
                }
            },
            lineEnd: U,
            polygonStart: U,
            polygonEnd: U
        };

        function Xr(n, t) {
            function e(t, e) {
                var r = Math.cos(t),
                    i = Math.cos(e),
                    u = n(r * i);
                return [u * i * Math.sin(t), u * Math.sin(e)]
            }
            return e.invert = function(n, e) {
                var r = Math.sqrt(n * n + e * e),
                    i = t(r),
                    u = Math.sin(i),
                    o = Math.cos(i);
                return [Math.atan2(n * u, r * o), Math.asin(r && e * u / r)]
            }, e
        }
        var $r = Xr(function(n) {
            return Math.sqrt(2 / (1 + n))
        }, function(n) {
            return 2 * Math.asin(n / 2)
        });
        (u.geo.azimuthalEqualArea = function() {
            return Tr($r)
        }).raw = $r;
        var Br = Xr(function(n) {
            var t = Math.acos(n);
            return t && t / Math.sin(t)
        }, R);

        function Gr(n, t) {
            var e = Math.cos(n),
                r = function(n) {
                    return Math.tan(Tn / 4 + n / 2)
                },
                i = n === t ? Math.sin(n) : Math.log(e / Math.cos(t)) / Math.log(r(t) / r(n)),
                u = e * Math.pow(r(n), i) / i;
            if (!i) return Kr;

            function o(n, t) {
                u > 0 ? t < -Ln + An && (t = -Ln + An) : t > Ln - An && (t = Ln - An);
                var e = u / Math.pow(r(t), i);
                return [e * Math.sin(i * n), u - e * Math.cos(i * n)]
            }
            return o.invert = function(n, t) {
                var e = u - t,
                    r = Dn(i) * Math.sqrt(n * n + e * e);
                return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(u / r, 1 / i)) - Ln]
            }, o
        }

        function Jr(n, t) {
            var e = Math.cos(n),
                r = n === t ? Math.sin(n) : (e - Math.cos(t)) / (t - n),
                i = e / r + n;
            if (_(r) < An) return Lr;

            function u(n, t) {
                var e = i - t;
                return [e * Math.sin(r * n), i - e * Math.cos(r * n)]
            }
            return u.invert = function(n, t) {
                var e = i - t;
                return [Math.atan2(n, e) / r, i - Dn(r) * Math.sqrt(n * n + e * e)]
            }, u
        }(u.geo.azimuthalEquidistant = function() {
            return Tr(Br)
        }).raw = Br, (u.geo.conicConformal = function() {
            return cr(Gr)
        }).raw = Gr, (u.geo.conicEquidistant = function() {
            return cr(Jr)
        }).raw = Jr;
        var Wr = Xr(function(n) {
            return 1 / n
        }, Math.atan);

        function Kr(n, t) {
            return [n, Math.log(Math.tan(Tn / 4 + t / 2))]
        }

        function Qr(n) {
            var t, e = Tr(n),
                r = e.scale,
                i = e.translate,
                u = e.clipExtent;
            return e.scale = function() {
                var n = r.apply(e, arguments);
                return n === e ? t ? e.clipExtent(null) : e : n
            }, e.translate = function() {
                var n = i.apply(e, arguments);
                return n === e ? t ? e.clipExtent(null) : e : n
            }, e.clipExtent = function(n) {
                var o = u.apply(e, arguments);
                if (o === e) {
                    if (t = null == n) {
                        var a = Tn * r(),
                            l = i();
                        u([
                            [l[0] - a, l[1] - a],
                            [l[0] + a, l[1] + a]
                        ])
                    }
                } else t && (o = null);
                return o
            }, e.clipExtent(null)
        }(u.geo.gnomonic = function() {
            return Tr(Wr)
        }).raw = Wr, Kr.invert = function(n, t) {
            return [n, 2 * Math.atan(Math.exp(t)) - Ln]
        }, (u.geo.mercator = function() {
            return Qr(Kr)
        }).raw = Kr;
        var ni = Xr(function() {
            return 1
        }, Math.asin);
        (u.geo.orthographic = function() {
            return Tr(ni)
        }).raw = ni;
        var ti = Xr(function(n) {
            return 1 / (1 + n)
        }, function(n) {
            return 2 * Math.atan(n)
        });

        function ei(n, t) {
            return [Math.log(Math.tan(Tn / 4 + t / 2)), -n]
        }

        function ri(n) {
            return n[0]
        }

        function ii(n) {
            return n[1]
        }

        function ui(n) {
            for (var t = n.length, e = [0, 1], r = 2, i = 2; i < t; i++) {
                for (; r > 1 && jn(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0;) --r;
                e[r++] = i
            }
            return e.slice(0, r)
        }

        function oi(n, t) {
            return n[0] - t[0] || n[1] - t[1]
        }(u.geo.stereographic = function() {
            return Tr(ti)
        }).raw = ti, ei.invert = function(n, t) {
            return [-t, 2 * Math.atan(Math.exp(n)) - Ln]
        }, (u.geo.transverseMercator = function() {
            var n = Qr(ei),
                t = n.center,
                e = n.rotate;
            return n.center = function(n) {
                return n ? t([-n[1], n[0]]) : [(n = t())[1], -n[0]]
            }, n.rotate = function(n) {
                return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : [(n = e())[0], n[1], n[2] - 90]
            }, e([0, 0, 90])
        }).raw = ei, u.geom = {}, u.geom.hull = function(n) {
            var t = ri,
                e = ii;
            if (arguments.length) return r(n);

            function r(n) {
                if (n.length < 3) return [];
                var r, i = bt(t),
                    u = bt(e),
                    o = n.length,
                    a = [],
                    l = [];
                for (r = 0; r < o; r++) a.push([+i.call(this, n[r], r), +u.call(this, n[r], r), r]);
                for (a.sort(oi), r = 0; r < o; r++) l.push([a[r][0], -a[r][1]]);
                var c = ui(a),
                    f = ui(l),
                    s = f[0] === c[0],
                    h = f[f.length - 1] === c[c.length - 1],
                    p = [];
                for (r = c.length - 1; r >= 0; --r) p.push(n[a[c[r]][2]]);
                for (r = +s; r < f.length - h; ++r) p.push(n[a[f[r]][2]]);
                return p
            }
            return r.x = function(n) {
                return arguments.length ? (t = n, r) : t
            }, r.y = function(n) {
                return arguments.length ? (e = n, r) : e
            }, r
        }, u.geom.polygon = function(n) {
            return X(n, ai), n
        };
        var ai = u.geom.polygon.prototype = [];

        function li(n, t, e) {
            return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
        }

        function ci(n, t, e, r) {
            var i = n[0],
                u = e[0],
                o = t[0] - i,
                a = r[0] - u,
                l = n[1],
                c = e[1],
                f = t[1] - l,
                s = r[1] - c,
                h = (a * (l - c) - s * (i - u)) / (s * o - a * f);
            return [i + h * o, l + h * f]
        }

        function fi(n) {
            var t = n[0],
                e = n[n.length - 1];
            return !(t[0] - e[0] || t[1] - e[1])
        }
        ai.area = function() {
            for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e;) n = r, r = this[t], i += n[1] * r[0] - n[0] * r[1];
            return .5 * i
        }, ai.centroid = function(n) {
            var t, e, r = -1,
                i = this.length,
                u = 0,
                o = 0,
                a = this[i - 1];
            for (arguments.length || (n = -1 / (6 * this.area())); ++r < i;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], u += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
            return [u * n, o * n]
        }, ai.clip = function(n) {
            for (var t, e, r, i, u, o, a = fi(n), l = -1, c = this.length - fi(this), f = this[c - 1]; ++l < c;) {
                for (t = n.slice(), n.length = 0, i = this[l], u = t[(r = t.length - a) - 1], e = -1; ++e < r;) li(o = t[e], f, i) ? (li(u, f, i) || n.push(ci(u, o, f, i)), n.push(o)) : li(u, f, i) && n.push(ci(u, o, f, i)), u = o;
                a && n.push(n[0]), f = i
            }
            return n
        };
        var si, hi, pi, gi, di, vi = [],
            yi = [];

        function mi(n) {
            var t = vi.pop() || new function() {
                Ri(this), this.edge = this.site = this.circle = null
            };
            return t.site = n, t
        }

        function xi(n) {
            Ei(n), pi.remove(n), vi.push(n), Ri(n)
        }

        function Mi(n) {
            var t = n.circle,
                e = t.x,
                r = t.cy,
                i = {
                    x: e,
                    y: r
                },
                u = n.P,
                o = n.N,
                a = [n];
            xi(n);
            for (var l = u; l.circle && _(e - l.circle.x) < An && _(r - l.circle.cy) < An;) u = l.P, a.unshift(l), xi(l), l = u;
            a.unshift(l), Ei(l);
            for (var c = o; c.circle && _(e - c.circle.x) < An && _(r - c.circle.cy) < An;) o = c.N, a.push(c), xi(c), c = o;
            a.push(c), Ei(c);
            var f, s = a.length;
            for (f = 1; f < s; ++f) c = a[f], l = a[f - 1], qi(c.edge, l.site, c.site, i);
            l = a[0], (c = a[s - 1]).edge = Ti(l.site, c.site, null, i), Ni(l), Ni(c)
        }

        function bi(n) {
            for (var t, e, r, i, u = n.x, o = n.y, a = pi._; a;)
                if ((r = _i(a, o) - u) > An) a = a.L;
                else {
                    if (!((i = u - wi(a, o)) > An)) {
                        r > -An ? (t = a.P, e = a) : i > -An ? (t = a, e = a.N) : t = e = a;
                        break
                    }
                    if (!a.R) {
                        t = a;
                        break
                    }
                    a = a.R
                } var l = mi(n);
            if (pi.insert(t, l), t || e) {
                if (t === e) return Ei(t), e = mi(t.site), pi.insert(l, e), l.edge = e.edge = Ti(t.site, l.site), Ni(t), void Ni(e);
                if (e) {
                    Ei(t), Ei(e);
                    var c = t.site,
                        f = c.x,
                        s = c.y,
                        h = n.x - f,
                        p = n.y - s,
                        g = e.site,
                        d = g.x - f,
                        v = g.y - s,
                        y = 2 * (h * v - p * d),
                        m = h * h + p * p,
                        x = d * d + v * v,
                        M = {
                            x: (v * m - p * x) / y + f,
                            y: (h * x - d * m) / y + s
                        };
                    qi(e.edge, c, g, M), l.edge = Ti(c, n, null, M), e.edge = Ti(n, g, null, M), Ni(t), Ni(e)
                } else l.edge = Ti(t.site, l.site)
            }
        }

        function _i(n, t) {
            var e = n.site,
                r = e.x,
                i = e.y,
                u = i - t;
            if (!u) return r;
            var o = n.P;
            if (!o) return -1 / 0;
            var a = (e = o.site).x,
                l = e.y,
                c = l - t;
            if (!c) return a;
            var f = a - r,
                s = 1 / u - 1 / c,
                h = f / c;
            return s ? (-h + Math.sqrt(h * h - 2 * s * (f * f / (-2 * c) - l + c / 2 + i - u / 2))) / s + r : (r + a) / 2
        }

        function wi(n, t) {
            var e = n.N;
            if (e) return _i(e, t);
            var r = n.site;
            return r.y === t ? r.x : 1 / 0
        }

        function Si(n) {
            this.site = n, this.edges = []
        }

        function ki(n, t) {
            return t.angle - n.angle
        }

        function Ni(n) {
            var t = n.P,
                e = n.N;
            if (t && e) {
                var r = t.site,
                    i = n.site,
                    u = e.site;
                if (r !== u) {
                    var o = i.x,
                        a = i.y,
                        l = r.x - o,
                        c = r.y - a,
                        f = u.x - o,
                        s = 2 * (l * (v = u.y - a) - c * f);
                    if (!(s >= -Cn)) {
                        var h = l * l + c * c,
                            p = f * f + v * v,
                            g = (v * h - c * p) / s,
                            d = (l * p - f * h) / s,
                            v = d + a,
                            y = yi.pop() || new function() {
                                Ri(this), this.x = this.y = this.arc = this.site = this.cy = null
                            };
                        y.arc = n, y.site = i, y.x = g + o, y.y = v + Math.sqrt(g * g + d * d), y.cy = v, n.circle = y;
                        for (var m = null, x = di._; x;)
                            if (y.y < x.y || y.y === x.y && y.x <= x.x) {
                                if (!x.L) {
                                    m = x.P;
                                    break
                                }
                                x = x.L
                            } else {
                                if (!x.R) {
                                    m = x;
                                    break
                                }
                                x = x.R
                            } di.insert(m, y), m || (gi = y)
                    }
                }
            }
        }

        function Ei(n) {
            var t = n.circle;
            t && (t.P || (gi = t.N), di.remove(t), yi.push(t), Ri(t), n.circle = null)
        }

        function Ai(n, t) {
            var e = n.b;
            if (e) return !0;
            var r, i, u = n.a,
                o = t[0][0],
                a = t[1][0],
                l = t[0][1],
                c = t[1][1],
                f = n.l,
                s = n.r,
                h = f.x,
                p = f.y,
                g = s.x,
                d = s.y,
                v = (h + g) / 2,
                y = (p + d) / 2;
            if (d === p) {
                if (v < o || v >= a) return;
                if (h > g) {
                    if (u) {
                        if (u.y >= c) return
                    } else u = {
                        x: v,
                        y: l
                    };
                    e = {
                        x: v,
                        y: c
                    }
                } else {
                    if (u) {
                        if (u.y < l) return
                    } else u = {
                        x: v,
                        y: c
                    };
                    e = {
                        x: v,
                        y: l
                    }
                }
            } else if (i = y - (r = (h - g) / (d - p)) * v, r < -1 || r > 1)
                if (h > g) {
                    if (u) {
                        if (u.y >= c) return
                    } else u = {
                        x: (l - i) / r,
                        y: l
                    };
                    e = {
                        x: (c - i) / r,
                        y: c
                    }
                } else {
                    if (u) {
                        if (u.y < l) return
                    } else u = {
                        x: (c - i) / r,
                        y: c
                    };
                    e = {
                        x: (l - i) / r,
                        y: l
                    }
                }
            else if (p < d) {
                if (u) {
                    if (u.x >= a) return
                } else u = {
                    x: o,
                    y: r * o + i
                };
                e = {
                    x: a,
                    y: r * a + i
                }
            } else {
                if (u) {
                    if (u.x < o) return
                } else u = {
                    x: a,
                    y: r * a + i
                };
                e = {
                    x: o,
                    y: r * o + i
                }
            }
            return n.a = u, n.b = e, !0
        }

        function Ci(n, t) {
            this.l = n, this.r = t, this.a = this.b = null
        }

        function Ti(n, t, e, r) {
            var i = new Ci(n, t);
            return si.push(i), e && qi(i, n, t, e), r && qi(i, t, n, r), hi[n.i].edges.push(new Li(i, n, t)), hi[t.i].edges.push(new Li(i, t, n)), i
        }

        function zi(n, t, e) {
            var r = new Ci(n, null);
            return r.a = t, r.b = e, si.push(r), r
        }

        function qi(n, t, e, r) {
            n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
        }

        function Li(n, t, e) {
            var r = n.a,
                i = n.b;
            this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
        }

        function Pi() {
            this._ = null
        }

        function Ri(n) {
            n.U = n.C = n.L = n.R = n.P = n.N = null
        }

        function Di(n, t) {
            var e = t,
                r = t.R,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
        }

        function ji(n, t) {
            var e = t,
                r = t.L,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
        }

        function Oi(n) {
            for (; n.L;) n = n.L;
            return n
        }

        function Ui(n, t) {
            var e, r, i, u = n.sort(Fi).pop();
            for (si = [], hi = new Array(n.length), pi = new Pi, di = new Pi;;)
                if (i = gi, u && (!i || u.y < i.y || u.y === i.y && u.x < i.x)) u.x === e && u.y === r || (hi[u.i] = new Si(u), bi(u), e = u.x, r = u.y), u = n.pop();
                else {
                    if (!i) break;
                    Mi(i.arc)
                } t && (function(n) {
                for (var t, e = si, r = or(n[0][0], n[0][1], n[1][0], n[1][1]), i = e.length; i--;)(!Ai(t = e[i], n) || !r(t) || _(t.a.x - t.b.x) < An && _(t.a.y - t.b.y) < An) && (t.a = t.b = null, e.splice(i, 1))
            }(t), function(n) {
                for (var t, e, r, i, u, o, a, l, c, f, s = n[0][0], h = n[1][0], p = n[0][1], g = n[1][1], d = hi, v = d.length; v--;)
                    if ((u = d[v]) && u.prepare())
                        for (l = (a = u.edges).length, o = 0; o < l;) r = (f = a[o].end()).x, i = f.y, t = (c = a[++o % l].start()).x, e = c.y, (_(r - t) > An || _(i - e) > An) && (a.splice(o, 0, new Li(zi(u.site, f, _(r - s) < An && g - i > An ? {
                            x: s,
                            y: _(t - s) < An ? e : g
                        } : _(i - g) < An && h - r > An ? {
                            x: _(e - g) < An ? t : h,
                            y: g
                        } : _(r - h) < An && i - p > An ? {
                            x: h,
                            y: _(t - h) < An ? e : p
                        } : _(i - p) < An && r - s > An ? {
                            x: _(e - p) < An ? t : s,
                            y: p
                        } : null), u.site, null)), ++l)
            }(t));
            var o = {
                cells: hi,
                edges: si
            };
            return pi = di = si = hi = null, o
        }

        function Fi(n, t) {
            return t.y - n.y || t.x - n.x
        }
        Si.prototype.prepare = function() {
            for (var n, t = this.edges, e = t.length; e--;)(n = t[e].edge).b && n.a || t.splice(e, 1);
            return t.sort(ki), t.length
        }, Li.prototype = {
            start: function() {
                return this.edge.l === this.site ? this.edge.a : this.edge.b
            },
            end: function() {
                return this.edge.l === this.site ? this.edge.b : this.edge.a
            }
        }, Pi.prototype = {
            insert: function(n, t) {
                var e, r, i;
                if (n) {
                    if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                        for (n = n.R; n.L;) n = n.L;
                        n.L = t
                    } else n.R = t;
                    e = n
                } else this._ ? (n = Oi(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
                for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.R && (Di(this, e), e = (n = e).U), e.C = !1, r.C = !0, ji(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.L && (ji(this, e), e = (n = e).U), e.C = !1, r.C = !0, Di(this, r)), e = n.U;
                this._.C = !1
            },
            remove: function(n) {
                n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
                var t, e, r, i = n.U,
                    u = n.L,
                    o = n.R;
                if (e = u ? o ? Oi(o) : u : o, i ? i.L === n ? i.L = e : i.R = e : this._ = e, u && o ? (r = e.C, e.C = n.C, e.L = u, u.U = e, e !== o ? (i = e.U, e.U = n.U, n = e.R, i.L = n, e.R = o, o.U = e) : (e.U = i, i = e, n = e.R)) : (r = n.C, n = e), n && (n.U = i), !r)
                    if (n && n.C) n.C = !1;
                    else {
                        do {
                            if (n === this._) break;
                            if (n === i.L) {
                                if ((t = i.R).C && (t.C = !1, i.C = !0, Di(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
                                    t.R && t.R.C || (t.L.C = !1, t.C = !0, ji(this, t), t = i.R), t.C = i.C, i.C = t.R.C = !1, Di(this, i), n = this._;
                                    break
                                }
                            } else if ((t = i.L).C && (t.C = !1, i.C = !0, ji(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
                                t.L && t.L.C || (t.R.C = !1, t.C = !0, Di(this, t), t = i.L), t.C = i.C, i.C = t.L.C = !1, ji(this, i), n = this._;
                                break
                            }
                            t.C = !0, n = i, i = i.U
                        } while (!n.C);
                        n && (n.C = !1)
                    }
            }
        }, u.geom.voronoi = function(n) {
            var t = ri,
                e = ii,
                r = t,
                i = e,
                u = Hi;
            if (n) return o(n);

            function o(n) {
                var t = new Array(n.length),
                    e = u[0][0],
                    r = u[0][1],
                    i = u[1][0],
                    o = u[1][1];
                return Ui(a(n), u).cells.forEach(function(u, a) {
                    var l = u.edges,
                        c = u.site;
                    (t[a] = l.length ? l.map(function(n) {
                        var t = n.start();
                        return [t.x, t.y]
                    }) : c.x >= e && c.x <= i && c.y >= r && c.y <= o ? [
                        [e, o],
                        [i, o],
                        [i, r],
                        [e, r]
                    ] : []).point = n[a]
                }), t
            }

            function a(n) {
                return n.map(function(n, t) {
                    return {
                        x: Math.round(r(n, t) / An) * An,
                        y: Math.round(i(n, t) / An) * An,
                        i: t
                    }
                })
            }
            return o.links = function(n) {
                return Ui(a(n)).edges.filter(function(n) {
                    return n.l && n.r
                }).map(function(t) {
                    return {
                        source: n[t.l.i],
                        target: n[t.r.i]
                    }
                })
            }, o.triangles = function(n) {
                var t = [];
                return Ui(a(n)).cells.forEach(function(e, r) {
                    for (var i, u = e.site, o = e.edges.sort(ki), a = -1, l = o.length, c = o[l - 1].edge, f = c.l === u ? c.r : c.l; ++a < l;) c, i = f, f = (c = o[a].edge).l === u ? c.r : c.l, r < i.i && r < f.i && Ii(u, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
                }), t
            }, o.x = function(n) {
                return arguments.length ? (r = bt(t = n), o) : t
            }, o.y = function(n) {
                return arguments.length ? (i = bt(e = n), o) : e
            }, o.clipExtent = function(n) {
                return arguments.length ? (u = null == n ? Hi : n, o) : u === Hi ? null : u
            }, o.size = function(n) {
                return arguments.length ? o.clipExtent(n && [
                    [0, 0], n
                ]) : u === Hi ? null : u && u[1]
            }, o
        };
        var Hi = [
            [-1e6, -1e6],
            [1e6, 1e6]
        ];

        function Ii(n, t, e) {
            return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
        }

        function Yi(n) {
            return n.x
        }

        function Vi(n) {
            return n.y
        }

        function Zi(n, t) {
            n = u.rgb(n), t = u.rgb(t);
            var e = n.r,
                r = n.g,
                i = n.b,
                o = t.r - e,
                a = t.g - r,
                l = t.b - i;
            return function(n) {
                return "#" + gt(Math.round(e + o * n)) + gt(Math.round(r + a * n)) + gt(Math.round(i + l * n))
            }
        }

        function Xi(n, t) {
            var e, r = {},
                i = {};
            for (e in n) e in t ? r[e] = Wi(n[e], t[e]) : i[e] = n[e];
            for (e in t) e in n || (i[e] = t[e]);
            return function(n) {
                for (e in r) i[e] = r[e](n);
                return i
            }
        }

        function $i(n, t) {
            return n = +n, t = +t,
                function(e) {
                    return n * (1 - e) + t * e
                }
        }

        function Bi(n, t) {
            var e, r, i, u = Gi.lastIndex = Ji.lastIndex = 0,
                o = -1,
                a = [],
                l = [];
            for (n += "", t += "";
                (e = Gi.exec(n)) && (r = Ji.exec(t));)(i = r.index) > u && (i = t.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({
                i: o,
                x: $i(e, r)
            })), u = Ji.lastIndex;
            return u < t.length && (i = t.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? l[0] ? (t = l[0].x, function(n) {
                return t(n) + ""
            }) : function() {
                return t
            } : (t = l.length, function(n) {
                for (var e, r = 0; r < t; ++r) a[(e = l[r]).i] = e.x(n);
                return a.join("")
            })
        }
        u.geom.delaunay = function(n) {
            return u.geom.voronoi().triangles(n)
        }, u.geom.quadtree = function(n, t, e, r, i) {
            var u, o = ri,
                a = ii;
            if (u = arguments.length) return o = Yi, a = Vi, 3 === u && (i = e, r = t, e = t = 0), l(n);

            function l(n) {
                var l, c, f, s, h, p, g, d, v, y = bt(o),
                    m = bt(a);
                if (null != t) p = t, g = e, d = r, v = i;
                else if (d = v = -(p = g = 1 / 0), c = [], f = [], h = n.length, u)
                    for (s = 0; s < h; ++s)(l = n[s]).x < p && (p = l.x), l.y < g && (g = l.y), l.x > d && (d = l.x), l.y > v && (v = l.y), c.push(l.x), f.push(l.y);
                else
                    for (s = 0; s < h; ++s) {
                        var x = +y(l = n[s], s),
                            M = +m(l, s);
                        x < p && (p = x), M < g && (g = M), x > d && (d = x), M > v && (v = M), c.push(x), f.push(M)
                    }
                var b = d - p,
                    w = v - g;

                function S(n, t, e, r, i, u, o, a) {
                    if (!isNaN(e) && !isNaN(r))
                        if (n.leaf) {
                            var l = n.x,
                                c = n.y;
                            if (null != l)
                                if (_(l - e) + _(c - r) < .01) k(n, t, e, r, i, u, o, a);
                                else {
                                    var f = n.point;
                                    n.x = n.y = n.point = null, k(n, f, l, c, i, u, o, a), k(n, t, e, r, i, u, o, a)
                                }
                            else n.x = e, n.y = r, n.point = t
                        } else k(n, t, e, r, i, u, o, a)
                }

                function k(n, t, e, r, i, u, o, a) {
                    var l = .5 * (i + o),
                        c = .5 * (u + a),
                        f = e >= l,
                        s = r >= c,
                        h = s << 1 | f;
                    n.leaf = !1, n = n.nodes[h] || (n.nodes[h] = {
                        leaf: !0,
                        nodes: [],
                        point: null,
                        x: null,
                        y: null,
                        add: function(n) {
                            S(N, n, +y(n, ++s), +m(n, s), p, g, d, v)
                        }
                    }), f ? i = l : o = l, s ? u = c : a = c, S(n, t, e, r, i, u, o, a)
                }
                b > w ? v = g + b : d = p + w;
                var N = {
                    leaf: !0,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null,
                    add: function(n) {
                        S(N, n, +y(n, ++s), +m(n, s), p, g, d, v)
                    }
                };
                if (N.visit = function(n) {
                        ! function n(t, e, r, i, u, o) {
                            if (!t(e, r, i, u, o)) {
                                var a = .5 * (r + u),
                                    l = .5 * (i + o),
                                    c = e.nodes;
                                c[0] && n(t, c[0], r, i, a, l), c[1] && n(t, c[1], a, i, u, l), c[2] && n(t, c[2], r, l, a, o), c[3] && n(t, c[3], a, l, u, o)
                            }
                        }(n, N, p, g, d, v)
                    }, N.find = function(n) {
                        return function(n, t, e, r, i, u, o) {
                            var a, l = 1 / 0;
                            return function n(c, f, s, h, p) {
                                if (!(f > u || s > o || h < r || p < i)) {
                                    if (g = c.point) {
                                        var g, d = t - c.x,
                                            v = e - c.y,
                                            y = d * d + v * v;
                                        if (y < l) {
                                            var m = Math.sqrt(l = y);
                                            r = t - m, i = e - m, u = t + m, o = e + m, a = g
                                        }
                                    }
                                    for (var x = c.nodes, M = .5 * (f + h), b = .5 * (s + p), _ = (e >= b) << 1 | t >= M, w = _ + 4; _ < w; ++_)
                                        if (c = x[3 & _]) switch (3 & _) {
                                            case 0:
                                                n(c, f, s, M, b);
                                                break;
                                            case 1:
                                                n(c, M, s, h, b);
                                                break;
                                            case 2:
                                                n(c, f, b, M, p);
                                                break;
                                            case 3:
                                                n(c, M, b, h, p)
                                        }
                                }
                            }(n, r, i, u, o), a
                        }(N, n[0], n[1], p, g, d, v)
                    }, s = -1, null == t) {
                    for (; ++s < h;) S(N, n[s], c[s], f[s], p, g, d, v);
                    --s
                } else n.forEach(N.add);
                return c = f = n = l = null, N
            }
            return l.x = function(n) {
                return arguments.length ? (o = n, l) : o
            }, l.y = function(n) {
                return arguments.length ? (a = n, l) : a
            }, l.extent = function(n) {
                return arguments.length ? (null == n ? t = e = r = i = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], i = +n[1][1]), l) : null == t ? null : [
                    [t, e],
                    [r, i]
                ]
            }, l.size = function(n) {
                return arguments.length ? (null == n ? t = e = r = i = null : (t = e = 0, r = +n[0], i = +n[1]), l) : null == t ? null : [r - t, i - e]
            }, l
        }, u.interpolateRgb = Zi, u.interpolateObject = Xi, u.interpolateNumber = $i, u.interpolateString = Bi;
        var Gi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            Ji = new RegExp(Gi.source, "g");

        function Wi(n, t) {
            for (var e, r = u.interpolators.length; --r >= 0 && !(e = u.interpolators[r](n, t)););
            return e
        }

        function Ki(n, t) {
            var e, r = [],
                i = [],
                u = n.length,
                o = t.length,
                a = Math.min(n.length, t.length);
            for (e = 0; e < a; ++e) r.push(Wi(n[e], t[e]));
            for (; e < u; ++e) i[e] = n[e];
            for (; e < o; ++e) i[e] = t[e];
            return function(n) {
                for (e = 0; e < a; ++e) i[e] = r[e](n);
                return i
            }
        }
        u.interpolate = Wi, u.interpolators = [function(n, t) {
            var e = typeof t;
            return ("string" === e ? Mt.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? Zi : Bi : t instanceof Xn ? Zi : Array.isArray(t) ? Ki : "object" === e && isNaN(t) ? Xi : $i)(n, t)
        }], u.interpolateArray = Ki;
        var Qi = function() {
                return R
            },
            nu = u.map({
                linear: Qi,
                poly: function(n) {
                    return function(t) {
                        return Math.pow(t, n)
                    }
                },
                quad: function() {
                    return iu
                },
                cubic: function() {
                    return uu
                },
                sin: function() {
                    return au
                },
                exp: function() {
                    return lu
                },
                circle: function() {
                    return cu
                },
                elastic: function(n, t) {
                    var e;
                    arguments.length < 2 && (t = .45);
                    arguments.length ? e = t / zn * Math.asin(1 / n) : (n = 1, e = t / 4);
                    return function(r) {
                        return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * zn / t)
                    }
                },
                back: function(n) {
                    n || (n = 1.70158);
                    return function(t) {
                        return t * t * ((n + 1) * t - n)
                    }
                },
                bounce: function() {
                    return fu
                }
            }),
            tu = u.map({
                in: R,
                out: eu,
                "in-out": ru,
                "out-in": function(n) {
                    return ru(eu(n))
                }
            });

        function eu(n) {
            return function(t) {
                return 1 - n(1 - t)
            }
        }

        function ru(n) {
            return function(t) {
                return .5 * (t < .5 ? n(2 * t) : 2 - n(2 - 2 * t))
            }
        }

        function iu(n) {
            return n * n
        }

        function uu(n) {
            return n * n * n
        }

        function ou(n) {
            if (n <= 0) return 0;
            if (n >= 1) return 1;
            var t = n * n,
                e = t * n;
            return 4 * (n < .5 ? e : 3 * (n - t) + e - .75)
        }

        function au(n) {
            return 1 - Math.cos(n * Ln)
        }

        function lu(n) {
            return Math.pow(2, 10 * (n - 1))
        }

        function cu(n) {
            return 1 - Math.sqrt(1 - n * n)
        }

        function fu(n) {
            return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
        }

        function su(n, t) {
            return t -= n,
                function(e) {
                    return Math.round(n + t * e)
                }
        }

        function hu(n) {
            var t = [n.a, n.b],
                e = [n.c, n.d],
                r = gu(t),
                i = pu(t, e),
                u = gu(function(n, t, e) {
                    return n[0] += e * t[0], n[1] += e * t[1], n
                }(e, t, -i)) || 0;
            t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Rn, this.translate = [n.e, n.f], this.scale = [r, u], this.skew = u ? Math.atan2(i, u) * Rn : 0
        }

        function pu(n, t) {
            return n[0] * t[0] + n[1] * t[1]
        }

        function gu(n) {
            var t = Math.sqrt(pu(n, n));
            return t && (n[0] /= t, n[1] /= t), t
        }
        u.ease = function(n) {
            var t = n.indexOf("-"),
                e = t >= 0 ? n.slice(0, t) : n,
                r = t >= 0 ? n.slice(t + 1) : "in";
            return e = nu.get(e) || Qi,
                function(n) {
                    return function(t) {
                        return t <= 0 ? 0 : t >= 1 ? 1 : n(t)
                    }
                }((r = tu.get(r) || R)(e.apply(null, o.call(arguments, 1))))
        }, u.interpolateHcl = function(n, t) {
            n = u.hcl(n), t = u.hcl(t);
            var e = n.h,
                r = n.c,
                i = n.l,
                o = t.h - e,
                a = t.c - r,
                l = t.l - i;
            isNaN(a) && (a = 0, r = isNaN(r) ? t.c : r);
            isNaN(o) ? (o = 0, e = isNaN(e) ? t.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360);
            return function(n) {
                return Kn(e + o * n, r + a * n, i + l * n) + ""
            }
        }, u.interpolateHsl = function(n, t) {
            n = u.hsl(n), t = u.hsl(t);
            var e = n.h,
                r = n.s,
                i = n.l,
                o = t.h - e,
                a = t.s - r,
                l = t.l - i;
            isNaN(a) && (a = 0, r = isNaN(r) ? t.s : r);
            isNaN(o) ? (o = 0, e = isNaN(e) ? t.h : e) : o > 180 ? o -= 360 : o < -180 && (o += 360);
            return function(n) {
                return Gn(e + o * n, r + a * n, i + l * n) + ""
            }
        }, u.interpolateLab = function(n, t) {
            n = u.lab(n), t = u.lab(t);
            var e = n.l,
                r = n.a,
                i = n.b,
                o = t.l - e,
                a = t.a - r,
                l = t.b - i;
            return function(n) {
                return ut(e + o * n, r + a * n, i + l * n) + ""
            }
        }, u.interpolateRound = su, u.transform = function(n) {
            var t = l.createElementNS(u.ns.prefix.svg, "g");
            return (u.transform = function(n) {
                if (null != n) {
                    t.setAttribute("transform", n);
                    var e = t.transform.baseVal.consolidate()
                }
                return new hu(e ? e.matrix : du)
            })(n)
        }, hu.prototype.toString = function() {
            return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
        };
        var du = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };

        function vu(n) {
            return n.length ? n.pop() + "," : ""
        }

        function yu(n, t) {
            var e = [],
                r = [];
            return n = u.transform(n), t = u.transform(t),
                function(n, t, e, r) {
                    if (n[0] !== t[0] || n[1] !== t[1]) {
                        var i = e.push("translate(", null, ",", null, ")");
                        r.push({
                            i: i - 4,
                            x: $i(n[0], t[0])
                        }, {
                            i: i - 2,
                            x: $i(n[1], t[1])
                        })
                    } else(t[0] || t[1]) && e.push("translate(" + t + ")")
                }(n.translate, t.translate, e, r),
                function(n, t, e, r) {
                    n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), r.push({
                        i: e.push(vu(e) + "rotate(", null, ")") - 2,
                        x: $i(n, t)
                    })) : t && e.push(vu(e) + "rotate(" + t + ")")
                }(n.rotate, t.rotate, e, r),
                function(n, t, e, r) {
                    n !== t ? r.push({
                        i: e.push(vu(e) + "skewX(", null, ")") - 2,
                        x: $i(n, t)
                    }) : t && e.push(vu(e) + "skewX(" + t + ")")
                }(n.skew, t.skew, e, r),
                function(n, t, e, r) {
                    if (n[0] !== t[0] || n[1] !== t[1]) {
                        var i = e.push(vu(e) + "scale(", null, ",", null, ")");
                        r.push({
                            i: i - 4,
                            x: $i(n[0], t[0])
                        }, {
                            i: i - 2,
                            x: $i(n[1], t[1])
                        })
                    } else 1 === t[0] && 1 === t[1] || e.push(vu(e) + "scale(" + t + ")")
                }(n.scale, t.scale, e, r), n = t = null,
                function(n) {
                    for (var t, i = -1, u = r.length; ++i < u;) e[(t = r[i]).i] = t.x(n);
                    return e.join("")
                }
        }

        function mu(n, t) {
            return t = (t -= n = +n) || 1 / t,
                function(e) {
                    return (e - n) / t
                }
        }

        function xu(n, t) {
            return t = (t -= n = +n) || 1 / t,
                function(e) {
                    return Math.max(0, Math.min(1, (e - n) / t))
                }
        }

        function Mu(n) {
            for (var t = n.source, e = n.target, r = function(n, t) {
                    if (n === t) return n;
                    var e = bu(n),
                        r = bu(t),
                        i = e.pop(),
                        u = r.pop(),
                        o = null;
                    for (; i === u;) o = i, i = e.pop(), u = r.pop();
                    return o
                }(t, e), i = [t]; t !== r;) t = t.parent, i.push(t);
            for (var u = i.length; e !== r;) i.splice(u, 0, e), e = e.parent;
            return i
        }

        function bu(n) {
            for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
            return t.push(n), t
        }

        function _u(n) {
            n.fixed |= 2
        }

        function wu(n) {
            n.fixed &= -7
        }

        function Su(n) {
            n.fixed |= 4, n.px = n.x, n.py = n.y
        }

        function ku(n) {
            n.fixed &= -5
        }
        u.interpolateTransform = yu, u.layout = {}, u.layout.bundle = function() {
            return function(n) {
                for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Mu(n[e]));
                return t
            }
        }, u.layout.chord = function() {
            var n, t, e, r, i, o, a, l = {},
                c = 0;

            function f() {
                var l, f, h, p, g, d = {},
                    v = [],
                    y = u.range(r),
                    m = [];
                for (n = [], t = [], l = 0, p = -1; ++p < r;) {
                    for (f = 0, g = -1; ++g < r;) f += e[p][g];
                    v.push(f), m.push(u.range(r)), l += f
                }
                for (i && y.sort(function(n, t) {
                        return i(v[n], v[t])
                    }), o && m.forEach(function(n, t) {
                        n.sort(function(n, r) {
                            return o(e[t][n], e[t][r])
                        })
                    }), l = (zn - c * r) / l, f = 0, p = -1; ++p < r;) {
                    for (h = f, g = -1; ++g < r;) {
                        var x = y[p],
                            M = m[x][g],
                            b = e[x][M],
                            _ = f,
                            w = f += b * l;
                        d[x + "-" + M] = {
                            index: x,
                            subindex: M,
                            startAngle: _,
                            endAngle: w,
                            value: b
                        }
                    }
                    t[x] = {
                        index: x,
                        startAngle: h,
                        endAngle: f,
                        value: v[x]
                    }, f += c
                }
                for (p = -1; ++p < r;)
                    for (g = p - 1; ++g < r;) {
                        var S = d[p + "-" + g],
                            k = d[g + "-" + p];
                        (S.value || k.value) && n.push(S.value < k.value ? {
                            source: k,
                            target: S
                        } : {
                            source: S,
                            target: k
                        })
                    }
                a && s()
            }

            function s() {
                n.sort(function(n, t) {
                    return a((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
                })
            }
            return l.matrix = function(i) {
                return arguments.length ? (r = (e = i) && e.length, n = t = null, l) : e
            }, l.padding = function(e) {
                return arguments.length ? (c = e, n = t = null, l) : c
            }, l.sortGroups = function(e) {
                return arguments.length ? (i = e, n = t = null, l) : i
            }, l.sortSubgroups = function(t) {
                return arguments.length ? (o = t, n = null, l) : o
            }, l.sortChords = function(t) {
                return arguments.length ? (a = t, n && s(), l) : a
            }, l.chords = function() {
                return n || f(), n
            }, l.groups = function() {
                return t || f(), t
            }, l
        }, u.layout.force = function() {
            var n, t, e, r, i, o, a = {},
                l = u.dispatch("start", "tick", "end"),
                c = [1, 1],
                f = .9,
                s = Nu,
                h = Eu,
                p = -30,
                g = Au,
                d = .1,
                v = .64,
                y = [],
                m = [];

            function x(n) {
                return function(t, e, r, i) {
                    if (t.point !== n) {
                        var u = t.cx - n.x,
                            o = t.cy - n.y,
                            a = i - e,
                            l = u * u + o * o;
                        if (a * a / v < l) {
                            if (l < g) {
                                var c = t.charge / l;
                                n.px -= u * c, n.py -= o * c
                            }
                            return !0
                        }
                        if (t.point && l && l < g) {
                            c = t.pointCharge / l;
                            n.px -= u * c, n.py -= o * c
                        }
                    }
                    return !t.charge
                }
            }

            function M(n) {
                n.px = u.event.x, n.py = u.event.y, a.resume()
            }
            return a.tick = function() {
                if ((e *= .99) < .005) return n = null, l.end({
                    type: "end",
                    alpha: e = 0
                }), !0;
                var t, a, s, h, g, v, M, b, _, w = y.length,
                    S = m.length;
                for (a = 0; a < S; ++a) h = (s = m[a]).source, (v = (b = (g = s.target).x - h.x) * b + (_ = g.y - h.y) * _) && (b *= v = e * i[a] * ((v = Math.sqrt(v)) - r[a]) / v, _ *= v, g.x -= b * (M = h.weight + g.weight ? h.weight / (h.weight + g.weight) : .5), g.y -= _ * M, h.x += b * (M = 1 - M), h.y += _ * M);
                if ((M = e * d) && (b = c[0] / 2, _ = c[1] / 2, a = -1, M))
                    for (; ++a < w;)(s = y[a]).x += (b - s.x) * M, s.y += (_ - s.y) * M;
                if (p)
                    for (! function n(t, e, r) {
                            var i = 0,
                                u = 0;
                            t.charge = 0;
                            if (!t.leaf)
                                for (var o, a = t.nodes, l = a.length, c = -1; ++c < l;) null != (o = a[c]) && (n(o, e, r), t.charge += o.charge, i += o.charge * o.cx, u += o.charge * o.cy);
                            if (t.point) {
                                t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                                var f = e * r[t.point.index];
                                t.charge += t.pointCharge = f, i += f * t.point.x, u += f * t.point.y
                            }
                            t.cx = i / t.charge;
                            t.cy = u / t.charge
                        }(t = u.geom.quadtree(y), e, o), a = -1; ++a < w;)(s = y[a]).fixed || t.visit(x(s));
                for (a = -1; ++a < w;)(s = y[a]).fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * f, s.y -= (s.py - (s.py = s.y)) * f);
                l.tick({
                    type: "tick",
                    alpha: e
                })
            }, a.nodes = function(n) {
                return arguments.length ? (y = n, a) : y
            }, a.links = function(n) {
                return arguments.length ? (m = n, a) : m
            }, a.size = function(n) {
                return arguments.length ? (c = n, a) : c
            }, a.linkDistance = function(n) {
                return arguments.length ? (s = "function" == typeof n ? n : +n, a) : s
            }, a.distance = a.linkDistance, a.linkStrength = function(n) {
                return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
            }, a.friction = function(n) {
                return arguments.length ? (f = +n, a) : f
            }, a.charge = function(n) {
                return arguments.length ? (p = "function" == typeof n ? n : +n, a) : p
            }, a.chargeDistance = function(n) {
                return arguments.length ? (g = n * n, a) : Math.sqrt(g)
            }, a.gravity = function(n) {
                return arguments.length ? (d = +n, a) : d
            }, a.theta = function(n) {
                return arguments.length ? (v = n * n, a) : Math.sqrt(v)
            }, a.alpha = function(t) {
                return arguments.length ? (t = +t, e ? t > 0 ? e = t : (n.c = null, n.t = NaN, n = null, l.end({
                    type: "end",
                    alpha: e = 0
                })) : t > 0 && (l.start({
                    type: "start",
                    alpha: e = t
                }), n = Ct(a.tick)), a) : e
            }, a.start = function() {
                var n, t, e, u = y.length,
                    l = m.length,
                    f = c[0],
                    g = c[1];
                for (n = 0; n < u; ++n)(e = y[n]).index = n, e.weight = 0;
                for (n = 0; n < l; ++n) "number" == typeof(e = m[n]).source && (e.source = y[e.source]), "number" == typeof e.target && (e.target = y[e.target]), ++e.source.weight, ++e.target.weight;
                for (n = 0; n < u; ++n) e = y[n], isNaN(e.x) && (e.x = d("x", f)), isNaN(e.y) && (e.y = d("y", g)), isNaN(e.px) && (e.px = e.x), isNaN(e.py) && (e.py = e.y);
                if (r = [], "function" == typeof s)
                    for (n = 0; n < l; ++n) r[n] = +s.call(this, m[n], n);
                else
                    for (n = 0; n < l; ++n) r[n] = s;
                if (i = [], "function" == typeof h)
                    for (n = 0; n < l; ++n) i[n] = +h.call(this, m[n], n);
                else
                    for (n = 0; n < l; ++n) i[n] = h;
                if (o = [], "function" == typeof p)
                    for (n = 0; n < u; ++n) o[n] = +p.call(this, y[n], n);
                else
                    for (n = 0; n < u; ++n) o[n] = p;

                function d(e, r) {
                    if (!t) {
                        for (t = new Array(u), c = 0; c < u; ++c) t[c] = [];
                        for (c = 0; c < l; ++c) {
                            var i = m[c];
                            t[i.source.index].push(i.target), t[i.target.index].push(i.source)
                        }
                    }
                    for (var o, a = t[n], c = -1, f = a.length; ++c < f;)
                        if (!isNaN(o = a[c][e])) return o;
                    return Math.random() * r
                }
                return a.resume()
            }, a.resume = function() {
                return a.alpha(.1)
            }, a.stop = function() {
                return a.alpha(0)
            }, a.drag = function() {
                if (t || (t = u.behavior.drag().origin(R).on("dragstart.force", _u).on("drag.force", M).on("dragend.force", wu)), !arguments.length) return t;
                this.on("mouseover.force", Su).on("mouseout.force", ku).call(t)
            }, u.rebind(a, l, "on")
        };
        var Nu = 20,
            Eu = 1,
            Au = 1 / 0;

        function Cu(n, t) {
            return u.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = Ru, n
        }

        function Tu(n, t) {
            for (var e = [n]; null != (n = e.pop());)
                if (t(n), (i = n.children) && (r = i.length))
                    for (var r, i; --r >= 0;) e.push(i[r])
        }

        function zu(n, t) {
            for (var e = [n], r = []; null != (n = e.pop());)
                if (r.push(n), (u = n.children) && (i = u.length))
                    for (var i, u, o = -1; ++o < i;) e.push(u[o]);
            for (; null != (n = r.pop());) t(n)
        }

        function qu(n) {
            return n.children
        }

        function Lu(n) {
            return n.value
        }

        function Pu(n, t) {
            return t.value - n.value
        }

        function Ru(n) {
            return u.merge(n.map(function(n) {
                return (n.children || []).map(function(t) {
                    return {
                        source: n,
                        target: t
                    }
                })
            }))
        }
        u.layout.hierarchy = function() {
            var n = Pu,
                t = qu,
                e = Lu;

            function r(i) {
                var u, o = [i],
                    a = [];
                for (i.depth = 0; null != (u = o.pop());)
                    if (a.push(u), (c = t.call(r, u, u.depth)) && (l = c.length)) {
                        for (var l, c, f; --l >= 0;) o.push(f = c[l]), f.parent = u, f.depth = u.depth + 1;
                        e && (u.value = 0), u.children = c
                    } else e && (u.value = +e.call(r, u, u.depth) || 0), delete u.children;
                return zu(i, function(t) {
                    var r, i;
                    n && (r = t.children) && r.sort(n), e && (i = t.parent) && (i.value += t.value)
                }), a
            }
            return r.sort = function(t) {
                return arguments.length ? (n = t, r) : n
            }, r.children = function(n) {
                return arguments.length ? (t = n, r) : t
            }, r.value = function(n) {
                return arguments.length ? (e = n, r) : e
            }, r.revalue = function(n) {
                return e && (Tu(n, function(n) {
                    n.children && (n.value = 0)
                }), zu(n, function(n) {
                    var t;
                    n.children || (n.value = +e.call(r, n, n.depth) || 0), (t = n.parent) && (t.value += n.value)
                })), n
            }, r
        }, u.layout.partition = function() {
            var n = u.layout.hierarchy(),
                t = [1, 1];

            function e(e, r) {
                var i = n.call(this, e, r);
                return function n(t, e, r, i) {
                    var u = t.children;
                    if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, u && (o = u.length)) {
                        var o, a, l, c = -1;
                        for (r = t.value ? r / t.value : 0; ++c < o;) n(a = u[c], e, l = a.value * r, i), e += l
                    }
                }(i[0], 0, t[0], t[1] / function n(t) {
                    var e = t.children,
                        r = 0;
                    if (e && (i = e.length))
                        for (var i, u = -1; ++u < i;) r = Math.max(r, n(e[u]));
                    return 1 + r
                }(i[0])), i
            }
            return e.size = function(n) {
                return arguments.length ? (t = n, e) : t
            }, Cu(e, n)
        }, u.layout.pie = function() {
            var n = Number,
                t = Du,
                e = 0,
                r = zn,
                i = 0;

            function o(a) {
                var l, c = a.length,
                    f = a.map(function(t, e) {
                        return +n.call(o, t, e)
                    }),
                    s = +("function" == typeof e ? e.apply(this, arguments) : e),
                    h = ("function" == typeof r ? r.apply(this, arguments) : r) - s,
                    p = Math.min(Math.abs(h) / c, +("function" == typeof i ? i.apply(this, arguments) : i)),
                    g = p * (h < 0 ? -1 : 1),
                    d = u.sum(f),
                    v = d ? (h - c * g) / d : 0,
                    y = u.range(c),
                    m = [];
                return null != t && y.sort(t === Du ? function(n, t) {
                    return f[t] - f[n]
                } : function(n, e) {
                    return t(a[n], a[e])
                }), y.forEach(function(n) {
                    m[n] = {
                        data: a[n],
                        value: l = f[n],
                        startAngle: s,
                        endAngle: s += l * v + g,
                        padAngle: p
                    }
                }), m
            }
            return o.value = function(t) {
                return arguments.length ? (n = t, o) : n
            }, o.sort = function(n) {
                return arguments.length ? (t = n, o) : t
            }, o.startAngle = function(n) {
                return arguments.length ? (e = n, o) : e
            }, o.endAngle = function(n) {
                return arguments.length ? (r = n, o) : r
            }, o.padAngle = function(n) {
                return arguments.length ? (i = n, o) : i
            }, o
        };
        var Du = {};

        function ju(n) {
            return n.x
        }

        function Ou(n) {
            return n.y
        }

        function Uu(n, t, e) {
            n.y0 = t, n.y = e
        }
        u.layout.stack = function() {
            var n = R,
                t = Iu,
                e = Yu,
                r = Uu,
                i = ju,
                o = Ou;

            function a(l, c) {
                if (!(p = l.length)) return l;
                var f = l.map(function(t, e) {
                        return n.call(a, t, e)
                    }),
                    s = f.map(function(n) {
                        return n.map(function(n, t) {
                            return [i.call(a, n, t), o.call(a, n, t)]
                        })
                    }),
                    h = t.call(a, s, c);
                f = u.permute(f, h), s = u.permute(s, h);
                var p, g, d, v, y = e.call(a, s, c),
                    m = f[0].length;
                for (d = 0; d < m; ++d)
                    for (r.call(a, f[0][d], v = y[d], s[0][d][1]), g = 1; g < p; ++g) r.call(a, f[g][d], v += s[g - 1][d][1], s[g][d][1]);
                return l
            }
            return a.values = function(t) {
                return arguments.length ? (n = t, a) : n
            }, a.order = function(n) {
                return arguments.length ? (t = "function" == typeof n ? n : Fu.get(n) || Iu, a) : t
            }, a.offset = function(n) {
                return arguments.length ? (e = "function" == typeof n ? n : Hu.get(n) || Yu, a) : e
            }, a.x = function(n) {
                return arguments.length ? (i = n, a) : i
            }, a.y = function(n) {
                return arguments.length ? (o = n, a) : o
            }, a.out = function(n) {
                return arguments.length ? (r = n, a) : r
            }, a
        };
        var Fu = u.map({
                "inside-out": function(n) {
                    var t, e, r = n.length,
                        i = n.map(Vu),
                        o = n.map(Zu),
                        a = u.range(r).sort(function(n, t) {
                            return i[n] - i[t]
                        }),
                        l = 0,
                        c = 0,
                        f = [],
                        s = [];
                    for (t = 0; t < r; ++t) e = a[t], l < c ? (l += o[e], f.push(e)) : (c += o[e], s.push(e));
                    return s.reverse().concat(f)
                },
                reverse: function(n) {
                    return u.range(n.length).reverse()
                },
                default: Iu
            }),
            Hu = u.map({
                silhouette: function(n) {
                    var t, e, r, i = n.length,
                        u = n[0].length,
                        o = [],
                        a = 0,
                        l = [];
                    for (e = 0; e < u; ++e) {
                        for (t = 0, r = 0; t < i; t++) r += n[t][e][1];
                        r > a && (a = r), o.push(r)
                    }
                    for (e = 0; e < u; ++e) l[e] = (a - o[e]) / 2;
                    return l
                },
                wiggle: function(n) {
                    var t, e, r, i, u, o, a, l, c, f = n.length,
                        s = n[0],
                        h = s.length,
                        p = [];
                    for (p[0] = l = c = 0, e = 1; e < h; ++e) {
                        for (t = 0, i = 0; t < f; ++t) i += n[t][e][1];
                        for (t = 0, u = 0, a = s[e][0] - s[e - 1][0]; t < f; ++t) {
                            for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); r < t; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
                            u += o * n[t][e][1]
                        }
                        p[e] = l -= i ? u / i * a : 0, l < c && (c = l)
                    }
                    for (e = 0; e < h; ++e) p[e] -= c;
                    return p
                },
                expand: function(n) {
                    var t, e, r, i = n.length,
                        u = n[0].length,
                        o = 1 / i,
                        a = [];
                    for (e = 0; e < u; ++e) {
                        for (t = 0, r = 0; t < i; t++) r += n[t][e][1];
                        if (r)
                            for (t = 0; t < i; t++) n[t][e][1] /= r;
                        else
                            for (t = 0; t < i; t++) n[t][e][1] = o
                    }
                    for (e = 0; e < u; ++e) a[e] = 0;
                    return a
                },
                zero: Yu
            });

        function Iu(n) {
            return u.range(n.length)
        }

        function Yu(n) {
            for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
            return r
        }

        function Vu(n) {
            for (var t, e = 1, r = 0, i = n[0][1], u = n.length; e < u; ++e)(t = n[e][1]) > i && (r = e, i = t);
            return r
        }

        function Zu(n) {
            return n.reduce(Xu, 0)
        }

        function Xu(n, t) {
            return n + t[1]
        }

        function $u(n, t) {
            return Bu(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
        }

        function Bu(n, t) {
            for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t;) u[e] = i * e + r;
            return u
        }

        function Gu(n) {
            return [u.min(n), u.max(n)]
        }

        function Ju(n, t) {
            return n.value - t.value
        }

        function Wu(n, t) {
            var e = n._pack_next;
            n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
        }

        function Ku(n, t) {
            n._pack_next = t, t._pack_prev = n
        }

        function Qu(n, t) {
            var e = t.x - n.x,
                r = t.y - n.y,
                i = n.r + t.r;
            return .999 * i * i > e * e + r * r
        }

        function no(n) {
            if ((t = n.children) && (l = t.length)) {
                var t, e, r, i, u, o, a, l, c = 1 / 0,
                    f = -1 / 0,
                    s = 1 / 0,
                    h = -1 / 0;
                if (t.forEach(to), (e = t[0]).x = -e.r, e.y = 0, x(e), l > 1 && ((r = t[1]).x = r.r, r.y = 0, x(r), l > 2))
                    for (ro(e, r, i = t[2]), x(i), Wu(e, i), e._pack_prev = i, Wu(i, r), r = e._pack_next, u = 3; u < l; u++) {
                        ro(e, r, i = t[u]);
                        var p = 0,
                            g = 1,
                            d = 1;
                        for (o = r._pack_next; o !== r; o = o._pack_next, g++)
                            if (Qu(o, i)) {
                                p = 1;
                                break
                            } if (1 == p)
                            for (a = e._pack_prev; a !== o._pack_prev && !Qu(a, i); a = a._pack_prev, d++);
                        p ? (g < d || g == d && r.r < e.r ? Ku(e, r = o) : Ku(e = a, r), u--) : (Wu(e, i), r = i, x(i))
                    }
                var v = (c + f) / 2,
                    y = (s + h) / 2,
                    m = 0;
                for (u = 0; u < l; u++)(i = t[u]).x -= v, i.y -= y, m = Math.max(m, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
                n.r = m, t.forEach(eo)
            }

            function x(n) {
                c = Math.min(n.x - n.r, c), f = Math.max(n.x + n.r, f), s = Math.min(n.y - n.r, s), h = Math.max(n.y + n.r, h)
            }
        }

        function to(n) {
            n._pack_next = n._pack_prev = n
        }

        function eo(n) {
            delete n._pack_next, delete n._pack_prev
        }

        function ro(n, t, e) {
            var r = n.r + e.r,
                i = t.x - n.x,
                u = t.y - n.y;
            if (r && (i || u)) {
                var o = t.r + e.r,
                    a = i * i + u * u,
                    l = .5 + ((r *= r) - (o *= o)) / (2 * a),
                    c = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
                e.x = n.x + l * i + c * u, e.y = n.y + l * u - c * i
            } else e.x = n.x + r, e.y = n.y
        }

        function io(n, t) {
            return n.parent == t.parent ? 1 : 2
        }

        function uo(n) {
            var t = n.children;
            return t.length ? t[0] : n.t
        }

        function oo(n) {
            var t, e = n.children;
            return (t = e.length) ? e[t - 1] : n.t
        }

        function ao(n, t, e) {
            var r = e / (t.i - n.i);
            t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e
        }

        function lo(n, t, e) {
            return n.a.parent === t.parent ? n.a : e
        }

        function co(n) {
            return {
                x: n.x,
                y: n.y,
                dx: n.dx,
                dy: n.dy
            }
        }

        function fo(n, t) {
            var e = n.x + t[3],
                r = n.y + t[0],
                i = n.dx - t[1] - t[3],
                u = n.dy - t[0] - t[2];
            return i < 0 && (e += i / 2, i = 0), u < 0 && (r += u / 2, u = 0), {
                x: e,
                y: r,
                dx: i,
                dy: u
            }
        }

        function so(n) {
            var t = n[0],
                e = n[n.length - 1];
            return t < e ? [t, e] : [e, t]
        }

        function ho(n) {
            return n.rangeExtent ? n.rangeExtent() : so(n.range())
        }

        function po(n, t, e, r) {
            var i = e(n[0], n[1]),
                u = r(t[0], t[1]);
            return function(n) {
                return u(i(n))
            }
        }

        function go(n, t) {
            var e, r = 0,
                i = n.length - 1,
                u = n[r],
                o = n[i];
            return o < u && (e = r, r = i, i = e, e = u, u = o, o = e), n[r] = t.floor(u), n[i] = t.ceil(o), n
        }

        function vo(n) {
            return n ? {
                floor: function(t) {
                    return Math.floor(t / n) * n
                },
                ceil: function(t) {
                    return Math.ceil(t / n) * n
                }
            } : yo
        }
        u.layout.histogram = function() {
            var n = !0,
                t = Number,
                e = Gu,
                r = $u;

            function i(i, o) {
                for (var a, l, c = [], f = i.map(t, this), s = e.call(this, f, o), h = r.call(this, s, f, o), p = (o = -1, f.length), g = h.length - 1, d = n ? 1 : 1 / p; ++o < g;)(a = c[o] = []).dx = h[o + 1] - (a.x = h[o]), a.y = 0;
                if (g > 0)
                    for (o = -1; ++o < p;)(l = f[o]) >= s[0] && l <= s[1] && ((a = c[u.bisect(h, l, 1, g) - 1]).y += d, a.push(i[o]));
                return c
            }
            return i.value = function(n) {
                return arguments.length ? (t = n, i) : t
            }, i.range = function(n) {
                return arguments.length ? (e = bt(n), i) : e
            }, i.bins = function(n) {
                return arguments.length ? (r = "number" == typeof n ? function(t) {
                    return Bu(t, n)
                } : bt(n), i) : r
            }, i.frequency = function(t) {
                return arguments.length ? (n = !!t, i) : n
            }, i
        }, u.layout.pack = function() {
            var n, t = u.layout.hierarchy().sort(Ju),
                e = 0,
                r = [1, 1];

            function i(i, u) {
                var o = t.call(this, i, u),
                    a = o[0],
                    l = r[0],
                    c = r[1],
                    f = null == n ? Math.sqrt : "function" == typeof n ? n : function() {
                        return n
                    };
                if (a.x = a.y = 0, zu(a, function(n) {
                        n.r = +f(n.value)
                    }), zu(a, no), e) {
                    var s = e * (n ? 1 : Math.max(2 * a.r / l, 2 * a.r / c)) / 2;
                    zu(a, function(n) {
                        n.r += s
                    }), zu(a, no), zu(a, function(n) {
                        n.r -= s
                    })
                }
                return function n(t, e, r, i) {
                    var u = t.children;
                    t.x = e += i * t.x;
                    t.y = r += i * t.y;
                    t.r *= i;
                    if (u)
                        for (var o = -1, a = u.length; ++o < a;) n(u[o], e, r, i)
                }(a, l / 2, c / 2, n ? 1 : 1 / Math.max(2 * a.r / l, 2 * a.r / c)), o
            }
            return i.size = function(n) {
                return arguments.length ? (r = n, i) : r
            }, i.radius = function(t) {
                return arguments.length ? (n = null == t || "function" == typeof t ? t : +t, i) : n
            }, i.padding = function(n) {
                return arguments.length ? (e = +n, i) : e
            }, Cu(i, t)
        }, u.layout.tree = function() {
            var n = u.layout.hierarchy().sort(null).value(null),
                t = io,
                e = [1, 1],
                r = null;

            function i(i, u) {
                var c = n.call(this, i, u),
                    f = c[0],
                    s = function(n) {
                        var t, e = {
                                A: null,
                                children: [n]
                            },
                            r = [e];
                        for (; null != (t = r.pop());)
                            for (var i, u = t.children, o = 0, a = u.length; o < a; ++o) r.push((u[o] = i = {
                                _: u[o],
                                parent: t,
                                children: (i = u[o].children) && i.slice() || [],
                                A: null,
                                a: null,
                                z: 0,
                                m: 0,
                                c: 0,
                                s: 0,
                                t: null,
                                i: o
                            }).a = i);
                        return e.children[0]
                    }(f);
                if (zu(s, o), s.parent.m = -s.z, Tu(s, a), r) Tu(f, l);
                else {
                    var h = f,
                        p = f,
                        g = f;
                    Tu(f, function(n) {
                        n.x < h.x && (h = n), n.x > p.x && (p = n), n.depth > g.depth && (g = n)
                    });
                    var d = t(h, p) / 2 - h.x,
                        v = e[0] / (p.x + t(p, h) / 2 + d),
                        y = e[1] / (g.depth || 1);
                    Tu(f, function(n) {
                        n.x = (n.x + d) * v, n.y = n.depth * y
                    })
                }
                return c
            }

            function o(n) {
                var e = n.children,
                    r = n.parent.children,
                    i = n.i ? r[n.i - 1] : null;
                if (e.length) {
                    ! function(n) {
                        var t, e = 0,
                            r = 0,
                            i = n.children,
                            u = i.length;
                        for (; --u >= 0;)(t = i[u]).z += e, t.m += e, e += t.s + (r += t.c)
                    }(n);
                    var u = (e[0].z + e[e.length - 1].z) / 2;
                    i ? (n.z = i.z + t(n._, i._), n.m = n.z - u) : n.z = u
                } else i && (n.z = i.z + t(n._, i._));
                n.parent.A = function(n, e, r) {
                    if (e) {
                        for (var i, u = n, o = n, a = e, l = u.parent.children[0], c = u.m, f = o.m, s = a.m, h = l.m; a = oo(a), u = uo(u), a && u;) l = uo(l), (o = oo(o)).a = n, (i = a.z + s - u.z - c + t(a._, u._)) > 0 && (ao(lo(a, n, r), n, i), c += i, f += i), s += a.m, c += u.m, h += l.m, f += o.m;
                        a && !oo(o) && (o.t = a, o.m += s - f), u && !uo(l) && (l.t = u, l.m += c - h, r = n)
                    }
                    return r
                }(n, i, n.parent.A || r[0])
            }

            function a(n) {
                n._.x = n.z + n.parent.m, n.m += n.parent.m
            }

            function l(n) {
                n.x *= e[0], n.y = n.depth * e[1]
            }
            return i.separation = function(n) {
                return arguments.length ? (t = n, i) : t
            }, i.size = function(n) {
                return arguments.length ? (r = null == (e = n) ? l : null, i) : r ? null : e
            }, i.nodeSize = function(n) {
                return arguments.length ? (r = null == (e = n) ? null : l, i) : r ? e : null
            }, Cu(i, n)
        }, u.layout.cluster = function() {
            var n = u.layout.hierarchy().sort(null).value(null),
                t = io,
                e = [1, 1],
                r = !1;

            function i(i, o) {
                var a, l = n.call(this, i, o),
                    c = l[0],
                    f = 0;
                zu(c, function(n) {
                    var e = n.children;
                    e && e.length ? (n.x = function(n) {
                        return n.reduce(function(n, t) {
                            return n + t.x
                        }, 0) / n.length
                    }(e), n.y = function(n) {
                        return 1 + u.max(n, function(n) {
                            return n.y
                        })
                    }(e)) : (n.x = a ? f += t(n, a) : 0, n.y = 0, a = n)
                });
                var s = function n(t) {
                        var e = t.children;
                        return e && e.length ? n(e[0]) : t
                    }(c),
                    h = function n(t) {
                        var e, r = t.children;
                        return r && (e = r.length) ? n(r[e - 1]) : t
                    }(c),
                    p = s.x - t(s, h) / 2,
                    g = h.x + t(h, s) / 2;
                return zu(c, r ? function(n) {
                    n.x = (n.x - c.x) * e[0], n.y = (c.y - n.y) * e[1]
                } : function(n) {
                    n.x = (n.x - p) / (g - p) * e[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * e[1]
                }), l
            }
            return i.separation = function(n) {
                return arguments.length ? (t = n, i) : t
            }, i.size = function(n) {
                return arguments.length ? (r = null == (e = n), i) : r ? null : e
            }, i.nodeSize = function(n) {
                return arguments.length ? (r = null != (e = n), i) : r ? e : null
            }, Cu(i, n)
        }, u.layout.treemap = function() {
            var n, t = u.layout.hierarchy(),
                e = Math.round,
                r = [1, 1],
                i = null,
                o = co,
                a = !1,
                l = "squarify",
                c = .5 * (1 + Math.sqrt(5));

            function f(n, t) {
                for (var e, r, i = -1, u = n.length; ++i < u;) r = (e = n[i]).value * (t < 0 ? 0 : t), e.area = isNaN(r) || r <= 0 ? 0 : r
            }

            function s(n) {
                var t = n.children;
                if (t && t.length) {
                    var e, r, i, u = o(n),
                        a = [],
                        c = t.slice(),
                        h = 1 / 0,
                        d = "slice" === l ? u.dx : "dice" === l ? u.dy : "slice-dice" === l ? 1 & n.depth ? u.dy : u.dx : Math.min(u.dx, u.dy);
                    for (f(c, u.dx * u.dy / n.value), a.area = 0;
                        (i = c.length) > 0;) a.push(e = c[i - 1]), a.area += e.area, "squarify" !== l || (r = p(a, d)) <= h ? (c.pop(), h = r) : (a.area -= a.pop().area, g(a, d, u, !1), d = Math.min(u.dx, u.dy), a.length = a.area = 0, h = 1 / 0);
                    a.length && (g(a, d, u, !0), a.length = a.area = 0), t.forEach(s)
                }
            }

            function h(n) {
                var t = n.children;
                if (t && t.length) {
                    var e, r = o(n),
                        i = t.slice(),
                        u = [];
                    for (f(i, r.dx * r.dy / n.value), u.area = 0; e = i.pop();) u.push(e), u.area += e.area, null != e.z && (g(u, e.z ? r.dx : r.dy, r, !i.length), u.length = u.area = 0);
                    t.forEach(h)
                }
            }

            function p(n, t) {
                for (var e, r = n.area, i = 0, u = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (e < u && (u = e), e > i && (i = e));
                return t *= t, (r *= r) ? Math.max(t * i * c / r, r / (t * u * c)) : 1 / 0
            }

            function g(n, t, r, i) {
                var u, o = -1,
                    a = n.length,
                    l = r.x,
                    c = r.y,
                    f = t ? e(n.area / t) : 0;
                if (t == r.dx) {
                    for ((i || f > r.dy) && (f = r.dy); ++o < a;)(u = n[o]).x = l, u.y = c, u.dy = f, l += u.dx = Math.min(r.x + r.dx - l, f ? e(u.area / f) : 0);
                    u.z = !0, u.dx += r.x + r.dx - l, r.y += f, r.dy -= f
                } else {
                    for ((i || f > r.dx) && (f = r.dx); ++o < a;)(u = n[o]).x = l, u.y = c, u.dx = f, c += u.dy = Math.min(r.y + r.dy - c, f ? e(u.area / f) : 0);
                    u.z = !1, u.dy += r.y + r.dy - c, r.x += f, r.dx -= f
                }
            }

            function d(e) {
                var i = n || t(e),
                    u = i[0];
                return u.x = u.y = 0, u.value ? (u.dx = r[0], u.dy = r[1]) : u.dx = u.dy = 0, n && t.revalue(u), f([u], u.dx * u.dy / u.value), (n ? h : s)(u), a && (n = i), i
            }
            return d.size = function(n) {
                return arguments.length ? (r = n, d) : r
            }, d.padding = function(n) {
                if (!arguments.length) return i;

                function t(t) {
                    return fo(t, n)
                }
                var e;
                return o = null == (i = n) ? co : "function" == (e = typeof n) ? function(t) {
                    var e = n.call(d, t, t.depth);
                    return null == e ? co(t) : fo(t, "number" == typeof e ? [e, e, e, e] : e)
                } : "number" === e ? (n = [n, n, n, n], t) : t, d
            }, d.round = function(n) {
                return arguments.length ? (e = n ? Math.round : Number, d) : e != Number
            }, d.sticky = function(t) {
                return arguments.length ? (a = t, n = null, d) : a
            }, d.ratio = function(n) {
                return arguments.length ? (c = n, d) : c
            }, d.mode = function(n) {
                return arguments.length ? (l = n + "", d) : l
            }, Cu(d, t)
        }, u.random = {
            normal: function(n, t) {
                var e = arguments.length;
                return e < 2 && (t = 1), e < 1 && (n = 0),
                    function() {
                        var e, r, i;
                        do {
                            i = (e = 2 * Math.random() - 1) * e + (r = 2 * Math.random() - 1) * r
                        } while (!i || i > 1);
                        return n + t * e * Math.sqrt(-2 * Math.log(i) / i)
                    }
            },
            logNormal: function() {
                var n = u.random.normal.apply(u, arguments);
                return function() {
                    return Math.exp(n())
                }
            },
            bates: function(n) {
                var t = u.random.irwinHall(n);
                return function() {
                    return t() / n
                }
            },
            irwinHall: function(n) {
                return function() {
                    for (var t = 0, e = 0; e < n; e++) t += Math.random();
                    return t
                }
            }
        }, u.scale = {};
        var yo = {
            floor: R,
            ceil: R
        };

        function mo(n, t, e, r) {
            var i = [],
                o = [],
                a = 0,
                l = Math.min(n.length, t.length) - 1;
            for (n[l] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++a <= l;) i.push(e(n[a - 1], n[a])), o.push(r(t[a - 1], t[a]));
            return function(t) {
                var e = u.bisect(n, t, 1, l) - 1;
                return o[e](i[e](t))
            }
        }

        function xo(n, t) {
            return u.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
        }

        function Mo(n, t) {
            return go(n, vo(bo(n, t)[2])), go(n, vo(bo(n, t)[2])), n
        }

        function bo(n, t) {
            null == t && (t = 10);
            var e = so(n),
                r = e[1] - e[0],
                i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
                u = t / r * i;
            return u <= .15 ? i *= 10 : u <= .35 ? i *= 5 : u <= .75 && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
        }

        function _o(n, t) {
            return u.range.apply(u, bo(n, t))
        }

        function wo(n, t, e) {
            var r = bo(n, t);
            if (e) {
                var i = Rt.exec(e);
                if (i.shift(), "s" === i[8]) {
                    var o = u.formatPrefix(Math.max(_(r[0]), _(r[1])));
                    return i[7] || (i[7] = "." + ko(o.scale(r[2]))), i[8] = "f", e = u.format(i.join("")),
                        function(n) {
                            return e(o.scale(n)) + o.symbol
                        }
                }
                i[7] || (i[7] = "." + function(n, t) {
                    var e = ko(t[2]);
                    return n in So ? Math.abs(e - ko(Math.max(_(t[0]), _(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
                }(i[8], r)), e = i.join("")
            } else e = ",." + ko(r[2]) + "f";
            return u.format(e)
        }
        u.scale.linear = function() {
            return function n(t, e, r, i) {
                var u, o;

                function a() {
                    var n = Math.min(t.length, e.length) > 2 ? mo : po,
                        a = i ? xu : mu;
                    return u = n(t, e, a, r), o = n(e, t, a, Wi), l
                }

                function l(n) {
                    return u(n)
                }
                l.invert = function(n) {
                    return o(n)
                };
                l.domain = function(n) {
                    return arguments.length ? (t = n.map(Number), a()) : t
                };
                l.range = function(n) {
                    return arguments.length ? (e = n, a()) : e
                };
                l.rangeRound = function(n) {
                    return l.range(n).interpolate(su)
                };
                l.clamp = function(n) {
                    return arguments.length ? (i = n, a()) : i
                };
                l.interpolate = function(n) {
                    return arguments.length ? (r = n, a()) : r
                };
                l.ticks = function(n) {
                    return _o(t, n)
                };
                l.tickFormat = function(n, e) {
                    return wo(t, n, e)
                };
                l.nice = function(n) {
                    return Mo(t, n), a()
                };
                l.copy = function() {
                    return n(t, e, r, i)
                };
                return a()
            }([0, 1], [0, 1], Wi, !1)
        };
        var So = {
            s: 1,
            g: 1,
            p: 1,
            r: 1,
            e: 1
        };

        function ko(n) {
            return -Math.floor(Math.log(n) / Math.LN10 + .01)
        }
        u.scale.log = function() {
            return function n(t, e, r, i) {
                function o(n) {
                    return (r ? Math.log(n < 0 ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(e)
                }

                function a(n) {
                    return r ? Math.pow(e, n) : -Math.pow(e, -n)
                }

                function l(n) {
                    return t(o(n))
                }
                l.invert = function(n) {
                    return a(t.invert(n))
                };
                l.domain = function(n) {
                    return arguments.length ? (r = n[0] >= 0, t.domain((i = n.map(Number)).map(o)), l) : i
                };
                l.base = function(n) {
                    return arguments.length ? (e = +n, t.domain(i.map(o)), l) : e
                };
                l.nice = function() {
                    var n = go(i.map(o), r ? Math : Eo);
                    return t.domain(n), i = n.map(a), l
                };
                l.ticks = function() {
                    var n = so(i),
                        t = [],
                        u = n[0],
                        l = n[1],
                        c = Math.floor(o(u)),
                        f = Math.ceil(o(l)),
                        s = e % 1 ? 2 : e;
                    if (isFinite(f - c)) {
                        if (r) {
                            for (; c < f; c++)
                                for (var h = 1; h < s; h++) t.push(a(c) * h);
                            t.push(a(c))
                        } else
                            for (t.push(a(c)); c++ < f;)
                                for (var h = s - 1; h > 0; h--) t.push(a(c) * h);
                        for (c = 0; t[c] < u; c++);
                        for (f = t.length; t[f - 1] > l; f--);
                        t = t.slice(c, f)
                    }
                    return t
                };
                l.tickFormat = function(n, t) {
                    if (!arguments.length) return No;
                    arguments.length < 2 ? t = No : "function" != typeof t && (t = u.format(t));
                    var r = Math.max(1, e * n / l.ticks().length);
                    return function(n) {
                        var i = n / a(Math.round(o(n)));
                        return i * e < e - .5 && (i *= e), i <= r ? t(n) : ""
                    }
                };
                l.copy = function() {
                    return n(t.copy(), e, r, i)
                };
                return xo(l, t)
            }(u.scale.linear().domain([0, 1]), 10, !0, [1, 10])
        };
        var No = u.format(".0e"),
            Eo = {
                floor: function(n) {
                    return -Math.ceil(-n)
                },
                ceil: function(n) {
                    return -Math.floor(-n)
                }
            };

        function Ao(n) {
            return function(t) {
                return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
            }
        }
        u.scale.pow = function() {
            return function n(t, e, r) {
                var i = Ao(e),
                    u = Ao(1 / e);

                function o(n) {
                    return t(i(n))
                }
                o.invert = function(n) {
                    return u(t.invert(n))
                };
                o.domain = function(n) {
                    return arguments.length ? (t.domain((r = n.map(Number)).map(i)), o) : r
                };
                o.ticks = function(n) {
                    return _o(r, n)
                };
                o.tickFormat = function(n, t) {
                    return wo(r, n, t)
                };
                o.nice = function(n) {
                    return o.domain(Mo(r, n))
                };
                o.exponent = function(n) {
                    return arguments.length ? (i = Ao(e = n), u = Ao(1 / e), t.domain(r.map(i)), o) : e
                };
                o.copy = function() {
                    return n(t.copy(), e, r)
                };
                return xo(o, t)
            }(u.scale.linear(), 1, [0, 1])
        }, u.scale.sqrt = function() {
            return u.scale.pow().exponent(.5)
        }, u.scale.ordinal = function() {
            return function n(t, e) {
                var r, i, o;

                function a(n) {
                    return i[((r.get(n) || ("range" === e.t ? r.set(n, t.push(n)) : NaN)) - 1) % i.length]
                }

                function l(n, e) {
                    return u.range(t.length).map(function(t) {
                        return n + e * t
                    })
                }
                a.domain = function(n) {
                    if (!arguments.length) return t;
                    t = [], r = new S;
                    for (var i, u = -1, o = n.length; ++u < o;) r.has(i = n[u]) || r.set(i, t.push(i));
                    return a[e.t].apply(a, e.a)
                };
                a.range = function(n) {
                    return arguments.length ? (i = n, o = 0, e = {
                        t: "range",
                        a: arguments
                    }, a) : i
                };
                a.rangePoints = function(n, r) {
                    arguments.length < 2 && (r = 0);
                    var u = n[0],
                        c = n[1],
                        f = t.length < 2 ? (u = (u + c) / 2, 0) : (c - u) / (t.length - 1 + r);
                    return i = l(u + f * r / 2, f), o = 0, e = {
                        t: "rangePoints",
                        a: arguments
                    }, a
                };
                a.rangeRoundPoints = function(n, r) {
                    arguments.length < 2 && (r = 0);
                    var u = n[0],
                        c = n[1],
                        f = t.length < 2 ? (u = c = Math.round((u + c) / 2), 0) : (c - u) / (t.length - 1 + r) | 0;
                    return i = l(u + Math.round(f * r / 2 + (c - u - (t.length - 1 + r) * f) / 2), f), o = 0, e = {
                        t: "rangeRoundPoints",
                        a: arguments
                    }, a
                };
                a.rangeBands = function(n, r, u) {
                    arguments.length < 2 && (r = 0), arguments.length < 3 && (u = r);
                    var c = n[1] < n[0],
                        f = n[c - 0],
                        s = n[1 - c],
                        h = (s - f) / (t.length - r + 2 * u);
                    return i = l(f + h * u, h), c && i.reverse(), o = h * (1 - r), e = {
                        t: "rangeBands",
                        a: arguments
                    }, a
                };
                a.rangeRoundBands = function(n, r, u) {
                    arguments.length < 2 && (r = 0), arguments.length < 3 && (u = r);
                    var c = n[1] < n[0],
                        f = n[c - 0],
                        s = n[1 - c],
                        h = Math.floor((s - f) / (t.length - r + 2 * u));
                    return i = l(f + Math.round((s - f - (t.length - r) * h) / 2), h), c && i.reverse(), o = Math.round(h * (1 - r)), e = {
                        t: "rangeRoundBands",
                        a: arguments
                    }, a
                };
                a.rangeBand = function() {
                    return o
                };
                a.rangeExtent = function() {
                    return so(e.a[0])
                };
                a.copy = function() {
                    return n(t, e)
                };
                return a.domain(t)
            }([], {
                t: "range",
                a: [
                    []
                ]
            })
        }, u.scale.category10 = function() {
            return u.scale.ordinal().range(Co)
        }, u.scale.category20 = function() {
            return u.scale.ordinal().range(To)
        }, u.scale.category20b = function() {
            return u.scale.ordinal().range(zo)
        }, u.scale.category20c = function() {
            return u.scale.ordinal().range(qo)
        };
        var Co = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ht),
            To = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ht),
            zo = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ht),
            qo = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ht);

        function Lo() {
            return 0
        }
        u.scale.quantile = function() {
            return function n(t, e) {
                var r;

                function i() {
                    var n = 0,
                        i = e.length;
                    for (r = []; ++n < i;) r[n - 1] = u.quantile(t, n / i);
                    return o
                }

                function o(n) {
                    if (!isNaN(n = +n)) return e[u.bisect(r, n)]
                }
                o.domain = function(n) {
                    return arguments.length ? (t = n.map(y).filter(m).sort(v), i()) : t
                };
                o.range = function(n) {
                    return arguments.length ? (e = n, i()) : e
                };
                o.quantiles = function() {
                    return r
                };
                o.invertExtent = function(n) {
                    return (n = e.indexOf(n)) < 0 ? [NaN, NaN] : [n > 0 ? r[n - 1] : t[0], n < r.length ? r[n] : t[t.length - 1]]
                };
                o.copy = function() {
                    return n(t, e)
                };
                return i()
            }([], [])
        }, u.scale.quantize = function() {
            return function n(t, e, r) {
                var i, u;

                function o(n) {
                    return r[Math.max(0, Math.min(u, Math.floor(i * (n - t))))]
                }

                function a() {
                    return i = r.length / (e - t), u = r.length - 1, o
                }
                o.domain = function(n) {
                    return arguments.length ? (t = +n[0], e = +n[n.length - 1], a()) : [t, e]
                };
                o.range = function(n) {
                    return arguments.length ? (r = n, a()) : r
                };
                o.invertExtent = function(n) {
                    return [n = (n = r.indexOf(n)) < 0 ? NaN : n / i + t, n + 1 / i]
                };
                o.copy = function() {
                    return n(t, e, r)
                };
                return a()
            }(0, 1, [0, 1])
        }, u.scale.threshold = function() {
            return function n(t, e) {
                function r(n) {
                    if (n <= n) return e[u.bisect(t, n)]
                }
                r.domain = function(n) {
                    return arguments.length ? (t = n, r) : t
                };
                r.range = function(n) {
                    return arguments.length ? (e = n, r) : e
                };
                r.invertExtent = function(n) {
                    return n = e.indexOf(n), [t[n - 1], t[n]]
                };
                r.copy = function() {
                    return n(t, e)
                };
                return r
            }([.5], [0, 1])
        }, u.scale.identity = function() {
            return function n(t) {
                function e(n) {
                    return +n
                }
                e.invert = e;
                e.domain = e.range = function(n) {
                    return arguments.length ? (t = n.map(e), e) : t
                };
                e.ticks = function(n) {
                    return _o(t, n)
                };
                e.tickFormat = function(n, e) {
                    return wo(t, n, e)
                };
                e.copy = function() {
                    return n(t)
                };
                return e
            }([0, 1])
        }, u.svg = {}, u.svg.arc = function() {
            var n = Ro,
                t = Do,
                e = Lo,
                r = Po,
                i = jo,
                u = Oo,
                o = Uo;

            function a() {
                var a = Math.max(0, +n.apply(this, arguments)),
                    c = Math.max(0, +t.apply(this, arguments)),
                    f = i.apply(this, arguments) - Ln,
                    s = u.apply(this, arguments) - Ln,
                    h = Math.abs(s - f),
                    p = f > s ? 0 : 1;
                if (c < a && (g = c, c = a, a = g), h >= qn) return l(c, p) + (a ? l(a, 1 - p) : "") + "Z";
                var g, d, v, y, m, x, M, b, _, w, S, k, N = 0,
                    E = 0,
                    A = [];
                if ((y = (+o.apply(this, arguments) || 0) / 2) && (v = r === Po ? Math.sqrt(a * a + c * c) : +r.apply(this, arguments), p || (E *= -1), c && (E = Un(v / c * Math.sin(y))), a && (N = Un(v / a * Math.sin(y)))), c) {
                    m = c * Math.cos(f + E), x = c * Math.sin(f + E), M = c * Math.cos(s - E), b = c * Math.sin(s - E);
                    var C = Math.abs(s - f - 2 * E) <= Tn ? 0 : 1;
                    if (E && Fo(m, x, M, b) === p ^ C) {
                        var T = (f + s) / 2;
                        m = c * Math.cos(T), x = c * Math.sin(T), M = b = null
                    }
                } else m = x = 0;
                if (a) {
                    _ = a * Math.cos(s - N), w = a * Math.sin(s - N), S = a * Math.cos(f + N), k = a * Math.sin(f + N);
                    var z = Math.abs(f - s + 2 * N) <= Tn ? 0 : 1;
                    if (N && Fo(_, w, S, k) === 1 - p ^ z) {
                        var q = (f + s) / 2;
                        _ = a * Math.cos(q), w = a * Math.sin(q), S = k = null
                    }
                } else _ = w = 0;
                if (h > An && (g = Math.min(Math.abs(c - a) / 2, +e.apply(this, arguments))) > .001) {
                    d = a < c ^ p ? 0 : 1;
                    var L = g,
                        P = g;
                    if (h < Tn) {
                        var R = null == S ? [_, w] : null == M ? [m, x] : ci([m, x], [S, k], [M, b], [_, w]),
                            D = m - R[0],
                            j = x - R[1],
                            O = M - R[0],
                            U = b - R[1],
                            F = 1 / Math.sin(Math.acos((D * O + j * U) / (Math.sqrt(D * D + j * j) * Math.sqrt(O * O + U * U))) / 2),
                            H = Math.sqrt(R[0] * R[0] + R[1] * R[1]);
                        P = Math.min(g, (a - H) / (F - 1)), L = Math.min(g, (c - H) / (F + 1))
                    }
                    if (null != M) {
                        var I = Ho(null == S ? [_, w] : [S, k], [m, x], c, L, p),
                            Y = Ho([M, b], [_, w], c, L, p);
                        g === L ? A.push("M", I[0], "A", L, ",", L, " 0 0,", d, " ", I[1], "A", c, ",", c, " 0 ", 1 - p ^ Fo(I[1][0], I[1][1], Y[1][0], Y[1][1]), ",", p, " ", Y[1], "A", L, ",", L, " 0 0,", d, " ", Y[0]) : A.push("M", I[0], "A", L, ",", L, " 0 1,", d, " ", Y[0])
                    } else A.push("M", m, ",", x);
                    if (null != S) {
                        var V = Ho([m, x], [S, k], a, -P, p),
                            Z = Ho([_, w], null == M ? [m, x] : [M, b], a, -P, p);
                        g === P ? A.push("L", Z[0], "A", P, ",", P, " 0 0,", d, " ", Z[1], "A", a, ",", a, " 0 ", p ^ Fo(Z[1][0], Z[1][1], V[1][0], V[1][1]), ",", 1 - p, " ", V[1], "A", P, ",", P, " 0 0,", d, " ", V[0]) : A.push("L", Z[0], "A", P, ",", P, " 0 0,", d, " ", V[0])
                    } else A.push("L", _, ",", w)
                } else A.push("M", m, ",", x), null != M && A.push("A", c, ",", c, " 0 ", C, ",", p, " ", M, ",", b), A.push("L", _, ",", w), null != S && A.push("A", a, ",", a, " 0 ", z, ",", 1 - p, " ", S, ",", k);
                return A.push("Z"), A.join("")
            }

            function l(n, t) {
                return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n
            }
            return a.innerRadius = function(t) {
                return arguments.length ? (n = bt(t), a) : n
            }, a.outerRadius = function(n) {
                return arguments.length ? (t = bt(n), a) : t
            }, a.cornerRadius = function(n) {
                return arguments.length ? (e = bt(n), a) : e
            }, a.padRadius = function(n) {
                return arguments.length ? (r = n == Po ? Po : bt(n), a) : r
            }, a.startAngle = function(n) {
                return arguments.length ? (i = bt(n), a) : i
            }, a.endAngle = function(n) {
                return arguments.length ? (u = bt(n), a) : u
            }, a.padAngle = function(n) {
                return arguments.length ? (o = bt(n), a) : o
            }, a.centroid = function() {
                var e = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2,
                    r = (+i.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Ln;
                return [Math.cos(r) * e, Math.sin(r) * e]
            }, a
        };
        var Po = "auto";

        function Ro(n) {
            return n.innerRadius
        }

        function Do(n) {
            return n.outerRadius
        }

        function jo(n) {
            return n.startAngle
        }

        function Oo(n) {
            return n.endAngle
        }

        function Uo(n) {
            return n && n.padAngle
        }

        function Fo(n, t, e, r) {
            return (n - e) * t - (t - r) * n > 0 ? 0 : 1
        }

        function Ho(n, t, e, r, i) {
            var u = n[0] - t[0],
                o = n[1] - t[1],
                a = (i ? r : -r) / Math.sqrt(u * u + o * o),
                l = a * o,
                c = -a * u,
                f = n[0] + l,
                s = n[1] + c,
                h = t[0] + l,
                p = t[1] + c,
                g = (f + h) / 2,
                d = (s + p) / 2,
                v = h - f,
                y = p - s,
                m = v * v + y * y,
                x = e - r,
                M = f * p - h * s,
                b = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, x * x * m - M * M)),
                _ = (M * y - v * b) / m,
                w = (-M * v - y * b) / m,
                S = (M * y + v * b) / m,
                k = (-M * v + y * b) / m,
                N = _ - g,
                E = w - d,
                A = S - g,
                C = k - d;
            return N * N + E * E > A * A + C * C && (_ = S, w = k), [
                [_ - l, w - c],
                [_ * e / x, w * e / x]
            ]
        }

        function Io(n) {
            var t = ri,
                e = ii,
                r = We,
                i = Vo,
                u = i.key,
                o = .7;

            function a(u) {
                var a, l = [],
                    c = [],
                    f = -1,
                    s = u.length,
                    h = bt(t),
                    p = bt(e);

                function g() {
                    l.push("M", i(n(c), o))
                }
                for (; ++f < s;) r.call(this, a = u[f], f) ? c.push([+h.call(this, a, f), +p.call(this, a, f)]) : c.length && (g(), c = []);
                return c.length && g(), l.length ? l.join("") : null
            }
            return a.x = function(n) {
                return arguments.length ? (t = n, a) : t
            }, a.y = function(n) {
                return arguments.length ? (e = n, a) : e
            }, a.defined = function(n) {
                return arguments.length ? (r = n, a) : r
            }, a.interpolate = function(n) {
                return arguments.length ? (u = "function" == typeof n ? i = n : (i = Yo.get(n) || Vo).key, a) : u
            }, a.tension = function(n) {
                return arguments.length ? (o = n, a) : o
            }, a
        }
        u.svg.line = function() {
            return Io(R)
        };
        var Yo = u.map({
            linear: Vo,
            "linear-closed": Zo,
            step: function(n) {
                var t = 0,
                    e = n.length,
                    r = n[0],
                    i = [r[0], ",", r[1]];
                for (; ++t < e;) i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
                e > 1 && i.push("H", r[0]);
                return i.join("")
            },
            "step-before": Xo,
            "step-after": $o,
            basis: Jo,
            "basis-open": function(n) {
                if (n.length < 4) return Vo(n);
                var t, e = [],
                    r = -1,
                    i = n.length,
                    u = [0],
                    o = [0];
                for (; ++r < 3;) t = n[r], u.push(t[0]), o.push(t[1]);
                e.push(Wo(na, u) + "," + Wo(na, o)), --r;
                for (; ++r < i;) t = n[r], u.shift(), u.push(t[0]), o.shift(), o.push(t[1]), ta(e, u, o);
                return e.join("")
            },
            "basis-closed": function(n) {
                var t, e, r = -1,
                    i = n.length,
                    u = i + 4,
                    o = [],
                    a = [];
                for (; ++r < 4;) e = n[r % i], o.push(e[0]), a.push(e[1]);
                t = [Wo(na, o), ",", Wo(na, a)], --r;
                for (; ++r < u;) e = n[r % i], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), ta(t, o, a);
                return t.join("")
            },
            bundle: function(n, t) {
                var e = n.length - 1;
                if (e)
                    for (var r, i, u = n[0][0], o = n[0][1], a = n[e][0] - u, l = n[e][1] - o, c = -1; ++c <= e;) r = n[c], i = c / e, r[0] = t * r[0] + (1 - t) * (u + i * a), r[1] = t * r[1] + (1 - t) * (o + i * l);
                return Jo(n)
            },
            cardinal: function(n, t) {
                return n.length < 3 ? Vo(n) : n[0] + Bo(n, Go(n, t))
            },
            "cardinal-open": function(n, t) {
                return n.length < 4 ? Vo(n) : n[1] + Bo(n.slice(1, -1), Go(n, t))
            },
            "cardinal-closed": function(n, t) {
                return n.length < 3 ? Zo(n) : n[0] + Bo((n.push(n[0]), n), Go([n[n.length - 2]].concat(n, [n[1]]), t))
            },
            monotone: function(n) {
                return n.length < 3 ? Vo(n) : n[0] + Bo(n, function(n) {
                    var t, e, r, i, u = [],
                        o = function(n) {
                            var t = 0,
                                e = n.length - 1,
                                r = [],
                                i = n[0],
                                u = n[1],
                                o = r[0] = ea(i, u);
                            for (; ++t < e;) r[t] = (o + (o = ea(i = u, u = n[t + 1]))) / 2;
                            return r[t] = o, r
                        }(n),
                        a = -1,
                        l = n.length - 1;
                    for (; ++a < l;) t = ea(n[a], n[a + 1]), _(t) < An ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, (i = e * e + r * r) > 9 && (i = 3 * t / Math.sqrt(i), o[a] = i * e, o[a + 1] = i * r));
                    a = -1;
                    for (; ++a <= l;) i = (n[Math.min(l, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), u.push([i || 0, o[a] * i || 0]);
                    return u
                }(n))
            }
        });

        function Vo(n) {
            return n.length > 1 ? n.join("L") : n + "Z"
        }

        function Zo(n) {
            return n.join("L") + "Z"
        }

        function Xo(n) {
            for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) i.push("V", (r = n[t])[1], "H", r[0]);
            return i.join("")
        }

        function $o(n) {
            for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) i.push("H", (r = n[t])[0], "V", r[1]);
            return i.join("")
        }

        function Bo(n, t) {
            if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return Vo(n);
            var e = n.length != t.length,
                r = "",
                i = n[0],
                u = n[1],
                o = t[0],
                a = o,
                l = 1;
            if (e && (r += "Q" + (u[0] - 2 * o[0] / 3) + "," + (u[1] - 2 * o[1] / 3) + "," + u[0] + "," + u[1], i = n[1], l = 2), t.length > 1) {
                a = t[1], u = n[l], l++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];
                for (var c = 2; c < t.length; c++, l++) u = n[l], a = t[c], r += "S" + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1]
            }
            if (e) {
                var f = n[l];
                r += "Q" + (u[0] + 2 * a[0] / 3) + "," + (u[1] + 2 * a[1] / 3) + "," + f[0] + "," + f[1]
            }
            return r
        }

        function Go(n, t) {
            for (var e, r = [], i = (1 - t) / 2, u = n[0], o = n[1], a = 1, l = n.length; ++a < l;) e = u, u = o, o = n[a], r.push([i * (o[0] - e[0]), i * (o[1] - e[1])]);
            return r
        }

        function Jo(n) {
            if (n.length < 3) return Vo(n);
            var t = 1,
                e = n.length,
                r = n[0],
                i = r[0],
                u = r[1],
                o = [i, i, i, (r = n[1])[0]],
                a = [u, u, u, r[1]],
                l = [i, ",", u, "L", Wo(na, o), ",", Wo(na, a)];
            for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), ta(l, o, a);
            return n.pop(), l.push("L", r), l.join("")
        }

        function Wo(n, t) {
            return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
        }
        Yo.forEach(function(n, t) {
            t.key = n, t.closed = /-closed$/.test(n)
        });
        var Ko = [0, 2 / 3, 1 / 3, 0],
            Qo = [0, 1 / 3, 2 / 3, 0],
            na = [0, 1 / 6, 2 / 3, 1 / 6];

        function ta(n, t, e) {
            n.push("C", Wo(Ko, t), ",", Wo(Ko, e), ",", Wo(Qo, t), ",", Wo(Qo, e), ",", Wo(na, t), ",", Wo(na, e))
        }

        function ea(n, t) {
            return (t[1] - n[1]) / (t[0] - n[0])
        }

        function ra(n) {
            for (var t, e, r, i = -1, u = n.length; ++i < u;) e = (t = n[i])[0], r = t[1] - Ln, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
            return n
        }

        function ia(n) {
            var t = ri,
                e = ri,
                r = 0,
                i = ii,
                u = We,
                o = Vo,
                a = o.key,
                l = o,
                c = "L",
                f = .7;

            function s(a) {
                var s, h, p, g = [],
                    d = [],
                    v = [],
                    y = -1,
                    m = a.length,
                    x = bt(t),
                    M = bt(r),
                    b = t === e ? function() {
                        return h
                    } : bt(e),
                    _ = r === i ? function() {
                        return p
                    } : bt(i);

                function w() {
                    g.push("M", o(n(v), f), c, l(n(d.reverse()), f), "Z")
                }
                for (; ++y < m;) u.call(this, s = a[y], y) ? (d.push([h = +x.call(this, s, y), p = +M.call(this, s, y)]), v.push([+b.call(this, s, y), +_.call(this, s, y)])) : d.length && (w(), d = [], v = []);
                return d.length && w(), g.length ? g.join("") : null
            }
            return s.x = function(n) {
                return arguments.length ? (t = e = n, s) : e
            }, s.x0 = function(n) {
                return arguments.length ? (t = n, s) : t
            }, s.x1 = function(n) {
                return arguments.length ? (e = n, s) : e
            }, s.y = function(n) {
                return arguments.length ? (r = i = n, s) : i
            }, s.y0 = function(n) {
                return arguments.length ? (r = n, s) : r
            }, s.y1 = function(n) {
                return arguments.length ? (i = n, s) : i
            }, s.defined = function(n) {
                return arguments.length ? (u = n, s) : u
            }, s.interpolate = function(n) {
                return arguments.length ? (a = "function" == typeof n ? o = n : (o = Yo.get(n) || Vo).key, l = o.reverse || o, c = o.closed ? "M" : "L", s) : a
            }, s.tension = function(n) {
                return arguments.length ? (f = n, s) : f
            }, s
        }

        function ua(n) {
            return n.radius
        }

        function oa(n) {
            return [n.x, n.y]
        }

        function aa() {
            return 64
        }

        function la() {
            return "circle"
        }

        function ca(n) {
            var t = Math.sqrt(n / Tn);
            return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
        }
        u.svg.line.radial = function() {
            var n = Io(ra);
            return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
        }, Xo.reverse = $o, $o.reverse = Xo, u.svg.area = function() {
            return ia(R)
        }, u.svg.area.radial = function() {
            var n = ia(ra);
            return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
        }, u.svg.chord = function() {
            var n = Yr,
                t = Vr,
                e = ua,
                r = jo,
                i = Oo;

            function u(e, r) {
                var i = o(this, n, e, r),
                    u = o(this, t, e, r);
                return "M" + i.p0 + a(i.r, i.p1, i.a1 - i.a0) + (function(n, t) {
                    return n.a0 == t.a0 && n.a1 == t.a1
                }(i, u) ? l(i.r, i.p1, i.r, i.p0) : l(i.r, i.p1, u.r, u.p0) + a(u.r, u.p1, u.a1 - u.a0) + l(u.r, u.p1, i.r, i.p0)) + "Z"
            }

            function o(n, t, u, o) {
                var a = t.call(n, u, o),
                    l = e.call(n, a, o),
                    c = r.call(n, a, o) - Ln,
                    f = i.call(n, a, o) - Ln;
                return {
                    r: l,
                    a0: c,
                    a1: f,
                    p0: [l * Math.cos(c), l * Math.sin(c)],
                    p1: [l * Math.cos(f), l * Math.sin(f)]
                }
            }

            function a(n, t, e) {
                return "A" + n + "," + n + " 0 " + +(e > Tn) + ",1 " + t
            }

            function l(n, t, e, r) {
                return "Q 0,0 " + r
            }
            return u.radius = function(n) {
                return arguments.length ? (e = bt(n), u) : e
            }, u.source = function(t) {
                return arguments.length ? (n = bt(t), u) : n
            }, u.target = function(n) {
                return arguments.length ? (t = bt(n), u) : t
            }, u.startAngle = function(n) {
                return arguments.length ? (r = bt(n), u) : r
            }, u.endAngle = function(n) {
                return arguments.length ? (i = bt(n), u) : i
            }, u
        }, u.svg.diagonal = function() {
            var n = Yr,
                t = Vr,
                e = oa;

            function r(r, i) {
                var u = n.call(this, r, i),
                    o = t.call(this, r, i),
                    a = (u.y + o.y) / 2,
                    l = [u, {
                        x: u.x,
                        y: a
                    }, {
                        x: o.x,
                        y: a
                    }, o];
                return "M" + (l = l.map(e))[0] + "C" + l[1] + " " + l[2] + " " + l[3]
            }
            return r.source = function(t) {
                return arguments.length ? (n = bt(t), r) : n
            }, r.target = function(n) {
                return arguments.length ? (t = bt(n), r) : t
            }, r.projection = function(n) {
                return arguments.length ? (e = n, r) : e
            }, r
        }, u.svg.diagonal.radial = function() {
            var n = u.svg.diagonal(),
                t = oa,
                e = n.projection;
            return n.projection = function(n) {
                return arguments.length ? e(function(n) {
                    return function() {
                        var t = n.apply(this, arguments),
                            e = t[0],
                            r = t[1] - Ln;
                        return [e * Math.cos(r), e * Math.sin(r)]
                    }
                }(t = n)) : t
            }, n
        }, u.svg.symbol = function() {
            var n = la,
                t = aa;

            function e(e, r) {
                return (fa.get(n.call(this, e, r)) || ca)(t.call(this, e, r))
            }
            return e.type = function(t) {
                return arguments.length ? (n = bt(t), e) : n
            }, e.size = function(n) {
                return arguments.length ? (t = bt(n), e) : t
            }, e
        };
        var fa = u.map({
            circle: ca,
            cross: function(n) {
                var t = Math.sqrt(n / 5) / 2;
                return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
            },
            diamond: function(n) {
                var t = Math.sqrt(n / (2 * ha)),
                    e = t * ha;
                return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"
            },
            square: function(n) {
                var t = Math.sqrt(n) / 2;
                return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
            },
            "triangle-down": function(n) {
                var t = Math.sqrt(n / sa),
                    e = t * sa / 2;
                return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
            },
            "triangle-up": function(n) {
                var t = Math.sqrt(n / sa),
                    e = t * sa / 2;
                return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
            }
        });
        u.svg.symbolTypes = fa.keys();
        var sa = Math.sqrt(3),
            ha = Math.tan(30 * Pn);
        W.transition = function(n) {
            for (var t, e, r = va || ++xa, i = _a(n), u = [], o = ya || {
                    time: Date.now(),
                    ease: ou,
                    delay: 0,
                    duration: 250
                }, a = -1, l = this.length; ++a < l;) {
                u.push(t = []);
                for (var c = this[a], f = -1, s = c.length; ++f < s;)(e = c[f]) && wa(e, f, i, r, o), t.push(e)
            }
            return da(u, i, r)
        }, W.interrupt = function(n) {
            return this.each(null == n ? pa : ga(_a(n)))
        };
        var pa = ga(_a());

        function ga(n) {
            return function() {
                var t, e, r;
                (t = this[n]) && (r = t[e = t.active]) && (r.timer.c = null, r.timer.t = NaN, --t.count ? delete t[e] : delete this[n], t.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index))
            }
        }

        function da(n, t, e) {
            return X(n, ma), n.namespace = t, n.id = e, n
        }
        var va, ya, ma = [],
            xa = 0;

        function Ma(n, t, e, r) {
            var i = n.id,
                u = n.namespace;
            return dn(n, "function" == typeof e ? function(n, o, a) {
                n[u][i].tween.set(t, r(e.call(n, n.__data__, o, a)))
            } : (e = r(e), function(n) {
                n[u][i].tween.set(t, e)
            }))
        }

        function ba(n) {
            return null == n && (n = ""),
                function() {
                    this.textContent = n
                }
        }

        function _a(n) {
            return null == n ? "__transition__" : "__transition_" + n + "__"
        }

        function wa(n, t, e, r, i) {
            var u, o, a, l, c, f = n[e] || (n[e] = {
                    active: 0,
                    count: 0
                }),
                s = f[r];

            function h(e) {
                var i = f.active,
                    h = f[i];
                for (var g in h && (h.timer.c = null, h.timer.t = NaN, --f.count, delete f[i], h.event && h.event.interrupt.call(n, n.__data__, h.index)), f)
                    if (+g < r) {
                        var d = f[g];
                        d.timer.c = null, d.timer.t = NaN, --f.count, delete f[g]
                    } o.c = p, Ct(function() {
                    return o.c && p(e || 1) && (o.c = null, o.t = NaN), 1
                }, 0, u), f.active = r, s.event && s.event.start.call(n, n.__data__, t), c = [], s.tween.forEach(function(e, r) {
                    (r = r.call(n, n.__data__, t)) && c.push(r)
                }), l = s.ease, a = s.duration
            }

            function p(i) {
                for (var u = i / a, o = l(u), h = c.length; h > 0;) c[--h].call(n, o);
                if (u >= 1) return s.event && s.event.end.call(n, n.__data__, t), --f.count ? delete f[r] : delete n[e], 1
            }
            s || (u = i.time, o = Ct(function(n) {
                var t = s.delay;
                if (o.t = t + u, t <= n) return h(n - t);
                o.c = h
            }, 0, u), s = f[r] = {
                tween: new S,
                time: u,
                timer: o,
                delay: i.delay,
                duration: i.duration,
                ease: i.ease,
                index: t
            }, i = null, ++f.count)
        }
        ma.call = W.call, ma.empty = W.empty, ma.node = W.node, ma.size = W.size, u.transition = function(n, t) {
            return n && n.transition ? va ? n.transition(t) : n : u.selection().transition(n)
        }, u.transition.prototype = ma, ma.select = function(n) {
            var t, e, r, i = this.id,
                u = this.namespace,
                o = [];
            n = K(n);
            for (var a = -1, l = this.length; ++a < l;) {
                o.push(t = []);
                for (var c = this[a], f = -1, s = c.length; ++f < s;)(r = c[f]) && (e = n.call(r, r.__data__, f, a)) ? ("__data__" in r && (e.__data__ = r.__data__), wa(e, f, u, i, r[u][i]), t.push(e)) : t.push(null)
            }
            return da(o, u, i)
        }, ma.selectAll = function(n) {
            var t, e, r, i, u, o = this.id,
                a = this.namespace,
                l = [];
            n = Q(n);
            for (var c = -1, f = this.length; ++c < f;)
                for (var s = this[c], h = -1, p = s.length; ++h < p;)
                    if (r = s[h]) {
                        u = r[a][o], e = n.call(r, r.__data__, h, c), l.push(t = []);
                        for (var g = -1, d = e.length; ++g < d;)(i = e[g]) && wa(i, g, a, o, u), t.push(i)
                    } return da(l, a, o)
        }, ma.filter = function(n) {
            var t, e, r = [];
            "function" != typeof n && (n = gn(n));
            for (var i = 0, u = this.length; i < u; i++) {
                r.push(t = []);
                for (var o, a = 0, l = (o = this[i]).length; a < l; a++)(e = o[a]) && n.call(e, e.__data__, a, i) && t.push(e)
            }
            return da(r, this.namespace, this.id)
        }, ma.tween = function(n, t) {
            var e = this.id,
                r = this.namespace;
            return arguments.length < 2 ? this.node()[r][e].tween.get(n) : dn(this, null == t ? function(t) {
                t[r][e].tween.remove(n)
            } : function(i) {
                i[r][e].tween.set(n, t)
            })
        }, ma.attr = function(n, t) {
            if (arguments.length < 2) {
                for (t in n) this.attr(t, n[t]);
                return this
            }
            var e = "transform" == n ? yu : Wi,
                r = u.ns.qualify(n);

            function i() {
                this.removeAttribute(r)
            }

            function o() {
                this.removeAttributeNS(r.space, r.local)
            }
            return Ma(this, "attr." + n, t, r.local ? function(n) {
                return null == n ? o : (n += "", function() {
                    var t, i = this.getAttributeNS(r.space, r.local);
                    return i !== n && (t = e(i, n), function(n) {
                        this.setAttributeNS(r.space, r.local, t(n))
                    })
                })
            } : function(n) {
                return null == n ? i : (n += "", function() {
                    var t, i = this.getAttribute(r);
                    return i !== n && (t = e(i, n), function(n) {
                        this.setAttribute(r, t(n))
                    })
                })
            })
        }, ma.attrTween = function(n, t) {
            var e = u.ns.qualify(n);
            return this.tween("attr." + n, e.local ? function(n, r) {
                var i = t.call(this, n, r, this.getAttributeNS(e.space, e.local));
                return i && function(n) {
                    this.setAttributeNS(e.space, e.local, i(n))
                }
            } : function(n, r) {
                var i = t.call(this, n, r, this.getAttribute(e));
                return i && function(n) {
                    this.setAttribute(e, i(n))
                }
            })
        }, ma.style = function(n, t, e) {
            var r = arguments.length;
            if (r < 3) {
                if ("string" != typeof n) {
                    for (e in r < 2 && (t = ""), n) this.style(e, n[e], t);
                    return this
                }
                e = ""
            }

            function i() {
                this.style.removeProperty(n)
            }
            return Ma(this, "style." + n, t, function(t) {
                return null == t ? i : (t += "", function() {
                    var r, i = f(this).getComputedStyle(this, null).getPropertyValue(n);
                    return i !== t && (r = Wi(i, t), function(t) {
                        this.style.setProperty(n, r(t), e)
                    })
                })
            })
        }, ma.styleTween = function(n, t, e) {
            return arguments.length < 3 && (e = ""), this.tween("style." + n, function(r, i) {
                var u = t.call(this, r, i, f(this).getComputedStyle(this, null).getPropertyValue(n));
                return u && function(t) {
                    this.style.setProperty(n, u(t), e)
                }
            })
        }, ma.text = function(n) {
            return Ma(this, "text", n, ba)
        }, ma.remove = function() {
            var n = this.namespace;
            return this.each("end.transition", function() {
                var t;
                this[n].count < 2 && (t = this.parentNode) && t.removeChild(this)
            })
        }, ma.ease = function(n) {
            var t = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = u.ease.apply(u, arguments)), dn(this, function(r) {
                r[e][t].ease = n
            }))
        }, ma.delay = function(n) {
            var t = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][t].delay : dn(this, "function" == typeof n ? function(r, i, u) {
                r[e][t].delay = +n.call(r, r.__data__, i, u)
            } : (n = +n, function(r) {
                r[e][t].delay = n
            }))
        }, ma.duration = function(n) {
            var t = this.id,
                e = this.namespace;
            return arguments.length < 1 ? this.node()[e][t].duration : dn(this, "function" == typeof n ? function(r, i, u) {
                r[e][t].duration = Math.max(1, n.call(r, r.__data__, i, u))
            } : (n = Math.max(1, n), function(r) {
                r[e][t].duration = n
            }))
        }, ma.each = function(n, t) {
            var e = this.id,
                r = this.namespace;
            if (arguments.length < 2) {
                var i = ya,
                    o = va;
                try {
                    va = e, dn(this, function(t, i, u) {
                        ya = t[r][e], n.call(t, t.__data__, i, u)
                    })
                } finally {
                    ya = i, va = o
                }
            } else dn(this, function(i) {
                var o = i[r][e];
                (o.event || (o.event = u.dispatch("start", "end", "interrupt"))).on(n, t)
            });
            return this
        }, ma.transition = function() {
            for (var n, t, e, r = this.id, i = ++xa, u = this.namespace, o = [], a = 0, l = this.length; a < l; a++) {
                o.push(n = []);
                for (var c, f = 0, s = (c = this[a]).length; f < s; f++)(t = c[f]) && wa(t, f, u, i, {
                    time: (e = t[u][r]).time,
                    ease: e.ease,
                    delay: e.delay + e.duration,
                    duration: e.duration
                }), n.push(t)
            }
            return da(o, u, i)
        }, u.svg.axis = function() {
            var n, t = u.scale.linear(),
                e = Sa,
                r = 6,
                i = 6,
                o = 3,
                l = [10],
                c = null;

            function f(a) {
                a.each(function() {
                    var a, f = u.select(this),
                        s = this.__chart__ || t,
                        h = this.__chart__ = t.copy(),
                        p = null == c ? h.ticks ? h.ticks.apply(h, l) : h.domain() : c,
                        g = null == n ? h.tickFormat ? h.tickFormat.apply(h, l) : R : n,
                        d = f.selectAll(".tick").data(p, h),
                        v = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", An),
                        y = u.transition(d.exit()).style("opacity", An).remove(),
                        m = u.transition(d.order()).style("opacity", 1),
                        x = Math.max(r, 0) + o,
                        M = ho(h),
                        b = f.selectAll(".domain").data([0]),
                        _ = (b.enter().append("path").attr("class", "domain"), u.transition(b));
                    v.append("line"), v.append("text");
                    var w, S, k, N, E = v.select("line"),
                        A = m.select("line"),
                        C = d.select("text").text(g),
                        T = v.select("text"),
                        z = m.select("text"),
                        q = "top" === e || "left" === e ? -1 : 1;
                    if ("bottom" === e || "top" === e ? (a = Na, w = "x", k = "y", S = "x2", N = "y2", C.attr("dy", q < 0 ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + M[0] + "," + q * i + "V0H" + M[1] + "V" + q * i)) : (a = Ea, w = "y", k = "x", S = "y2", N = "x2", C.attr("dy", ".32em").style("text-anchor", q < 0 ? "end" : "start"), _.attr("d", "M" + q * i + "," + M[0] + "H0V" + M[1] + "H" + q * i)), E.attr(N, q * r), T.attr(k, q * x), A.attr(S, 0).attr(N, q * r), z.attr(w, 0).attr(k, q * x), h.rangeBand) {
                        var L = h,
                            P = L.rangeBand() / 2;
                        s = h = function(n) {
                            return L(n) + P
                        }
                    } else s.rangeBand ? s = h : y.call(a, h, s);
                    v.call(a, s, h), m.call(a, h, h)
                })
            }
            return f.scale = function(n) {
                return arguments.length ? (t = n, f) : t
            }, f.orient = function(n) {
                return arguments.length ? (e = n in ka ? n + "" : Sa, f) : e
            }, f.ticks = function() {
                return arguments.length ? (l = a(arguments), f) : l
            }, f.tickValues = function(n) {
                return arguments.length ? (c = n, f) : c
            }, f.tickFormat = function(t) {
                return arguments.length ? (n = t, f) : n
            }, f.tickSize = function(n) {
                var t = arguments.length;
                return t ? (r = +n, i = +arguments[t - 1], f) : r
            }, f.innerTickSize = function(n) {
                return arguments.length ? (r = +n, f) : r
            }, f.outerTickSize = function(n) {
                return arguments.length ? (i = +n, f) : i
            }, f.tickPadding = function(n) {
                return arguments.length ? (o = +n, f) : o
            }, f.tickSubdivide = function() {
                return arguments.length && f
            }, f
        };
        var Sa = "bottom",
            ka = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };

        function Na(n, t, e) {
            n.attr("transform", function(n) {
                var r = t(n);
                return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"
            })
        }

        function Ea(n, t, e) {
            n.attr("transform", function(n) {
                var r = t(n);
                return "translate(0," + (isFinite(r) ? r : e(n)) + ")"
            })
        }
        u.svg.brush = function() {
            var n, t, e = V(h, "brushstart", "brush", "brushend"),
                r = null,
                i = null,
                o = [0, 0],
                a = [0, 0],
                l = !0,
                c = !0,
                s = Ca[0];

            function h(n) {
                n.each(function() {
                    var n = u.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", v).on("touchstart.brush", v),
                        t = n.selectAll(".background").data([0]);
                    t.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), n.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                    var e = n.selectAll(".resize").data(s, R);
                    e.exit().remove(), e.enter().append("g").attr("class", function(n) {
                        return "resize " + n
                    }).style("cursor", function(n) {
                        return Aa[n]
                    }).append("rect").attr("x", function(n) {
                        return /[ew]$/.test(n) ? -3 : null
                    }).attr("y", function(n) {
                        return /^[ns]/.test(n) ? -3 : null
                    }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), e.style("display", h.empty() ? "none" : null);
                    var o, a = u.transition(n),
                        l = u.transition(t);
                    r && (o = ho(r), l.attr("x", o[0]).attr("width", o[1] - o[0]), g(a)), i && (o = ho(i), l.attr("y", o[0]).attr("height", o[1] - o[0]), d(a)), p(a)
                })
            }

            function p(n) {
                n.selectAll(".resize").attr("transform", function(n) {
                    return "translate(" + o[+/e$/.test(n)] + "," + a[+/^s/.test(n)] + ")"
                })
            }

            function g(n) {
                n.select(".extent").attr("x", o[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", o[1] - o[0])
            }

            function d(n) {
                n.select(".extent").attr("y", a[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", a[1] - a[0])
            }

            function v() {
                var s, v, y = this,
                    m = u.select(u.event.target),
                    x = e.of(y, arguments),
                    M = u.select(y),
                    b = m.datum(),
                    _ = !/^(n|s)$/.test(b) && r,
                    w = !/^(e|w)$/.test(b) && i,
                    S = m.classed("extent"),
                    k = Sn(y),
                    N = u.mouse(y),
                    E = u.select(f(y)).on("keydown.brush", function() {
                        32 == u.event.keyCode && (S || (s = null, N[0] -= o[1], N[1] -= a[1], S = 2), I())
                    }).on("keyup.brush", function() {
                        32 == u.event.keyCode && 2 == S && (N[0] += o[1], N[1] += a[1], S = 0, I())
                    });
                if (u.event.changedTouches ? E.on("touchmove.brush", T).on("touchend.brush", q) : E.on("mousemove.brush", T).on("mouseup.brush", q), M.interrupt().selectAll("*").interrupt(), S) N[0] = o[0] - N[0], N[1] = a[0] - N[1];
                else if (b) {
                    var A = +/w$/.test(b),
                        C = +/^n/.test(b);
                    v = [o[1 - A] - N[0], a[1 - C] - N[1]], N[0] = o[A], N[1] = a[C]
                } else u.event.altKey && (s = N.slice());

                function T() {
                    var n = u.mouse(y),
                        t = !1;
                    v && (n[0] += v[0], n[1] += v[1]), S || (u.event.altKey ? (s || (s = [(o[0] + o[1]) / 2, (a[0] + a[1]) / 2]), N[0] = o[+(n[0] < s[0])], N[1] = a[+(n[1] < s[1])]) : s = null), _ && z(n, r, 0) && (g(M), t = !0), w && z(n, i, 1) && (d(M), t = !0), t && (p(M), x({
                        type: "brush",
                        mode: S ? "move" : "resize"
                    }))
                }

                function z(e, r, i) {
                    var u, f, h = ho(r),
                        p = h[0],
                        g = h[1],
                        d = N[i],
                        v = i ? a : o,
                        y = v[1] - v[0];
                    if (S && (p -= d, g -= y + d), u = (i ? c : l) ? Math.max(p, Math.min(g, e[i])) : e[i], S ? f = (u += d) + y : (s && (d = Math.max(p, Math.min(g, 2 * s[i] - u))), d < u ? (f = u, u = d) : f = d), v[0] != u || v[1] != f) return i ? t = null : n = null, v[0] = u, v[1] = f, !0
                }

                function q() {
                    T(), M.style("pointer-events", "all").selectAll(".resize").style("display", h.empty() ? "none" : null), u.select("body").style("cursor", null), E.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), k(), x({
                        type: "brushend"
                    })
                }
                M.style("pointer-events", "none").selectAll(".resize").style("display", null), u.select("body").style("cursor", m.style("cursor")), x({
                    type: "brushstart"
                }), T()
            }
            return h.event = function(r) {
                r.each(function() {
                    var r = e.of(this, arguments),
                        i = {
                            x: o,
                            y: a,
                            i: n,
                            j: t
                        },
                        l = this.__chart__ || i;
                    this.__chart__ = i, va ? u.select(this).transition().each("start.brush", function() {
                        n = l.i, t = l.j, o = l.x, a = l.y, r({
                            type: "brushstart"
                        })
                    }).tween("brush:brush", function() {
                        var e = Ki(o, i.x),
                            u = Ki(a, i.y);
                        return n = t = null,
                            function(n) {
                                o = i.x = e(n), a = i.y = u(n), r({
                                    type: "brush",
                                    mode: "resize"
                                })
                            }
                    }).each("end.brush", function() {
                        n = i.i, t = i.j, r({
                            type: "brush",
                            mode: "resize"
                        }), r({
                            type: "brushend"
                        })
                    }) : (r({
                        type: "brushstart"
                    }), r({
                        type: "brush",
                        mode: "resize"
                    }), r({
                        type: "brushend"
                    }))
                })
            }, h.x = function(n) {
                return arguments.length ? (s = Ca[!(r = n) << 1 | !i], h) : r
            }, h.y = function(n) {
                return arguments.length ? (s = Ca[!r << 1 | !(i = n)], h) : i
            }, h.clamp = function(n) {
                return arguments.length ? (r && i ? (l = !!n[0], c = !!n[1]) : r ? l = !!n : i && (c = !!n), h) : r && i ? [l, c] : r ? l : i ? c : null
            }, h.extent = function(e) {
                var u, l, c, f, s;
                return arguments.length ? (r && (u = e[0], l = e[1], i && (u = u[0], l = l[0]), n = [u, l], r.invert && (u = r(u), l = r(l)), l < u && (s = u, u = l, l = s), u == o[0] && l == o[1] || (o = [u, l])), i && (c = e[0], f = e[1], r && (c = c[1], f = f[1]), t = [c, f], i.invert && (c = i(c), f = i(f)), f < c && (s = c, c = f, f = s), c == a[0] && f == a[1] || (a = [c, f])), h) : (r && (n ? (u = n[0], l = n[1]) : (u = o[0], l = o[1], r.invert && (u = r.invert(u), l = r.invert(l)), l < u && (s = u, u = l, l = s))), i && (t ? (c = t[0], f = t[1]) : (c = a[0], f = a[1], i.invert && (c = i.invert(c), f = i.invert(f)), f < c && (s = c, c = f, f = s))), r && i ? [
                    [u, c],
                    [l, f]
                ] : r ? [u, l] : i && [c, f])
            }, h.clear = function() {
                return h.empty() || (o = [0, 0], a = [0, 0], n = t = null), h
            }, h.empty = function() {
                return !!r && o[0] == o[1] || !!i && a[0] == a[1]
            }, u.rebind(h, e, "on")
        };
        var Aa = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            },
            Ca = [
                ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                ["e", "w"],
                ["n", "s"],
                []
            ],
            Ta = Ot.format = he.timeFormat,
            za = Ta.utc,
            qa = za("%Y-%m-%dT%H:%M:%S.%LZ");

        function La(n) {
            return n.toISOString()
        }

        function Pa(n, t, e) {
            function r(t) {
                return n(t)
            }

            function i(n, e) {
                var r = (n[1] - n[0]) / e,
                    i = u.bisect(Da, r);
                return i == Da.length ? [t.year, bo(n.map(function(n) {
                    return n / 31536e6
                }), e)[2]] : i ? t[r / Da[i - 1] < Da[i] / r ? i - 1 : i] : [Ua, bo(n, e)[2]]
            }
            return r.invert = function(t) {
                return Ra(n.invert(t))
            }, r.domain = function(t) {
                return arguments.length ? (n.domain(t), r) : n.domain().map(Ra)
            }, r.nice = function(n, t) {
                var e = r.domain(),
                    u = so(e),
                    o = null == n ? i(u, 10) : "number" == typeof n && i(u, n);

                function a(e) {
                    return !isNaN(e) && !n.range(e, Ra(+e + 1), t).length
                }
                return o && (n = o[0], t = o[1]), r.domain(go(e, t > 1 ? {
                    floor: function(t) {
                        for (; a(t = n.floor(t));) t = Ra(t - 1);
                        return t
                    },
                    ceil: function(t) {
                        for (; a(t = n.ceil(t));) t = Ra(+t + 1);
                        return t
                    }
                } : n))
            }, r.ticks = function(n, t) {
                var e = so(r.domain()),
                    u = null == n ? i(e, 10) : "number" == typeof n ? i(e, n) : !n.range && [{
                        range: n
                    }, t];
                return u && (n = u[0], t = u[1]), n.range(e[0], Ra(+e[1] + 1), t < 1 ? 1 : t)
            }, r.tickFormat = function() {
                return e
            }, r.copy = function() {
                return Pa(n.copy(), t, e)
            }, xo(r, n)
        }

        function Ra(n) {
            return new Date(n)
        }
        Ta.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? La : qa, La.parse = function(n) {
            var t = new Date(n);
            return isNaN(t) ? null : t
        }, La.toString = qa.toString, Ot.second = It(function(n) {
            return new Ut(1e3 * Math.floor(n / 1e3))
        }, function(n, t) {
            n.setTime(n.getTime() + 1e3 * Math.floor(t))
        }, function(n) {
            return n.getSeconds()
        }), Ot.seconds = Ot.second.range, Ot.seconds.utc = Ot.second.utc.range, Ot.minute = It(function(n) {
            return new Ut(6e4 * Math.floor(n / 6e4))
        }, function(n, t) {
            n.setTime(n.getTime() + 6e4 * Math.floor(t))
        }, function(n) {
            return n.getMinutes()
        }), Ot.minutes = Ot.minute.range, Ot.minutes.utc = Ot.minute.utc.range, Ot.hour = It(function(n) {
            var t = n.getTimezoneOffset() / 60;
            return new Ut(36e5 * (Math.floor(n / 36e5 - t) + t))
        }, function(n, t) {
            n.setTime(n.getTime() + 36e5 * Math.floor(t))
        }, function(n) {
            return n.getHours()
        }), Ot.hours = Ot.hour.range, Ot.hours.utc = Ot.hour.utc.range, Ot.month = It(function(n) {
            return (n = Ot.day(n)).setDate(1), n
        }, function(n, t) {
            n.setMonth(n.getMonth() + t)
        }, function(n) {
            return n.getMonth()
        }), Ot.months = Ot.month.range, Ot.months.utc = Ot.month.utc.range;
        var Da = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
            ja = [
                [Ot.second, 1],
                [Ot.second, 5],
                [Ot.second, 15],
                [Ot.second, 30],
                [Ot.minute, 1],
                [Ot.minute, 5],
                [Ot.minute, 15],
                [Ot.minute, 30],
                [Ot.hour, 1],
                [Ot.hour, 3],
                [Ot.hour, 6],
                [Ot.hour, 12],
                [Ot.day, 1],
                [Ot.day, 2],
                [Ot.week, 1],
                [Ot.month, 1],
                [Ot.month, 3],
                [Ot.year, 1]
            ],
            Oa = Ta.multi([
                [".%L", function(n) {
                    return n.getMilliseconds()
                }],
                [":%S", function(n) {
                    return n.getSeconds()
                }],
                ["%I:%M", function(n) {
                    return n.getMinutes()
                }],
                ["%I %p", function(n) {
                    return n.getHours()
                }],
                ["%a %d", function(n) {
                    return n.getDay() && 1 != n.getDate()
                }],
                ["%b %d", function(n) {
                    return 1 != n.getDate()
                }],
                ["%B", function(n) {
                    return n.getMonth()
                }],
                ["%Y", We]
            ]),
            Ua = {
                range: function(n, t, e) {
                    return u.range(Math.ceil(n / e) * e, +t, e).map(Ra)
                },
                floor: R,
                ceil: R
            };
        ja.year = Ot.year, Ot.scale = function() {
            return Pa(u.scale.linear(), ja, Oa)
        };
        var Fa = ja.map(function(n) {
                return [n[0].utc, n[1]]
            }),
            Ha = za.multi([
                [".%L", function(n) {
                    return n.getUTCMilliseconds()
                }],
                [":%S", function(n) {
                    return n.getUTCSeconds()
                }],
                ["%I:%M", function(n) {
                    return n.getUTCMinutes()
                }],
                ["%I %p", function(n) {
                    return n.getUTCHours()
                }],
                ["%a %d", function(n) {
                    return n.getUTCDay() && 1 != n.getUTCDate()
                }],
                ["%b %d", function(n) {
                    return 1 != n.getUTCDate()
                }],
                ["%B", function(n) {
                    return n.getUTCMonth()
                }],
                ["%Y", We]
            ]);

        function Ia(n) {
            return JSON.parse(n.responseText)
        }

        function Ya(n) {
            var t = l.createRange();
            return t.selectNode(l.body), t.createContextualFragment(n.responseText)
        }
        Fa.year = Ot.year.utc, Ot.scale.utc = function() {
            return Pa(u.scale.linear(), Fa, Ha)
        }, u.text = _t(function(n) {
            return n.responseText
        }), u.json = function(n, t) {
            return wt(n, "application/json", Ia, t)
        }, u.html = function(n, t) {
            return wt(n, "text/html", Ya, t)
        }, u.xml = _t(function(n) {
            return n.responseXML
        }), this.d3 = u, void 0 === (i = "function" == typeof(r = u) ? r.call(t, e, t, n) : r) || (n.exports = i)
    }()
}]);