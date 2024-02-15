
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
parcelRegister("8uu6p", function(module, exports) {

$parcel$export(module.exports, "register", () => $62e879ccfdc7ddf9$export$6503ec6e8aabbaf, (v) => $62e879ccfdc7ddf9$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $62e879ccfdc7ddf9$export$f7ad0328861e2f03, (v) => $62e879ccfdc7ddf9$export$f7ad0328861e2f03 = v);
var $62e879ccfdc7ddf9$export$6503ec6e8aabbaf;
var $62e879ccfdc7ddf9$export$f7ad0328861e2f03;
"use strict";
var $62e879ccfdc7ddf9$var$mapping = new Map();
function $62e879ccfdc7ddf9$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$62e879ccfdc7ddf9$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $62e879ccfdc7ddf9$var$resolve(id) {
    var resolved = $62e879ccfdc7ddf9$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$62e879ccfdc7ddf9$export$6503ec6e8aabbaf = $62e879ccfdc7ddf9$var$register;
$62e879ccfdc7ddf9$export$f7ad0328861e2f03 = $62e879ccfdc7ddf9$var$resolve;

});

parcelRegister("1I0Yl", function(module, exports) {

$parcel$export(module.exports, "__esDecorate", () => $2c8fb80ddeb61976$export$3a84e1ae4e97e9b0);
$parcel$export(module.exports, "__runInitializers", () => $2c8fb80ddeb61976$export$d831c04e792af3d);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var $2c8fb80ddeb61976$var$extendStatics = function(d, b) {
    $2c8fb80ddeb61976$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $2c8fb80ddeb61976$var$extendStatics(d, b);
};
function $2c8fb80ddeb61976$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $2c8fb80ddeb61976$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $2c8fb80ddeb61976$export$18ce0697a983be9b = function() {
    $2c8fb80ddeb61976$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $2c8fb80ddeb61976$export$18ce0697a983be9b.apply(this, arguments);
};
function $2c8fb80ddeb61976$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $2c8fb80ddeb61976$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $2c8fb80ddeb61976$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $2c8fb80ddeb61976$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $2c8fb80ddeb61976$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $2c8fb80ddeb61976$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $2c8fb80ddeb61976$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $2c8fb80ddeb61976$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $2c8fb80ddeb61976$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $2c8fb80ddeb61976$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $2c8fb80ddeb61976$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $2c8fb80ddeb61976$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $2c8fb80ddeb61976$export$45d3717a4c69092e(o, m, p);
}
function $2c8fb80ddeb61976$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $2c8fb80ddeb61976$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $2c8fb80ddeb61976$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($2c8fb80ddeb61976$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $2c8fb80ddeb61976$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $2c8fb80ddeb61976$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $2c8fb80ddeb61976$export$10c90e4f7922046c(v) {
    return this instanceof $2c8fb80ddeb61976$export$10c90e4f7922046c ? (this.v = v, this) : new $2c8fb80ddeb61976$export$10c90e4f7922046c(v);
}
function $2c8fb80ddeb61976$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $2c8fb80ddeb61976$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $2c8fb80ddeb61976$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $2c8fb80ddeb61976$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $2c8fb80ddeb61976$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $2c8fb80ddeb61976$export$19a8beecd37a4c45 === "function" ? $2c8fb80ddeb61976$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $2c8fb80ddeb61976$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $2c8fb80ddeb61976$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $2c8fb80ddeb61976$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $2c8fb80ddeb61976$export$45d3717a4c69092e(result, mod, k);
    }
    $2c8fb80ddeb61976$var$__setModuleDefault(result, mod);
    return result;
}
function $2c8fb80ddeb61976$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $2c8fb80ddeb61976$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $2c8fb80ddeb61976$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $2c8fb80ddeb61976$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $2c8fb80ddeb61976$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $2c8fb80ddeb61976$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $2c8fb80ddeb61976$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $2c8fb80ddeb61976$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
var $2c8fb80ddeb61976$export$2e2bcd8739ae039 = {
    __extends: $2c8fb80ddeb61976$export$a8ba968b8961cb8a,
    __assign: $2c8fb80ddeb61976$export$18ce0697a983be9b,
    __rest: $2c8fb80ddeb61976$export$3c9a16f847548506,
    __decorate: $2c8fb80ddeb61976$export$29e00dfd3077644b,
    __param: $2c8fb80ddeb61976$export$d5ad3fd78186038f,
    __metadata: $2c8fb80ddeb61976$export$f1db080c865becb9,
    __awaiter: $2c8fb80ddeb61976$export$1050f835b63b671e,
    __generator: $2c8fb80ddeb61976$export$67ebef60e6f28a6,
    __createBinding: $2c8fb80ddeb61976$export$45d3717a4c69092e,
    __exportStar: $2c8fb80ddeb61976$export$f33643c0debef087,
    __values: $2c8fb80ddeb61976$export$19a8beecd37a4c45,
    __read: $2c8fb80ddeb61976$export$8d051b38c9118094,
    __spread: $2c8fb80ddeb61976$export$afc72e2116322959,
    __spreadArrays: $2c8fb80ddeb61976$export$6388937ca91ccae8,
    __spreadArray: $2c8fb80ddeb61976$export$1216008129fb82ed,
    __await: $2c8fb80ddeb61976$export$10c90e4f7922046c,
    __asyncGenerator: $2c8fb80ddeb61976$export$e427f37a30a4de9b,
    __asyncDelegator: $2c8fb80ddeb61976$export$bbd80228419bb833,
    __asyncValues: $2c8fb80ddeb61976$export$e3b29a3d6162315f,
    __makeTemplateObject: $2c8fb80ddeb61976$export$4fb47efe1390b86f,
    __importStar: $2c8fb80ddeb61976$export$c21735bcef00d192,
    __importDefault: $2c8fb80ddeb61976$export$da59b14a69baef04,
    __classPrivateFieldGet: $2c8fb80ddeb61976$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $2c8fb80ddeb61976$export$d40a35129aaff81f,
    __classPrivateFieldIn: $2c8fb80ddeb61976$export$81fdc39f203e4e04,
    __addDisposableResource: $2c8fb80ddeb61976$export$88ac25d8e944e405,
    __disposeResources: $2c8fb80ddeb61976$export$8f076105dc360e92
};

});

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


parcelRegister("04CUQ", function(module, exports) {

$parcel$export(module.exports, "create", () => $00de8fbce7bc0d5c$export$185802fd694ee1f5);
$parcel$export(module.exports, "addSheet", () => $00de8fbce7bc0d5c$export$f6e9a5c4a1110840);
/**
 * @license sheetly
 * Copyright (C) 2023  DarrenDanielDay <Darren_Daniel_Day@hotmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Create a CSSStyleSheet.
 * @param code the css code
 * @param baseURL optional base url if you want to use `url()` in it
 * @returns a created style sheet
 */ const $00de8fbce7bc0d5c$export$185802fd694ee1f5 = (code, baseURL)=>{
    const sheet = new CSSStyleSheet({
        baseURL: baseURL
    });
    sheet.replaceSync(code);
    return sheet;
};
const $00de8fbce7bc0d5c$export$f6e9a5c4a1110840 = (sheet, doc = document)=>{
    doc.adoptedStyleSheets = doc.adoptedStyleSheets.concat(sheet);
};
const $00de8fbce7bc0d5c$export$dbf350e5966cf602 = (templates, ...substitutions)=>$00de8fbce7bc0d5c$export$185802fd694ee1f5(String.raw(templates, ...substitutions));

});

parcelRegister("6gcx6", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $48edf576e6bb09e3$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $48edf576e6bb09e3$export$6f093cfa640b7166 = ':host,:root{--1:#f8c507;--2:#d1d4e2;--3:#f39b77;--no-color:var(--bs-secondary-bg);--pst:#5cbad3;--pst-light:#6ad6f3;--pst-border-color:#61a8c1;--prs:#b5c76f;--prs-light:#d0e580;--prs-border-color:#a7c276;--ftr:#913a79;--ftr-light:#a7428b;--ftr-border-color:#8f5a7f;--byd:#bf0d25;--byd-light:#dc0f2a;--byd-border-color:#b64356;--pure:#cc22ee;--far:#ffaa11;--lost:#dd4444;--side-light:#376e99;--side-conflict:#8456b3;--side-colorless:#d4c6d4}@font-face{font-family:Exo;src:url("https://fonts.gstatic.com/s/exo/v20/4UaZrEtFpBI4f1ZSIK9d4LjJ4rQwOwRmOw.woff2") format("woff2")}';
const $48edf576e6bb09e3$export$995990c5c04c46f0 = (0, $04CUQ.create)($48edf576e6bb09e3$export$6f093cfa640b7166, "file:///src/view/app.css.js");

});

parcelRegister("hlIIF", function(module, exports) {

$parcel$export(module.exports, "bootstrapLocal", () => $ca17162e7c2b1298$export$9222e7b37f63b62d);
$parcel$export(module.exports, "title", () => (parcelRequire("hAMfD")).sheet);
$parcel$export(module.exports, "theme", () => (parcelRequire("cRYgL")).sheet);
$parcel$export(module.exports, "bootstrap", () => (parcelRequire("eM6LD")).sheet);
$parcel$export(module.exports, "viewTransition", () => (parcelRequire("kGXUO")).sheet);

var $04CUQ = parcelRequire("04CUQ");

var $eM6LD = parcelRequire("eM6LD");

var $hAMfD = parcelRequire("hAMfD");

var $cRYgL = parcelRequire("cRYgL");

var $kGXUO = parcelRequire("kGXUO");
const $ca17162e7c2b1298$export$9222e7b37f63b62d = (0, $04CUQ.create)((0, $eM6LD.text).replaceAll(":root", ":host"), "");

});
parcelRegister("eM6LD", function(module, exports) {

$parcel$export(module.exports, "text", () => $ac1acc3ce5fac425$export$6f093cfa640b7166);
$parcel$export(module.exports, "sheet", () => $ac1acc3ce5fac425$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $ac1acc3ce5fac425$export$6f093cfa640b7166 = "@charset \"UTF-8\";/*!\r\n * Bootstrap  v5.3.0-alpha3 (https://getbootstrap.com/)\r\n * Copyright 2011-2023 The Bootstrap Authors\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\r\n */:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, 0.75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, 0.5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, 0.175);--bs-border-radius:0.375rem;--bs-border-radius-sm:0.25rem;--bs-border-radius-lg:0.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-box-shadow-sm:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, 0.175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-focus-ring-width:0.25rem;--bs-focus-ring-opacity:0.25;--bs-focus-ring-color:rgba(13, 110, 253, 0.25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}[data-bs-theme=dark]{color-scheme:dark;--bs-body-color:#adb5bd;--bs-body-color-rgb:173,181,189;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#fff;--bs-emphasis-color-rgb:255,255,255;--bs-secondary-color:rgba(173, 181, 189, 0.75);--bs-secondary-color-rgb:173,181,189;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:rgba(173, 181, 189, 0.5);--bs-tertiary-color-rgb:173,181,189;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-primary-text-emphasis:#6ea8fe;--bs-secondary-text-emphasis:#a7acb1;--bs-success-text-emphasis:#75b798;--bs-info-text-emphasis:#6edff6;--bs-warning-text-emphasis:#ffda6a;--bs-danger-text-emphasis:#ea868f;--bs-light-text-emphasis:#f8f9fa;--bs-dark-text-emphasis:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#161719;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#41464b;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#087990;--bs-warning-border-subtle:#997404;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-link-color:#6ea8fe;--bs-link-hover-color:#8bb9fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:139,185,254;--bs-code-color:#e685b5;--bs-border-color:#495057;--bs-border-color-translucent:rgba(255, 255, 255, 0.15);--bs-form-valid-color:#75b798;--bs-form-valid-border-color:#75b798;--bs-form-invalid-color:#ea868f;--bs-form-invalid-border-color:#ea868f}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;border:0;border-top:var(--bs-border-width) solid;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color,inherit)}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-secondary-color);text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not(\r[type=time]\r)::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.figure{display:inline-block}.container,.container-fluid{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-4{flex:0 0 auto;width:33.33333333%}.col-10{flex:0 0 auto;width:83.33333333%}.table{--bs-table-color:var(--bs-body-color);--bs-table-bg:transparent;--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-body-color);--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:var(--bs-body-color);--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:var(--bs-body-color);--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + var(--bs-border-width));padding-bottom:calc(.375rem + var(--bs-border-width));margin-bottom:0;font-size:inherit;line-height:1.5}.form-text{margin-top:.25rem;font-size:.875em;color:var(--bs-secondary-color)}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);background-color:var(--bs-body-bg);background-clip:padding-box;border:var(--bs-border-width) solid var(--bs-border-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{min-width:85px;height:1.5em;margin:0}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::-moz-placeholder{color:var(--bs-secondary-color);opacity:1}.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:var(--bs-secondary-bg)}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}textarea.form-control{min-height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2))}.form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:var(--bs-secondary-bg)}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--bs-body-color)}[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23adb5bd' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{--bs-form-check-bg:var(--bs-body-bg);width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);background-repeat:no-repeat;background-position:center;background-size:contain;border:var(--bs-border-width) solid var(--bs-border-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;--bs-form-check-bg-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");width:2em;margin-left:-2.5em;background-image:var(--bs-form-switch-bg);background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e\")}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);text-align:center;white-space:nowrap;background-color:var(--bs-tertiary-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius)}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(\r.invalid-feedback\r){margin-left:calc(var(--bs-border-width) * -1);border-top-left-radius:0;border-bottom-left-radius:0}.btn{--bs-btn-padding-x:0.75rem;--bs-btn-padding-y:0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity:0.65;--bs-btn-focus-box-shadow:0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), 0.5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:0 0 0 #000;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.dropdown{position:relative}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;background:0 0;border:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:0.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), 0.65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), 0.8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), 0.3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:0.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:0.5rem;--bs-navbar-toggler-padding-y:0.25rem;--bs-navbar-toggler-padding-x:0.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), 0.15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:0.25rem;--bs-navbar-toggler-transition:box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link.active,.navbar-nav .nav-link.show{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}}[data-bs-theme=dark] .navbar-toggler-icon{--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:0.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y:0.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb), 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-focus-border-color:#86b7fe;--bs-accordion-btn-focus-box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text-emphasis);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}.badge{--bs-badge-padding-x:0.65em;--bs-badge-padding-y:0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:var(--bs-border-radius);display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height:1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:0.75rem;--bs-toast-padding-y:0.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb), 0.85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb), 0.85);--bs-toast-header-border-color:var(--bs-border-color-translucent);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-color: ;--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * .5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15)}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:0.5rem;--bs-tooltip-padding-y:0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:0.9;--bs-tooltip-arrow-width:0.8rem;--bs-tooltip-arrow-height:0.4rem;z-index:var(--bs-tooltip-zindex);display:block;margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:0.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: ;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:0.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.carousel{position:relative}@keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.offcanvas{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-offcanvas-transition:transform 0.3s ease-in-out;--bs-offcanvas-title-line-height:1.5}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:\"\"}@keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.align-text-top{vertical-align:text-top!important}.d-inline-block{display:inline-block!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.flex-wrap{flex-wrap:wrap!important}.m-3{margin:1rem!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.me-2{margin-right:.5rem!important}.me-auto{margin-right:auto!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.p-3{padding:1rem!important}.bg-body-tertiary{--bs-bg-opacity:1;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}.rounded{border-radius:var(--bs-border-radius)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:992px){.d-lg-none{display:none!important}.mb-lg-0{margin-bottom:0!important}}";
const $ac1acc3ce5fac425$export$995990c5c04c46f0 = (0, $04CUQ.create)($ac1acc3ce5fac425$export$6f093cfa640b7166, "file:///src/view/styles/bootstrap.part.css.js");

});

parcelRegister("hAMfD", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $cceb3a265bf94bd2$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $cceb3a265bf94bd2$export$6f093cfa640b7166 = '.title{margin:.5em 1em;padding:.5em 1em;border-bottom:1px var(--bs-border-color) solid}.title::before{display:block;content:" ";position:absolute;left:1.25em;width:.125em;height:1.4em;background-color:var(--bs-primary)}';
const $cceb3a265bf94bd2$export$995990c5c04c46f0 = (0, $04CUQ.create)($cceb3a265bf94bd2$export$6f093cfa640b7166, "file:///src/view/styles/title.css.js");

});

parcelRegister("cRYgL", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $95e92f873db291b8$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $95e92f873db291b8$export$6f093cfa640b7166 = ":root[data-theme=light]{--pst-border:none;--prs-border:none;--ftr-border:none;--byd-border:none}:root[data-theme=dark]{--pst-border:4px solid var(--pst-border-color);--prs-border:4px solid var(--prs-border-color);--ftr-border:4px solid var(--ftr-border-color);--byd-border:4px solid var(--byd-border-color)}";
const $95e92f873db291b8$export$995990c5c04c46f0 = (0, $04CUQ.create)($95e92f873db291b8$export$6f093cfa640b7166, "file:///src/view/styles/theme.css.js");

});

parcelRegister("kGXUO", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $f10634d412151b10$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $f10634d412151b10$export$6f093cfa640b7166 = "";
const $f10634d412151b10$export$995990c5c04c46f0 = (0, $04CUQ.create)($f10634d412151b10$export$6f093cfa640b7166, "file:///src/view/styles/view-transition.css.js");

});


parcelRegister("jrD1x", function(module, exports) {

$parcel$export(module.exports, "Inject", () => $e27ecf40e84d3a03$export$117a1c764cae0d93);
$parcel$export(module.exports, "provide", () => $e27ecf40e84d3a03$export$abe1e183e22e10ad);
let $e27ecf40e84d3a03$var$globalContainer = null;
const $e27ecf40e84d3a03$export$117a1c764cae0d93 = (token, options)=>(_target, context)=>{
        if (context.static) throw new Error("Cannot inject for static property.");
        let injected = null;
        return {
            get () {
                if (options?.once && injected) return injected;
                for(let node = this; node; node = $e27ecf40e84d3a03$var$getParentContext(node)){
                    const container = node[$e27ecf40e84d3a03$var$$$provider];
                    if (container) {
                        const resolution = container.resolve(token);
                        if (!resolution.circular) return injected = container.create(resolution.path);
                    }
                }
                const container = $e27ecf40e84d3a03$var$globalContainer;
                if (container) {
                    const resolution = container.resolve(token);
                    if (!resolution.circular) return injected = container.create(resolution.path);
                }
                if (typeof token === "function") throw new Error(`Cannot create implementation for constructor "${token.name}"`);
                throw new Error(`Cannot find implementation for token "${token.key.description}"`);
            }
        };
    };
const $e27ecf40e84d3a03$var$getParentContext = (node)=>{
    if (node instanceof ShadowRoot) return node.host;
    return node.parentNode;
};
const $e27ecf40e84d3a03$var$$$provider = Symbol("@@provider");
const $e27ecf40e84d3a03$export$abe1e183e22e10ad = (at, container)=>{
    if (!$e27ecf40e84d3a03$var$globalContainer) $e27ecf40e84d3a03$var$globalContainer = container;
    at[$e27ecf40e84d3a03$var$$$provider] = container;
};

});

parcelRegister("7Cv7B", function(module, exports) {

$parcel$export(module.exports, "$Database", () => $58c4391d08e217c7$export$bb7a270a88d37fcf);
$parcel$export(module.exports, "$PreferenceService", () => $58c4391d08e217c7$export$1bd7826c7cb1ba6c);
$parcel$export(module.exports, "$CoreDataService", () => $58c4391d08e217c7$export$b792c3a317f692a9);
$parcel$export(module.exports, "$CoreDataProvider", () => $58c4391d08e217c7$export$f87e84017115cdf3);
$parcel$export(module.exports, "$AssetsResolver", () => $58c4391d08e217c7$export$5f5d8d18731043e9);
$parcel$export(module.exports, "$AssetsService", () => $58c4391d08e217c7$export$24117da5c1be0359);
$parcel$export(module.exports, "$AssetsCacheService", () => $58c4391d08e217c7$export$84ef7372728028a8);
$parcel$export(module.exports, "$FileStorage", () => $58c4391d08e217c7$export$37c0c1c0eeebbffd);
$parcel$export(module.exports, "$Gateway", () => $58c4391d08e217c7$export$c4117ee02540f1b4);
$parcel$export(module.exports, "$CharacterService", () => $58c4391d08e217c7$export$42e1babfb3d46231);
$parcel$export(module.exports, "$ChartService", () => $58c4391d08e217c7$export$13204243ab693e14);
$parcel$export(module.exports, "$MusicPlayService", () => $58c4391d08e217c7$export$abf7d1059efef8f);
$parcel$export(module.exports, "$ProfileService", () => $58c4391d08e217c7$export$d8178d746cebc02);
$parcel$export(module.exports, "$WorldModeService", () => $58c4391d08e217c7$export$c5cea3dd20ef968a);
$parcel$export(module.exports, "$CrossSiteScriptPluginService", () => $58c4391d08e217c7$export$88fb052570211665);

var $87X5s = parcelRequire("87X5s");
const $58c4391d08e217c7$export$bb7a270a88d37fcf = (0, $87X5s.token)("database");
const $58c4391d08e217c7$export$1bd7826c7cb1ba6c = (0, $87X5s.token)("preference");
const $58c4391d08e217c7$export$b792c3a317f692a9 = (0, $87X5s.token)("core-data");
const $58c4391d08e217c7$export$f87e84017115cdf3 = (0, $87X5s.token)("core-data-provider");
const $58c4391d08e217c7$export$5f5d8d18731043e9 = (0, $87X5s.token)("assets-resolver");
const $58c4391d08e217c7$export$24117da5c1be0359 = (0, $87X5s.token)("assets");
const $58c4391d08e217c7$export$84ef7372728028a8 = (0, $87X5s.token)("assets-cache");
const $58c4391d08e217c7$export$37c0c1c0eeebbffd = (0, $87X5s.token)("file-storage");
const $58c4391d08e217c7$export$c4117ee02540f1b4 = (0, $87X5s.token)("gateway");
const $58c4391d08e217c7$export$42e1babfb3d46231 = (0, $87X5s.token)("character");
const $58c4391d08e217c7$export$13204243ab693e14 = (0, $87X5s.token)("chart");
const $58c4391d08e217c7$export$abf7d1059efef8f = (0, $87X5s.token)("music-play");
const $58c4391d08e217c7$export$d8178d746cebc02 = (0, $87X5s.token)("profile");
const $58c4391d08e217c7$export$c5cea3dd20ef968a = (0, $87X5s.token)("world-mode");
const $58c4391d08e217c7$export$88fb052570211665 = (0, $87X5s.token)("cross-site-script");

});
parcelRegister("87X5s", function(module, exports) {

$parcel$export(module.exports, "token", () => $5eaccfa1c7d0de03$export$9e1725a4cfeada27);
$parcel$export(module.exports, "Injectable", () => $5eaccfa1c7d0de03$export$f27950dda4c163f1);
$parcel$export(module.exports, "Container", () => $5eaccfa1c7d0de03$export$42a852a2b6b56249);
const $5eaccfa1c7d0de03$export$9e1725a4cfeada27 = (e, t)=>({
        type: "token",
        key: Symbol(e),
        default: t
    }), $5eaccfa1c7d0de03$export$62a0befd656d626f = Symbol.for("classic-di-metadata"), $5eaccfa1c7d0de03$export$f27950dda4c163f1 = (e)=>(n, s)=>{
        const o = s.metadata;
        if (!o) throw new Error('`metadata` not found in decorator context. Forgot to polyfill "Symbol.metadata"?');
        o[$5eaccfa1c7d0de03$export$62a0befd656d626f] = e;
    };
var $5eaccfa1c7d0de03$export$1930a40dd9747c94, $5eaccfa1c7d0de03$var$o;
!function(e) {
    e[e.Create = 0] = "Create", e[e.Instance = 1] = "Instance", e[e.Reference = 2] = "Reference";
}($5eaccfa1c7d0de03$export$1930a40dd9747c94 || ($5eaccfa1c7d0de03$export$1930a40dd9747c94 = {})), function(e) {
    e[e.Resolving = 1] = "Resolving", e[e.Resolved = 2] = "Resolved";
}($5eaccfa1c7d0de03$var$o || ($5eaccfa1c7d0de03$var$o = {}));
class $5eaccfa1c7d0de03$export$42a852a2b6b56249 {
    #e = new Map;
    #t = new Map;
    #n;
    name;
    constructor(e){
        this.#n = e?.parent, this.name = e?.name;
    }
    add(e, t) {
        const n = e.key;
        if (this.#t.has(n)) throw new Error(`Instance of ${n.description} already exist.`);
        this.#t.set(n, t);
    }
    register(e) {
        const t = this.#s(e);
        if (!t) throw new Error(`No metadata found on ${e.name}.  Forgot to decorate with "Injectable" or polyfill "Symbol.metadata"?`);
        const n = t.implements;
        if (!n) throw new Error("Implementation token is required.");
        const { key: s } = n;
        if (this.#e.has(s)) throw new Error(`Cannot register "${s.description}" twice.`);
        this.#e.set(s, e);
    }
    resolve(e) {
        const t = new Map, n = this.#o(e);
        if (n.type === $5eaccfa1c7d0de03$export$1930a40dd9747c94.Instance) return {
            circular: !1,
            path: [
                n
            ]
        };
        {
            const { token: e } = n;
            e && t.set(e.key, {
                state: $5eaccfa1c7d0de03$var$o.Resolving,
                index: 0,
                node: n
            });
        }
        const r = [
            {
                node: n,
                index: -1
            }
        ], a = [];
        for(let e = r.at(-1); e; e = r.at(-1)){
            const { node: n } = e, i = ++e.index, { deps: c, token: l } = n;
            if (i === c.length) a.push(n), r.pop(), l && t.set(l.key, {
                state: $5eaccfa1c7d0de03$var$o.Resolved,
                node: n
            });
            else {
                const e = c[i], { key: n } = e, d = t.get(n);
                if (d) {
                    if (d.state === $5eaccfa1c7d0de03$var$o.Resolving) {
                        const e = r.map((e)=>e.node);
                        return e.push(d.node), {
                            circular: !0,
                            begin: d.index,
                            path: e
                        };
                    }
                    a.push({
                        type: $5eaccfa1c7d0de03$export$1930a40dd9747c94.Reference,
                        owner: this,
                        token: l,
                        node: d.node
                    });
                    continue;
                }
                const h = this.#r(e);
                h.type === $5eaccfa1c7d0de03$export$1930a40dd9747c94.Instance ? a.push(h) : (t.set(n, {
                    state: $5eaccfa1c7d0de03$var$o.Resolving,
                    index: r.length,
                    node: h
                }), r.push({
                    node: h,
                    index: -1
                }));
            }
        }
        return {
            circular: !1,
            path: a
        };
    }
    create(e) {
        const t = [];
        for(let n = 0, o = e.length; n < o; n++){
            const o = e[n];
            if (o.type === $5eaccfa1c7d0de03$export$1930a40dd9747c94.Instance) t.push(o.instance);
            else if (o.type === $5eaccfa1c7d0de03$export$1930a40dd9747c94.Create) {
                const { ctor: e, deps: { length: n }, owner: s, token: r } = o, a = t.slice(t.length - n), i = s.createInstance(e, a);
                r && s.#t.set(r.key, i), t.length -= n, t.push(i), o.instance = i;
            } else o.type === $5eaccfa1c7d0de03$export$1930a40dd9747c94.Reference && t.push(o.node.instance);
        }
        return t[0];
    }
    get(e) {
        return this.#a(e);
    }
    consume(e) {
        return this.#a(e);
    }
    createInstance(e, t) {
        return Reflect.construct(e, t);
    }
    #s(e) {
        return e[Symbol.metadata]?.[$5eaccfa1c7d0de03$export$62a0befd656d626f];
    }
    #o(e) {
        if ("function" == typeof e) {
            const t = this.#s(e);
            if (!t) throw new Error(`Injectable metadata not found on "${e.name}".`);
            const { implements: n } = t;
            return n && this.#e.get(n.key) === e ? this.#r(n) : {
                type: $5eaccfa1c7d0de03$export$1930a40dd9747c94.Create,
                owner: this,
                token: null,
                ctor: e,
                deps: t.requires ?? []
            };
        }
        return this.#r(e);
    }
    #r(e) {
        const { key: t } = e, n = this.#t.get(t);
        if (n) return {
            type: $5eaccfa1c7d0de03$export$1930a40dd9747c94.Instance,
            token: e,
            owner: this,
            instance: n
        };
        const o = this.#e.get(t);
        if (o) return {
            type: $5eaccfa1c7d0de03$export$1930a40dd9747c94.Create,
            token: e,
            owner: this,
            ctor: o,
            deps: this.#s(o).requires ?? []
        };
        const r = e.default;
        if (r) return {
            type: $5eaccfa1c7d0de03$export$1930a40dd9747c94.Instance,
            token: e,
            owner: this,
            instance: r
        };
        const a = this.#n;
        if (!a) throw new Error(`Cannot resolve "${t.description}".`);
        return a.#r(e);
    }
    #a(e) {
        const t = this.resolve(e);
        if (t.circular) throw new $5eaccfa1c7d0de03$export$ffb95e925976b2fe(t);
        return this.create(t.path);
    }
}
class $5eaccfa1c7d0de03$export$ffb95e925976b2fe extends Error {
    resolution;
    constructor(e){
        super(`Circular dependency: ${e.path.map((t, n)=>{
            const s = t.token?.key.description;
            return `${n === e.begin ? "{{ " : ""}[${s ? `<${s}> ` : ""}${t.ctor.name}]`;
        }).join(" -> ")} }}`), this.resolution = e;
    }
}

});


parcelRegister("ezVt6", function(module, exports) {

$parcel$export(module.exports, "FancyDialog", () => $a9d0e99d5f739938$export$290d9f7df84a6c68);
$parcel$export(module.exports, "confirm", () => $a9d0e99d5f739938$export$715f9d76bb8c1fea);
$parcel$export(module.exports, "alert", () => $a9d0e99d5f739938$export$5ea928c9faf85bd3);

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $dIVkE = parcelRequire("dIVkE");
parcelRequire("hlIIF");
var $eM6LD = parcelRequire("eM6LD");
parcelRequire("5vq1D");
var $TM3YZ = parcelRequire("TM3YZ");
var $6dcv9 = parcelRequire("6dcv9");
var $kKW7D = parcelRequire("kKW7D");
var $ct4Wi = parcelRequire("ct4Wi");
var $ivmHo = parcelRequire("ivmHo");
let $a9d0e99d5f739938$export$290d9f7df84a6c68 = (()=>{
    let _classDecorators = [
        (0, $TM3YZ.Component)({
            tag: "fancy-dialog",
            styles: [
                (0, $dIVkE.sheet),
                (0, $eM6LD.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $TM3YZ.HyplateElement);
    var FancyDialog = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            FancyDialog = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        dialog = (0, $6dcv9.element)("dialog");
        content = (0, $ivmHo.signal)((0, $ct4Wi.nil));
        #renderedSlot = null;
        render() {
            this.effect(()=>(0, $6dcv9.listen)(this.dialog)("close", ()=>{
                    this.content.set((0, $ct4Wi.nil));
                    this.#unmountSlots();
                }));
            return (0, $kKW7D.jsx)("dialog", {
                ref: this.dialog,
                children: (0, $kKW7D.jsx)((0, $ct4Wi.Show), {
                    when: this.content,
                    children: (node)=>node
                })
            });
        }
        showAlert(message, useSlot) {
            if (useSlot) this.#renderedSlot = (0, $kKW7D.mount)((0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
                children: message
            }), this);
            return new Promise((resolve)=>{
                this.content.set((0, $kKW7D.jsxs)("div", {
                    class: "modal-root",
                    part: "modal-root",
                    children: [
                        (0, $kKW7D.jsx)("div", {
                            class: "modal-content mb-3",
                            children: useSlot ? (0, $kKW7D.jsx)("slot", {
                                name: "content"
                            }) : message
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "modal-footer",
                            children: (0, $kKW7D.jsx)("button", {
                                type: "button",
                                class: "btn btn-primary",
                                onClick: ()=>{
                                    this.dialog.close();
                                    resolve();
                                },
                                children: "\u786E\u8BA4"
                            })
                        })
                    ]
                }));
                this.dialog.showModal();
            });
        }
        done = ()=>this.dialog.close("confirm");
        cancel = ()=>this.dialog.close("cancel");
        showConfirm(message, renderFooter) {
            return new Promise((resolve)=>{
                this.content.set((0, $kKW7D.jsxs)("div", {
                    part: "modal-root",
                    class: "modal-root",
                    onSubmit: (e)=>{
                        e.preventDefault();
                        this.done();
                    },
                    children: [
                        (0, $kKW7D.jsx)("div", {
                            class: "modal-content mb-3",
                            children: message
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "modal-footer",
                            children: (renderFooter ?? ((done, cancel)=>[
                                    (0, $kKW7D.jsx)("button", {
                                        type: "button",
                                        class: "btn btn-primary",
                                        onClick: done,
                                        children: "\u786E\u8BA4"
                                    }),
                                    (0, $kKW7D.jsx)("button", {
                                        type: "button",
                                        class: "btn btn-secondary",
                                        onClick: cancel,
                                        children: "\u53D6\u6D88"
                                    })
                                ]))(this.done, this.cancel)
                        })
                    ]
                }));
                this.dialog.onclose = ()=>{
                    switch(this.dialog.returnValue){
                        case "confirm":
                            resolve(true);
                            break;
                        default:
                            resolve(false);
                            break;
                    }
                };
                this.dialog.showModal();
            });
        }
        showPicker(renderContents) {
            return new Promise((resolve)=>{
                this.#renderedSlot = (0, $kKW7D.mount)((0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
                    children: renderContents((value)=>{
                        resolve(value);
                        this.done();
                    }, ()=>{
                        resolve(null);
                        this.cancel();
                    })
                }), this);
                this.content.set((0, $kKW7D.jsxs)("div", {
                    part: "modal-root",
                    class: "modal-root",
                    onSubmit: (e)=>{
                        e.preventDefault();
                        this.done();
                    },
                    children: [
                        (0, $kKW7D.jsx)("div", {
                            class: "modal-content mb-3",
                            children: (0, $kKW7D.jsx)("slot", {
                                name: "content"
                            })
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "modal-footer",
                            children: (0, $kKW7D.jsx)("slot", {
                                name: "footer"
                            })
                        })
                    ]
                }));
                this.dialog.onclose = this.dialog.oncancel = ()=>resolve(null);
                this.dialog.showModal();
            });
        }
        #unmountSlots() {
            const unmountIf = (content)=>content && (0, $kKW7D.unmount)(content);
            unmountIf(this.#renderedSlot);
            this.#renderedSlot = null;
            this.innerHTML = "";
        }
    };
    return FancyDialog = _classThis;
})();
const $a9d0e99d5f739938$var$globalMessage = new $a9d0e99d5f739938$export$290d9f7df84a6c68();
const $a9d0e99d5f739938$var$ensureInDocument = ()=>{
    if (!$a9d0e99d5f739938$var$globalMessage.isConnected) document.body.appendChild($a9d0e99d5f739938$var$globalMessage);
};
const $a9d0e99d5f739938$export$715f9d76bb8c1fea = (message, renderFooter)=>{
    $a9d0e99d5f739938$var$ensureInDocument();
    return $a9d0e99d5f739938$var$globalMessage.showConfirm(message, renderFooter);
};
const $a9d0e99d5f739938$export$5ea928c9faf85bd3 = (message)=>{
    $a9d0e99d5f739938$var$ensureInDocument();
    return $a9d0e99d5f739938$var$globalMessage.showAlert(message);
};

});
parcelRegister("dIVkE", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $9fdbdb6404491ea8$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $9fdbdb6404491ea8$export$6f093cfa640b7166 = "dialog{border-width:var(--bs-border-width);border-radius:var(--bs-border-radius);border-color:var(--bs-border-color);box-shadow:var(--bs-box-shadow);--bs-modal-footer-gap:4px}.modal-root{min-width:240px;display:flex;flex-direction:column}.modal-content{flex-grow:1}";
const $9fdbdb6404491ea8$export$995990c5c04c46f0 = (0, $04CUQ.create)($9fdbdb6404491ea8$export$6f093cfa640b7166, "file:///src/view/components/fancy-dialog/style.css.js");

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




parcelRegister("5CYCT", function(module, exports) {

$parcel$export(module.exports, "ResultCard", () => $418f877da8d800cf$export$3219b0bbd5caee8);

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $46udE = parcelRequire("46udE");

var $2aEFH = parcelRequire("2aEFH");
parcelRequire("5vq1D");
var $TM3YZ = parcelRequire("TM3YZ");
var $ivmHo = parcelRequire("ivmHo");
var $6dcv9 = parcelRequire("6dcv9");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $dxCXw = parcelRequire("dxCXw");

var $hyWAW = parcelRequire("hyWAW");
function $418f877da8d800cf$var$formatScore(score) {
    const raw = Math.floor(score).toString();
    if (raw.length > 8 || score < 0) throw new Error(`Invalid score ${score}`);
    const padded = raw.padStart(8, "0");
    return `${padded.slice(0, 2)}'${padded.slice(2, 5)}'${padded.slice(5, 8)}`;
}
const $418f877da8d800cf$var$canvas = (0, $6dcv9.element)("canvas");
const $418f877da8d800cf$var$ctx = $418f877da8d800cf$var$canvas.getContext("2d");
const $418f877da8d800cf$var$measureSongTitle = (name, fontFamily)=>{
    $418f877da8d800cf$var$ctx.font = `600 48px / 80px ${fontFamily}`;
    const measure = $418f877da8d800cf$var$ctx.measureText(name);
    return measure.width;
};
let $418f877da8d800cf$export$3219b0bbd5caee8 = (()=>{
    let _classDecorators = [
        (0, $TM3YZ.Component)({
            tag: "result-card",
            styles: [
                (0, $46udE.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $TM3YZ.HyplateElement);
    let _instanceExtraInitializers = [];
    let _chart_decorators;
    let _chart_initializers = [];
    let _musicPlay_decorators;
    let _musicPlay_initializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _assets_decorators;
    let _assets_initializers = [];
    let _preference_decorators;
    let _preference_initializers = [];
    var ResultCard = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _chart_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _musicPlay_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            _resolver_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsResolver))
            ];
            _assets_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsService))
            ];
            _preference_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$PreferenceService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _chart_decorators, {
                kind: "accessor",
                name: "chart",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"chart" in obj,
                    get: (obj)=>obj.chart,
                    set: (obj, value)=>{
                        obj.chart = value;
                    }
                },
                metadata: _metadata
            }, _chart_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _musicPlay_decorators, {
                kind: "accessor",
                name: "musicPlay",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"musicPlay" in obj,
                    get: (obj)=>obj.musicPlay,
                    set: (obj, value)=>{
                        obj.musicPlay = value;
                    }
                },
                metadata: _metadata
            }, _musicPlay_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _resolver_decorators, {
                kind: "accessor",
                name: "resolver",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"resolver" in obj,
                    get: (obj)=>obj.resolver,
                    set: (obj, value)=>{
                        obj.resolver = value;
                    }
                },
                metadata: _metadata
            }, _resolver_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _assets_decorators, {
                kind: "accessor",
                name: "assets",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"assets" in obj,
                    get: (obj)=>obj.assets,
                    set: (obj, value)=>{
                        obj.assets = value;
                    }
                },
                metadata: _metadata
            }, _assets_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _preference_decorators, {
                kind: "accessor",
                name: "preference",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"preference" in obj,
                    get: (obj)=>obj.preference,
                    set: (obj, value)=>{
                        obj.preference = value;
                    }
                },
                metadata: _metadata
            }, _preference_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ResultCard = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #chart_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _chart_initializers, void 0));
        get chart() {
            return this.#chart_accessor_storage;
        }
        set chart(value) {
            this.#chart_accessor_storage = value;
        }
        #musicPlay_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _musicPlay_initializers, void 0);
        get musicPlay() {
            return this.#musicPlay_accessor_storage;
        }
        set musicPlay(value) {
            this.#musicPlay_accessor_storage = value;
        }
        #resolver_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _resolver_initializers, void 0);
        get resolver() {
            return this.#resolver_accessor_storage;
        }
        set resolver(value) {
            this.#resolver_accessor_storage = value;
        }
        #assets_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _assets_initializers, void 0);
        get assets() {
            return this.#assets_accessor_storage;
        }
        set assets(value) {
            this.#assets_accessor_storage = value;
        }
        #preference_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _preference_initializers, void 0);
        get preference() {
            return this.#preference_accessor_storage;
        }
        set preference(value) {
            this.#preference_accessor_storage = value;
        }
        songTitle = (0, $6dcv9.element)("div");
        chartInfo = (0, $ivmHo.signal)(null);
        bestNo = (0, $ivmHo.signal)(null);
        noteResult = (0, $ivmHo.signal)({});
        scoreResult = (0, $ivmHo.signal)(null);
        clearRank = (0, $ivmHo.signal)(null);
        playTime = (0, $ivmHo.signal)(null);
        now = (0, $ivmHo.signal)(null);
        hd = (0, $ivmHo.signal)(false);
        render() {
            const showMaxMinus = this.preference.signal("showMaxMinus");
            this.effect(()=>{
                this.resizeCard();
                const ob = new ResizeObserver(()=>{
                    this.resizeCard();
                    // Resize only once.
                    ob.disconnect();
                });
                ob.observe(this);
                return ()=>{
                    ob.disconnect();
                };
            });
            this.autorun(()=>{
                const info = this.chartInfo();
                if (!info) return;
                const { chart: chart, song: song } = info;
                const { difficulty: difficulty } = chart;
                (0, $6dcv9.cssVar)(this, "potential-color", `var(--${difficulty}-light)`);
                (0, $6dcv9.cssVar)(this, "constant-color", `var(--${difficulty})`);
                (0, $6dcv9.cssVar)(this, "badge-border", `var(--${difficulty}-border)`);
                const title = this.chart.getName(chart, song);
                (0, $6dcv9.content)(this.songTitle, title);
                const fontFamily = getComputedStyle(this.shadowRoot.querySelector(".song-title")).fontFamily;
                const length = $418f877da8d800cf$var$measureSongTitle(title, fontFamily);
                const titleLength = length < 664 ? 664 : length;
                (0, $6dcv9.cssVar)(this, "title-length", `${titleLength}`);
            });
            return (0, $kKW7D.jsxs)("div", {
                class: "card",
                part: "card",
                "var:no-color": (0, $ivmHo.computed)(()=>{
                    const bestNo = this.bestNo();
                    if (!bestNo || bestNo > 3) return null;
                    return `var(--${bestNo})`;
                }),
                children: [
                    (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                        class: "cover",
                        src: (0, $ivmHo.computed)(()=>{
                            const info = this.chartInfo();
                            const hd = this.hd();
                            if (!info) return this.assets.getAssets(this.resolver.resolveUnknownCover());
                            const { chart: chart, song: song } = info;
                            return this.assets.getAssets(this.resolver.resolveCover(chart, song, hd));
                        }),
                        width: "288",
                        height: "288"
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "details",
                        children: [
                            (0, $kKW7D.jsxs)("div", {
                                class: "data-badge",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "potential",
                                        children: (0, $ivmHo.computed)(()=>this.scoreResult()?.potential.toFixed(4) ?? "")
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "constant",
                                        children: (0, $ivmHo.computed)(()=>this.chartInfo()?.chart.constant.toFixed(1) ?? "")
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "rank",
                                        children: [
                                            (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                                class: "grade",
                                                src: (0, $ivmHo.computed)(()=>{
                                                    const grade = this.scoreResult()?.grade;
                                                    return grade ? this.assets.getAssets(this.resolver.resolveGradeImg(grade)) : Promise.resolve(null);
                                                }),
                                                "class:hidden": (0, $ivmHo.computed)(()=>!this.scoreResult())
                                            }),
                                            (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                                class: "clear",
                                                src: (0, $ivmHo.computed)(()=>{
                                                    const clear = this.clearRank();
                                                    return clear ? this.assets.getAssets(this.resolver.resolveClearImg(clear)) : Promise.resolve(null);
                                                }),
                                                "class:hidden": (0, $ivmHo.computed)(()=>!this.clearRank())
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "no-badge",
                                        children: (0, $ivmHo.computed)(()=>{
                                            const bestNo = this.bestNo();
                                            return bestNo == null ? "--" : `#${bestNo}`;
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsx)("div", {
                                ref: this.songTitle,
                                class: "song-title",
                                children: "--"
                            }),
                            (0, $kKW7D.jsx)("div", {
                                class: (0, $ivmHo.computed)(()=>this.clearRank() === (0, $2aEFH.ClearRank).Maximum ? "score max" : "score"),
                                children: (0, $ivmHo.computed)(()=>$418f877da8d800cf$var$formatScore(this.scoreResult()?.score ?? 0))
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "play-result",
                                children: [
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "pure",
                                        children: [
                                            "Pure/",
                                            (0, $kKW7D.jsx)("span", {
                                                class: "count",
                                                children: (0, $ivmHo.computed)(()=>this.noteResult().pure ?? "?")
                                            }),
                                            "(",
                                            (0, $kKW7D.jsx)("span", {
                                                class: "perfect",
                                                children: (0, $ivmHo.computed)(()=>{
                                                    const { perfect: perfect, pure: pure } = this.noteResult();
                                                    if (perfect == null || pure == null) return "?";
                                                    if (showMaxMinus()) {
                                                        const count = pure - perfect;
                                                        return count ? `-${count}` : "max";
                                                    }
                                                    return `+${perfect}`;
                                                })
                                            }),
                                            ")"
                                        ]
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "far",
                                        children: [
                                            "Far/",
                                            (0, $kKW7D.jsx)("span", {
                                                class: "count",
                                                children: (0, $ivmHo.computed)(()=>this.noteResult().far ?? "?")
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "lost",
                                        children: [
                                            "Lost/",
                                            (0, $kKW7D.jsx)("span", {
                                                class: "count",
                                                children: (0, $ivmHo.computed)(()=>this.noteResult().lost ?? "?")
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "time",
                                        children: (0, $kKW7D.jsx)("time", {
                                            datetime: (0, $ivmHo.computed)(()=>this.playTime()?.toISOString()),
                                            title: (0, $ivmHo.computed)(()=>this.playTime()?.toString()),
                                            children: (0, $ivmHo.computed)(()=>{
                                                const now = this.now();
                                                const time = this.playTime();
                                                if (!now || !time) return "-";
                                                return (0, $hyWAW.duration)(+time, +now);
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }
        setChart(song, chart) {
            this.chartInfo.set({
                song: song,
                chart: chart
            });
        }
        setResult(noteResult, score, clear) {
            this.clearRank.set(clear);
            this.noteResult.set(noteResult ?? {});
            this.scoreResult.set(score);
        }
        setPlayTime(time) {
            this.playTime.set(time ? new Date(time) : null);
        }
        setNow(now) {
            this.now.set(new Date(now));
        }
        async setPlayResult(playResult) {
            if (!playResult) {
                this.chartInfo.set(null);
                this.setResult(null, null, null);
                this.setBest(null);
                return;
            }
            const [searched] = await this.chart.searchChart(playResult.chartId);
            if (!searched) return;
            const { chart: chart, song: song } = searched;
            this.setChart(song, chart);
            if (playResult.type === "note") this.setResult(playResult.result, this.musicPlay.computeScoreResult(this.musicPlay.computeScore(chart, playResult.result), chart), playResult.clear);
            else this.setResult(null, this.musicPlay.computeScoreResult(playResult.score, chart), playResult.clear);
            this.setPlayTime(playResult.date ?? null);
        }
        setBest(bestNo) {
            this.bestNo.set(bestNo);
        }
        setHD(hd) {
            this.hd.set(hd);
        }
        resizeCard() {
            const width = this.offsetWidth;
            (0, $6dcv9.cssVar)(this, "card-scale", `${width / 1000}`);
            this.style.height = `${width * 0.32}px`;
        }
    };
    return ResultCard = _classThis;
})();

});
parcelRegister("46udE", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $2fcf29e1d810b7c0$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $2fcf29e1d810b7c0$export$6f093cfa640b7166 = ":host{display:block;box-sizing:border-box;--title-length:664}.card{background-color:var(--bs-body-bg);transform:scale(var(--card-scale,1));transform-origin:0 0;box-sizing:border-box;border-radius:16px;box-shadow:0 0 8px 8px rgba(0,0,0,.12);width:1000px;height:320px;display:grid;grid-template-columns:288px 664px;padding:16px;gap:16px}.details{position:relative;width:100%}.data-badge{height:60px;background-color:var(--bs-secondary-bg);border-radius:8px}.data-badge>div{box-sizing:border-box;display:inline-flex;align-items:center;position:absolute;padding-top:4px;border-radius:8px;height:60px;font-size:40px}.potential{z-index:5;color:#fff;width:192px;padding-left:12px;background-color:var(--potential-color);border:var(--badge-border)}.constant{z-index:4;color:#fff;left:180px;width:calc(315px - 180px);padding-left:32px;background-color:var(--constant-color);border:var(--badge-border)}.hidden{visibility:hidden}.rank{z-index:3;background-color:var(--bs-secondary-bg);position:absolute;display:flex;left:300px;width:240px;gap:8px;justify-content:center}.rank img{width:96px;height:96px}.no-badge{font-weight:600;width:144px;left:520px;padding-left:48px;background-color:var(--no-color)}.song-title{font-size:48px;white-space:nowrap;width:664px;transform:scaleX(calc(664 / var(--title-length)));transform-origin:0 0;line-height:80px;font-weight:600}.score{font-size:90px;line-height:100px}.score.max{text-shadow:4px 4px #0f7185dd}.play-result{display:grid;width:100%;font-size:32px;line-height:48px;grid-template-columns:6fr 3fr 3fr 1fr}.pure{color:var(--pure)}.far{color:var(--far)}.lost{color:var(--lost)}";
const $2fcf29e1d810b7c0$export$995990c5c04c46f0 = (0, $04CUQ.create)($2fcf29e1d810b7c0$export$6f093cfa640b7166, "file:///src/view/components/result-card/style.css.js");

});

parcelRegister("2aEFH", function(module, exports) {

$parcel$export(module.exports, "Side", () => $194c1074bc11edc1$export$80a00690bda7f17e);
$parcel$export(module.exports, "Difficulty", () => $194c1074bc11edc1$export$15ea8b6154dfaef);
$parcel$export(module.exports, "difficulties", () => $194c1074bc11edc1$export$98fa45c372158f72);
$parcel$export(module.exports, "difficultyIndexes", () => $194c1074bc11edc1$export$d873ff6a1db680e9);
$parcel$export(module.exports, "formatRating", () => $194c1074bc11edc1$export$6cd762d00c0ff296);
$parcel$export(module.exports, "parseRating", () => $194c1074bc11edc1$export$6cb03bc901b3fff5);
$parcel$export(module.exports, "compareRating", () => $194c1074bc11edc1$export$1a05065c37a1b915);
$parcel$export(module.exports, "Grade", () => $194c1074bc11edc1$export$ef5bc7f15dd14743);
$parcel$export(module.exports, "ClearRank", () => $194c1074bc11edc1$export$27c979ae2d515816);
var $194c1074bc11edc1$export$80a00690bda7f17e;
(function(Side) {
    /**
     * 光芒侧
     */ Side[Side["Light"] = 0] = "Light";
    /**
     * 纷争侧
     */ Side[Side["Conflict"] = 1] = "Conflict";
    /**
     * 消色侧
     */ Side[Side["Colorless"] = 2] = "Colorless";
})($194c1074bc11edc1$export$80a00690bda7f17e || ($194c1074bc11edc1$export$80a00690bda7f17e = {}));
var $194c1074bc11edc1$export$15ea8b6154dfaef;
(function(Difficulty) {
    Difficulty["Past"] = "pst";
    Difficulty["Present"] = "prs";
    Difficulty["Future"] = "ftr";
    Difficulty["Beyond"] = "byd";
})($194c1074bc11edc1$export$15ea8b6154dfaef || ($194c1074bc11edc1$export$15ea8b6154dfaef = {}));
const $194c1074bc11edc1$export$98fa45c372158f72 = [
    $194c1074bc11edc1$export$15ea8b6154dfaef.Past,
    $194c1074bc11edc1$export$15ea8b6154dfaef.Present,
    $194c1074bc11edc1$export$15ea8b6154dfaef.Future,
    $194c1074bc11edc1$export$15ea8b6154dfaef.Beyond
];
const $194c1074bc11edc1$export$d873ff6a1db680e9 = {
    [$194c1074bc11edc1$export$15ea8b6154dfaef.Past]: 0,
    [$194c1074bc11edc1$export$15ea8b6154dfaef.Present]: 1,
    [$194c1074bc11edc1$export$15ea8b6154dfaef.Future]: 2,
    [$194c1074bc11edc1$export$15ea8b6154dfaef.Beyond]: 3
};
const $194c1074bc11edc1$export$6cd762d00c0ff296 = (rating)=>`${rating.level}${rating.plus ? "+" : ""}`;
const $194c1074bc11edc1$export$6cb03bc901b3fff5 = (text)=>({
        level: parseInt(text),
        plus: text.includes("+")
    });
const $194c1074bc11edc1$export$1a05065c37a1b915 = (a, b)=>{
    if (a.level !== b.level) return a.level - b.level;
    return +!!a.plus - +!!b.plus;
};
var $194c1074bc11edc1$export$ef5bc7f15dd14743;
(function(Grade) {
    Grade["EXPlus"] = "EX+";
    Grade["EX"] = "EX";
    Grade["AA"] = "AA";
    Grade["A"] = "A";
    Grade["B"] = "B";
    Grade["C"] = "C";
    Grade["D"] = "D";
})($194c1074bc11edc1$export$ef5bc7f15dd14743 || ($194c1074bc11edc1$export$ef5bc7f15dd14743 = {}));
var $194c1074bc11edc1$export$27c979ae2d515816;
(function(ClearRank) {
    ClearRank["Maximum"] = "Max";
    ClearRank["PureMemory"] = "PM";
    ClearRank["FullRecall"] = "FR";
    ClearRank["EasyClear"] = "EC";
    ClearRank["NormalClear"] = "NC";
    ClearRank["HardClear"] = "HC";
    ClearRank["TrackLost"] = "TL";
})($194c1074bc11edc1$export$27c979ae2d515816 || ($194c1074bc11edc1$export$27c979ae2d515816 = {}));

});

parcelRegister("dxCXw", function(module, exports) {

$parcel$export(module.exports, "AssetImage", () => $9dbc93de3839fa1e$export$2d8162d48fc3ae29);

var $kKW7D = parcelRequire("kKW7D");

var $e71xn = parcelRequire("e71xn");
parcelRequire("5vq1D");
var $6lZEy = parcelRequire("6lZEy");
var $ivmHo = parcelRequire("ivmHo");
var $ljGQq = parcelRequire("ljGQq");

var $21erW = parcelRequire("21erW");
const $9dbc93de3839fa1e$export$2d8162d48fc3ae29 = ({ src: src, noLoading: noLoading, ...props })=>{
    const $src = (0, $ivmHo.signal)(null);
    let resolveingPromise = null;
    const handleSource = (source)=>{
        if (!source || (0, $21erW.isString)(source)) {
            $src.set(source || null);
            return;
        }
        resolveingPromise = source;
        if (!noLoading) $src.set((0, (/*@__PURE__*/$parcel$interopDefault($e71xn))));
        source.then((url)=>{
            // Only the last resolved promise apply.
            if (resolveingPromise === source) $src.set(url);
        }).catch(()=>{
            if (resolveingPromise === source) $src.set(null);
        });
    };
    (0, $6lZEy.isSubscribable)(src) ? (0, $ljGQq.useAutoRun)(()=>{
        handleSource(src());
    }) : handleSource(src);
    return (0, $kKW7D.jsx)("img", {
        src: $src,
        ...props
    });
};

});
parcelRegister("e71xn", function(module, exports) {
module.exports = new URL("../loading.cf56470b.gif", import.meta.url).toString();

});

parcelRegister("21erW", function(module, exports) {

$parcel$export(module.exports, "clone", () => $1786e2290bc2ff79$export$9cd59f9826255e47);
$parcel$export(module.exports, "once", () => $1786e2290bc2ff79$export$d2de3aaeafa91619);
$parcel$export(module.exports, "isString", () => $1786e2290bc2ff79$export$844ec244b1367d54);
$parcel$export(module.exports, "jsonModule", () => $1786e2290bc2ff79$export$249c5ce80fc1e086);
$parcel$export(module.exports, "esModule", () => $1786e2290bc2ff79$export$4a3506a8bc7a08df);
const $1786e2290bc2ff79$export$9cd59f9826255e47 = (json)=>JSON.parse(JSON.stringify(json));
const $1786e2290bc2ff79$export$d2de3aaeafa91619 = (factory)=>{
    let value = null;
    return ()=>value ??= factory();
};
const $1786e2290bc2ff79$export$844ec244b1367d54 = (value)=>typeof value === "string";
const $1786e2290bc2ff79$export$249c5ce80fc1e086 = (imports)=>// @ts-expect-error parcel json module is using common js and module.exports = JSON.parse(...)
    imports;
const $1786e2290bc2ff79$export$4a3506a8bc7a08df = $1786e2290bc2ff79$export$249c5ce80fc1e086;

});


parcelRegister("hyWAW", function(module, exports) {

$parcel$export(module.exports, "delay", () => $cc931054be9fd8ec$export$1391212d75b2ee65);
$parcel$export(module.exports, "duration", () => $cc931054be9fd8ec$export$1f34108aa9eb96ab);
$parcel$export(module.exports, "getDateFromDatetimeLocal", () => $cc931054be9fd8ec$export$6ca98ba4e48606a3);
$parcel$export(module.exports, "setDateToDatetimeLocal", () => $cc931054be9fd8ec$export$dc4460d49bbd0ca8);
$parcel$export(module.exports, "getNow", () => $cc931054be9fd8ec$export$3991332aae1fc754);
$parcel$export(module.exports, "arcaeaReleaseTS", () => $cc931054be9fd8ec$export$e6ab969ca6f80afb);

var $lF0nN = parcelRequire("lF0nN");
const $cc931054be9fd8ec$export$1391212d75b2ee65 = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const $cc931054be9fd8ec$var$secondMS = 1000;
const $cc931054be9fd8ec$var$minuteMS = 60 * $cc931054be9fd8ec$var$secondMS;
const $cc931054be9fd8ec$var$hourMS = 60 * $cc931054be9fd8ec$var$minuteMS;
const $cc931054be9fd8ec$var$dayMS = 24 * $cc931054be9fd8ec$var$hourMS;
const $cc931054be9fd8ec$var$suffix = [
    "d",
    "H",
    "m",
    "s"
];
const $cc931054be9fd8ec$var$factors = [
    $cc931054be9fd8ec$var$dayMS,
    $cc931054be9fd8ec$var$hourMS,
    $cc931054be9fd8ec$var$minuteMS,
    $cc931054be9fd8ec$var$secondMS
];
const $cc931054be9fd8ec$export$1f34108aa9eb96ab = (time, now)=>{
    const duration = now - time;
    let q = 0, r = duration;
    for(let i = 0; i < $cc931054be9fd8ec$var$factors.length; i++){
        const factor = $cc931054be9fd8ec$var$factors[i];
        [q, r] = (0, $lF0nN.divide)(r, factor);
        if (q > 0) return `${q}${$cc931054be9fd8ec$var$suffix[i]}`;
    }
    return "now";
};
const $cc931054be9fd8ec$export$6ca98ba4e48606a3 = (input)=>{
    return new Date(input.value);
};
const $cc931054be9fd8ec$export$dc4460d49bbd0ca8 = (input, date)=>{
    input.value = new Date(+date - date.getTimezoneOffset() * $cc931054be9fd8ec$var$minuteMS).toISOString().slice(0, -5);
};
const $cc931054be9fd8ec$export$3991332aae1fc754 = ()=>new Date(Date.now());
const $cc931054be9fd8ec$var$releaseDate = new Date();
$cc931054be9fd8ec$var$releaseDate.setFullYear(2017);
$cc931054be9fd8ec$var$releaseDate.setMonth(3);
$cc931054be9fd8ec$var$releaseDate.setDate(9);
const $cc931054be9fd8ec$export$e6ab969ca6f80afb = +$cc931054be9fd8ec$var$releaseDate;

});
parcelRegister("lF0nN", function(module, exports) {

$parcel$export(module.exports, "inferRange", () => $fc4db959d2394214$export$9ff9937a867ed215);
$parcel$export(module.exports, "isInt", () => $fc4db959d2394214$export$357fc28f6427af8b);
$parcel$export(module.exports, "divide", () => $fc4db959d2394214$export$cd007d971a5a2143);
$parcel$export(module.exports, "sum", () => $fc4db959d2394214$export$8a63f25cc62965f1);
$parcel$export(module.exports, "truncate", () => $fc4db959d2394214$export$6a506b36fdea397d);
const $fc4db959d2394214$export$9ff9937a867ed215 = (value, digit, round)=>{
    const int = Math.floor(value * 10 ** digit);
    const padded = int * 10;
    const base = 10 ** (digit + 1);
    const min = padded - (round ? 5 : 0), max = padded + (round ? 5 : 9);
    return [
        min / base,
        max / base
    ];
};
const $fc4db959d2394214$export$357fc28f6427af8b = Number.isInteger;
const $fc4db959d2394214$export$cd007d971a5a2143 = (a, b)=>{
    const quotient = Math.floor(a / b);
    const remainder = a - quotient * b;
    return [
        quotient,
        remainder
    ];
};
const $fc4db959d2394214$export$8a63f25cc62965f1 = (arr)=>arr.reduce((s, curr)=>s + curr, 0);
const $fc4db959d2394214$export$6a506b36fdea397d = (num, digit)=>{
    const zoom = 10 ** digit;
    const integer = Math.floor(num * zoom);
    return (integer / zoom).toFixed(digit);
};

});



parcelRegister("b0ze6", function(module, exports) {

$parcel$export(module.exports, "PotentialBadge", () => $803b05050075c1e9$export$860d916845fdd53a);

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");
parcelRequire("5vq1D");
var $ljGQq = parcelRequire("ljGQq");
var $TM3YZ = parcelRequire("TM3YZ");

var $jgGTy = parcelRequire("jgGTy");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $dwcPv = parcelRequire("dwcPv");

var $dxCXw = parcelRequire("dxCXw");
let $803b05050075c1e9$export$860d916845fdd53a = (()=>{
    let _classDecorators = [
        (0, $TM3YZ.Component)({
            tag: "potential-badge",
            styles: [
                (0, $jgGTy.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $TM3YZ.HyplateElement);
    let _instanceExtraInitializers = [];
    let _potential_decorators;
    let _potential_initializers = [];
    let _music_decorators;
    let _music_initializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _assets_decorators;
    let _assets_initializers = [];
    var PotentialBadge = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _potential_decorators = [
                (0, $ljGQq.Attribute)("potential", Number)
            ];
            _music_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            _resolver_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsResolver))
            ];
            _assets_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _potential_decorators, {
                kind: "accessor",
                name: "potential",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"potential" in obj,
                    get: (obj)=>obj.potential,
                    set: (obj, value)=>{
                        obj.potential = value;
                    }
                },
                metadata: _metadata
            }, _potential_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _music_decorators, {
                kind: "accessor",
                name: "music",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"music" in obj,
                    get: (obj)=>obj.music,
                    set: (obj, value)=>{
                        obj.music = value;
                    }
                },
                metadata: _metadata
            }, _music_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _resolver_decorators, {
                kind: "accessor",
                name: "resolver",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"resolver" in obj,
                    get: (obj)=>obj.resolver,
                    set: (obj, value)=>{
                        obj.resolver = value;
                    }
                },
                metadata: _metadata
            }, _resolver_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _assets_decorators, {
                kind: "accessor",
                name: "assets",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"assets" in obj,
                    get: (obj)=>obj.assets,
                    set: (obj, value)=>{
                        obj.assets = value;
                    }
                },
                metadata: _metadata
            }, _assets_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            PotentialBadge = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #potential_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _potential_initializers, void 0));
        get potential() {
            return this.#potential_accessor_storage;
        }
        set potential(value) {
            this.#potential_accessor_storage = value;
        }
        #music_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _music_initializers, void 0);
        get music() {
            return this.#music_accessor_storage;
        }
        set music(value) {
            this.#music_accessor_storage = value;
        }
        #resolver_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _resolver_initializers, void 0);
        get resolver() {
            return this.#resolver_accessor_storage;
        }
        set resolver(value) {
            this.#resolver_accessor_storage = value;
        }
        #assets_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _assets_initializers, void 0);
        get assets() {
            return this.#assets_accessor_storage;
        }
        set assets(value) {
            this.#assets_accessor_storage = value;
        }
        render() {
            (0, $dwcPv.syncProps)(this);
            return (0, $kKW7D.jsx)((0, $ljGQq.AutoRender), {
                children: ()=>{
                    const potential = this.potential();
                    const rating = this.#getPotentialRating(potential);
                    return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                        children: [
                            (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                noLoading: true,
                                src: this.assets.getAssets(this.resolver.resolvePotentialBadge(rating))
                            }),
                            (0, $kKW7D.jsx)("div", {
                                class: "potential",
                                children: potential == null || potential < 0 ? (0, $kKW7D.jsx)("span", {
                                    class: "off",
                                    children: "-"
                                }) : [
                                    (0, $kKW7D.jsx)("span", {
                                        class: "decimal",
                                        children: Math.floor(potential)
                                    }),
                                    (0, $kKW7D.jsxs)("span", {
                                        class: "fixed",
                                        children: [
                                            ".",
                                            `${Math.floor(potential * 100 - Math.floor(potential) * 100)}`.padStart(2, "0")
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                }
            });
        }
        #getPotentialRating(potential) {
            if (potential == null) return -1;
            return this.music.getPotentialRating(potential);
        }
    };
    return PotentialBadge = _classThis;
})();

});
parcelRegister("jgGTy", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $e070c902b815e937$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $e070c902b815e937$export$6f093cfa640b7166 = ":host{display:inline-block;position:relative;width:60px;height:60px}img{display:none;user-select:none;width:100%;height:100%}img[src]{display:inline}.potential{position:absolute;color:#fff;font-weight:700;left:50%;top:50%;font-family:Exo;-webkit-text-stroke:1px #25152a;transform:translate(-50%,-50%)}.off{font-size:24px}.decimal{font-size:24px}.fixed{font-size:18px;padding-top:5px}";
const $e070c902b815e937$export$995990c5c04c46f0 = (0, $04CUQ.create)($e070c902b815e937$export$6f093cfa640b7166, "file:///src/view/components/potential-badge/style.css.js");

});

parcelRegister("dwcPv", function(module, exports) {

$parcel$export(module.exports, "query", () => $9d78373778bba1dc$export$2fa187e846a241c4);
$parcel$export(module.exports, "input", () => $9d78373778bba1dc$export$b7e3ae3d7c15e42e);
$parcel$export(module.exports, "syncProps", () => $9d78373778bba1dc$export$b23ca50362483f82);
parcelRequire("5vq1D");
var $6dcv9 = parcelRequire("6dcv9");
var $kKW7D = parcelRequire("kKW7D");
const $9d78373778bba1dc$export$dbf350e5966cf602 = String.raw;
const $9d78373778bba1dc$export$2fa187e846a241c4 = (queries)=>(host)=>// @ts-expect-error Dynamic Implementation
        Object.fromEntries(Object.entries(queries).map(([key, value])=>[
                key,
                host.querySelector(value)
            ]));
const $9d78373778bba1dc$export$b7e3ae3d7c15e42e = ()=>(0, $6dcv9.element)("input");
const $9d78373778bba1dc$export$b23ca50362483f82 = (component)=>{
    const props = component.props;
    for(const key in props)if (key !== "ref" && key !== "children") {
        // @ts-expect-error dynamic key property
        const value = props[key];
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") (0, $6dcv9.attr)(component, key, value);
    }
};
class $9d78373778bba1dc$export$af1c1d0887531119 {
    prefix = "keypress-submit";
    requireParams = false;
    apply(el, _params, input) {
        if (input && el instanceof HTMLInputElement) return (0, $6dcv9.listen)(el)("keypress", (e)=>{
            if (e.key.toLowerCase() === "enter") el.form?.requestSubmit();
        });
    }
}
(0, $kKW7D.registerDirective)(new $9d78373778bba1dc$export$af1c1d0887531119());

});


parcelRegister("lwREd", function(module, exports) {

$parcel$export(module.exports, "formatSize", () => $fac63373b7adfc57$export$b2b30b93d41d91da);
$parcel$export(module.exports, "formatError", () => $fac63373b7adfc57$export$7b5b869ee98c16ab);
const $fac63373b7adfc57$var$sizes = [
    "B",
    "KB",
    "MB"
];
const $fac63373b7adfc57$var$rate = 1024;
const $fac63373b7adfc57$export$b2b30b93d41d91da = (byteSize)=>{
    let size = byteSize;
    let i = 0;
    const maxIndex = $fac63373b7adfc57$var$sizes.length - 1;
    while(i < maxIndex && size >= $fac63373b7adfc57$var$rate){
        i++;
        size /= $fac63373b7adfc57$var$rate;
    }
    return `${size.toFixed(2)}${$fac63373b7adfc57$var$sizes[i]}`;
};
const $fac63373b7adfc57$export$7b5b869ee98c16ab = (error)=>{
    if (error instanceof Error) return error.message;
    return `Unexpected thrown: ${JSON.stringify(error)}`;
};

});

parcelRegister("aZJkp", function(module, exports) {

$parcel$export(module.exports, "CharacterStatus", () => $8012c322046e89e5$export$8aa5aa332581390d);
$parcel$export(module.exports, "CharacterImageKind", () => $8012c322046e89e5$export$6243394a19c2832f);
var $8012c322046e89e5$export$8aa5aa332581390d;
(function(CharacterStatus) {
    CharacterStatus["Initial"] = "";
    CharacterStatus["Awaken"] = "u";
    /**
     * 对立、摩耶丢失的特殊状态
     */ CharacterStatus["Lost"] = "l";
})($8012c322046e89e5$export$8aa5aa332581390d || ($8012c322046e89e5$export$8aa5aa332581390d = {}));
var $8012c322046e89e5$export$6243394a19c2832f;
(function(CharacterImageKind) {
    /**
     * 头像图标
     */ CharacterImageKind[CharacterImageKind["Icon"] = 0] = "Icon";
    /**
     * 立绘
     */ CharacterImageKind[CharacterImageKind["Full"] = 1] = "Full";
})($8012c322046e89e5$export$6243394a19c2832f || ($8012c322046e89e5$export$6243394a19c2832f = {}));

});

parcelRegister("luSxA", function(module, exports) {

$parcel$export(module.exports, "groupBy", () => $fa66b4f275ce2485$export$3f063810d7bf01bd);
$parcel$export(module.exports, "indexBy", () => $fa66b4f275ce2485$export$e620e98009814b79);
$parcel$export(module.exports, "mapProps", () => $fa66b4f275ce2485$export$818745deef20e20);
function $fa66b4f275ce2485$export$3f063810d7bf01bd(arr, selector) {
    return arr.reduce((index, item)=>{
        (index[selector(item)] ??= []).push(item);
        return index;
    }, {});
}
function $fa66b4f275ce2485$export$e620e98009814b79(arr, selector) {
    return arr.reduce((index, item)=>{
        index[selector(item)] = item;
        return index;
    }, {});
}
function $fa66b4f275ce2485$export$818745deef20e20(obj, selector) {
    // @ts-expect-error cannot infer obj key as K
    return Object.fromEntries(Object.entries(obj).map(([key, value])=>{
        // @ts-expect-error cannot infer type of value
        return [
            key,
            selector(value)
        ];
    }));
}

});

parcelRegister("I463m", function(module, exports) {

$parcel$export(module.exports, "MusicPlayServiceImpl", () => $084749ae594f0888$export$bb76731e99a5d634);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $2aEFH = parcelRequire("2aEFH");

var $7Cv7B = parcelRequire("7Cv7B");
const $084749ae594f0888$var$MAX_BASE_SCORE = 10000000;
const $084749ae594f0888$var$EX_PLUS_SCORE = 9900000;
const $084749ae594f0888$var$EX_SCORE = 9800000;
const $084749ae594f0888$var$AA_SCORE = 9500000;
const $084749ae594f0888$var$A_SCORE = 9200000;
const $084749ae594f0888$var$B_SCORE = 8900000;
const $084749ae594f0888$var$C_SCORE = 8600000;
const $084749ae594f0888$var$EX_RATIO = 200000;
const $084749ae594f0888$var$AA_RATIO = 300000;
// @ts-expect-error object entries type
const $084749ae594f0888$var$GRADE_INDEX = Object.fromEntries(Object.values((0, $2aEFH.Grade)).map((grade, i)=>[
        grade,
        i
    ]));
let $084749ae594f0888$export$bb76731e99a5d634 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$ChartService)
            ],
            implements: (0, $7Cv7B.$MusicPlayService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var MusicPlayServiceImpl = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            MusicPlayServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        chart;
        ex = $084749ae594f0888$var$EX_SCORE;
        grades = Object.values((0, $2aEFH.Grade));
        maxBase = $084749ae594f0888$var$MAX_BASE_SCORE;
        constructor(chart){
            this.chart = chart;
        }
        async getStatistics() {
            const songs = await this.chart.getSongData();
            const stats = await this.chart.getStatistics();
            const constants = songs.flatMap((s)=>s.charts.map((c)=>c.constant));
            const maxs = [
                ...constants
            ].sort((a, b)=>b - a).slice(0, 30);
            const maxptt = maxs.concat(maxs.slice(0, 10)).reduce((sum, curr)=>sum + curr + 2, 0) / 40;
            return {
                maximumPotential: maxptt,
                maximumSinglePotential: stats.maximumConstant + 2
            };
        }
        inferNoteResult(chart, perfect, far, lost, score) {
            const { note: note } = chart;
            if (perfect != null && far != null && lost != null) return {
                pure: note - far - lost,
                perfect: perfect,
                far: far,
                lost: lost
            };
            if (score != null && far != null && lost != null) {
                const pure = note - far - lost;
                const noPerfectScore = this.computeScore(chart, {
                    pure: pure,
                    perfect: 0,
                    far: far,
                    lost: lost
                });
                return {
                    pure: pure,
                    perfect: score - noPerfectScore,
                    far: far,
                    lost: lost
                };
            }
            if (score != null) {
                if (score >= $084749ae594f0888$var$MAX_BASE_SCORE) // 认为是PM
                return {
                    pure: note,
                    perfect: score - $084749ae594f0888$var$MAX_BASE_SCORE,
                    far: 0,
                    lost: 0
                };
                // 不考虑1far得分低于大P数，性1far也可以推断
                const oneFarScore = this.computeScore(chart, {
                    pure: note - 1,
                    perfect: 0,
                    far: 1,
                    lost: 0
                });
                if (score >= oneFarScore) return {
                    pure: note - 1,
                    perfect: score - oneFarScore,
                    far: 1,
                    lost: 0
                };
            }
            // 全连根据分数算far数量懒得写了，得多加参数
            return null;
        }
        computeScore(chart, playResult) {
            const { perfect: perfect, far: far, lost: lost } = playResult;
            return Math.floor($084749ae594f0888$var$MAX_BASE_SCORE * (1 - (far / 2 + lost) / chart.note)) + perfect;
        }
        computeGrade(score) {
            switch(true){
                case score >= $084749ae594f0888$var$EX_PLUS_SCORE:
                    return (0, $2aEFH.Grade).EXPlus;
                case score >= $084749ae594f0888$var$EX_SCORE:
                    return (0, $2aEFH.Grade).EX;
                case score >= $084749ae594f0888$var$AA_SCORE:
                    return (0, $2aEFH.Grade).AA;
                case score >= $084749ae594f0888$var$A_SCORE:
                    return (0, $2aEFH.Grade).A;
                case score >= $084749ae594f0888$var$B_SCORE:
                    return (0, $2aEFH.Grade).B;
                case score >= $084749ae594f0888$var$C_SCORE:
                    return (0, $2aEFH.Grade).C;
                default:
                    return (0, $2aEFH.Grade).D;
            }
        }
        computeClearRank(noteResult, chart, clear) {
            const { far: far, lost: lost, perfect: perfect } = noteResult;
            const { note: note } = chart;
            if (!lost) {
                if (!far) {
                    if (perfect === note) // 您
                    return (0, $2aEFH.ClearRank).Maximum;
                    return (0, $2aEFH.ClearRank).PureMemory;
                }
                // 即使全连也可能因为far太多被特殊角色在最后一个note给TL……
                // 不知道用啥角色的情况不考虑了，但是选了Track Lost就算他TL
                if (clear !== (0, $2aEFH.ClearRank).TrackLost) return (0, $2aEFH.ClearRank).FullRecall;
            }
            return clear;
        }
        computePotentialModifier(score) {
            if (score >= $084749ae594f0888$var$MAX_BASE_SCORE) // 不考虑非PM的超过1000W分，目前没有这样的谱
            return 2;
            if (score >= $084749ae594f0888$var$EX_SCORE) return (score - $084749ae594f0888$var$EX_SCORE) / $084749ae594f0888$var$EX_RATIO + 1;
            return (score - $084749ae594f0888$var$EX_SCORE) / $084749ae594f0888$var$AA_RATIO + 1;
        }
        computePotential(score, chart) {
            const { constant: constant } = chart;
            const modifier = this.computePotentialModifier(score);
            return Math.max(0, constant + modifier);
        }
        computeScoreResult(score, chart) {
            return {
                grade: this.computeGrade(score),
                chartId: chart.id,
                score: score,
                potential: this.computePotential(score, chart)
            };
        }
        computePMConstant(potential, overflow) {
            const target = potential - 2;
            const gapFactor = target >= 8 ? 10 : 2;
            return (overflow ? Math.ceil : Math.floor)(target * gapFactor) / gapFactor;
        }
        inverseScore(potential, constant) {
            const modifier = potential - constant;
            const rawScore = modifier < 1 ? modifier * $084749ae594f0888$var$AA_RATIO + $084749ae594f0888$var$AA_SCORE : (modifier - 1) * $084749ae594f0888$var$EX_RATIO + $084749ae594f0888$var$EX_SCORE;
            return Math.round(rawScore);
        }
        inverseConstant(potential, score, raw) {
            const modifier = this.computePotentialModifier(score);
            const rawConstant = potential - modifier;
            if (raw) return rawConstant;
            return Math.round(rawConstant * 10) / 10;
        }
        computeFar(score, note, overflow) {
            const count = ($084749ae594f0888$var$MAX_BASE_SCORE - score) * note * 2 / $084749ae594f0888$var$MAX_BASE_SCORE;
            return (overflow ? Math.floor : Math.ceil)(count);
        }
        compareGrade(a, b) {
            return $084749ae594f0888$var$GRADE_INDEX[a] - $084749ae594f0888$var$GRADE_INDEX[b];
        }
        getPotentialRating(potential) {
            return [
                3.5,
                7.0,
                10.0,
                11.0,
                12.0,
                12.5,
                13.0,
                Infinity
            ].findIndex((bound)=>potential < bound);
        }
        mapClearType(clearType, shinyPerfectCount, chart) {
            if (shinyPerfectCount === chart.note) return (0, $2aEFH.ClearRank).Maximum;
            switch(clearType){
                case 0:
                    return (0, $2aEFH.ClearRank).TrackLost;
                case 1:
                    return (0, $2aEFH.ClearRank).NormalClear;
                case 2:
                    return (0, $2aEFH.ClearRank).FullRecall;
                case 3:
                    return (0, $2aEFH.ClearRank).PureMemory;
                case 4:
                    return (0, $2aEFH.ClearRank).EasyClear;
                case 5:
                    return (0, $2aEFH.ClearRank).HardClear;
            }
            throw new Error(`\u{672A}\u{77E5}clear_type: ${clearType}`);
        }
        mapDifficulty(d) {
            return (0, $2aEFH.difficultyIndexes)[d];
        }
    };
    return MusicPlayServiceImpl = _classThis;
})();

});

parcelRegister("iS7qT", function(module, exports) {

$parcel$export(module.exports, "WorldModeServiceImpl", () => $dbd30922e0f19dd9$export$b9d6e3f0957900c6);

var $1I0Yl = parcelRequire("1I0Yl");

var $8tPGq = parcelRequire("8tPGq");

var $aZJkp = parcelRequire("aZJkp");

var $7Cv7B = parcelRequire("7Cv7B");

var $luSxA = parcelRequire("luSxA");

var $87X5s = parcelRequire("87X5s");

var $lF0nN = parcelRequire("lF0nN");

var $21erW = parcelRequire("21erW");
const $dbd30922e0f19dd9$var$BASE_PROG = 2.5;
const $dbd30922e0f19dd9$var$BASE_BOOST = 27;
const $dbd30922e0f19dd9$var$POTENTIAL_FACTOR = 2.45;
const $dbd30922e0f19dd9$var$CHARACTER_FACTOR_RATIO = 50;
let $dbd30922e0f19dd9$export$b9d6e3f0957900c6 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$CoreDataService),
                (0, $7Cv7B.$ChartService),
                (0, $7Cv7B.$MusicPlayService),
                (0, $7Cv7B.$AssetsResolver),
                (0, $7Cv7B.$Gateway),
                (0, $7Cv7B.$CharacterService)
            ],
            implements: (0, $7Cv7B.$WorldModeService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var WorldModeServiceImpl = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            WorldModeServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        core;
        chart;
        music;
        resolver;
        gateway;
        character;
        itemImages = (0, $21erW.once)(async ()=>{
            const items = await this.core.getItemsData();
            return Object.fromEntries(items.map((item)=>[
                    item.name,
                    item.img
                ]));
        });
        #songIndex = null;
        constructor(core, chart, music, resolver, gateway, character){
            this.core = core;
            this.chart = chart;
            this.music = music;
            this.resolver = resolver;
            this.gateway = gateway;
            this.character = character;
        }
        async getLongtermMaps() {
            const chapters = await this.core.getWorldMapLongTerm();
            const songIndex = await this.getSongIndex();
            const characterIndex = await this.character.getCharacterIndex();
            const items = await this.itemImages();
            return chapters.map((c)=>({
                    ...c,
                    maps: c.maps.map((m)=>this.withRewardImgs(items, m, songIndex, characterIndex))
                }));
        }
        async getEventMaps() {
            const maps = await this.core.getWorldMapEvents();
            const items = await this.itemImages();
            const songIndex = await this.getSongIndex();
            const characterIndex = await this.character.getCharacterIndex();
            // TODO 只显示当前可用的活动图
            return maps.map((m)=>this.withRewardImgs(items, m, songIndex, characterIndex));
        }
        getMapRewards(map) {
            const res = {};
            const { platforms: platforms } = map;
            for(const key in platforms){
                const platform = platforms[key];
                if (!platform) continue;
                const { reward: reward } = platform;
                if (!reward) continue;
                (res[reward.type] ??= []).push(reward.type === (0, $8tPGq.RewardType).Background || reward.type === (0, $8tPGq.RewardType).Item ? reward.name : reward.type === (0, $8tPGq.RewardType).Character ? reward.name : reward.name);
            }
            return res;
        }
        computePlayResult(potential) {
            return $dbd30922e0f19dd9$var$BASE_PROG + $dbd30922e0f19dd9$var$POTENTIAL_FACTOR * Math.sqrt(potential);
        }
        computeBasicProgress(step, potential) {
            return this.computePlayResult(potential) * step / $dbd30922e0f19dd9$var$CHARACTER_FACTOR_RATIO;
        }
        computeProgress(step, potential, bonus) {
            let result = this.computeBasicProgress(step, potential);
            if (bonus) {
                if (bonus.type === "legacy") {
                    result *= bonus.fragment;
                    result *= bonus.stamina;
                } else if (bonus.type === "new") {
                    if (bonus.x4) result *= 4;
                }
            }
            return result;
        }
        computeProgressRange(map, currentProgress, targetLevel) {
            let min = this.computeDistance(map, currentProgress, targetLevel, false).distance, max = this.computeDistance(map, currentProgress, targetLevel, true).distance;
            if (min) // 超出0.1保证进入格子
            min += 0.1;
            if (max) // 少0.1保证不过头
            max -= 0.1;
            return [
                min,
                max
            ];
        }
        computeRemainingProgress(map, currentProgress) {
            const { level: reachedLevel } = currentProgress;
            const platforms = map.platforms;
            let nextRewardData = null;
            loop: for(let currentLevel = reachedLevel; currentLevel <= platforms.length; currentLevel++){
                const platform = platforms[currentLevel];
                const { reward: reward } = platform;
                if (reward) switch(reward.type){
                    case (0, $8tPGq.RewardType).Character:
                    case (0, $8tPGq.RewardType).Song:
                        nextRewardData = {
                            img: reward.img,
                            level: currentLevel
                        };
                        break loop;
                }
            }
            let nextReward = null;
            if (nextRewardData) {
                const distance = this.computeDistance(map, currentProgress, nextRewardData.level, false);
                nextReward = {
                    img: nextRewardData.img,
                    remaining: distance
                };
            }
            const totalDistance = this.computeDistance(map, currentProgress, platforms.length, true);
            return {
                nextReward: nextReward,
                total: totalDistance
            };
        }
        inversePlayResult(progress, step) {
            return progress * $dbd30922e0f19dd9$var$CHARACTER_FACTOR_RATIO / step;
        }
        inverseBasicProgress(progress, step, overflow) {
            const rootOfPotential = (this.inversePlayResult(progress, step) - $dbd30922e0f19dd9$var$BASE_PROG) / $dbd30922e0f19dd9$var$POTENTIAL_FACTOR;
            if (rootOfPotential < 0) {
                // 平方根为负数，进度必然超过
                if (overflow) // 作为下限的时候，可以用0
                return 0;
                return NaN;
            }
            const potential = rootOfPotential ** 2;
            return potential;
        }
        async inverseProgress(step, range) {
            const chartStats = await this.chart.getStatistics();
            const musicStats = await this.music.getStatistics();
            const solutions = [];
            const [low, high] = range;
            // 无加成
            solutions.push(this.solveProgressRange(step, range, chartStats, musicStats));
            // 新图
            {
                const solution = this.solveProgressRange(step, [
                    low / 4,
                    high / 4
                ], chartStats, musicStats);
                solution.world = {
                    type: "new",
                    x4: true
                };
                solutions.push(solution);
            }
            // 老图
            // 体力倍数
            for (const stamina of [
                2,
                4,
                6
            ])// 残片加成
            for (const fragment of [
                1,
                1.1,
                1.25,
                1.5
            ]){
                const ratio = fragment * stamina;
                const solution = this.solveProgressRange(step, [
                    low / ratio,
                    high / ratio
                ], chartStats, musicStats);
                solution.world = {
                    type: "legacy",
                    fragment: fragment,
                    stamina: stamina
                };
                solutions.push(solution);
            }
            return solutions;
        }
        inverseConstantRange(playResult, score, step, progress) {
            if (!score) return null;
            let min = -Infinity, max = Infinity;
            if (playResult) {
                const base = Math.floor(playResult * 10);
                min = base * 10 / 100;
                max = (base * 10 + 10) / 100;
            }
            if (step && progress) {
                // TODO 验证实际显示的progress是截尾还是舍入
                const [minProgress, maxProgress] = (0, $lF0nN.inferRange)(progress, 1, false);
                const [minStep, maxStep] = (0, $lF0nN.isInt)(step) ? (0, $lF0nN.inferRange)(step, 1, false) : [
                    step,
                    step
                ];
                const minPlayResult = this.inversePlayResult(minProgress, maxStep);
                const maxPlayResult = this.inversePlayResult(maxProgress, minStep);
                // 缩小范围
                min = Math.max(min, minPlayResult);
                max = Math.min(max, maxPlayResult);
            }
            if (!(isFinite(min) && isFinite(max))) return null;
            return [
                this.inverseConstant(min, score),
                this.inverseConstant(max, score)
            ];
        }
        inverseBeyondBoost(difference, score, raw) {
            const potentialRoot = (difference - $dbd30922e0f19dd9$var$BASE_BOOST) / $dbd30922e0f19dd9$var$POTENTIAL_FACTOR;
            if (potentialRoot < 0) return NaN;
            const potential = potentialRoot ** 2;
            return this.music.inverseConstant(potential, score, raw);
        }
        inverseCharacterExp(difference, score, raw) {
            const potential = difference / 6;
            return this.music.inverseConstant(potential, score, raw);
        }
        inferConstant(min, max) {
            const possible = [];
            const min10 = Math.ceil(min * 10);
            const max10 = Math.floor(max * 10);
            for(let rating10 = min10; rating10 <= max10; rating10++)// level 7 以下最小单位为.5
            if (rating10 >= 80 || rating10 % 5 === 0) possible.push(rating10 / 10);
            return possible;
        }
        async getSongIndex() {
            return this.#songIndex ??= (0, $luSxA.indexBy)(await this.chart.getSongData(), (s)=>s.id);
        }
        solveProgressRange(step, [low, high], chartStats, musicStats) {
            const maximum = chartStats.maximumConstant;
            const minimum = chartStats.minimumConstant;
            const maximumPtt = musicStats.maximumSinglePotential;
            const lowPtt = this.inverseBasicProgress(low, step, true);
            const highPtt = Math.min(maximumPtt, this.inverseBasicProgress(high, step, false));
            const solution = {
                world: null,
                highPtt: highPtt,
                lowPtt: lowPtt,
                invalidMessage: null,
                pmRange: false
            };
            if (isNaN(highPtt)) solution.invalidMessage = "\u65E0\u6CD5\u964D\u843D\uFF0C\u653E\u7F6E0\u5206\u7ED3\u7B97\u4E5F\u4F1A\u524D\u8FDB\u8FC7\u5934";
            else if (lowPtt > maximumPtt) solution.invalidMessage = `PM\u{6700}\u{9AD8}\u{5B9A}\u{6570}${maximum}\u{8C31}\u{9762}\u{4E5F}\u{65E0}\u{6CD5}\u{524D}\u{8FDB}\u{8FD9}\u{4E48}\u{591A}`;
            else {
                const minConstant = Math.max(minimum, this.music.computePMConstant(lowPtt, true));
                const maxConstant = this.music.computePMConstant(highPtt, false);
                if (maxConstant <= maximum && minConstant <= maxConstant) solution.pmRange = [
                    minConstant,
                    maxConstant
                ];
            }
            return solution;
        }
        findItemImage(name, itemImages) {
            const result = itemImages[name];
            if (!result) return "";
            return this.assets(new URL(result));
        }
        withRewardImgs(items, map, songIndex, characterIndex) {
            return {
                ...map,
                platforms: Object.entries(map.platforms).map(([key, value])=>{
                    const level = +key + 1;
                    if (!value) return [
                        level,
                        value
                    ];
                    if (!value.reward) return [
                        level,
                        {
                            ...value,
                            reward: undefined
                        }
                    ];
                    const { reward: reward } = value;
                    return [
                        level,
                        {
                            ...value,
                            reward: (()=>{
                                const type = reward.type;
                                switch(reward.type){
                                    case (0, $8tPGq.RewardType).Background:
                                        return reward;
                                    case (0, $8tPGq.RewardType).Character:
                                        return {
                                            ...reward,
                                            img: this.assets(this.resolver.resoveCharacterImage({
                                                id: reward.id,
                                                kind: (0, $aZJkp.CharacterImageKind).Icon,
                                                status: (0, $aZJkp.CharacterStatus).Initial
                                            })),
                                            name: characterIndex[reward.id].name.zh
                                        };
                                    case (0, $8tPGq.RewardType).Item:
                                        return {
                                            type: (0, $8tPGq.RewardType).Item,
                                            count: reward.count,
                                            name: reward.name,
                                            img: this.findItemImage(reward.name, items)
                                        };
                                    case (0, $8tPGq.RewardType).Song:
                                        const song = songIndex[reward.id];
                                        if (!song) debugger;
                                        return {
                                            ...reward,
                                            img: this.assets(this.resolver.resolveCover(song.charts[2], song, false)),
                                            name: song.name
                                        };
                                    default:
                                        throw new Error(`Unknown reward type: ${type}`);
                                }
                            })()
                        }
                    ];
                }).reduce((acc, [k, v], i)=>{
                    acc[k] = v;
                    acc.length = i + 1;
                    return acc;
                }, {
                    length: 0
                })
            };
        }
        computeDistance(map, currentProgress, targetLevel, overflow) {
            let distance = 0;
            let { level: reachedLevel, progress: progress } = currentProgress;
            const { platforms: platforms } = map;
            for(let currentLevel = reachedLevel; currentLevel <= targetLevel; currentLevel++){
                if (!overflow && currentLevel === targetLevel) break;
                distance += currentLevel === reachedLevel ? progress : platforms[currentLevel].length;
            }
            return {
                distance: distance
            };
        }
        inverseConstant(playResult, score) {
            const potentialRoot = (playResult - $dbd30922e0f19dd9$var$BASE_PROG) / $dbd30922e0f19dd9$var$POTENTIAL_FACTOR;
            if (potentialRoot < 0) return NaN;
            return this.music.inverseConstant(potentialRoot ** 2, score, true);
        }
        assets(url) {
            return this.gateway.direct(url).href;
        }
    };
    return WorldModeServiceImpl = _classThis;
})();

});
parcelRegister("8tPGq", function(module, exports) {

$parcel$export(module.exports, "RewardType", () => $62c91f67438bab8f$export$72399f47d5823914);
$parcel$export(module.exports, "PlatformType", () => $62c91f67438bab8f$export$46aeff19cbe52427);
var $62c91f67438bab8f$export$72399f47d5823914;
(function(RewardType) {
    RewardType[RewardType["Item"] = 0] = "Item";
    RewardType[RewardType["Song"] = 1] = "Song";
    RewardType[RewardType["Character"] = 2] = "Character";
    RewardType[RewardType["Background"] = 3] = "Background";
})($62c91f67438bab8f$export$72399f47d5823914 || ($62c91f67438bab8f$export$72399f47d5823914 = {}));
var $62c91f67438bab8f$export$46aeff19cbe52427;
(function(PlatformType) {
    PlatformType[PlatformType["Stamina"] = 0] = "Stamina";
    PlatformType[PlatformType["FixedSpeed"] = 1] = "FixedSpeed";
    PlatformType[PlatformType["Restriction"] = 2] = "Restriction";
    PlatformType[PlatformType["Random"] = 3] = "Random";
})($62c91f67438bab8f$export$46aeff19cbe52427 || ($62c91f67438bab8f$export$46aeff19cbe52427 = {}));

});


parcelRegister("eJy3F", function(module, exports) {

$parcel$export(module.exports, "ChartServiceImpl", () => $ab9fafe3723706f8$export$3c5f23b4fd325ec1);

var $1I0Yl = parcelRequire("1I0Yl");

var $2aEFH = parcelRequire("2aEFH");

var $ibL7y = parcelRequire("ibL7y");

var $7Cv7B = parcelRequire("7Cv7B");

var $luSxA = parcelRequire("luSxA");

var $87X5s = parcelRequire("87X5s");
const $ab9fafe3723706f8$var$FREE_PACKS = [
    "Arcaea",
    "Extend Archive",
    "World Extend"
];
let $ab9fafe3723706f8$export$3c5f23b4fd325ec1 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$AssetsResolver),
                (0, $7Cv7B.$Gateway),
                (0, $7Cv7B.$CoreDataService)
            ],
            implements: (0, $7Cv7B.$ChartService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ChartServiceImpl = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ChartServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        resolver;
        gateway;
        core;
        freePacks = $ab9fafe3723706f8$var$FREE_PACKS;
        #songIndex = null;
        constructor(resolver, gateway, core){
            this.resolver = resolver;
            this.gateway = gateway;
            this.core = core;
        }
        getSongData() {
            return this.core.getChartData();
        }
        async getSongIndex() {
            return this.#songIndex ??= await this.#initSongIndex();
        }
        async getStatistics() {
            const songs = await this.getSongData();
            const statistics = (0, $2aEFH.difficulties).reduce((map, difficulty)=>{
                map[difficulty] = {
                    count: 0,
                    notes: 0
                };
                return map;
            }, {});
            let maximumConstant = -Infinity, minimumConstant = Infinity;
            const levels = new Map();
            for (const song of songs)for (const chart of song.charts){
                const { level: level, plus: plus } = chart;
                levels.set(level, (levels.get(level) ?? new Set()).add(!!plus));
                const stat = statistics[chart.difficulty];
                stat.count++;
                stat.notes += chart.note;
                maximumConstant = Math.max(maximumConstant, chart.constant);
                minimumConstant = Math.min(minimumConstant, chart.constant);
            }
            return {
                difficulties: statistics,
                ratings: [
                    ...levels
                ].flatMap(([level, plusSet])=>[
                        ...plusSet
                    ].map((plus)=>({
                            level: level,
                            plus: plus
                        }))).sort((0, $2aEFH.compareRating)),
                maximumConstant: maximumConstant,
                minimumConstant: minimumConstant
            };
        }
        async searchChart(searchText) {
            if (!searchText) return [];
            const songs = await this.getSongData();
            const matches = [];
            for (const song of songs)for (const chart of song.charts)candidateMatch: for (const candidate of [
                song.name,
                chart.id,
                chart.override?.name ?? "",
                ...song.alias
            ]){
                const match = (0, $ibL7y.searchMatch)(searchText, candidate);
                if (match != null) {
                    matches.push({
                        song: song,
                        bpm: this.getBPM(chart, song),
                        constant: chart.constant,
                        cover: this.getCover(chart, song),
                        difficulty: chart.difficulty,
                        sort: match,
                        chart: chart,
                        title: this.getName(chart, song)
                    });
                    break candidateMatch;
                }
            }
            return matches.sort((a, b)=>{
                if (a.sort !== b.sort) return a.sort - b.sort;
                return (0, $2aEFH.difficulties).indexOf(b.difficulty) - (0, $2aEFH.difficulties).indexOf(a.difficulty);
            });
        }
        async queryChartsByConstant(min, max) {
            const songs = await this.getSongData();
            const min10 = Math.round(min * 10);
            const max10 = Math.round(max * 10);
            const items = songs.flatMap((s)=>s.charts.map((c)=>({
                        song: s,
                        chart: c
                    }))).sort((a, b)=>a.chart.constant - b.chart.constant).filter((x)=>{
                const c = Math.round(x.chart.constant * 10);
                return min10 <= c && c <= max10;
            });
            return items.map((item)=>({
                    song: item.song,
                    bpm: this.getBPM(item.chart, item.song),
                    chart: item.chart,
                    constant: item.chart.constant,
                    cover: this.getCover(item.chart, item.song),
                    difficulty: item.chart.difficulty,
                    sort: 0,
                    title: this.getName(item.chart, item.song)
                }));
        }
        async roll(min, max) {
            const results = await this.queryChartsByConstant(min, max);
            if (!results.length) return null;
            return results.at(Math.floor(Math.random() * results.length)) ?? null;
        }
        getName(chart, song) {
            return chart.override?.name ?? song.name;
        }
        getBPM(chart, song) {
            return chart.override?.bpm ?? song.bpm;
        }
        getCover(chart, song) {
            return this.gateway.proxy(this.resolver.resolveCover(chart, song, true)).toString();
        }
        async #initSongIndex() {
            const songs = await this.getSongData();
            return (0, $luSxA.indexBy)(songs, (s)=>s.id);
        }
    };
    return ChartServiceImpl = _classThis;
})();

});
parcelRegister("ibL7y", function(module, exports) {

$parcel$export(module.exports, "searchMatch", () => $d3ddce4c9ca90b6d$export$776cc6456d0d4832);
$parcel$export(module.exports, "trimSlash", () => $d3ddce4c9ca90b6d$export$99a7cc0443edb67);
/**
 * 搜素匹配，返回一个匹配系数
 */ const $d3ddce4c9ca90b6d$export$776cc6456d0d4832 = (searchText, candidate)=>{
    if (searchText === candidate) return 0;
    const index = candidate.toLowerCase().indexOf(searchText.toLowerCase());
    if (index === -1) return null;
    return 1 + index + Math.log(candidate.length);
};
const $d3ddce4c9ca90b6d$export$99a7cc0443edb67 = (str)=>{
    let i = str.length - 1;
    for(let char = str[i]; char === "/";){
        i--;
        char = str[i];
    }
    return str.slice(0, i);
};

});


parcelRegister("34Tyz", function(module, exports) {

$parcel$export(module.exports, "DirectGateway", () => $23dcd734373e4e62$export$948fed883ad4d4a);
$parcel$export(module.exports, "ProxyGateway", () => $23dcd734373e4e62$export$c5e7150b800f5c0f);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $6Y9qE = parcelRequire("6Y9qE");

var $7Cv7B = parcelRequire("7Cv7B");
parcelRequire("5vq1D");
var $6lZEy = parcelRequire("6lZEy");
const $23dcd734373e4e62$var$assetsBase = "https://moyoez.github.io/ArcaeaResource-ActionUpdater/arcaea/assets/";
const $23dcd734373e4e62$var$assetsProxyBase = "https://mirror.ghproxy.com/raw.githubusercontent.com/MoYoez/ArcaeaResource-ActionUpdater/main/arcaea/assets/";
const $23dcd734373e4e62$var$dataProxyBase = "https://mirror.ghproxy.com/raw.githubusercontent.com/DarrenDanielDay/arcaea-toolbelt-data/main/src/data/";
const $23dcd734373e4e62$var$directGateway = {
    "//assets/": $23dcd734373e4e62$var$assetsBase,
    "//data/": "/arcaea-toolbelt-data/"
};
const $23dcd734373e4e62$var$proxyGateway = {
    "//assets/": $23dcd734373e4e62$var$assetsProxyBase,
    "//data/": $23dcd734373e4e62$var$dataProxyBase
};
let $23dcd734373e4e62$export$948fed883ad4d4a = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$Gateway)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DirectGateway = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            DirectGateway = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        direct(url) {
            return this.map(url, $23dcd734373e4e62$var$directGateway);
        }
        proxy(url) {
            return this.map(url, $23dcd734373e4e62$var$proxyGateway);
        }
        dynamicProxy(url) {
            return this.map(url, $23dcd734373e4e62$var$directGateway);
        }
        map(url, mapping) {
            if (url.protocol === (0, $6Y9qE.protocol)) return this.proxyCustomProtocol(url, mapping);
            return url;
        }
        proxyCustomProtocol(url, mapping) {
            const pathname = url.toString().slice((0, $6Y9qE.protocol).length);
            const pair = Object.entries(mapping).find(([key])=>pathname.startsWith(key));
            if (pair) {
                const [prefix, base] = pair;
                const baseURL = base.startsWith("/") ? new URL(base, "https://darrendanielday.github.io/arcaea-toolbelt-debug/") : base;
                return new URL(pathname.slice(prefix.length), baseURL);
            }
            throw new Error(`Unknown path: ${pathname}`);
        }
    };
    return DirectGateway = _classThis;
})();
let $23dcd734373e4e62$export$c5e7150b800f5c0f = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$Gateway),
            requires: [
                (0, $7Cv7B.$PreferenceService)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = $23dcd734373e4e62$export$948fed883ad4d4a;
    var ProxyGateway = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ProxyGateway = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        preference;
        ghproxy = false;
        constructor(preference){
            super();
            this.preference = preference;
            (0, $6lZEy.subscribe)(preference.signal("ghproxy"), (value)=>{
                this.ghproxy = value;
            });
        }
        proxy(url) {
            return this.map(url, this.ghproxy ? $23dcd734373e4e62$var$proxyGateway : $23dcd734373e4e62$var$directGateway);
        }
        async dynamicProxy(url) {
            const { ghproxy: ghproxy } = await this.preference.get();
            this.ghproxy = ghproxy;
            return this.proxy(url);
        }
    };
    return ProxyGateway = _classThis;
})();

});
parcelRegister("6Y9qE", function(module, exports) {

$parcel$export(module.exports, "protocol", () => $512fa90ad904ebe5$export$a51d6b395ff4c65a);
$parcel$export(module.exports, "toolbelt", () => $512fa90ad904ebe5$export$1001660f7170b600);
const $512fa90ad904ebe5$export$a51d6b395ff4c65a = "arcaea-toolbelt:";
const $512fa90ad904ebe5$export$1001660f7170b600 = {
    data: (path)=>new URL(path, `${$512fa90ad904ebe5$export$a51d6b395ff4c65a}//data/`),
    assets: (path)=>new URL(path, `${$512fa90ad904ebe5$export$a51d6b395ff4c65a}//assets/`)
};

});


parcelRegister("ltSqR", function(module, exports) {

$parcel$export(module.exports, "ArcaeaToolbeltDatabaseContext", () => $04092337c6988bdd$export$a77041a9872c5f6);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $9aBed = parcelRequire("9aBed");

var $21erW = parcelRequire("21erW");
let $04092337c6988bdd$export$a77041a9872c5f6 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$Database)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ArcaeaToolbeltDatabaseContext = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ArcaeaToolbeltDatabaseContext = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        caches = "caches";
        preference = "preference";
        profiles = "profiles";
        core = "core";
        files = "files";
        getDB = (0, $21erW.once)(()=>this.#create());
        async transaction(stores, mode) {
            const db = await this.getDB();
            return db.transaction(stores, mode);
        }
        async objectStore(store, mode) {
            const transaction = await this.transaction([
                store
            ], mode);
            return transaction.objectStore(store);
        }
        #create() {
            const manager = new (0, $9aBed.DBVersionManager)().version(1, (db)=>{
                db.createObjectStore(this.caches, {
                    keyPath: "url"
                });
                db.createObjectStore(this.preference, {
                    keyPath: "key"
                });
                db.createObjectStore(this.profiles, {
                    keyPath: "username"
                });
            }).version(2, (db)=>{
                db.createObjectStore(this.core, {
                    keyPath: "path"
                });
            }).version(3, (db)=>{
                db.createObjectStore(this.files, {
                    keyPath: "url"
                });
            });
            return manager.open("arcaea-toolbelt", 3);
        }
    };
    return ArcaeaToolbeltDatabaseContext = _classThis;
})();

});
parcelRegister("9aBed", function(module, exports) {

$parcel$export(module.exports, "DBVersionManager", () => $6ad1ecfd834e86bc$export$2c82e64db1c95a50);
$parcel$export(module.exports, "openDB", () => $6ad1ecfd834e86bc$export$ca0ed41b1a2af7e);
$parcel$export(module.exports, "prefixWith", () => $6ad1ecfd834e86bc$export$33dde070747c7f6d);
$parcel$export(module.exports, "requestToPromise", () => $6ad1ecfd834e86bc$export$85ceed0783e42041);
$parcel$export(module.exports, "transactionToPromise", () => $6ad1ecfd834e86bc$export$2a5213bce1720b42);
$parcel$export(module.exports, "moveData", () => $6ad1ecfd834e86bc$export$e1889ff735213438);
class $6ad1ecfd834e86bc$export$2c82e64db1c95a50 {
    #versions = new Map();
    version(version, migrate) {
        this.#versions.set(version, migrate);
        return this;
    }
    async open(name, version) {
        let oldVersion = 0, newVersion = version;
        let db = null;
        const dbs = await indexedDB.databases?.() ?? [];
        const targetDB = dbs.find((db)=>db.name === name);
        oldVersion = targetDB?.version ?? 0;
        if (!oldVersion) // 除了首次访问，还有可能是Firefox 不支持indexedDB.databses方法，无法获取当前数据库的版本
        return $6ad1ecfd834e86bc$export$ca0ed41b1a2af7e(name, version, (event, request)=>{
            const db = request.result;
            const { oldVersion: oldVersion, newVersion: newVersion } = event;
            if (newVersion == null) throw new Error(`Unexpected Error: DB ${name} is being deleted.`);
            const upgradeRange = this.#getUpgradeRange(oldVersion, newVersion);
            for (const [, upgrade] of upgradeRange)upgrade(db, ()=>{
            // 在Firefox支持indexedDB.databases之前只能放弃所有数据迁移步骤
            });
        });
        const upgradeRange = this.#getUpgradeRange(oldVersion, newVersion);
        let currentVersion = oldVersion;
        for (const [nextVersion, upgrade] of upgradeRange){
            let migrations = [];
            db?.close();
            const currentDB = await $6ad1ecfd834e86bc$export$ca0ed41b1a2af7e(name, nextVersion, (event, request)=>{
                const { oldVersion: oldVersion, newVersion: newVersion } = event;
                if (newVersion == null) throw new Error(`Unexpected Error: DB ${name} is being deleted.`);
                console.assert(oldVersion === currentVersion, `old version does not match: ${oldVersion} != ${currentVersion}`);
                console.assert(newVersion === nextVersion, `new version does not match: ${newVersion} != ${nextVersion}`);
                const db = request.result;
                upgrade(db, (apply)=>{
                    migrations.push(apply);
                });
            });
            if (migrations.length) {
                console.debug(`Migrating data of ${name} from v${currentVersion} to v${nextVersion}...`);
                await Promise.all(migrations.map((migrate)=>migrate(currentDB)));
            }
            db = currentDB;
            currentVersion = nextVersion;
        }
        if (!db) throw new Error(`Version ${version} of database "${name}" not defined.`);
        return db;
    }
    #getUpgradeRange(oldVersion, newVersion) {
        return [
            ...this.#versions.entries()
        ].filter(([version])=>oldVersion <= version && version <= newVersion).sort(([a], [b])=>a - b);
    }
}
const $6ad1ecfd834e86bc$export$ca0ed41b1a2af7e = (name, version, onupgradeneeded)=>new Promise((resolve, reject)=>{
        const openRequest = indexedDB.open(name, version);
        openRequest.onerror = reject;
        openRequest.onupgradeneeded = (event)=>{
            if (!(event instanceof IDBVersionChangeEvent)) return;
            onupgradeneeded(event, openRequest);
        };
        openRequest.onsuccess = ()=>{
            resolve(openRequest.result);
        };
    });
const $6ad1ecfd834e86bc$export$33dde070747c7f6d = (prefix)=>{
    const upperBound = prefix.slice(0, -1) + String.fromCharCode(prefix.at(-1).charCodeAt(0));
    return IDBKeyRange.bound(prefix, upperBound, false, true);
};
const $6ad1ecfd834e86bc$export$85ceed0783e42041 = (query, options)=>new Promise((resolve, reject)=>{
        query.onsuccess = ()=>{
            resolve(query.result);
        };
        query.onerror = (e)=>{
            console.error(e);
            if (options?.emitError) reject(e);
            else resolve(null);
        };
    });
const $6ad1ecfd834e86bc$export$2a5213bce1720b42 = (transaction, options)=>new Promise((resolve, reject)=>{
        transaction.onerror = reject;
        transaction.onabort = reject;
        transaction.oncomplete = ()=>resolve();
    });
const $6ad1ecfd834e86bc$export$e1889ff735213438 = async (from, to)=>{
    const oldObjects = await $6ad1ecfd834e86bc$export$85ceed0783e42041(from.db.transaction([
        from.store
    ]).objectStore(from.store).getAll());
    if (oldObjects) {
        const transaction = to.db.transaction([
            to.store
        ], "readwrite");
        const store = transaction.objectStore(to.store);
        for (const old of oldObjects)store.put(old);
        await $6ad1ecfd834e86bc$export$2a5213bce1720b42(transaction);
    }
};
const $6ad1ecfd834e86bc$export$22a559d62c12b7ff = (name)=>$6ad1ecfd834e86bc$export$85ceed0783e42041(indexedDB.deleteDatabase(name), {
        emitError: true
    });

});


parcelRegister("gYX5w", function(module, exports) {

$parcel$export(module.exports, "AssetsResolverImpl", () => $c5d0159c6ab3658b$export$dc2facd477948474);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $2aEFH = parcelRequire("2aEFH");

var $aZJkp = parcelRequire("aZJkp");

var $6Y9qE = parcelRequire("6Y9qE");
let $c5d0159c6ab3658b$export$dc2facd477948474 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$AssetsResolver)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AssetsResolverImpl = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            AssetsResolverImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        resolve(path) {
            return (0, $6Y9qE.toolbelt).assets(path);
        }
        resoveCharacterImage({ id: id, status: status, kind: kind }) {
            if (id === -1) switch(kind){
                case (0, $aZJkp.CharacterImageKind).Icon:
                    return this.resolve(`char/unknown_icon.png`);
                case (0, $aZJkp.CharacterImageKind).Full:
                default:
                    return this.resolve(`char/-1_mp.png`);
            }
            // 光 & 对立觉醒前后完全一致
            if (id === 5) status = (0, $aZJkp.CharacterStatus).Initial;
            switch(kind){
                case (0, $aZJkp.CharacterImageKind).Icon:
                    return this.resolve(`char/${id}${status}_icon.png`);
                case (0, $aZJkp.CharacterImageKind).Full:
                default:
                    return this.resolve(`char/1080/${id}${status}.png`);
            }
        }
        resolvePotentialBadge(level) {
            return this.resolve(`img/rating_${level >= 0 ? level : "off"}.png`);
        }
        resolveCover(chart, song, hd) {
            const folder = !song.dl ? song.id : `dl_${song.id}`;
            const base = `songs/${folder}`;
            const suffix = hd ? ".jpg" : "_256.jpg";
            const version = chart.override?.cover ? `${(0, $2aEFH.difficultyIndexes)[chart.difficulty]}` : "base";
            const possible = [
                "",
                "1080_"
            ].map((prefix)=>`${prefix}${version}${suffix}`);
            const file = song.covers.find((cover)=>possible.includes(cover));
            const path = `${base}/${file}`;
            return this.resolve(path);
        }
        resolveUnknownCover() {
            return this.resolve("img/song_jacket_back_colorless.png");
        }
        resolveClearImg(clearType) {
            return this.resolve(`img/clear_type/${this.#getClearAssetsImgName(clearType)}.png`);
        }
        resolveGradeImg(scoreRank) {
            return this.resolve(`img/grade/mini/${this.#getGradeAssetsImgName(scoreRank)}.png`);
        }
        #getClearAssetsImgName(clearType) {
            switch(clearType){
                case (0, $2aEFH.ClearRank).EasyClear:
                    return "easy";
                case (0, $2aEFH.ClearRank).TrackLost:
                    return "fail";
                case (0, $2aEFH.ClearRank).FullRecall:
                    return "full";
                case (0, $2aEFH.ClearRank).HardClear:
                    return "hard";
                case (0, $2aEFH.ClearRank).PureMemory:
                case (0, $2aEFH.ClearRank).Maximum:
                    return "pure";
                case (0, $2aEFH.ClearRank).NormalClear:
                default:
                    return "normal";
            }
        }
        #getGradeAssetsImgName(grade) {
            return grade.replace("+", "plus").toLowerCase();
        }
    };
    return AssetsResolverImpl = _classThis;
})();

});

parcelRegister("8iy8R", function(module, exports) {

$parcel$export(module.exports, "characterData", () => $60aa7d05f690fd42$export$b99ebf535cc5b07);
$parcel$export(module.exports, "chartData", () => $60aa7d05f690fd42$export$fa75311891f179ce);
$parcel$export(module.exports, "itemsData", () => $60aa7d05f690fd42$export$81a07726944e47e0);
$parcel$export(module.exports, "meta", () => $60aa7d05f690fd42$export$6990040ee07315);
$parcel$export(module.exports, "packList", () => $60aa7d05f690fd42$export$4a70916ed1961946);
$parcel$export(module.exports, "songList", () => $60aa7d05f690fd42$export$e8cfc57a0a2cf653);
$parcel$export(module.exports, "worldMapsEvents", () => $60aa7d05f690fd42$export$d8cb020fe65fe8d2);
$parcel$export(module.exports, "worldMapsLongterm", () => $60aa7d05f690fd42$export$ae47ed3dfcfcb217);
const $60aa7d05f690fd42$export$8de3e08801b34e5a = "alias.json";
const $60aa7d05f690fd42$export$35d7e00025bec609 = "assets-info.json";
const $60aa7d05f690fd42$export$b99ebf535cc5b07 = "character-data.json";
const $60aa7d05f690fd42$export$30a86d91af8ff6e6 = "characters.json";
const $60aa7d05f690fd42$export$fa75311891f179ce = "chart-data.json";
const $60aa7d05f690fd42$export$81a07726944e47e0 = "item-data.json";
const $60aa7d05f690fd42$export$6990040ee07315 = "meta.json";
const $60aa7d05f690fd42$export$76f21a9c4db68ed = "notes-and-constants.json";
const $60aa7d05f690fd42$export$4a70916ed1961946 = "packlist.json";
const $60aa7d05f690fd42$export$e8cfc57a0a2cf653 = "songlist.json";
const $60aa7d05f690fd42$export$d8cb020fe65fe8d2 = "world-maps-events.json";
const $60aa7d05f690fd42$export$ae47ed3dfcfcb217 = "world-maps-longterm.json";

});

parcelRegister("2H6kD", function(module, exports) {

$parcel$export(module.exports, "CharacterServiceImpl", () => $1f64824a17846d90$export$85255e85d08db156);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $21erW = parcelRequire("21erW");

var $luSxA = parcelRequire("luSxA");
let $1f64824a17846d90$export$85255e85d08db156 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$CoreDataService)
            ],
            implements: (0, $7Cv7B.$CharacterService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CharacterServiceImpl = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            CharacterServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        core;
        constructor(core){
            this.core = core;
        }
        getCharacterIndex = (0, $21erW.once)(async ()=>{
            const characters = await this.getAllCharacters();
            return (0, $luSxA.indexBy)(characters, (char)=>char.id);
        });
        async getAllCharacters() {
            const json = await this.core.getCharacterData();
            return json;
        }
    };
    return CharacterServiceImpl = _classThis;
})();

});

var $b9ddce318ea82d67$exports = {};

(parcelRequire("8uu6p")).register(new URL("", import.meta.url).toString(), JSON.parse('["fXrFH","cross-site-script.js","aPYVI","../favicon.cc7e02d3.ico","e1wav","../loading.cf56470b.gif"]'));


var $1I0Yl = parcelRequire("1I0Yl");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $af652f68c9590705$export$6f093cfa640b7166 = "header{margin:8px 0}.logging{width:300px}.actions>button:not(:last-child){margin-right:1em}.modal-root{width:24em}#character-list::part(modal-root){width:auto}#character-list tbody td,#character-list thead th{border:var(--bs-border-width) var(--bs-border-color) solid;border-collapse:collapse;padding:.25em}#recent-list::part(modal-root){width:auto}#recent-list .panel{display:grid;grid-template-columns:1fr 500px;gap:1em}#recent-list .user{text-align:center;margin:.5em;position:relative}#recent-list potential-badge{position:absolute;right:.5em;bottom:2.5em}.avatar{width:95px;height:95px}";
const $af652f68c9590705$export$995990c5c04c46f0 = (0, $04CUQ.create)($af652f68c9590705$export$6f093cfa640b7166, "file:///src/view/components/plugin-panel/style.css.js");



var $6gcx6 = parcelRequire("6gcx6");
parcelRequire("hlIIF");
var $eM6LD = parcelRequire("eM6LD");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $ezVt6 = parcelRequire("ezVt6");
parcelRequire("5vq1D");
var $TM3YZ = parcelRequire("TM3YZ");
var $ivmHo = parcelRequire("ivmHo");
var $6dcv9 = parcelRequire("6dcv9");
var $ct4Wi = parcelRequire("ct4Wi");

var $5CYCT = parcelRequire("5CYCT");

var $b0ze6 = parcelRequire("b0ze6");

var $lwREd = parcelRequire("lwREd");

var $aZJkp = parcelRequire("aZJkp");

var $luSxA = parcelRequire("luSxA");
let $fce043c9bd9f3b91$export$67efbe0d3e45caec = (()=>{
    let _classDecorators = [
        (0, $TM3YZ.Component)({
            tag: "arcaea-toolbelt-plugin-panel",
            styles: [
                (0, $eM6LD.sheet),
                (0, $af652f68c9590705$export$995990c5c04c46f0),
                (0, $6gcx6.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $TM3YZ.HyplateElement);
    let _instanceExtraInitializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _service_decorators;
    let _service_initializers = [];
    let _world_decorators;
    let _world_initializers = [];
    let _chart_decorators;
    let _chart_initializers = [];
    let _music_decorators;
    let _music_initializers = [];
    var ToolPanel = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _resolver_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsResolver))
            ];
            _service_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$CrossSiteScriptPluginService))
            ];
            _world_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$WorldModeService))
            ];
            _chart_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _music_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _resolver_decorators, {
                kind: "accessor",
                name: "resolver",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"resolver" in obj,
                    get: (obj)=>obj.resolver,
                    set: (obj, value)=>{
                        obj.resolver = value;
                    }
                },
                metadata: _metadata
            }, _resolver_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _service_decorators, {
                kind: "accessor",
                name: "service",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"service" in obj,
                    get: (obj)=>obj.service,
                    set: (obj, value)=>{
                        obj.service = value;
                    }
                },
                metadata: _metadata
            }, _service_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _world_decorators, {
                kind: "accessor",
                name: "world",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"world" in obj,
                    get: (obj)=>obj.world,
                    set: (obj, value)=>{
                        obj.world = value;
                    }
                },
                metadata: _metadata
            }, _world_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _chart_decorators, {
                kind: "accessor",
                name: "chart",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"chart" in obj,
                    get: (obj)=>obj.chart,
                    set: (obj, value)=>{
                        obj.chart = value;
                    }
                },
                metadata: _metadata
            }, _chart_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _music_decorators, {
                kind: "accessor",
                name: "music",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"music" in obj,
                    get: (obj)=>obj.music,
                    set: (obj, value)=>{
                        obj.music = value;
                    }
                },
                metadata: _metadata
            }, _music_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ToolPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #resolver_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _resolver_initializers, void 0));
        get resolver() {
            return this.#resolver_accessor_storage;
        }
        set resolver(value) {
            this.#resolver_accessor_storage = value;
        }
        #service_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _service_initializers, void 0);
        get service() {
            return this.#service_accessor_storage;
        }
        set service(value) {
            this.#service_accessor_storage = value;
        }
        #world_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _world_initializers, void 0);
        get world() {
            return this.#world_accessor_storage;
        }
        set world(value) {
            this.#world_accessor_storage = value;
        }
        #chart_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _chart_initializers, void 0);
        get chart() {
            return this.#chart_accessor_storage;
        }
        set chart(value) {
            this.#chart_accessor_storage = value;
        }
        #music_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _music_initializers, void 0);
        get music() {
            return this.#music_accessor_storage;
        }
        set music(value) {
            this.#music_accessor_storage = value;
        }
        characterList = new (0, $ezVt6.FancyDialog)();
        recentList = new (0, $ezVt6.FancyDialog)();
        message = new (0, $ezVt6.FancyDialog)();
        lastProfile = null;
        render() {
            const profile$ = (0, $ivmHo.signal)(null);
            const querying$ = (0, $ivmHo.signal)(false);
            const logging$ = (0, $ivmHo.signal)("");
            const profiles$ = (0, $ivmHo.signal)([]);
            const selectRef = (0, $6dcv9.element)("select");
            let controller = new AbortController();
            const initProfile = async ()=>{
                profile$.set(await this.service.getProfile());
            };
            const openCharacterStatus = (profile)=>{
                this.characterList.showAlert((0, $kKW7D.jsx)("div", {
                    slot: "content",
                    children: (0, $kKW7D.jsx)($fce043c9bd9f3b91$var$CharacterList, {
                        resolver: this.resolver,
                        stats: profile.character_stats
                    })
                }), true);
            };
            const withErrorHandle = (handler)=>async ()=>{
                    try {
                        await handler();
                    } catch (error) {
                        this.message.showAlert((0, $lwREd.formatError)(error));
                    }
                };
            const refresh = ()=>{
                initProfile();
            };
            const syncMe = async (profile)=>{
                await this.service.syncMe(profile);
                this.message.showAlert("\u540C\u6B65\u6210\u529F");
            };
            const go = async (profile)=>{
                const querying = !querying$();
                querying$.set(querying);
                if (querying) {
                    const targets = Array.from(selectRef.querySelectorAll("option")).filter((o)=>o.selected).map((o)=>o.value);
                    controller = this.service.startQueryBests(profile, targets, (msg)=>{
                        logging$.set(msg);
                    }, (profiles)=>{
                        querying$.set(false);
                        profiles$.set(profiles);
                        logging$.set("\u67E5\u8BE2\u5B8C\u6BD5");
                    }, (err)=>{
                        logging$.set(err);
                        querying$.set(false);
                    });
                } else controller.abort();
            };
            const close = ()=>{
                this.dispatchEvent(new CustomEvent("panel-close", {
                    bubbles: true,
                    cancelable: false
                }));
            };
            const syncBests = async ()=>{
                const profiles = profiles$();
                await this.service.syncProfiles(profiles);
                logging$.set("");
                this.message.showAlert(`\u{5B58}\u{6863}${profiles.map((p)=>p.username).join("\uFF0C")}\u{540C}\u{6B65}\u{6210}\u{529F}`);
            };
            const findExpChangedCharacter = (lastProfile, profile)=>{
                if (!lastProfile) return null;
                const previousIndex = (0, $luSxA.indexBy)(lastProfile.character_stats, (char)=>char.character_id);
                for (const character of profile.character_stats){
                    const previous = previousIndex[character.character_id];
                    if (!previous) continue;
                    const expDiff = character.exp - previous.exp;
                    if (expDiff) return {
                        expDiff: expDiff,
                        character: character
                    };
                }
                return null;
            };
            queueMicrotask(initProfile);
            return (0, $kKW7D.jsxs)("div", {
                class: "modal-root m-3",
                children: [
                    (0, $kKW7D.jsx)("header", {
                        children: (0, $kKW7D.jsx)("h1", {
                            children: "Arcaea Toolbelt Plugin"
                        })
                    }),
                    (0, $kKW7D.jsx)("main", {
                        class: "content",
                        children: (0, $kKW7D.jsx)((0, $ct4Wi.Show), {
                            when: profile$,
                            children: (profile)=>{
                                const { display_name: display_name, rating: rating, join_date: join_date, beyond_boost_gauge: beyond_boost_gauge, recent_score: recent_score } = profile;
                                const chart = recent_score[0];
                                const { score: score = 0, difficulty: difficulty = -1, song_id: song_id = "-" } = chart ?? {};
                                const { lastProfile: lastProfile } = this;
                                this.lastProfile = structuredClone(profile);
                                const players = [
                                    profile,
                                    ...profile.friends
                                ];
                                const isProfile = (p)=>p === profile;
                                const renderExpInferredConstant = ()=>{
                                    const expChange = findExpChangedCharacter(lastProfile, profile);
                                    const { expDiff: expDiff, character: character } = expChange ?? {};
                                    return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                        children: [
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "col",
                                                    children: [
                                                        "\u7ECF\u9A8C\u503C\u53D8\u5316\u89D2\u8272\uFF1A",
                                                        character ? `${character.display_name["zh-Hans"]}${character.variant ? `\u{FF08}${character.variant["zh-Hans"]}\u{FF09}` : ""}` : "-"
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "col",
                                                    children: [
                                                        "\u53D8\u5316\u91CF\uFF1A",
                                                        expDiff ?? "-"
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "col",
                                                    children: [
                                                        "\u7ECF\u9A8C\u503C\u53D8\u5316\u63A8\u6D4B\u5B9A\u6570\uFF1A",
                                                        expDiff ? this.world.inverseCharacterExp(expDiff, score) : "-"
                                                    ]
                                                })
                                            })
                                        ]
                                    });
                                };
                                const renderBeyondGaugeConstant = ()=>{
                                    const lastGauge = lastProfile ? +lastProfile.beyond_boost_gauge : NaN;
                                    const beyondGaugeDiff = beyond_boost_gauge - lastGauge;
                                    return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                        children: [
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "col-auto",
                                                    children: [
                                                        "\u4E0A\u4E00\u6B21beyond\u80FD\u91CF\uFF1A",
                                                        isNaN(lastGauge) ? "-" : lastGauge
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "col-auto",
                                                    children: [
                                                        "\u5F53\u524Dbeyond\u80FD\u91CF\uFF1A",
                                                        beyond_boost_gauge
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "col-auto",
                                                    children: [
                                                        "\u5DEE\u503C\uFF1A",
                                                        beyondGaugeDiff || "-"
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "col-auto",
                                                    children: [
                                                        "beyond\u80FD\u91CF\u63A8\u6D4B\u5B9A\u6570\uFF1A",
                                                        beyondGaugeDiff ? this.world.inverseBeyondBoost(beyondGaugeDiff, score) : "-"
                                                    ]
                                                })
                                            })
                                        ]
                                    });
                                };
                                return (0, $kKW7D.jsxs)("main", {
                                    children: [
                                        (0, $kKW7D.jsx)("header", {
                                            children: (0, $kKW7D.jsx)("h2", {
                                                children: "\u8D26\u53F7\u4FE1\u606F"
                                            })
                                        }),
                                        (0, $kKW7D.jsxs)("div", {
                                            class: "my-1",
                                            children: [
                                                "\u73A9\u5BB6\u540D\uFF1A",
                                                display_name
                                            ]
                                        }),
                                        (0, $kKW7D.jsxs)("div", {
                                            class: "my-1",
                                            children: [
                                                "\u6F5C\u529B\u503C\uFF1A",
                                                rating > 0 ? (rating / 100).toFixed(2) : "-"
                                            ]
                                        }),
                                        (0, $kKW7D.jsxs)("div", {
                                            class: "my-1",
                                            children: [
                                                "\u6CE8\u518C\u65F6\u95F4\uFF1A",
                                                new Date(join_date).toLocaleString()
                                            ]
                                        }),
                                        (0, $kKW7D.jsx)("div", {
                                            children: (0, $kKW7D.jsxs)("div", {
                                                class: "my-1 actions",
                                                children: [
                                                    (0, $kKW7D.jsx)("button", {
                                                        type: "button",
                                                        class: "btn btn-primary",
                                                        name: "character-status",
                                                        onClick: ()=>openCharacterStatus(profile),
                                                        children: "\u67E5\u770B\u642D\u6863\u6570\u636E"
                                                    }),
                                                    (0, $kKW7D.jsx)("button", {
                                                        type: "button",
                                                        class: "btn btn-secondary",
                                                        name: "refresh",
                                                        onClick: refresh,
                                                        children: "\u91CD\u65B0\u83B7\u53D6"
                                                    }),
                                                    (0, $kKW7D.jsx)("button", {
                                                        type: "button",
                                                        class: "btn btn-primary",
                                                        name: "sync-characters",
                                                        onClick: withErrorHandle(()=>syncMe(profile)),
                                                        children: "\u540C\u6B65"
                                                    })
                                                ]
                                            })
                                        }),
                                        (0, $kKW7D.jsx)("header", {
                                            children: (0, $kKW7D.jsx)("h2", {
                                                children: "\u597D\u53CB\u6700\u8FD1\u6E38\u73A9"
                                            })
                                        }),
                                        (0, $kKW7D.jsx)("div", {
                                            class: "my-1",
                                            children: (0, $kKW7D.jsx)("button", {
                                                type: "button",
                                                class: "btn btn-primary",
                                                onClick: async ()=>{
                                                    const songs = await this.chart.getSongIndex();
                                                    this.recentList.showAlert((0, $kKW7D.jsx)("div", {
                                                        slot: "content",
                                                        children: (0, $kKW7D.jsx)("div", {
                                                            class: "panel",
                                                            children: players.flatMap((player)=>player.recent_score.map((recent)=>{
                                                                    const isProfileRecent = (p)=>isProfile(player);
                                                                    const { difficulty: difficulty, song_id: song_id, time_played: time_played, score: score } = recent;
                                                                    const { character: character, rating: rating } = player;
                                                                    const status = isProfile(player) ? player.character_stats.find((s)=>s.character_id === character) : {
                                                                        is_uncapped: player.is_char_uncapped,
                                                                        is_uncapped_override: player.is_char_uncapped_override
                                                                    };
                                                                    return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                                        children: [
                                                                            (0, $kKW7D.jsxs)("div", {
                                                                                class: "user",
                                                                                children: [
                                                                                    (0, $kKW7D.jsx)($fce043c9bd9f3b91$var$Avatar, {
                                                                                        resolver: this.resolver,
                                                                                        id: character,
                                                                                        status: status
                                                                                    }),
                                                                                    (0, $kKW7D.jsx)((0, $b0ze6.PotentialBadge), {
                                                                                        potential: rating / 100
                                                                                    }),
                                                                                    (0, $kKW7D.jsx)("div", {
                                                                                        class: "username",
                                                                                        children: player.name
                                                                                    }),
                                                                                    (0, $kKW7D.jsx)("div", {
                                                                                        class: "play-time",
                                                                                        children: new Date(time_played).toLocaleString()
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (()=>{
                                                                                const song = songs[song_id];
                                                                                if (song) {
                                                                                    const chart = song.charts.find((c)=>this.music.mapDifficulty(c.difficulty) === difficulty);
                                                                                    if (chart) {
                                                                                        const card = new (0, $5CYCT.ResultCard)();
                                                                                        card.setChart(song, chart);
                                                                                        if (isProfileRecent(recent)) {
                                                                                            const noteResult = {
                                                                                                perfect: recent.shiny_perfect_count,
                                                                                                pure: recent.perfect_count,
                                                                                                far: recent.near_count,
                                                                                                lost: recent.miss_count
                                                                                            };
                                                                                            card.setResult(noteResult, this.music.computeScoreResult(score, chart), this.music.mapClearType(recent.clear_type, recent.shiny_perfect_count, chart));
                                                                                        } else {
                                                                                            const noteResult = this.music.inferNoteResult(chart, null, null, null, score);
                                                                                            card.setResult(noteResult, this.music.computeScoreResult(score, chart), noteResult ? this.music.computeClearRank(noteResult, chart, null) : null);
                                                                                        }
                                                                                        return card;
                                                                                    }
                                                                                }
                                                                                return (0, $kKW7D.jsxs)("div", {
                                                                                    children: [
                                                                                        (0, $kKW7D.jsx)("p", {
                                                                                            children: "\u672A\u77E5\u66F2\u76EE\u6216\u8C31\u9762\u96BE\u5EA6"
                                                                                        }),
                                                                                        (0, $kKW7D.jsxs)("p", {
                                                                                            children: [
                                                                                                "\u66F2\u76EEID = ",
                                                                                                song_id,
                                                                                                "\uFF0C\u96BE\u5EA6 = ",
                                                                                                difficulty
                                                                                            ]
                                                                                        }),
                                                                                        (0, $kKW7D.jsxs)("p", {
                                                                                            children: [
                                                                                                "\u5206\u6570",
                                                                                                score
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                });
                                                                            })()
                                                                        ]
                                                                    });
                                                                }))
                                                        })
                                                    }), true);
                                                },
                                                children: "\u67E5\u770B"
                                            })
                                        }),
                                        (0, $kKW7D.jsx)("header", {
                                            children: (0, $kKW7D.jsx)("h2", {
                                                children: "\u67E5\u5206\uFF08\u9700\u8BA2\u9605\uFF09"
                                            })
                                        }),
                                        (0, $kKW7D.jsx)("div", {
                                            children: (0, $kKW7D.jsx)("p", {
                                                "style:color": "var(--bs-danger)",
                                                children: "\u6CE8\u610F\uFF01\u6B64\u67E5\u5206\u529F\u80FD\u7684\u539F\u7406\u548C\u67E5\u5206bot\u4E00\u6837\uFF0C\u662F\u904D\u5386\u67E5\u8BE2\u597D\u53CB\u699C\uFF0C\u9700\u8981\u5927\u91CF\u8C03\u7528Web API\uFF0C\u53EF\u80FD\u5BFC\u81F4\u88ABshadowban\u751A\u81F3\u5C01\u53F7\uFF0C\u8BF7\u8C28\u614E\u4F7F\u7528\uFF08\u5982\u60F3\u5C1D\u8BD5\u5EFA\u8BAE\u7528\u5C0F\u53F7\uFF09\uFF01"
                                            })
                                        }),
                                        (0, $kKW7D.jsx)("div", {
                                            children: (0, $kKW7D.jsxs)("form", {
                                                children: [
                                                    (0, $kKW7D.jsx)("div", {
                                                        class: "row",
                                                        children: (0, $kKW7D.jsx)("label", {
                                                            for: "query-targets",
                                                            class: "form-label",
                                                            children: "\u9009\u62E9\u8981\u67E5\u7684\u73A9\u5BB6\uFF08\u53EF\u591A\u9009\uFF0C\u7535\u8111\u662F\u6309\u4F4Fctrl\u9009\uFF09\uFF1A"
                                                        })
                                                    }),
                                                    (0, $kKW7D.jsx)("div", {
                                                        class: "row",
                                                        children: (0, $kKW7D.jsx)("div", {
                                                            class: "col",
                                                            children: (0, $kKW7D.jsx)("select", {
                                                                id: "query-targets",
                                                                name: "query-targets",
                                                                multiple: true,
                                                                class: "form-select",
                                                                ref: selectRef,
                                                                children: players.map((friend)=>(0, $kKW7D.jsx)("option", {
                                                                        value: friend.name,
                                                                        children: friend.name
                                                                    }))
                                                            })
                                                        })
                                                    }),
                                                    (0, $kKW7D.jsx)("div", {
                                                        class: "my-3 logging",
                                                        children: logging$
                                                    }),
                                                    (0, $kKW7D.jsxs)("div", {
                                                        class: "my-3 actions",
                                                        children: [
                                                            (0, $kKW7D.jsx)("button", {
                                                                type: "button",
                                                                class: "btn btn-primary sync-control",
                                                                name: "sync-control",
                                                                disabled: (0, $ivmHo.computed)(()=>!profiles$().length),
                                                                onClick: withErrorHandle(syncBests),
                                                                children: "\u540C\u6B65"
                                                            }),
                                                            (0, $kKW7D.jsx)("button", {
                                                                type: "button",
                                                                class: (0, $ivmHo.computed)(()=>`btn query-control ${querying$() ? "btn-danger" : "btn-primary"}`),
                                                                name: "query-control",
                                                                onClick: ()=>go(profile),
                                                                children: (0, $ivmHo.computed)(()=>querying$() ? "\u505C\u6B62" : "\u5F00\u67E5")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        (0, $kKW7D.jsx)("header", {
                                            children: (0, $kKW7D.jsx)("h2", {
                                                children: "\u5B9A\u6570\u6D4B\u7B97"
                                            })
                                        }),
                                        (0, $kKW7D.jsxs)("div", {
                                            children: [
                                                (0, $kKW7D.jsxs)("details", {
                                                    children: [
                                                        (0, $kKW7D.jsx)("summary", {
                                                            children: "\u539F\u7406\u548C\u7528\u6CD5"
                                                        }),
                                                        (0, $kKW7D.jsx)("div", {
                                                            children: "\u53C2\u8003\u4E2D\u6587Wiki\u4E0A\u7684\u516C\u5F0F\uFF0C\u6E38\u73A9\u4E16\u754C\u6A21\u5F0F\u65F6\u89D2\u8272\u83B7\u5F97\u7684\u7ECF\u9A8C\u503C\u516C\u5F0F\u4E3A"
                                                        }),
                                                        (0, $kKW7D.jsx)("math", {
                                                            display: "block",
                                                            children: (0, $kKW7D.jsxs)("mfrac", {
                                                                children: [
                                                                    (0, $kKW7D.jsx)("ms", {
                                                                        children: "\u5355\u66F2\u6F5C\u529B\u503C"
                                                                    }),
                                                                    (0, $kKW7D.jsx)("mn", {
                                                                        children: "6"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        (0, $kKW7D.jsx)("div", {
                                                            children: "beyond\u80FD\u91CF\u69FD\u7684\u586B\u5145\u8FDB\u5EA6\u4E3A"
                                                        }),
                                                        (0, $kKW7D.jsxs)("math", {
                                                            display: "block",
                                                            children: [
                                                                (0, $kKW7D.jsx)("mn", {
                                                                    children: "27"
                                                                }),
                                                                (0, $kKW7D.jsx)("mo", {
                                                                    children: "+"
                                                                }),
                                                                (0, $kKW7D.jsx)("mn", {
                                                                    children: "2.45"
                                                                }),
                                                                (0, $kKW7D.jsx)("msqrt", {
                                                                    children: (0, $kKW7D.jsx)("ms", {
                                                                        children: "\u5355\u66F2\u6F5C\u529B\u503C"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        (0, $kKW7D.jsx)("div", {
                                                            children: "\u6839\u636E\u63A5\u53E3\u8FD4\u56DE\u7684\u89D2\u8272\u7ECF\u9A8C/beyond\u80FD\u91CF\u7684\u53D8\u5316\u503C\u53EF\u9006\u7B97\u5355\u66F2\u6F5C\u529B\u503C\uFF0C\u7ED3\u5408\u6700\u8FD1\u6E38\u73A9\u7684\u5206\u6570\u53EF\u9006\u7B97\u51FA\u5B9A\u6570\u3002"
                                                        }),
                                                        (0, $kKW7D.jsxs)("div", {
                                                            children: [
                                                                "\u4F7F\u7528\u65B9\u6CD5\uFF1A\u5148\u6253\u5F00\u6B64\u9762\u677F\u83B7\u53D6\u4E00\u6B21\u5F53\u524Dbeyond\u80FD\u91CF\u503C\uFF0C\u7136\u540E\u53BB\u6E38\u620F\u5185\u722C\u68AF\u6253\u5F85\u6D4B\u8C31\u9762\u3002\u6253\u5B8C\u7ED3\u7B97\u540E\u518D\u70B9\u51FB",
                                                                (0, $kKW7D.jsx)("code", {
                                                                    children: "\u91CD\u65B0\u83B7\u53D6"
                                                                }),
                                                                "\u6309\u94AE\u5373\u53EF\u81EA\u52A8\u6D4B\u7B97\u3002"
                                                            ]
                                                        }),
                                                        (0, $kKW7D.jsx)("div", {
                                                            children: "\u5982\u679C\u6253\u5B8C\u8C31\u9762\u540E\u80FD\u91CF\u6EA2\u51FA\uFF08\u8D85\u8FC7200%\uFF09\uFF0C\u6D4B\u5B9A\u7ED3\u679C\u53EF\u80FD\u4F1A\u4E0D\u51C6\u786E\u3002"
                                                        })
                                                    ]
                                                }),
                                                (0, $kKW7D.jsx)("div", {
                                                    class: "row",
                                                    children: (0, $kKW7D.jsx)("div", {
                                                        class: "col-auto",
                                                        children: (0, $kKW7D.jsx)("button", {
                                                            class: "btn btn-secondary",
                                                            onClick: refresh,
                                                            children: "\u91CD\u65B0\u83B7\u53D6"
                                                        })
                                                    })
                                                }),
                                                (0, $kKW7D.jsx)("div", {
                                                    class: "row",
                                                    children: (0, $kKW7D.jsxs)("div", {
                                                        class: "col-auto",
                                                        children: [
                                                            "\u6700\u8FD1\u6E38\u73A9\u66F2\u76EEId\uFF1A",
                                                            song_id
                                                        ]
                                                    })
                                                }),
                                                (0, $kKW7D.jsx)("div", {
                                                    class: "row",
                                                    children: (0, $kKW7D.jsxs)("div", {
                                                        class: "col-auto",
                                                        children: [
                                                            "\u96BE\u5EA6\uFF1A",
                                                            [
                                                                "pst",
                                                                "prs",
                                                                "ftr",
                                                                "byd"
                                                            ][difficulty] ?? "-"
                                                        ]
                                                    })
                                                }),
                                                (0, $kKW7D.jsx)("div", {
                                                    class: "row",
                                                    children: (0, $kKW7D.jsxs)("div", {
                                                        class: "col-auto",
                                                        children: [
                                                            "\u5206\u6570\uFF1A",
                                                            score || "-"
                                                        ]
                                                    })
                                                }),
                                                renderExpInferredConstant(),
                                                renderBeyondGaugeConstant()
                                            ]
                                        })
                                    ]
                                });
                            }
                        })
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "modal-footer",
                        children: (0, $kKW7D.jsx)("button", {
                            type: "button",
                            class: "btn btn-secondary",
                            name: "close",
                            onClick: close,
                            children: "\u5173\u95ED"
                        })
                    }),
                    (0, $kKW7D.jsx)("fancy-dialog", {
                        ref: this.characterList,
                        id: "character-list"
                    }),
                    (0, $kKW7D.jsx)("fancy-dialog", {
                        ref: this.recentList,
                        id: "recent-list"
                    }),
                    (0, $kKW7D.jsx)("fancy-dialog", {
                        ref: this.message,
                        id: "plugin-message"
                    })
                ]
            });
        }
    };
    return ToolPanel = _classThis;
})();
const $fce043c9bd9f3b91$var$CharacterList = ({ resolver: resolver, stats: stats })=>{
    const renderNumber = (value)=>{
        const rawValue = value.toString();
        const fixedValue = value.toFixed(4);
        return (0, $kKW7D.jsx)("span", {
            title: rawValue,
            "data-value": rawValue,
            children: rawValue.length < fixedValue.length ? rawValue : fixedValue
        });
    };
    return (0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
        children: (0, $kKW7D.jsxs)("table", {
            children: [
                (0, $kKW7D.jsx)("thead", {
                    children: (0, $kKW7D.jsxs)("tr", {
                        children: [
                            (0, $kKW7D.jsx)("th", {
                                children: "id"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "\u56FE\u6807"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "\u540D\u79F0"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "\u7B49\u7EA7"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "\u7ECF\u9A8C\u503C"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "frag"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "step"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "over"
                            }),
                            (0, $kKW7D.jsx)("th", {
                                children: "\u6280\u80FD"
                            })
                        ]
                    })
                }),
                (0, $kKW7D.jsx)("tbody", {
                    children: stats.map((status)=>{
                        return (0, $kKW7D.jsxs)("tr", {
                            children: [
                                (0, $kKW7D.jsx)("td", {
                                    children: status.character_id
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: (0, $kKW7D.jsx)($fce043c9bd9f3b91$var$Avatar, {
                                        resolver: resolver,
                                        status: status,
                                        id: status.character_id
                                    })
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: status.display_name["zh-Hans"]
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: renderNumber(status.level)
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: renderNumber(status.exp)
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: renderNumber(status.frag)
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: renderNumber(status.prog)
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: renderNumber(status.overdrive)
                                }),
                                (0, $kKW7D.jsx)("td", {
                                    children: status.skill_id_text?.["zh-Hans"] ?? "-"
                                })
                            ]
                        });
                    })
                })
            ]
        })
    });
};
const $fce043c9bd9f3b91$var$Avatar = ({ status: status, id: id, resolver: resolver })=>{
    const charStatus = status.is_uncapped ? status.is_uncapped_override ? (0, $aZJkp.CharacterStatus).Initial : (0, $aZJkp.CharacterStatus).Awaken : (0, $aZJkp.CharacterStatus).Initial;
    return (0, $kKW7D.jsx)("img", {
        class: "avatar",
        onError: function() {
            const unknown = resolver.resoveCharacterImage({
                id: -1,
                kind: (0, $aZJkp.CharacterImageKind).Icon,
                status: (0, $aZJkp.CharacterStatus).Initial
            }).href;
            if (this.src !== unknown) this.src = unknown;
        },
        src: resolver.resoveCharacterImage({
            id: id,
            status: charStatus,
            kind: (0, $aZJkp.CharacterImageKind).Icon
        }).href
    });
};



var $7Cv7B = parcelRequire("7Cv7B");

var $I463m = parcelRequire("I463m");

var $04CUQ = parcelRequire("04CUQ");

var $hlIIF = parcelRequire("hlIIF");

var $dIVkE = parcelRequire("dIVkE");
parcelRequire("5vq1D");
var $6dcv9 = parcelRequire("6dcv9");

var $iS7qT = parcelRequire("iS7qT");

var $eJy3F = parcelRequire("eJy3F");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");
var $1ae491ab46ceb53e$exports = {};
$1ae491ab46ceb53e$exports = new URL("../favicon.cc7e02d3.ico", import.meta.url).toString();



var $04CUQ = parcelRequire("04CUQ");
let $80f09f8f63cc6229$export$6f093cfa640b7166 = ":host{position:fixed;z-index:114514;bottom:2em;left:2em}div{box-sizing:content-box;transition:all .3s;transform:rotate(45deg);transform-origin:50% 50%;border-style:solid;border-width:.25em;border-color:var(--bs-border-color-translucent);box-shadow:var(--bs-box-shadow-sm);width:3em;height:3em;overflow:hidden}img{width:4.25em;height:4.25em;transition:all .3s;transform:rotate(-45deg) translateY(-20%)}div[role=button]:is(:hover,:focus,:focus-within){box-shadow:var(--bs-box-shadow)}";
const $80f09f8f63cc6229$export$995990c5c04c46f0 = (0, $04CUQ.create)($80f09f8f63cc6229$export$6f093cfa640b7166, "file:///src/view/components/plugin-button/style.css.js");


parcelRequire("5vq1D");
var $TM3YZ = parcelRequire("TM3YZ");

var $hlIIF = parcelRequire("hlIIF");
let $6ea66e738ac06335$export$4e4a0883de5f1094 = (()=>{
    let _classDecorators = [
        (0, $TM3YZ.Component)({
            tag: "plugin-button",
            styles: [
                (0, $hlIIF.bootstrapLocal),
                (0, $80f09f8f63cc6229$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $TM3YZ.HyplateElement);
    var PluginButton = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            PluginButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        render() {
            return (0, $kKW7D.jsx)("div", {
                role: "button",
                onClick: (e)=>this.onclick?.(e),
                children: (0, $kKW7D.jsx)("img", {
                    src: (0, (/*@__PURE__*/$parcel$interopDefault($1ae491ab46ceb53e$exports)))
                })
            });
        }
    };
    return PluginButton = _classThis;
})();



var $87X5s = parcelRequire("87X5s");

var $jrD1x = parcelRequire("jrD1x");

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $34Tyz = parcelRequire("34Tyz");
let $2f6ad3922b0cd50c$export$f6ac49096aa13011 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$AssetsService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var PluginAssetsServiceImpl = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            PluginAssetsServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        getAssets(url) {
            return new (0, $34Tyz.DirectGateway)().dynamicProxy(url).toString();
        }
    };
    return PluginAssetsServiceImpl = _classThis;
})();



var $ltSqR = parcelRequire("ltSqR");

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");
parcelRequire("5vq1D");
var $ivmHo = parcelRequire("ivmHo");

var $gYX5w = parcelRequire("gYX5w");

var $34Tyz = parcelRequire("34Tyz");

var $8iy8R = parcelRequire("8iy8R");
const $c387333fef2cb02a$var$defaultPreference = {
    ghproxy: false,
    theme: "light",
    showMaxMinus: false
};
let $c387333fef2cb02a$export$8fbf94df396cc28a = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$PreferenceService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var DefaultPreferenceService = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            DefaultPreferenceService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        async get() {
            return $c387333fef2cb02a$var$defaultPreference;
        }
        signal(name) {
            return (0, $ivmHo.signal)($c387333fef2cb02a$var$defaultPreference[name]);
        }
        update(patch) {
            throw new Error("Cannot update default preference.");
        }
    };
    return DefaultPreferenceService = _classThis;
})();
class $c387333fef2cb02a$export$2b4829c558c18c5d extends (0, $gYX5w.AssetsResolverImpl) {
    resolve(path) {
        const url = new (0, $34Tyz.DirectGateway)().proxy(super.resolve(path));
        if (!(url instanceof URL)) throw new Error("Direct gateway should always be synchronous.");
        return url;
    }
}
let $c387333fef2cb02a$export$4d77080fdb18bf5a = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$CoreDataService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var PluginCoreData = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            PluginCoreData = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        async import(file) {
            const site = new URL("/arcaea-toolbelt-data/", "https://darrendanielday.github.io/arcaea-toolbelt-debug/");
            const url = new URL(file, site);
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
        getSongList() {
            throw new Error("Method not implemented.");
        }
        getPackList() {
            throw new Error("Method not implemented.");
        }
        getMetaData() {
            throw new Error("Method not implemented.");
        }
        getChartData() {
            return this.import((0, $8iy8R.chartData));
        }
        getCharacterData() {
            return this.import((0, $8iy8R.characterData));
        }
        getItemsData() {
            return this.import((0, $8iy8R.itemsData));
        }
        getWorldMapLongTerm() {
            throw new Error("Method not implemented.");
        }
        getWorldMapEvents() {
            throw new Error("Method not implemented.");
        }
    };
    return PluginCoreData = _classThis;
})();



var $34Tyz = parcelRequire("34Tyz");

var $2H6kD = parcelRequire("2H6kD");
const $1ca648db71733f8e$var$ioc = new (0, $87X5s.Container)({
    name: "cross-site-script-root"
});
$1ca648db71733f8e$var$ioc.register((0, $ltSqR.ArcaeaToolbeltDatabaseContext));
$1ca648db71733f8e$var$ioc.register((0, $eJy3F.ChartServiceImpl));
$1ca648db71733f8e$var$ioc.register((0, $I463m.MusicPlayServiceImpl));
$1ca648db71733f8e$var$ioc.register((0, $iS7qT.WorldModeServiceImpl));
$1ca648db71733f8e$var$ioc.register((0, $c387333fef2cb02a$export$2b4829c558c18c5d));
$1ca648db71733f8e$var$ioc.register((0, $c387333fef2cb02a$export$4d77080fdb18bf5a));
$1ca648db71733f8e$var$ioc.register((0, $2f6ad3922b0cd50c$export$f6ac49096aa13011));
$1ca648db71733f8e$var$ioc.register((0, $c387333fef2cb02a$export$8fbf94df396cc28a));
$1ca648db71733f8e$var$ioc.register((0, $34Tyz.DirectGateway));
$1ca648db71733f8e$var$ioc.register((0, $2H6kD.CharacterServiceImpl));
const $1ca648db71733f8e$var$musicPlay = $1ca648db71733f8e$var$ioc.get((0, $7Cv7B.$MusicPlayService));
let $1ca648db71733f8e$var$cookie = "";
function $1ca648db71733f8e$export$110700823644f4a6(value) {
    $1ca648db71733f8e$var$cookie = value;
}
function $1ca648db71733f8e$var$api(path) {
    return new URL(path, "https://webapi.lowiro.com/webapi/");
}
async function $1ca648db71733f8e$var$get(path) {
    const fetchOptions = {
        credentials: "include",
        mode: "cors"
    };
    const url = $1ca648db71733f8e$var$api(path);
    function handleResult(json) {
        if (!json.success) {
            console.error(json);
            throw new Error(`\u{8BF7}\u{6C42}\u{63A5}\u{53E3} ${url.toString()} \u{5931}\u{8D25}`);
        }
        return json.value;
    }
    if (typeof window !== "undefined") {
        // Browser
        const response = await fetch(url, fetchOptions);
        return handleResult(await response.json());
    }
    // TODO nodejs implementation
    const response = await fetch(url, {
        headers: {
            Cookie: $1ca648db71733f8e$var$cookie
        }
    });
    return handleResult(await response.json());
}
async function $1ca648db71733f8e$export$12ab4be7a2abc1e2() {
    const promise = $1ca648db71733f8e$var$xhrProxy.waitForRequest("user/me");
    window.dispatchEvent(new FocusEvent("focus"));
    const { value: value } = await promise;
    return value;
}
async function $1ca648db71733f8e$export$75bea1515965c29e(sid, difficulty) {
    try {
        return await $1ca648db71733f8e$var$get(`score/song/friend?song_id=${sid}&difficulty=${difficulty}&start=0&limit=26`);
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function $1ca648db71733f8e$var$queryBest(profile, usernames, onProgress, signal, limit = 39) {
    const chartService = $1ca648db71733f8e$var$ioc.get((0, $7Cv7B.$ChartService));
    const flattenData = (await chartService.getSongData()).flatMap((song)=>song.charts.map((chart)=>({
                song: song,
                chart: chart
            }))).sort((a, b)=>b.chart.constant - a.chart.constant);
    const friends = profile.friends;
    const names = new Set(usernames);
    const queryPlayers = [
        ...friends,
        profile
    ].filter((p)=>names.has(p.name));
    console.log(`\u{67E5}\u{8BE2}\u{76EE}\u{6807}\u{73A9}\u{5BB6}\u{FF1A}`, queryPlayers.map((p)=>p.name));
    const friendBestsMinPtt = new Map(queryPlayers.map((f)=>[
            f.name,
            -Infinity
        ]));
    let aborted = false;
    const handleAbort = ()=>{
        aborted = true;
    };
    const message = (msg)=>{
        console.log(msg);
        onProgress(msg);
    };
    signal.addEventListener("abort", handleAbort);
    const friendsPlayResults = Object.fromEntries(queryPlayers.map((f)=>[
            f.name,
            []
        ]));
    for (const { song: song, chart: chart } of flattenData){
        if (aborted) throw new Error(`\u{7528}\u{6237}\u{53D6}\u{6D88}\u{3002}`);
        message(`\u{6B63}\u{5728}\u{67E5}\u{8BE2} ${chartService.getName(chart, song)} \u{7684} ${chart.difficulty}\u{96BE}\u{5EA6}\u{FF08}${chart.constant.toFixed(1)}\u{FF09}\u{597D}\u{53CB}\u{699C}\u{2026}\u{2026}`);
        const friendBests = await $1ca648db71733f8e$export$75bea1515965c29e(song.id, $1ca648db71733f8e$var$musicPlay.mapDifficulty(chart.difficulty));
        if (!friendBests) throw new Error(`\u{5BC4}\u{4E86}\u{FF0C}\u{63A5}\u{53E3}\u{6539}\u{4E86}\u{FF0C}\u{9700}\u{8981}\u{8BA2}\u{9605}Arcaea Online\u{624D}\u{80FD}\u{7528}`);
        const pttPM = chart.constant + 2;
        const restFriends = friendBests.filter((b)=>friendBestsMinPtt.get(b.name) < pttPM);
        if ([
            ...friendBestsMinPtt.entries()
        ].every(([, min])=>min > pttPM)) break;
        for (const best of restFriends){
            const friendName = best.name;
            const playResult = best.perfect_count ? {
                type: "note",
                chartId: chart.id,
                // clear_type是最高分那次的，best_clear_type是排行榜显示的通关类型
                clear: $1ca648db71733f8e$var$musicPlay.mapClearType(best.clear_type, best.shiny_perfect_count, chart),
                result: {
                    pure: best.perfect_count,
                    perfect: best.shiny_perfect_count,
                    far: best.near_count,
                    lost: best.miss_count
                }
            } : {
                // 接口字段也删了点，没有note判定信息
                type: "score",
                chartId: chart.id,
                clear: null,
                score: best.score
            };
            const ptt = $1ca648db71733f8e$var$musicPlay.computePotential(best.score, chart);
            const oneFriendBests = friendsPlayResults[friendName];
            if (!oneFriendBests) throw new Error(`\u{8FD9}\u{79CD}\u{60C5}\u{51B5}\u{5E94}\u{8BE5}\u{662F}\u{67E5}\u{8BE2}\u{4E2D}\u{9014}\u{52A0}\u{4E86}\u{597D}\u{53CB}\u{2026}\u{2026}`);
            oneFriendBests.push({
                result: playResult,
                ptt: ptt
            });
            oneFriendBests.sort((a, b)=>b.ptt - a.ptt);
            if (oneFriendBests.length > limit) oneFriendBests.pop();
            if (oneFriendBests.length === limit) friendBestsMinPtt.set(friendName, oneFriendBests.at(-1).ptt);
        }
    }
    signal.removeEventListener("abort", handleAbort);
    const result = Object.fromEntries(queryPlayers.map((friend)=>[
            friend.name,
            friendsPlayResults[friend.name].reduce((map, curr)=>{
                map[curr.result.chartId] = curr.result;
                return map;
            }, {})
        ]));
    return Object.entries(result).map(([name, best])=>({
            best: best,
            username: name,
            version: 2,
            potential: (queryPlayers.find((f)=>f.name === name).rating / 100).toFixed(2)
        }));
}
let $1ca648db71733f8e$var$CrossSiteScriptPluginServiceImpl = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$CrossSiteScriptPluginService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CrossSiteScriptPluginServiceImpl = class {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            CrossSiteScriptPluginServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        iframe = null;
        async getProfile() {
            return await $1ca648db71733f8e$export$12ab4be7a2abc1e2();
        }
        startQueryBests(profile, targetPlayers, onProgress, onResult, onError) {
            const controller = new AbortController();
            $1ca648db71733f8e$var$queryBest(profile, targetPlayers, onProgress, controller.signal).then(onResult).catch((error)=>{
                if (error instanceof Error) onError?.(error.message);
                else onError?.(`${error}`);
            });
            return controller;
        }
        /* 旧版iframe通信
        private createOrGetIFrame(): Promise<HTMLIFrameElement> {
          return new Promise<HTMLIFrameElement>((resolve, reject) => {
            if (this.iframe) {
              return resolve(this.iframe);
            }
            // TODO 支持打包成ESM直接用import.meta.url，不再需要环境变量
            // const baseURI = new URL("..", import.meta.url);
            const baseURI = process.env.BASE_URI;
            const targetURL = new URL("services/cross-site-frame.html", baseURI);
            const iframe = element("iframe");
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            iframe.src = targetURL.toString();
            iframe.onload = () => {
              this.iframe = iframe;
              resolve(iframe);
            };
          });
        }
        */ async postMessage(type, payload) {
            /* 旧版iframe通信
            const iframe = await this.createOrGetIFrame();
            return new Promise<void>((resolve, reject) => {
              const win = iframe.contentWindow!;
              win.postMessage({ type, payload }, "*");
              window.addEventListener("message", function handler(e) {
                const message = e.data;
                switch (message.type) {
                  case `${type}-success`:
                    resolve();
                    break;
                  case `${type}-error`:
                    reject(message.error);
                    break;
                }
                window.removeEventListener("message", handler);
              });
              iframe.onerror = reject;
            });
            */ const baseURI = "https://darrendanielday.github.io/arcaea-toolbelt-debug/";
            const targetURL = new URL("services/cross-site-frame.html", baseURI);
            targetURL.hash = btoa(JSON.stringify({
                type: type,
                payload: payload
            }));
            const openedWindow = window.open(targetURL, "_blank", "popup=true,left=100,top=100,width=320,height=320");
            if (!openedWindow) throw new Error(`\u{65E0}\u{6CD5}\u{6253}\u{5F00}\u{7528}\u{4E8E}\u{901A}\u{4FE1}\u{7684}\u{7A97}\u{53E3}\u{3002}\u{53EF}\u{80FD}\u{662F}\u{60A8}\u{7684}\u{6D4F}\u{89C8}\u{5668}\u{963B}\u{6B62}\u{4E86}\u{5F39}\u{51FA}\u{7A97}\u{53E3}\u{FF0C}\u{8FD9}\u{4F1A}\u{5BFC}\u{81F4}\u{672C}\u{811A}\u{672C}\u{4E0E}\u{4E3B}\u{7AD9}\u{7684}\u{901A}\u{4FE1}\u{5931}\u{8D25}\u{3002}`);
            return new Promise((resolve, reject)=>{
                window.addEventListener("message", function handler(e) {
                    if (e.origin !== targetURL.origin) return;
                    const message = e.data;
                    switch(message.type){
                        case `${type}-success`:
                            resolve();
                            break;
                        case `${type}-error`:
                            reject(message.error);
                            break;
                    }
                    window.removeEventListener("message", handler);
                });
            });
        }
        syncProfiles(profiles) {
            return this.postMessage("sync-profiles", profiles);
        }
        syncMe(profile) {
            const myProfile = {
                username: profile.display_name,
                potential: (profile.rating / 100).toFixed(2),
                characters: profile.character_stats.map((c)=>({
                        exp: c.exp,
                        factors: {
                            frag: c.frag,
                            over: c.overdrive,
                            step: c.prog
                        },
                        id: c.character_id,
                        level: c.level
                    }))
            };
            return this.postMessage("sync-me", myProfile);
        }
    };
    return CrossSiteScriptPluginServiceImpl = _classThis;
})();
$1ca648db71733f8e$var$ioc.register($1ca648db71733f8e$var$CrossSiteScriptPluginServiceImpl);
const $1ca648db71733f8e$var$createOrGetDialog = (()=>{
    let dialog = null;
    let panel = null;
    return ()=>{
        if (!dialog || !panel) {
            dialog = (0, $6dcv9.element)("dialog");
            document.body.appendChild(dialog);
            const container = (0, $6dcv9.element)("div");
            (0, $jrD1x.provide)(container, $1ca648db71733f8e$var$ioc);
            document.body.appendChild(container);
            const wrapper = container.attachShadow({
                mode: "open"
            });
            (0, $04CUQ.addSheet)((0, $hlIIF.bootstrapLocal), wrapper);
            (0, $04CUQ.addSheet)((0, $dIVkE.sheet), wrapper);
            panel = new (0, $fce043c9bd9f3b91$export$67efbe0d3e45caec)();
            panel.addEventListener("panel-close", ()=>{
                dialog?.close();
            });
            wrapper.appendChild(dialog);
            dialog.appendChild(panel);
        }
        return dialog;
    };
})();
class $1ca648db71733f8e$var$XHRProxy extends EventTarget {
    waitForRequest(path) {
        const that = this;
        return new Promise((resolve, reject)=>{
            this.addEventListener("XHR Response", function hander(e) {
                if (e instanceof CustomEvent) {
                    const xhr = e.detail;
                    if (new URL(xhr.responseURL).pathname.includes(path)) {
                        const response = xhr.response;
                        if (typeof response === "string") {
                            resolve(JSON.parse(response));
                            that.removeEventListener("XHR Response", hander);
                        } else reject(new Error(`Unknown response type`));
                    }
                }
            });
        });
    }
}
const $1ca648db71733f8e$var$xhrProxy = new $1ca648db71733f8e$var$XHRProxy();
class $1ca648db71733f8e$var$HackedXHR extends XMLHttpRequest {
    constructor(){
        super();
        this.addEventListener("loadend", ()=>{
            queueMicrotask(()=>{
                $1ca648db71733f8e$var$xhrProxy.dispatchEvent(new CustomEvent("XHR Response", {
                    detail: this
                }));
            });
        });
    }
}
function $1ca648db71733f8e$var$addPluginButton() {
    const button = new (0, $6ea66e738ac06335$export$4e4a0883de5f1094)();
    document.body.appendChild(button);
    button.onclick = ()=>{
        $1ca648db71733f8e$var$createOrGetDialog().showModal();
    };
}
async function $1ca648db71733f8e$var$main() {
    window.XMLHttpRequest = $1ca648db71733f8e$var$HackedXHR;
    window.addEventListener("keydown", (e)=>{
        if (e.ctrlKey && e.key.toUpperCase() === "B") $1ca648db71733f8e$var$createOrGetDialog().showModal();
    });
    $1ca648db71733f8e$var$addPluginButton();
}
$1ca648db71733f8e$var$main();


//# sourceMappingURL=cross-site-script.js.map
