
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireada9"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireada9"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("kKW7D", function(module, exports) {

$parcel$export(module.exports, "mount", () => $f1c53064d8f95aab$export$186d02efde07ef98);
$parcel$export(module.exports, "unmount", () => $f1c53064d8f95aab$export$121e2d597d222bad);
$parcel$export(module.exports, "registerDirective", () => $f1c53064d8f95aab$export$bb39ea162039bcd5);
$parcel$export(module.exports, "jsx", () => $f1c53064d8f95aab$export$34b9dba7ce09269b);
$parcel$export(module.exports, "setRef", () => $f1c53064d8f95aab$export$4bb192c7cacf928f);
$parcel$export(module.exports, "jsxs", () => $f1c53064d8f95aab$export$25062201e9e25d76);
$parcel$export(module.exports, "jsxRef", () => $f1c53064d8f95aab$export$13f6ee1f6c622ff7);
$parcel$export(module.exports, "Fragment", () => $f1c53064d8f95aab$export$ffb0004e005737fa);

var $6lZEy = parcelRequire("6lZEy");

var $6dcv9 = parcelRequire("6dcv9");

var $hM6VJ = parcelRequire("hM6VJ");

var $cQSoF = parcelRequire("cQSoF");
const $f1c53064d8f95aab$export$45118db60eed6f35 = (n)=>!!n?.[Symbol.metadata]?.[0, $cQSoF.$], $f1c53064d8f95aab$export$186d02efde07ef98 = (n, t)=>n((0, $cQSoF.j)(t) ? (0, $6dcv9.appendChild)(t) : t), $f1c53064d8f95aab$export$185802fd694ee1f5 = (n)=>{
    const t = (0, $6dcv9.fragment)();
    return $f1c53064d8f95aab$export$186d02efde07ef98(n, t), 1 === t.childNodes.length ? t.firstChild : t;
}, $f1c53064d8f95aab$export$121e2d597d222bad = (n)=>{
    const [t, , e] = n;
    t(), (0, $6dcv9.removeRange)(e);
}, $f1c53064d8f95aab$var$L = (t, r)=>{
    if ((0, $cQSoF.j)(t)) return r(t), $cQSoF.n;
    if ((0, $cQSoF.g)(t) && !(0, $6lZEy.isSubscribable)(t)) return $f1c53064d8f95aab$export$186d02efde07ef98(t, r)[0];
    if ((0, $cQSoF.o)(t)) {
        const n = [];
        return (0, $cQSoF.f)(t, (t)=>(0, $cQSoF.k)(n, $f1c53064d8f95aab$var$L(t, r))), (0, $cQSoF.h)(n);
    }
    return (0, $6lZEy.$text)`${t}`(r);
}, $f1c53064d8f95aab$var$N = (n, t)=>{
    let e = null, r = null;
    const s = [];
    return (0, $cQSoF.k)(s, $f1c53064d8f95aab$var$L(n, (n)=>{
        const s = (0, $cQSoF.q)(n);
        return e || (e = s ? n.firstChild : n), r = s ? n.lastChild : n, t(n);
    })), [
        s,
        ()=>e && r ? [
                e,
                r
            ] : void 0
    ];
}, $f1c53064d8f95aab$var$P = (n, t)=>{
    const e = [];
    (0, $hM6VJ.enterEffectScope)(e);
    const r = n(t);
    return (0, $hM6VJ.quitEffectScope)(), (n)=>{
        const t = $f1c53064d8f95aab$export$186d02efde07ef98(r, n), [s, ...o] = t, i = [];
        return (0, $cQSoF.k)(i, s), (0, $cQSoF.f)(e, (n)=>{
            const t = n();
            t && (0, $cQSoF.p)(i, t);
        }), [
            (0, $cQSoF.h)(i),
            ...o
        ];
    };
};
let $f1c53064d8f95aab$var$R = (0, $6dcv9.element);
const $f1c53064d8f95aab$var$S = {}, $f1c53064d8f95aab$var$W = {}, $f1c53064d8f95aab$export$bb39ea162039bcd5 = (n)=>{
    const { prefix: t } = n;
    return n.requireParams || ($f1c53064d8f95aab$var$S[t] = n), $f1c53064d8f95aab$var$W[t] = n, ()=>{
        delete $f1c53064d8f95aab$var$S[t], delete $f1c53064d8f95aab$var$W[t];
    };
}, $f1c53064d8f95aab$export$34b9dba7ce09269b = (e, r, ...s)=>{
    if (r ??= {}, s.length && (r.children = 1 === s.length ? s[0] : s), "string" == typeof e) return (s)=>{
        let a = $f1c53064d8f95aab$var$R;
        const u = "svg" === e, m = "foreignObject" === e, j = "math" === e, w = u || m || j, { children: C, ref: x, ...k } = r;
        let q;
        u && ($f1c53064d8f95aab$var$R = (0, $6dcv9.svg)), j && ($f1c53064d8f95aab$var$R = (0, $6dcv9.mathml)), m && ($f1c53064d8f95aab$var$R = (0, $6dcv9.element)), (0, $cQSoF.i)(x) ? q = x : (q = $f1c53064d8f95aab$var$R(e, "is" in r && (0, $cQSoF.e)(r.is) ? {
            is: r.is
        } : void 0), x && $f1c53064d8f95aab$export$4bb192c7cacf928f(x, q));
        const [E] = null != C ? $f1c53064d8f95aab$var$N(C, (0, $6dcv9.appendChild)(q)) : [
            []
        ];
        for(const e in k){
            const r = k[e];
            let s = $f1c53064d8f95aab$var$S[e], i = null;
            if (!s) {
                const n = e.indexOf(":");
                if (n > 0) {
                    const t = e.slice(0, n);
                    s = $f1c53064d8f95aab$var$W[t], s && (i = e.slice(n + 1));
                }
            }
            if (s) {
                const n = s.apply(q, i, r);
                n && (0, $cQSoF.p)(E, n);
            } else if ((0, $6lZEy.isSubscribable)(r)) (0, $cQSoF.p)(E, (0, $6lZEy.$attr)(q, e, r));
            else {
                if (e.startsWith("on")) {
                    const n = e[2];
                    if ("A" <= n && n <= "Z") {
                        const n = e.slice(2).toLowerCase();
                        if ((0, $cQSoF.g)(r)) {
                            (0, $cQSoF.p)(E, (0, $cQSoF._)(q, n, r));
                            continue;
                        }
                        if ((0, $cQSoF.m)(O = r) && "handleEvent" in O && (0, $cQSoF.g)(O.handleEvent)) {
                            (0, $cQSoF.p)(E, (0, $cQSoF._)(q, n, r, r.options));
                            continue;
                        }
                    }
                }
                (0, $6dcv9.attr)(q, e, r);
            }
        }
        var O;
        return s(q), w && ($f1c53064d8f95aab$var$R = a), [
            (0, $cQSoF.h)(E),
            q,
            ()=>[
                    q,
                    q
                ]
        ];
    };
    if ($f1c53064d8f95aab$export$45118db60eed6f35(e)) return (n)=>new e(r).mount(n);
    if (e.customRef) return $f1c53064d8f95aab$var$P(e, r);
    const { ref: a, ...u } = r, m = $f1c53064d8f95aab$var$P(e, u);
    return a ? (n)=>{
        const t = $f1c53064d8f95aab$export$186d02efde07ef98(m, n);
        return $f1c53064d8f95aab$export$4bb192c7cacf928f(a, t[1]), t;
    } : m;
}, $f1c53064d8f95aab$export$25062201e9e25d76 = $f1c53064d8f95aab$export$34b9dba7ce09269b, $f1c53064d8f95aab$export$dda1d9f60106f0e9 = $f1c53064d8f95aab$export$34b9dba7ce09269b, $f1c53064d8f95aab$export$c8a8987d4410bf2d = $f1c53064d8f95aab$export$34b9dba7ce09269b, $f1c53064d8f95aab$export$13f6ee1f6c622ff7 = ()=>({
        current: null
    }), $f1c53064d8f95aab$export$4bb192c7cacf928f = (n, t)=>{
    n.current = t;
}, $f1c53064d8f95aab$export$ffb0004e005737fa = ({ children: n })=>(t)=>{
        const e = (0, $6dcv9.fragment)(), [s, o] = n ? $f1c53064d8f95aab$var$N(n, (0, $6dcv9.appendChild)(e)) : [
            [],
            (0, $cQSoF.n)
        ];
        return t(e), [
            (0, $cQSoF.h)(s),
            void 0,
            o
        ];
    };

});
parcelRegister("6lZEy", function(module, exports) {

$parcel$export(module.exports, "subscribe", () => $4a04873f82353e72$export$ec068583843480e7);
$parcel$export(module.exports, "isSubscribable", () => $4a04873f82353e72$export$afa9d06a32b253a4);
$parcel$export(module.exports, "isWritable", () => $4a04873f82353e72$export$cc2b2f0230460456);
$parcel$export(module.exports, "configureBinding", () => $4a04873f82353e72$export$62343fc05d20946e);
$parcel$export(module.exports, "$text", () => $4a04873f82353e72$export$68028ad1cb93a754);
$parcel$export(module.exports, "$attr", () => $4a04873f82353e72$export$2020da9baeb580d2);
$parcel$export(module.exports, "$class", () => $4a04873f82353e72$export$dcd5e058b8249988);
$parcel$export(module.exports, "$style", () => $4a04873f82353e72$export$2569a573ed0a661b);
$parcel$export(module.exports, "$var", () => $4a04873f82353e72$export$fb1263f5e78aa11b);
$parcel$export(module.exports, "$model", () => $4a04873f82353e72$export$5d47105054d22508);

var $6dcv9 = parcelRequire("6dcv9");

var $cQSoF = parcelRequire("cQSoF");
const $4a04873f82353e72$var$h = (t, e)=>(0, $cQSoF.n);
let $4a04873f82353e72$export$ec068583843480e7 = $4a04873f82353e72$var$h;
const $4a04873f82353e72$var$f = (t)=>(0, $cQSoF.m)(t);
let $4a04873f82353e72$export$afa9d06a32b253a4 = $4a04873f82353e72$var$f;
const $4a04873f82353e72$var$d = (t, e)=>{};
let $4a04873f82353e72$export$635e15bbd66f01ea = $4a04873f82353e72$var$d;
const $4a04873f82353e72$var$b = (t)=>(0, $cQSoF.m)(t);
let $4a04873f82353e72$export$cc2b2f0230460456 = $4a04873f82353e72$var$b;
const $4a04873f82353e72$export$62343fc05d20946e = (t, e, s, n)=>{
    $4a04873f82353e72$export$ec068583843480e7 = t, $4a04873f82353e72$export$afa9d06a32b253a4 = e, $4a04873f82353e72$export$635e15bbd66f01ea = s, $4a04873f82353e72$export$cc2b2f0230460456 = n;
}, $4a04873f82353e72$export$f471722fe1d150c3 = ()=>{
    $4a04873f82353e72$export$ec068583843480e7 = $4a04873f82353e72$var$h, $4a04873f82353e72$export$afa9d06a32b253a4 = $4a04873f82353e72$var$f, $4a04873f82353e72$export$635e15bbd66f01ea = $4a04873f82353e72$var$d, $4a04873f82353e72$export$cc2b2f0230460456 = $4a04873f82353e72$var$b;
}, $4a04873f82353e72$export$27adafa99d6409e = (e, s)=>$4a04873f82353e72$export$ec068583843480e7(s, (s)=>(0, $6dcv9.content)(e, s)), $4a04873f82353e72$export$68028ad1cb93a754 = (t, ...s)=>{
    const n = s.length;
    return (r)=>{
        const o = [], i = [], u = ()=>{
            const t = i.join("");
            if (t) {
                const s = (0, $6dcv9.text)(t);
                r(s);
            }
            i.length = 0;
        };
        for(let c = 0; c < n; c++){
            (0, $cQSoF.p)(i, t[c]);
            const n = s[c];
            if ($4a04873f82353e72$export$afa9d06a32b253a4(n)) {
                u();
                const t = (0, $6dcv9.text)("");
                (0, $cQSoF.p)(o, $4a04873f82353e72$export$ec068583843480e7(n, (e)=>t.data = `${e}`)), r(t);
            } else (0, $cQSoF.p)(i, `${n}`);
        }
        return (0, $cQSoF.p)(i, t.at(-1)), u(), (0, $cQSoF.h)(o);
    };
}, $4a04873f82353e72$export$2020da9baeb580d2 = (t, e, n)=>$4a04873f82353e72$export$ec068583843480e7(n, (n)=>(0, $6dcv9.attr)(t, e, n)), $4a04873f82353e72$export$dcd5e058b8249988 = (t, e, s)=>$4a04873f82353e72$export$ec068583843480e7(s, (s)=>(0, $6dcv9.className)(t, e, s)), $4a04873f82353e72$export$2569a573ed0a661b = (t, e, s)=>$4a04873f82353e72$export$ec068583843480e7(s, (s)=>(0, $6dcv9.style)(t, e, s)), $4a04873f82353e72$export$fb1263f5e78aa11b = (t, e, s)=>$4a04873f82353e72$export$ec068583843480e7(s, (s)=>(0, $6dcv9.cssVar)(t, e, s)), $4a04873f82353e72$var$D = (0, $cQSoF.t)(HTMLInputElement), $4a04873f82353e72$var$H = {
    string: "value",
    boolean: "checked",
    number: "valueAsNumber",
    date: "valueAsDate"
}, $4a04873f82353e72$var$I = {
    as: "string",
    on: "input"
}, $4a04873f82353e72$var$L = {
    on: "change"
}, $4a04873f82353e72$var$M = "value";
class $4a04873f82353e72$var$T {
    #t;
    #e;
    constructor(t, e){
        this.#t = t, this.#e = e;
    }
    handleEvent(t) {
        const e = t.target;
        this.#e ? $4a04873f82353e72$export$635e15bbd66f01ea(this.#t, e[this.#e]) : $4a04873f82353e72$export$635e15bbd66f01ea(this.#t, e.value);
    }
}
const $4a04873f82353e72$export$5d47105054d22508 = (t, e, s)=>{
    const n = $4a04873f82353e72$var$D(t), r = n ? {
        ...$4a04873f82353e72$var$I,
        ...s
    } : {
        ...$4a04873f82353e72$var$L,
        ...s
    }, { as: o, on: a } = r, c = n ? $4a04873f82353e72$var$H[o] ?? $4a04873f82353e72$var$M : $4a04873f82353e72$var$M, u = n && "radio" === t.type, l = $4a04873f82353e72$export$ec068583843480e7(e, u ? (e)=>{
        t.checked = e === t.value;
    } : (e)=>{
        if (n && "number" === o) {
            if (isNaN(e)) return void (t.value = "");
            if (e === t[c]) return;
        }
        t[c] = e;
    }), p = (0, $cQSoF._)(t, a, new $4a04873f82353e72$var$T(e, n && c));
    return ()=>{
        p(), l();
    };
};

});
parcelRegister("6dcv9", function(module, exports) {

$parcel$export(module.exports, "element", () => $485da77d722bcd08$export$8454457683f90105);
$parcel$export(module.exports, "text", () => $485da77d722bcd08$export$6f093cfa640b7166);
$parcel$export(module.exports, "svg", () => $485da77d722bcd08$export$7ed1367e7fa1ad68);
$parcel$export(module.exports, "mathml", () => $485da77d722bcd08$export$47d5b44d225be5b4);
$parcel$export(module.exports, "fragment", () => $485da77d722bcd08$export$f00aeb236b6f05af);
$parcel$export(module.exports, "clone", () => $485da77d722bcd08$export$9cd59f9826255e47);
$parcel$export(module.exports, "attr", () => $485da77d722bcd08$export$7aabe8b3a840d2fd);
$parcel$export(module.exports, "content", () => $485da77d722bcd08$export$a7db06668cad9adb);
$parcel$export(module.exports, "className", () => $485da77d722bcd08$export$2913c0c0b5623090);
$parcel$export(module.exports, "style", () => $485da77d722bcd08$export$1d567c320f4763bc);
$parcel$export(module.exports, "cssVar", () => $485da77d722bcd08$export$8b4981022bd80a4e);
$parcel$export(module.exports, "listen", () => $485da77d722bcd08$export$63174c828edd6ff8);
$parcel$export(module.exports, "appendChild", () => $485da77d722bcd08$export$1b8e57c9ea42f1d2);
$parcel$export(module.exports, "before", () => $485da77d722bcd08$export$1c4c1e3098bf5ebe);
$parcel$export(module.exports, "moveRange", () => $485da77d722bcd08$export$71fab7eb76d05d5a);
$parcel$export(module.exports, "removeRange", () => $485da77d722bcd08$export$df89bc4a93f2927c);

var $cQSoF = parcelRequire("cQSoF");
const $485da77d722bcd08$export$8454457683f90105 = (0, $cQSoF.d).createElement.bind((0, $cQSoF.d)), $485da77d722bcd08$export$6f093cfa640b7166 = (0, $cQSoF.d).createTextNode.bind((0, $cQSoF.d)), $485da77d722bcd08$export$7ed1367e7fa1ad68 = (t)=>(0, $cQSoF.d).createElementNS("http://www.w3.org/2000/svg", t), $485da77d722bcd08$export$47d5b44d225be5b4 = (t)=>(0, $cQSoF.d).createElementNS("http://www.w3.org/1998/Math/MathML", t), $485da77d722bcd08$export$f00aeb236b6f05af = (0, $cQSoF.d).createDocumentFragment.bind((0, $cQSoF.d)), $485da77d722bcd08$export$9cd59f9826255e47 = (e)=>e.cloneNode(!0), $485da77d722bcd08$export$7aabe8b3a840d2fd = (e, t, r)=>null == r || !1 === r ? e.removeAttribute(t) : e.setAttribute(t, `${r}`), $485da77d722bcd08$export$a7db06668cad9adb = (e, t)=>e.textContent = `${t}`, $485da77d722bcd08$export$2913c0c0b5623090 = (e, t, r)=>e.classList.toggle(t, r), $485da77d722bcd08$export$1d567c320f4763bc = (e, t, r)=>{
    const n = e.style;
    t in n ? n[t] = r : n.setProperty(t, r);
}, $485da77d722bcd08$export$8b4981022bd80a4e = (e, t, r)=>{
    const n = `--${t}`;
    e.style.setProperty(n, r);
}, $485da77d722bcd08$export$3d8c2f653ac9d0b9 = (0, $cQSoF.d).querySelector.bind((0, $cQSoF.d)), $485da77d722bcd08$export$fe324b23443c13e2 = (r)=>(0, $cQSoF.a)((0, $cQSoF.d).querySelectorAll(r)), $485da77d722bcd08$export$63174c828edd6ff8 = (e)=>(t, n, o)=>(0, $cQSoF._)(e, t, n, o), $485da77d722bcd08$export$10b1921597150314 = (e)=>(t, r)=>(0, $cQSoF.b)(e, t, r), $485da77d722bcd08$export$1b8e57c9ea42f1d2 = (e)=>(t)=>e.appendChild(t), $485da77d722bcd08$export$1c4c1e3098bf5ebe = (e)=>(t)=>e.parentNode.insertBefore(t, e), $485da77d722bcd08$export$742acabee3dd6465 = (e)=>(t)=>e.after(t), $485da77d722bcd08$export$4cd63e4f35485b12 = (e)=>{
    const t = (0, $cQSoF.c)(), r = (0, $cQSoF.c)(), n = $485da77d722bcd08$export$742acabee3dd6465(e);
    return n(t), n(r), $485da77d722bcd08$export$1c4c1e3098bf5ebe(r);
}, $485da77d722bcd08$export$cd7f480d6b8286c3 = (e)=>e.parentNode?.removeChild(e), $485da77d722bcd08$export$71fab7eb76d05d5a = (e, t, r)=>{
    const n = [];
    for(let r = e; r && r !== t; r = r.nextSibling)(0, $cQSoF.p)(n, r);
    t && (0, $cQSoF.p)(n, t), (0, $cQSoF.f)(n, r);
}, $485da77d722bcd08$export$df89bc4a93f2927c = (e)=>{
    const t = e();
    t && $485da77d722bcd08$export$71fab7eb76d05d5a(t[0], t[1], $485da77d722bcd08$export$cd7f480d6b8286c3);
}, $485da77d722bcd08$export$9bb0e144ba4929ca = (e, t)=>{
    for(let r = 0, n = t.length; r < n && (e = e.children[t[r]]); r++);
    return e;
};

});
parcelRegister("cQSoF", function(module, exports) {

$parcel$export(module.exports, "v", () => $95b4896f740279dc$export$90a7f3efeed30595);
$parcel$export(module.exports, "s", () => $95b4896f740279dc$export$2408f22a0fab9ae5);
$parcel$export(module.exports, "p", () => $95b4896f740279dc$export$ffb5f4729a158638);
$parcel$export(module.exports, "a", () => $95b4896f740279dc$export$407448d2b89b1813);
$parcel$export(module.exports, "n", () => $95b4896f740279dc$export$7ccc53e8f1e7dfc5);
$parcel$export(module.exports, "y", () => $95b4896f740279dc$export$4a5767248b18ef41);
$parcel$export(module.exports, "h", () => $95b4896f740279dc$export$dda1d9f60106f0e9);
$parcel$export(module.exports, "e", () => $95b4896f740279dc$export$f1e1789686576879);
$parcel$export(module.exports, "g", () => $95b4896f740279dc$export$39b482c5e57630a8);
$parcel$export(module.exports, "m", () => $95b4896f740279dc$export$953cecd6e717a553);
$parcel$export(module.exports, "o", () => $95b4896f740279dc$export$ae1af26003f05816);
$parcel$export(module.exports, "t", () => $95b4896f740279dc$export$625550452a3fa3ec);
$parcel$export(module.exports, "u", () => $95b4896f740279dc$export$3b14a55fb2447963);
$parcel$export(module.exports, "r", () => $95b4896f740279dc$export$43caf9889c228507);
$parcel$export(module.exports, "f", () => $95b4896f740279dc$export$2d1720544b23b823);
$parcel$export(module.exports, "d", () => $95b4896f740279dc$export$4368d992c4eafac0);
$parcel$export(module.exports, "c", () => $95b4896f740279dc$export$db3b6bfb95261072);
$parcel$export(module.exports, "w", () => $95b4896f740279dc$export$efccba1c4a2ef57b);
$parcel$export(module.exports, "k", () => $95b4896f740279dc$export$342063e11d6c3cad);
$parcel$export(module.exports, "_", () => $95b4896f740279dc$export$71511d61b312f219);
$parcel$export(module.exports, "b", () => $95b4896f740279dc$export$8b22cf2602fb60ce);
$parcel$export(module.exports, "j", () => $95b4896f740279dc$export$35e795649ee09318);
$parcel$export(module.exports, "q", () => $95b4896f740279dc$export$9e5f44173e64f162);
$parcel$export(module.exports, "i", () => $95b4896f740279dc$export$23f2a1d2818174ef);
$parcel$export(module.exports, "C", () => $95b4896f740279dc$export$e7094788287c5e9b);
$parcel$export(module.exports, "x", () => $95b4896f740279dc$export$d141bba7fdc215a3);
$parcel$export(module.exports, "z", () => $95b4896f740279dc$export$df995fae86a55f06);
$parcel$export(module.exports, "$", () => $95b4896f740279dc$export$3d8c2f653ac9d0b9);
$parcel$export(module.exports, "l", () => $95b4896f740279dc$export$882b5998b3b9117c);
const $95b4896f740279dc$export$90a7f3efeed30595 = Object.assign, $95b4896f740279dc$export$ef35774e6d314e91 = (e)=>{
    let t, s = !1;
    return ()=>s ? t : (s = !0, t = e());
}, $95b4896f740279dc$export$2408f22a0fab9ae5 = ()=>{
    const e = [];
    return [
        (t)=>$95b4896f740279dc$export$ffb5f4729a158638(e, t),
        ()=>{
            $95b4896f740279dc$var$o(e);
        },
        ()=>e.at(-1)
    ];
}, $95b4896f740279dc$export$407448d2b89b1813 = Array.from, $95b4896f740279dc$export$ffb5f4729a158638 = (e, t)=>e.push(t), $95b4896f740279dc$var$o = (e)=>e.pop(), $95b4896f740279dc$export$7ccc53e8f1e7dfc5 = ()=>{}, $95b4896f740279dc$export$4a5767248b18ef41 = (e)=>{
    for(let t = e.length - 1; t >= 0; t--)e[t]();
}, $95b4896f740279dc$export$dda1d9f60106f0e9 = (e)=>e.length ? ()=>$95b4896f740279dc$export$4a5767248b18ef41(e) : $95b4896f740279dc$export$7ccc53e8f1e7dfc5, $95b4896f740279dc$export$f1e1789686576879 = (e)=>"string" == typeof e, $95b4896f740279dc$export$39b482c5e57630a8 = (e)=>"function" == typeof e, $95b4896f740279dc$export$953cecd6e717a553 = (e)=>null != e && "object" == typeof e, $95b4896f740279dc$export$ae1af26003f05816 = Array.isArray, $95b4896f740279dc$export$625550452a3fa3ec = (e)=>(t)=>t instanceof e, $95b4896f740279dc$export$96f57966bedc81b4 = Object.is, $95b4896f740279dc$export$3b14a55fb2447963 = Object.defineProperty, $95b4896f740279dc$export$43caf9889c228507 = Object.is, $95b4896f740279dc$export$2d1720544b23b823 = (e, t)=>{
    for(let s = 0, a = e.length; s < a; s++)t(e[s]);
}, $95b4896f740279dc$export$4368d992c4eafac0 = document, $95b4896f740279dc$export$db3b6bfb95261072 = (e)=>$95b4896f740279dc$export$4368d992c4eafac0.createComment(""), $95b4896f740279dc$export$efccba1c4a2ef57b = (e)=>{
    const t = $95b4896f740279dc$export$db3b6bfb95261072(), s = $95b4896f740279dc$export$db3b6bfb95261072();
    return [
        t,
        s,
        ()=>{
            for(let n = t.nextSibling; n && n != s; n = n.nextSibling)n.parentNode.removeChild(n);
        }
    ];
}, $95b4896f740279dc$export$342063e11d6c3cad = (e, t)=>{
    t !== $95b4896f740279dc$export$7ccc53e8f1e7dfc5 && $95b4896f740279dc$export$ffb5f4729a158638(e, t);
}, $95b4896f740279dc$export$71511d61b312f219 = (e, t, s, a)=>(e.addEventListener(t, s, a), ()=>{
        e.removeEventListener(t, s, a);
    }), $95b4896f740279dc$export$8b22cf2602fb60ce = (e, t, s)=>{
    const a = e.ownerDocument, n = a.$$delegates ??= new Set();
    n.has(t) || (n.add(t), a.addEventListener(t, $95b4896f740279dc$var$w));
    const o = `_$${t}`;
    return e[o] = s, ()=>{
        delete e[o];
    };
}, $95b4896f740279dc$var$w = (e)=>{
    const t = `_$${e.type}`, s = e.composedPath();
    $95b4896f740279dc$export$2d1720544b23b823(s, (s)=>{
        const a = s[t];
        if (null != a) try {
            a.call(s, e);
        } catch (e) {
            ((e)=>{
                const t = e instanceof Error ? `stack trace: \n${e.stack}` : JSON.stringify(e);
                console.error(`[ERROR]: ${t}`);
            })(e);
        }
    });
}, $95b4896f740279dc$export$35e795649ee09318 = $95b4896f740279dc$export$625550452a3fa3ec(Node), $95b4896f740279dc$export$9e5f44173e64f162 = $95b4896f740279dc$export$625550452a3fa3ec(DocumentFragment), $95b4896f740279dc$export$ebd11618f299a286 = $95b4896f740279dc$export$625550452a3fa3ec(HTMLTemplateElement), $95b4896f740279dc$var$L = $95b4896f740279dc$export$625550452a3fa3ec(Text), $95b4896f740279dc$export$23f2a1d2818174ef = $95b4896f740279dc$export$625550452a3fa3ec(Element), $95b4896f740279dc$export$e7094788287c5e9b = (e)=>$95b4896f740279dc$var$L(e) || $95b4896f740279dc$export$23f2a1d2818174ef(e), $95b4896f740279dc$export$d141bba7fdc215a3 = new Proxy({}, {
    get: (e, t)=>t
}), $95b4896f740279dc$export$df995fae86a55f06 = Symbol.for("hyplate-signal"), $95b4896f740279dc$export$3d8c2f653ac9d0b9 = Symbol.for("hyplate-element-meta"), $95b4896f740279dc$export$882b5998b3b9117c = (e)=>e[$95b4896f740279dc$export$3d8c2f653ac9d0b9] ??= {};

});



parcelRegister("hM6VJ", function(module, exports) {

$parcel$export(module.exports, "enterEffectScope", () => $cf0c4b8e996edefc$export$407c9697ea33ec65);
$parcel$export(module.exports, "quitEffectScope", () => $cf0c4b8e996edefc$export$e9c2b9b864f1f183);
$parcel$export(module.exports, "useEffect", () => $cf0c4b8e996edefc$export$6d9c69b0de29b591);

var $cQSoF = parcelRequire("cQSoF");
const [$cf0c4b8e996edefc$export$2d8959f088e46cf6, $cf0c4b8e996edefc$export$eb6076592e119c85, $cf0c4b8e996edefc$export$241d797c2bd1630] = (0, $cQSoF.s)(), $cf0c4b8e996edefc$var$a = ()=>{
    let o = $cf0c4b8e996edefc$export$241d797c2bd1630();
    if (!o) throw new Error("Invalid hook call. Hooks can only be called inside the setup function of template-based component.");
    return o;
}, $cf0c4b8e996edefc$export$39c6a2b4dbabca5d = (o)=>{
    const n = (n)=>{
        (0, $cQSoF.k)(o, n);
    };
    return {
        useCleanUpCollector: ()=>n
    };
}, $cf0c4b8e996edefc$export$b1ca6d36dd52569c = ()=>$cf0c4b8e996edefc$var$a().useCleanUpCollector(), $cf0c4b8e996edefc$export$830f4fe430b1285d = (o)=>(n)=>{
        const [e, t] = o(n);
        return $cf0c4b8e996edefc$export$f665b0f2db230f5e(e), t;
    }, $cf0c4b8e996edefc$export$f665b0f2db230f5e = (o)=>$cf0c4b8e996edefc$var$a().useCleanUpCollector()(o), [$cf0c4b8e996edefc$export$407c9697ea33ec65, $cf0c4b8e996edefc$export$e9c2b9b864f1f183, $cf0c4b8e996edefc$export$6847850a87255b2e] = (0, $cQSoF.s)(), $cf0c4b8e996edefc$export$6d9c69b0de29b591 = (o)=>{
    const e = $cf0c4b8e996edefc$export$6847850a87255b2e();
    if (!e) throw new Error("Invalid hook call. Current scope is not in a functional component.");
    (0, $cQSoF.p)(e, o);
};

});


parcelRegister("5vq1D", function(module, exports) {

$parcel$export(module.exports, "Attribute", () => (parcelRequire("ljGQq")).Attribute);
$parcel$export(module.exports, "AutoRender", () => (parcelRequire("ljGQq")).AutoRender);
$parcel$export(module.exports, "useAutoRun", () => (parcelRequire("ljGQq")).useAutoRun);
$parcel$export(module.exports, "attr", () => (parcelRequire("6dcv9")).attr);
$parcel$export(module.exports, "clone", () => (parcelRequire("6dcv9")).clone);
$parcel$export(module.exports, "content", () => (parcelRequire("6dcv9")).content);
$parcel$export(module.exports, "cssVar", () => (parcelRequire("6dcv9")).cssVar);
$parcel$export(module.exports, "element", () => (parcelRequire("6dcv9")).element);
$parcel$export(module.exports, "listen", () => (parcelRequire("6dcv9")).listen);
$parcel$export(module.exports, "style", () => (parcelRequire("6dcv9")).style);
$parcel$export(module.exports, "mount", () => (parcelRequire("kKW7D")).mount);
$parcel$export(module.exports, "registerDirective", () => (parcelRequire("kKW7D")).registerDirective);
$parcel$export(module.exports, "unmount", () => (parcelRequire("kKW7D")).unmount);
$parcel$export(module.exports, "For", () => (parcelRequire("ct4Wi")).For);
$parcel$export(module.exports, "Future", () => (parcelRequire("ct4Wi")).Future);
$parcel$export(module.exports, "Show", () => (parcelRequire("ct4Wi")).Show);
$parcel$export(module.exports, "nil", () => (parcelRequire("ct4Wi")).nil);
$parcel$export(module.exports, "isSubscribable", () => (parcelRequire("6lZEy")).isSubscribable);
$parcel$export(module.exports, "subscribe", () => (parcelRequire("6lZEy")).subscribe);
$parcel$export(module.exports, "Component", () => (parcelRequire("TM3YZ")).Component);
$parcel$export(module.exports, "HyplateElement", () => (parcelRequire("TM3YZ")).HyplateElement);
$parcel$export(module.exports, "computed", () => (parcelRequire("ivmHo")).computed);
$parcel$export(module.exports, "effect", () => (parcelRequire("ivmHo")).effect);
$parcel$export(module.exports, "signal", () => (parcelRequire("ivmHo")).signal);
$parcel$export(module.exports, "watch", () => (parcelRequire("ivmHo")).watch);
$parcel$export(module.exports, "noop", () => (parcelRequire("cQSoF")).n);

var $ljGQq = parcelRequire("ljGQq");

var $6dcv9 = parcelRequire("6dcv9");

var $kKW7D = parcelRequire("kKW7D");

var $ct4Wi = parcelRequire("ct4Wi");


var $6lZEy = parcelRequire("6lZEy");

var $TM3YZ = parcelRequire("TM3YZ");

var $ivmHo = parcelRequire("ivmHo");


var $cQSoF = parcelRequire("cQSoF");
parcelRequire("di8m3");


});
parcelRegister("ljGQq", function(module, exports) {

$parcel$export(module.exports, "useAutoRun", () => $f84c9b5cce97669c$export$8b49f478d94e1fba);
$parcel$export(module.exports, "AutoRender", () => $f84c9b5cce97669c$export$375c0ccff4bd2d2d);
$parcel$export(module.exports, "Attribute", () => $f84c9b5cce97669c$export$ab9c25261cd8c720);
parcelRequire("di8m3");

var $ct4Wi = parcelRequire("ct4Wi");

var $TM3YZ = parcelRequire("TM3YZ");

var $hM6VJ = parcelRequire("hM6VJ");

var $cQSoF = parcelRequire("cQSoF");

var $kKW7D = parcelRequire("kKW7D");

var $ivmHo = parcelRequire("ivmHo");



(0, $ivmHo.enableBuiltinSignals)(), (0, $kKW7D.registerDirective)(new (0, $ct4Wi.EventDelegateDirective)), (0, $kKW7D.registerDirective)(new (0, $ct4Wi.ClassBindingDirective)), (0, $kKW7D.registerDirective)(new (0, $ct4Wi.StyleBindingDirective)), (0, $kKW7D.registerDirective)(new (0, $ct4Wi.CSSVariableBindingDirective)), (0, $kKW7D.registerDirective)(new (0, $ct4Wi.ModelDirective));
const $f84c9b5cce97669c$var$p = (0, $TM3YZ.HyplateElement).prototype;
$f84c9b5cce97669c$var$p.connectedCallback = function() {
    this.mount();
}, $f84c9b5cce97669c$var$p.disconnectedCallback = function() {
    this.unmount();
}, $f84c9b5cce97669c$var$p.attributeChangedCallback = function(t, e, n) {
    this[0, $cQSoF.$]?.attributes?.[t].set(n);
}, $f84c9b5cce97669c$var$p.autorun = function(t) {
    this.effect(()=>(0, $ivmHo.effect)(t));
};
const $f84c9b5cce97669c$export$8b49f478d94e1fba = (t)=>(0, $hM6VJ.useEffect)(()=>(0, $ivmHo.effect)(t)), $f84c9b5cce97669c$var$j = (t)=>t, $f84c9b5cce97669c$export$375c0ccff4bd2d2d = ({ children: t })=>(0, $kKW7D.jsx)((0, $ct4Wi.Show), {
        when: (0, $ivmHo.computed)(t),
        children: $f84c9b5cce97669c$var$j
    }), $f84c9b5cce97669c$export$ab9c25261cd8c720 = (t, e)=>(n, r)=>{
        const s = (0, $cQSoF.l)(r.metadata);
        function i(n) {
            const r = this[0, $cQSoF.$] ??= {}, s = r.attributes ??= {}, i = s[t] ??= (0, $ivmHo.signal)(this.getAttribute(t));
            return e ? (0, $ivmHo.computed)(()=>{
                const t = i();
                return null == t ? null : e(t);
            }) : i;
        }
        return (s.attributes ??= new Set).add(t), "field" === r.kind ? i : {
            init: i,
            set (t) {
                throw new Error("Cannot set binded attribute. It's read-only.");
            }
        };
    };

});
parcelRegister("di8m3", function(module, exports) {
Symbol.metadata || Object.defineProperty(Symbol, "metadata", {
    value: Symbol("Symbol.metadata")
});

});

parcelRegister("ct4Wi", function(module, exports) {

$parcel$export(module.exports, "nil", () => $913c06493ad1cdca$export$f2c4f74e8fe88e34);
$parcel$export(module.exports, "Show", () => $913c06493ad1cdca$export$f6a3d19be20f5819);
$parcel$export(module.exports, "Future", () => $913c06493ad1cdca$export$c9d7bf589772a8ce);
$parcel$export(module.exports, "For", () => $913c06493ad1cdca$export$bdf530073099ce9f);
$parcel$export(module.exports, "EventDelegateDirective", () => $913c06493ad1cdca$export$6fa9558f30e94dfa);
$parcel$export(module.exports, "ClassBindingDirective", () => $913c06493ad1cdca$export$e470f87baa20626a);
$parcel$export(module.exports, "StyleBindingDirective", () => $913c06493ad1cdca$export$a2f939b68b73ad4d);
$parcel$export(module.exports, "CSSVariableBindingDirective", () => $913c06493ad1cdca$export$3a8c9ee696810871);
$parcel$export(module.exports, "ModelDirective", () => $913c06493ad1cdca$export$5183ef81bfee96a8);

var $cQSoF = parcelRequire("cQSoF");

var $6dcv9 = parcelRequire("6dcv9");

var $6lZEy = parcelRequire("6lZEy");

var $kKW7D = parcelRequire("kKW7D");

const $913c06493ad1cdca$var$v = (r, s, n, t)=>(o)=>{
        const l = s ?? (0, $kKW7D.jsxRef)(), [i, c, u] = (0, $cQSoF.w)();
        o(i), o(c);
        const m = (0, $6dcv9.before)(c);
        let p = null, h = null;
        const g = (0, $6lZEy.subscribe)(r, (e)=>{
            p?.(), u(), e ? [p, h] = (0, $kKW7D.mount)(n(e), m) : t ? [p, h] = (0, $kKW7D.mount)(t(), m) : (p = null, h = null), (0, $kKW7D.setRef)(l, h);
        });
        return [
            ()=>{
                g(), p?.();
            },
            l,
            ()=>[
                    i,
                    c
                ]
        ];
    }, $913c06493ad1cdca$var$y = [
    (0, $cQSoF.n),
    void 0,
    (0, $cQSoF.n)
], $913c06493ad1cdca$export$f2c4f74e8fe88e34 = ()=>$913c06493ad1cdca$var$y, $913c06493ad1cdca$export$1f9ff5f4a6c9361a = (e)=>$913c06493ad1cdca$var$v(e.condition, e.ref, e.then, e.else);
$913c06493ad1cdca$export$1f9ff5f4a6c9361a.customRef = !0;
const $913c06493ad1cdca$export$f6a3d19be20f5819 = ({ when: e, ref: r, children: s, fallback: n })=>$913c06493ad1cdca$var$v(e, r, s, n);
$913c06493ad1cdca$export$f6a3d19be20f5819.customRef = !0;
const $913c06493ad1cdca$export$c9d7bf589772a8ce = ({ promise: r, ref: s, children: n, fallback: t, error: o })=>(l)=>{
        const i = s ?? (0, $kKW7D.jsxRef)(), [c, a, u] = (0, $cQSoF.w)();
        l(c), l(a);
        const m = (0, $6dcv9.before)(a);
        let p = null, h = null;
        const g = r.then((e)=>{
            t && u(), [p, h] = (0, $kKW7D.mount)(n(e), m), (0, $kKW7D.setRef)(i, h);
        });
        return t && ([p, h] = (0, $kKW7D.mount)(t, m), (0, $kKW7D.setRef)(i, h)), o && g.catch((e)=>{
            [p, h] = (0, $kKW7D.mount)(o(e), m), (0, $kKW7D.setRef)(i, h);
        }), [
            ()=>{
                p?.();
            },
            i,
            ()=>[
                    c,
                    a
                ]
        ];
    };
$913c06493ad1cdca$export$c9d7bf589772a8ce.customRef = !0;
const $913c06493ad1cdca$var$M = (e)=>{
    const r = e[1];
    (0, $kKW7D.unmount)(r);
}, $913c06493ad1cdca$var$z = ()=>0, $913c06493ad1cdca$export$bdf530073099ce9f = ({ of: n, children: t })=>(l)=>{
        let i = [];
        const [c, u, m] = (0, $cQSoF.w)();
        l(c), l(u);
        const p = (0, $6lZEy.subscribe)(n, (e)=>{
            const n = [];
            for(let r = 0, s = e.length; r < s; r++)n.push([
                e[r],
                void 0
            ]);
            let l = 0;
            const c = n.length;
            let a = i.length - 1, m = c - 1;
            for(l = 0; l <= a && l <= m; l++){
                const e = i[l], s = n[l];
                if (!(0, $cQSoF.r)(e[0], s[0])) break;
                s[1] = e[1];
            }
            for(; l <= a && l <= m; a--, m--){
                const e = i[a], s = n[m];
                if (!(0, $cQSoF.r)(e[0], s[0])) break;
                s[1] = e[1];
            }
            if (l > a) {
                if (l <= m) {
                    const e = m + 1, r = n[e]?.[1][2]()?.[0] ?? u, s = (0, $6dcv9.before)(r);
                    for(; l <= m; l++){
                        const e = n[l];
                        e[1] = (0, $kKW7D.mount)(t(e[0]), s);
                    }
                }
            } else if (l > m) for(; l <= a; l++)$913c06493ad1cdca$var$M(i[l]);
            else {
                const e = l, r = l, c = new Map;
                for(l = e; l <= m; l++){
                    const e = n[l][0];
                    c.set(e, l);
                }
                let p, h = 0;
                const g = m - r + 1;
                let d = !1, w = 0;
                const x = (0, $cQSoF.a)({
                    length: g
                }, $913c06493ad1cdca$var$z);
                for(l = e; l <= a; l++){
                    const e = i[l];
                    if (h >= g) {
                        $913c06493ad1cdca$var$M(e);
                        continue;
                    }
                    const s = c.get(e[0]);
                    null == s ? $913c06493ad1cdca$var$M(e) : (x[s - r] = l + 1, s >= w ? w = s : d = !0, n[s][1] = e[1], h++);
                }
                const j = d ? $913c06493ad1cdca$var$B(x) : [];
                for(p = j.length - 1, l = g - 1; l >= 0; l--){
                    const e = r + l, s = n[e], i = n[e + 1]?.[1][2]()?.[0] ?? u, c = (0, $6dcv9.before)(i);
                    if (0 === x[l]) s[1] = (0, $kKW7D.mount)(t(s[0]), c);
                    else if (d) {
                        if (p < 0 || l !== j[p]) {
                            const e = s[1][2]();
                            e && (0, $6dcv9.moveRange)(e[0], e[1], c);
                        } else p--;
                    }
                }
            }
            i = n;
        });
        return [
            ()=>{
                for(let e = i.length - 1; e >= 0; e--)i[e][1][0]();
                p(), m();
            },
            void 0,
            ()=>[
                    c,
                    u
                ]
        ];
    }, $913c06493ad1cdca$var$B = (e)=>{
    const r = [
        ...e
    ], s = [
        0
    ];
    let n, t, o, l, i;
    const c = e.length;
    for(n = 0; n < c; n++){
        const c = e[n];
        if (0 !== c) {
            if (t = s[s.length - 1], e[t] < c) {
                r[n] = t, s.push(n);
                continue;
            }
            for(o = 0, l = s.length - 1; o < l;)i = o + l >> 1, e[s[i]] < c ? o = i + 1 : l = i;
            c < e[s[o]] && (o > 0 && (r[n] = s[o - 1]), s[o] = n);
        }
    }
    for(o = s.length, l = s[o - 1]; o-- > 0;)s[o] = l, l = r[l];
    return s;
};
class $913c06493ad1cdca$export$6fa9558f30e94dfa {
    prefix = "on";
    requireParams = !0;
    apply = (0, $cQSoF.b);
}
class $913c06493ad1cdca$export$e470f87baa20626a {
    prefix = "class";
    requireParams = !0;
    apply(e, r, s) {
        if ((0, $6lZEy.isSubscribable)(s)) return (0, $6lZEy.$class)(e, r, s);
        (0, $6dcv9.className)(e, r, s);
    }
}
class $913c06493ad1cdca$export$a2f939b68b73ad4d {
    prefix = "style";
    requireParams = !0;
    apply(e, r, s) {
        if ((0, $6lZEy.isSubscribable)(s)) return (0, $6lZEy.$style)(e, r, s);
        (0, $6dcv9.style)(e, r, s);
    }
}
class $913c06493ad1cdca$export$3a8c9ee696810871 {
    prefix = "var";
    requireParams = !0;
    apply(e, r, s) {
        if ((0, $6lZEy.isSubscribable)(s)) return (0, $6lZEy.$var)(e, r, s);
        (0, $6dcv9.cssVar)(e, r, s);
    }
}
class $913c06493ad1cdca$export$5183ef81bfee96a8 {
    prefix = "h-model";
    requireParams = !1;
    apply(e, r, s) {
        if ((0, $6lZEy.isWritable)(s)) {
            if (((e)=>"value" in e)(e)) return (0, $6lZEy.$model)(e, s, r ? {
                as: r
            } : void 0);
        }
    }
}

});

parcelRegister("TM3YZ", function(module, exports) {

$parcel$export(module.exports, "Component", () => $0a7a6b86d9a2b384$export$16fa2f45be04daa8);
$parcel$export(module.exports, "HyplateElement", () => $0a7a6b86d9a2b384$export$ec2439515a3718b9);

var $6lZEy = parcelRequire("6lZEy");

var $6dcv9 = parcelRequire("6dcv9");

var $cQSoF = parcelRequire("cQSoF");

var $kKW7D = parcelRequire("kKW7D");

var $cGLad = parcelRequire("cGLad");

const $0a7a6b86d9a2b384$var$w = customElements, $0a7a6b86d9a2b384$export$f36d6a7a5c09a23e = $0a7a6b86d9a2b384$var$w.define.bind($0a7a6b86d9a2b384$var$w), $0a7a6b86d9a2b384$var$j = "observedAttributes", $0a7a6b86d9a2b384$export$16fa2f45be04daa8 = (t)=>(s, e)=>{
        e.addInitializer(function() {
            const s = (0, $cQSoF.l)(e.metadata), o = this, { tag: a, [$0a7a6b86d9a2b384$var$j]: h, ...c } = t;
            if (o.tag = a, !Object.hasOwn(o, $0a7a6b86d9a2b384$var$j)) {
                if (h) (0, $cQSoF.u)(o, $0a7a6b86d9a2b384$var$j, {
                    get: ()=>h
                });
                else {
                    const { attributes: t } = s;
                    t && (0, $cQSoF.u)(o, $0a7a6b86d9a2b384$var$j, {
                        get: ()=>[
                                ...t
                            ]
                    });
                }
            }
            (0, $cQSoF.v)(o, c), $0a7a6b86d9a2b384$export$f36d6a7a5c09a23e(a, o);
        });
    }, $0a7a6b86d9a2b384$export$ec2439515a3718b9 = class extends HTMLElement {
    static [(0, $cQSoF.$)] = {};
    static shadowRootInit = {};
    static tag;
    static get slotTag() {
        return (0, $cGLad.s)(this.tag);
    }
    static styles = [];
    static get observedAttributes() {
        return [];
    }
    static formAssociated;
    props;
    slots = (0, $cQSoF.x);
    cleanups = [];
    #t;
    #s;
    #e = null;
    #i;
    constructor(t){
        super(), this.#i = new.target, this.setup(t);
    }
    setup(i) {
        let n, r;
        const o = {}, { cleanups: a } = this;
        for(const c in i){
            const l = i[c];
            if ("ref" === c) n = l;
            else if ("children" === c) r = l;
            else if (c.startsWith("attr:")) {
                const i = c.slice(5);
                (0, $6lZEy.isSubscribable)(l) ? (0, $cQSoF.p)(a, (0, $6lZEy.$attr)(this, i, l)) : (0, $6dcv9.attr)(this, i, l);
            } else o[c] = l;
        }
        n && (0, $kKW7D.setRef)(n, this), this.props = o, this.#t = r;
    }
    effect(t) {
        const s = this.#e;
        s && (0, $cQSoF.p)(s, t);
    }
    render() {
        throw new Error("You should implement `render` in your component subclass");
    }
    mount(t) {
        let s = this.#s;
        if (s) return s;
        this.#e = [];
        const e = this.#i, { shadowRootInit: i, formAssociated: n } = e, r = i.slotAssignment, o = this.shadowRoot ?? this.attachShadow({
            ...i,
            mode: "open"
        });
        n && (this.internals ??= this.attachInternals()), o.adoptedStyleSheets = [
            ...this.#i.styles
        ];
        const [a] = (0, $kKW7D.mount)(this.render(), o);
        (0, $cQSoF.k)(this.cleanups, a);
        const h = this.#t;
        return h && ("manual" === r ? (0, $cGLad.a)((0, $kKW7D.mount), this, h, this.cleanups) : (0, $cGLad.i)((0, $kKW7D.mount), this, h, e.slotTag, this.cleanups), this.#t = void 0), s = this.#s = [
            ()=>this.unmount(),
            this,
            ()=>[
                    this,
                    this
                ]
        ], t?.(this), (0, $cQSoF.f)(this.#e, (t)=>(0, $cQSoF.k)(this.cleanups, t())), this.#e = null, s;
    }
    unmount() {
        this.#s && ((0, $cQSoF.y)(this.cleanups), this.cleanups.length = 0, this.shadowRoot.innerHTML = "", this.#s = void 0);
    }
};

});
parcelRegister("cGLad", function(module, exports) {

$parcel$export(module.exports, "s", () => $93cdfe0a2580046a$export$2408f22a0fab9ae5);
$parcel$export(module.exports, "a", () => $93cdfe0a2580046a$export$407448d2b89b1813);
$parcel$export(module.exports, "i", () => $93cdfe0a2580046a$export$23f2a1d2818174ef);

var $6dcv9 = parcelRequire("6dcv9");

var $cQSoF = parcelRequire("cQSoF");
const $93cdfe0a2580046a$export$2408f22a0fab9ae5 = (s)=>`${s}-slot`, $93cdfe0a2580046a$var$c = (s, t, e)=>{
    (0, $6dcv9.attr)(e, "slot", t), (0, $6dcv9.appendChild)(s)(e);
}, $93cdfe0a2580046a$var$p = (s, n)=>{
    if ((0, $cQSoF.C)(s)) (0, $cQSoF.p)(n, s);
    else if ((0, $cQSoF.q)(s)) for(let o = s.firstChild; o; o = o.nextSibling)$93cdfe0a2580046a$var$p(o, n);
}, $93cdfe0a2580046a$var$m = (s, n, o)=>{
    const t = [];
    if ((0, $cQSoF.j)(n)) $93cdfe0a2580046a$var$p(n, t);
    else {
        const e = (s)=>{
            $93cdfe0a2580046a$var$p(s, t);
        }, [i] = s(n, e);
        (0, $cQSoF.k)(o, i);
    }
    return t;
}, $93cdfe0a2580046a$export$407448d2b89b1813 = (s, n, o, e)=>{
    (0, $cQSoF.f)(n.shadowRoot.querySelectorAll("slot"), (t)=>{
        const { name: r } = t;
        if (!(r in o)) return;
        const i = o[r];
        if (!i) return;
        const a = $93cdfe0a2580046a$var$m(s, i, e);
        a.length && ((s, n, o)=>{
            s.append(...o), n.assign(...o);
        })(n, t, a);
    });
}, $93cdfe0a2580046a$export$23f2a1d2818174ef = (n, o, t, e, r)=>{
    for(const i in t){
        const a = t[i];
        if (!a) continue;
        const f = $93cdfe0a2580046a$var$m(n, a, r), l = (0, $6dcv9.element)(e);
        l.append(...f), $93cdfe0a2580046a$var$c(o, i, l);
    }
};

});


parcelRegister("ivmHo", function(module, exports) {

$parcel$export(module.exports, "enableBuiltinSignals", () => $d78cbabf23ec7131$export$de8fcbb66357c183);
$parcel$export(module.exports, "watch", () => $d78cbabf23ec7131$export$3db5d71bdb2d5499);
$parcel$export(module.exports, "signal", () => $d78cbabf23ec7131$export$e2ef10f86a8d60e8);
$parcel$export(module.exports, "effect", () => $d78cbabf23ec7131$export$dc573d8a6576cdb3);
$parcel$export(module.exports, "computed", () => $d78cbabf23ec7131$export$2983e091f1a1e8e2);

var $cQSoF = parcelRequire("cQSoF");

var $6lZEy = parcelRequire("6lZEy");

/**
 * @license MIT
 * Copyright (C) 2022  DarrenDanielDay <Darren_Daniel_Day@hotmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $d78cbabf23ec7131$var$h = CustomEvent, $d78cbabf23ec7131$var$u = EventTarget, $d78cbabf23ec7131$export$d95ec7aa9d3756d8 = "hyplate-signal-data", $d78cbabf23ec7131$export$a9a36f4641f8c6f0 = (s)=>!!s?.[0, $cQSoF.z], $d78cbabf23ec7131$export$c9f8b35cae62dd0f = (t)=>$d78cbabf23ec7131$export$a9a36f4641f8c6f0(t) && t.proto === $d78cbabf23ec7131$export$d4d09f95d8f6afca.prototype, $d78cbabf23ec7131$var$l = (t)=>{
    const s = t.get.bind(t), r = Object.getPrototypeOf(t), e = Object.getOwnPropertyDescriptors(r);
    for(const r in e)if ("constructor" !== r) {
        const { value: n } = e[r];
        (0, $cQSoF.g)(n) && (s[r] = n.bind(t));
    }
    return Object.assign(s, t), s.proto = r, s;
};
let $d78cbabf23ec7131$var$m = (0, $cQSoF.r);
const $d78cbabf23ec7131$export$67779d284de59481 = (t)=>{
    $d78cbabf23ec7131$var$m = t ?? (0, $cQSoF.r);
}, $d78cbabf23ec7131$export$de8fcbb66357c183 = ()=>{
    (0, $6lZEy.configureBinding)($d78cbabf23ec7131$export$3db5d71bdb2d5499, $d78cbabf23ec7131$export$a9a36f4641f8c6f0, $d78cbabf23ec7131$export$68d8715fc104d294, $d78cbabf23ec7131$export$c9f8b35cae62dd0f);
}, [$d78cbabf23ec7131$var$w, $d78cbabf23ec7131$var$v, $d78cbabf23ec7131$var$f] = (0, $cQSoF.s)(), $d78cbabf23ec7131$var$j = ()=>{
    const t = new Set;
    return $d78cbabf23ec7131$var$w(t), [
        t,
        $d78cbabf23ec7131$var$v
    ];
};
class $d78cbabf23ec7131$export$d4d09f95d8f6afca {
    [(0, $cQSoF.z)] = !0;
    #t;
    #s;
    target = new $d78cbabf23ec7131$var$u;
    constructor(t, s){
        this.#t = t, this.#s = s;
    }
    get() {
        return $d78cbabf23ec7131$var$f()?.add(this), this.#t;
    }
    subscribe(t) {
        return (0, $cQSoF._)(this.target, $d78cbabf23ec7131$export$d95ec7aa9d3756d8, $d78cbabf23ec7131$var$S(t));
    }
    set(t) {
        (0, this.#s)(this.#t, t) || (this.#t = t, this.#r());
    }
    mutate(t) {
        t(this.#t), this.#r();
    }
    update(t) {
        this.set(t(this.#t));
    }
    #r() {
        $d78cbabf23ec7131$var$z(this, this.#t);
    }
}
const $d78cbabf23ec7131$export$e2ef10f86a8d60e8 = (t, s = $d78cbabf23ec7131$var$m)=>$d78cbabf23ec7131$var$l(new $d78cbabf23ec7131$export$d4d09f95d8f6afca(t, s)), $d78cbabf23ec7131$export$3db5d71bdb2d5499 = (t, s)=>{
    const r = t.subscribe(s);
    return s(t.get()), r;
}, $d78cbabf23ec7131$export$68d8715fc104d294 = (t, s)=>t.set(s), $d78cbabf23ec7131$export$dc573d8a6576cdb3 = (t)=>{
    let s, i = [];
    const n = ()=>{
        (0, $cQSoF.y)(i), s?.();
        const [e, c] = $d78cbabf23ec7131$var$j();
        s = t(), c(), i = [
            ...e
        ].map((t)=>t.subscribe(n));
    };
    return n(), i.length ? ()=>{
        (0, $cQSoF.y)(i), s?.();
    } : s ?? (0, $cQSoF.n);
}, $d78cbabf23ec7131$var$z = (t, s)=>{
    $d78cbabf23ec7131$var$w(null), t.target.dispatchEvent(new $d78cbabf23ec7131$var$h($d78cbabf23ec7131$export$d95ec7aa9d3756d8, {
        detail: s
    })), $d78cbabf23ec7131$var$v();
}, $d78cbabf23ec7131$var$C = (0, $cQSoF.t)($d78cbabf23ec7131$var$h);
class $d78cbabf23ec7131$var$D {
    #e;
    constructor(t){
        this.#e = t;
    }
    handleEvent(t) {
        $d78cbabf23ec7131$var$C(t) && t.type === $d78cbabf23ec7131$export$d95ec7aa9d3756d8 && (0, this.#e)(t.detail);
    }
}
const $d78cbabf23ec7131$var$S = (t)=>new $d78cbabf23ec7131$var$D(t);
class $d78cbabf23ec7131$export$293372c153fbbd93 {
    [(0, $cQSoF.z)] = !0;
    #i;
    #s;
    #t = null;
    #n = !0;
    #c = [];
    #a = 0;
    target = new $d78cbabf23ec7131$var$u;
    constructor(t, s){
        this.#i = t, this.#s = s;
    }
    get() {
        if ($d78cbabf23ec7131$var$f()?.add(this), !this.#n) return this.#t;
        this.#n = !1, (0, $cQSoF.y)(this.#c);
        const [t, s] = $d78cbabf23ec7131$var$j(), e = this.#i, i = this.#t = e();
        return s(), this.#c = [
            ...t
        ].map((t)=>t.subscribe(this.#r)), i;
    }
    subscribe(t) {
        this.#a++;
        const r = (0, $cQSoF._)(this.target, $d78cbabf23ec7131$export$d95ec7aa9d3756d8, $d78cbabf23ec7131$var$S(t));
        return ()=>{
            r(), this.#a--, this.#a || this.#o();
        };
    }
    #r = ()=>{
        this.#n = !0;
        const t = this.#t, s = this.get();
        (0, this.#s)(t, s) || $d78cbabf23ec7131$var$z(this, s);
    };
    #o() {
        (0, $cQSoF.y)(this.#c), this.#n = !0, this.#c = [], this.#t = null;
    }
}
const $d78cbabf23ec7131$export$2983e091f1a1e8e2 = (t, s = $d78cbabf23ec7131$var$m)=>$d78cbabf23ec7131$var$l(new $d78cbabf23ec7131$export$293372c153fbbd93(t, s));

});




//# sourceMappingURL=index.12e0b314.js.map
