
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
parcelRegister("izUtT", function(module, exports) {

$parcel$export(module.exports, "download", () => $d8674ed73e5fe1ee$export$24422be91ad4011f);
function $d8674ed73e5fe1ee$export$24422be91ad4011f(url, filename) {
    const link = document.createElement("a");
    link.download = filename;
    link.href = url;
    link.click();
}
function $d8674ed73e5fe1ee$export$90aadfdc953d1529(json, filename) {
    const url = URL.createObjectURL(new Blob([
        JSON.stringify(json, undefined, 2) + "\n"
    ], {
        type: "application/json"
    }));
    $d8674ed73e5fe1ee$export$24422be91ad4011f(url, filename);
}

});

Symbol.metadata || Object.defineProperty(Symbol, "metadata", {
    value: Symbol("Symbol.metadata")
});



var $eJy3F = parcelRequire("eJy3F");

var $gYX5w = parcelRequire("gYX5w");

var $ltSqR = parcelRequire("ltSqR");

var $ezVt6 = parcelRequire("ezVt6");

var $5vq1D = parcelRequire("5vq1D");

var $bmbM8 = parcelRequire("bmbM8");

var $gw2dg = parcelRequire("gw2dg");

var $34Tyz = parcelRequire("34Tyz");

var $clQL6 = parcelRequire("clQL6");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $gwbXp = parcelRequire("gwbXp");

var $I463m = parcelRequire("I463m");
const $54c2eb9691b6c184$var$container = new (0, $87X5s.Container)();
$54c2eb9691b6c184$var$container.register((0, $ltSqR.ArcaeaToolbeltDatabaseContext));
$54c2eb9691b6c184$var$container.register((0, $eJy3F.ChartServiceImpl));
$54c2eb9691b6c184$var$container.register((0, $gYX5w.AssetsResolverImpl));
$54c2eb9691b6c184$var$container.register((0, $bmbM8.CoreDataServiceImpl));
$54c2eb9691b6c184$var$container.register((0, $gw2dg.CoreDataProviderImpl));
$54c2eb9691b6c184$var$container.register((0, $34Tyz.ProxyGateway));
$54c2eb9691b6c184$var$container.register((0, $clQL6.PreferenceServiceImpl));
$54c2eb9691b6c184$var$container.register((0, $gwbXp.ProfileServiceImpl));
$54c2eb9691b6c184$var$container.register((0, $I463m.MusicPlayServiceImpl));
const $54c2eb9691b6c184$var$profile = $54c2eb9691b6c184$var$container.get((0, $7Cv7B.$ProfileService));
//#region Legacy <iframe>
/* localStorage和indexedDB均被标记为“第三方”，因为顶级网站不同源。目前此实现已无法工作。
window.addEventListener("message", async (e) => {
  const parent = window.parent;
  const data = e.data;
  const type = data.type;
  const payload = data.payload;
  const handle = async (as: () => Promise<void> | void) => {
    try {
      await as();
      parent.postMessage({ type: `${type}-success` }, "*");
    } catch (error) {
      parent.postMessage(
        { type: `${type}-error`, error: error instanceof Error ? error.message : JSON.stringify(error) },
        "*"
      );
    }
  };
  switch (type) {
    case "sync-profiles":
      await handle(() => profile.syncProfiles(payload));
      break;
    case "sync-me":
      await handle(() => profile.syncProfiles([payload]));
      break;
    default:
      break;
  }
});
*/ //#endregion
const $54c2eb9691b6c184$var$isValidCrossSiteMessage = (data)=>{
    return data != null && typeof data === "object" && "type" in data && "payload" in data;
};
/**
 * 新实现，直接通过`URL#hash`传参，相比而言多了个弹窗
 */ const $54c2eb9691b6c184$var$handleURL = async ()=>{
    const url = new URL(location.href);
    const message = JSON.parse(atob(url.hash.slice(1)));
    const postMessage = typeof window.opener?.postMessage === "function" ? (msg)=>{
        window.opener.postMessage(msg, "*");
    } : (0, $5vq1D.noop);
    if ($54c2eb9691b6c184$var$isValidCrossSiteMessage(message)) {
        const { type: type, payload: payload } = message;
        const handle = async (as, msg)=>{
            try {
                await as();
                postMessage({
                    type: `${type}-success`
                });
                $54c2eb9691b6c184$var$closeWith(msg);
            } catch (error) {
                postMessage({
                    type: `${type}-error`,
                    error: error instanceof Error ? error.message : JSON.stringify(error)
                });
            }
        };
        switch(type){
            case "sync-profiles":
                await handle(()=>$54c2eb9691b6c184$var$profile.syncProfiles(payload), "\u5BFC\u5165\u5B58\u6863\u6210\u529F");
                break;
            case "sync-me":
                await handle(()=>$54c2eb9691b6c184$var$profile.syncProfiles([
                        payload
                    ]), `${payload.username}\u{5B58}\u{6863}\u{6570}\u{636E}\u{540C}\u{6B65}\u{6210}\u{529F}`);
                break;
            default:
                break;
        }
    } else $54c2eb9691b6c184$var$closeWith("\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E\u3002");
};
const $54c2eb9691b6c184$var$closeWith = (msg)=>{
    (0, $ezVt6.alert)(`${msg}\u{3002}\u{53EF}\u{5173}\u{95ED}\u{672C}\u{7A97}\u{53E3}\u{FF0C}5\u{79D2}\u{540E}\u{5C06}\u{81EA}\u{52A8}\u{5173}\u{95ED}\u{3002}`);
    setTimeout(()=>{
        window.close();
    }, 5000);
};
$54c2eb9691b6c184$var$handleURL();


//# sourceMappingURL=cross-site-frame.4844bdab.js.map
