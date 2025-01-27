/* 
 * Perspective ad v2.1 beta
 * @author Möbius <http://mobiusmobilemarketing.com/>
 * @author AL
 */



/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
; window.Modernizr = function(a, b, c){function z(a){j.cssText = a}function A(a, b){return z(m.join(a + ";") + (b || ""))}function B(a, b){return typeof a === b}function C(a, b){return!!~("" + a).indexOf(b)}function D(a, b){for (var d in a){var e = a[d]; if (!C(e, "-") && j[e] !== c)return b == "pfx"?e:!0}return!1}function E(a, b, d){for (var e in a){var f = b[a[e]]; if (f !== c)return d === !1?a[e]:B(f, "function")?f.bind(d || b):f}return!1}function F(a, b, c){var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" "); return B(b, "string") || B(b, "undefined")?D(e, b):(e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))}var d = "2.7.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function(a, c, d, e){var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body"); if (parseInt(d, 10))while (d--)j = b.createElement("div"), j.id = e?e[d]:h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m?l:n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n), g.style.overflow = k), !!i}, x = {}.hasOwnProperty, y; !B(x, "undefined") && !B(x.call, "undefined")?y = function(a, b){return x.call(a, b)}:y = function(a, b){return b in a && B(a.constructor.prototype[b], "undefined")}, Function.prototype.bind || (Function.prototype.bind = function(b){var c = this; if (typeof c != "function")throw new TypeError; var d = u.call(arguments, 1), e = function(){if (this instanceof e){var a = function(){}; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(u.call(arguments))); return Object(g) === g?g:f}return c.apply(b, d.concat(u.call(arguments)))}; return e}), q.csstransforms3d = function(){var a = !!F("perspective"); return a && "webkitPerspective"in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c){a = b.offsetLeft === 9 && b.offsetHeight === 3}), a}, q.csstransitions = function(){return F("transition")}; for (var G in q)y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v]?"":"no-") + v)); return e.addTest = function(a, b){if (typeof a == "object")for (var d in a)y(a, d) && e.addTest(d, a[d]); else{a = a.toLowerCase(); if (e[a] !== c)return e; b = typeof b == "function"?b():b, typeof f != "undefined" && f && (g.className += " " + (b?"":"no-") + a), e[a] = b}return e}, z(""), i = k = null, function(a, b){function l(a, b){var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)}function m(){var a = s.elements; return typeof a == "string"?a.split(" "):a}function n(a){var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b}function o(a, c, d){c || (c = b); if (k)return c.createElement(a); d || (d = n(c)); var g; return d.cache[a]?g = d.cache[a].cloneNode():f.test(a)?g = (d.cache[a] = d.createElem(a)).cloneNode():g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn?d.frag.appendChild(g):g}function p(a, c){a || (a = b); if (k)return a.createDocumentFragment(); c = c || n(a); var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; for (; e < g; e++)d.createElement(f[e]); return d}function q(a, b){b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c){return s.shivMethods?o(c, a, b):b.createElem(c)}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a){return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'}) + ");return n}")(s, b.frag)}function r(a){a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a}var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k; (function(){try{var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function(){b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"}()} catch (c){g = !0, k = !0}})(); var s = {elements:d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version:c, shivCSS:d.shivCSS !== !1, supportsUnknownElements:k, shivMethods:d.shivMethods !== !1, type:"default", shivDocument:r, createElement:o, createDocumentFragment:p}; a.html5 = s, r(b)}(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a){return D([a])}, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c){return b?F(a, b, c):F(a, "pfx")}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f?" js " + t.join(" "):""), e}(this, this.document), function(a, b, c){function d(a){return"[object Function]" == o.call(a)}function e(a){return"string" == typeof a}function f(){}function g(a){return!a || "loaded" == a || "complete" == a || "uninitialized" == a}function h(){var a = p.shift(); q = 1, a?a.t?m(function(){("c" == a.t?B.injectCss:B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)}, 0):(a(), h()):q = 0}function i(a, c, d, e, f, i, j){function k(b){if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)){"img" != a && m(function(){t.removeChild(l)}, 50); for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()}}var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t:d, s:c, e:f, a:i, x:j}; 1 === y[c] && (r = 1, y[c] = []), "object" == a?l.data = c:(l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function(){k.call(this, r)}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c]?(t.insertBefore(l, s?null:n), m(k, j)):y[c].push(l))}function j(a, b, c, d, f){return q = 0, b = b || "j", e(a)?i("c" == b?v:u, a, b, this.i++, c, d, f):(p.splice(this.i++, 0, a), 1 == p.length && h()), this}function k(){var a = B; return a.loader = {load:j, i:0}, a}var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s?l:n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r?"object":l?"script":"img", v = l?"script":u, w = Array.isArray || function(a){return"[object Array]" == o.call(a)}, x = [], y = {}, z = {timeout:function(a, b){return b.length && (a.timeout = b[0]), a}}, A, B; B = function(a){function b(a){var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url:c, origUrl:c, prefixes:a}, e, f, g; for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++)c = x[f](c); return c}function g(a, e, f, g, h){var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e)?e:e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead?i.instead(a, e, f, g, h):(y[i.url]?i.noexec = !0:y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift()?"c":c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function(){k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2})))}function h(a, b){function c(a, c){if (a){if (e(a))c || (j = function(){var a = [].slice.call(arguments); k.apply(this, a), l()}), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function(){var b = 0, c; for (c in a)a.hasOwnProperty(c) && b++; return b}(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j)?j = function(){var a = [].slice.call(arguments); k.apply(this, a), l()}:j[n] = function(a){return function(){var b = [].slice.call(arguments); a && a.apply(this, b), l()}}(k[n])), g(a[n], j, b, n, h))} else!c && l()}var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h?a.yep:a.nope, !!i), i && c(i)}var i, j, l = this.yepnope.loader; if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j)?g(j, 0, l, 0):w(j)?B(j):Object(j) === j && h(j, l); else Object(a) === a && h(a, l)}, B.addPrefix = function(a, b){z[a] = b}, B.addFilter = function(a){x.push(a)}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function(){b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j){var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d)k.setAttribute(o, d[o]); c = j?h:c || f, k.onreadystatechange = k.onload = function(){!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)}, m(function(){l || (l = 1, c(1))}, e), i?k.onload():n.parentNode.insertBefore(k, n)}, a.yepnope.injectCss = function(a, c, d, e, g, i){var e = b.createElement("link"), j, c = i?h:c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d)e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0))}}(this, document), Modernizr.load = function(){yepnope.apply(window, [].slice.call(arguments, 0))};

        /*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
         is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
         */
        var swfobject = function(){var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function(){var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y?/win/.test(Y):/win/.test(ah), ac = Y?/mac/.test(Y):/mac/.test(ah), af = /webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")):false, X = ! + "\v1", ag = [0, 0, 0], ab = null; if (typeof t.plugins != D && typeof t.plugins[S] == r){ab = t.plugins[S].description; if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)){T = true; X = false; ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1"); ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10); ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10); ag[2] = /[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10):0}} else{if (typeof O.ActiveXObject != D){try{var ad = new ActiveXObject(W); if (ad){ab = ad.GetVariable("$version"); if (ab){X = true; ab = ab.split(" ")[1].split(","); ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]}}} catch (Z){}}}return{w3:aa, pv:ag, wk:af, ie:X, win:ae, mac:ac}}(), k = function(){if (!M.w3){return}if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))){f()}if (!J){if (typeof j.addEventListener != D){j.addEventListener("DOMContentLoaded", f, false)}if (M.ie && M.win){j.attachEvent(x, function(){if (j.readyState == "complete"){j.detachEvent(x, arguments.callee); f()}}); if (O == top){(function(){if (J){return}try{j.documentElement.doScroll("left")} catch (X){setTimeout(arguments.callee, 0); return}f()})()}}if (M.wk){(function(){if (J){return}if (!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee, 0); return}f()})()}s(f)}}(); function f(){if (J){return}try{var Z = j.getElementsByTagName("body")[0].appendChild(C("span")); Z.parentNode.removeChild(Z)} catch (aa){return}J = true; var X = U.length; for (var Y = 0; Y < X; Y++){U[Y]()}}function K(X){if (J){X()} else{U[U.length] = X}}function s(Y){if (typeof O.addEventListener != D){O.addEventListener("load", Y, false)} else{if (typeof j.addEventListener != D){j.addEventListener("load", Y, false)} else{if (typeof O.attachEvent != D){i(O, "onload", Y)} else{if (typeof O.onload == "function"){var X = O.onload; O.onload = function(){X(); Y()}} else{O.onload = Y}}}}}function h(){if (T){V()} else{H()}}function V(){var X = j.getElementsByTagName("body")[0]; var aa = C(r); aa.setAttribute("type", q); var Z = X.appendChild(aa); if (Z){var Y = 0; (function(){if (typeof Z.GetVariable != D){var ab = Z.GetVariable("$version"); if (ab){ab = ab.split(" ")[1].split(","); M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]}} else{if (Y < 10){Y++; setTimeout(arguments.callee, 10); return}}X.removeChild(aa); Z = null; H()})()} else{H()}}function H(){var ag = o.length; if (ag > 0){for (var af = 0; af < ag; af++){var Y = o[af].id; var ab = o[af].callbackFn; var aa = {success:false, id:Y}; if (M.pv[0] > 0){var ae = c(Y); if (ae){if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)){w(Y, true); if (ab){aa.success = true; aa.ref = z(Y); ab(aa)}} else{if (o[af].expressInstall && A()){var ai = {}; ai.data = o[af].expressInstall; ai.width = ae.getAttribute("width") || "0"; ai.height = ae.getAttribute("height") || "0"; if (ae.getAttribute("class")){ai.styleclass = ae.getAttribute("class")}if (ae.getAttribute("align")){ai.align = ae.getAttribute("align")}var ah = {}; var X = ae.getElementsByTagName("param"); var ac = X.length; for (var ad = 0; ad < ac; ad++){if (X[ad].getAttribute("name").toLowerCase() != "movie"){ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")}}P(ai, ah, Y, ab)} else{p(ae); if (ab){ab(aa)}}}}} else{w(Y, true); if (ab){var Z = z(Y); if (Z && typeof Z.SetVariable != D){aa.success = true; aa.ref = Z}ab(aa)}}}}}function z(aa){var X = null; var Y = c(aa); if (Y && Y.nodeName == "OBJECT"){if (typeof Y.SetVariable != D){X = Y} else{var Z = Y.getElementsByTagName(r)[0]; if (Z){X = Z}}}return X}function A(){return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)}function P(aa, ab, X, Z){a = true; E = Z || null; B = {success:false, id:X}; var ae = c(X); if (ae){if (ae.nodeName == "OBJECT"){l = g(ae); Q = null} else{l = ae; Q = X}aa.id = R; if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)){aa.width = "310"}if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)){aa.height = "137"}j.title = j.title.slice(0, 47) + " - Flash Player Installation"; var ad = M.ie && M.win?"ActiveX":"PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title; if (typeof ab.flashvars != D){ab.flashvars += "&" + ac} else{ab.flashvars = ac}if (M.ie && M.win && ae.readyState != 4){var Y = C("div"); X += "SWFObjectNew"; Y.setAttribute("id", X); ae.parentNode.insertBefore(Y, ae); ae.style.display = "none"; (function(){if (ae.readyState == 4){ae.parentNode.removeChild(ae)} else{setTimeout(arguments.callee, 10)}})()}u(aa, ab, X)}}function p(Y){if (M.ie && M.win && Y.readyState != 4){var X = C("div"); Y.parentNode.insertBefore(X, Y); X.parentNode.replaceChild(g(Y), X); Y.style.display = "none"; (function(){if (Y.readyState == 4){Y.parentNode.removeChild(Y)} else{setTimeout(arguments.callee, 10)}})()} else{Y.parentNode.replaceChild(g(Y), Y)}}function g(ab){var aa = C("div"); if (M.win && M.ie){aa.innerHTML = ab.innerHTML} else{var Y = ab.getElementsByTagName(r)[0]; if (Y){var ad = Y.childNodes; if (ad){var X = ad.length; for (var Z = 0; Z < X; Z++){if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai, ag, Y){var X, aa = c(Y); if (M.wk && M.wk < 312){return X}if (aa){if (typeof ai.id == D){ai.id = Y}if (M.ie && M.win){var ah = ""; for (var ae in ai){if (ai[ae] != Object.prototype[ae]){if (ae.toLowerCase() == "data"){ag.movie = ai[ae]} else{if (ae.toLowerCase() == "styleclass"){ah += ' class="' + ai[ae] + '"'} else{if (ae.toLowerCase() != "classid"){ah += " " + ae + '="' + ai[ae] + '"'}}}}}var af = ""; for (var ad in ag){if (ag[ad] != Object.prototype[ad]){af += '<param name="' + ad + '" value="' + ag[ad] + '" />'}}aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>"; N[N.length] = ai.id; X = c(ai.id)} else{var Z = C(r); Z.setAttribute("type", q); for (var ac in ai){if (ai[ac] != Object.prototype[ac]){if (ac.toLowerCase() == "styleclass"){Z.setAttribute("class", ai[ac])} else{if (ac.toLowerCase() != "classid"){Z.setAttribute(ac, ai[ac])}}}}for (var ab in ag){if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie"){e(Z, ab, ag[ab])}}aa.parentNode.replaceChild(Z, aa); X = Z}}return X}function e(Z, X, Y){var aa = C("param"); aa.setAttribute("name", X); aa.setAttribute("value", Y); Z.appendChild(aa)}function y(Y){var X = c(Y); if (X && X.nodeName == "OBJECT"){if (M.ie && M.win){X.style.display = "none"; (function(){if (X.readyState == 4){b(Y)} else{setTimeout(arguments.callee, 10)}})()} else{X.parentNode.removeChild(X)}}}function b(Z){var Y = c(Z); if (Y){for (var X in Y){if (typeof Y[X] == "function"){Y[X] = null}}Y.parentNode.removeChild(Y)}}function c(Z){var X = null; try{X = j.getElementById(Z)} catch (Y){}return X}function C(X){return j.createElement(X)}function i(Z, X, Y){Z.attachEvent(X, Y); I[I.length] = [Z, X, Y]}function F(Z){var Y = M.pv, X = Z.split("."); X[0] = parseInt(X[0], 10); X[1] = parseInt(X[1], 10) || 0; X[2] = parseInt(X[2], 10) || 0; return(Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2]))?true:false}function v(ac, Y, ad, ab){if (M.ie && M.mac){return}var aa = j.getElementsByTagName("head")[0]; if (!aa){return}var X = (ad && typeof ad == "string")?ad:"screen"; if (ab){n = null; G = null}if (!n || G != X){var Z = C("style"); Z.setAttribute("type", "text/css"); Z.setAttribute("media", X); n = aa.appendChild(Z); if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0){n = j.styleSheets[j.styleSheets.length - 1]}G = X}if (M.ie && M.win){if (n && typeof n.addRule == r){n.addRule(ac, Y)}} else{if (n && typeof j.createTextNode != D){n.appendChild(j.createTextNode(ac + " {" + Y + "}"))}}}function w(Z, X){if (!m){return}var Y = X?"visible":"hidden"; if (J && c(Z)){c(Z).style.visibility = Y} else{v("#" + Z, "visibility:" + Y)}}function L(Y){var Z = /[\\\"<>\.;]/; var X = Z.exec(Y) != null; return X && typeof encodeURIComponent != D?encodeURIComponent(Y):Y}var d = function(){if (M.ie && M.win){window.attachEvent("onunload", function(){var ac = I.length; for (var ab = 0; ab < ac; ab++){I[ab][0].detachEvent(I[ab][1], I[ab][2])}var Z = N.length; for (var aa = 0; aa < Z; aa++){y(N[aa])}for (var Y in M){M[Y] = null}M = null; for (var X in swfobject){swfobject[X] = null}swfobject = null})}}(); return{registerObject:function(ab, X, aa, Z){if (M.w3 && ab && X){var Y = {}; Y.id = ab; Y.swfVersion = X; Y.expressInstall = aa; Y.callbackFn = Z; o[o.length] = Y; w(ab, false)} else{if (Z){Z({success:false, id:ab})}}}, getObjectById:function(X){if (M.w3){return z(X)}}, embedSWF:function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac){var X = {success:false, id:ah}; if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y){w(ah, false); K(function(){ae += ""; ag += ""; var aj = {}; if (af && typeof af === r){for (var al in af){aj[al] = af[al]}}aj.data = ab; aj.width = ae; aj.height = ag; var am = {}; if (ad && typeof ad === r){for (var ak in ad){am[ak] = ad[ak]}}if (Z && typeof Z === r){for (var ai in Z){if (typeof am.flashvars != D){am.flashvars += "&" + ai + "=" + Z[ai]} else{am.flashvars = ai + "=" + Z[ai]}}}if (F(Y)){var an = u(aj, am, ah); if (aj.id == ah){w(ah, true)}X.success = true; X.ref = an} else{if (aa && A()){aj.data = aa; P(aj, am, ah, ac); return} else{w(ah, true)}}if (ac){ac(X)}})} else{if (ac){ac(X)}}}, switchOffAutoHideShow:function(){m = false}, ua:M, getFlashPlayerVersion:function(){return{major:M.pv[0], minor:M.pv[1], release:M.pv[2]}}, hasFlashPlayerVersion:F, createSWF:function(Z, Y, X){if (M.w3){return u(Z, Y, X)} else{return undefined}}, showExpressInstall:function(Z, aa, X, Y){if (M.w3 && A()){P(Z, aa, X, Y)}}, removeSWF:function(X){if (M.w3){y(X)}}, createCSS:function(aa, Z, Y, X){if (M.w3){v(aa, Z, Y, X)}}, addDomLoadEvent:K, addLoadEvent:s, getQueryParamValue:function(aa){var Z = j.location.search || j.location.hash; if (Z){if (/\?/.test(Z)){Z = Z.split("?")[1]}if (aa == null){return L(Z)}var Y = Z.split("&"); for (var X = 0; X < Y.length; X++){if (Y[X].substring(0, Y[X].indexOf("=")) == aa){return L(Y[X].substring((Y[X].indexOf("=") + 1)))}}}return""}, expressInstallCallback:function(){if (a){var X = c(R); if (X && l){X.parentNode.replaceChild(l, X); if (Q){w(Q, true); if (M.ie && M.win){l.style.display = "block"}}if (E){E(B)}}a = false}}}}();
        function checStarterURL(starterContent) {
        return(starterContent.match(/\.(jpeg|jpg|gif|png)$/) !== null);
        }
function scrollY() {
return window.pageYOffset || docElem.scrollTop;
}


var globalStarter = [],
        perspectiveWrapper = $('.perspective-wrapper'),
        container = $('.container'),
        docElem = window.document.documentElement,
        support = Modernizr.csstransitions,
        transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'},
        transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ],
        docscroll = 0,
        contentWrapper = $('.wrapper');
        window.onGoa3Event = function (jQueryEvent, goa3Event) {

        if (goa3Event.type === 'invoke') {



        zoneInfo = $.grep(globalStarter, function (e) {
        return e.zoneId === goa3Event.zone.id;
        });
                if (zoneInfo.length) {
        zoneInfo = zoneInfo[0];
                zoneInfo.startZone = $('#start-' + zoneInfo.zoneId);
                zoneInfo.parentZoneID = 'perspective-' + zoneInfo.zoneId;
                zoneInfo.zoneWidth = goa3Event.zone.width;
                zoneInfo.zoneHeight = goa3Event.zone.height;
                if (zoneInfo.type == 'html'){
        window.goAdverticum3.onReady(function (goa3) {
        goa3.getjQuery()(zoneInfo.startZone).goa(zoneInfo.htmlId);
        });
        } else if (zoneInfo.type == 'image'){
        zoneInfo.startZone.html('<img src="' + zoneInfo.fileurl + '"/>');
        } else if (zoneInfo.type == 'flash'){
        adSwfUrl = zoneInfo.fileurl;
                zoneInfo.startZone.html('<span id="flash-' + zoneInfo.zoneId + '"/><span class="flash-overlay"></span>');
                swfobject.embedSWF(adSwfUrl, "flash-" + zoneInfo.zoneId, zoneInfo.zoneWidth, zoneInfo.zoneHeight, "9.0.0", null, null, null, {wmode: 'opaque'});
        } else {
        zoneInfo.startZone.html('<img src="' + zoneInfo.fileurl + '"/>');
        }

        $('<iframe src="" frameborder="0" scrolling="no" data-counter-zone-id="' + zoneInfo.zoneId + '" id="ctcounter-' + zoneInfo.zoneId + '"></iframe>').appendTo('body');
                if (zoneInfo.autoplay === 1) {

        autoCookie = zoneInfo.autoPlayInt * 24 / zoneInfo.autoPlayCount;
                cookieVal = "autoOpen-" + zoneInfo.zoneId;
                if ($.cookie(cookieVal) || zoneInfo.autoPlayCount === 0 || zoneInfo.autoPlayInt === 0) {
        zoneInfo.autoplayStart = 0;
                zoneInfo.autoplay = 0;
        } else {
        var cookieDate = new Date();
                cookieDate.setTime(cookieDate.getTime() + (autoCookie * 60 * 60 * 1000));
                $.cookie("autoOpen-" + zoneInfo.zoneId, true, {expires: cookieDate, path: '/'});
        }
        } else {
        zoneInfo.autoplayStart = 0;
        }
        zoneInfo.startZone.adPerspective({
        target: '#creative-' + zoneInfo.targetId,
                orientation: zoneInfo.targetOrientation,
                animSpeed: zoneInfo.animSpeed,
                autoplay: zoneInfo.autoplay,
                trigger: zoneInfo.trigger,
                autoplayClose: zoneInfo.autoplayClose,
                autoplayStart: zoneInfo.autoplayStart,
                opacity: zoneInfo.opacity,
                loaded: 0,
                zoneInfo: zoneInfo
        });
        }
        }
        };
        (function ($) {



        $.fn.bgLoaded = function (custom) {

        var self = this;
                // Default plugin settings
                var defaults = {
                afterLoaded: function () {
                this.addClass('bg-loaded');
                }
                };
                // Merge default and user settings
                var settings = $.extend({}, defaults, custom);
                // Loop through element
                self.each(function () {
                var $this = $(this),
                        bgImgs = $this.css('background-image').split(', ');
                        $this.data('loaded-count', 0);
                        $.each(bgImgs, function (key, value) {
                        var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                                $('<img/>').attr('src', img).load(function () {
                        $(this).remove(); // prevent memory leaks
                                $this.data('loaded-count', $this.data('loaded-count') + 1);
                                if ($this.data('loaded-count') >= bgImgs.length) {
                        settings.afterLoaded.call($this);
                        }
                        });
                        });
                });
        };
                $.fn.adPerspective = function (options) {

                $('body').on('click', '.ad-perspective-container .link', function(){
                console.log('Nagy kép CT');
                });
                        var zoneSettings = $.extend({}, $.fn.adPerspective.defaults, options);
                        zoneSettings.zoneInfo.targetIframe = $("iframe[data-counter-zone-id='" + zoneSettings.zoneInfo.zoneId + "']");
                        if (zoneSettings.autoplay === 1) {
                setTimeout(function () {
                adOpenEvent(zoneSettings);
                }, zoneSettings.zoneInfo.autoplayStart);
                }

                if (zoneSettings.trigger === 'mouseenter') {
                $(this).append('<span id="hover-countdown" data-count="3"></span>');
                        var intervalID;
                        var count = 3;
                        function targetHover() {
                        count = count - 1;
                                if (count === 0) {
                        adOpenEvent(zoneSettings);
                                count = 3;
                                $('#hover-countdown').removeClass('counting');
                        }
                        $('#hover-countdown').attr('data-count', count);
                        }
                ;
                        this.hover(function () {
                        $('#hover-countdown').addClass('counting');
                                intervalID = setInterval(targetHover, 1000);
                        },
                                function () {
                                count = 3;
                                        $('#hover-countdown').removeClass('counting');
                                        $('#hover-countdown').attr('data-count', count);
                                        window.clearInterval(intervalID);
                                });
                } else if (zoneSettings.trigger === 'click') {

                this.on('click', function () {
                adOpenEvent(zoneSettings);
                });
                }


                };
                function countCt(ctUrl, targetIframe) {
                targetIframe.attr('src', '');
                        targetIframe.attr('src', ctUrl);
                        console.log('Mérés vége');
                }

        function closePerspectiveEvent(e) {
        e.preventDefault();
                if (e.target.className === 'container') {
        console.log('close-container');
                countCt(e.data.ctUrl, e.data.targetIframe);
        } else if (e.delegateTarget.className === 'close-popup' && e.target.offsetParent.offsetParent.id === 'creative-' + e.data.targetId) {
        console.log('close-button');
                countCt(e.data.ctUrl, e.data.targetIframe);
        }
        closePerspective();
        }
        function adOpenEvent(zoneSettings) {

        function loadTargetZone(zoneInfo) {

        var checkExist = setInterval(function () {
        if ($('#creative-' + zoneInfo.targetId).length) {
        zoneSettings.loaded = 1;
                backgroundImageUrl = $(zoneSettings.target).data('background');
                $(zoneSettings.target).attr('data-orientation', zoneSettings.orientation).attr('data-effect', zoneSettings.effect).addClass('active-template').show();
                perspectiveWrapper.attr('data-speed', zoneSettings.animSpeed);
                $(zoneSettings.target).css('background-image', 'url(' + backgroundImageUrl + ')');
                $(zoneSettings.target).bgLoaded({
        afterLoaded: function () {
        openCycle();
                $(this).addClass('bg-loaded');
        }
        });
                clearInterval(checkExist);
        }
        }, 100);
        }

        function openCycle() {

        if (zoneSettings.zoneInfo.autoplay === 1) {
        console.log('open-auto');
                countCt(zoneSettings.zoneInfo.ctAutoOpen, zoneSettings.zoneInfo.targetIframe);
                zoneSettings.zoneInfo.autoplay = 0;
                setTimeout(function () {
                closePerspective();
                }, zoneSettings.zoneInfo.autoplayClose);
        } else {
        console.log('open-click');
                countCt(zoneSettings.zoneInfo.ctOpen, zoneSettings.zoneInfo.targetIframe);
        }

        $(zoneSettings.target).addClass('ad-active');
                if ($(zoneSettings.target).data('type') === 'video'){

        var videoCreative = document.getElementById("video-" + zoneSettings.zoneInfo.targetId);
                videoCreative.muted = "muted";
                videoCreative.onplay = function() {
                console.log('video-play');
                        countCt(zoneSettings.zoneInfo.ctVideoStart, zoneSettings.zoneInfo.targetIframe);
                };
                videoCreative.onpause = function() {
                console.log('video-stop');
                        countCt(zoneSettings.zoneInfo.ctVideoStop, zoneSettings.zoneInfo.targetIframe);
                };
                videoCreative.onended = function() {
                console.log('video-end');
                        countCt(zoneSettings.zoneInfo.ctVideoEnd, zoneSettings.zoneInfo.targetIframe);
                };
                
                  $(videoCreative).click(function(e){

        // get click position 
        var clickY = (e.pageY - $(this).offset().top);
        var height = parseFloat( $(this).height() );

        // avoids interference with controls
        if(clickY > 0.82*height) return;

        // toggles play / pause
        this.paused ? this.play() : this.pause();

    });
                
        } else if ($(zoneSettings.target).data('type') === 'gallery'){

        }



        docscroll = scrollY();
                contentWrapper.css('top', docscroll * - 1 + 'px');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                perspectiveWrapper.addClass('modalview').addClass('advorient-' + zoneSettings.orientation);
                setTimeout(function () {
                perspectiveWrapper.addClass('animate');
                }, 25);
                setTimeout(function () {
                container.css('opacity', zoneSettings.opacity);
                }, 60);
                container.on('click.container', {
                ctUrl: zoneSettings.zoneInfo.ctClose,
                        targetIframe: zoneSettings.zoneInfo.targetIframe,
                        zoneId: zoneSettings.zoneInfo.zoneId,
                        targetId: zoneSettings.zoneInfo.targetId
                }, closePerspectiveEvent);
                $('.close-popup').on('click.close', {
        ctUrl: zoneSettings.zoneInfo.ctCloseBtn,
                targetIframe: zoneSettings.zoneInfo.targetIframe,
                zoneId: zoneSettings.zoneInfo.zoneId,
                targetId: zoneSettings.zoneInfo.targetId
        }, closePerspectiveEvent);
        }


        window.goAdverticum3.onReady(function (goa3) {
        if (zoneSettings.loaded !== 0) {
        $("#" + zoneSettings.zoneInfo.parentZoneID).remove();
        }
        $("#perspective").append("<div id='" + zoneSettings.zoneInfo.parentZoneID + "'></div>");
                goa3.getjQuery()('#' + zoneSettings.zoneInfo.parentZoneID).goa(zoneSettings.zoneInfo.targetId, {}, loadTargetZone(zoneSettings.zoneInfo));
        });
        }


        function closePerspective() {
        if (perspectiveWrapper.hasClass('animate')) {
        var onEndTransFn = function (event) {
        if (support && (event.target.className !== 'container' || event.originalEvent.propertyName.indexOf('transform') === - 1))
                return;
                $(this).off(transEndEventName, onEndTransFn);
                perspectiveWrapper.attr('class', 'perspective-wrapper');
                document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                contentWrapper.css('top', '0px');
        };
                if (support) {
        perspectiveWrapper.on(transEndEventName, onEndTransFn);
        } else {
        onEndTransFn.call();
        }

        $('video').each(function() {
        $(this).get(0).pause();
        });
                container.css('opacity', 1);
                perspectiveWrapper.removeClass('animate');
                $('.ad-perspective-container').removeClass('ad-active');
                container.off('click.container');
                $('.close-popup').off('click.close');
        }


        }

        $.fn.adPerspective.defaults = {
        trigger: 'click',
                orientation: 'bottom',
                effect: 'slide',
                autoplay: false,
                autoplayStart: 0,
                autoplayClose: 0,
                animSpeed: 500,
                opacity: 1,
                loaded: 0
        };
        }(jQuery));