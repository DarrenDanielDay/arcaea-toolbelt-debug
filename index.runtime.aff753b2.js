
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

var $da0e65a03787a187$exports = {};

(parcelRequire("8uu6p")).register(new URL("", import.meta.url).toString(), JSON.parse('["5SJ4U","index.ac67e09c.js","bvw0X","sql-wasm.21dca9ae.js","eDJSQ","sql-wasm.4092f33b.wasm","cOG01","chart-data-legacy-1.500c90f4.js"]'));


//# sourceMappingURL=index.runtime.aff753b2.js.map
