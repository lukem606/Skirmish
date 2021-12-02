(() => {
  "use strict";
  var t = {
      426: (t, e, n) => {
        n.d(e, { Z: () => r });
        var i = n(81),
          a = n.n(i),
          o = n(645),
          s = n.n(o)()(a());
        s.push([
          t.id,
          "body {\n  background-color: rgb(0, 0, 0);\n  margin: 0;\n}\n",
          "",
        ]);
        const r = s;
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
            (e.i = function (t, n, i, a, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var s = {};
              if (i)
                for (var r = 0; r < this.length; r++) {
                  var c = this[r][0];
                  null != c && (s[c] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var h = [].concat(t[u]);
                (i && s[h[0]]) ||
                  (void 0 !== o &&
                    (void 0 === h[5] ||
                      (h[1] = "@layer"
                        .concat(h[5].length > 0 ? " ".concat(h[5]) : "", " {")
                        .concat(h[1], "}")),
                    (h[5] = o)),
                  n &&
                    (h[2]
                      ? ((h[1] = "@media "
                          .concat(h[2], " {")
                          .concat(h[1], "}")),
                        (h[2] = n))
                      : (h[2] = n)),
                  a &&
                    (h[4]
                      ? ((h[1] = "@supports ("
                          .concat(h[4], ") {")
                          .concat(h[1], "}")),
                        (h[4] = a))
                      : (h[4] = "".concat(a))),
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
          for (var o = {}, s = [], r = 0; r < t.length; r++) {
            var c = t[r],
              u = i.base ? c[0] + i.base : c[0],
              h = o[u] || 0,
              l = "".concat(u, " ").concat(h);
            o[u] = h + 1;
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
              var v = a(d, i);
              (i.byIndex = r),
                e.splice(r, 0, { identifier: l, updater: v, references: 1 });
            }
            s.push(l);
          }
          return s;
        }
        function a(t, e) {
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
        t.exports = function (t, a) {
          var o = i((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var s = 0; s < o.length; s++) {
              var r = n(o[s]);
              e[r].references--;
            }
            for (var c = i(t, a), u = 0; u < o.length; u++) {
              var h = n(o[u]);
              0 === e[h].references && (e[h].updater(), e.splice(h, 1));
            }
            o = c;
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
                var a = void 0 !== n.layer;
                a &&
                  (i += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (i += n.css),
                  a && (i += "}"),
                  n.media && (i += "}"),
                  n.supports && (i += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
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
    var a = e[i];
    if (void 0 !== a) return a.exports;
    var o = (e[i] = { id: i, exports: {} });
    return t[i](o, o.exports, n), o.exports;
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
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
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
        function e(t, n, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.x = t || 0),
            (this.y = n || 0),
            (this.z = i || 0);
        }
        var n, i, a;
        return (
          (n = e),
          (a = [
            {
              key: "add",
              value: function (t, n) {
                return new e(t.x + n.x, t.y + n.y, t.z + n.z);
              },
            },
            {
              key: "sub",
              value: function (t, n) {
                return new e(t.x - n.x, t.y - n.y, t.z - n.z);
              },
            },
            {
              key: "mult",
              value: function (t, n) {
                return new e(t.x * n, t.y * n, t.z * n);
              },
            },
            {
              key: "div",
              value: function (t, n) {
                var i, a, o;
                return (
                  0 !== n
                    ? ((i = t.x / n), (a = t.y / n), (o = t.z / n))
                    : (console.warn("Dividing by zero!"),
                      (i = t.x),
                      (a = t.y),
                      (o = t.z_)),
                  new e(i, a, o)
                );
              },
            },
            {
              key: "fromAngle2d",
              value: function (t) {
                return new e(Math.cos(t), Math.sin(t));
              },
            },
            {
              key: "fromAngle3d",
              value: function (t, e) {
                var n = Math.cos(e),
                  i = Math.sin(e),
                  a = Math.cos(t),
                  o = Math.sin(t);
                return new p5.Vector(o * i, -1 * a, o * n);
              },
            },
          ]),
          (i = [
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
                (this.x *= t), (this.y *= t), (this.z *= t);
              },
            },
            {
              key: "div",
              value: function (t) {
                0 !== t
                  ? ((this.x /= t), (this.y /= t), (this.z /= t))
                  : console.warn("Dividing by zero!");
              },
            },
            {
              key: "angleBetween",
              value: function (t) {
                var e = this.dot(t) / (this.magnitude() * t.magnitude());
                return (
                  Math.acos(Math.min(1, Math.max(-1, e))) *
                  Math.sign(this.cross(t).z || 1)
                );
              },
            },
            {
              key: "copy",
              value: function () {
                return new e(this.x, this.y, this.z);
              },
            },
            {
              key: "cross",
              value: function (t) {
                return new e(
                  this.y * t.z - this.z * t.y,
                  this.z * t.x - this.x * t.z,
                  this.x * t.y - this.y * t.x
                );
              },
            },
            {
              key: "dist",
              value: function (t) {
                return e.sub(t, this).magnitude();
              },
            },
            {
              key: "dot",
              value: function (t) {
                return (
                  this.x * (t.x || 0) +
                  this.y * (t.y || 0) +
                  this.z * (t.z || 0)
                );
              },
            },
            {
              key: "equals",
              value: function (t) {
                return this.x === t.x && this.y === t.y && this.z === t.z;
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
          ]) && t(n.prototype, i),
          a && t(n, a),
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
      var a = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.width = n.g.WIDTH),
            (this.height = n.g.HEIGHT),
            (this.cells = this.initialiseCells());
        }
        var e, a;
        return (
          (e = t),
          (a = [
            {
              key: "initialiseCells",
              value: function () {
                for (
                  var t = [
                      [[], [], [], []],
                      [[], [], [], []],
                      [[], [], [], []],
                      [[], [], [], []],
                    ],
                    e = 0;
                  e < 4;
                  e++
                )
                  for (var n = 0; n < 4; n++)
                    t[e][n] = { platoons: [], units: [] };
                return t;
              },
            },
            {
              key: "getMapCell",
              value: function (t) {
                return (
                  Math.floor((t.x % n.g.WIDTH) / 4),
                  Math.floor((t.y % n.g.HEIGHT) / 4),
                  this.cells[y][x]
                );
              },
            },
          ]) && i(e.prototype, a),
          t
        );
      })();
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var s = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var e, n;
        return (
          (e = t),
          (n = [
            {
              key: "degreesToRadians",
              value: function (t) {
                return (t * Math.PI) / 180;
              },
            },
            {
              key: "random",
              value: function (t, e) {
                var n = e - t;
                return Math.random() * n + t;
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
            {
              key: "mean",
              value: function (t) {
                return (
                  t.reduce(function (t, e) {
                    return t + e;
                  }) / t.length
                );
              },
            },
          ]),
          null && o(e.prototype, null),
          n && o(e, n),
          t
        );
      })();
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var c = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var e, n;
        return (
          (e = t),
          (n = [
            {
              key: "getFormation",
              value: function (t) {
                return 2 === t
                  ? [
                      [0, -0.75],
                      [0, 0.75],
                    ]
                  : 3 === t
                  ? [
                      [0.75, 0],
                      [-0.75, -0.75],
                      [-0.75, 0.75],
                    ]
                  : 4 === t
                  ? [
                      [0.75, -0.75],
                      [0.75, 0.75],
                      [-0.75, -0.75],
                      [-0.75, 0.75],
                    ]
                  : 5 === t
                  ? [
                      [1.5, 0],
                      [0, -0.75],
                      [0, 0.75],
                      [-1.5, -0.75],
                      [-1.5, 0.75],
                    ]
                  : 6 === t
                  ? [
                      [1.5, -0.75],
                      [1.5, 0.75],
                      [0, -0.75],
                      [0, 0.75],
                      [-1.5, -0.75],
                      [-1.5, 0.75],
                    ]
                  : 7 === t
                  ? [
                      [2.25, 0],
                      [0.75, -0.75],
                      [0.75, 0.75],
                      [-0.75, -0.75],
                      [-0.75, 0.75],
                      [-2.25, -0.75],
                      [-2.25, 0.75],
                    ]
                  : 8 === t
                  ? [
                      [2.25, -0.75],
                      [2.25, 0.75],
                      [0.75, -0.75],
                      [0.75, 0.75],
                      [-0.75, -0.75],
                      [-0.75, 0.75],
                      [-2.25, -0.75],
                      [-2.25, 0.75],
                    ]
                  : 9 === t
                  ? [
                      [3, 0],
                      [1.5, -0.75],
                      [1.5, 0.75],
                      [0, -0.75],
                      [0, 0.75],
                      [-1.5, -0.75],
                      [-1.5, 0.75],
                      [-3, -0.75],
                      [-3, 0.75],
                    ]
                  : void 0;
              },
            },
          ]),
          null && r(e.prototype, null),
          n && r(e, n),
          t
        );
      })();
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var h = (function () {
        function t(n, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.location = new e(n, i)),
            (this.velocity = new e(s.random(-1, 1), s.random(-1, 1))),
            (this.size = new e(4, 4)),
            (this.stats = {
              health: 100,
              attack: 20 + 2 * s.gaussian(),
              speed: 1 + 0.25 * s.gaussian(),
              fov: 100 + 10 * s.gaussian(),
              restTime: s.random(3, 6),
            }),
            (this.state = {
              behaviour: "NON-COMBAT",
              action: "REST",
              destination: 0,
              target: 0,
              direction: 0,
              previous: performance.now(),
            });
        }
        var i, a;
        return (
          (i = t),
          (a = [
            {
              key: "update",
              value: function () {
                "NON-COMBAT" === this.state.behaviour &&
                  ("PATROL" === this.state.action
                    ? this.patrol()
                    : "REST" === this.state.action
                    ? this.rest()
                    : "JOIN" === this.state.action && this.join());
              },
            },
            {
              key: "patrol",
              value: function () {
                this.location.equals(this.state.destination)
                  ? ((this.state.action = "REST"),
                    (this.state.previous = performance.now()))
                  : this.location.dist(this.state.destination) <
                    this.stats.speed
                  ? (this.location = this.state.destination.copy())
                  : this.location.add(this.velocity);
              },
            },
            {
              key: "rest",
              value: function () {
                performance.now() - this.state.previous >
                  1e3 * this.stats.restTime &&
                  ((this.state.action = "PATROL"), this.getDestination());
              },
            },
            {
              key: "getDestination",
              value: function () {
                var t = n.g,
                  i = t.WIDTH,
                  a = t.HEIGHT,
                  o = new e(Math.random() * i, Math.random() * a),
                  s = e.sub(o, this.location);
                s.normalise(),
                  (this.state.direction = s),
                  this.location.dist(o) > 2 * this.stats.fov &&
                    (o = this.normaliseDestination(o)),
                  (this.state.destination = o),
                  (this.velocity = e.mult(s, this.stats.speed));
              },
            },
            {
              key: "normaliseDestination",
              value: function (t) {
                if (
                  (t = e.add(
                    this.location,
                    e.mult(this.state.direction, 2 * this.stats.fov)
                  )).x < 0 ||
                  t.x > n.g.WIDTH
                ) {
                  var i = Math.abs(t.x) / (this.location.x - t.x);
                  t = new e(
                    Math.cos(direction.heading()) * i,
                    Math.sin(direction.heading()) * i
                  );
                }
                if (t.y < 0 || t.y > n.g.HEIGHT) {
                  var a = Math.abs(t.y) / (this.location.y - t.y);
                  t = new e(
                    Math.cos(direction.heading()) * a,
                    Math.sin(direction.heading()) * a
                  );
                }
                return t;
              },
            },
            {
              key: "copyPlatoonDestination",
              value: function (t) {
                var n = this.location.angleBetween(t),
                  i = this.location.dist(t);
                (n += s.degreesToRadians(s.random(-5, 5))),
                  (i += s.random(-i / 10, i / 10));
                var a = Math.cos(n) * i,
                  o = Math.sin(n) * i,
                  r = new e(a, o);
                (r = this.normaliseDestination(r)),
                  (this.state.destination = r);
              },
            },
            {
              key: "checkEdges",
              value: function () {
                var t = n.g.canvas;
                this.location.x < 0
                  ? (this.location.x = t.width - this.size.x)
                  : this.location.x > t.width - this.size.x &&
                    (this.location.x = 0),
                  this.location.y < 0
                    ? (this.location.y = t.height - this.size.y)
                    : this.location.y > t.height - this.size.y &&
                      (this.location.y = 0);
              },
            },
            {
              key: "render",
              value: function () {
                var t = n.g.context;
                t.beginPath(),
                  t.save(),
                  t.translate(this.location.x, this.location.y),
                  t.rotate(this.velocity.heading()),
                  (t.fillStyle = "rgba(100, 100, 100, 0.3)"),
                  t.lineTo(
                    Math.cos(s.degreesToRadians(-65)),
                    Math.sin(s.degreesToRadians(-65))
                  ),
                  t.arc(
                    0,
                    0,
                    this.stats.fov,
                    s.degreesToRadians(-65),
                    s.degreesToRadians(65)
                  ),
                  t.lineTo(0, 0),
                  t.fill(),
                  (t.fillStyle = "rgb(3, 160, 98)"),
                  t.fillRect(
                    (-1 * this.size.x) / 2,
                    (-1 * this.size.y) / 2,
                    this.size.x,
                    this.size.y
                  ),
                  t.restore(),
                  t.closePath();
              },
            },
          ]) && u(i.prototype, a),
          t
        );
      })();
      function l(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var d = (function () {
        function t(n, i) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          l(this, t),
            (this.location = new e(n, i)),
            (this.velocity = new e(s.random(-1, 1), s.random(-1, 1))),
            (this.units = a || this.populate()),
            (this.size = new e(30, 2.5 * this.units[0].size.y)),
            (this.stats = {
              speed: s.mean(
                this.units.map(function (t) {
                  return t.stats.speed;
                })
              ),
              fov: s.mean(
                this.units.map(function (t) {
                  return t.stats.fov;
                })
              ),
              restTime: s.mean(
                this.units.map(function (t) {
                  return t.stats.restTime;
                })
              ),
            }),
            (this.state = {
              behaviour: "NON-COMBAT",
              action: "REST",
              destination: 0,
              target: 0,
              direction: 0,
              formation: c.getFormation(this.units.length),
              previous: performance.now(),
            });
        }
        var i, a;
        return (
          (i = t),
          (a = [
            {
              key: "populate",
              value: function () {
                for (var t = [], e = 0; e < 9; e++) {
                  var n = new h(
                    this.location.x + 20 * Math.random(),
                    this.location.y + 20 * Math.random()
                  );
                  t.push(n);
                }
                return t;
              },
            },
            {
              key: "update",
              value: function () {
                "NON-COMBAT" === this.state.behaviour &&
                  ("PATROL" === this.state.action
                    ? this.patrol()
                    : "REST" === this.state.action
                    ? this.rest()
                    : "JOIN" === this.state.action && this.join());
              },
            },
            {
              key: "patrol",
              value: function () {
                this.location.equals(this.state.destination)
                  ? ((this.state.action = "REST"),
                    (this.state.destination = 0),
                    (this.state.previous = performance.now()))
                  : this.location.dist(this.state.destination) <
                    this.stats.speed
                  ? (this.location = this.state.destination.copy())
                  : this.location.add(this.velocity);
              },
            },
            {
              key: "rest",
              value: function () {
                performance.now() - this.state.previous >
                  1e3 * this.stats.restTime &&
                  ((this.state.action = "PATROL"), this.getDestination());
              },
            },
            {
              key: "getDestination",
              value: function () {
                var t = n.g,
                  i = t.WIDTH,
                  a = t.HEIGHT,
                  o = new e(Math.random() * i, Math.random() * a),
                  s = e.sub(o, this.location);
                s.normalise(),
                  (this.state.direction = s),
                  this.location.dist(o) > 2 * this.stats.fov &&
                    (o = this.normaliseDestination(o)),
                  (this.state.destination = o),
                  (this.velocity = e.mult(s, this.stats.speed));
              },
            },
            {
              key: "normaliseDestination",
              value: function (t) {
                if (
                  (t = e.add(
                    this.location,
                    e.mult(this.state.direction, 2 * this.stats.fov)
                  )).x < 0 ||
                  t.x > n.g.WIDTH
                ) {
                  var i = Math.abs(t.x) / (this.location.x - t.x);
                  t = new e(
                    Math.cos(direction.heading()) * i,
                    Math.sin(direction.heading()) * i
                  );
                }
                if (t.y < 0 || t.y > n.g.HEIGHT) {
                  var a = Math.abs(t.y) / (this.location.y - t.y);
                  t = new e(
                    Math.cos(direction.heading()) * a,
                    Math.sin(direction.heading()) * a
                  );
                }
                return t;
              },
            },
            {
              key: "checkEdges",
              value: function () {
                var t = n.g.canvas;
                this.location.x < 0
                  ? (this.location.x = t.width - this.size.x)
                  : this.location.x > t.width - this.size.x &&
                    (this.location.x = 0),
                  this.location.y < 0
                    ? (this.location.y = t.height - this.size.y)
                    : this.location.y > t.height - this.size.y &&
                      (this.location.y = 0);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = n.g.context;
                e.beginPath(),
                  e.save(),
                  e.translate(this.location.x, this.location.y),
                  e.rotate(this.velocity.heading()),
                  (e.fillStyle = "rgba(100, 100, 100, 0.3)"),
                  e.lineTo(
                    Math.cos(s.degreesToRadians(-65)),
                    Math.sin(s.degreesToRadians(-65))
                  ),
                  e.arc(
                    0,
                    0,
                    this.stats.fov,
                    s.degreesToRadians(-65),
                    s.degreesToRadians(65)
                  ),
                  e.lineTo(0, 0),
                  e.fill(),
                  this.units.forEach(function (n, i) {
                    (e.fillStyle = "rgb(3, 160, 98)"),
                      e.fillRect(
                        t.state.formation[i][0] * n.size.x,
                        t.state.formation[i][1] * n.size.y,
                        n.size.x,
                        n.size.y
                      );
                  }),
                  e.restore(),
                  e.closePath();
              },
            },
          ]) && f(i.prototype, a),
          t
        );
      })();
      function v(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var p = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              this.initialiseCanvas(20),
              this.initialiseMap(),
              this.initialisePlatoons();
          }
          var i, o;
          return (
            (i = t),
            (o = [
              {
                key: "run",
                value: function () {
                  this.draw(), requestAnimationFrame(this.run.bind(this));
                },
              },
              {
                key: "initialiseCanvas",
                value: function (t) {
                  var e = window.innerWidth - 2 * t,
                    i = window.innerHeight - 2 * t,
                    a = document.createElement("div");
                  (a.id = "container"), (a.style.padding = "".concat(t, "px"));
                  var o = document.createElement("canvas");
                  (o.width = e),
                    (o.height = i),
                    a.appendChild(o),
                    document.body.appendChild(a),
                    (this.canvas = document.querySelector("canvas")),
                    (this.context = o.getContext("2d")),
                    (n.g = {
                      canvas: this.canvas,
                      context: this.context,
                      WIDTH: e,
                      HEIGHT: i,
                    });
                },
              },
              {
                key: "initialiseMap",
                value: function () {
                  this.map = new a();
                },
              },
              {
                key: "initialiseUnits",
                value: function () {
                  for (var t = [], e = 0; e < 5; e++) {
                    var i = new h(
                      Math.random() * n.g.WIDTH,
                      Math.random() * n.g.HEIGHT
                    );
                    t.push(i);
                  }
                  this.units = t;
                },
              },
              {
                key: "initialisePlatoons",
                value: function () {
                  for (var t = [], i = 0; i < 5; i++) {
                    for (
                      var a = new e(
                          s.random(50, n.g.WIDTH - 50),
                          s.random(50, n.g.HEIGHT - 50)
                        ),
                        o = [],
                        r = 0;
                      r < Math.round(s.random(2, 9));
                      r++
                    )
                      o.push(
                        new h(a.x + 10 * s.gaussian(), a.y + 10 * s.gaussian())
                      );
                    t.push(new d(a.x, a.y, o));
                  }
                  this.platoons = t;
                },
              },
              {
                key: "draw",
                value: function () {
                  this.context.clearRect(0, 0, n.g.WIDTH, n.g.HEIGHT),
                    this.platoons.forEach(function (t) {
                      t.update(), t.checkEdges(), t.render();
                    });
                },
              },
            ]) && v(i.prototype, o),
            t
          );
        })(),
        g = n(379),
        m = n.n(g),
        w = n(795),
        b = n.n(w),
        T = n(569),
        M = n.n(T),
        k = n(565),
        z = n.n(k),
        E = n(216),
        H = n.n(E),
        I = n(589),
        C = n.n(I),
        O = n(426),
        R = {};
      (R.styleTagTransform = C()),
        (R.setAttributes = z()),
        (R.insert = M().bind(null, "head")),
        (R.domAPI = b()),
        (R.insertStyleElement = H()),
        m()(O.Z, R),
        O.Z && O.Z.locals && O.Z.locals,
        new p().run();
    })();
})();
