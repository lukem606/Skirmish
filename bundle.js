(() => {
  "use strict";
  var t = {
      426: (t, e, n) => {
        n.d(e, { Z: () => s });
        var i = n(81),
          r = n.n(i),
          a = n(645),
          o = n.n(a)()(r());
        o.push([
          t.id,
          "body {\n  background-color: rgb(0, 0, 0);\n  margin: 0;\n}\n",
          "",
        ]);
        const s = o;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  i = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  i &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  i && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, i, r, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var o = {};
              if (i)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (o[c] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var h = [].concat(t[u]);
                (i && o[h[0]]) ||
                  (void 0 !== a &&
                    (void 0 === h[5] ||
                      (h[1] = "@layer"
                        .concat(h[5].length > 0 ? " ".concat(h[5]) : "", " {")
                        .concat(h[1], "}")),
                    (h[5] = a)),
                  n &&
                    (h[2]
                      ? ((h[1] = "@media "
                          .concat(h[2], " {")
                          .concat(h[1], "}")),
                        (h[2] = n))
                      : (h[2] = n)),
                  r &&
                    (h[4]
                      ? ((h[1] = "@supports ("
                          .concat(h[4], ") {")
                          .concat(h[1], "}")),
                        (h[4] = r))
                      : (h[4] = "".concat(r))),
                  e.push(h));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === t) {
              n = i;
              break;
            }
          return n;
        }
        function i(t, i) {
          for (var a = {}, o = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = i.base ? c[0] + i.base : c[0],
              h = a[u] || 0,
              l = "".concat(u, " ").concat(h);
            a[u] = h + 1;
            var f = n(l),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(d);
            else {
              var y = r(d, i);
              (i.byIndex = s),
                e.splice(s, 0, { identifier: l, updater: y, references: 1 });
            }
            o.push(l);
          }
          return o;
        }
        function r(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, r) {
          var a = i((t = t || []), (r = r || {}));
          return function (t) {
            t = t || [];
            for (var o = 0; o < a.length; o++) {
              var s = n(a[o]);
              e[s].references--;
            }
            for (var c = i(t, r), u = 0; u < a.length; u++) {
              var h = n(a[u]);
              0 === e[h].references && (e[h].updater(), e.splice(h, 1));
            }
            a = c;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var i = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var i = "";
                n.supports && (i += "@supports (".concat(n.supports, ") {")),
                  n.media && (i += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (i += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (i += n.css),
                  r && (i += "}"),
                  n.media && (i += "}"),
                  n.supports && (i += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(i, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { id: i, exports: {} });
    return t[i](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var e = (function () {
        function e() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var n, i;
        return (
          (n = e),
          (i = [
            {
              key: "degreesToRadians",
              value: function (t) {
                return (t * Math.PI) / 180;
              },
            },
            {
              key: "randomInt",
              value: function (t) {
                return Math.floor(Math.random() * t);
              },
            },
            {
              key: "gaussian",
              value: function () {
                for (var t = 0, e = 0; 0 === t; ) t = Math.random();
                for (; 0 === e; ) e = Math.random();
                return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e);
              },
            },
          ]),
          null && t(n.prototype, null),
          i && t(n, i),
          e
        );
      })();
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var r = (function () {
        function t(e, n, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.x = e || 0),
            (this.y = n || 0),
            (this.z = i || 0);
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: "add",
              value: function (e) {
                return new t(this.x + e.x, this.y + e.y, this.z + e.z);
              },
            },
            {
              key: "sub",
              value: function (e) {
                return new t(this.x - e.x, this.y - e.y, this.z - e.z);
              },
            },
            {
              key: "mult",
              value: function (e) {
                return new t(this.x * e.x, this.y * e.y, this.z * e.z);
              },
            },
            {
              key: "div",
              value: function (e) {
                return new t(
                  0 !== this.x && 0 !== e.x ? this.x / e.x : 0,
                  0 !== this.y && 0 !== e.y ? this.y / e.y : 0,
                  0 !== this.z && 0 !== e.z ? this.z / e.z : 0
                );
              },
            },
            {
              key: "fromAngle2d",
              value: function (e) {
                return new t(Math.cos(e), Math.sin(e));
              },
            },
            {
              key: "fromAngle3d",
              value: function (t, e) {
                var n = Math.cos(e),
                  i = Math.sin(e),
                  r = Math.cos(t),
                  a = Math.sin(t);
                return new p5.Vector(a * i, -1 * r, a * n);
              },
            },
          ]),
          (n = [
            {
              key: "add",
              value: function (t) {
                (this.x += t.x), (this.y += t.y), (this.z += t.z);
              },
            },
            {
              key: "sub",
              value: function (t) {
                (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
              },
            },
            {
              key: "mult",
              value: function (t) {
                (this.x *= t.x), (this.y *= t.y), (this.z *= t.z);
              },
            },
            {
              key: "div",
              value: function (t) {
                0 !== this.x && 0 !== t.x && (this.x /= t.x),
                  0 !== this.y && 0 !== t.y && (this.y /= t.y),
                  0 !== this.z && 0 !== t.z && (this.z /= t.z);
              },
            },
            {
              key: "copy",
              value: function () {
                return new t(this.x, this.y, this.z);
              },
            },
            {
              key: "heading",
              value: function () {
                return Math.atan2(this.y, this.x);
              },
            },
            {
              key: "normalise",
              value: function () {
                var t = this.magnitude();
                return 0 !== t && this.mult(1 / t), this;
              },
            },
            {
              key: "magnitude",
              value: function () {
                return Math.sqrt(
                  this.x * this.x + this.y * this.y + this.z * this.z
                );
              },
            },
          ]) && i(e.prototype, n),
          r && i(e, r),
          t
        );
      })();
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var o = (function () {
          function t(n, i) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.location = new r(n, i)),
              (this.velocity = new r()),
              (this.size = new r(10, 10)),
              (this.health = 100),
              (this.attack = 20 + 2 * e.gaussian()),
              (this.speed = 2 + e.gaussian() + 5),
              (this.fov = 150),
              (this.state = "PATROLLING");
          }
          var n, i;
          return (
            (n = t),
            (i = [
              {
                key: "update",
                value: function () {
                  this.location.add(this.velocity);
                },
              },
              {
                key: "checkEdges",
                value: function (t) {
                  this.location.x < this.size.x / 2
                    ? (this.location.x = t.width - this.size.x / 2)
                    : this.location.x > t.width - this.size.x / 2 &&
                      (this.location.x = this.size.x / 2),
                    this.location.y < this.size.y / 2
                      ? (this.location.y = t.height - this.size.y / 2)
                      : this.location.y > t.height - this.size.y / 2 &&
                        (this.location.y = this.size.y / 2);
                },
              },
              {
                key: "render",
                value: function (t) {
                  t.beginPath(),
                    (t.fillStyle = "rgba(50, 50, 50)"),
                    t.arc(
                      this.location.x,
                      this.location.y,
                      this.fov,
                      0,
                      2 * Math.PI
                    ),
                    t.fill(),
                    (t.fillStyle = "rgb(3, 160, 98)"),
                    t.fillRect(
                      this.location.x - this.size.x / 2,
                      this.location.y - this.size.y / 2,
                      this.size.x,
                      this.size.y
                    ),
                    t.closePath();
                },
              },
            ]),
            i && a(n.prototype, i),
            t
          );
        })(),
        s = n(379),
        c = n.n(s),
        u = n(795),
        h = n.n(u),
        l = n(569),
        f = n.n(l),
        d = n(565),
        y = n.n(d),
        v = n(216),
        p = n.n(v),
        m = n(589),
        x = n.n(m),
        g = n(426),
        b = {};
      (b.styleTagTransform = x()),
        (b.setAttributes = y()),
        (b.insert = f().bind(null, "head")),
        (b.domAPI = h()),
        (b.insertStyleElement = p()),
        c()(g.Z, b),
        g.Z && g.Z.locals && g.Z.locals;
      for (
        var z =
            ((function () {
              var t = window.innerWidth - 40,
                e = window.innerHeight - 40,
                n = document.createElement("div");
              (n.id = "container"), (n.style.padding = "".concat(20, "px"));
              var i = document.createElement("canvas");
              (i.width = t),
                (i.height = e),
                n.appendChild(i),
                document.body.appendChild(n);
            })(),
            (function () {
              var t = document.querySelector("canvas"),
                e = t.getContext("2d");
              return {
                canvas: t,
                context: e,
                WIDTH: t.width,
                HEIGHT: t.height,
              };
            })()),
          w = z.canvas,
          k = z.context,
          M = z.WIDTH,
          T = z.HEIGHT,
          E = 0;
        E < 5;
        E++
      );
      var I = new o(50, 50);
      (I.velocity = new r(0.1, 0.2)),
        (function t() {
          k.clearRect(0, 0, M, T),
            I.update(),
            I.checkEdges(w),
            I.render(k),
            requestAnimationFrame(t);
        })();
    })();
})();
