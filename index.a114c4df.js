
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
parcelRegister("6gcx6", function(module, exports) {

$parcel$export(module.exports, "sheet", () => $48edf576e6bb09e3$export$995990c5c04c46f0);

var $04CUQ = parcelRequire("04CUQ");
let $48edf576e6bb09e3$export$6f093cfa640b7166 = ':host,:root{--1:#f8c507;--2:#d1d4e2;--3:#f39b77;--no-color:var(--bs-secondary-bg);--pst:#5cbad3;--pst-light:#6ad6f3;--pst-border-color:#61a8c1;--prs:#b5c76f;--prs-light:#d0e580;--prs-border-color:#a7c276;--ftr:#913a79;--ftr-light:#a7428b;--ftr-border-color:#8f5a7f;--byd:#bf0d25;--byd-light:#dc0f2a;--byd-border-color:#b64356;--pure:#cc22ee;--far:#ffaa11;--lost:#dd4444;--side-light:#376e99;--side-conflict:#8456b3;--side-colorless:#d4c6d4}@font-face{font-family:Exo;src:url("https://fonts.gstatic.com/s/exo/v20/4UaZrEtFpBI4f1ZSIK9d4LjJ4rQwOwRmOw.woff2") format("woff2")}';
const $48edf576e6bb09e3$export$995990c5c04c46f0 = (0, $04CUQ.create)($48edf576e6bb09e3$export$6f093cfa640b7166, "file:///src/view/app.css.js");

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

parcelRegister("4lE3h", function(module, exports) {

$parcel$export(module.exports, "clickElsewhere", () => $32a8310b720f655e$export$2096ed454f5887a6);
const $32a8310b720f655e$export$2096ed454f5887a6 = (panel, onClick)=>{
    const handler = (e)=>{
        const path = e.composedPath();
        if (!path.includes(panel)) onClick(e);
    };
    window.addEventListener("click", handler);
    return ()=>{
        window.removeEventListener("click", handler);
    };
};

});

parcelRegister("5CYCT", function(module, exports) {

$parcel$export(module.exports, "ResultCard", () => $418f877da8d800cf$export$3219b0bbd5caee8);

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $46udE = parcelRequire("46udE");

var $2aEFH = parcelRequire("2aEFH");

var $5vq1D = parcelRequire("5vq1D");

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
const $418f877da8d800cf$var$canvas = (0, $5vq1D.element)("canvas");
const $418f877da8d800cf$var$ctx = $418f877da8d800cf$var$canvas.getContext("2d");
const $418f877da8d800cf$var$measureSongTitle = (name, fontFamily)=>{
    $418f877da8d800cf$var$ctx.font = `600 48px / 80px ${fontFamily}`;
    const measure = $418f877da8d800cf$var$ctx.measureText(name);
    return measure.width;
};
let $418f877da8d800cf$export$3219b0bbd5caee8 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "result-card",
            styles: [
                (0, $46udE.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
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
        songTitle = (0, $5vq1D.element)("div");
        chartInfo = (0, $5vq1D.signal)(null);
        bestNo = (0, $5vq1D.signal)(null);
        noteResult = (0, $5vq1D.signal)({});
        scoreResult = (0, $5vq1D.signal)(null);
        clearRank = (0, $5vq1D.signal)(null);
        playTime = (0, $5vq1D.signal)(null);
        now = (0, $5vq1D.signal)(null);
        hd = (0, $5vq1D.signal)(false);
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
                (0, $5vq1D.cssVar)(this, "potential-color", `var(--${difficulty}-light)`);
                (0, $5vq1D.cssVar)(this, "constant-color", `var(--${difficulty})`);
                (0, $5vq1D.cssVar)(this, "badge-border", `var(--${difficulty}-border)`);
                const title = this.chart.getName(chart, song);
                (0, $5vq1D.content)(this.songTitle, title);
                const fontFamily = getComputedStyle(this.shadowRoot.querySelector(".song-title")).fontFamily;
                const length = $418f877da8d800cf$var$measureSongTitle(title, fontFamily);
                const titleLength = length < 664 ? 664 : length;
                (0, $5vq1D.cssVar)(this, "title-length", `${titleLength}`);
            });
            return (0, $kKW7D.jsxs)("div", {
                class: "card",
                part: "card",
                "var:no-color": (0, $5vq1D.computed)(()=>{
                    const bestNo = this.bestNo();
                    if (!bestNo || bestNo > 3) return null;
                    return `var(--${bestNo})`;
                }),
                children: [
                    (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                        class: "cover",
                        src: (0, $5vq1D.computed)(()=>{
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
                                        children: (0, $5vq1D.computed)(()=>this.scoreResult()?.potential.toFixed(4) ?? "")
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "constant",
                                        children: (0, $5vq1D.computed)(()=>this.chartInfo()?.chart.constant.toFixed(1) ?? "")
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "rank",
                                        children: [
                                            (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                                class: "grade",
                                                src: (0, $5vq1D.computed)(()=>{
                                                    const grade = this.scoreResult()?.grade;
                                                    return grade ? this.assets.getAssets(this.resolver.resolveGradeImg(grade)) : Promise.resolve(null);
                                                }),
                                                "class:hidden": (0, $5vq1D.computed)(()=>!this.scoreResult())
                                            }),
                                            (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                                class: "clear",
                                                src: (0, $5vq1D.computed)(()=>{
                                                    const clear = this.clearRank();
                                                    return clear ? this.assets.getAssets(this.resolver.resolveClearImg(clear)) : Promise.resolve(null);
                                                }),
                                                "class:hidden": (0, $5vq1D.computed)(()=>!this.clearRank())
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "no-badge",
                                        children: (0, $5vq1D.computed)(()=>{
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
                                class: (0, $5vq1D.computed)(()=>this.clearRank() === (0, $2aEFH.ClearRank).Maximum ? "score max" : "score"),
                                children: (0, $5vq1D.computed)(()=>$418f877da8d800cf$var$formatScore(this.scoreResult()?.score ?? 0))
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
                                                children: (0, $5vq1D.computed)(()=>this.noteResult().pure ?? "?")
                                            }),
                                            "(",
                                            (0, $kKW7D.jsx)("span", {
                                                class: "perfect",
                                                children: (0, $5vq1D.computed)(()=>{
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
                                                children: (0, $5vq1D.computed)(()=>this.noteResult().far ?? "?")
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "lost",
                                        children: [
                                            "Lost/",
                                            (0, $kKW7D.jsx)("span", {
                                                class: "count",
                                                children: (0, $5vq1D.computed)(()=>this.noteResult().lost ?? "?")
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "time",
                                        children: (0, $kKW7D.jsx)("time", {
                                            datetime: (0, $5vq1D.computed)(()=>this.playTime()?.toISOString()),
                                            title: (0, $5vq1D.computed)(()=>this.playTime()?.toString()),
                                            children: (0, $5vq1D.computed)(()=>{
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
            (0, $5vq1D.cssVar)(this, "card-scale", `${width / 1000}`);
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

parcelRegister("dxCXw", function(module, exports) {

$parcel$export(module.exports, "AssetImage", () => $9dbc93de3839fa1e$export$2d8162d48fc3ae29);

var $kKW7D = parcelRequire("kKW7D");

var $9V4HB = parcelRequire("9V4HB");

var $5vq1D = parcelRequire("5vq1D");

var $21erW = parcelRequire("21erW");
const $9dbc93de3839fa1e$export$2d8162d48fc3ae29 = ({ src: src, noLoading: noLoading, ...props })=>{
    const $src = (0, $5vq1D.signal)(null);
    let resolveingPromise = null;
    const handleSource = (source)=>{
        if (!source || (0, $21erW.isString)(source)) {
            $src.set(source || null);
            return;
        }
        resolveingPromise = source;
        if (!noLoading) $src.set((0, (/*@__PURE__*/$parcel$interopDefault($9V4HB))));
        source.then((url)=>{
            // Only the last resolved promise apply.
            if (resolveingPromise === source) $src.set(url);
        }).catch(()=>{
            if (resolveingPromise === source) $src.set(null);
        });
    };
    (0, $5vq1D.isSubscribable)(src) ? (0, $5vq1D.useAutoRun)(()=>{
        handleSource(src());
    }) : handleSource(src);
    return (0, $kKW7D.jsx)("img", {
        src: $src,
        ...props
    });
};

});
parcelRegister("9V4HB", function(module, exports) {
module.exports = new URL("loading.cf56470b.gif", import.meta.url).toString();

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

parcelRegister("dwcPv", function(module, exports) {

$parcel$export(module.exports, "query", () => $9d78373778bba1dc$export$2fa187e846a241c4);
$parcel$export(module.exports, "input", () => $9d78373778bba1dc$export$b7e3ae3d7c15e42e);
$parcel$export(module.exports, "syncProps", () => $9d78373778bba1dc$export$b23ca50362483f82);

var $5vq1D = parcelRequire("5vq1D");
const $9d78373778bba1dc$export$dbf350e5966cf602 = String.raw;
const $9d78373778bba1dc$export$2fa187e846a241c4 = (queries)=>(host)=>// @ts-expect-error Dynamic Implementation
        Object.fromEntries(Object.entries(queries).map(([key, value])=>[
                key,
                host.querySelector(value)
            ]));
const $9d78373778bba1dc$export$b7e3ae3d7c15e42e = ()=>(0, $5vq1D.element)("input");
const $9d78373778bba1dc$export$b23ca50362483f82 = (component)=>{
    const props = component.props;
    for(const key in props)if (key !== "ref" && key !== "children") {
        // @ts-expect-error dynamic key property
        const value = props[key];
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") (0, $5vq1D.attr)(component, key, value);
    }
};
class $9d78373778bba1dc$export$af1c1d0887531119 {
    prefix = "keypress-submit";
    requireParams = false;
    apply(el, _params, input) {
        if (input && el instanceof HTMLInputElement) return (0, $5vq1D.listen)(el)("keypress", (e)=>{
            if (e.key.toLowerCase() === "enter") el.form?.requestSubmit();
        });
    }
}
(0, $5vq1D.registerDirective)(new $9d78373778bba1dc$export$af1c1d0887531119());

});

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

parcelRegister("2wdrz", function(module, exports) {

var $4SiAm = parcelRequire("4SiAm");
module.exports = $4SiAm("4pm0v").then(()=>parcelRequire("fXgWO"));

});
parcelRegister("4SiAm", function(module, exports) {
"use strict";

function $38ca9f41b371579b$var$load(id) {
    // eslint-disable-next-line no-undef
    return import((parcelRequire("8uu6p")).resolve(id));
}
module.exports = $38ca9f41b371579b$var$load;

});


parcelRegister("b0ze6", function(module, exports) {

$parcel$export(module.exports, "PotentialBadge", () => $803b05050075c1e9$export$860d916845fdd53a);

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $5vq1D = parcelRequire("5vq1D");

var $jgGTy = parcelRequire("jgGTy");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $dwcPv = parcelRequire("dwcPv");

var $dxCXw = parcelRequire("dxCXw");
let $803b05050075c1e9$export$860d916845fdd53a = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "potential-badge",
            styles: [
                (0, $jgGTy.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
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
                (0, $5vq1D.Attribute)("potential", Number)
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
            return (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
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


var $6gcx6 = parcelRequire("6gcx6");

var $hlIIF = parcelRequire("hlIIF");

var $jrD1x = parcelRequire("jrD1x");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");
var $7d22a8645db6f8d8$exports = {};
$7d22a8645db6f8d8$exports = new URL("favicon.cc7e02d3.ico", import.meta.url).toString();


var $da3cacf40c592c74$exports = {};
$da3cacf40c592c74$exports = new URL("moon-fill.0c6ba28c.svg", import.meta.url).toString();


var $e10bc9e210f4be5d$exports = {};
$e10bc9e210f4be5d$exports = new URL("sun.76263975.svg", import.meta.url).toString();


var $4872a6e4cfe9aaf8$exports = {};
$4872a6e4cfe9aaf8$exports = new URL("github.891ff76f.svg", import.meta.url).toString();



var $hlIIF = parcelRequire("hlIIF");

var $04CUQ = parcelRequire("04CUQ");
let $7249a2ce9de65b01$export$6f093cfa640b7166 = "button.nav-link{height:100%;display:flex;align-items:center;gap:.25em}svg{width:1em;height:1em;fill:var(--bs-body-color)}svg.github-link{width:1.5em;height:1.5em}";
const $7249a2ce9de65b01$export$995990c5c04c46f0 = (0, $04CUQ.create)($7249a2ce9de65b01$export$6f093cfa640b7166, "file:///src/view/components/nav-bar/style.css.js");



var $jrD1x = parcelRequire("jrD1x");

var $87X5s = parcelRequire("87X5s");
class $ec960e6aea3a7548$export$55185c17a0fcbe46 {
    container;
    routes;
    defaultRoute;
    currentRoute = null;
    caches = {};
    subscribers = new Set();
    constructor(container, routes, defaultRoute){
        this.container = container;
        this.routes = routes;
        this.defaultRoute = defaultRoute;
        queueMicrotask(()=>{
            this.navigate(this.matchRoute(location.hash.slice(1)), {
                query: this.parseQuery()
            });
        });
    }
    matchRoute(path) {
        return this.routes.find((r)=>r.path === path) || this.defaultRoute;
    }
    parseQuery(url = this.getURL()) {
        const search = {};
        url.searchParams.forEach((value, key)=>{
            Reflect.set(search, key, value);
        });
        return search;
    }
    updateLocation(url) {
        history.replaceState({}, "", url);
    }
    getURL() {
        return new URL(location.href);
    }
    updateSearchParams(url, search) {
        for(const key in search){
            const value = Reflect.get(search, key);
            if (value != null) url.searchParams.set(key, `${value}`);
            else url.searchParams.delete(key);
        }
    }
    updateQuery(search) {
        const url = this.getURL();
        this.updateSearchParams(url, search);
        this.updateLocation(url);
    }
    navigate(route, config) {
        const url = this.getURL();
        const currentRoute = this.currentRoute;
        if (currentRoute && (config?.cache ?? currentRoute.cahce)) this.caches[currentRoute.path] = this.parseQuery(url);
        const newURL = new URL(url.pathname, url.origin);
        newURL.hash = route.path;
        this.updateSearchParams(newURL, config?.query ?? this.caches[route.path]);
        this.updateLocation(newURL);
        this.currentRoute = route;
        this.container.innerHTML = "";
        this.container.appendChild(route.setup());
        this.dispatchChanges(route);
    }
    dispatchChanges(route) {
        for (const subscriber of [
            ...this.subscribers
        ])subscriber(route);
    }
    subscribe(subscriber) {
        this.subscribers.add(subscriber);
        return ()=>{
            this.subscribers.delete(subscriber);
        };
    }
}
const $ec960e6aea3a7548$export$fbfcc1f2535c2ebb = (0, $87X5s.token)("router");



var $4lE3h = parcelRequire("4lE3h");

var $5vq1D = parcelRequire("5vq1D");

var $7Cv7B = parcelRequire("7Cv7B");

var $kKW7D = parcelRequire("kKW7D");

var $5vq1D = parcelRequire("5vq1D");
const $ddb93019d29e8ff6$var$memorySVGCache = new Map();
const $ddb93019d29e8ff6$var$fetchSVG = async (src)=>{
    const response = await fetch(src);
    const svg = await response.text();
    const template = (0, $5vq1D.element)("template");
    template.innerHTML = svg;
    const el = template.content.firstElementChild;
    // await delay(400000);
    if (!(el instanceof SVGSVGElement)) throw new Error("Invalid SVG URL.");
    return el;
};
const $ddb93019d29e8ff6$var$getSVG = async (src)=>{
    const cached = $ddb93019d29e8ff6$var$memorySVGCache.get(src);
    if (cached) return (0, $5vq1D.clone)(await cached);
    const promise = $ddb93019d29e8ff6$var$fetchSVG(src);
    $ddb93019d29e8ff6$var$memorySVGCache.set(src, promise);
    const newEl = await promise;
    return newEl;
};
const $ddb93019d29e8ff6$export$1776e6671850176d = ({ src: src, ...props })=>{
    const { width: width, height: height } = props;
    const fallback = width && height ? (0, $kKW7D.jsx)("div", {
        style: `display: inline-block; width: ${width}px; height: ${height}px;`
    }) : undefined;
    return (0, $kKW7D.jsx)((0, $5vq1D.Future), {
        promise: $ddb93019d29e8ff6$var$getSVG(src),
        fallback: fallback,
        children: (el)=>{
            return (0, $kKW7D.jsx)("svg", {
                ref: el,
                ...props
            });
        }
    });
};


let $fd37c8a1dcf83583$export$ef8da11641c635de = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "nav-bar",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $7249a2ce9de65b01$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _router_decorators;
    let _router_initializers = [];
    let _preference_decorators;
    let _preference_initializers = [];
    var NavBar = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _router_decorators = [
                (0, $jrD1x.Inject)((0, $ec960e6aea3a7548$export$fbfcc1f2535c2ebb))
            ];
            _preference_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$PreferenceService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _router_decorators, {
                kind: "accessor",
                name: "router",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"router" in obj,
                    get: (obj)=>obj.router,
                    set: (obj, value)=>{
                        obj.router = value;
                    }
                },
                metadata: _metadata
            }, _router_initializers, _instanceExtraInitializers);
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
            NavBar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #router_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _router_initializers, void 0));
        get router() {
            return this.#router_accessor_storage;
        }
        set router(value) {
            this.#router_accessor_storage = value;
        }
        #preference_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _preference_initializers, void 0);
        get preference() {
            return this.#preference_accessor_storage;
        }
        set preference(value) {
            this.#preference_accessor_storage = value;
        }
        showMenu = (0, $5vq1D.signal)(false);
        activeRoute = (0, $5vq1D.signal)("");
        theme = (0, $5vq1D.signal)("light");
        render() {
            this.effect(()=>(0, $5vq1D.subscribe)(this.preference.signal("theme"), (theme)=>{
                    const documentElement = document.documentElement;
                    (0, $5vq1D.attr)(documentElement, "data-bs-theme", theme);
                    (0, $5vq1D.attr)(documentElement, "data-theme", theme);
                    this.theme.set(theme);
                }));
            this.effect(()=>(0, $4lE3h.clickElsewhere)(this, ()=>this.showMenu.set(false)));
            this.effect(()=>this.router.subscribe((newRoute)=>this.activeRoute.set(newRoute.path)));
            return (0, $kKW7D.jsx)("nav", {
                class: "navbar navbar-expand-lg bg-body-tertiary",
                children: (0, $kKW7D.jsxs)("div", {
                    class: "container-fluid",
                    children: [
                        (0, $kKW7D.jsxs)("a", {
                            class: "navbar-brand",
                            href: "#",
                            onClick: (e)=>e.preventDefault(),
                            children: [
                                (0, $kKW7D.jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($7d22a8645db6f8d8$exports))),
                                    alt: "Logo",
                                    width: "24",
                                    height: "24",
                                    class: "d-inline-block align-text-top"
                                }),
                                " Arcaea Toolbelt "
                            ]
                        }),
                        (0, $kKW7D.jsx)("button", {
                            class: "navbar-toggler",
                            type: "button",
                            onClick: this.toggleMenu,
                            children: (0, $kKW7D.jsx)("span", {
                                class: "navbar-toggler-icon"
                            })
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            class: "collapse navbar-collapse",
                            "class:show": this.showMenu,
                            children: [
                                (0, $kKW7D.jsx)("ul", {
                                    class: "navbar-nav me-auto mb-2 mb-lg-0",
                                    children: this.router.routes.map((route)=>(0, $kKW7D.jsx)("li", {
                                            class: "nav-item",
                                            "class:active": (0, $5vq1D.computed)(()=>this.activeRoute() === route.path),
                                            children: (0, $kKW7D.jsx)("a", {
                                                class: "nav-link",
                                                role: "button",
                                                href: `#${route.path}`,
                                                onClick: (e)=>{
                                                    if (!e.ctrlKey) {
                                                        this.router.navigate(route);
                                                        this.showMenu.set(false);
                                                    }
                                                },
                                                children: route.title
                                            })
                                        }))
                                }),
                                (0, $kKW7D.jsxs)("ul", {
                                    class: "navbar-nav",
                                    children: [
                                        (0, $kKW7D.jsx)("li", {
                                            class: "nav-item",
                                            children: (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                                                children: ()=>{
                                                    const theme = this.theme();
                                                    const src = theme === "light" ? (0, (/*@__PURE__*/$parcel$interopDefault($e10bc9e210f4be5d$exports))) : (0, (/*@__PURE__*/$parcel$interopDefault($da3cacf40c592c74$exports)));
                                                    const toggleThemeText = `\u{5207}\u{6362}${theme === "light" ? "\u7EB7\u4E89" : "\u5149\u8292"}\u{4FA7}`;
                                                    return (0, $kKW7D.jsxs)("button", {
                                                        class: "btn btn-link nav-link",
                                                        title: toggleThemeText,
                                                        onClick: this.toggleTheme,
                                                        children: [
                                                            (0, $kKW7D.jsx)((0, $ddb93019d29e8ff6$export$1776e6671850176d), {
                                                                src: src,
                                                                role: "img"
                                                            }),
                                                            (0, $kKW7D.jsx)("span", {
                                                                class: "d-lg-none",
                                                                children: toggleThemeText
                                                            })
                                                        ]
                                                    });
                                                }
                                            })
                                        }),
                                        (0, $kKW7D.jsx)("li", {
                                            class: "nav-item",
                                            children: (0, $kKW7D.jsx)("a", {
                                                class: "nav-link",
                                                href: "https://github.com/DarrenDanielDay/arcaea-toolbelt",
                                                target: "_blank",
                                                children: (0, $kKW7D.jsx)((0, $ddb93019d29e8ff6$export$1776e6671850176d), {
                                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($4872a6e4cfe9aaf8$exports))),
                                                    class: "github-link",
                                                    role: "img"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            });
        }
        toggleMenu = ()=>{
            this.showMenu.update((show)=>!show);
        };
        toggleTheme = ()=>{
            this.preference.update({
                theme: this.theme() === "light" ? "dark" : "light"
            });
        };
    };
    return NavBar = _classThis;
})();



var $eJy3F = parcelRequire("eJy3F");

var $I463m = parcelRequire("I463m");

var $gwbXp = parcelRequire("gwbXp");


var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");


var $5vq1D = parcelRequire("5vq1D");

var $hlIIF = parcelRequire("hlIIF");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $1468529124dcd4d2$export$6f093cfa640b7166 = ":host{background-color:transparent}.b30,.b39{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;justify-content:space-around}result-card{width:240px}.card{transform:scale(calc(var(--inner-width,800)/ 800));transform-origin:0 0;background-repeat:no-repeat;background-position:30% 0;background-size:cover;box-sizing:border-box;width:800px;border:1px solid var(--bs-border-color);border-radius:16px}.mask{padding:16px 31px;border-radius:16px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.banner,.username{font-weight:600;font-size:30px}.card-list{display:flex;flex-direction:column;gap:8px}.row{display:flex}.c8{width:66.67%}.c4{width:33.33%}.divider{border-top:1px solid var(--bs-border-color);margin:16px 0}.footer{height:32px;display:flex;justify-content:center;align-items:flex-end}.footer,time{word-break:keep-all;white-space:nowrap}";
const $1468529124dcd4d2$export$995990c5c04c46f0 = (0, $04CUQ.create)($1468529124dcd4d2$export$6f093cfa640b7166, "file:///src/view/components/b30-yukichan/style.css.js");



var $5CYCT = parcelRequire("5CYCT");

var $5vq1D = parcelRequire("5vq1D");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");
const $36ae76c6dbc0f7be$var$renderB30 = (response)=>{
    const { queryTime: queryTime, b30: b30, b31_39: b31_39, b30Average: b30Average, maxPotential: maxPotential, minPotential: minPotential, potential: potential, r10Average: r10Average, username: username } = response;
    const now = new Date(queryTime);
    const renderBest = (best)=>{
        const card = new (0, $5CYCT.ResultCard)();
        card.setChart(best.song, best.chart);
        card.setBest(best.no);
        card.setResult(best.note, best.score, best.clear);
        card.setPlayTime(best.date ?? null);
        card.setNow(now);
        return card;
    };
    return (0, $kKW7D.jsx)("div", {
        class: "card",
        part: "b30-result-card",
        children: (0, $kKW7D.jsxs)("div", {
            class: "mask",
            children: [
                (0, $kKW7D.jsxs)("div", {
                    class: "row",
                    children: [
                        (0, $kKW7D.jsxs)("div", {
                            class: "c8",
                            children: [
                                (0, $kKW7D.jsxs)("div", {
                                    class: "username",
                                    children: [
                                        username,
                                        " (",
                                        potential,
                                        ")"
                                    ]
                                }),
                                (0, $kKW7D.jsxs)("div", {
                                    class: "details",
                                    children: [
                                        "B30Avg=",
                                        b30Average.toFixed(4),
                                        " R10Avg=",
                                        r10Average.toFixed(4),
                                        " Ptt Range [",
                                        minPotential.toFixed(4),
                                        ",",
                                        " ",
                                        maxPotential.toFixed(4),
                                        "]"
                                    ]
                                })
                            ]
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "c4",
                            children: (0, $kKW7D.jsx)("div", {
                                class: "banner",
                                children: "Player Best30"
                            })
                        })
                    ]
                }),
                (0, $kKW7D.jsx)("div", {
                    class: "divider"
                }),
                (0, $kKW7D.jsxs)("div", {
                    class: "b30",
                    children: [
                        (0, $kKW7D.jsx)("div", {
                            class: "card-list best-1-10",
                            children: b30.slice(0, 10).map(renderBest)
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "card-list best-11-20",
                            children: b30.slice(10, 20).map(renderBest)
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "card-list best-21-30",
                            children: b30.slice(20, 30).map(renderBest)
                        })
                    ]
                }),
                (0, $kKW7D.jsx)("div", {
                    class: "divider"
                }),
                (0, $kKW7D.jsxs)("div", {
                    class: "b39",
                    children: [
                        (0, $kKW7D.jsx)("div", {
                            class: "card-list best-31-33",
                            children: b31_39.slice(0, 3).map(renderBest)
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "card-list best-34-36",
                            children: b31_39.slice(3, 6).map(renderBest)
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "card-list best-37-39",
                            children: b31_39.slice(6, 9).map(renderBest)
                        })
                    ]
                }),
                (0, $kKW7D.jsx)("div", {
                    class: "footer",
                    children: (0, $kKW7D.jsxs)("div", {
                        children: [
                            "Generated by Arcaea Toolbelt@YukiChan -RESURRECTION-",
                            " ",
                            (0, $kKW7D.jsx)("time", {
                                datetime: now.toISOString(),
                                children: now.toLocaleString()
                            })
                        ]
                    })
                })
            ]
        })
    });
};
let $36ae76c6dbc0f7be$export$92a65194fd1587f3 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "best-30-yukichan",
            styles: [
                (0, $1468529124dcd4d2$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _chart_decorators;
    let _chart_initializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _assets_decorators;
    let _assets_initializers = [];
    let _preference_decorators;
    let _preference_initializers = [];
    var Best30YukiChan = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _chart_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
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
            Best30YukiChan = _classThis = _classDescriptor.value;
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
        b30 = (0, $5vq1D.signal)(null);
        hd = (0, $5vq1D.signal)(false);
        render() {
            this.autorun(()=>{
                const b30 = this.b30();
                const hd = this.hd();
                const theme = this.preference.signal("theme")();
                if (b30) {
                    this.#updateBg(hd, theme);
                    this.#updateResultCards(hd);
                }
            });
            return (0, $kKW7D.jsx)((0, $5vq1D.Show), {
                when: this.b30,
                children: (response)=>$36ae76c6dbc0f7be$var$renderB30(response)
            });
        }
        getExportNode() {
            const node = this.shadowRoot.querySelector(".card");
            return node instanceof HTMLElement ? node : null;
        }
        #updateResultCards(hd) {
            const node = this.getExportNode();
            if (!node) return;
            (0, $5vq1D.cssVar)(node, "inner-width", hd ? `${800000 / 240}` : null);
            node.querySelectorAll("result-card").forEach((card)=>{
                card.setHD(hd);
            });
        }
        async #updateBg(hd, theme) {
            const index = await this.chart.getSongIndex();
            const song = theme === "dark" ? index["odysseia"] : index["lovelessdress"];
            const chart = song.charts[2];
            const url = await this.assets.getAssets(this.resolver.resolveCover(chart, song, hd));
            const card = this.getExportNode();
            card.style.backgroundImage = `url("${url}")`;
        }
    };
    return Best30YukiChan = _classThis;
})();



var $ezVt6 = parcelRequire("ezVt6");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");
var $c4a20de3b37dcb80$exports = {};
$c4a20de3b37dcb80$exports = new URL("help.c57e4871.svg", import.meta.url).toString();



var $04CUQ = parcelRequire("04CUQ");
let $d5454c7aaacb70d5$export$6f093cfa640b7166 = ":host>div{display:inline-block;width:1em;height:1em;cursor:pointer}svg{fill:var(--bs-body-color)}";
const $d5454c7aaacb70d5$export$995990c5c04c46f0 = (0, $04CUQ.create)($d5454c7aaacb70d5$export$6f093cfa640b7166, "file:///src/view/components/help-tip/style.css.js");



var $dIVkE = parcelRequire("dIVkE");

var $5vq1D = parcelRequire("5vq1D");

var $hlIIF = parcelRequire("hlIIF");

let $1fe90d402f24c9c8$export$2986292ddc3a70d5 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "help-tip",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $d5454c7aaacb70d5$export$995990c5c04c46f0),
                (0, $dIVkE.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    var HelpTip = class extends _classSuper {
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
            HelpTip = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        dialog = (0, $5vq1D.element)("dialog");
        render() {
            return (0, $kKW7D.jsxs)("div", {
                children: [
                    (0, $kKW7D.jsx)((0, $ddb93019d29e8ff6$export$1776e6671850176d), {
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($c4a20de3b37dcb80$exports))),
                        onClick: ()=>this.dialog.showModal()
                    }),
                    (0, $kKW7D.jsx)("dialog", {
                        ref: this.dialog,
                        children: (0, $kKW7D.jsxs)("div", {
                            class: "modal-root",
                            part: "modal-root",
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "modal-content mb-3",
                                    children: (0, $kKW7D.jsx)("slot", {})
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "modal-footer",
                                    children: (0, $kKW7D.jsx)("button", {
                                        type: "button",
                                        class: "btn btn-primary",
                                        onClick: ()=>this.dialog.close(),
                                        children: "\u4E86\u89E3"
                                    })
                                })
                            ]
                        })
                    })
                ]
            });
        }
    };
    return HelpTip = _classThis;
})();



var $lwREd = parcelRequire("lwREd");
0, $1fe90d402f24c9c8$export$2986292ddc3a70d5;
const $9175cb20fb11f55f$export$d0bfaf2fbb19a56f = {
    path: "/about",
    title: "\u5173\u4E8E",
    setup () {
        return new $9175cb20fb11f55f$var$About();
    }
};
let $9175cb20fb11f55f$var$About = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "about-arcaea-toolbelt",
            styles: [
                (0, $hlIIF.bootstrap)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _core_decorators;
    let _core_initializers = [];
    let _assetsCache_decorators;
    let _assetsCache_initializers = [];
    let _assets_decorators;
    let _assets_initializers = [];
    let _chart_decorators;
    let _chart_initializers = [];
    let _musicPlay_decorators;
    let _musicPlay_initializers = [];
    let _profile_decorators;
    let _profile_initializers = [];
    let _preference_decorators;
    let _preference_initializers = [];
    var About = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _core_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$CoreDataService))
            ];
            _assetsCache_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsCacheService))
            ];
            _assets_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsService))
            ];
            _chart_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _musicPlay_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            _profile_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ProfileService))
            ];
            _preference_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$PreferenceService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _core_decorators, {
                kind: "accessor",
                name: "core",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"core" in obj,
                    get: (obj)=>obj.core,
                    set: (obj, value)=>{
                        obj.core = value;
                    }
                },
                metadata: _metadata
            }, _core_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _assetsCache_decorators, {
                kind: "accessor",
                name: "assetsCache",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"assetsCache" in obj,
                    get: (obj)=>obj.assetsCache,
                    set: (obj, value)=>{
                        obj.assetsCache = value;
                    }
                },
                metadata: _metadata
            }, _assetsCache_initializers, _instanceExtraInitializers);
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
            (0, $1I0Yl.__esDecorate)(this, null, _profile_decorators, {
                kind: "accessor",
                name: "profile",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"profile" in obj,
                    get: (obj)=>obj.profile,
                    set: (obj, value)=>{
                        obj.profile = value;
                    }
                },
                metadata: _metadata
            }, _profile_initializers, _instanceExtraInitializers);
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
            About = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #core_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _core_initializers, void 0));
        get core() {
            return this.#core_accessor_storage;
        }
        set core(value) {
            this.#core_accessor_storage = value;
        }
        #assetsCache_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _assetsCache_initializers, void 0);
        get assetsCache() {
            return this.#assetsCache_accessor_storage;
        }
        set assetsCache(value) {
            this.#assetsCache_accessor_storage = value;
        }
        #assets_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _assets_initializers, void 0);
        get assets() {
            return this.#assets_accessor_storage;
        }
        set assets(value) {
            this.#assets_accessor_storage = value;
        }
        #chart_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _chart_initializers, void 0);
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
        #profile_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _profile_initializers, void 0);
        get profile() {
            return this.#profile_accessor_storage;
        }
        set profile(value) {
            this.#profile_accessor_storage = value;
        }
        #preference_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _preference_initializers, void 0);
        get preference() {
            return this.#preference_accessor_storage;
        }
        set preference(value) {
            this.#preference_accessor_storage = value;
        }
        b30Dialog = new (0, $ezVt6.FancyDialog)();
        b30Panel = new (0, $36ae76c6dbc0f7be$export$92a65194fd1587f3)();
        render() {
            return (0, $kKW7D.jsx)((0, $5vq1D.Future), {
                promise: this.init(),
                children: (args)=>this._render(...args)
            });
        }
        _render(meta, chartStats, musicPlayStats, maxB30, baseB30, freeB30) {
            const COMMIT_SHA = "b5f32f50066b3fdece83d76f87590c9ddea8b26d";
            const maxPotentialStats = [
                [
                    "\u7406\u8BBA\u6700\u5927\u6F5C\u529B\u503C",
                    musicPlayStats.maximumPotential,
                    maxB30
                ],
                [
                    "\u4EC5\u57FA\u7840\u5305\uFF08Arcaea\uFF09\u6700\u5927\u6F5C\u529B\u503C",
                    baseB30.maxPotential,
                    baseB30
                ],
                [
                    (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                        children: [
                            "\u65E0\u6C2A",
                            (0, $kKW7D.jsxs)("help-tip", {
                                children: [
                                    "\u4EC5\u8003\u8651",
                                    this.chart.freePacks.join("\u3001"),
                                    "\u66F2\u5305"
                                ]
                            }),
                            "\u6700\u5927\u6F5C\u529B\u503C"
                        ]
                    }),
                    freeB30.maxPotential,
                    freeB30
                ]
            ];
            return (0, $kKW7D.jsxs)("div", {
                class: "m-3",
                children: [
                    (0, $kKW7D.jsx)("h2", {
                        children: "\u5173\u4E8E Arcaea Toolbelt"
                    }),
                    (0, $kKW7D.jsx)("div", {
                        children: (0, $kKW7D.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($7d22a8645db6f8d8$exports)))
                        })
                    }),
                    (0, $kKW7D.jsxs)("p", {
                        children: [
                            "commit SHA: ",
                            (0, $kKW7D.jsx)("span", {
                                title: COMMIT_SHA,
                                children: COMMIT_SHA?.slice(0, 8)
                            })
                        ]
                    }),
                    (0, $kKW7D.jsxs)("p", {
                        children: [
                            "\u6570\u636E\u66F4\u65B0\u65F6\u95F4\uFF1A",
                            new Date(meta.time).toLocaleString()
                        ]
                    }),
                    (0, $kKW7D.jsxs)("p", {
                        children: [
                            "Arcaea\u7248\u672C: ",
                            meta.version,
                            " ",
                            (0, $kKW7D.jsx)("a", {
                                target: "_blank",
                                href: meta.apk,
                                children: "\u4E0B\u8F7D\u94FE\u63A5"
                            }),
                            " ",
                            (0, $kKW7D.jsx)("a", {
                                target: "_blank",
                                href: "https://webapi.lowiro.com/webapi/serve/static/bin/arcaea/apk",
                                referrerpolicy: "no-referrer",
                                children: "\u83B7\u53D6\u6700\u65B0\u7248\u672C"
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("h3", {
                        children: "\u7EDF\u8BA1\u4FE1\u606F"
                    }),
                    (0, $kKW7D.jsx)("h4", {
                        children: "\u6F5C\u529B\u503C\u7EDF\u8BA1"
                    }),
                    maxPotentialStats.map((args)=>this.renderMaxPtt(...args)),
                    (0, $kKW7D.jsx)("h4", {
                        children: "\u8C31\u9762\u7EDF\u8BA1"
                    }),
                    (0, $kKW7D.jsx)("div", {
                        children: Object.entries(chartStats.difficulties).map(([difficulty, { count: count, notes: notes }])=>{
                            return (0, $kKW7D.jsxs)("div", {
                                children: [
                                    (0, $kKW7D.jsx)("strong", {
                                        "style:color": `var(--${difficulty})`,
                                        children: difficulty.toUpperCase()
                                    }),
                                    ":",
                                    count,
                                    "\u4E2A\u8C31\u9762\uFF0C\u603B\u7269\u91CF",
                                    notes
                                ]
                            });
                        })
                    }),
                    (0, $kKW7D.jsx)("h3", {
                        children: "\u6742\u9879"
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "my-3",
                        children: [
                            (0, $kKW7D.jsx)("button", {
                                class: "btn btn-outline-danger",
                                onClick: async ()=>{
                                    const byteSize = await this.assetsCache.cacheUsage();
                                    if (await (0, $ezVt6.confirm)((0, $kKW7D.jsxs)("div", {
                                        children: [
                                            "\u5F53\u524D\u56FE\u7247\u7F13\u5B58\u5360\u7528\u7A7A\u95F4\u4E3A",
                                            (0, $lwREd.formatSize)(byteSize),
                                            "\uFF0C\u662F\u5426\u786E\u8BA4\u5168\u90E8\u6E05\u9664\uFF1F"
                                        ]
                                    }))) {
                                        await this.assetsCache.clearCache();
                                        (0, $ezVt6.alert)("\u56FE\u7247\u7F13\u5B58\u6E05\u9664\u5B8C\u6BD5\u3002");
                                    }
                                },
                                children: "\u6E05\u9664\u56FE\u7247\u7F13\u5B58"
                            }),
                            (0, $kKW7D.jsxs)("help-tip", {
                                class: "mx-2",
                                children: [
                                    (0, $kKW7D.jsx)("p", {
                                        children: "\u4E3A\u4E86\u51CF\u5C11\u91CD\u590D\u7684\u56FE\u7247\u4E0B\u8F7D\u5E26\u6765\u7684\u4F53\u9A8C\u4E0D\u4F73\u95EE\u9898\uFF0C\u4E00\u4E9B\u56FE\u7247\uFF08\u4E3B\u8981\u662F\u66F2\u7ED8\uFF09\u4F1A\u5728\u4E0B\u8F7D\u540E\u7F13\u5B58\u5728\u6D4F\u89C8\u5668\u5185\u3002"
                                    }),
                                    (0, $kKW7D.jsx)("p", {
                                        children: "\u5982\u679C\u8FD9\u4E9B\u56FE\u7247\u5360\u7528\u4E86\u8FC7\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u60A8\u53EF\u4EE5\u5728\u6B64\u6E05\u7A7A\u4ED6\u4EEC\u3002\u672C\u5DE5\u5177\u518D\u6B21\u9700\u8981\u8FD9\u4E9B\u56FE\u7247\u65F6\uFF0C\u5C06\u4F1A\u91CD\u65B0\u4E0B\u8F7D\u4ED6\u4EEC\u3002"
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "form-check form-switch my-3",
                        children: [
                            (0, $kKW7D.jsx)("input", {
                                class: "form-check-input",
                                type: "checkbox",
                                role: "switch",
                                id: "use-gh-proxy",
                                onChange: async ()=>{
                                    this.preference.update({
                                        ghproxy: !(await this.preference.get()).ghproxy
                                    });
                                },
                                checked: this.preference.signal("ghproxy")
                            }),
                            (0, $kKW7D.jsxs)("label", {
                                class: "form-check-label",
                                for: "use-gh-proxy",
                                children: [
                                    "\u4F7F\u7528ghproxy\u52A0\u901F",
                                    (0, $kKW7D.jsxs)("help-tip", {
                                        class: "mx-2",
                                        children: [
                                            (0, $kKW7D.jsx)("p", {
                                                children: "\u4EE3\u7406\u5185\u5BB9\u4E3B\u8981\u662FArcaea\u76F8\u5173\u56FE\u7247\u8D44\u6E90\uFF0C\u4EE5\u53CA\u672C\u5DE5\u5177\u6240\u5FC5\u987B\u7684\u6570\u636E\uFF0Cghproxy\u4EE3\u7406\u4E0D\u4E00\u5B9A\u7A33\u5B9A\uFF0C\u76EE\u524D\u9ED8\u8BA4\u662Fgithub.io\u76F4\u63A5\u8BBF\u95EE\u3002"
                                            }),
                                            (0, $kKW7D.jsx)("p", {
                                                children: "\u6B64\u8BBE\u7F6E\u4E0E\u8DE8\u7AD9\u811A\u672C\u5DE5\u5177\u4E0D\u4E92\u901A\u3002"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "form-check form-switch my-3",
                        children: [
                            (0, $kKW7D.jsx)("input", {
                                class: "form-check-input",
                                type: "checkbox",
                                role: "switch",
                                id: "show-max-minus",
                                onChange: async ()=>{
                                    const { showMaxMinus: showMaxMinus } = await this.preference.get();
                                    await this.preference.update({
                                        showMaxMinus: !showMaxMinus
                                    });
                                },
                                checked: this.preference.signal("showMaxMinus")
                            }),
                            (0, $kKW7D.jsxs)("label", {
                                class: "form-check-label",
                                for: "use-gh-proxy",
                                children: [
                                    "\u663E\u793A\u5C0FP",
                                    (0, $kKW7D.jsxs)("help-tip", {
                                        class: "mx-2",
                                        children: [
                                            (0, $kKW7D.jsx)("p", {
                                                children: "\u5F00\u542F\u540E\uFF0C\u5728\u6210\u7EE9\u5361\u7247\u5185\uFF0C\u82E5\u6210\u7EE9\u6709\u5224\u5B9A\u4FE1\u606F\uFF0C\u5728Pure\u6570\u91CF\u540E\u5C06\u4F1A\u663E\u793A\u5C0FP\u6570\u91CF\uFF08-\u5C0FP\u6570\uFF0C\u4E0D\u5F00\u542F\u65F6\u662F+\u5927P\u6570\uFF09\u3002\u5982\u679C\u6240\u6709\u7684Pure\u90FD\u662F\u5927P\uFF0C\u5219\u4F1A\u663E\u793AMax\uFF08\u4F46\u4E0D\u4E00\u5B9A\u662F\u7406\u8BBA\u503C\uFF09\u3002"
                                            }),
                                            (0, $kKW7D.jsx)("p", {
                                                children: "\u6B64\u8BBE\u7F6E\u4E0E\u8DE8\u7AD9\u811A\u672C\u5DE5\u5177\u4E0D\u4E92\u901A\u3002"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("h3", {
                        children: "\u95EE\u9898\u53CD\u9988"
                    }),
                    (0, $kKW7D.jsx)("div", {
                        children: (0, $kKW7D.jsxs)("p", {
                            children: [
                                "\u5982\u679C\u60A8\u5728\u4F7F\u7528\u672C\u5DE5\u5177\u65F6\u9047\u5230\u95EE\u9898\uFF0C\u6B22\u8FCE\u63D0\u4EA4",
                                (0, $kKW7D.jsx)("a", {
                                    href: "https://github.com/DarrenDanielDay/arcaea-toolbelt/issues",
                                    target: "_blank",
                                    children: "issues"
                                }),
                                "\u8FDB\u884C\u53CD\u9988\u3002"
                            ]
                        })
                    }),
                    this.b30Dialog
                ]
            });
        }
        async init() {
            const meta = await this.core.getMetaData();
            const chartStats = await this.chart.getStatistics();
            const musicPlayStats = await this.musicPlay.getStatistics();
            const profile = await this.profile.generateMaxProfile();
            const maxB30 = await this.profile.b30(profile);
            const baseB30 = await this.profile.b30(profile, {
                packs: this.chart.freePacks.slice(0, 1)
            });
            const freeB30 = await this.profile.b30(profile, {
                packs: this.chart.freePacks
            });
            return [
                meta,
                chartStats,
                musicPlayStats,
                maxB30,
                baseB30,
                freeB30
            ];
        }
        renderMaxPtt(info, potential, b30) {
            const normalizedPotential = potential.toFixed(4);
            return (0, $kKW7D.jsxs)("div", {
                children: [
                    (0, $kKW7D.jsxs)("div", {
                        children: [
                            info,
                            "\uFF1A",
                            normalizedPotential
                        ]
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        style: "display: flex; align-items: center;",
                        children: [
                            (0, $kKW7D.jsx)("potential-badge", {
                                potential: +normalizedPotential
                            }),
                            (0, $kKW7D.jsx)("button", {
                                class: "btn btn-secondary mx-3",
                                onClick: ()=>this.showB30(b30),
                                children: "b30"
                            })
                        ]
                    })
                ]
            });
        }
        showB30(b30) {
            this.b30Panel.b30.set(b30);
            this.b30Dialog.showAlert((0, $kKW7D.jsx)("div", {
                "var:inner-width": "800px",
                children: this.b30Panel
            }));
        }
    };
    return About = _classThis;
})();



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $5vq1D = parcelRequire("5vq1D");

var $7Cv7B = parcelRequire("7Cv7B");

var $jrD1x = parcelRequire("jrD1x");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $dwcPv = parcelRequire("dwcPv");

var $5CYCT = parcelRequire("5CYCT");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $4lE3h = parcelRequire("4lE3h");

var $5vq1D = parcelRequire("5vq1D");

var $04CUQ = parcelRequire("04CUQ");
let $9b31ed7caa72ab49$export$6f093cfa640b7166 = ":host{width:100%;position:relative;display:block}.search-item{display:flex;align-items:center;gap:8px;cursor:pointer;transition:background-color .7s cubic-bezier(.075, .82, .165, 1)}.search-item:not(:last-child){margin-bottom:.5em}.search-item:focus-within,.search-item:hover{background-color:var(--bs-secondary-bg)}.search-panel{min-width:320px;max-height:400px;transform:translateY(12px);overflow-y:auto;box-sizing:border-box;padding:8px;position:absolute;background-color:var(--bs-body-bg);border-radius:8px;box-shadow:0 0 8px 8px rgba(0,0,0,.12);width:100%;z-index:10}";
const $9b31ed7caa72ab49$export$995990c5c04c46f0 = (0, $04CUQ.create)($9b31ed7caa72ab49$export$6f093cfa640b7166, "file:///src/view/components/search-select/style.css.js");


let $37717d4a195a2f99$export$4d759f1b65b98f06 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "search-select",
            styles: [
                (0, $9b31ed7caa72ab49$export$995990c5c04c46f0)
            ],
            formAssociated: true
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    var SearchSelect = class extends _classSuper {
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
            SearchSelect = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        renderItem;
        searchItems;
        getItemValue;
        panel = (0, $5vq1D.element)("div");
        searchInput = (0, $5vq1D.element)("input");
        selectedItem = (0, $5vq1D.signal)(null);
        lastRendered = null;
        panelVisible = (0, $5vq1D.signal)(false);
        constructor(renderItem, searchItems, getItemValue){
            super();
            this.renderItem = renderItem;
            this.searchItems = searchItems;
            this.getItemValue = getItemValue;
        }
        render() {
            this.effect(()=>{
                let count = 0;
                const onInput = async ()=>{
                    count++;
                    const current = count;
                    const result = await this.searchItems(this.searchInput.value);
                    if (count === current) this.renderSearchResults(result);
                };
                const onFocus = ()=>{
                    this.searchInput.select();
                };
                const onKeyDown = (e)=>{
                    const key = e.key.toLowerCase();
                    if (key === "arrowdown") this.panel.querySelector("div[tabindex]")?.focus();
                    if (key === "escape" && this.panelVisible()) {
                        e.preventDefault();
                        this.togglePanelVisible(false);
                    }
                };
                const rendered = (0, $5vq1D.mount)((0, $kKW7D.jsx)("input", {
                    ref: this.searchInput,
                    type: "text",
                    class: "form-control",
                    autocomplete: "off",
                    onInput: onInput,
                    onFocus: onFocus,
                    onKeydown: onKeyDown
                }), this);
                this.togglePanelVisible(false);
                return ()=>{
                    (0, $5vq1D.unmount)(rendered);
                };
            });
            this.effect(()=>(0, $4lE3h.clickElsewhere)(this.panel, ()=>{
                    this.togglePanelVisible(false);
                }));
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    (0, $kKW7D.jsx)("slot", {}),
                    (0, $kKW7D.jsx)("div", {
                        ref: this.panel,
                        class: "search-panel",
                        "style:display": (0, $5vq1D.computed)(()=>this.panelVisible() ? "block" : "none")
                    })
                ]
            });
        }
        togglePanelVisible(visible) {
            this.panelVisible.set(visible);
        }
        renderSearchResults(results) {
            this.togglePanelVisible(true);
            if (this.lastRendered) (0, $5vq1D.unmount)(this.lastRendered);
            const items = results.map((result)=>({
                    el: (0, $5vq1D.element)("div"),
                    result: result
                }));
            this.lastRendered = (0, $5vq1D.mount)((0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
                children: items.map(({ el: el, result: result }, i)=>{
                    const handleSelect = ()=>{
                        this.selectItem(result);
                        this.togglePanelVisible(false);
                    };
                    const handleKeyDown = (e)=>{
                        const key = e.key.toLowerCase();
                        if (key === "enter") handleSelect();
                        if (key === "arrowdown") items[(i + 1) % items.length]?.el.focus();
                        if (key === "arrowup") items[(i - 1 + items.length) % items.length]?.el.focus();
                        if (key === "escape") {
                            e.preventDefault();
                            this.togglePanelVisible(false);
                            this.searchInput?.focus();
                        }
                    };
                    return (0, $kKW7D.jsx)("div", {
                        ref: el,
                        class: "search-item",
                        tabindex: 0,
                        onClick: handleSelect,
                        onKeydown: handleKeyDown,
                        children: this.renderItem(result)
                    });
                })
            }), this.panel);
        }
        selectItem(item) {
            if (this.searchInput) {
                this.selectedItem.set(item);
                const formValue = this.getItemValue(item);
                this.searchInput.value = formValue;
                this.internals.setFormValue(formValue);
                this.searchInput.dispatchEvent(new Event("change", {
                    bubbles: true
                }));
            }
        }
    };
    return SearchSelect = _classThis;
})();



var $hlIIF = parcelRequire("hlIIF");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $2aEFH = parcelRequire("2aEFH");

var $5vq1D = parcelRequire("5vq1D");

var $04CUQ = parcelRequire("04CUQ");

var $04CUQ = parcelRequire("04CUQ");
let $bcfd29190bfc8d00$export$6f093cfa640b7166 = '.details{display:flex;gap:8px;align-items:center}.column{display:flex;flex-direction:column}.info-row,.notes{font-size:8px}.info-row :not(:last-child){margin-right:1em}.constant,.song-name{font-weight:600}.alias{font-size:12px}.notes{text-align:center;color:#c2e}.notes::before{content:"+"}.constant{color:#fff;display:inline-block;width:48px;height:24px;padding:4px 8px;border-radius:4px;text-align:left}.bpm{font-size:10px;text-align:center}.cover{width:72px;height:72px;box-shadow:0 0 .5em .125em var(--color-side)}';
const $bcfd29190bfc8d00$export$995990c5c04c46f0 = (0, $04CUQ.create)($bcfd29190bfc8d00$export$6f093cfa640b7166, "file:///src/view/components/play-result-form/style.css.js");



var $hyWAW = parcelRequire("hyWAW");
let $99e98769d2198600$export$3787e637cdb6dbca = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "play-result-form",
            styles: [
                (0, $hlIIF.bootstrap)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _chartService_decorators;
    let _chartService_initializers = [];
    let _musicPlayService_decorators;
    let _musicPlayService_initializers = [];
    var PlayResultForm = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _chartService_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _musicPlayService_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _chartService_decorators, {
                kind: "accessor",
                name: "chartService",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"chartService" in obj,
                    get: (obj)=>obj.chartService,
                    set: (obj, value)=>{
                        obj.chartService = value;
                    }
                },
                metadata: _metadata
            }, _chartService_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _musicPlayService_decorators, {
                kind: "accessor",
                name: "musicPlayService",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"musicPlayService" in obj,
                    get: (obj)=>obj.musicPlayService,
                    set: (obj, value)=>{
                        obj.musicPlayService = value;
                    }
                },
                metadata: _metadata
            }, _musicPlayService_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            PlayResultForm = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #chartService_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _chartService_initializers, void 0));
        get chartService() {
            return this.#chartService_accessor_storage;
        }
        set chartService(value) {
            this.#chartService_accessor_storage = value;
        }
        #musicPlayService_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _musicPlayService_initializers, void 0);
        get musicPlayService() {
            return this.#musicPlayService_accessor_storage;
        }
        set musicPlayService(value) {
            this.#musicPlayService_accessor_storage = value;
        }
        form = (0, $5vq1D.element)("form");
        far = (0, $dwcPv.input)();
        lost = (0, $dwcPv.input)();
        perfect = (0, $dwcPv.input)();
        score = (0, $dwcPv.input)();
        clear = (0, $5vq1D.element)("select");
        playTime = (0, $dwcPv.input)();
        card = new (0, $5CYCT.ResultCard)();
        chartSelect = new (0, $37717d4a195a2f99$export$4d759f1b65b98f06)((result)=>{
            const { song: { alias: alias, pack: pack, side: side }, cover: cover, chart: { note: note, designer: designer }, constant: constant, bpm: bpm, difficulty: difficulty, title: title } = result;
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    (0, $kKW7D.jsx)("img", {
                        class: "cover",
                        src: cover,
                        loading: "lazy",
                        "var:color-side": `var(--side-${(0, $2aEFH.Side)[side].toLowerCase()})`
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "details",
                        children: [
                            (0, $kKW7D.jsxs)("div", {
                                class: "column",
                                children: [
                                    (0, $kKW7D.jsx)("span", {
                                        class: "notes",
                                        children: note
                                    }),
                                    (0, $kKW7D.jsx)("span", {
                                        class: "constant",
                                        style: `background-color: var(--${difficulty})`,
                                        children: constant.toFixed(1)
                                    }),
                                    (0, $kKW7D.jsxs)("span", {
                                        class: "bpm",
                                        children: [
                                            "\u2669 = ",
                                            bpm
                                        ]
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "column",
                                children: [
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "info-row",
                                        children: [
                                            (0, $kKW7D.jsxs)("span", {
                                                class: "pack-name",
                                                children: [
                                                    "\u66F2\u5305\uFF1A",
                                                    pack
                                                ]
                                            }),
                                            (0, $kKW7D.jsxs)("span", {
                                                class: "chart-designer",
                                                children: [
                                                    "\u8C31\u9762\u8BBE\u8BA1\uFF1A",
                                                    designer
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("span", {
                                        class: "song-name",
                                        children: title
                                    }),
                                    (0, $kKW7D.jsx)("span", {
                                        class: "alias",
                                        children: alias.join(" ")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            });
        }, async (text)=>{
            const results = await this.chartService.searchChart(text);
            // 避免一次性加载过多图片
            if (results.length > 10) return results.slice(0, 10);
            return results;
        }, (item)=>item.chart.id);
        mount(attach) {
            const rendered = super.mount(attach);
            this.chartSelect.searchInput.placeholder = "\u8F93\u5165\u641C\u7D22\u8C31\u9762\uFF0C\u652F\u6301\u522B\u79F0\uFF08\u4F8B\u5982\uFF1A\u9AA8\u6298\u5149\uFF09";
            (0, $04CUQ.addSheet)((0, $bcfd29190bfc8d00$export$995990c5c04c46f0), this.chartSelect.shadowRoot);
            return rendered;
        }
        render() {
            this.effect(()=>{
                const formEvents = (0, $5vq1D.listen)(this.form);
                const unsubscribeChange = formEvents("change", (e)=>this.handleFormChange(e));
                const unsubscribeSubmit = formEvents("submit", (e)=>e.preventDefault());
                this.handleTypeChange("detailed");
                this.updateCardSize();
                return ()=>{
                    unsubscribeChange();
                    unsubscribeSubmit();
                };
            });
            return (0, $kKW7D.jsx)("div", {
                class: "m-3",
                children: (0, $kKW7D.jsxs)("form", {
                    ref: this.form,
                    children: [
                        (0, $kKW7D.jsx)("div", {
                            class: "row my-2",
                            children: (0, $kKW7D.jsx)("div", {
                                class: "col",
                                children: this.chartSelect
                            })
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            class: "mx-3",
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    children: "\u5BF9\u4E8E\u6210\u7EE9\u4FE1\u606F\u2026\u2026"
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row my-2",
                                    children: (0, $kKW7D.jsxs)("div", {
                                        class: "form-check",
                                        children: [
                                            (0, $kKW7D.jsx)("input", {
                                                class: "form-check-input",
                                                type: "radio",
                                                name: "type",
                                                id: "detailed",
                                                value: "detailed",
                                                checked: true
                                            }),
                                            (0, $kKW7D.jsx)("label", {
                                                class: "form-check-label",
                                                for: "detailed",
                                                children: "\u6709\u5927P\u7684\u8BE6\u7EC6\u6210\u7EE9\u4FE1\u606F\uFF08\u5982bot\u751F\u6210b30\uFF09"
                                            })
                                        ]
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row my-2",
                                    children: (0, $kKW7D.jsxs)("div", {
                                        class: "form-check",
                                        children: [
                                            (0, $kKW7D.jsx)("input", {
                                                class: "form-check-input",
                                                type: "radio",
                                                name: "type",
                                                id: "screenshot",
                                                value: "screenshot"
                                            }),
                                            (0, $kKW7D.jsx)("label", {
                                                class: "form-check-label",
                                                for: "screenshot",
                                                children: "\u6709\u6E38\u620F\u5185\u6210\u7EE9\u622A\u56FE\u4F46\u6CA1\u663E\u793A\u5927P"
                                            })
                                        ]
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row my-2",
                                    children: (0, $kKW7D.jsxs)("div", {
                                        class: "form-check",
                                        children: [
                                            (0, $kKW7D.jsx)("input", {
                                                class: "form-check-input",
                                                type: "radio",
                                                name: "type",
                                                id: "score-only",
                                                value: "score-only"
                                            }),
                                            (0, $kKW7D.jsx)("label", {
                                                class: "form-check-label",
                                                for: "score-only",
                                                children: "\u53EA\u77E5\u9053\u5206\u6570\uFF08\u597D\u53CB/\u4E16\u754C\u699C\u53EF\u67E5\u770B\uFF09"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            class: "row my-2",
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-2",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "perfect",
                                        class: "col-form-label",
                                        children: "\u5927P"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-4",
                                    children: (0, $kKW7D.jsx)("input", {
                                        ref: this.perfect,
                                        type: "number",
                                        class: "form-control",
                                        id: "perfect",
                                        name: "perfect",
                                        min: "0"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-1",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "far",
                                        class: "col-form-label",
                                        children: "Far"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-2",
                                    children: (0, $kKW7D.jsx)("input", {
                                        ref: this.far,
                                        type: "number",
                                        class: "form-control",
                                        id: "far",
                                        name: "far",
                                        min: "0"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-1",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "lost",
                                        class: "col-form-label",
                                        children: "Lost"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-2",
                                    children: (0, $kKW7D.jsx)("input", {
                                        ref: this.lost,
                                        type: "number",
                                        class: "form-control",
                                        id: "lost",
                                        name: "lost",
                                        min: "0"
                                    })
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            class: "row my-2",
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-2",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "score",
                                        class: "col-form-label",
                                        children: "\u5206\u6570"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col",
                                    children: (0, $kKW7D.jsx)("input", {
                                        ref: this.score,
                                        type: "number",
                                        class: "form-control",
                                        id: "score",
                                        name: "score",
                                        min: "0"
                                    })
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            class: "row my-2",
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "clear",
                                        class: "col-form-label",
                                        children: "\u901A\u5173\u7C7B\u578B\uFF08\u770B\u642D\u6863\uFF09"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col",
                                    children: (0, $kKW7D.jsxs)("select", {
                                        ref: this.clear,
                                        class: "form-select",
                                        name: "clear",
                                        id: "clear",
                                        children: [
                                            (0, $kKW7D.jsx)("option", {
                                                value: "",
                                                children: "\u4E0D\u77E5\u9053"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "HC",
                                                children: "Hard Clear"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "NC",
                                                children: "Normal Clear"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "EC",
                                                children: "Easy Clear"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "TL",
                                                children: "Track Lost"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            class: "row my-2",
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "play-time",
                                        class: "col-form-label",
                                        children: "\u6E38\u73A9\u65F6\u95F4\uFF08\u53EF\u9009\uFF09"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col",
                                    children: (0, $kKW7D.jsx)("input", {
                                        ref: this.playTime,
                                        type: "datetime-local",
                                        class: "form-control",
                                        id: "play-time",
                                        name: "play-time",
                                        step: 1
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col",
                                    children: (0, $kKW7D.jsx)("button", {
                                        type: "button",
                                        class: "btn btn-secondary",
                                        onClick: ()=>{
                                            (0, $hyWAW.setDateToDatetimeLocal)(this.playTime, (0, $hyWAW.getNow)());
                                            this.playTime.dispatchEvent(new Event("change", {
                                                bubbles: true
                                            }));
                                        },
                                        children: "\u73B0\u5728"
                                    })
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            class: "my-2",
                            children: [
                                (0, $kKW7D.jsx)("p", {
                                    children: "\u8C31\u9762\u6210\u7EE9\u9884\u89C8\uFF1A"
                                }),
                                this.card
                            ]
                        })
                    ]
                })
            });
        }
        getPlayResult() {
            const results = this.getResults();
            if (!results) return null;
            const { scoreResult: scoreResult, clearRank: clearRank, noteResult: noteResult } = results;
            if (!scoreResult) return null;
            const { chartId: chartId, score: score } = scoreResult;
            const date = (0, $hyWAW.getDateFromDatetimeLocal)(this.playTime).getTime();
            if (noteResult) return {
                type: "note",
                chartId: chartId,
                clear: clearRank,
                result: noteResult,
                date: date
            };
            return {
                type: "score",
                chartId: chartId,
                clear: clearRank,
                score: score,
                date: date
            };
        }
        updateCardSize() {
            const zoom = this.form.clientWidth / 1000;
            (0, $5vq1D.cssVar)(this, "card-scale", `${zoom}`);
        }
        handleFormChange(e) {
            const { target: target } = e;
            if (target instanceof HTMLInputElement) {
                if (target === this.chartSelect.searchInput && target.value === this.chartSelect.selectedItem()?.chart?.id) this.handleChartChange();
                else if (target === this.playTime) this.handlePlayTimeChange();
                else if (target.type === "radio" && target.name === "type") // @ts-expect-error skip radio value type check
                this.handleTypeChange(target.value);
                else this.handlePlayResultChange();
            } else this.handlePlayResultChange();
        }
        async handleChartChange() {
            const chart = this.chartSelect.selectedItem()?.chart;
            if (!chart) return;
            const songs = await this.chartService.getSongData();
            const song = songs.find((s)=>s.id === chart.songId);
            if (!song) throw new Error(`\u{6570}\u{636E}\u{51FA}\u{95EE}\u{9898}\u{529B}\u{FF0C}${chart.songId}\u{6B4C}\u{66F2}\u{672A}\u{627E}\u{5230}`);
            this.card.setChart(song, chart);
            // @ts-expect-error skip type check
            this.handleTypeChange(new FormData(this.form).get("type"));
        }
        handleTypeChange(type) {
            const enableState = {
                far: false,
                lost: false,
                perfect: false,
                score: false
            };
            switch(type){
                case "detailed":
                    enableState.perfect = true;
                    enableState.far = true;
                    enableState.lost = true;
                    break;
                case "screenshot":
                    enableState.far = true;
                    enableState.lost = true;
                    enableState.score = true;
                    break;
                case "score-only":
                    enableState.score = true;
                    break;
            }
            for (const key of Object.keys(enableState)){
                const input = this[key];
                const enabled = enableState[key];
                input.value = "";
                input.disabled = !enabled;
                input.required = enabled;
            }
            this.handlePlayResultChange();
        }
        handlePlayResultChange() {
            const results = this.getResults();
            if (!results) return;
            const { noteResult: noteResult, scoreResult: scoreResult, clearRank: clearRank } = results;
            this.card.setResult(noteResult, scoreResult, clearRank);
        }
        handlePlayTimeChange() {
            this.card.setPlayTime((0, $hyWAW.getDateFromDatetimeLocal)(this.playTime));
            this.card.setNow((0, $hyWAW.getNow)());
        }
        getResults() {
            const chart = this.chartSelect.selectedItem()?.chart;
            if (!chart) return null;
            const toNum = (input)=>input.value ? +input.value : null;
            const perfect = toNum(this.perfect);
            const far = toNum(this.far);
            const lost = toNum(this.lost);
            let score = toNum(this.score);
            const noteResult = this.musicPlayService.inferNoteResult(chart, perfect, far, lost, score);
            if (noteResult) score = this.musicPlayService.computeScore(chart, noteResult);
            // @ts-expect-error skip check
            let clear = this.clear.value || null;
            let scoreResult = null;
            let clearRank = null;
            clearRank = noteResult ? this.musicPlayService.computeClearRank(noteResult, chart, clear) : clear;
            if (score != null) scoreResult = this.musicPlayService.computeScoreResult(score, chart);
            return {
                noteResult: noteResult,
                scoreResult: scoreResult,
                clearRank: clearRank
            };
        }
    };
    return PlayResultForm = _classThis;
})();



var $hlIIF = parcelRequire("hlIIF");

var $5CYCT = parcelRequire("5CYCT");

var $ezVt6 = parcelRequire("ezVt6");

var $hyWAW = parcelRequire("hyWAW");
const $e6378813e37b9eff$var$ua = navigator.userAgent;
const $e6378813e37b9eff$export$95df08bae54cb4df = /Safari/.test($e6378813e37b9eff$var$ua) && !/Chrome/.test($e6378813e37b9eff$var$ua);


let $c9a8a84b4e7af08b$var$ChartPotentialPage = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "chart-potential",
            styles: [
                (0, $hlIIF.bootstrap)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _profileService_decorators;
    let _profileService_initializers = [];
    let _musicPlay_decorators;
    let _musicPlay_initializers = [];
    var ChartPotentialPage = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _profileService_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ProfileService))
            ];
            _musicPlay_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _profileService_decorators, {
                kind: "accessor",
                name: "profileService",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"profileService" in obj,
                    get: (obj)=>obj.profileService,
                    set: (obj, value)=>{
                        obj.profileService = value;
                    }
                },
                metadata: _metadata
            }, _profileService_initializers, _instanceExtraInitializers);
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
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ChartPotentialPage = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #profileService_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _profileService_initializers, void 0));
        get profileService() {
            return this.#profileService_accessor_storage;
        }
        set profileService(value) {
            this.#profileService_accessor_storage = value;
        }
        #musicPlay_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _musicPlay_initializers, void 0);
        get musicPlay() {
            return this.#musicPlay_accessor_storage;
        }
        set musicPlay(value) {
            this.#musicPlay_accessor_storage = value;
        }
        form = new (0, $99e98769d2198600$export$3787e637cdb6dbca)();
        existingResultCard = new (0, $5CYCT.ResultCard)();
        currentResult = (0, $5vq1D.signal)(null);
        render() {
            this.autorun(()=>{
                const selected = this.form.chartSelect.selectedItem();
                if (!selected) {
                    this.currentResult.set(null);
                    return;
                }
                const { chart: chart } = selected;
                this.profileService.getProfile().then((profile)=>{
                    const best = profile?.best?.[chart.id];
                    this.currentResult.set(best ?? null);
                    this.existingResultCard.setPlayResult(best ?? null);
                    this.existingResultCard.setNow((0, $hyWAW.getNow)());
                });
            });
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    this.form,
                    (0, $kKW7D.jsx)("div", {
                        class: "m-3",
                        children: (0, $kKW7D.jsx)("button", {
                            type: "button",
                            class: "btn btn-primary",
                            name: "add-result",
                            onClick: this.addResult,
                            children: "\u6DFB\u52A0\u6210\u7EE9"
                        })
                    }),
                    (0, $kKW7D.jsx)((0, $5vq1D.Show), {
                        when: this.currentResult,
                        children: (result)=>{
                            return (0, $kKW7D.jsxs)("div", {
                                class: "m-3",
                                children: [
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "my-2",
                                        children: [
                                            (0, $kKW7D.jsx)("p", {
                                                children: "\u5DF2\u6709\u6210\u7EE9\uFF1A"
                                            }),
                                            this.existingResultCard
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "my-2",
                                        children: (0, $kKW7D.jsx)("button", {
                                            type: "button",
                                            class: "btn btn-danger",
                                            name: "add-result",
                                            onClick: ()=>this.removeResult(result),
                                            children: "\u5220\u9664\u6210\u7EE9"
                                        })
                                    })
                                ]
                            });
                        }
                    })
                ]
            });
        }
        addResult = async ()=>{
            const res = this.form.getPlayResult();
            if (res) {
                await this.profileService.addResult(res);
                this.currentResult.set(res);
                this.existingResultCard.setPlayResult(res);
                this.existingResultCard.setNow((0, $hyWAW.getNow)());
                if (0, $e6378813e37b9eff$export$95df08bae54cb4df) return;
                this.form.chartSelect.searchInput.focus();
            }
        };
        removeResult = async (result)=>{
            if (!await (0, $ezVt6.confirm)("\u786E\u8BA4\u5220\u9664\u6B64\u8C31\u9762\u6210\u7EE9\uFF1F")) return;
            await this.profileService.removeResult(result.chartId);
            this.currentResult.set(null);
            if (0, $e6378813e37b9eff$export$95df08bae54cb4df) return;
            this.form.chartSelect.searchInput.focus();
        };
    };
    return ChartPotentialPage = _classThis;
})();
const $c9a8a84b4e7af08b$export$bd730a050abd519a = {
    path: "/chart-ptt",
    title: "\u5355\u66F2ptt",
    setup () {
        return new $c9a8a84b4e7af08b$var$ChartPotentialPage();
    }
};



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $5vq1D = parcelRequire("5vq1D");

var $hlIIF = parcelRequire("hlIIF");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $96f57fe98ba16725$export$6f093cfa640b7166 = "fancy-dialog::part(modal-root){width:80vw;max-width:400px;min-height:540px}table{width:100%}table{display:block;overflow-x:auto}table td,table th{padding:.25em;border-collapse:collapse;border:1px solid var(--bs-border-color)}td:not(:first-child),th:not(:first-child){cursor:pointer}";
const $96f57fe98ba16725$export$995990c5c04c46f0 = (0, $04CUQ.create)($96f57fe98ba16725$export$6f093cfa640b7166, "file:///src/view/components/character-picker/style.css.js");



var $5vq1D = parcelRequire("5vq1D");

var $hlIIF = parcelRequire("hlIIF");

var $aZJkp = parcelRequire("aZJkp");
const $50a5ad78b64e5016$export$c2510c7d91b01fa8 = (arr, pageSize)=>{
    const paged = [];
    const pageCount = Math.ceil(arr.length / pageSize);
    for(let pageIndex = 0; pageIndex < pageCount; pageIndex++){
        const begin = pageIndex * pageSize, end = begin + pageSize;
        paged.push(arr.slice(begin, end));
    }
    return paged;
};



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $5vq1D = parcelRequire("5vq1D");

var $aZJkp = parcelRequire("aZJkp");


var $04CUQ = parcelRequire("04CUQ");
let $71dfd7bb56b8706e$export$6f093cfa640b7166 = ".container{display:flex}.images{display:flex;width:10em;gap:.5em}.info{display:flex;align-items:center}";
const $71dfd7bb56b8706e$export$995990c5c04c46f0 = (0, $04CUQ.create)($71dfd7bb56b8706e$export$6f093cfa640b7166, "file:///src/view/components/character-select/style.css.js");



var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $dxCXw = parcelRequire("dxCXw");
let $93fbf528b6727e72$export$465c553805433ac8 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "character-select",
            styles: [
                ...(0, $37717d4a195a2f99$export$4d759f1b65b98f06).styles,
                (0, $71dfd7bb56b8706e$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $37717d4a195a2f99$export$4d759f1b65b98f06);
    let _instanceExtraInitializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _assets_decorators;
    let _assets_initializers = [];
    let _characters_decorators;
    let _characters_initializers = [];
    var CharacterSelect = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _resolver_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsResolver))
            ];
            _assets_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsService))
            ];
            _characters_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$CharacterService))
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
            (0, $1I0Yl.__esDecorate)(this, null, _characters_decorators, {
                kind: "accessor",
                name: "characters",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"characters" in obj,
                    get: (obj)=>obj.characters,
                    set: (obj, value)=>{
                        obj.characters = value;
                    }
                },
                metadata: _metadata
            }, _characters_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            CharacterSelect = _classThis = _classDescriptor.value;
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
        #assets_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _assets_initializers, void 0);
        get assets() {
            return this.#assets_accessor_storage;
        }
        set assets(value) {
            this.#assets_accessor_storage = value;
        }
        #characters_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _characters_initializers, void 0);
        get characters() {
            return this.#characters_accessor_storage;
        }
        set characters(value) {
            this.#characters_accessor_storage = value;
        }
        constructor(){
            super(({ id: id, can: { awake: awake, lost: lost } = {}, name: name })=>(0, $kKW7D.jsxs)("div", {
                    class: "container",
                    children: [
                        (0, $kKW7D.jsxs)("div", {
                            class: "images",
                            children: [
                                (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                    src: this.assets.getAssets(this.resolver.resoveCharacterImage({
                                        id: id,
                                        kind: (0, $aZJkp.CharacterImageKind).Icon,
                                        status: (0, $aZJkp.CharacterStatus).Initial
                                    })),
                                    width: 64,
                                    height: 64
                                }),
                                awake ? (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                    src: this.assets.getAssets(this.resolver.resoveCharacterImage({
                                        id: id,
                                        status: (0, $aZJkp.CharacterStatus).Awaken,
                                        kind: (0, $aZJkp.CharacterImageKind).Icon
                                    })),
                                    width: 64,
                                    height: 64
                                }) : lost ? (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                    src: this.assets.getAssets(this.resolver.resoveCharacterImage({
                                        id: id,
                                        status: (0, $aZJkp.CharacterStatus).Lost,
                                        kind: (0, $aZJkp.CharacterImageKind).Icon
                                    })),
                                    width: 64,
                                    height: 64
                                }) : (0, $5vq1D.nil)
                            ]
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "info",
                            children: name.zh
                        })
                    ]
                }), async (text)=>{
                const data = await this.characters.getAllCharacters();
                return data.filter((d)=>d.name.zh.toLowerCase().includes(text.toLowerCase()) || d.name.en.toLowerCase().includes(text.toLowerCase()));
            }, (character)=>character.name.zh);
        }
    };
    return CharacterSelect = _classThis;
})();



var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $ezVt6 = parcelRequire("ezVt6");

var $dxCXw = parcelRequire("dxCXw");
let $b48a0758e591e71d$export$96bf7e611ef56fdf = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "character-picker",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $96f57fe98ba16725$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _profile_decorators;
    let _profile_initializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _assets_decorators;
    let _assets_initializers = [];
    var CharacterPicker = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _profile_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ProfileService))
            ];
            _resolver_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsResolver))
            ];
            _assets_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _profile_decorators, {
                kind: "accessor",
                name: "profile",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"profile" in obj,
                    get: (obj)=>obj.profile,
                    set: (obj, value)=>{
                        obj.profile = value;
                    }
                },
                metadata: _metadata
            }, _profile_initializers, _instanceExtraInitializers);
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
            CharacterPicker = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #profile_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _profile_initializers, void 0));
        get profile() {
            return this.#profile_accessor_storage;
        }
        set profile(value) {
            this.#profile_accessor_storage = value;
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
        modal = new (0, $ezVt6.FancyDialog)();
        characterSelect = new (0, $93fbf528b6727e72$export$465c553805433ac8)();
        useStaticData = (0, $5vq1D.signal)(false);
        resultStep = (0, $5vq1D.signal)(null);
        render() {
            return (0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
                children: this.modal
            });
        }
        async pickStep() {
            const { resultStep: resultStep } = this;
            const profile = await this.profile.getProfile();
            const [body, unsubscribe] = this.#renderStepPickerBody(profile?.characters ?? []);
            const confirmed = await this.modal.showPicker((done, cancel)=>[
                    body,
                    (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                        children: ()=>{
                            const step = resultStep();
                            if (step != null) return (0, $kKW7D.jsxs)("span", {
                                slot: "footer",
                                children: [
                                    "\u5F53\u524D\u4F7F\u7528\u7684step\u503C\uFF1A",
                                    step.toFixed(4)
                                ]
                            });
                            return 0, $5vq1D.nil;
                        }
                    }),
                    (0, $kKW7D.jsx)("button", {
                        type: "button",
                        class: "btn btn-primary mx-2",
                        slot: "footer",
                        disabled: (0, $5vq1D.computed)(()=>resultStep() == null),
                        onClick: ()=>done(resultStep()),
                        children: "\u786E\u8BA4"
                    }),
                    (0, $kKW7D.jsx)("button", {
                        type: "button",
                        class: "btn btn-secondary",
                        slot: "footer",
                        onClick: cancel,
                        children: "\u53D6\u6D88"
                    })
                ]);
            unsubscribe();
            if (confirmed) {
                const result = resultStep();
                return result;
            }
            return null;
        }
        #renderStepPickerBody(profileCharacters) {
            const { useStaticData: useStaticData, characterSelect: characterSelect, resultStep: resultStep } = this;
            const selectedCharacter = characterSelect.selectedItem;
            const profileCharacter = (0, $5vq1D.computed)(()=>{
                const character = selectedCharacter();
                if (!character) return null;
                return profileCharacters.find((c)=>c.id === character.id);
            });
            const unsubscribeWatch = (0, $5vq1D.watch)(profileCharacter, (character)=>{
                // 存档中角色变更时默认优先使用存档中角色数据
                useStaticData.set(!character);
            });
            let firstUpdate = true;
            const unsubscribeSync = (0, $5vq1D.effect)(()=>{
                const character = profileCharacter();
                const isStatic = useStaticData();
                if (!isStatic) resultStep.set(character?.factors.step ?? null);
                else if (firstUpdate) firstUpdate = false;
                else resultStep.set(null);
            });
            return [
                (0, $kKW7D.jsx)("div", {
                    slot: "content",
                    children: (0, $kKW7D.jsxs)("form", {
                        children: [
                            (0, $kKW7D.jsx)("div", {
                                class: "row",
                                children: (0, $kKW7D.jsx)("label", {
                                    class: "form-label",
                                    children: "\u9009\u62E9\u89D2\u8272"
                                })
                            }),
                            (0, $kKW7D.jsx)("character-select", {
                                ref: characterSelect,
                                name: "character"
                            }),
                            (0, $kKW7D.jsx)((0, $5vq1D.Show), {
                                when: selectedCharacter,
                                children: (character)=>{
                                    const pagedCharacterLevels = (0, $50a5ad78b64e5016$export$c2510c7d91b01fa8)(Object.entries(character.levels).flatMap(([level, factors])=>{
                                        if (!factors) return [];
                                        return [
                                            [
                                                level,
                                                factors
                                            ]
                                        ];
                                    }), 10);
                                    const hasStepModifier = [
                                        35,
                                        55
                                    ].includes(character.id);
                                    return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                        children: [
                                            (0, $kKW7D.jsxs)("div", {
                                                class: "row my-3",
                                                children: [
                                                    (0, $kKW7D.jsx)("div", {
                                                        class: "col-auto",
                                                        children: (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                                            src: this.assets.getAssets(this.resolver.resoveCharacterImage({
                                                                id: character.id,
                                                                kind: (0, $aZJkp.CharacterImageKind).Icon,
                                                                status: (0, $aZJkp.CharacterStatus).Initial
                                                            })),
                                                            width: 64,
                                                            height: 64
                                                        })
                                                    }),
                                                    character.can?.awake ? (0, $kKW7D.jsx)("div", {
                                                        class: "col-auto",
                                                        children: (0, $kKW7D.jsx)((0, $dxCXw.AssetImage), {
                                                            src: this.assets.getAssets(this.resolver.resoveCharacterImage({
                                                                id: character.id,
                                                                status: (0, $aZJkp.CharacterStatus).Awaken,
                                                                kind: (0, $aZJkp.CharacterImageKind).Icon
                                                            })),
                                                            width: 64,
                                                            height: 64
                                                        })
                                                    }) : (0, $5vq1D.nil),
                                                    hasStepModifier ? (0, $kKW7D.jsx)("div", {
                                                        class: "col-auto",
                                                        "style:color": "var(--bs-danger)",
                                                        children: "\u6CE8\u610F\uFF1A\u6B64\u89D2\u8272\u6709step\u52A0\u6210\u7684\u56E0\u5B50\uFF0C\u9759\u6001\u6570\u636E\u4E0D\u5305\u62EC\u52A0\u6210\u7684\u503C\u3002"
                                                    }) : (0, $5vq1D.nil),
                                                    (0, $kKW7D.jsx)("div", {
                                                        class: "col-auto",
                                                        children: (0, $kKW7D.jsx)((0, $5vq1D.Show), {
                                                            when: profileCharacter,
                                                            fallback: ()=>(0, $kKW7D.jsxs)("div", {
                                                                    class: "form-check-label",
                                                                    children: [
                                                                        "\u5B58\u6863\u4E2D\u6CA1\u6709\u6B64\u89D2\u8272\u3002",
                                                                        (0, $kKW7D.jsx)("a", {
                                                                            href: "docs/plugin-usage#user-profile",
                                                                            target: "_blank",
                                                                            children: "\u5982\u4F55\u6DFB\u52A0\uFF1F"
                                                                        })
                                                                    ]
                                                                }),
                                                            children: (character)=>(0, $kKW7D.jsxs)("div", {
                                                                    class: "form-check-label",
                                                                    children: [
                                                                        "\u5B58\u6863\u4E2D\u7684\u89D2\u8272\u6570\u636E\uFF1A",
                                                                        character.factors.step
                                                                    ]
                                                                })
                                                        })
                                                    })
                                                ]
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "row",
                                                children: (0, $kKW7D.jsx)("div", {
                                                    class: "col-auto",
                                                    children: (0, $kKW7D.jsxs)("div", {
                                                        class: "form-check col-form-label",
                                                        children: [
                                                            (0, $kKW7D.jsx)("input", {
                                                                type: "checkbox",
                                                                "h-model:boolean": useStaticData,
                                                                disabled: (0, $5vq1D.computed)(()=>!profileCharacter()),
                                                                class: "form-check-input",
                                                                name: "use-static",
                                                                id: "use-static"
                                                            }),
                                                            (0, $kKW7D.jsx)("label", {
                                                                class: "form-check-label",
                                                                for: "use-static",
                                                                children: "\u4F7F\u7528\u9759\u6001\u7B49\u7EA7\u6570\u636E"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            (0, $kKW7D.jsx)((0, $5vq1D.Show), {
                                                when: useStaticData,
                                                children: ()=>(0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                        children: [
                                                            (0, $kKW7D.jsx)("div", {
                                                                class: "row",
                                                                children: (0, $kKW7D.jsx)("div", {
                                                                    class: "col my-2",
                                                                    children: "\u70B9\u51FB\u8868\u683C\u4E2D\u7B49\u7EA7/\u6570\u503C\u8FDB\u884C\u9009\u62E9\uFF1A"
                                                                })
                                                            }),
                                                            (0, $kKW7D.jsx)("div", {
                                                                class: "row",
                                                                children: (0, $kKW7D.jsx)("div", {
                                                                    class: "col",
                                                                    children: (0, $kKW7D.jsx)("table", {
                                                                        children: (0, $kKW7D.jsx)("tbody", {
                                                                            children: pagedCharacterLevels.map((characterLevels)=>{
                                                                                return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                                                    children: [
                                                                                        (0, $kKW7D.jsxs)("tr", {
                                                                                            children: [
                                                                                                (0, $kKW7D.jsx)("th", {
                                                                                                    children: "\u7B49\u7EA7"
                                                                                                }),
                                                                                                characterLevels.map(([key, factors])=>(0, $kKW7D.jsx)("th", {
                                                                                                        onClick: ()=>resultStep.set(factors.step),
                                                                                                        children: key
                                                                                                    }))
                                                                                            ]
                                                                                        }),
                                                                                        (0, $kKW7D.jsxs)("tr", {
                                                                                            children: [
                                                                                                (0, $kKW7D.jsx)("td", {
                                                                                                    children: "step"
                                                                                                }),
                                                                                                characterLevels.map(([, factors])=>(0, $kKW7D.jsx)("td", {
                                                                                                        onClick: ()=>resultStep.set(factors.step),
                                                                                                        children: factors.step
                                                                                                    }))
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                });
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                            })
                                        ]
                                    });
                                }
                            })
                        ]
                    })
                }),
                ()=>{
                    unsubscribeSync();
                    unsubscribeWatch();
                }
            ];
        }
    };
    return CharacterPicker = _classThis;
})();
const $b48a0758e591e71d$export$f62dc987f4ca74a = (picker, binding, field)=>{
    const input = (0, $5vq1D.element)("input");
    const pickCharacterStep = async ()=>{
        const result = await picker.pickStep();
        if (result != null) {
            binding.set(result);
            input.form?.dispatchEvent(new Event("change"));
        }
    };
    return [
        (0, $kKW7D.jsx)("div", {
            class: "col-auto",
            children: (0, $kKW7D.jsx)("input", {
                ref: input,
                type: "number",
                "h-model:number": binding,
                name: field,
                id: field,
                step: "any",
                min: "0",
                class: "form-control",
                required: true
            })
        }),
        (0, $kKW7D.jsx)("div", {
            class: "col-auto",
            children: (0, $kKW7D.jsx)("button", {
                type: "button",
                class: "btn btn-secondary",
                onClick: pickCharacterStep,
                children: "\u4F7F\u7528\u89D2\u8272\u6570\u636E"
            })
        })
    ];
};



var $lF0nN = parcelRequire("lF0nN");
let $740a9942ec69507a$export$14dd2357fa3808c1 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "constant-tools",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $hlIIF.title)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _worldMode_decorators;
    let _worldMode_initializers = [];
    var ConstantTools = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _worldMode_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$WorldModeService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _worldMode_decorators, {
                kind: "accessor",
                name: "worldMode",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"worldMode" in obj,
                    get: (obj)=>obj.worldMode,
                    set: (obj, value)=>{
                        obj.worldMode = value;
                    }
                },
                metadata: _metadata
            }, _worldMode_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ConstantTools = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #worldMode_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _worldMode_initializers, void 0));
        get worldMode() {
            return this.#worldMode_accessor_storage;
        }
        set worldMode(value) {
            this.#worldMode_accessor_storage = value;
        }
        characterPicker = new (0, $b48a0758e591e71d$export$96bf7e611ef56fdf)();
        stepScore = (0, $5vq1D.signal)(NaN);
        playResult = (0, $5vq1D.signal)(NaN);
        step = (0, $5vq1D.signal)(NaN);
        progress = (0, $5vq1D.signal)(NaN);
        beyondBoostScore = (0, $5vq1D.signal)(NaN);
        beyondBoost1 = (0, $5vq1D.signal)(NaN);
        beyondBoost2 = (0, $5vq1D.signal)(NaN);
        render() {
            return (0, $kKW7D.jsxs)("div", {
                children: [
                    this.characterPicker,
                    (0, $kKW7D.jsx)("div", {
                        class: "title",
                        children: "Step\u6CD5"
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "mx-3",
                        children: [
                            (0, $kKW7D.jsxs)("div", {
                                class: "row my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "step-score",
                                            class: "col-form-label",
                                            children: "\u5206\u6570"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.stepScore,
                                            class: "form-control",
                                            step: 1,
                                            min: 0,
                                            id: "step-score"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "play-result",
                                            class: "col-form-label",
                                            children: "\u6E38\u73A9\u7ED3\u679C"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.playResult,
                                            class: "form-control",
                                            min: 2.5,
                                            id: "play-result"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsx)("div", {
                                class: "row",
                                children: (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)("span", {
                                        class: "form-text",
                                        children: "\u4EE5\u4E0B\u7528\u4E8E\u8F85\u52A9\u8BA1\u7B97\u66F4\u7CBE\u786E\u7684\u6E38\u73A9\u7ED3\u679C\u8303\u56F4"
                                    })
                                })
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "progress",
                                            class: "col-form-label",
                                            children: "\u524D\u8FDB\u6B65\u6570\uFF08\u4E0D\u542B\u6280\u80FD\u3001\u6B8B\u7247\u3001\u6E90\u97F5\u5F3A\u5316\u7B49\u52A0\u6210\uFF09"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.progress,
                                            class: "form-control",
                                            id: "progress"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "step",
                                            class: "col-form-label",
                                            children: "\u89D2\u8272step\uFF08\u82E5\u89D2\u8272\u6E38\u73A9\u540E\u5347\u7EA7\uFF0C\u5E94\u53D6\u5347\u7EA7\u540Estep\uFF09"
                                        })
                                    }),
                                    (0, $b48a0758e591e71d$export$f62dc987f4ca74a)(this.characterPicker, this.step, "step")
                                ]
                            }),
                            (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                                children: ()=>{
                                    const score = this.stepScore();
                                    const playResult = this.playResult();
                                    const step = this.step();
                                    const progress = this.progress();
                                    const result = this.worldMode.inverseConstantRange(playResult, score, step, progress);
                                    if (!result) return 0, $5vq1D.nil;
                                    const [min, max] = result;
                                    return this.#renderTextRow(this.#inferRange(min, max));
                                }
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "title",
                        children: "Beyond Boost\u6CD5"
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "mx-3",
                        children: [
                            (0, $kKW7D.jsxs)("div", {
                                class: "form-text",
                                children: [
                                    "\u6CE8\uFF1A\u867D\u7136\u6E38\u620F\u5185\u53EA\u80FD\u770B\u5230beyond boost\u7684\u6574\u6570\u503C\uFF0C\u4F46\u5B98\u7F51\u63A5\u53E3\u8FD4\u56DE\u7684\u662F\u6BD4\u8F83\u7CBE\u786E\u7684\u6570\u636E\uFF0C\u63A5\u53E3\u8DEF\u5F84\u4E3A",
                                    (0, $kKW7D.jsx)("code", {
                                        children: "/webapi/user/me"
                                    }),
                                    "\uFF0C\u5B57\u6BB5\u4E3A",
                                    (0, $kKW7D.jsx)("code", {
                                        children: "value.beyond_boost_gauge"
                                    }),
                                    "\u3002\u672C\u7AD9\u5728\u5B98\u7F51\u7684",
                                    (0, $kKW7D.jsx)("a", {
                                        href: "docs/plugin-usage.html",
                                        target: "_blank",
                                        children: "\u8DE8\u7AD9\u811A\u672C\u63D2\u4EF6"
                                    }),
                                    "\u96C6\u6210\u4E86beyond boost\u6D4B\u7B97\u5B9A\u6570\u529F\u80FD\uFF0C\u6B64\u5904\u7684\u624B\u52A8\u5F55\u5165\u4EC5\u4F5C\u4E3A\u4E0D\u4F7F\u7528\u8BE5\u811A\u672C\u7684\u5907\u9009\u5DE5\u5177\u3002"
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "beyond-boost1",
                                            class: "col-form-label",
                                            children: "\u6E38\u73A9\u524DBeyond\u80FD\u91CF"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.beyondBoost1,
                                            class: "form-control",
                                            min: 0,
                                            max: 200,
                                            id: "beyond-boost1"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "beyond-score",
                                            class: "col-form-label",
                                            children: "\u5206\u6570"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.beyondBoostScore,
                                            class: "form-control",
                                            min: 0,
                                            id: "beyond-score"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "beyond-boost2",
                                            class: "col-form-label",
                                            children: "\u6E38\u73A9\u540EBeyond\u80FD\u91CF"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.beyondBoost2,
                                            class: "form-control",
                                            step: 1,
                                            min: 0,
                                            max: 200,
                                            id: "beyond-boost2"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                                children: ()=>{
                                    const byd1 = this.beyondBoost1();
                                    const byd2 = this.beyondBoost2();
                                    const score = this.beyondBoostScore();
                                    if (isNaN(byd1) || isNaN(byd2) || isNaN(score)) return 0, $5vq1D.nil;
                                    const bound = 200;
                                    if (byd1 >= bound || byd2 >= bound) return this.#renderTextRow("\u80FD\u91CF\u6EA2\u51FA\u65F6\u65E0\u6CD5\u6D4B\u7B97\u5B9A\u6570");
                                    if ((0, $lF0nN.isInt)(byd1) && (0, $lF0nN.isInt)(byd2)) {
                                        const [min, max] = (0, $lF0nN.inferRange)(byd2 - byd1, 1, false);
                                        const minConstant = this.worldMode.inverseBeyondBoost(min, score, true);
                                        const maxConstant = this.worldMode.inverseBeyondBoost(max, score, true);
                                        return this.#renderTextRow(this.#inferRange(minConstant, maxConstant));
                                    }
                                    // 非整数输入认为是接口弄来的准确数据
                                    return this.#renderTextRow(`\u{63A8}\u{6D4B}\u{5B9A}\u{6570}\u{FF1A}${this.worldMode.inverseBeyondBoost(byd2 - byd1, score)}`);
                                }
                            })
                        ]
                    })
                ]
            });
        }
        #renderTextRow(text) {
            return (0, $kKW7D.jsx)("div", {
                class: "row",
                children: (0, $kKW7D.jsx)("div", {
                    class: "col-auto",
                    children: text
                })
            });
        }
        #inferRange(min, max) {
            return `\u{63A8}\u{6D4B}\u{5B9A}\u{6570}\u{8303}\u{56F4}\u{FF1A}[${min}, ${max}] => ${this.worldMode.inferConstant(min, max).join(" or ")}`;
        }
    };
    return ConstantTools = _classThis;
})();


const $d05589ce0f7a4dd8$export$733589d462f739b5 = {
    path: "/constant-tools",
    title: "\u5B9A\u6570\u6D4B\u7B97",
    setup () {
        return new (0, $740a9942ec69507a$export$14dd2357fa3808c1)();
    }
};



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $3841675b623e54d2$export$6f093cfa640b7166 = "form{max-width:48em}help-tip p{max-width:30em;text-align:initial;word-break:break-all;white-space:initial}.input-group-text:has(input#hd){gap:.25em}.action{margin:0}.b30-container{display:flex;overflow:auto}.ios-issue{color:var(--bs-danger)}iframe{width:100vw;height:100vh}.image-picker{max-height:600px;overflow-y:scroll}.cells{display:grid;grid-template-columns:repeat(var(--grid-columns),var(--item-width));gap:.5em}.item{box-sizing:content-box;border:.125em transparent solid;user-select:none}.item img{width:var(--item-width);height:var(--item-height);object-fit:cover}.item.selected{border-color:var(--bs-primary);width:var(--item-width);height:var(--item-height)}[slot=footer] button{margin-left:.5em}";
const $3841675b623e54d2$export$995990c5c04c46f0 = (0, $04CUQ.create)($3841675b623e54d2$export$6f093cfa640b7166, "file:///src/view/pages/player-b39/style.css.js");



var $9V4HB = parcelRequire("9V4HB");

var $5vq1D = parcelRequire("5vq1D");

var $7Cv7B = parcelRequire("7Cv7B");

var $jrD1x = parcelRequire("jrD1x");


var $ezVt6 = parcelRequire("ezVt6");


var $izUtT = parcelRequire("izUtT");

var $hlIIF = parcelRequire("hlIIF");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $hlIIF = parcelRequire("hlIIF");

var $5vq1D = parcelRequire("5vq1D");

var $dIVkE = parcelRequire("dIVkE");

var $ezVt6 = parcelRequire("ezVt6");

var $lwREd = parcelRequire("lwREd");
let $e059fb6924d7387e$var$Loading = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "loading-message",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $dIVkE.sheet)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    var Loading = class extends _classSuper {
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
            Loading = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        dialog = (0, $5vq1D.element)("dialog");
        content = null;
        error = new (0, $ezVt6.FancyDialog)();
        render() {
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    this.error,
                    (0, $kKW7D.jsx)("dialog", {
                        ref: this.dialog,
                        onCancel: (e)=>e.preventDefault(),
                        children: this.content
                    })
                ]
            });
        }
    };
    return Loading = _classThis;
})();
const $e059fb6924d7387e$export$46c1c92549715335 = async (promise, message)=>{
    const loading = new $e059fb6924d7387e$var$Loading();
    loading.content = message;
    document.body.appendChild(loading);
    loading.dialog.showModal();
    try {
        const result = await promise;
        return result;
    } catch (error) {
        await loading.error.showAlert((0, $kKW7D.jsxs)("p", {
            children: [
                "\u51FA\u73B0\u9519\u8BEF\uFF1A",
                (0, $lwREd.formatError)(error)
            ]
        }));
        throw error;
    } finally{
        loading.dialog.close();
        document.body.removeChild(loading);
    }
};



var $2aEFH = parcelRequire("2aEFH");


var $21erW = parcelRequire("21erW");
const $68369ce0d0f9197f$export$2a24d29abe187dc4 = ()=>{
    let done, abort;
    const promise = new Promise((resolve, reject)=>{
        done = resolve;
        abort = reject;
    });
    return {
        promise: promise,
        get done () {
            return done;
        },
        get abort () {
            return abort;
        }
    };
};


const $7da052a87389dff5$export$580de71e7977e8d2 = (handler)=>{
    const createProxy = (path)=>new Proxy(function noop() {}, {
            get (_target, property) {
                if (typeof property === "symbol") throw new Error("Cannot get symbol property.");
                return createProxy([
                    ...path,
                    property
                ]);
            },
            apply (_target, _this, argArray) {
                return handler(path, argArray);
            }
        });
    return createProxy([]);
};


const $da2bb77eaddc260a$export$dfdc1655ccc5b9cb = (value)=>{
    if (typeof value !== "object" || value == null) return value;
    if (value instanceof URL) return {
        _url: value.href
    };
    if (Array.isArray(value)) return value.map((item)=>$da2bb77eaddc260a$export$dfdc1655ccc5b9cb(item));
    const proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto == null) {
        const cloned = Object.create(proto);
        for (const [key, val] of Object.entries(value))cloned[key] = $da2bb77eaddc260a$export$dfdc1655ccc5b9cb(val);
        return cloned;
    }
    return value;
};
const $da2bb77eaddc260a$export$efcd34ab6248d3cd = (value)=>{
    if (typeof value !== "object" || value == null) return value;
    if (typeof value._url === "string") return new URL(value._url);
    if (Array.isArray(value)) return value.map((item)=>$da2bb77eaddc260a$export$efcd34ab6248d3cd(item));
    const proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto == null) {
        const cloned = Object.create(proto);
        for (const [key, val] of Object.entries(value))cloned[key] = $da2bb77eaddc260a$export$efcd34ab6248d3cd(val);
        return cloned;
    }
    return value;
};


const $1fc7865029f7bed2$export$31b40729666a4ae0 = crypto.randomUUID?.bind(crypto) ?? (()=>{
    const now = Date.now();
    const random = Math.floor(Math.random() * 0xffffffff);
    return `${now.toString(16)}-${random.toString(16)}`;
});


const $597166ee52d3e8a9$var$createMessage = (id, others)=>({
        __arcaea_toolbelt_msg: true,
        id: id,
        ...others
    });
var $597166ee52d3e8a9$export$80edbf15fa61a4db;
(function(MessageType) {
    MessageType["Ping"] = "ping";
    MessageType["Request"] = "request";
    MessageType["Response"] = "response";
    MessageType["Error"] = "error";
})($597166ee52d3e8a9$export$80edbf15fa61a4db || ($597166ee52d3e8a9$export$80edbf15fa61a4db = {}));
const $597166ee52d3e8a9$export$3a821a298c42362 = (obj)=>!!(obj && obj.type === "invoke");
const $597166ee52d3e8a9$export$9e0e49e75fa7d548 = (obj)=>!!(obj && obj.__arcaea_toolbelt_msg);
class $597166ee52d3e8a9$export$3430e4169712103 {
    #pool = new Map();
    create(specialId) {
        const id = specialId ?? (0, $1fc7865029f7bed2$export$31b40729666a4ae0)();
        const task = (0, $68369ce0d0f9197f$export$2a24d29abe187dc4)();
        this.#pool.set(id, task);
        return {
            id: id,
            task: task
        };
    }
    done(id, value) {
        this.#pick(id)?.done(value);
    }
    abort(id, reason) {
        this.#pick(id)?.abort(reason);
    }
    #pick(id) {
        const task = this.#pool.get(id);
        if (!task) console.error(`Task id ${id} does not exist.`);
        return task;
    }
}
class $597166ee52d3e8a9$export$a02eed447f48479c {
    connect;
    constructor(connect){
        this.connect = connect;
    }
    start(handler) {
        return new $597166ee52d3e8a9$export$e89b715ac6e60819(this.connect(), handler);
    }
}
class $597166ee52d3e8a9$export$e89b715ac6e60819 {
    connection;
    #handler;
    constructor(connection, handler){
        this.connection = connection;
        const { input: input } = this.connection;
        this.#handler = (event)=>{
            handler((0, $da2bb77eaddc260a$export$efcd34ab6248d3cd)(event.data));
        };
        input.addEventListener("message", this.#handler);
    }
    post(content) {
        const { output: output } = this.connection;
        output.postMessage((0, $da2bb77eaddc260a$export$dfdc1655ccc5b9cb)(content), "*");
    }
    stop() {
        const { input: input } = this.connection;
        input.removeEventListener("message", this.#handler);
    }
}
class $597166ee52d3e8a9$export$83f82714246b5968 {
    options;
    constructor(options){
        this.options = options;
    }
    start() {
        const pool = new $597166ee52d3e8a9$export$3430e4169712103();
        const pingId = "ping";
        const { task: { promise: connected } } = pool.create(pingId);
        const msg = $597166ee52d3e8a9$var$createMessage(pingId, {
            type: $597166ee52d3e8a9$export$80edbf15fa61a4db.Ping
        });
        const ping = ()=>{
            port.post(msg);
        };
        let conected = false;
        const pong = ()=>{
            if (!conected) {
                conected = true;
                ping();
            }
        };
        const pingTimer = setInterval(ping, 100);
        const port = this.options.hub.start(async (data)=>{
            if (!$597166ee52d3e8a9$export$9e0e49e75fa7d548(data)) return;
            switch(data.type){
                case $597166ee52d3e8a9$export$80edbf15fa61a4db.Ping:
                    pong();
                    clearInterval(pingTimer);
                    pool.done(pingId, data);
                    break;
                case $597166ee52d3e8a9$export$80edbf15fa61a4db.Request:
                    await this.onRequest(data, port);
                    break;
                case $597166ee52d3e8a9$export$80edbf15fa61a4db.Response:
                    await this.onResponse(data, pool);
                    break;
                case $597166ee52d3e8a9$export$80edbf15fa61a4db.Error:
                default:
                    await this.onError(data, pool);
                    break;
            }
        });
        return {
            pool: pool,
            api: (0, $7da052a87389dff5$export$580de71e7977e8d2)(async (path, args)=>{
                await connected;
                const { id: taskId, task: task } = pool.create();
                const message = $597166ee52d3e8a9$var$createMessage(taskId, {
                    type: $597166ee52d3e8a9$export$80edbf15fa61a4db.Request,
                    body: {
                        type: "invoke",
                        args: args,
                        path: path
                    }
                });
                port.post(message);
                return task.promise;
            }),
            stop () {
                clearInterval(pingTimer);
                port.stop();
                pool.abort(pingId);
            }
        };
    }
    async onRequest(data, port) {
        const { body: body, id: id } = data;
        if ($597166ee52d3e8a9$export$3a821a298c42362(body)) try {
            let target = this.options.impl;
            let prev = undefined;
            const { path: path, args: args } = body;
            for (const property of path){
                prev = target;
                target = Reflect.get(target, property);
            }
            const result = await Reflect.apply(target, prev, args);
            const message = $597166ee52d3e8a9$var$createMessage(id, {
                type: $597166ee52d3e8a9$export$80edbf15fa61a4db.Response,
                body: result
            });
            port.post(message);
        } catch (error) {
            port.post($597166ee52d3e8a9$var$createMessage(id, {
                type: $597166ee52d3e8a9$export$80edbf15fa61a4db.Error,
                error: error
            }));
        }
    }
    async onResponse(data, pool) {
        pool.done(data.id, data.body);
    }
    async onError(data, pool) {
        pool.abort(data.id, data.error);
    }
}



var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $2aEFH = parcelRequire("2aEFH");
const $85dd9499548909e4$var$blobURLRegistry = new FinalizationRegistry((url)=>{
    console.debug(`Revoking Object URL: ${url}`);
    return URL.revokeObjectURL(url);
});
const $85dd9499548909e4$export$42c6482e54b176e6 = (blob)=>{
    const url = URL.createObjectURL(blob);
    $85dd9499548909e4$var$blobURLRegistry.register(blob, url);
    return url;
};



var $6Y9qE = parcelRequire("6Y9qE");
let $42cf132e7299c4cf$export$b484c3f9b1dd0862 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$CoreDataService),
                (0, $7Cv7B.$AssetsResolver),
                (0, $7Cv7B.$CharacterService),
                (0, $7Cv7B.$ChartService),
                (0, $7Cv7B.$AssetsCacheService),
                (0, $7Cv7B.$PreferenceService),
                (0, $7Cv7B.$FileStorage),
                (0, $7Cv7B.$Gateway)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var HostAPIImpl = class {
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
            HostAPIImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        core;
        resolver;
        character;
        chart;
        cache;
        preference;
        fs;
        gateway;
        site = "";
        constructor(core, resolver, character, chart, cache, preference, fs, gateway){
            this.core = core;
            this.resolver = resolver;
            this.character = character;
            this.chart = chart;
            this.cache = cache;
            this.preference = preference;
            this.fs = fs;
            this.gateway = gateway;
        }
        getSongList() {
            return this.core.getSongList();
        }
        getPackList() {
            return this.core.getPackList();
        }
        getAllCharacters() {
            return this.character.getAllCharacters();
        }
        async getPreference() {
            const preference = await this.preference.get();
            return Reflect.get(preference, this.site);
        }
        async savePreference(preference) {
            await this.preference.update({
                [this.site]: preference
            });
        }
        async resolveAssets(paths) {
            return paths.map((path)=>this.resolver.resolve(path));
        }
        async resolveCovers(query) {
            const data = await this.chart.getSongIndex();
            return query.map((q)=>{
                const { songId: songId, difficulty: difficulty, highQuality: highQuality } = q;
                const song = data[songId];
                const chart = song?.charts.find((chart)=>chart.difficulty === (0, $2aEFH.difficulties)[difficulty]);
                if (!song || !chart) throw new Error(`Unknown song or difficulty: songId=${songId}, difficulty=${difficulty}`);
                return this.resolver.resolveCover(chart, song, !!highQuality);
            });
        }
        async resolveCharacterImages(query) {
            return query.map((q)=>this.resolver.resoveCharacterImage(q));
        }
        async resolvePotentialBadge(rating) {
            return this.resolver.resolvePotentialBadge(rating);
        }
        async resolveGradeImgs(grades) {
            return grades.map((grade)=>this.resolver.resolveGradeImg(grade));
        }
        async resolveBackgrounds() {
            return [
                this.resolver.resolve("img/bg_light.jpg"),
                ...Array.from({
                    length: 9
                }, (_, i)=>this.resolver.resolve(`img/world/1080/${i}.jpg`)),
                this.resolver.resolve("img/world/1080/1001.jpg")
            ];
        }
        async getImages(resources) {
            return Promise.all(resources.map(async (resourceURL)=>{
                const pathname = resourceURL.toString().slice((0, $6Y9qE.protocol).length);
                const fragments = pathname.split("/");
                if (fragments[2] === "vfs") {
                    const file = await this.fs.read(resourceURL);
                    if (!file) throw new Error(`Resource ${resourceURL.href} not found.`);
                    const { blob: blob, url: url } = file;
                    return {
                        blob: blob,
                        blobURL: (0, $85dd9499548909e4$export$42c6482e54b176e6)(blob),
                        distURL: url,
                        filename: fragments.at(-1),
                        resourceURL: resourceURL
                    };
                }
                const filename = fragments.findLast((fragment)=>!!fragment);
                const dist = await this.gateway.dynamicProxy(resourceURL);
                const imageCache = await this.cache.cachedGet(dist);
                return {
                    filename: filename,
                    resourceURL: resourceURL,
                    distURL: dist.href,
                    blob: imageCache.blob,
                    blobURL: imageCache.blobURL
                };
            }));
        }
        pickImage(candidates, options) {
            throw new Error("Method not implemented.");
        }
        exportAsImage(file, options) {
            throw new Error("Method not implemented.");
        }
    };
    return HostAPIImpl = _classThis;
})();



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $dIVkE = parcelRequire("dIVkE");

var $04CUQ = parcelRequire("04CUQ");
let $bef1a61e5880d971$export$6f093cfa640b7166 = "div.actions{display:flex;flex-direction:row-reverse}dialog{width:fit-content}div.modal-content{display:flex;flex-direction:column;align-items:center}";
const $bef1a61e5880d971$export$995990c5c04c46f0 = (0, $04CUQ.create)($bef1a61e5880d971$export$6f093cfa640b7166, "file:///src/view/components/image-clipper/style.css.js");



var $5vq1D = parcelRequire("5vq1D");

var $hlIIF = parcelRequire("hlIIF");
//#region typedefs
//#endregion
//#region vector utils
const $b14685c566131e5f$export$7f9972325ebfd559 = Object.freeze({
    x: 0,
    y: 0
});
const $b14685c566131e5f$var$inRange = (value, min, max)=>min <= value && value <= max;
const $b14685c566131e5f$var$contains = (area, point)=>{
    const { position: position, size: size } = area;
    return $b14685c566131e5f$var$inRange(point.x, position.x, position.x + size.x) && $b14685c566131e5f$var$inRange(point.y, position.y, position.y + size.y);
};
const $b14685c566131e5f$export$adf7c0fe6059d774 = (value, min, max)=>Math.max(min, Math.min(max, value));
const $b14685c566131e5f$export$6fc9517808810527 = (v, min, max)=>({
        x: $b14685c566131e5f$export$adf7c0fe6059d774(v.x, min.x, max.x),
        y: $b14685c566131e5f$export$adf7c0fe6059d774(v.y, min.y, max.y)
    });
const $b14685c566131e5f$export$9f77e0932fb78f72 = (v)=>[
        v.x,
        v.y
    ];
const $b14685c566131e5f$export$105684a3041cb6f3 = (v)=>`${v.x},${v.y}`;
const $b14685c566131e5f$export$e508d58cde0760ad = (size)=>({
        x: size.width,
        y: size.height
    });
const $b14685c566131e5f$var$clone = structuredClone;
const $b14685c566131e5f$var$patchDeep = (value, defaults)=>{
    if (value == null) return defaults;
    if (value == null || typeof value !== "object" || Array.isArray(value)) // @ts-expect-error
    return value;
    // @ts-expect-error
    return Object.fromEntries(// @ts-expect-error
    Object.entries(defaults).map(([k, v])=>[
            k,
            $b14685c566131e5f$var$patchDeep(value[k], v)
        ]));
};
const $b14685c566131e5f$export$e16d8520af44a096 = (a, b)=>({
        x: a.x + b.x,
        y: a.y + b.y
    });
const $b14685c566131e5f$export$30cdb7d48dedb58b = (v, k)=>({
        x: v.x * k,
        y: v.y * k
    });
const $b14685c566131e5f$export$159d9494db57879b = (v, k)=>({
        x: v.x / k,
        y: v.y / k
    });
const $b14685c566131e5f$export$cc6710ee5f037d57 = (...points)=>$b14685c566131e5f$export$159d9494db57879b(points.reduce((prev, curr)=>$b14685c566131e5f$export$e16d8520af44a096(prev, curr)), points.length);
const $b14685c566131e5f$export$e83f174dbf56adcc = (v, factor)=>({
        x: v.x * factor.x,
        y: v.y * factor.y
    });
const $b14685c566131e5f$export$f93b5905241a7cca = (a, b)=>$b14685c566131e5f$export$e16d8520af44a096(a, $b14685c566131e5f$export$30cdb7d48dedb58b(b, -1));
const $b14685c566131e5f$export$872dd985a098dd45 = (v)=>Math.hypot(v.x, v.y);
const $b14685c566131e5f$var$getMouseOffset = (mouse)=>({
        x: mouse.offsetX,
        y: mouse.offsetY
    });
const $b14685c566131e5f$var$getTouchOffset = (touch)=>{
    const target = touch.target;
    const offset = {
        x: touch.pageX,
        y: touch.pageY
    };
    if (!(target instanceof HTMLElement)) return offset;
    const rect = target.getBoundingClientRect();
    return $b14685c566131e5f$export$f93b5905241a7cca(offset, rect);
};
class $b14685c566131e5f$export$8a2453949db01d51 {
    /**
     * Generate rectangle clip area
     * @param canvasSize canvas 2D size
     * @param rectSize default to half of canvas size
     */ static rect(canvasSize, rectSize) {
        rectSize ??= $b14685c566131e5f$export$159d9494db57879b(canvasSize, 2);
        const halfRectSize = $b14685c566131e5f$export$159d9494db57879b(rectSize, 2);
        const rectStart = $b14685c566131e5f$export$30cdb7d48dedb58b(halfRectSize, -1);
        const clipPath = `m\
 ${$b14685c566131e5f$export$105684a3041cb6f3(rectStart)}\
 ${rectSize.x},0\
 0,${rectSize.y}\
 ${-rectSize.x},0\
 z`;
        return {
            area: {
                position: rectStart,
                size: rectSize
            },
            clipPath: clipPath
        };
    }
    static diamond(width) {
        const rectSize = {
            x: width,
            y: width
        };
        const halfRectSize = $b14685c566131e5f$export$159d9494db57879b(rectSize, 2);
        const position = $b14685c566131e5f$export$30cdb7d48dedb58b(halfRectSize, -1);
        const clipPath = `m\
 0,${-halfRectSize.y}\
 ${halfRectSize.x},${halfRectSize.y}\
 ${-halfRectSize.x},${halfRectSize.y}\
 ${-halfRectSize.x},${-halfRectSize.y}\
 z`;
        return {
            area: {
                position: position,
                size: rectSize
            },
            clipPath: clipPath
        };
    }
    canvas;
    context;
    clipConfig;
    background = null;
    source = null;
    transform;
    options;
    mode;
    af = -1;
    mouseSnapshot = null;
    touchSnapshot = null;
    constructor(canvas, options){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.options = $b14685c566131e5f$var$patchDeep(options, {
            background: {
                type: "grid",
                color1: "rgba(0,0,0,0.2)",
                color2: "#ffffff",
                length: 16
            },
            bound: {
                clip: true,
                image: true,
                scale: {
                    min: 0,
                    max: 16
                }
            },
            clip: $b14685c566131e5f$export$8a2453949db01d51.rect($b14685c566131e5f$export$e508d58cde0760ad(canvas)),
            mask: {
                fillStyle: "rgba(0,0,0,0.5)"
            },
            mode: "batch"
        });
        this.clipConfig = this.options.clip;
        this.mode = this.options.mode;
        this.transform = {
            position: $b14685c566131e5f$var$clone($b14685c566131e5f$export$7f9972325ebfd559),
            scale: 1
        };
    }
    //#region computed properties
    get baseZoom() {
        const { width: width, height: height } = this.canvas.getBoundingClientRect();
        return {
            x: this.canvas.width / width,
            y: this.canvas.height / height
        };
    }
    get imageArea() {
        const { transform: { position: position, scale: scale }, source: source } = this;
        if (!source) return null;
        const { area: { size: size } } = source;
        return {
            position: position,
            size: $b14685c566131e5f$export$30cdb7d48dedb58b(size, scale)
        };
    }
    get clipArea() {
        const { area: area } = this.clipConfig;
        return {
            ...area,
            position: $b14685c566131e5f$export$e16d8520af44a096(area.position, $b14685c566131e5f$export$159d9494db57879b($b14685c566131e5f$export$e508d58cde0760ad(this.canvas), 2))
        };
    }
    //#endregion
    //#region settings, immutable updates
    setClip(config) {
        this.clipConfig = config;
        this.schedule();
    }
    setImage(bitmap, area) {
        this.source = {
            bitmap: bitmap,
            area: area ?? {
                position: $b14685c566131e5f$export$7f9972325ebfd559,
                size: $b14685c566131e5f$export$e508d58cde0760ad(bitmap)
            }
        };
        this.boundPosition();
        this.schedule();
    }
    setBackground(backgound) {
        this.options.background = backgound;
        this.background = this.createBackground();
        this.schedule();
    }
    //#endregion
    //#region draws
    draw() {
        const { context: context } = this;
        this.scoped(context, this.clearCanvas);
        this.scoped(context, this.drawBackground);
        this.scoped(context, this.drawImage);
        this.scoped(context, this.drawMask);
    }
    scoped(context, draw) {
        context.save();
        draw(context);
        context.restore();
    }
    clearCanvas = (context)=>{
        const { width: width, height: height } = this.canvas;
        context.clearRect(0, 0, width, height);
    };
    drawBackground = (context)=>{
        context.putImageData(this.background ??= this.createBackground(), 0, 0);
    };
    #drawGridBackground(context) {
        let { options: { background: background } } = this;
        if (background.type === "grid") {
            // draw grid backgound
            const { width: width, height: height } = this.canvas;
            const { color1: color1, color2: color2, length: length } = background;
            const maxColumn = width / length, maxRow = height / length;
            for(let row = 0; row < maxRow; row++)for(let column = 0; column < maxColumn; column++){
                context.fillStyle = (row + column) % 2 ? color2 : color1;
                context.fillRect(column * length, row * length, length, length);
            }
        }
    }
    drawImage = (ctx)=>{
        const { source: source } = this;
        if (!source) return;
        const { position: position, scale: scale } = this.transform;
        const { area: area, bitmap: bitmap } = source;
        ctx.drawImage(bitmap, ...$b14685c566131e5f$export$9f77e0932fb78f72(area.position), ...$b14685c566131e5f$export$9f77e0932fb78f72(area.size), ...$b14685c566131e5f$export$9f77e0932fb78f72(position), ...$b14685c566131e5f$export$9f77e0932fb78f72($b14685c566131e5f$export$30cdb7d48dedb58b(area.size, scale)));
    };
    drawMask = (context)=>{
        const { width: width, height: height } = this.canvas;
        const path2d = new Path2D();
        path2d.rect(0, 0, width, height);
        path2d.addPath(this.createClip());
        context.clip(path2d, "evenodd");
        context.fillStyle = this.options.mask.fillStyle;
        context.fillRect(0, 0, width, height);
    };
    createClip() {
        const { clipPath: clipPath } = this.clipConfig;
        const path2d = new Path2D();
        const canvasCenter = $b14685c566131e5f$export$159d9494db57879b($b14685c566131e5f$export$e508d58cde0760ad(this.canvas), 2);
        path2d.addPath(new Path2D(`M ${$b14685c566131e5f$export$105684a3041cb6f3(canvasCenter)} ${clipPath}`));
        return path2d;
    }
    createBackground() {
        const canvas = document.createElement("canvas");
        canvas.width = this.canvas.width;
        canvas.height = this.canvas.height;
        const context = canvas.getContext("2d");
        this.#drawGridBackground(context);
        return context.getImageData(0, 0, canvas.width, canvas.height);
    }
    move(d) {
        // Bound movement
        Object.assign(this.transform.position, $b14685c566131e5f$export$e16d8520af44a096(this.transform.position, d));
        this.boundPosition();
    }
    zoom(center, scale) {
        const { transform: transform } = this;
        // dest = src * scale + position
        const sourcePostion = $b14685c566131e5f$export$159d9494db57879b($b14685c566131e5f$export$f93b5905241a7cca(center, transform.position), transform.scale);
        const scaleBound = this.options.bound.scale;
        const newScale = $b14685c566131e5f$export$adf7c0fe6059d774(scale, scaleBound.min, scaleBound.max);
        transform.scale = newScale;
        // position = dest - src * scale
        this.transform.position = $b14685c566131e5f$export$f93b5905241a7cca(center, $b14685c566131e5f$export$30cdb7d48dedb58b(sourcePostion, newScale));
        this.boundPosition();
    }
    boundPosition() {
        if (!this.options.bound.clip) return;
        const { source: source, transform: { position: position, scale: scale } } = this;
        if (!source) return;
        const clip = this.clipArea;
        const { area: src } = source;
        const minScale = Math.max(clip.size.y / src.size.y, clip.size.x / src.size.y);
        this.transform.scale = Math.max(scale, minScale);
        const minBound = $b14685c566131e5f$export$f93b5905241a7cca($b14685c566131e5f$export$e16d8520af44a096(clip.position, clip.size), $b14685c566131e5f$export$30cdb7d48dedb58b(src.size, this.transform.scale));
        const maxBound = clip.position;
        Object.assign(position, $b14685c566131e5f$export$6fc9517808810527(position, minBound, maxBound));
    }
    //#endregion
    //#region events
    start() {
        const subscribe = (event, handler)=>{
            this.canvas.addEventListener(event, handler);
            return ()=>{
                this.canvas.removeEventListener(event, handler);
            };
        };
        const subscriptions = [
            subscribe("mousedown", this.handleMouseDown),
            subscribe("mouseup", this.handleMouseUp),
            subscribe("mousemove", this.handleMouseMove),
            subscribe("wheel", this.handleWheel),
            subscribe("touchstart", this.handleTouchChange),
            subscribe("touchend", this.handleTouchChange),
            subscribe("touchmove", this.handleTouchMove)
        ];
        switch(this.mode){
            case "frame":
                {
                    const frame = ()=>{
                        this.draw();
                        this.af = requestAnimationFrame(frame);
                    };
                    this.af = requestAnimationFrame(frame);
                    subscriptions.push(()=>{
                        cancelAnimationFrame(this.af);
                    });
                    break;
                }
            case "sync":
                this.draw();
                break;
            case "batch":
            default:
                subscriptions.push(()=>{
                    const af = this.af;
                    if (~af) return;
                    cancelAnimationFrame(af);
                });
                break;
        }
        return ()=>{
            for (const unsubscribe of [
                ...subscriptions
            ].reverse()){
                unsubscribe();
                subscriptions.pop();
            }
        };
    }
    schedule() {
        switch(this.mode){
            case "frame":
                break;
            case "sync":
                this.draw();
                break;
            case "batch":
            default:
                this.batch();
                break;
        }
    }
    batch() {
        if (~this.af) return;
        this.af = requestAnimationFrame(this.frame);
    }
    frame = ()=>{
        this.draw();
        this.af = -1;
    };
    handleMouseDown = (e)=>{
        const { imageArea: imageArea } = this;
        if (!imageArea) return;
        const clickPoint = this.getClickPoint(e);
        if (this.options.bound.image && !$b14685c566131e5f$var$contains(imageArea, clickPoint)) return;
        this.mouseSnapshot = {
            image: $b14685c566131e5f$var$clone(this.transform),
            start: clickPoint,
            point: clickPoint
        };
    };
    handleMouseUp = ()=>{
        this.mouseSnapshot = null;
    };
    handleMouseMove = (e)=>{
        const { mouseSnapshot: mouseSnapshot } = this;
        if (!mouseSnapshot) return;
        const { imageArea: imageArea } = this;
        if (!imageArea) return;
        const clickPoint = this.getClickPoint(e);
        if (e.ctrlKey) {
            // scale center is the center of canvas
            const center = $b14685c566131e5f$export$159d9494db57879b($b14685c566131e5f$export$e508d58cde0760ad(this.canvas), 2);
            const initOffset = $b14685c566131e5f$export$f93b5905241a7cca(mouseSnapshot.start, center);
            const initR = $b14685c566131e5f$export$872dd985a098dd45(initOffset);
            const currentOffset = $b14685c566131e5f$export$f93b5905241a7cca(clickPoint, center);
            const currentR = $b14685c566131e5f$export$872dd985a098dd45(currentOffset);
            this.zoom(center, mouseSnapshot.image.scale * currentR / initR);
        } else {
            if (this.options.bound.image && !$b14685c566131e5f$var$contains(imageArea, clickPoint)) return;
            this.move($b14685c566131e5f$export$f93b5905241a7cca(clickPoint, mouseSnapshot.point));
        }
        this.mouseSnapshot = {
            ...mouseSnapshot,
            point: clickPoint
        };
        this.schedule();
    };
    handleTouchChange = (e)=>{
        if (e.touches.length) {
            const touches = this.getTouchPoints(e);
            this.touchSnapshot = {
                image: $b14685c566131e5f$var$clone(this.transform),
                touches: touches
            };
        } else this.touchSnapshot = null;
    };
    handleTouchMove = (e)=>{
        const { imageArea: imageArea } = this;
        if (!imageArea) return;
        const touches = this.getTouchPoints(e);
        if (this.options.bound.image && touches.every((touch)=>!$b14685c566131e5f$var$contains(imageArea, touch))) return;
        e.preventDefault();
        const { touchSnapshot: touchChangeSnapshot } = this;
        if (!touchChangeSnapshot) return;
        if (touches.length === 1) {
            const touch = touches[0];
            this.move($b14685c566131e5f$export$f93b5905241a7cca(touch, touchChangeSnapshot.touches[0]));
        } else {
            const [a1, b1] = touches;
            const [a2, b2] = touchChangeSnapshot.touches;
            if (!(a1 && a2 && b1 && b2)) return;
            const c1 = $b14685c566131e5f$export$cc6710ee5f037d57(a1, b1);
            const c2 = $b14685c566131e5f$export$cc6710ee5f037d57(a2, b2);
            const movement = $b14685c566131e5f$export$f93b5905241a7cca(c1, c2);
            const scale = $b14685c566131e5f$export$872dd985a098dd45($b14685c566131e5f$export$f93b5905241a7cca(a1, b1)) / $b14685c566131e5f$export$872dd985a098dd45($b14685c566131e5f$export$f93b5905241a7cca(a2, b2));
            this.zoom($b14685c566131e5f$export$cc6710ee5f037d57(c1, c2), scale * touchChangeSnapshot.image.scale);
            this.move(movement);
        }
        this.touchSnapshot = {
            image: $b14685c566131e5f$var$clone(this.transform),
            touches: touches
        };
        this.schedule();
    };
    handleWheel = (e)=>{
        const imageArea = this.imageArea;
        if (!imageArea) return;
        if (this.options.bound.image && !$b14685c566131e5f$var$contains(imageArea, this.getClickPoint(e))) return;
        e.preventDefault();
        const { deltaY: deltaY } = e;
        if (deltaY == null) // not supported
        return;
        const scale = deltaY < 0 ? 1.5 : 1 / 1.5;
        this.zoom(this.getClickPoint(e), scale * this.transform.scale);
        this.schedule();
    };
    getClickPoint(e) {
        return $b14685c566131e5f$export$e83f174dbf56adcc($b14685c566131e5f$var$getMouseOffset(e), this.baseZoom);
    }
    getTouchPoints(e) {
        const { baseZoom: baseZoom } = this;
        return Array.from(e.touches).map((touch)=>$b14685c566131e5f$export$e83f174dbf56adcc($b14685c566131e5f$var$getTouchOffset(touch), baseZoom));
    }
    //#endregion
    //#region methods
    async clip(options) {
        const canvas = new OffscreenCanvas(...$b14685c566131e5f$export$9f77e0932fb78f72($b14685c566131e5f$export$e508d58cde0760ad(this.canvas)));
        const context = canvas.getContext("2d");
        const path2d = this.createClip();
        const { clipArea: clipArea } = this;
        context.clip(path2d);
        this.drawImage(context);
        const exportImageData = context.getImageData(...$b14685c566131e5f$export$9f77e0932fb78f72(clipArea.position), ...$b14685c566131e5f$export$9f77e0932fb78f72(clipArea.size));
        const exportBitmap = await createImageBitmap(exportImageData);
        const exportCanvas = new OffscreenCanvas(...$b14685c566131e5f$export$9f77e0932fb78f72(clipArea.size));
        exportCanvas.getContext("bitmaprenderer").transferFromImageBitmap(exportBitmap);
        const blob = await exportCanvas.convertToBlob(options);
        exportBitmap.close();
        return blob;
    }
}


let $62a00e5e361d8775$export$f1d596b315372cdd = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "image-clipper",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $dIVkE.sheet),
                (0, $bef1a61e5880d971$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    var ImageClipper = class extends _classSuper {
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
            ImageClipper = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        dialog = (0, $5vq1D.element)("dialog");
        canvas = (0, $5vq1D.element)("canvas");
        controller = new (0, $b14685c566131e5f$export$8a2453949db01d51)(this.canvas);
        render() {
            return (0, $kKW7D.jsx)("dialog", {
                ref: this.dialog,
                onCancel: (e)=>e.preventDefault(),
                children: (0, $kKW7D.jsxs)("div", {
                    class: "modal-content",
                    children: [
                        (0, $kKW7D.jsx)("canvas", {
                            ref: this.canvas
                        }),
                        (0, $kKW7D.jsx)("p", {
                            children: "\u7535\u8111\u64CD\u4F5C\uFF1A\u9F20\u6807\u62D6\u52A8\u53EF\u79FB\u52A8\u56FE\u7247\uFF0C\u6309\u4F4FCtrl+\u9F20\u6807\u62D6\u52A8\u53EF\u653E\u7F29\uFF0C\u4E5F\u53EF\u6EDA\u8F6E\u653E\u7F29"
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "actions",
                            children: (0, $kKW7D.jsx)("button", {
                                type: "button",
                                class: "btn btn-primary",
                                onClick: ()=>this.dialog.close(),
                                children: "\u88C1\u526A"
                            })
                        })
                    ]
                })
            });
        }
        clip(image, clipConfig, canvasSize) {
            return new Promise((resolve)=>{
                this.canvas.width = canvasSize.width;
                this.canvas.height = canvasSize.height;
                this.controller.setImage(image);
                this.controller.setClip(clipConfig);
                const stop = this.controller.start();
                this.dialog.onclose = async ()=>{
                    stop();
                    const blob = await this.controller.clip();
                    resolve(blob);
                };
                this.dialog.showModal();
                const rect = this.dialog.getBoundingClientRect();
                const renderWidth = rect.width - 32, renderHeight = rect.height - 32;
                const widthZoom = renderWidth / canvasSize.width, heightZoom = renderHeight / canvasSize.height;
                const canvaseStyleSize = widthZoom < heightZoom ? {
                    width: renderWidth,
                    height: canvasSize.height * widthZoom
                } : {
                    width: canvasSize.width * heightZoom,
                    height: renderHeight
                };
                this.canvas.style.width = `${canvaseStyleSize.width}px`;
                this.canvas.style.height = `${canvaseStyleSize.height}px`;
            });
        }
    };
    return ImageClipper = _classThis;
})();


0, $1fe90d402f24c9c8$export$2986292ddc3a70d5;

let $0d31b7b3b5ebfbb7$var$PlayerB39 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "player-b30",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $3841675b623e54d2$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _profileService_decorators;
    let _profileService_initializers = [];
    let _musicPlay_decorators;
    let _musicPlay_initializers = [];
    let _gateway_decorators;
    let _gateway_initializers = [];
    let _router_decorators;
    let _router_initializers = [];
    let _fs_decorators;
    let _fs_initializers = [];
    let _chart_decorators;
    let _chart_initializers = [];
    let _host_decorators;
    let _host_initializers = [];
    var PlayerB39 = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _profileService_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ProfileService))
            ];
            _musicPlay_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            _gateway_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$Gateway))
            ];
            _router_decorators = [
                (0, $jrD1x.Inject)((0, $ec960e6aea3a7548$export$fbfcc1f2535c2ebb))
            ];
            _fs_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$FileStorage))
            ];
            _chart_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _host_decorators = [
                (0, $jrD1x.Inject)((0, $42cf132e7299c4cf$export$b484c3f9b1dd0862), {
                    once: true
                })
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _profileService_decorators, {
                kind: "accessor",
                name: "profileService",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"profileService" in obj,
                    get: (obj)=>obj.profileService,
                    set: (obj, value)=>{
                        obj.profileService = value;
                    }
                },
                metadata: _metadata
            }, _profileService_initializers, _instanceExtraInitializers);
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
            (0, $1I0Yl.__esDecorate)(this, null, _gateway_decorators, {
                kind: "accessor",
                name: "gateway",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"gateway" in obj,
                    get: (obj)=>obj.gateway,
                    set: (obj, value)=>{
                        obj.gateway = value;
                    }
                },
                metadata: _metadata
            }, _gateway_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _router_decorators, {
                kind: "accessor",
                name: "router",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"router" in obj,
                    get: (obj)=>obj.router,
                    set: (obj, value)=>{
                        obj.router = value;
                    }
                },
                metadata: _metadata
            }, _router_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _fs_decorators, {
                kind: "accessor",
                name: "fs",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"fs" in obj,
                    get: (obj)=>obj.fs,
                    set: (obj, value)=>{
                        obj.fs = value;
                    }
                },
                metadata: _metadata
            }, _fs_initializers, _instanceExtraInitializers);
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
            (0, $1I0Yl.__esDecorate)(this, null, _host_decorators, {
                kind: "accessor",
                name: "host",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"host" in obj,
                    get: (obj)=>obj.host,
                    set: (obj, value)=>{
                        obj.host = value;
                    }
                },
                metadata: _metadata
            }, _host_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            PlayerB39 = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #profileService_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _profileService_initializers, void 0));
        get profileService() {
            return this.#profileService_accessor_storage;
        }
        set profileService(value) {
            this.#profileService_accessor_storage = value;
        }
        #musicPlay_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _musicPlay_initializers, void 0);
        get musicPlay() {
            return this.#musicPlay_accessor_storage;
        }
        set musicPlay(value) {
            this.#musicPlay_accessor_storage = value;
        }
        #gateway_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _gateway_initializers, void 0);
        get gateway() {
            return this.#gateway_accessor_storage;
        }
        set gateway(value) {
            this.#gateway_accessor_storage = value;
        }
        #router_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _router_initializers, void 0);
        get router() {
            return this.#router_accessor_storage;
        }
        set router(value) {
            this.#router_accessor_storage = value;
        }
        #fs_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _fs_initializers, void 0);
        get fs() {
            return this.#fs_accessor_storage;
        }
        set fs(value) {
            this.#fs_accessor_storage = value;
        }
        #chart_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _chart_initializers, void 0);
        get chart() {
            return this.#chart_accessor_storage;
        }
        set chart(value) {
            this.#chart_accessor_storage = value;
        }
        #host_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _host_initializers, void 0);
        get host() {
            return this.#host_accessor_storage;
        }
        set host(value) {
            this.#host_accessor_storage = value;
        }
        best30 = new (0, $36ae76c6dbc0f7be$export$92a65194fd1587f3)();
        imagePicker = new (0, $ezVt6.FancyDialog)();
        downloadModal = new (0, $ezVt6.FancyDialog)();
        customTemplateIframe = null;
        packs = (0, $5vq1D.element)("select");
        gradeFilter = (0, $5vq1D.signal)("");
        minConstant = (0, $5vq1D.signal)(NaN);
        maxConstant = (0, $5vq1D.signal)(NaN);
        template = (0, $5vq1D.signal)("yuki-chan");
        custom = (0, $5vq1D.signal)("");
        customTemplateStarted = (0, $5vq1D.signal)(false);
        currentSite = null;
        rpc = new (0, $597166ee52d3e8a9$export$83f82714246b5968)({
            hub: new (0, $597166ee52d3e8a9$export$a02eed447f48479c)(()=>{
                const targetWindow = this.customTemplateIframe.contentWindow;
                return {
                    input: window,
                    output: targetWindow
                };
            }),
            impl: {
                exportAsImage: (...args)=>this.exportAsImageFile(...args),
                getAllCharacters: (...args)=>this.host.getAllCharacters(...args),
                getImages: (...args)=>this.host.getImages(...args),
                getPackList: (...args)=>this.host.getPackList(...args),
                getPreference: (...args)=>this.host.getPreference(...args),
                getSongList: (...args)=>this.host.getSongList(...args),
                resolveAssets: (...args)=>this.host.resolveAssets(...args),
                pickImage: (...args)=>this.pickImage(...args),
                resolveBackgrounds: (...args)=>this.host.resolveBackgrounds(...args),
                resolveCharacterImages: (...args)=>this.host.resolveCharacterImages(...args),
                resolveCovers: (...args)=>this.host.resolveCovers(...args),
                resolveGradeImgs: (...args)=>this.host.resolveGradeImgs(...args),
                resolvePotentialBadge: (...args)=>this.host.resolvePotentialBadge(...args),
                savePreference: (...args)=>this.host.savePreference(...args)
            }
        });
        #connection = null;
        render() {
            this.effect(()=>{
                const { template: template, url: url } = this.router.parseQuery();
                if (template === "custom-template") this.template.set(template);
                if (url) this.custom.set(url);
                const cleanupParams = (0, $5vq1D.effect)(()=>{});
                queueMicrotask(this.computeConditionalB30);
                const events = (0, $5vq1D.listen)(this.best30);
                const unsubscribe = events("dblclick", ()=>{
                    this.best30.requestFullscreen({
                        navigationUI: "hide"
                    });
                });
                return ()=>{
                    unsubscribe();
                    this.stopConnection();
                    cleanupParams();
                };
            });
            this.autorun(()=>{
                const template = this.template();
                const url = this.custom();
                const isCustomTemplate = template === "custom-template";
                if (!isCustomTemplate) queueMicrotask(()=>{
                    this.stopConnection();
                });
                this.router.updateQuery({
                    template: isCustomTemplate ? template : null,
                    url: url || null
                });
            });
            return (0, $kKW7D.jsx)((0, $5vq1D.Future), {
                promise: this.chart.getStatistics(),
                children: (chartStats)=>this._render(chartStats)
            });
        }
        _render({ minimumConstant: minimumConstant, maximumConstant: maximumConstant }) {
            const notUsingYukiChan = (0, $5vq1D.computed)(()=>this.template() !== "yuki-chan");
            const notUsingCustomTemplate = (0, $5vq1D.computed)(()=>this.template() !== "custom-template");
            return (0, $kKW7D.jsxs)("div", {
                children: [
                    this.imagePicker,
                    this.downloadModal,
                    (0, $kKW7D.jsxs)("form", {
                        class: "m-3",
                        children: [
                            (0, $kKW7D.jsxs)("details", {
                                class: "mb-3",
                                children: [
                                    (0, $kKW7D.jsx)("summary", {
                                        children: "\u9AD8\u7EA7\u67E5\u8BE2"
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "input-group",
                                        children: [
                                            (0, $kKW7D.jsxs)("label", {
                                                for: "packs",
                                                class: "input-group-text",
                                                children: [
                                                    "\u4EC5\u514D\u8D39\u66F2\u5305",
                                                    (0, $kKW7D.jsxs)("help-tip", {
                                                        children: [
                                                            (0, $kKW7D.jsx)("p", {
                                                                children: "\u4EE5\u4E0B\u66F2\u5305\u5185\u66F2\u76EE\u5747\u53EF\u76F4\u63A5/\u5728\u4E16\u754C\u6A21\u5F0F\u5E38\u9A7B\u5730\u56FE/\u9650\u65F6\u5730\u56FE\u514D\u8D39\u83B7\u5F97\uFF1A"
                                                            }),
                                                            this.chart.freePacks.map((pack)=>(0, $kKW7D.jsx)("p", {
                                                                    children: pack
                                                                })),
                                                            (0, $kKW7D.jsxs)("p", {
                                                                children: [
                                                                    "\u53EF\u591A\u9009\uFF0C\u7535\u8111\u662F\u6309\u4F4F",
                                                                    (0, $kKW7D.jsx)("kbd", {
                                                                        children: "Ctrl"
                                                                    }),
                                                                    "\u540E\u70B9\u51FB\u8FDB\u884C\u591A\u9009\u3002"
                                                                ]
                                                            }),
                                                            (0, $kKW7D.jsx)("p", {
                                                                children: "\u82E5\u4E0D\u9009\u62E9\u4EFB\u4F55\u66F2\u5305\u6216\u4EC5\u9009\u62E9\u201C\u65E0\u201D\uFF0C\u89C6\u4E3A\u65E0\u6B64\u8FC7\u6EE4\u6761\u4EF6\u3002"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, $kKW7D.jsxs)("select", {
                                                ref: this.packs,
                                                class: "form-select",
                                                size: "4",
                                                multiple: true,
                                                name: "packs",
                                                children: [
                                                    (0, $kKW7D.jsx)("option", {
                                                        value: "",
                                                        children: "\u65E0"
                                                    }),
                                                    this.chart.freePacks.map((pack)=>(0, $kKW7D.jsx)("option", {
                                                            value: pack,
                                                            children: pack
                                                        }))
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "input-group",
                                        children: [
                                            (0, $kKW7D.jsx)("label", {
                                                class: "input-group-text",
                                                for: "grade",
                                                children: "\u8BC4\u7EA7\u2265"
                                            }),
                                            (0, $kKW7D.jsxs)("select", {
                                                "h-model": this.gradeFilter,
                                                class: "form-select",
                                                id: "grade",
                                                name: "grade",
                                                children: [
                                                    (0, $kKW7D.jsx)("option", {
                                                        value: "",
                                                        children: "\u65E0"
                                                    }),
                                                    (0, $kKW7D.jsx)("option", {
                                                        value: (0, $2aEFH.ClearRank).Maximum,
                                                        children: "\u7406\u8BBA\u503C"
                                                    }),
                                                    (0, $kKW7D.jsx)("option", {
                                                        value: (0, $2aEFH.ClearRank).PureMemory,
                                                        children: "PM"
                                                    }),
                                                    this.musicPlay.grades.map((grade)=>(0, $kKW7D.jsx)("option", {
                                                            value: grade,
                                                            children: grade
                                                        }))
                                                ]
                                            }),
                                            (0, $kKW7D.jsx)("input", {
                                                name: "min-constant",
                                                type: "number",
                                                min: minimumConstant,
                                                max: maximumConstant,
                                                step: "0.1",
                                                placeholder: minimumConstant.toFixed(1),
                                                class: "form-control",
                                                "h-model:number": this.minConstant,
                                                "keypress-submit": true
                                            }),
                                            (0, $kKW7D.jsx)("span", {
                                                class: "input-group-text",
                                                children: "\u2264 \u5B9A\u6570 \u2264"
                                            }),
                                            (0, $kKW7D.jsx)("input", {
                                                name: "max-constant",
                                                type: "number",
                                                min: maximumConstant,
                                                max: maximumConstant,
                                                step: "0.1",
                                                placeholder: maximumConstant.toFixed(1),
                                                class: "form-control",
                                                "h-model:number": this.maxConstant,
                                                "keypress-submit": true
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "row action",
                                        children: (0, $kKW7D.jsx)("button", {
                                            type: "button",
                                            class: "btn btn-primary",
                                            onClick: this.computeConditionalB30,
                                            children: "\u8BA1\u7B97\u6761\u4EF6b30"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                children: [
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "input-group my-2",
                                        children: [
                                            (0, $kKW7D.jsx)("div", {
                                                class: "input-group-text",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "form-check",
                                                    children: [
                                                        (0, $kKW7D.jsx)("input", {
                                                            type: "radio",
                                                            value: "yuki-chan",
                                                            id: "yuki-chan",
                                                            class: "form-check-input",
                                                            "h-model": this.template
                                                        }),
                                                        (0, $kKW7D.jsx)("label", {
                                                            for: "yuki-chan",
                                                            class: "form-check-label",
                                                            children: "\u66AE\u96EA\u9171"
                                                        })
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsxs)("div", {
                                                class: "input-group-text",
                                                children: [
                                                    (0, $kKW7D.jsx)("input", {
                                                        type: "checkbox",
                                                        "h-model:boolean": this.best30.hd,
                                                        name: "hd",
                                                        id: "hd",
                                                        class: "form-check-input",
                                                        disabled: notUsingYukiChan
                                                    }),
                                                    (0, $kKW7D.jsx)("label", {
                                                        for: "hd",
                                                        class: "form-check-label",
                                                        children: "\u9AD8\u6E05"
                                                    }),
                                                    (0, $kKW7D.jsx)("help-tip", {
                                                        children: (0, $kKW7D.jsxs)("p", {
                                                            children: [
                                                                "\u9AD8\u6E05\u9009\u9879\u53EF\u5BFC\u51FA\u66F4\u6E05\u6670\u7684\u66F2\u7ED8\u548C\u6587\u5B57\u7684b30\u56FE\uFF0C\u4F46\u540C\u65F6\u4E5F\u6BD4\u8F83\u5927\uFF08\u7EA610M\uFF09\uFF0C\u5BFC\u51FA\u8F83\u6162\uFF0C\u4E5F\u4F1A\u6D88\u8017\u66F4\u591A\u6D41\u91CF\u3002",
                                                                (0, $kKW7D.jsx)("span", {
                                                                    class: "ios-issue",
                                                                    children: "iOS\u8BBE\u5907\u6709Safari\u7684\u5185\u5B58\u9650\u5236\uFF0C\u53EF\u80FD\u65E0\u6CD5\u5BFC\u51FA\u9AD8\u6E05\u56FE\u7247\u3002"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            (0, $kKW7D.jsx)("button", {
                                                class: "btn btn-primary",
                                                onClick: this.exportImg,
                                                type: "button",
                                                disabled: notUsingYukiChan,
                                                children: "\u5BFC\u51FA\u56FE\u7247"
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "input-group my-2",
                                        children: [
                                            (0, $kKW7D.jsx)("div", {
                                                class: "input-group-text",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "form-check",
                                                    children: [
                                                        (0, $kKW7D.jsx)("input", {
                                                            type: "radio",
                                                            value: "custom-template",
                                                            id: "custom",
                                                            class: "form-check-input",
                                                            "h-model": this.template
                                                        }),
                                                        (0, $kKW7D.jsx)("label", {
                                                            for: "custom-template",
                                                            class: "form-check-label",
                                                            children: "\u81EA\u5B9A\u4E49\u6A21\u677F"
                                                        })
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("label", {
                                                for: "custom",
                                                class: "input-group-text form-check-label",
                                                children: "\u5730\u5740"
                                            }),
                                            (0, $kKW7D.jsx)("input", {
                                                type: "text",
                                                "h-model": this.custom,
                                                name: "custom",
                                                id: "custom",
                                                placeholder: "\u9ED8\u8BA4AOL\u6A21\u677F",
                                                class: "form-control",
                                                disabled: (0, $5vq1D.computed)(()=>notUsingCustomTemplate() || this.customTemplateStarted())
                                            }),
                                            (0, $kKW7D.jsx)("button", {
                                                class: (0, $5vq1D.computed)(()=>`btn btn-${this.customTemplateStarted() ? "danger" : "primary"}`),
                                                onClick: this.toggleConnection,
                                                type: "button",
                                                disabled: notUsingCustomTemplate,
                                                children: (0, $5vq1D.computed)(()=>this.customTemplateStarted() ? "\u505C\u6B62" : "\u542F\u52A8")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "b30-container",
                        children: (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                            children: ()=>{
                                if (this.template() === "yuki-chan") return (0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
                                    children: this.best30
                                });
                                if (!this.customTemplateStarted()) return 0, $5vq1D.nil;
                                return (0, $kKW7D.jsx)("iframe", {
                                    ref: this.customTemplateIframe
                                });
                            }
                        })
                    })
                ]
            });
        }
        computeConditionalB30 = async ()=>{
            const profile = await this.profileService.getProfile();
            if (!profile) {
                (0, $ezVt6.alert)("\u672A\u9009\u62E9\u5B58\u6863");
                return;
            }
            const packs = Array.from(this.packs.querySelectorAll("option")).filter((o)=>o.selected && o.value).map((o)=>o.value);
            const rankFilter = this.gradeFilter(), minConstant = this.minConstant(), maxConstant = this.maxConstant();
            const b30 = await this.profileService.b30(profile, {
                packs: packs,
                filter: (result)=>{
                    const { score: { grade: grade }, chart: { constant: constant }, clear: clear } = result;
                    if (rankFilter) {
                        if (rankFilter === (0, $2aEFH.ClearRank).PureMemory || rankFilter === (0, $2aEFH.ClearRank).Maximum) {
                            const levels = [
                                (0, $2aEFH.ClearRank).PureMemory,
                                (0, $2aEFH.ClearRank).Maximum
                            ];
                            if (levels.indexOf(rankFilter) > levels.indexOf(clear)) return false;
                        } else if (this.musicPlay.compareGrade(grade, rankFilter) > 0) return false;
                    }
                    if (constant < minConstant || constant > maxConstant) return false;
                    return true;
                }
            });
            this.best30.b30.set(b30);
            await this.#connection?.api.setB30(b30);
        };
        exportImg = async ()=>{
            const b30 = this.best30.b30();
            if (!b30) {
                (0, $ezVt6.alert)("b30\u8BA1\u7B97\u5C1A\u672A\u5B8C\u6210\uFF0C\u8BF7\u7A0D\u540E\u2026\u2026");
                return;
            }
            const exportNode = this.best30.getExportNode();
            const profile = await this.profileService.getProfile();
            if (!exportNode || !profile) return;
            const progress = (0, $5vq1D.signal)("");
            const { blob: blob, filename: filename } = await (0, $e059fb6924d7387e$export$46c1c92549715335)((async ()=>{
                progress.set("\u6B63\u5728\u52A0\u8F7D\u6A21\u5757");
                const html2canvas = await (0, $21erW.esModule)((parcelRequire("2wdrz")));
                progress.set("\u6B63\u5728\u7ED8\u5236\u56FE\u7247");
                const canvas = await html2canvas(exportNode);
                progress.set("\u6B63\u5728\u5BFC\u51FA\u56FE\u7247");
                const blob = await new Promise((resolve, reject)=>{
                    canvas.toBlob((blob)=>{
                        if (blob) resolve(blob);
                        else reject();
                    }, "image/jpeg");
                });
                const now = new Date(b30.queryTime);
                const pad2 = (n)=>`${n}`.padStart(2, "0");
                const filename = `b30 ${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())} ${pad2(now.getHours())}-${pad2(now.getMinutes())}-${pad2(now.getSeconds())}.jpg`;
                return {
                    blob: blob,
                    filename: filename
                };
            })(), (0, $kKW7D.jsxs)("div", {
                style: "display: flex; flex-direction: column; align-items: center;",
                children: [
                    (0, $kKW7D.jsx)("p", {
                        children: progress
                    }),
                    (0, $kKW7D.jsx)("img", {
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($9V4HB))),
                        width: "48",
                        height: "48"
                    })
                ]
            }));
            await this.exportAsImageFile(blob, {
                filename: filename,
                autoDownload: false
            });
        };
        toggleConnection = async ()=>{
            const started = !this.customTemplateStarted();
            if (started) this.startConnection();
            else this.stopConnection();
        };
        async startConnection() {
            const custom = this.custom();
            let siteURL;
            if (custom) try {
                siteURL = new URL(custom);
            } catch  {
                (0, $ezVt6.alert)("\u5730\u5740\u683C\u5F0F\u4E0D\u6B63\u786E");
                return;
            }
            else siteURL = new URL("/arcaea-toolbelt-aol-b30/", "https://darrendanielday.github.io/arcaea-toolbelt-debug/");
            this.currentSite = siteURL;
            const site = siteURL.href;
            this.customTemplateIframe = (0, $5vq1D.element)("iframe");
            this.customTemplateStarted.set(true);
            this.customTemplateIframe.src = site;
            this.host.site = site;
            this.#connection = this.rpc.start();
            await this.computeConditionalB30();
        }
        stopConnection() {
            this.customTemplateStarted.set(false);
            this.#connection?.stop();
            this.customTemplateIframe = null;
            this.currentSite = null;
        }
        pickImage = async (candidates, options)=>{
            const { currentSite: currentSite } = this;
            if (!currentSite) throw new Error("Site not connected");
            const { display: display, title: title, custom: custom, defaultSelected: defaultSelected } = options;
            const { height: height, columns: columns, width: width } = display;
            const cleanups = [];
            const objURL = (blob)=>{
                const url = URL.createObjectURL(blob);
                cleanups.push(()=>URL.revokeObjectURL(url));
                return url;
            };
            try {
                const customImage = (0, $5vq1D.signal)(null);
                const getCustomImage = async ()=>{
                    if (custom) {
                        const single = custom.single;
                        if (single != null) {
                            const url = this.fs.createURL(currentSite, single);
                            const uploadedFile = await this.fs.read(url);
                            if (uploadedFile) {
                                const { blob: blob } = uploadedFile;
                                const blobURL = objURL(blob);
                                const image = {
                                    blob: uploadedFile.blob,
                                    blobURL: blobURL,
                                    // TODO 自定义图片的 dist URL 处理
                                    distURL: url.toString(),
                                    filename: single,
                                    resourceURL: url
                                };
                                customImage.set({
                                    type: "custom",
                                    image: image
                                });
                                return image;
                            }
                        }
                    }
                    customImage.set(null);
                    return null;
                };
                const candidateImages = await (0, $e059fb6924d7387e$export$46c1c92549715335)((async ()=>{
                    const imageFiles = await this.host.getImages(candidates.map((candidate)=>candidate.url));
                    return imageFiles.map((file, i)=>({
                            type: "basic",
                            candidate: candidates[i],
                            image: file
                        }));
                })(), (0, $kKW7D.jsx)("div", {
                    children: "\u6B63\u5728\u4E0B\u8F7D\u56FE\u7247\u2026\u2026"
                }));
                await getCustomImage();
                const savedCustomImage = customImage();
                const selectedBasicImage = candidateImages.find((item)=>item.candidate.url.href === defaultSelected?.href) ?? null;
                const selectedURL = defaultSelected?.href;
                const selected = (0, $5vq1D.signal)(selectedURL ? savedCustomImage?.image?.resourceURL.href === selectedURL ? savedCustomImage : selectedBasicImage : null);
                const renderPickImageItem = (pickResult)=>(0, $kKW7D.jsx)("div", {
                        class: "item",
                        "class:selected": (0, $5vq1D.computed)(()=>selected() === pickResult),
                        onClick: ()=>{
                            selected.set(pickResult);
                        },
                        children: (0, $kKW7D.jsx)("img", {
                            src: pickResult.image.blobURL
                        })
                    });
                const renderCustomPicker = (custom)=>{
                    const clipper = new (0, $62a00e5e361d8775$export$f1d596b315372cdd)();
                    const { single: single, clip: clip } = custom;
                    const renderSinglePicker = (path)=>{
                        const input = (0, $5vq1D.element)("input");
                        const handleChange = async ()=>{
                            let file = input.files?.item(0);
                            if (!file) return;
                            if (clip) {
                                const bitmap = await createImageBitmap(file);
                                file = await clipper.clip(bitmap, clip.config, clip.canvas);
                                bitmap.close();
                            }
                            const url = this.fs.createURL(currentSite, path);
                            await this.fs.upload(file, url);
                            await getCustomImage();
                            selected.set(customImage());
                        };
                        return (0, $kKW7D.jsxs)("div", {
                            children: [
                                (0, $kKW7D.jsx)("h3", {
                                    children: "\u81EA\u5B9A\u4E49\u56FE\u7247"
                                }),
                                clipper,
                                (0, $kKW7D.jsx)("div", {
                                    class: "row",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "file",
                                            ref: input,
                                            class: "form-control",
                                            accept: "image/*",
                                            onChange: handleChange
                                        })
                                    })
                                }),
                                (0, $kKW7D.jsx)((0, $5vq1D.Show), {
                                    when: customImage,
                                    fallback: ()=>(0, $kKW7D.jsx)("div", {
                                            children: "\uFF08\u5728\u4E0A\u9762\u9009\u62E9\u6587\u4EF6\u6DFB\u52A0\u81EA\u5B9A\u4E49\u56FE\u7247\uFF09"
                                        }),
                                    children: (result)=>{
                                        return (0, $kKW7D.jsx)("div", {
                                            class: "custom-image cells",
                                            "var:item-height": `${height}px`,
                                            "var:grid-columns": `${columns}`,
                                            "var:item-width": `${width}px`,
                                            children: renderPickImageItem(result)
                                        });
                                    }
                                })
                            ]
                        });
                    };
                    if (single) return renderSinglePicker(single);
                    return 0, $5vq1D.nil;
                };
                const renderImages = ()=>{
                    const items = candidateImages.map(renderPickImageItem);
                    return (0, $kKW7D.jsx)("div", {
                        class: "image-picker cells",
                        "var:item-height": `${height}px`,
                        "var:grid-columns": `${columns}`,
                        "var:item-width": `${width}px`,
                        children: items
                    });
                };
                const imageFile = await this.imagePicker.showPicker((done, cancel)=>{
                    return [
                        (0, $kKW7D.jsxs)("div", {
                            slot: "content",
                            children: [
                                (0, $kKW7D.jsx)("h2", {
                                    children: title
                                }),
                                custom ? (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                    children: [
                                        renderCustomPicker(custom),
                                        (0, $kKW7D.jsx)("h3", {
                                            children: "\u57FA\u672C\u56FE\u7247"
                                        })
                                    ]
                                }) : (0, $5vq1D.nil),
                                renderImages()
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            slot: "footer",
                            children: [
                                (0, $kKW7D.jsx)("button", {
                                    class: "btn btn-primary",
                                    disabled: (0, $5vq1D.computed)(()=>!selected()),
                                    onClick: ()=>{
                                        const selectedImage = selected();
                                        if (selectedImage) done(selectedImage);
                                        else cancel();
                                    },
                                    children: "\u9009\u62E9"
                                }),
                                (0, $kKW7D.jsx)("button", {
                                    class: "btn btn-secondary",
                                    onClick: ()=>{
                                        cancel();
                                    },
                                    children: "\u53D6\u6D88"
                                })
                            ]
                        })
                    ];
                });
                return imageFile;
            } finally{
                cleanups.forEach((clean)=>clean());
            }
        };
        exportAsImageFile = async (data, options)=>{
            const url = URL.createObjectURL(data);
            const { filename: filename = url.toString(), autoDownload: autoDownload = true } = options ?? {};
            try {
                if (autoDownload) (0, $izUtT.download)(url, filename);
                await this.downloadModal.showPicker((done)=>[
                        (0, $kKW7D.jsx)("div", {
                            slot: "content",
                            children: autoDownload ? (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                children: [
                                    (0, $kKW7D.jsx)("p", {
                                        children: "\u5982\u679C\u56FE\u7247\u6CA1\u6709\u81EA\u52A8\u4E0B\u8F7D\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u94FE\u63A5\u6253\u5F00\u56FE\u7247\u624B\u52A8\u4FDD\u5B58\u3002"
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        children: (0, $kKW7D.jsx)("a", {
                                            href: url,
                                            target: "_blank",
                                            children: filename
                                        })
                                    })
                                ]
                            }) : (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                children: [
                                    (0, $kKW7D.jsx)("p", {
                                        children: "\u70B9\u51FB\u4E0B\u65B9\u94FE\u63A5\u4E0B\u8F7D\u56FE\u7247\uFF1A"
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        children: (0, $kKW7D.jsx)("a", {
                                            href: url,
                                            download: filename,
                                            children: filename
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("p", {
                                        children: "\u70B9\u51FB\u4E0B\u65B9\u94FE\u63A5\u5728\u65B0\u9875\u9762\u9884\u89C8\u56FE\u7247\uFF1A"
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        children: (0, $kKW7D.jsx)("a", {
                                            href: url,
                                            target: "_blank",
                                            children: filename
                                        })
                                    })
                                ]
                            })
                        }),
                        (0, $kKW7D.jsx)("div", {
                            slot: "footer",
                            children: (0, $kKW7D.jsx)("button", {
                                class: "btn btn-primary",
                                onClick: ()=>{
                                    done(true);
                                },
                                children: "\u5B8C\u6210"
                            })
                        })
                    ]);
            } finally{
                URL.revokeObjectURL(url);
            }
        };
    };
    return PlayerB39 = _classThis;
})();
const $0d31b7b3b5ebfbb7$export$692344c62633741b = {
    path: "/b30",
    title: "b30",
    setup () {
        const page = new $0d31b7b3b5ebfbb7$var$PlayerB39();
        const width = window.innerWidth;
        if (width < 800) (0, $5vq1D.cssVar)(document.body, "inner-width", `${width}`);
        return page;
    }
};



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $hlIIF = parcelRequire("hlIIF");

var $04CUQ = parcelRequire("04CUQ");
let $0855276543b8dc38$export$6f093cfa640b7166 = "dialog{border-width:var(--bs-border-width);border-radius:var(--bs-border-radius);border-color:var(--bs-border-color);box-shadow:var(--bs-box-shadow);--bs-modal-footer-gap:4px}blockquote{padding:8px;border-radius:4px;background-color:var(--bs-gray-200)}.cross-site-script>div>div{margin:8px 0}.modal-footer{margin:.5em 0}.inline-img{width:3em;height:3em}#greet>.col{display:flex;align-items:center}#the-script{overflow-x:auto;white-space:pre;user-select:all}.user{display:flex;align-items:center}.user potential-badge{cursor:pointer}.tab{color:var(--difficulty-color);cursor:pointer;margin-right:.25em}.tab.active{border-bottom:.125em solid var(--difficulty-color,var(--bs-body-color))}.stats{width:300px;height:250px}";
const $0855276543b8dc38$export$995990c5c04c46f0 = (0, $04CUQ.create)($0855276543b8dc38$export$6f093cfa640b7166, "file:///src/view/components/profile/style.css.js");



var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $ezVt6 = parcelRequire("ezVt6");

var $5vq1D = parcelRequire("5vq1D");


var $hyWAW = parcelRequire("hyWAW");

var $2aEFH = parcelRequire("2aEFH");

var $b0ze6 = parcelRequire("b0ze6");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $5vq1D = parcelRequire("5vq1D");

var $hlIIF = parcelRequire("hlIIF");

var $jrD1x = parcelRequire("jrD1x");

let $93b999e61508cdce$export$9a6dc2d0fce7da79 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "route-link",
            styles: [
                (0, $hlIIF.bootstrap)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _path_decorators;
    let _path_initializers = [];
    let _router_decorators;
    let _router_initializers = [];
    var RouteLink = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _path_decorators = [
                (0, $5vq1D.Attribute)("path")
            ];
            _router_decorators = [
                (0, $jrD1x.Inject)((0, $ec960e6aea3a7548$export$fbfcc1f2535c2ebb))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _path_decorators, {
                kind: "accessor",
                name: "path",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"path" in obj,
                    get: (obj)=>obj.path,
                    set: (obj, value)=>{
                        obj.path = value;
                    }
                },
                metadata: _metadata
            }, _path_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _router_decorators, {
                kind: "accessor",
                name: "router",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"router" in obj,
                    get: (obj)=>obj.router,
                    set: (obj, value)=>{
                        obj.router = value;
                    }
                },
                metadata: _metadata
            }, _router_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            RouteLink = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #path_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _path_initializers, void 0));
        get path() {
            return this.#path_accessor_storage;
        }
        set path(value) {
            this.#path_accessor_storage = value;
        }
        #router_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _router_initializers, void 0);
        get router() {
            return this.#router_accessor_storage;
        }
        set router(value) {
            this.#router_accessor_storage = value;
        }
        render() {
            return (0, $kKW7D.jsx)("a", {
                href: (0, $5vq1D.computed)(()=>`#${this.path()}`),
                onClick: (e)=>{
                    if (e.ctrlKey) return;
                    const path = this.path();
                    if (!path) return;
                    this.router.navigate(this.router.matchRoute(path));
                },
                children: (0, $kKW7D.jsx)("slot", {})
            });
        }
    };
    return RouteLink = _classThis;
})();



0, $93b999e61508cdce$export$9a6dc2d0fce7da79;
0, $1fe90d402f24c9c8$export$2986292ddc3a70d5;
let $cc459204e1dc4f9f$export$120c0e7b1bef3ec7 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "profile-page",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $0855276543b8dc38$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _gateway_decorators;
    let _gateway_initializers = [];
    let _profileService_decorators;
    let _profileService_initializers = [];
    let _chart_decorators;
    let _chart_initializers = [];
    let _musicPlay_decorators;
    let _musicPlay_initializers = [];
    var ProfilePage = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _resolver_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsResolver))
            ];
            _gateway_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$Gateway))
            ];
            _profileService_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ProfileService))
            ];
            _chart_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _musicPlay_decorators = [
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
            (0, $1I0Yl.__esDecorate)(this, null, _gateway_decorators, {
                kind: "accessor",
                name: "gateway",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"gateway" in obj,
                    get: (obj)=>obj.gateway,
                    set: (obj, value)=>{
                        obj.gateway = value;
                    }
                },
                metadata: _metadata
            }, _gateway_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _profileService_decorators, {
                kind: "accessor",
                name: "profileService",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"profileService" in obj,
                    get: (obj)=>obj.profileService,
                    set: (obj, value)=>{
                        obj.profileService = value;
                    }
                },
                metadata: _metadata
            }, _profileService_initializers, _instanceExtraInitializers);
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
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ProfilePage = _classThis = _classDescriptor.value;
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
        #gateway_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _gateway_initializers, void 0);
        get gateway() {
            return this.#gateway_accessor_storage;
        }
        set gateway(value) {
            this.#gateway_accessor_storage = value;
        }
        #profileService_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _profileService_initializers, void 0);
        get profileService() {
            return this.#profileService_accessor_storage;
        }
        set profileService(value) {
            this.#profileService_accessor_storage = value;
        }
        #chart_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _chart_initializers, void 0);
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
        createProfileDialog = (0, $5vq1D.element)("dialog");
        editProfileDialog = (0, $5vq1D.element)("dialog");
        switchProfileDialog = (0, $5vq1D.element)("dialog");
        importProfileDialog = (0, $5vq1D.element)("dialog");
        importSt3Dialog = (0, $5vq1D.element)("dialog");
        editPtt = (0, $5vq1D.element)("input");
        profileStats = new (0, $ezVt6.FancyDialog)();
        greet = (0, $5vq1D.signal)(null);
        render() {
            this.updateGreet();
            return (0, $kKW7D.jsx)((0, $5vq1D.Future), {
                promise: this.musicPlay.getStatistics(),
                children: ({ maximumPotential: maximumPotential })=>{
                    return this._render(maximumPotential);
                }
            });
        }
        _render(maximumPotential) {
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                        children: ()=>{
                            const profile = this.greet();
                            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "row m-3",
                                        id: "greet",
                                        children: (0, $kKW7D.jsx)("div", {
                                            class: "col",
                                            children: profile ? [
                                                `\u{5F53}\u{524D}\u{5B58}\u{6863}\u{FF1A}${profile.username}`,
                                                (0, $kKW7D.jsx)((0, $b0ze6.PotentialBadge), {
                                                    potential: +profile.potential
                                                })
                                            ] : "\u672A\u9009\u62E9\u5B58\u6863"
                                        })
                                    }),
                                    profile ? [
                                        (0, $kKW7D.jsxs)("div", {
                                            class: "row m-3",
                                            children: [
                                                this.profileStats,
                                                (0, $kKW7D.jsx)("button", {
                                                    type: "button",
                                                    class: "btn btn-primary",
                                                    onClick: ()=>this.showProfileStats(profile),
                                                    children: "\u5B58\u6863\u7EDF\u8BA1"
                                                }),
                                                (0, $kKW7D.jsx)("button", {
                                                    type: "button",
                                                    class: "btn btn-outline-secondary update-profile",
                                                    onClick: ()=>this.updateProfile(profile),
                                                    children: "\u4FEE\u6539\u5B58\u6863"
                                                }),
                                                (0, $kKW7D.jsx)("button", {
                                                    type: "button",
                                                    class: "btn btn-outline-secondary import-scores",
                                                    onClick: ()=>this.importSt3(profile),
                                                    children: "\u5BFC\u5165st3"
                                                }),
                                                (0, $kKW7D.jsx)("button", {
                                                    type: "button",
                                                    class: "btn btn-outline-secondary export-profile",
                                                    onClick: ()=>this.exportProfile(profile),
                                                    children: "\u5BFC\u51FA\u5B58\u6863\u4E3AJSON"
                                                }),
                                                (0, $kKW7D.jsx)("button", {
                                                    type: "button",
                                                    class: "btn btn-danger",
                                                    onClick: ()=>this.deleteProfile(profile),
                                                    children: "\u5220\u9664\u5B58\u6863"
                                                })
                                            ]
                                        })
                                    ] : (0, $5vq1D.nil)
                                ]
                            });
                        }
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "row m-3",
                        children: [
                            (0, $kKW7D.jsx)("button", {
                                type: "button",
                                class: "btn btn-outline-secondary create-profile",
                                onClick: this.createProfile,
                                children: "\u521B\u5EFA\u5B58\u6863"
                            }),
                            (0, $kKW7D.jsx)("button", {
                                type: "button",
                                class: "btn btn-outline-secondary switch-profile",
                                onClick: this.switchProfile,
                                children: "\u9009\u62E9\u5B58\u6863"
                            }),
                            (0, $kKW7D.jsx)("button", {
                                type: "button",
                                class: "btn btn-outline-secondary import-profile",
                                onClick: this.importProfile,
                                children: "\u5BFC\u5165JSON\u5B58\u6863"
                            })
                        ]
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "row m-3",
                        children: [
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u5B58\u6863\u7528\u4E8E\u4FDD\u5B58\u8C31\u9762\u6210\u7EE9\uFF0C\u8FDB\u884C",
                                    (0, $kKW7D.jsx)("route-link", {
                                        path: "/b30",
                                        children: "b30"
                                    }),
                                    "\u7684\u8BA1\u7B97\u548C\u4E00\u4E9B\u76F8\u5173\u7EDF\u8BA1\uFF0C\u4EE5\u53CA\u4FDD\u5B58\u89D2\u8272\u6570\u636E\u8FDB\u884C\u722C\u68AF\u76F8\u5173\u8BA1\u7B97\u3002"
                                ]
                            }),
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u672C\u7AD9\u652F\u6301\u89E3\u6790Arcaea\u672C\u5730\u5B58\u6863",
                                    (0, $kKW7D.jsx)("code", {
                                        children: "st3"
                                    }),
                                    "\u6587\u4EF6\u5E76\u5BFC\u5165\u6210\u7EE9\u5230\u5B58\u6863\u3002\u5173\u4E8E\u5982\u4F55\u83B7\u53D6",
                                    (0, $kKW7D.jsx)("code", {
                                        children: "st3"
                                    }),
                                    "\u6587\u4EF6\uFF0C\u53EF\u53C2\u8003",
                                    (0, $kKW7D.jsx)("a", {
                                        href: "docs/mumu-adb.html",
                                        target: "_blank",
                                        children: "\u4F7F\u7528MuMu\u6A21\u62DF\u5668\u548Cadb\u83B7\u53D6\u5B58\u6863"
                                    }),
                                    "\uFF0C\u6216\u8005",
                                    (0, $kKW7D.jsx)("a", {
                                        href: "https://space.bilibili.com/171403897",
                                        target: "_blank",
                                        children: "RTE"
                                    }),
                                    "\u7684\u89C6\u9891",
                                    (0, $kKW7D.jsx)("a", {
                                        href: "https://www.bilibili.com/video/BV1kp4y1F7Jw/",
                                        target: "_blank",
                                        children: "BV1kp4y1F7Jw"
                                    }),
                                    "\u3002"
                                ]
                            }),
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u672C\u7AD9\u4E5F\u652F\u6301",
                                    (0, $kKW7D.jsx)("route-link", {
                                        path: "/chart-ptt",
                                        children: "\u624B\u52A8\u5F55\u5165\u6210\u7EE9"
                                    }),
                                    "\u3002",
                                    (0, $kKW7D.jsx)("strong", {
                                        children: "\u5B58\u6863\u7684\u6570\u636E\u5168\u90E8\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u5185"
                                    }),
                                    "\uFF0C\u5728\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58\u540E\uFF0C\u5B58\u6863\u5185\u7684\u6570\u636E\u5C06\u4F1A\u6C38\u8FDC\u4E22\u5931\u3002\u56E0\u6B64",
                                    (0, $kKW7D.jsx)("strong", {
                                        children: "\u82E5\u901A\u8FC7\u624B\u52A8\u5F55\u5165\u8C31\u9762\u6210\u7EE9\uFF0C\u8BF7\u81EA\u884C\u5B9A\u671F\u5BFC\u51FAJSON\u8FDB\u884C\u5907\u4EFD"
                                    }),
                                    "\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0\u9700\u8981\u91CD\u65B0\u5F55\u5165\u7684\u9EBB\u70E6\u3002"
                                ]
                            }),
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u672C\u5DE5\u5177\u6709\u4E00\u4E2A\u914D\u5957\u7684\u811A\u672C\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5728",
                                    this.renderArcaeaOfficialLink(),
                                    "\u83B7\u53D6\u4E00\u4E9B\u4FE1\u606F\uFF0C\u5305\u62EC\u83B7\u53D6\u642D\u6863\u6570\u636E\u3001Web API\u67E5\u5206\uFF08\u9700\u8BA2\u9605Arcaea Online\uFF09\u7B49\u3002"
                                ]
                            }),
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u5173\u4E8E\u6B64\u811A\u672C\u66F4\u8BE6\u7EC6\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u8BF7\u53C2\u8003",
                                    (0, $kKW7D.jsx)("a", {
                                        href: "docs/plugin-usage.html",
                                        target: "_blank",
                                        children: "\u4F7F\u7528\u8BF4\u660E"
                                    }),
                                    "\uFF0C\u4E0B\u9762\u662F\u7B80\u5355\u7684\u4F7F\u7528\u8BF4\u660E\uFF1A"
                                ]
                            }),
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u5728\u7535\u8111\u4E0A\uFF0C\u4F7F\u7528",
                                    (0, $kKW7D.jsx)("code", {
                                        children: "Chrome/Edge"
                                    }),
                                    "\u6D4F\u89C8\u5668\u6253\u5F00",
                                    this.renderArcaeaOfficialLink(),
                                    "\u5E76\u767B\u5F55\uFF0C\u6309F12\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u627E\u5230\u63A7\u5236\u53F0\uFF08Console\uFF09\uFF0C\u590D\u5236\u5E76\u6267\u884C\u4EE5\u4E0B\u811A\u672C\u4EE3\u7801\u5373\u53EF\u8C03\u7528\u6B64\u811A\u672C\u3002"
                                ]
                            }),
                            (0, $kKW7D.jsx)("div", {
                                children: (0, $kKW7D.jsxs)("blockquote", {
                                    id: "the-script",
                                    children: [
                                        'import("',
                                        new URL("services/cross-site-script.js", "https://darrendanielday.github.io/arcaea-toolbelt-debug/").href,
                                        '");'
                                    ]
                                })
                            }),
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u811A\u672C\u6267\u884C\u540E\u5DE6\u4E0B\u89D2\u4F1A\u51FA\u73B0\u4E00\u4E2A\u60AC\u6D6E\u6309\u94AE\uFF0C\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u63D2\u4EF6\u5F39\u6846\uFF0C\u6839\u636E\u5F39\u6846\u5185\u63D0\u793A\u64CD\u4F5C\u5373\u53EF\u3002\u5173\u95ED\u5F39\u6846\u540E\u53EF\u901A\u8FC7",
                                    (0, $kKW7D.jsx)("kbd", {
                                        children: "Ctrl + B"
                                    }),
                                    "\u91CD\u65B0\u5524\u8D77\u5F39\u6846\u3002"
                                ]
                            }),
                            (0, $kKW7D.jsx)("p", {
                                children: "\u82E5\u9700\u8981\u9891\u7E41\u4F7F\u7528\u6B64\u811A\u672C\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6CB9\u7334\u63D2\u4EF6\u5B9E\u73B0\u5728\u8BBF\u95EEArcaea\u5B98\u7F51\u65F6\u81EA\u52A8\u6267\u884C\u3002"
                            }),
                            (0, $kKW7D.jsx)("p", {
                                children: "\u82E5\u8981\u5728\u624B\u673A\u4E0A\u6267\u884C\u6B64\u811A\u672C\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u7AE0\uFF1A"
                            }),
                            (0, $kKW7D.jsx)("p", {
                                children: (0, $kKW7D.jsx)("a", {
                                    href: "https://www.zhihu.com/question/411017015",
                                    target: "_blank",
                                    children: "https://www.zhihu.com/question/411017015"
                                })
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("dialog", {
                        ref: this.createProfileDialog,
                        id: "create-profile",
                        children: (0, $kKW7D.jsxs)("form", {
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "h4",
                                    children: "\u521B\u5EFA\u5B58\u6863"
                                }),
                                (0, $kKW7D.jsxs)("div", {
                                    class: "mb-3",
                                    children: [
                                        (0, $kKW7D.jsx)("label", {
                                            for: "username",
                                            class: "form-label",
                                            children: "\u7528\u6237\u540D\uFF08\u4EC5\u7528\u4E8E\u533A\u5206\u5B58\u6863\u548Cb30\u751F\u6210\uFF09"
                                        }),
                                        (0, $kKW7D.jsx)("input", {
                                            class: "form-control",
                                            id: "username",
                                            name: "username",
                                            required: true
                                        })
                                    ]
                                }),
                                (0, $kKW7D.jsxs)("div", {
                                    class: "mb-3",
                                    children: [
                                        (0, $kKW7D.jsx)("label", {
                                            for: "potential",
                                            class: "form-label",
                                            children: "\u6F5C\u529B\u503C"
                                        }),
                                        (0, $kKW7D.jsx)("input", {
                                            class: "form-control",
                                            id: "potential",
                                            name: "potential",
                                            type: "number",
                                            step: "0.01",
                                            min: 0,
                                            max: this.profileService.formatPotential(maximumPotential),
                                            required: true
                                        })
                                    ]
                                }),
                                this.renderFooter()
                            ]
                        })
                    }),
                    (0, $kKW7D.jsx)("dialog", {
                        ref: this.editProfileDialog,
                        id: "edit-profile",
                        children: (0, $kKW7D.jsxs)("form", {
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "h4",
                                    children: "\u4FEE\u6539\u5B58\u6863"
                                }),
                                (0, $kKW7D.jsxs)("div", {
                                    class: "mb-3",
                                    children: [
                                        (0, $kKW7D.jsx)("label", {
                                            for: "ptt",
                                            class: "form-label",
                                            children: "\u6F5C\u529B\u503C"
                                        }),
                                        (0, $kKW7D.jsx)("input", {
                                            ref: this.editPtt,
                                            class: "form-control",
                                            id: "ptt",
                                            name: "ptt",
                                            type: "number",
                                            step: "0.01",
                                            min: 0,
                                            max: this.profileService.formatPotential(maximumPotential),
                                            required: true
                                        })
                                    ]
                                }),
                                this.renderFooter()
                            ]
                        })
                    }),
                    (0, $kKW7D.jsx)("dialog", {
                        ref: this.switchProfileDialog,
                        id: "switch-profile",
                        children: (0, $kKW7D.jsxs)("form", {
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "h4",
                                    children: "\u9009\u62E9\u5B58\u6863"
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col",
                                        children: (0, $kKW7D.jsx)("select", {
                                            class: "form-select",
                                            name: "profile",
                                            required: true
                                        })
                                    })
                                }),
                                this.renderFooter()
                            ]
                        })
                    }),
                    (0, $kKW7D.jsx)("dialog", {
                        ref: this.importProfileDialog,
                        id: "import-profile",
                        children: (0, $kKW7D.jsxs)("form", {
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "h4",
                                    children: "\u5BFC\u5165\u5B58\u6863"
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "file",
                                            class: "form-control",
                                            accept: ".json",
                                            name: "file"
                                        })
                                    })
                                }),
                                this.renderFooter()
                            ]
                        })
                    }),
                    (0, $kKW7D.jsx)("dialog", {
                        ref: this.importSt3Dialog,
                        id: "import-scores",
                        children: (0, $kKW7D.jsxs)("form", {
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "h4",
                                    children: "\u4ECEArcaea\u672C\u5730\u5B58\u6863st3\u6587\u4EF6\u5BFC\u5165\u6210\u7EE9"
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "file",
                                            class: "form-control",
                                            name: "file"
                                        })
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row my-3",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("span", {
                                            class: "form-text",
                                            children: "\u5DF2\u77E5\u95EE\u98981\uFF1Ast3\u5185\u53EA\u6709\u8C31\u9762\u6700\u9AD8\u7B49\u7EA7\u7684\u901A\u5173\u7C7B\u578B\u4FE1\u606F\uFF0C\u6CA1\u6709\u6700\u4F73\u6210\u7EE9\u5F53\u6B21\u7684\u901A\u5173\u7C7B\u578B\u4FE1\u606F\u3002\u901A\u5173\u7C7B\u578B\u4ECE\u9AD8\u5230\u4F4E\u7684\u987A\u5E8F\u662F\uFF1A"
                                        })
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col",
                                        children: (0, $kKW7D.jsxs)("span", {
                                            class: "form-text",
                                            children: [
                                                this.renderClearImg((0, $2aEFH.ClearRank).PureMemory),
                                                ">",
                                                this.renderClearImg((0, $2aEFH.ClearRank).FullRecall),
                                                ">",
                                                this.renderClearImg((0, $2aEFH.ClearRank).HardClear),
                                                ">",
                                                this.renderClearImg((0, $2aEFH.ClearRank).NormalClear),
                                                ">",
                                                this.renderClearImg((0, $2aEFH.ClearRank).EasyClear),
                                                ">",
                                                this.renderClearImg((0, $2aEFH.ClearRank).TrackLost)
                                            ]
                                        })
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsxs)("span", {
                                            class: "form-text",
                                            children: [
                                                "\u4F8B\u5982\u6709\u4E00\u4E2A\u8C31\u9762\u6700\u4F73\u6210\u7EE9\u662F9990000\u52060-1\uFF0C\u5B9E\u9645\u901A\u5173\u7C7B\u578B\u5E94\u5F53\u4E3ANC\uFF08",
                                                this.renderClearImg((0, $2aEFH.ClearRank).NormalClear),
                                                "\uFF09\uFF0C\u4F46\u5148\u524D\u66FE\u7ECF9980000\u52064-0\u5168\u8FDE\u8FC7\uFF0Cst3\u5B58\u6863\u5185\u7684\u6570\u636E\u5C06\u4F1A\u662FFR\uFF08",
                                                this.renderClearImg((0, $2aEFH.ClearRank).FullRecall),
                                                "\uFF09\uFF0C\u4ECE\u800C\u53EF\u80FD\u5BFC\u81F4b30\u91CC\u7684\u901A\u5173\u663E\u793A\u5B58\u5728\u4E00\u4E9B\u5C0F\u7455\u75B5\u3002"
                                            ]
                                        })
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "row my-3",
                                    children: (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("span", {
                                            class: "form-text",
                                            children: "\u5DF2\u77E5\u95EE\u98982\uFF1Ast3\u5185\u7684\u6210\u7EE9\u65F6\u95F4\u5E76\u975E\u7CBE\u786E\u65F6\u95F4\u6233\uFF0C\u800C\u662F\u9664\u4EE5\u4E861000\u7684\u82E5\u5E72\u6B21\u65B9\u7684\u6574\u6570\u90E8\u5206\uFF0C\u548C\u5B9E\u9645\u65F6\u95F4\u53EF\u80FD\u4F1A\u6709\u6700\u591A\u4E00\u767E\u4E07\u79D2\uFF08\u7EA611.57\u5929\uFF09\u7684\u5DEE\u8DDD\u3002"
                                        })
                                    })
                                }),
                                this.renderFooter()
                            ]
                        })
                    })
                ]
            });
        }
        createProfile = ()=>{
            this.openFormModal(this.createProfileDialog, async (data)=>{
                const username = data.get("username");
                const ptt = +data.get("potential");
                if (!isNaN(ptt)) {
                    await this.profileService.createOrUpdateProfile(username, ptt);
                    await this.profileService.useProfile(username);
                    await this.updateGreet();
                }
            });
        };
        async updateProfile(currentProfile) {
            this.editPtt.value = currentProfile.potential;
            this.openFormModal(this.editProfileDialog, async (data)=>{
                const ptt = +data.get("ptt");
                if (!isNaN(ptt)) await this.profileService.createOrUpdateProfile(currentProfile.username, ptt);
                this.updateGreet();
            });
        }
        switchProfile = async ()=>{
            const profiles = await this.profileService.getProfileList();
            if (!profiles.length) {
                if (await (0, $ezVt6.confirm)("\u5F53\u524D\u6CA1\u6709\u5B58\u6863\uFF0C\u662F\u5426\u524D\u5F80\u521B\u5EFA\uFF1F")) this.createProfile();
                return;
            }
            const profile = await this.profileService.getProfile();
            const select = this.switchProfileDialog.querySelector('select[name="profile"]');
            select.innerHTML = profiles.map((p)=>`<option>${p}</option>`).join("");
            select.value = profile?.username ?? "";
            this.openFormModal(this.switchProfileDialog, async (data)=>{
                const profile = data.get("profile");
                if (profile && typeof profile === "string") {
                    await this.profileService.useProfile(profile);
                    this.updateGreet();
                }
            });
        };
        async exportProfile(profile) {
            await this.profileService.exportProfile(profile);
        }
        importProfile = ()=>{
            this.openFormModal(this.importProfileDialog, async (data)=>{
                const file = data.get("file");
                if (file instanceof File) await this.profileService.importProfile(file);
            });
        };
        async importSt3(profile) {
            this.openFormModal(this.importSt3Dialog, async (data)=>{
                const file = data.get("file");
                if (file instanceof File) {
                    const message = (0, $5vq1D.signal)("");
                    const result = await (0, $e059fb6924d7387e$export$46c1c92549715335)((async ()=>{
                        const result = await this.profileService.importDB(file, profile, (msg)=>message.set(msg));
                        await (0, $hyWAW.delay)(300);
                        return result;
                    })(), (0, $kKW7D.jsx)("div", {
                        children: message
                    }));
                    const { count: count, difficulties: difficulties, skipped: skipped } = result;
                    (0, $ezVt6.alert)((0, $kKW7D.jsxs)("div", {
                        children: [
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u6210\u529F\u5BFC\u5165\uFF1A",
                                    Object.entries(difficulties).map(([key, value])=>(0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                            children: [
                                                value,
                                                "\u4E2A",
                                                (0, $kKW7D.jsx)("span", {
                                                    "style:color": `var(--${key})`,
                                                    children: key.toUpperCase()
                                                }),
                                                " "
                                            ]
                                        }))
                                ]
                            }),
                            skipped.length ? (0, $kKW7D.jsx)("p", {
                                children: "\u8DF3\u8FC7\uFF1A"
                            }) : (0, $5vq1D.nil),
                            skipped.map((msg)=>(0, $kKW7D.jsx)("p", {
                                    children: msg
                                })),
                            (0, $kKW7D.jsxs)("p", {
                                children: [
                                    "\u5171",
                                    count,
                                    "\u4E2A\u6210\u7EE9"
                                ]
                            })
                        ]
                    }));
                }
            });
        }
        async showProfileStats(profile) {
            const { ratings: ratings } = await this.chart.getStatistics();
            const Desc = ({ label: label, content: content, style: style })=>{
                return (0, $kKW7D.jsxs)("div", {
                    class: "row",
                    style: style ?? null,
                    children: [
                        (0, $kKW7D.jsx)("div", {
                            class: "col",
                            children: label
                        }),
                        (0, $kKW7D.jsx)("div", {
                            class: "col",
                            children: content
                        })
                    ]
                });
            };
            const displayOrder = [
                (0, $2aEFH.Difficulty).Past,
                (0, $2aEFH.Difficulty).Present,
                (0, $2aEFH.Difficulty).Future,
                (0, $2aEFH.Difficulty).Beyond,
                null
            ];
            const Stat = ({ stat: stat })=>{
                const descriptsions = [
                    (0, $kKW7D.jsx)(Desc, {
                        label: "\u6E38\u73A9\u603B\u6570",
                        content: stat.total
                    }),
                    (0, $kKW7D.jsx)(Desc, {
                        label: "Clear",
                        content: stat.clear
                    }),
                    (0, $kKW7D.jsx)(Desc, {
                        label: "Full Recall",
                        content: stat.fr,
                        style: "color: #a470b5;"
                    }),
                    (0, $kKW7D.jsx)(Desc, {
                        label: "Pure Memory",
                        content: stat.pm,
                        style: "color: #40c4c5;"
                    })
                ];
                if (stat.max) descriptsions.push((0, $kKW7D.jsx)(Desc, {
                    label: "\u7406\u8BBA\u503C",
                    content: stat.max,
                    style: "text-shadow: 1px 1px #0f7185dd;"
                }));
                const percentage = (rate)=>isNaN(rate) ? "-" : `${(rate * 100).toFixed(4)}%`;
                descriptsions.push((0, $kKW7D.jsx)(Desc, {
                    label: (0, $kKW7D.jsxs)("span", {
                        children: [
                            "EX\u4EE5\u4E0AP\u7387",
                            (0, $kKW7D.jsx)("help-tip", {
                                children: "EX\u4EE5\u4E0A\u7684\u603B\u5206\u6570\uFF08PM\u6309\u71671000W\u7B97\uFF09/\u8C31\u9762\u6570\u91CF*1000W"
                            })
                        ]
                    }),
                    content: percentage(stat.acc)
                }));
                if (stat.detailed) {
                    const hideNoNoteResult = "\u624B\u52A8\u5F55\u5165\u7684\u65E0\u5224\u5B9A\u4FE1\u606F\u7684\u6210\u7EE9\u4E0D\u4F1A\u8BA1\u5165";
                    descriptsions.push((0, $kKW7D.jsx)(Desc, {
                        label: (0, $kKW7D.jsxs)("span", {
                            children: [
                                "\u5927P\u603B\u6570",
                                (0, $kKW7D.jsx)("help-tip", {
                                    children: hideNoNoteResult
                                })
                            ]
                        }),
                        content: stat.perfect
                    }), (0, $kKW7D.jsx)(Desc, {
                        label: (0, $kKW7D.jsxs)("span", {
                            children: [
                                "\u5C0FP\u603B\u6570",
                                (0, $kKW7D.jsx)("help-tip", {
                                    children: hideNoNoteResult
                                })
                            ]
                        }),
                        content: stat.great
                    }), (0, $kKW7D.jsx)(Desc, {
                        label: (0, $kKW7D.jsxs)("span", {
                            children: [
                                "\u5927P\u51C6\u5EA6",
                                (0, $kKW7D.jsxs)("help-tip", {
                                    children: [
                                        "\u5927P\u6570\u5360\u603B\u7269\u91CF\u6570\u7684\u6BD4\u4F8B\uFF0C",
                                        hideNoNoteResult
                                    ]
                                })
                            ]
                        }),
                        content: percentage(stat.pacc)
                    }));
                    if (stat.rest <= 1e5) descriptsions.push((0, $kKW7D.jsx)(Desc, {
                        label: "\u8DDD\u6E38\u73A9\u8C31\u9762\u5168\u7406\u8BBA",
                        content: stat.rest
                    }));
                }
                return (0, $kKW7D.jsx)("div", {
                    children: descriptsions
                });
            };
            const Tab = ({ difficulty: difficulty })=>{
                return (0, $kKW7D.jsx)("span", {
                    role: "tab",
                    class: "tab",
                    "class:active": (0, $5vq1D.computed)(()=>difficulty === currentDifficulty()),
                    "var:difficulty-color": difficulty && `var(--${difficulty})`,
                    onClick: ()=>currentDifficulty.set(difficulty),
                    children: difficulty ? difficulty.toUpperCase() : "\u5168\u90E8"
                });
            };
            const currentDifficulty = (0, $5vq1D.signal)((0, $2aEFH.Difficulty).Future);
            const currentRating = (0, $5vq1D.signal)("");
            const currentStats = (0, $5vq1D.signal)(null);
            const showPotential = (0, $5vq1D.signal)(true);
            const cleanup = (0, $5vq1D.effect)(()=>{
                const difficulty = currentDifficulty() || undefined;
                const rating = currentRating();
                this.profileService.getProfileStatistics(profile, {
                    difficulty: difficulty,
                    rating: rating ? (0, $2aEFH.parseRating)(rating) : void 0
                }).then((stas)=>{
                    currentStats.set(stas);
                });
            });
            const { potential: potential, username: username } = profile;
            await this.profileStats.showAlert((0, $kKW7D.jsxs)("div", {
                slot: "content",
                children: [
                    (0, $kKW7D.jsx)("h2", {
                        children: "\u5B58\u6863\u7EDF\u8BA1"
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "user",
                        children: [
                            username,
                            (0, $kKW7D.jsx)("potential-badge", {
                                title: "\u70B9\u51FB\u5207\u6362\u6F5C\u529B\u503C\u663E\u793A",
                                potential: (0, $5vq1D.computed)(()=>showPotential() ? +potential : -1),
                                onClick: ()=>showPotential.update((show)=>!show)
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "mb-3",
                        children: displayOrder.map((difficulty)=>(0, $kKW7D.jsx)(Tab, {
                                difficulty: difficulty
                            }))
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "input-group mb-3",
                        children: [
                            (0, $kKW7D.jsx)("label", {
                                for: "rating",
                                class: "input-group-text",
                                children: "\u7B49\u7EA7"
                            }),
                            (0, $kKW7D.jsxs)("select", {
                                "h-model": currentRating,
                                class: "form-select",
                                name: "rating",
                                id: "rating",
                                children: [
                                    (0, $kKW7D.jsx)("option", {
                                        value: "",
                                        children: "\u5168\u90E8"
                                    }),
                                    ratings.map((rating)=>{
                                        const ratingText = (0, $2aEFH.formatRating)(rating);
                                        return (0, $kKW7D.jsx)("option", {
                                            value: ratingText,
                                            children: ratingText
                                        });
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "stats",
                        children: (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                            children: ()=>{
                                const stat = currentStats();
                                if (!stat) return 0, $5vq1D.nil;
                                return (0, $kKW7D.jsx)(Stat, {
                                    stat: stat
                                });
                            }
                        })
                    })
                ]
            }), true);
            cleanup();
        }
        async deleteProfile(profile) {
            if (!await (0, $ezVt6.confirm)("\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F")) return;
            await this.profileService.deleteProfile(profile.username);
            await this.updateGreet();
        }
        renderClearImg(clear) {
            return (0, $kKW7D.jsx)("img", {
                src: this.gateway.direct(this.resolver.resolveClearImg(clear)).href,
                class: "inline-img"
            });
        }
        renderArcaeaOfficialLink() {
            return (0, $kKW7D.jsx)("a", {
                href: "https://arcaea.lowiro.com/zh/",
                target: "_blank",
                children: "Arcaea\u5B98\u7F51"
            });
        }
        renderFooter() {
            return (0, $kKW7D.jsxs)("div", {
                class: "modal-footer",
                children: [
                    (0, $kKW7D.jsx)("button", {
                        type: "button",
                        class: "btn btn-secondary cancel",
                        children: "\u53D6\u6D88"
                    }),
                    (0, $kKW7D.jsx)("button", {
                        type: "button",
                        class: "btn btn-primary confirm",
                        children: "\u786E\u8BA4"
                    })
                ]
            });
        }
        openFormModal(modal, onConfirm) {
            const form = modal.querySelector("form");
            const confirmBtn = modal.querySelector("button.confirm");
            const cancelBtn = modal.querySelector("button.cancel");
            const handleSubmit = async ()=>{
                if (!form.reportValidity()) return;
                await onConfirm(new FormData(form));
                modal.close();
            };
            form.onsubmit = (e)=>{
                e.preventDefault();
                handleSubmit();
            };
            cancelBtn.onclick = ()=>{
                modal.close();
            };
            confirmBtn.onclick = handleSubmit;
            modal.showModal();
        }
        async updateGreet() {
            const migrate = await this.profileService.checkMigration();
            if (migrate) await migrate();
            const profile = await this.profileService.getProfile();
            this.greet.set(profile);
        }
    };
    return ProfilePage = _classThis;
})();


const $767c83640cdd2c80$export$95a9d24526ff8508 = {
    path: "/profile",
    title: "\u5B58\u6863",
    setup () {
        return new (0, $cc459204e1dc4f9f$export$120c0e7b1bef3ec7)();
    }
};



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $hlIIF = parcelRequire("hlIIF");

var $04CUQ = parcelRequire("04CUQ");
let $1068ab719e52fa64$export$6f093cfa640b7166 = ".input{max-width:7rem}.result-item{box-sizing:border-box}.cover-container{border:8px solid var(--difficulty);cursor:pointer}.cover-container img.cover{width:64px;height:64px}.charts{display:flex;flex-wrap:wrap;gap:1rem}";
const $1068ab719e52fa64$export$995990c5c04c46f0 = (0, $04CUQ.create)($1068ab719e52fa64$export$6f093cfa640b7166, "file:///src/view/components/chart-query/style.css.js");



var $7Cv7B = parcelRequire("7Cv7B");

var $jrD1x = parcelRequire("jrD1x");

var $ezVt6 = parcelRequire("ezVt6");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $0db89d6badc256c2$export$6f093cfa640b7166 = ".cover-layout{display:flex;justify-content:center}.cover-container{view-transition-name:song-cover;border:8px solid var(--difficulty)}.cover{width:128px;height:128px}";
const $0db89d6badc256c2$export$995990c5c04c46f0 = (0, $04CUQ.create)($0db89d6badc256c2$export$6f093cfa640b7166, "file:///src/view/components/chart-info/style.css.js");



var $hlIIF = parcelRequire("hlIIF");

var $5vq1D = parcelRequire("5vq1D");

var $04CUQ = parcelRequire("04CUQ");
const $32085fb992a21222$export$52302a018c5a648 = ({ chart: chart, song: song, chartService: chartService })=>{
    const container = (0, $5vq1D.element)("div");
    const shadow = container.attachShadow({
        mode: "open"
    });
    (0, $04CUQ.addSheet)([
        (0, $hlIIF.bootstrap),
        (0, $0db89d6badc256c2$export$995990c5c04c46f0)
    ], shadow);
    (0, $5vq1D.mount)((0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
        children: [
            (0, $kKW7D.jsx)("div", {
                class: "cover-layout",
                children: (0, $kKW7D.jsx)("div", {
                    class: "cover-container",
                    children: (0, $kKW7D.jsx)("img", {
                        class: "cover",
                        src: chartService.getCover(chart, song)
                    })
                })
            }),
            (0, $kKW7D.jsx)("div", {
                class: "row my-3",
                children: (0, $kKW7D.jsxs)("div", {
                    class: "col",
                    children: [
                        (0, $kKW7D.jsxs)("div", {
                            children: [
                                "\u540D\u79F0\uFF1A",
                                (0, $kKW7D.jsx)("span", {
                                    class: "name",
                                    children: chartService.getName(chart, song)
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            children: [
                                "\u7B49\u7EA7\uFF1A",
                                (0, $kKW7D.jsxs)("span", {
                                    class: "level",
                                    children: [
                                        chart.difficulty,
                                        " ",
                                        `${chart.level}${chart.plus ? "+" : ""}`
                                    ]
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            children: [
                                "\u5B9A\u6570\uFF1A",
                                (0, $kKW7D.jsx)("span", {
                                    class: "constant",
                                    children: chart.constant.toFixed(1)
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            children: [
                                "\u66F2\u5305\uFF1A",
                                (0, $kKW7D.jsx)("span", {
                                    class: "pack",
                                    children: song.pack
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            children: [
                                "bpm\uFF1A",
                                (0, $kKW7D.jsx)("span", {
                                    class: "bpm",
                                    children: chartService.getBPM(chart, song)
                                })
                            ]
                        }),
                        (0, $kKW7D.jsxs)("div", {
                            children: [
                                "note\u6570\uFF1A",
                                (0, $kKW7D.jsx)("span", {
                                    class: "notes",
                                    children: chart.note
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }), shadow);
    return (0, $kKW7D.jsx)("div", {
        ref: container,
        "var:difficulty": `var(--${chart.difficulty})`
    });
};



var $5vq1D = parcelRequire("5vq1D");

var $5vq1D = parcelRequire("5vq1D");

const $a2e9ac3bdc37a83a$export$e1d48f3e39c93d91 = (callback, document = window.document)=>{
    if (document.startViewTransition) return document.startViewTransition(callback);
    else {
        const finished = (0, $68369ce0d0f9197f$export$2a24d29abe187dc4)();
        const ready = (0, $68369ce0d0f9197f$export$2a24d29abe187dc4)();
        const updated = (0, $68369ce0d0f9197f$export$2a24d29abe187dc4)();
        queueMicrotask(async ()=>{
            try {
                await callback();
                updated.done();
                ready.done();
                finished.done();
            } catch (error) {
                updated.abort(error);
                ready.abort(error);
                finished.abort(error);
            }
        });
        return {
            finished: finished.promise,
            ready: ready.promise,
            updateCallbackDone: updated.promise,
            skipTransition () {
                const message = new DOMException("Transition was skipped");
                ready.abort(message);
                updated.done();
                finished.done();
            }
        };
    }
};
const $a2e9ac3bdc37a83a$var$vtn = "viewTransitionName";
class $a2e9ac3bdc37a83a$export$879d473de997b32f {
    #transitionName;
    #options;
    #hasTransitionName;
    constructor(options){
        this.#hasTransitionName = !!options.name;
        this.#transitionName = options?.name ?? `transition-pair-${crypto.randomUUID()}`;
        this.#options = options;
    }
    get transitionName() {
        return this.#transitionName;
    }
    async startViewTransition() {
        const { main: main, show: show } = this.#options;
        const mainRestore = this.#touch(main);
        const document = main.ownerDocument;
        const hideFuture = (0, $68369ce0d0f9197f$export$2a24d29abe187dc4)();
        const vt = $a2e9ac3bdc37a83a$export$e1d48f3e39c93d91(async ()=>{
            this.#fade(main);
            const hideInTransition = async (hide)=>{
                let shadowRestore;
                if (shadow) shadowRestore = this.#touch(shadow);
                try {
                    const vt2 = $a2e9ac3bdc37a83a$export$e1d48f3e39c93d91(async ()=>{
                        if (shadow) this.#fade(shadow);
                        this.#recover(main, mainRestore);
                        this.#show(main);
                        await hide();
                    }, document);
                    await vt2.updateCallbackDone;
                    await vt2.ready;
                    await vt2.finished;
                    hideFuture.done();
                } catch (error) {
                    hideFuture.abort(error);
                } finally{
                    this.#recover(main, mainRestore);
                    if (shadow && shadowRestore) this.#recover(shadow, shadowRestore);
                }
            };
            const shadow = await show(hideInTransition);
            if (shadow) this.#show(shadow);
            else if (!this.#hasTransitionName) {
                vt.skipTransition();
                throw new Error("Transition Toggle: options.show() should return a shadow element.");
            }
        }, document);
        await vt.updateCallbackDone;
        await vt.ready;
        await vt.finished;
        return hideFuture;
    }
    #touch(main) {
        const visibility = main.style.visibility;
        const name = main.style[$a2e9ac3bdc37a83a$var$vtn];
        (0, $5vq1D.style)(main, $a2e9ac3bdc37a83a$var$vtn, this.#transitionName);
        return {
            visibility: visibility,
            [$a2e9ac3bdc37a83a$var$vtn]: name
        };
    }
    #fade(main) {
        (0, $5vq1D.style)(main, $a2e9ac3bdc37a83a$var$vtn, "none");
        (0, $5vq1D.style)(main, "visibility", "hidden");
    }
    #show(shadow) {
        (0, $5vq1D.style)(shadow, $a2e9ac3bdc37a83a$var$vtn, this.transitionName);
    }
    #recover(main, restore) {
        Object.assign(main.style, restore);
    }
}



let $277c474b26e7cb8e$export$dfa881428dd91f30 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "chart-query",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $1068ab719e52fa64$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _chartService_decorators;
    let _chartService_initializers = [];
    let _router_decorators;
    let _router_initializers = [];
    var ChartQuery = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _chartService_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _router_decorators = [
                (0, $jrD1x.Inject)((0, $ec960e6aea3a7548$export$fbfcc1f2535c2ebb))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _chartService_decorators, {
                kind: "accessor",
                name: "chartService",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"chartService" in obj,
                    get: (obj)=>obj.chartService,
                    set: (obj, value)=>{
                        obj.chartService = value;
                    }
                },
                metadata: _metadata
            }, _chartService_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(this, null, _router_decorators, {
                kind: "accessor",
                name: "router",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"router" in obj,
                    get: (obj)=>obj.router,
                    set: (obj, value)=>{
                        obj.router = value;
                    }
                },
                metadata: _metadata
            }, _router_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            ChartQuery = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #chartService_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _chartService_initializers, void 0));
        get chartService() {
            return this.#chartService_accessor_storage;
        }
        set chartService(value) {
            this.#chartService_accessor_storage = value;
        }
        #router_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _router_initializers, void 0);
        get router() {
            return this.#router_accessor_storage;
        }
        set router(value) {
            this.#router_accessor_storage = value;
        }
        info = new (0, $ezVt6.FancyDialog)();
        min = (0, $5vq1D.signal)(NaN);
        max = (0, $5vq1D.signal)(NaN);
        results = (0, $5vq1D.signal)([]);
        render() {
            this.effect(()=>{
                const { max: _max, min: _min } = this.router.parseQuery();
                const max = +_max, min = +_min;
                if (min >= 0) {
                    this.min.set(min);
                    if (max >= min) {
                        this.max.set(max);
                        this.query();
                    }
                }
                return 0, $5vq1D.noop;
            });
            this.effect(()=>(0, $5vq1D.watch)(this.min, (min)=>{
                    // 包括NaN的情况
                    if (!(this.max() >= min)) this.max.set(min);
                }));
            return (0, $kKW7D.jsx)((0, $5vq1D.Future), {
                promise: this.chartService.getStatistics(),
                children: (stats)=>this._render(stats)
            });
        }
        _render({ maximumConstant: maximumConstant, minimumConstant: minimumConstant }) {
            const component = this;
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    this.info,
                    (0, $kKW7D.jsxs)("form", {
                        class: "chart-query-form m-3",
                        onSubmit: (e)=>{
                            e.preventDefault();
                            this.query();
                        },
                        children: [
                            (0, $kKW7D.jsxs)("div", {
                                class: "input-group my-3",
                                children: [
                                    (0, $kKW7D.jsx)("input", {
                                        name: "min-constant",
                                        type: "number",
                                        min: minimumConstant,
                                        max: maximumConstant,
                                        step: "0.1",
                                        placeholder: minimumConstant.toFixed(1),
                                        class: "form-control input",
                                        "h-model:number": this.min,
                                        "keypress-submit": true
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "input-group-text",
                                        children: "\u2264 \u5B9A\u6570 \u2264"
                                    }),
                                    (0, $kKW7D.jsx)("input", {
                                        name: "max-constant",
                                        type: "number",
                                        min: minimumConstant,
                                        max: maximumConstant,
                                        step: "0.1",
                                        placeholder: maximumConstant.toFixed(1),
                                        class: "form-control input",
                                        "h-model:number": this.max,
                                        "keypress-submit": true
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "my-3",
                                children: [
                                    (0, $kKW7D.jsx)("button", {
                                        type: "button",
                                        class: "btn btn-primary query me-2",
                                        onClick: this.query,
                                        children: "\u67E5\u8BE2"
                                    }),
                                    (0, $kKW7D.jsx)("button", {
                                        type: "button",
                                        class: "btn btn-secondary roll",
                                        onClick: this.roll,
                                        children: "roll\u4E00\u4E2A"
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "result-table",
                        children: (0, $kKW7D.jsx)((0, $5vq1D.For), {
                            of: this.results,
                            children: ([constant, results])=>{
                                return (0, $kKW7D.jsx)("div", {
                                    class: "p-3 border",
                                    children: (0, $kKW7D.jsxs)("div", {
                                        class: "result-item row",
                                        children: [
                                            (0, $kKW7D.jsx)("div", {
                                                class: "constant col-2",
                                                children: constant
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "charts col-10",
                                                children: results.map((result)=>(0, $kKW7D.jsx)("div", {
                                                        class: "cover-container",
                                                        "var:difficulty": `var(--${result.difficulty})`,
                                                        onClick: async function() {
                                                            const toggle = new (0, $a2e9ac3bdc37a83a$export$879d473de997b32f)({
                                                                name: "song-cover",
                                                                main: this,
                                                                show: async (hide)=>{
                                                                    component.info.showConfirm((0, $kKW7D.jsx)((0, $32085fb992a21222$export$52302a018c5a648), {
                                                                        chart: result.chart,
                                                                        song: result.song,
                                                                        chartService: component.chartService
                                                                    }), (done)=>(0, $kKW7D.jsx)("button", {
                                                                            class: "btn btn-primary",
                                                                            onClick: async ()=>{
                                                                                await hide(()=>{
                                                                                    done();
                                                                                });
                                                                            },
                                                                            children: "\u786E\u8BA4"
                                                                        }));
                                                                }
                                                            });
                                                            toggle.startViewTransition();
                                                        },
                                                        children: (0, $kKW7D.jsx)("img", {
                                                            class: "cover",
                                                            loading: "lazy",
                                                            src: result.cover
                                                        })
                                                    }))
                                            })
                                        ]
                                    })
                                });
                            }
                        })
                    })
                ]
            });
        }
        getFormModel = ()=>{
            const min = this.min(), max = this.max();
            return {
                min: isNaN(min) ? -Infinity : min,
                max: isNaN(max) ? Infinity : max
            };
        };
        query = async ()=>{
            const { min: min, max: max } = this.getFormModel();
            this.router.updateQuery({
                min: min.toFixed(1),
                max: max.toFixed(1)
            });
            const charts = await this.chartService.queryChartsByConstant(min, max);
            this.setResults(charts);
        };
        roll = async ()=>{
            const { min: min, max: max } = this.getFormModel();
            const chart = await this.chartService.roll(min, max);
            if (chart) this.setResults([
                chart
            ]);
            else this.setResults([]);
        };
        setResults = (charts)=>{
            const groups = charts.reduce((map, result)=>{
                (map[result.constant.toFixed(1)] ??= []).push(result);
                return map;
            }, {});
            this.results.set(Object.entries(groups));
        };
    };
    return ChartQuery = _classThis;
})();


const $3989d2e754d44be3$export$975cb8a5cb313424 = {
    path: "/query-charts",
    title: `\u{5B9A}\u{6570}\u{67E5}\u{8C31}`,
    setup () {
        return new (0, $277c474b26e7cb8e$export$dfa881428dd91f30)();
    }
};



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $c661dd1f7d696ebb$export$6f093cfa640b7166 = "main{margin:1em 1em 0 1em}.row>.col-auto{margin-bottom:1em}world-map-select{display:block;margin:1em 1em}input[type=number]{max-width:6em}select#fragment{min-width:8em}select#stamina{min-width:6em}.solutions{display:grid;grid-template-columns:1fr 1fr;gap:1em}.solution{border:1px solid var(--bs-border-color);padding:.5em;border-radius:var(--bs-border-radius)}#score-controller::part(modal-root){width:24em}";
const $c661dd1f7d696ebb$export$995990c5c04c46f0 = (0, $04CUQ.create)($c661dd1f7d696ebb$export$6f093cfa640b7166, "file:///src/view/components/world-map-calculator/style.css.js");



var $hlIIF = parcelRequire("hlIIF");

var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $cb68326f8fceafae$export$6f093cfa640b7166 = "";
const $cb68326f8fceafae$export$995990c5c04c46f0 = (0, $04CUQ.create)($cb68326f8fceafae$export$6f093cfa640b7166, "file:///src/view/components/world-map-select/style.css.js");



var $hlIIF = parcelRequire("hlIIF");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $8tPGq = parcelRequire("8tPGq");

var $5vq1D = parcelRequire("5vq1D");
let $4450caebcfc26d89$export$e9c2b9c50a56220f = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "world-map-select",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $cb68326f8fceafae$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _worldmode_decorators;
    let _worldmode_initializers = [];
    var WorldMapSelect = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _worldmode_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$WorldModeService))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _worldmode_decorators, {
                kind: "accessor",
                name: "worldmode",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"worldmode" in obj,
                    get: (obj)=>obj.worldmode,
                    set: (obj, value)=>{
                        obj.worldmode = value;
                    }
                },
                metadata: _metadata
            }, _worldmode_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            WorldMapSelect = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #worldmode_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _worldmode_initializers, void 0));
        get worldmode() {
            return this.#worldmode_accessor_storage;
        }
        set worldmode(value) {
            this.#worldmode_accessor_storage = value;
        }
        longtermMaps = (0, $5vq1D.signal)([]);
        eventMaps = (0, $5vq1D.signal)([]);
        selected = (0, $5vq1D.signal)(null);
        longtermSelected = (0, $5vq1D.signal)("");
        eventSelected = (0, $5vq1D.signal)("");
        showObsolete = (0, $5vq1D.signal)(false);
        #dataFetched = false;
        #initMapId = null;
        render() {
            this.fetchMapData();
            this.effect(()=>(0, $5vq1D.watch)(this.longtermSelected, (value)=>{
                    if (value) {
                        this.eventSelected.set("");
                        this.selected.set(this.longtermMaps().flatMap((c)=>c.maps).find((m)=>m.id === value) ?? null);
                    }
                }));
            this.effect(()=>(0, $5vq1D.watch)(this.eventSelected, (value)=>{
                    if (value) {
                        this.longtermSelected.set("");
                        this.selected.set(this.eventMaps().find((m)=>m.id === value) ?? null);
                    }
                }));
            const eventMaps = (0, $5vq1D.computed)(()=>{
                const showObsolete = this.showObsolete();
                const now = Date.now();
                return this.eventMaps().filter((e)=>{
                    if (showObsolete) return true;
                    const expire = e.expire;
                    if (!expire) return false;
                    return expire > now;
                });
            });
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    (0, $kKW7D.jsx)("div", {
                        class: "row",
                        children: (0, $kKW7D.jsx)("div", {
                            class: "col-auto",
                            children: (0, $kKW7D.jsxs)("div", {
                                class: "form-check",
                                children: [
                                    (0, $kKW7D.jsx)("input", {
                                        type: "checkbox",
                                        "h-model:boolean": this.showObsolete,
                                        name: "show-obsolete",
                                        id: "show-obsolete",
                                        class: "form-check-input"
                                    }),
                                    (0, $kKW7D.jsx)("label", {
                                        for: "show-obsolete",
                                        class: "form-check-label",
                                        children: "\u663E\u793A\u5DF2\u5173\u95ED\u7684\u6D3B\u52A8\u5730\u56FE"
                                    })
                                ]
                            })
                        })
                    }),
                    (0, $kKW7D.jsxs)("div", {
                        class: "row",
                        children: [
                            (0, $kKW7D.jsx)("div", {
                                class: "col",
                                children: (0, $kKW7D.jsxs)("select", {
                                    class: "form-select",
                                    name: "longterm",
                                    "h-model": this.longtermSelected,
                                    children: [
                                        (0, $kKW7D.jsx)("option", {
                                            value: "",
                                            children: "--\u5E38\u9A7B\u5730\u56FE--"
                                        }),
                                        (0, $kKW7D.jsx)((0, $5vq1D.For), {
                                            of: this.longtermMaps,
                                            children: (item)=>(0, $kKW7D.jsx)("optgroup", {
                                                    label: item.chapter,
                                                    children: item.maps.map((map)=>this.renderMapOption(map))
                                                })
                                        })
                                    ]
                                })
                            }),
                            (0, $kKW7D.jsx)("div", {
                                class: "col",
                                children: (0, $kKW7D.jsxs)("select", {
                                    class: "form-select",
                                    name: "event",
                                    "h-model": this.eventSelected,
                                    children: [
                                        (0, $kKW7D.jsx)("option", {
                                            value: "",
                                            children: "--\u6D3B\u52A8\u5730\u56FE--"
                                        }),
                                        (0, $kKW7D.jsx)((0, $5vq1D.For), {
                                            of: eventMaps,
                                            children: (item)=>this.renderMapOption(item)
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
        }
        async fetchMapData() {
            const [chapterData, maps] = await Promise.all([
                this.worldmode.getLongtermMaps(),
                this.worldmode.getEventMaps()
            ]);
            this.longtermMaps.set(chapterData);
            this.eventMaps.set(maps);
            this.#dataFetched = true;
            const mapId = this.#initMapId;
            if (mapId) this.updateSelectValue(chapterData, maps, mapId);
        }
        setMapId(mapId) {
            if (this.#dataFetched) queueMicrotask(()=>{
                this.updateSelectValue(this.longtermMaps(), this.eventMaps(), mapId);
            });
            else this.#initMapId = mapId;
        }
        renderMapOption(map) {
            const rewards = this.worldmode.getMapRewards(map);
            const buf = [];
            if ((0, $8tPGq.RewardType).Character in rewards) buf.push(`\u{642D}\u{6863} ${rewards[(0, $8tPGq.RewardType).Character].join("\uFF0C")}`);
            if ((0, $8tPGq.RewardType).Song in rewards) buf.push(`\u{66F2}\u{76EE} ${rewards[(0, $8tPGq.RewardType).Song].join("\uFF0C")}`);
            if ((0, $8tPGq.RewardType).Background in rewards) buf.push(`\u{80CC}\u{666F} ${rewards[(0, $8tPGq.RewardType).Background]}`);
            return (0, $kKW7D.jsxs)("option", {
                value: map.id,
                title: map.id,
                children: [
                    map.id,
                    buf.length ? ` (\u{5956}\u{52B1}\u{FF1A}${buf.join(" ")})` : ""
                ]
            });
        }
        updateSelectValue(longtermMaps, eventMaps, id) {
            if (!id) {
                this.clearSelectValues();
                return;
            }
            const longtermMap = longtermMaps.flatMap((c)=>c.maps).find((map)=>map.id === id);
            if (longtermMap) {
                this.longtermSelected.set(id);
                return;
            }
            const eventMap = eventMaps.find((map)=>map.id === id);
            if (eventMap) {
                this.eventSelected.set(id);
                return;
            }
            this.clearSelectValues();
        }
        clearSelectValues() {
            this.longtermSelected.set("");
            this.eventSelected.set("");
        }
    };
    return WorldMapSelect = _classThis;
})();



var $1I0Yl = parcelRequire("1I0Yl");

var $kKW7D = parcelRequire("kKW7D");

var $04CUQ = parcelRequire("04CUQ");
let $f2f979bf8a9c216e$export$6f093cfa640b7166 = ".panel-root{max-width:100%;overflow-x:auto;position:relative;--text-mask:linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.53125) 50%, transparent 100%)}.bg{min-width:600px;max-width:800px;width:100%;height:100%;background-size:cover;position:absolute;z-index:-1}.platforms{min-width:600px;max-width:800px;max-height:500px;overflow-y:auto;padding:32px;backdrop-filter:blur(1px)}.level{position:relative;height:4em}.platform-img{width:6em}.cell{position:absolute;cursor:pointer}.highlighted{animation-name:flash;animation-duration:3s;animation-timing-function:ease-out;animation-delay:0s}@keyframes flash{from{background-color:rgba(0,0,0,.53125)}}.text-banner{background-image:var(--text-mask)}.length{position:absolute;display:inline-block;bottom:0;left:0;width:100%;text-align:center;font-weight:600;font-size:.8em;color:#fff;text-shadow:#00000088}.banner{position:absolute;width:120px;top:0;left:0;transform:translate(-16%,-70%);cursor:help}.stamina-count{position:absolute;top:0;left:0;color:#fff;font-size:.8em;transform:translate(-30%,-100%)}.reward{position:absolute;left:0;top:-3em;width:6em;height:6em;transform-origin:50% 50%;transform:scale(.75)}.reward.item{top:-2em;left:1em;width:4em;height:4em}.item-info{position:absolute;left:0;font-size:.75em;top:2em;color:#fff;font-weight:600;width:8em;display:inline-block;text-align:center}svg.fragment{width:64px;position:absolute;left:1em;top:-2em}.fragment-count{position:absolute;text-align:center;color:#fff;left:0;top:-.8em;width:100%}.fragment-banner{position:absolute;left:0;font-size:.5em;top:.8em;color:#fff;font-weight:600;width:100%;display:inline-block;text-align:center;background-image:var(--text-mask)}";
const $f2f979bf8a9c216e$export$995990c5c04c46f0 = (0, $04CUQ.create)($f2f979bf8a9c216e$export$6f093cfa640b7166, "file:///src/view/components/world-map-normal/style.css.js");



var $hlIIF = parcelRequire("hlIIF");

var $8tPGq = parcelRequire("8tPGq");

var $ezVt6 = parcelRequire("ezVt6");

var $5vq1D = parcelRequire("5vq1D");

var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");
const $b9ab151478d0b2b7$var$specialPlatformImages = {
    [(0, $8tPGq.PlatformType).FixedSpeed]: {
        banner: "img/step_banner_speedrestrict.png",
        main: "img/step_tile_speedrestrict.png"
    },
    [(0, $8tPGq.PlatformType).Random]: {
        banner: "img/step_banner_random.png",
        main: "img/step_tile_random.png"
    },
    [(0, $8tPGq.PlatformType).Restriction]: {
        banner: "img/step_banner_restrict.png",
        main: "img/step_tile_restrict.png"
    },
    [(0, $8tPGq.PlatformType).Stamina]: {
        banner: "img/step_banner_plusstamina.png",
        main: "img/step_tile_plusstamina.png"
    }
};
const $b9ab151478d0b2b7$var$defaultPlatformImage = "img/step_tile.png";
const $b9ab151478d0b2b7$var$currentPlatformImage = "img/step_tile_current.png";
let $b9ab151478d0b2b7$export$5b1f0f1350df0abb = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "world-map-normal",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $f2f979bf8a9c216e$export$995990c5c04c46f0)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _resolver_decorators;
    let _resolver_initializers = [];
    let _gateway_decorators;
    let _gateway_initializers = [];
    var WorldMapNormal = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _resolver_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$AssetsResolver))
            ];
            _gateway_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$Gateway))
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
            (0, $1I0Yl.__esDecorate)(this, null, _gateway_decorators, {
                kind: "accessor",
                name: "gateway",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"gateway" in obj,
                    get: (obj)=>obj.gateway,
                    set: (obj, value)=>{
                        obj.gateway = value;
                    }
                },
                metadata: _metadata
            }, _gateway_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            WorldMapNormal = _classThis = _classDescriptor.value;
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
        #gateway_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _gateway_initializers, void 0);
        get gateway() {
            return this.#gateway_accessor_storage;
        }
        set gateway(value) {
            this.#gateway_accessor_storage = value;
        }
        platformsContainer = (0, $5vq1D.element)("div");
        bg = (0, $5vq1D.signal)("");
        bgY = (0, $5vq1D.signal)("");
        currentMap = (0, $5vq1D.signal)(null);
        platforms = (0, $5vq1D.signal)([]);
        currentProgress = (0, $5vq1D.signal)(null);
        #cleanupHighlight = null;
        render() {
            return (0, $kKW7D.jsxs)("div", {
                class: "panel-root",
                children: [
                    (0, $kKW7D.jsx)("div", {
                        class: "bg",
                        "style:background-image": this.bg,
                        "style:background-position-y": this.bgY
                    }),
                    (0, $kKW7D.jsx)("div", {
                        ref: this.platformsContainer,
                        class: "platforms",
                        onScroll: ()=>{
                            requestAnimationFrame(()=>{
                                const { scrollTop: scrollTop, scrollHeight: scrollHeight, clientHeight: clientHeight } = this.platformsContainer;
                                this.bgY.set(`${scrollTop / (scrollHeight - clientHeight) * 100}%`);
                            });
                        },
                        children: (0, $kKW7D.jsx)((0, $5vq1D.For), {
                            of: this.platforms,
                            children: ({ cell: cell, highlighted: highlighted, level: level, platform: platform })=>{
                                const offset = 5 - Math.abs((level - 1) % 10 - 5);
                                cell.style.left = `${(offset * 100 / 6).toFixed(6)}%`;
                                const { special: special, length: length, reward: reward } = platform;
                                return (0, $kKW7D.jsx)("div", {
                                    class: "level",
                                    children: (0, $kKW7D.jsxs)("div", {
                                        ref: cell,
                                        class: "cell",
                                        "data-level": level,
                                        "class:highlighted": highlighted,
                                        onClick: (e)=>{
                                            this.dispatchEvent(new CustomEvent("click-cell", {
                                                detail: level
                                            }));
                                        },
                                        children: [
                                            (0, $kKW7D.jsx)("img", {
                                                class: "platform-img",
                                                src: (0, $5vq1D.computed)(()=>{
                                                    const currentProgress = this.currentProgress();
                                                    if (currentProgress?.level === level) return this.assets($b9ab151478d0b2b7$var$currentPlatformImage);
                                                    return this.assets(special ? $b9ab151478d0b2b7$var$specialPlatformImages[special.type].main : $b9ab151478d0b2b7$var$defaultPlatformImage);
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("span", {
                                                class: "length text-banner",
                                                children: (0, $5vq1D.computed)(()=>{
                                                    const currentProgress = this.currentProgress();
                                                    if (currentProgress?.level === level) return `${currentProgress.progress.toFixed(1)}/${length}`;
                                                    return length;
                                                })
                                            }),
                                            special ? (0, $kKW7D.jsx)("img", {
                                                class: "banner",
                                                src: this.assets($b9ab151478d0b2b7$var$specialPlatformImages[special.type].banner),
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    const { type: type } = special;
                                                    const renderRange = (range, message)=>(0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                            children: [
                                                                message,
                                                                "\uFF1A",
                                                                (0, $kKW7D.jsx)("br", {}),
                                                                (typeof range === "string" ? [
                                                                    range
                                                                ] : range).map((song)=>(0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                                        children: [
                                                                            song,
                                                                            (0, $kKW7D.jsx)("br", {})
                                                                        ]
                                                                    }))
                                                            ]
                                                        });
                                                    switch(special.type){
                                                        case (0, $8tPGq.PlatformType).FixedSpeed:
                                                            (0, $ezVt6.alert)(`\u{9650}\u{901F} \u{2264} ${special.max}`);
                                                            break;
                                                        case (0, $8tPGq.PlatformType).Random:
                                                            (0, $ezVt6.alert)(renderRange(special.range, "\u968F\u673A\u8303\u56F4"));
                                                            break;
                                                        case (0, $8tPGq.PlatformType).Restriction:
                                                            (0, $ezVt6.alert)(renderRange(special.range, "\u9650\u5236\u8303\u56F4"));
                                                            break;
                                                        case (0, $8tPGq.PlatformType).Stamina:
                                                            break;
                                                        default:
                                                            throw new Error(`\u{672A}\u{77E5}\u{53F0}\u{9636}\u{7C7B}\u{578B}\u{FF1A} ${type}`);
                                                    }
                                                }
                                            }) : (0, $5vq1D.nil),
                                            special?.type === (0, $8tPGq.PlatformType).Stamina ? (0, $kKW7D.jsxs)("span", {
                                                class: "stamina-count",
                                                children: [
                                                    "+",
                                                    special.count
                                                ]
                                            }) : (0, $5vq1D.nil),
                                            (()=>{
                                                if (!reward) return 0, $5vq1D.nil;
                                                switch(reward.type){
                                                    case (0, $8tPGq.RewardType).Character:
                                                    case (0, $8tPGq.RewardType).Background:
                                                    case (0, $8tPGq.RewardType).Song:
                                                        return (0, $kKW7D.jsx)("img", {
                                                            class: "reward",
                                                            referrerpolicy: "no-referrer",
                                                            src: reward.img
                                                        });
                                                    case (0, $8tPGq.RewardType).Item:
                                                        if (reward.name === "\u6B8B\u7247") return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                            children: [
                                                                (0, $kKW7D.jsxs)("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 24 24",
                                                                    class: "fragment",
                                                                    children: [
                                                                        (0, $kKW7D.jsx)("rect", {
                                                                            x: "4",
                                                                            y: "4",
                                                                            width: "16",
                                                                            height: "16",
                                                                            transform: "rotate(45 12 12)",
                                                                            fill: "#164864"
                                                                        }),
                                                                        (0, $kKW7D.jsx)("rect", {
                                                                            x: "6",
                                                                            y: "6",
                                                                            rx: "1",
                                                                            ry: "1",
                                                                            width: "12",
                                                                            height: "12",
                                                                            transform: "rotate(45 12 12)",
                                                                            fill: "#0e2840",
                                                                            filter: "blur(1px)"
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, $kKW7D.jsx)("span", {
                                                                    class: "fragment-count",
                                                                    children: reward.count
                                                                }),
                                                                (0, $kKW7D.jsx)("span", {
                                                                    class: "fragment-banner",
                                                                    children: reward.name
                                                                })
                                                            ]
                                                        });
                                                        else return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                            children: [
                                                                (0, $kKW7D.jsx)("img", {
                                                                    src: reward.img,
                                                                    referrerpolicy: "no-referrer",
                                                                    class: "reward item"
                                                                }),
                                                                (0, $kKW7D.jsxs)("span", {
                                                                    class: "item-info text-banner",
                                                                    children: [
                                                                        reward.name,
                                                                        " \xd7 ",
                                                                        reward.count
                                                                    ]
                                                                })
                                                            ]
                                                        });
                                                }
                                            })()
                                        ]
                                    })
                                });
                            }
                        })
                    })
                ]
            });
        }
        setMap(map) {
            this.currentMap.set(map);
            const platforms = map.platforms;
            const platformsContext = Object.keys(platforms).sort((a, b)=>+b - +a).reduce((result, key)=>{
                const platform = platforms[+key];
                if (!platform) return result;
                const level = +key;
                result.push({
                    cell: (0, $5vq1D.element)("div"),
                    level: level,
                    highlighted: (0, $5vq1D.signal)(false),
                    platform: platform
                });
                return result;
            }, []);
            this.platforms.set(platformsContext);
            const chapter = +map.id[0] || 0;
            this.bg.set(`url(${JSON.stringify(this.assets(`img/world/${chapter}.jpg`))})`);
            this.platformsContainer.lastElementChild.scrollIntoView({
                behavior: "smooth"
            });
        }
        setCurrentPlatform(current) {
            this.currentProgress.set(current);
        }
        focusLevel(level) {
            const targetRef = this.findPlatform(level);
            if (targetRef) {
                targetRef.cell.scrollIntoView({
                    behavior: "smooth"
                });
                this.highlightLevel(level);
            }
        }
        highlightLevel(level) {
            const targetRef = this.findPlatform(level);
            if (targetRef) {
                this.#cleanupHighlight?.();
                this.#cleanupHighlight = ()=>{
                    this.#cleanupHighlight = null;
                    targetRef.highlighted.set(false);
                    cancelAnimationFrame(animationFrame);
                    clearTimeout(timer);
                };
                const timer = setTimeout(this.#cleanupHighlight, 3000);
                const animationFrame = requestAnimationFrame(()=>{
                    targetRef.highlighted.set(true);
                });
            }
        }
        findPlatform(level) {
            const platforms = this.platforms();
            return platforms[platforms.length - level];
        }
        assets(path) {
            return this.gateway.direct(this.resolver.resolve(path)).href;
        }
    };
    return WorldMapNormal = _classThis;
})();



var $jrD1x = parcelRequire("jrD1x");

var $7Cv7B = parcelRequire("7Cv7B");

var $ezVt6 = parcelRequire("ezVt6");

var $5vq1D = parcelRequire("5vq1D");




var $lF0nN = parcelRequire("lF0nN");
const $49c8398d94a5a1d3$var$NEW_MAP = "\u65B0\u7248\u68AF";
const $49c8398d94a5a1d3$var$LEGACY_MAP = "\u9057\u4EA7\u68AF";
let $49c8398d94a5a1d3$export$e4a7a8fbe02c383e = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
            tag: "world-mode-calculator",
            styles: [
                (0, $hlIIF.bootstrap),
                (0, $c661dd1f7d696ebb$export$995990c5c04c46f0),
                (0, $hlIIF.title)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = (0, $5vq1D.HyplateElement);
    let _instanceExtraInitializers = [];
    let _worldMode_decorators;
    let _worldMode_initializers = [];
    let _musicPlay_decorators;
    let _musicPlay_initializers = [];
    let _profile_decorators;
    let _profile_initializers = [];
    let _chart_decorators;
    let _chart_initializers = [];
    let _router_decorators;
    let _router_initializers = [];
    var WorldModeCalculator = class extends _classSuper {
        static{
            _classThis = this;
        }
        static{
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _worldMode_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$WorldModeService))
            ];
            _musicPlay_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$MusicPlayService))
            ];
            _profile_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ProfileService))
            ];
            _chart_decorators = [
                (0, $jrD1x.Inject)((0, $7Cv7B.$ChartService))
            ];
            _router_decorators = [
                (0, $jrD1x.Inject)((0, $ec960e6aea3a7548$export$fbfcc1f2535c2ebb))
            ];
            (0, $1I0Yl.__esDecorate)(this, null, _worldMode_decorators, {
                kind: "accessor",
                name: "worldMode",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"worldMode" in obj,
                    get: (obj)=>obj.worldMode,
                    set: (obj, value)=>{
                        obj.worldMode = value;
                    }
                },
                metadata: _metadata
            }, _worldMode_initializers, _instanceExtraInitializers);
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
            (0, $1I0Yl.__esDecorate)(this, null, _profile_decorators, {
                kind: "accessor",
                name: "profile",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"profile" in obj,
                    get: (obj)=>obj.profile,
                    set: (obj, value)=>{
                        obj.profile = value;
                    }
                },
                metadata: _metadata
            }, _profile_initializers, _instanceExtraInitializers);
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
            (0, $1I0Yl.__esDecorate)(this, null, _router_decorators, {
                kind: "accessor",
                name: "router",
                static: false,
                private: false,
                access: {
                    has: (obj)=>"router" in obj,
                    get: (obj)=>obj.router,
                    set: (obj, value)=>{
                        obj.router = value;
                    }
                },
                metadata: _metadata
            }, _router_initializers, _instanceExtraInitializers);
            (0, $1I0Yl.__esDecorate)(null, _classDescriptor = {
                value: _classThis
            }, _classDecorators, {
                kind: "class",
                name: _classThis.name,
                metadata: _metadata
            }, null, _classExtraInitializers);
            WorldModeCalculator = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        #worldMode_accessor_storage = ((0, $1I0Yl.__runInitializers)(this, _instanceExtraInitializers), (0, $1I0Yl.__runInitializers)(this, _worldMode_initializers, void 0));
        get worldMode() {
            return this.#worldMode_accessor_storage;
        }
        set worldMode(value) {
            this.#worldMode_accessor_storage = value;
        }
        #musicPlay_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _musicPlay_initializers, void 0);
        get musicPlay() {
            return this.#musicPlay_accessor_storage;
        }
        set musicPlay(value) {
            this.#musicPlay_accessor_storage = value;
        }
        #profile_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _profile_initializers, void 0);
        get profile() {
            return this.#profile_accessor_storage;
        }
        set profile(value) {
            this.#profile_accessor_storage = value;
        }
        #chart_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _chart_initializers, void 0);
        get chart() {
            return this.#chart_accessor_storage;
        }
        set chart(value) {
            this.#chart_accessor_storage = value;
        }
        #router_accessor_storage = (0, $1I0Yl.__runInitializers)(this, _router_initializers, void 0);
        get router() {
            return this.#router_accessor_storage;
        }
        set router(value) {
            this.#router_accessor_storage = value;
        }
        select = new (0, $4450caebcfc26d89$export$e9c2b9c50a56220f)();
        worldMap = new (0, $b9ab151478d0b2b7$export$5b1f0f1350df0abb)();
        characterPicker = new (0, $b48a0758e591e71d$export$96bf7e611ef56fdf)();
        scoreController = new (0, $ezVt6.FancyDialog)();
        jumpForm = (0, $5vq1D.element)("form");
        completed = (0, $5vq1D.signal)(NaN);
        rest = (0, $5vq1D.signal)(NaN);
        restMax = (0, $5vq1D.signal)(null);
        calcForm = (0, $5vq1D.element)("form");
        /**
         * 用于正算
         */ step = (0, $5vq1D.signal)(NaN);
        potential = (0, $5vq1D.signal)(NaN);
        /**
         * 用于正算
         */ worldType = (0, $5vq1D.signal)("new");
        stamina = (0, $5vq1D.signal)("1");
        fragment = (0, $5vq1D.signal)("1");
        memoryx4 = (0, $5vq1D.signal)(false);
        progress = (0, $5vq1D.signal)(NaN);
        inverseProgressForm = (0, $5vq1D.element)("form");
        /**
         * 用于逆算
         */ step2 = (0, $5vq1D.signal)(NaN);
        lowProgress = (0, $5vq1D.signal)(NaN);
        highProgress = (0, $5vq1D.signal)(NaN);
        /**
         * 用于逆算，默认为空，逆算不显示任何带加成的方案
         */ worldType2 = (0, $5vq1D.signal)("");
        solutions = (0, $5vq1D.signal)([]);
        render() {
            this.autorun(()=>{
                const selected = this.select.selected();
                this.resetCalculation();
                this.worldMap.setCurrentPlatform(null);
                if (selected) {
                    this.worldMap.setMap(selected);
                    const worldType = selected.legacy ? "legacy" : "new";
                    this.worldType.set(worldType);
                    this.worldType2.set(worldType);
                }
            });
            this.effect(()=>{
                const params = this.router.parseQuery();
                const { mapId: mapId } = params;
                this.select.setMapId(mapId || null);
                return 0, $5vq1D.noop;
            });
            this.autorun(()=>{
                this.storeParams();
            });
            this.effect(()=>(0, $5vq1D.listen)(this.worldMap)("click-cell", ({ detail: targetLevel })=>{
                    const completed = this.completed(), rest = this.rest();
                    const contexts = this.#getMapCurrentPlatformContexts();
                    if (isNaN(completed) || isNaN(rest)) {
                        const rest = (0, $5vq1D.signal)(NaN);
                        (0, $ezVt6.confirm)((0, $kKW7D.jsxs)("form", {
                            children: [
                                (0, $kKW7D.jsxs)("div", {
                                    children: [
                                        "\u8BBE\u7F6E\u5F53\u524D\u5730\u56FE\u8FDB\u5EA6\u4E3A\u7B2C",
                                        targetLevel,
                                        "\u4E2A\u53F0\u9636\uFF1A"
                                    ]
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    children: (0, $kKW7D.jsx)("label", {
                                        class: "col-form-label",
                                        children: "\u9636\u68AF\u5185\u5269\u4F59\u8FDB\u5EA6"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    children: (0, $kKW7D.jsx)("input", {
                                        class: "form-control",
                                        type: "number",
                                        min: 0.1,
                                        max: contexts[targetLevel - 1].platform.length,
                                        step: 0.1,
                                        "h-model:number": rest,
                                        "keypress-submit": true
                                    })
                                })
                            ]
                        })).then((confirmed)=>{
                            if (confirmed) {
                                this.completed.set(targetLevel - 1);
                                this.rest.set(rest());
                                this.jumpPlatform();
                            }
                        });
                        return;
                    }
                    if (targetLevel < completed + 1) {
                        (0, $ezVt6.alert)("\u6B64\u683C\u5DF2\u5B8C\u6210\uFF01");
                        return;
                    }
                    const currentProgress = this.worldMap.currentProgress();
                    if (!currentProgress) {
                        (0, $ezVt6.alert)("\u672A\u786E\u8BA4\u8BBE\u7F6E\u8FDB\u5EA6");
                        return;
                    }
                    const [low, high] = this.worldMode.computeProgressRange(this.worldMap.currentMap(), currentProgress, targetLevel);
                    this.lowProgress.set(low);
                    this.highProgress.set(high);
                    this.inverseProgress();
                }));
            this.effect(()=>(0, $5vq1D.listen)(this.calcForm)("change", this.calculateProgress));
            this.effect(()=>(0, $5vq1D.listen)(this.inverseProgressForm)("change", this.inverseProgress));
            return (0, $kKW7D.jsx)((0, $5vq1D.Future), {
                promise: this.musicPlay.getStatistics(),
                children: (stats)=>this._render(stats.maximumSinglePotential)
            });
        }
        _render(maximumSinglePotential) {
            const isNotLegacy = (0, $5vq1D.computed)(()=>this.worldType() !== "legacy");
            const isNotNew = (0, $5vq1D.computed)(()=>this.worldType() !== "new");
            return (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                children: [
                    this.characterPicker,
                    (0, $kKW7D.jsx)("fancy-dialog", {
                        ref: this.scoreController,
                        id: "score-controller"
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "title mx-3",
                        children: "\u9009\u62E9\u5730\u56FE"
                    }),
                    this.select,
                    this.worldMap,
                    (0, $kKW7D.jsx)("div", {
                        class: "title mx-3",
                        children: "\u8BBE\u7F6E\u5730\u56FE\u5F53\u524D\u8FDB\u5EA6"
                    }),
                    (0, $kKW7D.jsx)("form", {
                        ref: this.jumpForm,
                        id: "jump-platform",
                        class: "mx-3",
                        children: (0, $kKW7D.jsxs)("div", {
                            class: "row",
                            children: [
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "complete",
                                        class: "col-form-label",
                                        children: "\u5DF2\u5B8C\u6210\u9636\u68AF\u6570"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)("input", {
                                        type: "number",
                                        "h-model:number": this.completed,
                                        name: "complete",
                                        step: "1",
                                        min: "0",
                                        class: "form-control",
                                        required: true
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)("label", {
                                        for: "progress",
                                        class: "col-form-label",
                                        children: "\u9636\u68AF\u5185\u5269\u4F59\u8FDB\u5EA6"
                                    })
                                }),
                                (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)("input", {
                                        type: "number",
                                        "h-model:number": this.rest,
                                        name: "progress",
                                        step: "0.1",
                                        min: "0",
                                        max: this.restMax,
                                        class: "form-control",
                                        required: true
                                    })
                                }),
                                (0, $kKW7D.jsxs)("div", {
                                    class: "col-auto",
                                    children: [
                                        (0, $kKW7D.jsx)("button", {
                                            type: "button",
                                            name: "jump",
                                            class: "btn btn-primary mx-1",
                                            onClick: this.jumpPlatform,
                                            children: "\u8BBE\u4E3A\u5F53\u524D"
                                        }),
                                        (0, $kKW7D.jsx)("button", {
                                            type: "button",
                                            name: "focus",
                                            class: "btn btn-secondary mx-1",
                                            onClick: this.focusCurrent,
                                            children: "\u8DF3\u8F6C\u5F53\u524D"
                                        }),
                                        (0, $kKW7D.jsx)("button", {
                                            type: "button",
                                            name: "reset",
                                            class: "btn btn-danger mx-1",
                                            onClick: this.restCurrentProgress,
                                            children: "\u6E05\u7A7A"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                        children: ()=>{
                            const currentProgress = this.worldMap.currentProgress();
                            const currentMap = this.worldMap.currentMap();
                            if (!currentMap) return 0, $5vq1D.nil;
                            const { nextReward: nextReward, total: total } = this.worldMode.computeRemainingProgress(currentMap, this.#getCalcProgress(currentMap, currentProgress));
                            return (0, $kKW7D.jsx)("div", {
                                class: "mx-3",
                                children: (0, $kKW7D.jsx)("div", {
                                    class: "row",
                                    children: (0, $kKW7D.jsxs)("div", {
                                        class: "col-auto",
                                        children: [
                                            nextReward ? (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                children: [
                                                    this.#renderHint(currentProgress),
                                                    "\u8DDD\u79BB\u4E0B\u4E2A\u4E3B\u8981\u5956\u52B1",
                                                    (0, $kKW7D.jsx)("img", {
                                                        src: nextReward.img,
                                                        width: "32",
                                                        height: "32"
                                                    }),
                                                    "\u8FD8\u5269",
                                                    nextReward.remaining.distance,
                                                    "\u8FDB\u5EA6\uFF0C"
                                                ]
                                            }) : (0, $5vq1D.nil),
                                            "\u8DDD\u79BB\u722C\u5B8C\u8FD8\u5269",
                                            total.distance,
                                            "\u8FDB\u5EA6\u3002"
                                        ]
                                    })
                                })
                            });
                        }
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "title mx-3",
                        children: "\u6B63\u7B97\u6B65\u6570\uFF08\u53EF\u8BA1\u7B97\u6253\u6B4C\u6B21\u6570\uFF09"
                    }),
                    (0, $kKW7D.jsxs)("form", {
                        ref: this.calcForm,
                        id: "calc-progress",
                        name: "calc",
                        class: "mx-3",
                        children: [
                            (0, $kKW7D.jsxs)("div", {
                                class: "row",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "step",
                                            class: "col-form-label",
                                            children: "\u89D2\u8272Step"
                                        })
                                    }),
                                    (0, $b48a0758e591e71d$export$f62dc987f4ca74a)(this.characterPicker, this.step, "step"),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            for: "potential",
                                            class: "col-form-label",
                                            children: "\u7ED3\u7B97\u5355\u66F2ptt"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.potential,
                                            name: "potential",
                                            step: "any",
                                            id: "potential",
                                            min: "0",
                                            max: maximumSinglePotential,
                                            class: "form-control",
                                            required: true
                                        })
                                    }),
                                    (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                                        children: ()=>{
                                            const potential = this.potential();
                                            if (isNaN(potential)) return 0, $5vq1D.nil;
                                            const playResult = this.worldMode.computePlayResult(potential);
                                            return (0, $kKW7D.jsxs)("div", {
                                                class: "col-auto col-form-label",
                                                children: [
                                                    "\u6E38\u73A9\u7ED3\u679C\uFF1A",
                                                    (0, $lF0nN.truncate)(playResult, 1),
                                                    "\uFF08",
                                                    playResult,
                                                    "\uFF09"
                                                ]
                                            });
                                        }
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsx)("div", {
                                class: "row",
                                children: (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: "\u4E16\u754C\u7C7B\u578B"
                                })
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "input-group",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "input-group-text",
                                        children: (0, $kKW7D.jsxs)("div", {
                                            class: "form-check",
                                            children: [
                                                (0, $kKW7D.jsx)("input", {
                                                    type: "radio",
                                                    class: "form-check-input",
                                                    id: "new-world",
                                                    value: "new",
                                                    "h-model": this.worldType
                                                }),
                                                (0, $kKW7D.jsx)("label", {
                                                    class: "form-check-label",
                                                    for: "new-world",
                                                    children: $49c8398d94a5a1d3$var$NEW_MAP
                                                })
                                            ]
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "input-group-text",
                                        children: (0, $kKW7D.jsxs)("div", {
                                            class: "form-check",
                                            children: [
                                                (0, $kKW7D.jsx)("input", {
                                                    type: "checkbox",
                                                    "h-model:boolean": this.memoryx4,
                                                    disabled: isNotNew,
                                                    name: "memory-x4",
                                                    id: "memory-x4",
                                                    class: "form-check-input"
                                                }),
                                                (0, $kKW7D.jsx)("label", {
                                                    for: "memory-x4",
                                                    class: "form-check-label",
                                                    children: "\u6E90\u97F5\u5F3A\u5316 (x4)"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "input-group my-3",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "input-group-text",
                                        children: (0, $kKW7D.jsxs)("div", {
                                            class: "form-check",
                                            children: [
                                                (0, $kKW7D.jsx)("input", {
                                                    type: "radio",
                                                    class: "form-check-input",
                                                    id: "legacy-world",
                                                    value: "legacy",
                                                    "h-model": this.worldType
                                                }),
                                                (0, $kKW7D.jsx)("label", {
                                                    class: "form-check-label",
                                                    for: "legacy-world",
                                                    children: $49c8398d94a5a1d3$var$LEGACY_MAP
                                                })
                                            ]
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("label", {
                                        for: "fragment",
                                        class: "input-group-text",
                                        children: "\u6B8B\u7247\u52A0\u6210"
                                    }),
                                    (0, $kKW7D.jsxs)("select", {
                                        "h-model": this.fragment,
                                        disabled: isNotLegacy,
                                        name: "fragment",
                                        id: "fragment",
                                        class: "form-select",
                                        children: [
                                            (0, $kKW7D.jsx)("option", {
                                                value: "1",
                                                children: "\u65E0"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "1.1",
                                                children: "100 (x1.1)"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "1.25",
                                                children: "250 (x1.25)"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "1.5",
                                                children: "500 (x1.5)"
                                            })
                                        ]
                                    }),
                                    (0, $kKW7D.jsx)("label", {
                                        for: "stamina",
                                        class: "input-group-text",
                                        children: "\u6D88\u8017\u4F53\u529B"
                                    }),
                                    (0, $kKW7D.jsxs)("select", {
                                        "h-model": this.stamina,
                                        disabled: isNotLegacy,
                                        name: "stamina",
                                        id: "stamina",
                                        class: "form-select",
                                        children: [
                                            (0, $kKW7D.jsx)("option", {
                                                value: "1",
                                                children: "1"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "2",
                                                children: "2"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "4",
                                                children: "4"
                                            }),
                                            (0, $kKW7D.jsx)("option", {
                                                value: "6",
                                                children: "6"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsxs)("span", {
                                            class: "calc-result",
                                            children: [
                                                "\u8FDB\u5EA6\uFF1A",
                                                (0, $5vq1D.computed)(()=>{
                                                    const progress = this.progress();
                                                    if (isNaN(progress)) return "-";
                                                    return `${(0, $lF0nN.truncate)(progress, 1)}\u{FF08}${progress}\u{FF09}`;
                                                })
                                            ]
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("button", {
                                            type: "button",
                                            name: "calc",
                                            class: "btn btn-primary",
                                            onClick: this.focusProgressResult,
                                            disabled: (0, $5vq1D.computed)(()=>isNaN(this.progress()) || !this.worldMap.currentProgress()),
                                            children: "\u67E5\u770B\u7ED3\u679C\u683C\u5B50"
                                        })
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                                children: ()=>{
                                    const progress = this.progress();
                                    const currentProgress = this.worldMap.currentProgress();
                                    const currentMap = this.worldMap.currentMap();
                                    if (isNaN(progress) || !currentMap) return 0, $5vq1D.nil;
                                    const { nextReward: nextReward, total: total } = this.worldMode.computeRemainingProgress(currentMap, this.#getCalcProgress(currentMap, currentProgress));
                                    return (0, $kKW7D.jsx)("div", {
                                        class: "row",
                                        children: (0, $kKW7D.jsxs)("div", {
                                            class: "col-auto",
                                            children: [
                                                this.#renderHint(currentProgress),
                                                "\u4EE5\u6B64\u8FDB\u5EA6\u7ED3\u7B97\uFF0C",
                                                nextReward ? (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                    children: [
                                                        "\u5230\u4E0B\u4E2A\u4E3B\u8981\u5956\u52B1",
                                                        (0, $kKW7D.jsx)("img", {
                                                            src: nextReward.img,
                                                            width: "32",
                                                            height: "32"
                                                        }),
                                                        "\u8FD8\u9700\u8981\u6253",
                                                        Math.ceil(nextReward.remaining.distance / progress),
                                                        "\u6B21\uFF0C"
                                                    ]
                                                }) : (0, $5vq1D.nil),
                                                "\u722C\u5B8C\u8FD8\u9700\u8981\u6253\u6B4C",
                                                Math.ceil(total.distance / progress),
                                                "\u6B21\u3002"
                                            ]
                                        })
                                    });
                                }
                            })
                        ]
                    }),
                    (0, $kKW7D.jsx)("div", {
                        class: "title mx-3",
                        children: "\u9006\u7B97\u6F5C\u529B\u503C\uFF08\u63A7\u5206\u7CBE\u51C6\u964D\u843D\uFF09"
                    }),
                    (0, $kKW7D.jsxs)("form", {
                        ref: this.inverseProgressForm,
                        id: "anti-progress",
                        class: "mx-3",
                        children: [
                            (0, $kKW7D.jsxs)("div", {
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "row",
                                        children: (0, $kKW7D.jsx)("div", {
                                            class: "col-auto",
                                            children: "\u5730\u56FE\u7C7B\u578B"
                                        })
                                    }),
                                    (0, $kKW7D.jsxs)("div", {
                                        class: "row",
                                        children: [
                                            (0, $kKW7D.jsx)("div", {
                                                class: "col-auto",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "form-check",
                                                    children: [
                                                        (0, $kKW7D.jsx)("input", {
                                                            type: "radio",
                                                            class: "form-check-input",
                                                            id: "new-world-2",
                                                            value: "new",
                                                            "h-model": this.worldType2
                                                        }),
                                                        (0, $kKW7D.jsx)("label", {
                                                            class: "form-check-label",
                                                            for: "new-world-2",
                                                            children: $49c8398d94a5a1d3$var$NEW_MAP
                                                        })
                                                    ]
                                                })
                                            }),
                                            (0, $kKW7D.jsx)("div", {
                                                class: "col-auto",
                                                children: (0, $kKW7D.jsxs)("div", {
                                                    class: "form-check",
                                                    children: [
                                                        (0, $kKW7D.jsx)("input", {
                                                            type: "radio",
                                                            class: "form-check-input",
                                                            id: "legacy-world-2",
                                                            value: "legacy",
                                                            "h-model": this.worldType2
                                                        }),
                                                        (0, $kKW7D.jsx)("label", {
                                                            class: "form-check-label",
                                                            for: "legacy-world-2",
                                                            children: $49c8398d94a5a1d3$var$LEGACY_MAP
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            class: "col-form-label",
                                            for: "anti-progress-step",
                                            children: "\u89D2\u8272step"
                                        })
                                    }),
                                    (0, $b48a0758e591e71d$export$f62dc987f4ca74a)(this.characterPicker, this.step2, "step2")
                                ]
                            }),
                            (0, $kKW7D.jsxs)("div", {
                                class: "row",
                                children: [
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("label", {
                                            class: "col-form-label",
                                            children: "\u671F\u671B\u524D\u8FDB\u6B65\u6570"
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.lowProgress,
                                            name: "low",
                                            step: "0.1",
                                            min: "0",
                                            class: "form-control",
                                            required: true
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: "~"
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: (0, $kKW7D.jsx)("input", {
                                            type: "number",
                                            "h-model:number": this.highProgress,
                                            name: "high",
                                            step: "0.1",
                                            min: "0",
                                            class: "form-control",
                                            required: true
                                        })
                                    }),
                                    (0, $kKW7D.jsx)("div", {
                                        class: "col-auto",
                                        children: "\uFF08\u8BBE\u7F6E\u5F53\u524D\u5730\u56FE\u8FDB\u5EA6\u540E\uFF0C\u70B9\u51FB\u8981\u964D\u843D\u7684\u683C\u5B50\u53EF\u81EA\u52A8\u8BA1\u7B97\u671F\u671B\u524D\u8FDB\u6B65\u6570\uFF09"
                                    })
                                ]
                            }),
                            (0, $kKW7D.jsx)("div", {
                                class: "row",
                                children: (0, $kKW7D.jsx)("div", {
                                    class: "col-auto",
                                    children: (0, $kKW7D.jsx)((0, $5vq1D.AutoRender), {
                                        children: ()=>{
                                            const solutions = this.solutions();
                                            const worldType = this.worldType2();
                                            return (0, $kKW7D.jsx)("div", {
                                                class: "solutions",
                                                children: solutions.filter(({ world: world })=>!world || world.type === worldType).map(({ invalidMessage: invalidMessage, highPtt: highPtt, lowPtt: lowPtt, pmRange: pmRange, world: world })=>{
                                                    const bonus = world ? world.type === "legacy" ? (0, $kKW7D.jsxs)("div", {
                                                        children: [
                                                            "\u4F7F\u7528\u52A0\u6210\uFF1A",
                                                            world.fragment > 1 ? `\u{6B8B}\u{7247}x${world.fragment}` : "",
                                                            world.stamina > 1 ? `\u{4F53}\u{529B}x${world.stamina}` : ""
                                                        ]
                                                    }) : world.x4 ? (0, $kKW7D.jsx)("div", {
                                                        children: "\u4F7F\u7528\u6E90\u97F5\u5F3A\u5316x4"
                                                    }) : (0, $5vq1D.nil) : (0, $kKW7D.jsx)("div", {
                                                        children: "\u4E0D\u4F7F\u7528\u52A0\u6210"
                                                    });
                                                    return (0, $kKW7D.jsxs)("div", {
                                                        class: "solution",
                                                        children: [
                                                            bonus,
                                                            invalidMessage ? (0, $kKW7D.jsx)("div", {
                                                                children: invalidMessage
                                                            }) : (0, $kKW7D.jsxs)((0, $kKW7D.Fragment), {
                                                                children: [
                                                                    (0, $kKW7D.jsxs)("div", {
                                                                        children: [
                                                                            "\u7ED3\u7B97\u6F5C\u529B\u503C\u8303\u56F4\uFF1A",
                                                                            lowPtt.toFixed(4),
                                                                            " ~ ",
                                                                            highPtt.toFixed(4)
                                                                        ]
                                                                    }),
                                                                    pmRange ? (0, $kKW7D.jsxs)("div", {
                                                                        children: [
                                                                            "\u76F8\u5F53\u4E8EPM ",
                                                                            pmRange[0],
                                                                            " ~ ",
                                                                            pmRange[1],
                                                                            " ",
                                                                            (0, $kKW7D.jsx)("button", {
                                                                                type: "button",
                                                                                class: "btn btn-secondary",
                                                                                onClick: async ()=>{
                                                                                    const result = await this.chart.roll(...pmRange);
                                                                                    if (!result) return (0, $ezVt6.alert)("\u672A\u627E\u5230\u7ED9\u5B9A\u5B9A\u6570\u8303\u56F4\u5185\u7684\u8C31\u9762");
                                                                                    (0, $ezVt6.alert)((0, $kKW7D.jsx)((0, $32085fb992a21222$export$52302a018c5a648), {
                                                                                        chart: result.chart,
                                                                                        song: result.song,
                                                                                        chartService: this.chart
                                                                                    }));
                                                                                },
                                                                                children: "roll\u4E00\u4E2A"
                                                                            })
                                                                        ]
                                                                    }) : (0, $kKW7D.jsx)("button", {
                                                                        type: "button",
                                                                        class: "btn btn-secondary",
                                                                        onClick: async ()=>{
                                                                            const charts = await this.chart.queryChartsByConstant(lowPtt - 2, highPtt - 1);
                                                                            this.scoreController.showAlert(charts.map((chart)=>{
                                                                                const { constant: constant, cover: cover, difficulty: difficulty, title: title } = chart;
                                                                                const lowScore = Math.max(this.musicPlay.ex, this.musicPlay.inverseScore(lowPtt, constant));
                                                                                const highScore = this.musicPlay.inverseScore(highPtt, constant);
                                                                                const note = chart.chart.note;
                                                                                const maxFar = this.musicPlay.computeFar(lowScore, note, true);
                                                                                const minFar = this.musicPlay.computeFar(highScore, note, false);
                                                                                return (0, $kKW7D.jsxs)("div", {
                                                                                    class: "m-3",
                                                                                    slot: "content",
                                                                                    children: [
                                                                                        (0, $kKW7D.jsxs)("div", {
                                                                                            class: "row my-1",
                                                                                            children: [
                                                                                                (0, $kKW7D.jsx)("div", {
                                                                                                    class: "col-auto",
                                                                                                    children: (0, $kKW7D.jsx)("img", {
                                                                                                        src: cover,
                                                                                                        width: 80,
                                                                                                        height: 80,
                                                                                                        "style:border": `0.25em solid var(--${difficulty})`,
                                                                                                        title: title
                                                                                                    })
                                                                                                }),
                                                                                                (0, $kKW7D.jsxs)("div", {
                                                                                                    class: "col-auto",
                                                                                                    children: [
                                                                                                        (0, $kKW7D.jsx)("div", {
                                                                                                            class: "row",
                                                                                                            "style:height": "2em",
                                                                                                            children: title
                                                                                                        }),
                                                                                                        (0, $kKW7D.jsx)("div", {
                                                                                                            class: "row",
                                                                                                            "style:font-size": "0.5em",
                                                                                                            children: chart.song.pack
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        (0, $kKW7D.jsxs)("div", {
                                                                                            class: "row",
                                                                                            children: [
                                                                                                (0, $kKW7D.jsxs)("div", {
                                                                                                    class: "col-auto",
                                                                                                    children: [
                                                                                                        "\u5206\u6570 ",
                                                                                                        lowScore,
                                                                                                        " ~ ",
                                                                                                        highScore
                                                                                                    ]
                                                                                                }),
                                                                                                (0, $kKW7D.jsxs)("div", {
                                                                                                    class: "col-auto",
                                                                                                    children: [
                                                                                                        "Far ",
                                                                                                        minFar,
                                                                                                        " ~ ",
                                                                                                        maxFar
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                });
                                                                            }), true);
                                                                        },
                                                                        children: "\u63A7\u5206"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    });
                                                })
                                            });
                                        }
                                    })
                                })
                            })
                        ]
                    })
                ]
            });
        }
        storeParams() {
            const selected = this.select.selected();
            this.router.updateQuery({
                mapId: selected?.id || null
            });
        }
        resetCalculation() {
            this.completed.set(NaN);
            this.rest.set(NaN);
            this.lowProgress.set(NaN);
            this.highProgress.set(NaN);
            this.fragment.set("1");
            this.memoryx4.set(false);
        }
        restCurrentProgress = ()=>{
            this.completed.set(NaN);
            this.rest.set(NaN);
            this.worldMap.setCurrentPlatform(null);
        };
        jumpPlatform = ()=>{
            const completed = this.completed();
            const rest = this.rest();
            const platformLength = this.#getMapCurrentPlatformContexts()[completed]?.platform.length ?? null;
            this.restMax.set(platformLength);
            if (!this.jumpForm.reportValidity()) return;
            this.worldMap.setCurrentPlatform({
                level: completed + 1,
                progress: rest
            });
        };
        focusCurrent = ()=>{
            if (!this.jumpForm.reportValidity()) return;
            this.worldMap.focusLevel(this.completed() + 1);
        };
        calculateProgress = ()=>{
            if (!this.calcForm.reportValidity()) {
                this.progress.set(NaN);
                return;
            }
            const fragment = +this.fragment(), potential = this.potential(), step = this.step(), x4 = this.memoryx4(), worldType = this.worldType(), stamina = +this.stamina();
            try {
                const bonus = worldType === "new" ? {
                    type: "new",
                    x4: x4
                } : worldType === "legacy" ? {
                    type: "legacy",
                    fragment: fragment,
                    stamina: stamina
                } : null;
                const result = this.worldMode.computeProgress(step, potential, bonus);
                this.progress.set(result);
            } catch (error) {
                if (error instanceof Error) (0, $ezVt6.alert)(error.message);
                this.progress.set(NaN);
            }
        };
        focusProgressResult = ()=>{
            this.calculateProgress();
            const progress = this.progress();
            if (!progress) return;
            const reached = this.worldMap.currentProgress();
            if (!reached) return;
            const platforms = this.#getMapCurrentPlatformContexts();
            let reachedIndex = reached.level;
            if (progress < reached.progress) {
                this.worldMap.focusLevel(reachedIndex);
                return;
            }
            let context = platforms[reachedIndex];
            for(let rest = progress - reached.progress; context && rest > 0; reachedIndex++, context = platforms[reachedIndex])rest -= context.platform.length;
            if (!context) // 到顶了
            (0, $ezVt6.alert)("\u722C\u5230\u9876\u4E86");
            else this.worldMap.focusLevel(reachedIndex);
        };
        inverseProgress = async ()=>{
            if (!this.inverseProgressForm.reportValidity()) return;
            const step = this.step2();
            const low = this.lowProgress();
            const high = this.highProgress();
            this.solutions.set(await this.worldMode.inverseProgress(step, [
                low,
                high
            ]));
        };
        /**
         * 用索引level-1拿到
         */ #getMapCurrentPlatformContexts() {
            return [
                ...this.worldMap.platforms()
            ].reverse();
        }
        #renderHint(currentProgress) {
            if (currentProgress) return "";
            return "\u672A\u8BBE\u7F6E\u5730\u56FE\u5F53\u524D\u8FDB\u5EA6\u3002\u82E5\u4ECE\u5934\u5F00\u59CB\u722C\u68AF\uFF0C";
        }
        #getCalcProgress(worldMap, currentProgress) {
            return currentProgress ?? {
                level: 1,
                progress: worldMap.platforms[1].length
            };
        }
    };
    return WorldModeCalculator = _classThis;
})();


const $f8f4f5aa44029d8e$export$8798f8ccee19f5b0 = {
    cahce: true,
    path: "/world-mode",
    title: "\u4E16\u754C\u6A21\u5F0F",
    setup () {
        return new (0, $49c8398d94a5a1d3$export$e4a7a8fbe02c383e)();
    }
};


const $c61325fd88f058f6$export$66b32f6f30eb4b4 = [
    (0, $767c83640cdd2c80$export$95a9d24526ff8508),
    (0, $c9a8a84b4e7af08b$export$bd730a050abd519a),
    (0, $0d31b7b3b5ebfbb7$export$692344c62633741b),
    (0, $3989d2e754d44be3$export$975cb8a5cb313424),
    (0, $f8f4f5aa44029d8e$export$8798f8ccee19f5b0),
    (0, $d05589ce0f7a4dd8$export$733589d462f739b5),
    (0, $9175cb20fb11f55f$export$d0bfaf2fbb19a56f)
];



var $iS7qT = parcelRequire("iS7qT");

var $5vq1D = parcelRequire("5vq1D");

var $87X5s = parcelRequire("87X5s");

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");
let $d2889247005de13d$export$51b71fabf85da241 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$Gateway),
                (0, $7Cv7B.$AssetsCacheService)
            ],
            implements: (0, $7Cv7B.$AssetsService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AssetsServiceImpl = class {
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
            AssetsServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        gateway;
        cache;
        constructor(gateway, cache){
            this.gateway = gateway;
            this.cache = cache;
        }
        async getAssets(url, init) {
            const dist = await this.gateway.dynamicProxy(url);
            const imageCache = await this.cache.cachedGet(dist, init);
            return imageCache.blobURL;
        }
    };
    return AssetsServiceImpl = _classThis;
})();



var $gYX5w = parcelRequire("gYX5w");

var $clQL6 = parcelRequire("clQL6");

var $ltSqR = parcelRequire("ltSqR");

var $2H6kD = parcelRequire("2H6kD");

var $34Tyz = parcelRequire("34Tyz");

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $9aBed = parcelRequire("9aBed");

var $lF0nN = parcelRequire("lF0nN");

var $21erW = parcelRequire("21erW");

var $hyWAW = parcelRequire("hyWAW");
class $56aa9593920736c4$export$568bfe4ea19ebbae {
    name;
    constructor(name){
        this.name = name;
    }
    caches = "caches";
    getDB = (0, $21erW.once)(()=>this.#createDB());
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
    #createDB() {
        return (0, $9aBed.openDB)(this.name, 1, (_, request)=>{
            const db = request.result;
            db.createObjectStore(this.caches, {
                keyPath: "url"
            });
        });
    }
}
class $56aa9593920736c4$export$592c4c962106dd19 {
    dbContext;
    constructor(init){
        this.dbContext = typeof init === "string" ? new $56aa9593920736c4$export$568bfe4ea19ebbae(init) : init;
    }
    async fetch(input, init, expireTime) {
        const now = (0, $hyWAW.getNow)();
        const store = await this.#cacheStore();
        const url = $56aa9593920736c4$var$getURL(input);
        const queryRequest = store.get(url);
        const result = await (0, $9aBed.requestToPromise)(queryRequest);
        if (result && (!result.time || +result.time + (expireTime ?? Infinity) > +now)) {
            console.debug(`Found cached result for url: ${result.url}`);
            return new Response(result.blob);
        }
        const response = await fetch(url, init);
        const blob = await response.blob();
        const cache = {
            url: url,
            blob: blob,
            time: (0, $hyWAW.getNow)()
        };
        const saveRequest = (await this.#cacheStore("readwrite")).put(cache);
        const savedKey = await (0, $9aBed.requestToPromise)(saveRequest);
        if (savedKey) console.debug(`Cached request URL: ${saveRequest.result}`);
        return new Response(blob);
    }
    async invalidateCache(input) {
        const store = await this.#cacheStore("readwrite");
        const url = $56aa9593920736c4$var$getURL(input);
        const deleteRequest = store.delete(url);
        await (0, $9aBed.requestToPromise)(deleteRequest, {
            emitError: true
        });
    }
    async cacheUsage() {
        const query = (await this.#cacheStore()).getAll();
        const httpGetCaches = await (0, $9aBed.requestToPromise)(query, {
            emitError: true
        }) ?? [];
        const byteSize = (0, $lF0nN.sum)(httpGetCaches.map((cache)=>cache.blob.size));
        return byteSize;
    }
    async clear() {
        const store = await this.#cacheStore("readwrite");
        const request = store.clear();
        await (0, $9aBed.requestToPromise)(request, {
            emitError: true
        });
    }
    #cacheStore(mode) {
        return this.dbContext.objectStore(this.dbContext.caches, mode);
    }
}
const $56aa9593920736c4$export$2746626d5466c22d = async (oldName, to)=>{
    const databases = await indexedDB.databases?.() ?? [];
    const old = databases.find((d)=>d.name === oldName);
    if (!old) return;
    const oldClient = new $56aa9593920736c4$export$568bfe4ea19ebbae(oldName);
    const oldDB = await oldClient.getDB();
    await (0, $9aBed.moveData)({
        db: oldDB,
        store: oldClient.caches
    }, {
        db: await to.getDB(),
        store: to.caches
    });
    oldDB.close();
    await (0, $9aBed.requestToPromise)(indexedDB.deleteDatabase(oldName));
};
function $56aa9593920736c4$var$getURL(input) {
    return input instanceof URL ? input.href : input;
}




var $KQEBb = parcelRequire("KQEBb");
let $24e9d9eb28fd56ca$export$980272a5e13d6c38 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$Database)
            ],
            implements: (0, $7Cv7B.$AssetsCacheService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AssetsCacheServiceImpl = class {
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
            AssetsCacheServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        database;
        #cache = new (0, $KQEBb.MemoryCache)(this);
        #client;
        #migrated = (0, $68369ce0d0f9197f$export$2a24d29abe187dc4)();
        constructor(database){
            this.database = database;
            this.#client = new (0, $56aa9593920736c4$export$592c4c962106dd19)(database);
            this.#migrate();
        }
        key(input, init) {
            return input.toString();
        }
        async alloc(input, init) {
            const res = await this.#client.fetch(input, init);
            const blob = await res.blob();
            return {
                blob: blob,
                blobURL: URL.createObjectURL(blob)
            };
        }
        free(data) {
            URL.revokeObjectURL(data.blobURL);
        }
        async cachedGet(url, init) {
            const imageCache = await this.#cache.get(url, init);
            return imageCache;
        }
        cacheUsage() {
            return this.#client.cacheUsage();
        }
        async clearCache() {
            await this.#client.clear();
            await this.#cache.clear();
        }
        async #migrate() {
            await (0, $56aa9593920736c4$export$2746626d5466c22d)("assets-image-cache", this.database);
            this.#migrated.done();
        }
    };
    return AssetsCacheServiceImpl = _classThis;
})();



var $bmbM8 = parcelRequire("bmbM8");

var $gw2dg = parcelRequire("gw2dg");

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $9aBed = parcelRequire("9aBed");

var $6Y9qE = parcelRequire("6Y9qE");

var $ibL7y = parcelRequire("ibL7y");
let $6d762b28c409d1ee$export$860d84c01638359c = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$Database)
            ],
            implements: (0, $7Cv7B.$FileStorage)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var FileStorageServiceImpl = class {
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
            FileStorageServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        database;
        constructor(database){
            this.database = database;
        }
        createURL(site, path) {
            return new URL(`${(0, $6Y9qE.protocol)}//vfs/${site.origin}${(0, $ibL7y.trimSlash)(site.pathname)}/${path}`);
        }
        async upload(file, url) {
            const store = await this.database.objectStore(this.database.files, "readwrite");
            const uploadedFile = {
                blob: file,
                url: url.href
            };
            await (0, $9aBed.requestToPromise)(store.put(uploadedFile));
        }
        async list(url) {
            const store = await this.database.objectStore(this.database.files);
            const res = await (0, $9aBed.requestToPromise)(store.get((0, $9aBed.prefixWith)(url.href)));
            console.log(res);
            return [];
        }
        async read(url) {
            const store = await this.database.objectStore(this.database.files);
            const request = store.get(url.toString());
            const file = await (0, $9aBed.requestToPromise)(request);
            return file;
        }
    };
    return FileStorageServiceImpl = _classThis;
})();


document.adoptedStyleSheets = [
    (0, $hlIIF.bootstrap),
    (0, $hlIIF.theme),
    (0, $hlIIF.viewTransition),
    (0, $6gcx6.sheet)
];
const $5208b3b6f2ed2435$var$ioc = new (0, $87X5s.Container)();
$5208b3b6f2ed2435$var$ioc.register((0, $2H6kD.CharacterServiceImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $ltSqR.ArcaeaToolbeltDatabaseContext));
$5208b3b6f2ed2435$var$ioc.register((0, $clQL6.PreferenceServiceImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $24e9d9eb28fd56ca$export$980272a5e13d6c38));
$5208b3b6f2ed2435$var$ioc.register((0, $6d762b28c409d1ee$export$860d84c01638359c));
$5208b3b6f2ed2435$var$ioc.register((0, $34Tyz.ProxyGateway));
$5208b3b6f2ed2435$var$ioc.register((0, $bmbM8.CoreDataServiceImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $gw2dg.CoreDataProviderImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $gYX5w.AssetsResolverImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $d2889247005de13d$export$51b71fabf85da241));
$5208b3b6f2ed2435$var$ioc.register((0, $eJy3F.ChartServiceImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $I463m.MusicPlayServiceImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $gwbXp.ProfileServiceImpl));
$5208b3b6f2ed2435$var$ioc.register((0, $iS7qT.WorldModeServiceImpl));
const $5208b3b6f2ed2435$var$main = (0, $5vq1D.element)("main");
const $5208b3b6f2ed2435$var$router = new (0, $ec960e6aea3a7548$export$55185c17a0fcbe46)($5208b3b6f2ed2435$var$main, (0, $c61325fd88f058f6$export$66b32f6f30eb4b4), (0, $c61325fd88f058f6$export$66b32f6f30eb4b4)[0]);
$5208b3b6f2ed2435$var$ioc.add((0, $ec960e6aea3a7548$export$fbfcc1f2535c2ebb), $5208b3b6f2ed2435$var$router);
(0, $jrD1x.provide)(document.body, $5208b3b6f2ed2435$var$ioc);
document.body.append(new (0, $fd37c8a1dcf83583$export$ef8da11641c635de)(), $5208b3b6f2ed2435$var$main);




//# sourceMappingURL=index.a114c4df.js.map
