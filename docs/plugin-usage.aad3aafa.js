
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
parcelRegister("lrKVu", function(module, exports) {

$parcel$export(module.exports, "docsPage", () => $f9d0852ae440ef36$export$1156690283f89bd7);

var $4lE3h = parcelRequire("4lE3h");

var $dwcPv = parcelRequire("dwcPv");


const $f9d0852ae440ef36$export$1156690283f89bd7 = (content)=>{
    document.body.innerHTML = content;
    const refs = (0, $dwcPv.query)({
        tocMenu: "aside header",
        tocPanel: "div.toc-wrapper",
        toc: `ul#toc`
    })(document);
    const { toc: toc, tocMenu: tocMenu, tocPanel: tocPanel } = refs;
    const hideToc = ()=>{
        toc.classList.toggle("visible", false);
    };
    (0, $4lE3h.clickElsewhere)(tocPanel, ()=>{
        hideToc();
    });
    tocMenu.onclick = ()=>{
        toc.classList.toggle("visible");
    };
    toc.querySelectorAll("li > a[href]").forEach((link)=>{
        link.onclick = ()=>{
            hideToc();
        };
    });
    document.querySelectorAll("img").forEach((img)=>{
        img.onclick = ()=>{
            const isFullScreen = !!document.fullscreenElement;
            if (isFullScreen) document.exitFullscreen();
            else img.requestFullscreen({
                navigationUI: "show"
            });
        };
    });
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



var $lrKVu = parcelRequire("lrKVu");
var $552b552d17e32297$exports = {};
$552b552d17e32297$exports = "<div class=\"page\">\r\n  <div class=\"toc-wrapper\">\r\n    <aside class=\"toc-content\">\r\n      <header>目录</header>\r\n      <ul id=\"toc\">\r\n        <li>\r\n          <a href=\"#use-on-computer\"> 在电脑上使用 </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#use-on-mobile\"> 在手机上使用 </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#user-profile\">账号信息</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#query-b39\"> 查分功能 </a>\r\n        </li>\r\n      </ul>\r\n    </aside>\r\n  </div>\r\n  <main>\r\n    <h3 id=\"use-on-computer\">在电脑上使用</h3>\r\n    <p>\r\n      1. 使用<code>Chrome/Edge</code>浏览器打开\r\n      <a href=\"https://arcaea.lowiro.com/zh/\" target=\"_blank\">Arcaea官网</a>， 并登录账号。\r\n    </p>\r\n    <p>\r\n      其它的现代浏览器理论上也可以，但操作可能不同，也可能会有奇怪的bug。\r\n      <strong>目前，616给Web API好友榜查询添加了订阅的限制，仅订阅用户可用</strong>，使用此功能确保需要查b30的账号是好友或登录的账号即可。\r\n    </p>\r\n    <p>2. 打开浏览器的开发者工具，找到控制台，粘贴以下<code>JavaScript</code>代码，按 <kbd>Enter</kbd> 键执行。</p>\r\n    <pre>import(\"https://darrendanielday.github.io/arcaea-toolbelt/services/cross-site-script.js\");</pre>\r\n    <p>可通过快捷键 <kbd>F12</kbd> 打开开发者工具，也可通过在空白处<code>右键菜单</code> &gt; <code>检查</code>打开</p>\r\n    <div class=\"imgs\">\r\n      <img src=\"/arcaea-toolbelt-debug/friends.fadd5f53.png\" loading=\"lazy\">\r\n      <img src=\"/arcaea-toolbelt-debug/paste-code.77030ae9.png\" loading=\"lazy\">\r\n    </div>\r\n    <p>2.1 如果需要经常使用此脚本，可以安装<code>油猴插件</code>更方便地执行<code>JavaScript</code>脚本。</p>\r\n    <p>\r\n      官方插件商店地址：<br>\r\n      <code>Chrome</code>（有墙）：<br>\r\n      <a target=\"_blank\" href=\"https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo\">https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo</a>\r\n      <br>\r\n      <code>Edge</code>（没墙）：<br>\r\n      <a target=\"_blank\" href=\"https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN\">\r\n        https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN\r\n      </a>\r\n    </p>\r\n    <p>\r\n      关于油猴插件的下载与安装也可以参考：<a href=\"https://zhuanlan.zhihu.com/p/387251122\" target=\"_blank\">\r\n        https://zhuanlan.zhihu.com/p/387251122\r\n      </a>\r\n    </p>\r\n    <p>\r\n      下面是可用的油猴脚本代码（只在好友列表页可用）。在油猴脚本管理面板中新建一个脚本，用以下内容全部替换并保存即可：\r\n    </p>\r\n    <pre>\r\n// ==UserScript==\r\n// @name         Arcaea Toolbelt Plugin\r\n// @namespace    http://tampermonkey.net/\r\n// @version      0.1\r\n// @description  Arcaea Toolbelt 插件脚本\r\n// @author       DarrenDanielDay\r\n// @match        https://arcaea.lowiro.com/zh/profile/friends\r\n// @icon         https://www.google.com/s2/favicons?sz=64&domain=lowiro.com\r\n// @grant        none\r\n// ==/UserScript==\r\n\r\n(async () => {\r\n  await import(\"https://darrendanielday.github.io/arcaea-toolbelt/services/cross-site-script.js\");\r\n})();</pre>\r\n    <div class=\"imgs\">\r\n      <img loading=\"lazy\" src=\"/arcaea-toolbelt-debug/create-script.5efe47c4.png\">\r\n    </div>\r\n    <p>3. 执行脚本后，左下角会出现一个打开插件面板的悬浮按钮，点击按钮将会弹出类似下图的弹窗。关闭弹框后可通过 <kbd>Ctrl + B</kbd> 重新打开弹窗。</p>\r\n    <div class=\"imgs\">\r\n      <img loading=\"lazy\" src=\"/arcaea-toolbelt-debug/modal.e16b28c8.png\">\r\n    </div>\r\n    <h3 id=\"use-on-mobile\">在手机上使用</h3>\r\n    <p>参考这篇文章安装油猴插件：</p>\r\n    <p>\r\n      <a href=\"https://www.zhihu.com/question/411017015\" target=\"_blank\"> https://www.zhihu.com/question/411017015 </a>\r\n    </p>\r\n    <p>剩下的操作和<a href=\"#\">在电脑上使用</a>的方法一样。</p>\r\n    <h3 id=\"user-profile\">账号信息</h3>\r\n    <p>界面上会显示根据官方接口查询到的相关账号信息。可以通过<code>重新获取</code>按钮来重新获取数据（潜力值、搭档数据等）。</p>\r\n    <p>\r\n      点击可<code>查看搭档数据</code>按钮即可查看官方接口返回搭档的数据，相比静态数据（来源于中文wiki，只保留了整数），此数据用于世界模式的计算会更加精确。\r\n    </p>\r\n    <p>\r\n      点击<code>同步</code>按钮可将玩家信息数据（潜力值、搭档数据等）同步至本站同用户名的存档。若存档不存在，则会创建存档。\r\n    </p>\r\n    <div class=\"imgs\">\r\n      <img loading=\"lazy\" src=\"/arcaea-toolbelt-debug/character-info.c78e50ec.png\">\r\n    </div>\r\n    <h3 id=\"query-b39\">查分功能</h3>\r\n    <p>1. 选中需要查分的玩家（可多选），点击<code>开查</code>按钮进行查分。</p>\r\n    <p>\r\n      查询按谱面定数从高到低查询，直到当前定数的谱面PM也无法进入任何一个玩家当前的best\r\n      39后停止。通常来说查询所需总时间取决于被查的潜力值最低的玩家，最坏情况是查完所有谱面的好友榜，大约需要5分钟。\r\n    </p>\r\n    <p>\r\n      2. 显示查询完毕后，点击<code>同步</code>按钮即可将查分结果生成存档并导入到\r\n      <a href=\"https://darrendanielday.github.io/arcaea-toolbelt/\"> 主站 </a>。\r\n    </p>\r\n    <div class=\"imgs\">\r\n      <img loading=\"lazy\" src=\"/arcaea-toolbelt-debug/sync-ok.213c23b8.png\">\r\n    </div>\r\n    <p>\r\n      3. 在主站的\r\n      <code>存档</code>\r\n      页面选择玩家的存档后，切换到<code>b30</code>页面即可查看该玩家的查分结果\r\n    </p>\r\n    <p>图片中的结果是小号的，为了控分所以没打满30个谱。双击卡片可以全屏查看。</p>\r\n    <div class=\"imgs\">\r\n      <img loading=\"lazy\" src=\"/arcaea-toolbelt-debug/select-profile.2b74f100.png\">\r\n      <img loading=\"lazy\" src=\"/arcaea-toolbelt-debug/result.edeccb10.png\">\r\n    </div>\r\n  </main>\r\n</div>\r\n";


(0, $lrKVu.docsPage)((0, (/*@__PURE__*/$parcel$interopDefault($552b552d17e32297$exports))));


//# sourceMappingURL=plugin-usage.aad3aafa.js.map
