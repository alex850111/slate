! function (a, b, c) {
  "use strict";

  function d(a) {
    for (var b = {}, d = a.split("&"), e = d.length, f = [], g = 0; g < e; g++) {
      f = d[g].split("=", 2);
      try {
        f[0] = decodeURIComponent(f[0]), f[1] = decodeURIComponent(f[1])
      } catch (a) {}
      b[f[0]] === c ? b[f[0]] = f[1] : b[f[0]] += "," + f[1]
    }
    return b
  }

  function e() {
    var a, c, d = [],
      e = 0;
    for (a = b.getElementsByTagName("a"), c = a.length; e < c; e++) - 1 !== (" " + a[e].className).indexOf(" jsbin-") && d.push(a[e]);
    return d
  }

  function f(a) {
    for (var b = a;
      (b = b.previousSibling) && "PRE" !== b.nodeName;)
      if (b.getElementsByTagName && (b = b.getElementsByTagName("pre"), b.length)) {
        b = b[0];
        break
      } return b || (b = a.parentNode.getElementsByTagName("pre"), b.length ? b[0] : a.parentNode ? f(a.parentNode) : null)
  }

  function g(a) {
    var c, d, e = a.rel;
    return e && (c = b.getElementById(e.substring(1))) ? d = c[u] : (c = f(a)) && (d = c[u]), d
  }

  function h(a) {
    var b = a.split("<").length - 1,
      c = a.split("{").length - 1,
      d = a.split(".").length - 1;
    return b > c && b > d ? "html" : c > b && c > d ? "css" : "javascript"
  }

  function i(a) {
    var b = g(a),
      c = h(b),
      d = a.search.substring(1);
    "html" === c && -1 === b.toLowerCase().indexOf("<html") && (c = "code"), -1 === d.indexOf(c) ? d += "," + c + "=" + encodeURIComponent(b) : d = d.replace(c, c + "=" + encodeURIComponent(b)), a.search = "?" + d
  }

  function j(b) {
    var c = function (c) {
      c || (c = a.event), b.style.height = 1 * c.data.height + 2 + "px"
    };
    a[s]("message", c)
  }

  function k(a) {
    var b = a.cloneNode(),
      c = b.getAttribute("data-url");
    b.src = c.split("&")[0], b._src = c.split("&")[0], a.parentNode.replaceChild(b, a), j(b)
  }

  function l(a) {
    var c = b.createElement("iframe"),
      e = a.href.replace(/edit/, "embed");
    c.className = a.className, c.id = a.id, c.style.border = "1px solid #aaa";
    var f = d(a.search);
    c.style.width = f.width || "100%", c.style.minHeight = f.height || "300px", f.height && (c.style.maxHeight = f.height), q(a, 100) ? (c.src = e.split("&")[0], c._src = e.split("&")[0], j(c)) : (c.setAttribute("data-url", e), c.src = "https://jsbin.com/embed-holding", w.push(c)), a.parentNode.replaceChild(c, a)
  }

  function m() {
    for (var a = e(), b = 0, c = a.length, d = ""; b < c; b++) d = " " + a[b].className + " ", -1 !== d.indexOf(" jsbin-scoop ") ? i(a[b]) : -1 !== d.indexOf(" jsbin-embed ") && (a[b].className = a[b].className.replace(/jsbin\-embed/, ""), l(a[b]))
  }

  function n() {
    var b = v.clientWidth,
      c = a.innerWidth;
    return b < c ? c : b
  }

  function o() {
    var b = v.clientHeight,
      c = a.innerHeight;
    return b < c ? b : c
  }

  function p(a, b) {
    var c = {};
    return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c
  }

  function q(a, b) {
    var c = p(a.getBoundingClientRect(), b);
    return !!c && c.bottom >= 0 && c.right >= 0 && c.top <= o() && c.left <= n()
  }

  function r() {
    var a = 0,
      b = [];
    for (a = 0; a < w.length; a++) q(w[a], 400) && b.unshift({
      iframe: w[a],
      i: a
    });
    for (a = 0; a < b.length; a++) w.splice(b[a].i, 1), k(b[a].iframe)
  }
  var s = a.addEventListener ? "addEventListener" : "attachEvent";
  if (function () {
      for (var b = 0, c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !a.requestAnimationFrame; ++d) a.requestAnimationFrame = a[c[d] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[c[d] + "CancelAnimationFrame"] || a[c[d] + "CancelRequestAnimationFrame"];
      a.requestAnimationFrame || (a.requestAnimationFrame = function (c) {
        var d = (new Date).getTime(),
          e = Math.max(0, 16 - (d - b)),
          f = a.setTimeout(function () {
            c(d + e)
          }, e);
        return b = d + e, f
      }), a.cancelAnimationFrame || (a.cancelAnimationFrame = function (a) {
        clearTimeout(a)
      })
    }(), a.jsbinified === c) {
    a.jsbinified = !0;
    var t = function () {
        var a, c = [],
          d = b,
          e = d.documentElement.doScroll,
          f = (e ? /^loaded|^c/ : /^loaded|^i|^c/).test(d.readyState);
        return f || d.addEventListener("DOMContentLoaded", a = function () {
            for (d.removeEventListener("DOMContentLoaded", a), f = 1; a = c.shift();) a()
          }),
          function (a) {
            f ? setTimeout(a, 0) : c.push(a)
          }
      }(),
      u = b.createElement("i").innerText === c ? "textContent" : "innerText",
      v = b && b.documentElement,
      w = [];
    m(), t(function () {
      function b() {
        w.length && (cancelAnimationFrame(c), c = requestAnimationFrame(r))
      }
      m();
      var c = null;
      v[s]("scroll", b, !0), a[s]("scroll", b, !0)
    })
  }
}(this, document);
