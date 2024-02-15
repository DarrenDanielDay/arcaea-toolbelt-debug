
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


var $lrKVu = parcelRequire("lrKVu");
var $5ce958c5d1034066$exports = {};
$5ce958c5d1034066$exports = "<div class=\"page\">\r\n  <div class=\"toc-wrapper\">\r\n    <aside class=\"toc-content\">\r\n      <header>目录</header>\r\n      <ul id=\"toc\">\r\n        <li>\r\n          <a href=\"#install-mumu\">1. 安装模拟器</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#install-arcaea\">2. 安装Arcaea</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#sync-profile\">3. 同步存档</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#root\">4. 开启Root权限</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#confirm-port\">5. 确认端口</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#exec\">6. 执行adb命令</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#tool\">7. 解析工具</a>\r\n        </li>\r\n      </ul>\r\n    </aside>\r\n  </div>\r\n  <main>\r\n    <p>本文介绍如何在Windows上使用MuMu模拟器获取Arcaea的本地存档<code>st3</code>文件。</p>\r\n    <h3 id=\"install-mumu\">1. 安装MuMu模拟器12</h3>\r\n    <p>\r\n      <a href=\"https://mumu.163.com/index.html\" target=\"_blank\">https://mumu.163.com/index.html</a>\r\n    </p>\r\n    <p>可以提前记一下安装目录，后面有用。</p>\r\n    <h3 id=\"install-arcaea\">2. 安装Arcaea</h3>\r\n    <p>官网：<a href=\"https://arcaea.lowiro.com/\" target=\"_blank\">https://arcaea.lowiro.com/</a></p>\r\n    <p>官网太慢可以试试第三方下载：<a href=\"https://616.sb/\">https://616.sb/</a></p>\r\n    <p>安装包文件下载完直接拖进模拟器即可自动安装。</p>\r\n    <h3 id=\"sync-profile\">3. 同步存档</h3>\r\n    <p>\r\n      模拟器上打开Arcaea，登录账号，同步云端的存档到模拟器上。记得提前在原设备上同步存档到云端，以及注意<strong>24小时内不要同时登录包括模拟器在内的三个以上设备</strong>。\r\n    </p>\r\n    <h3 id=\"root\">4. 开启模拟器的Root权限</h3>\r\n    <div class=\"imgs\">\r\n      <img src=\"/arcaea-toolbelt-debug/settings.86d1ce9e.png\" loading=\"lazy\">\r\n      <img src=\"/arcaea-toolbelt-debug/open-root.76fabe87.png\" loading=\"lazy\">\r\n    </div>\r\n    <p>\r\n      其实这才是用模拟器最主要的点，一般安卓设备出厂都是没有Root的，如果有刷过Root的手机，不用模拟器也可以用同样的方法拿到存档文件。\r\n    </p>\r\n    <p>\r\n      开启了Root权限以后，你可以使用任何能够管理根目录的文件管理类App找到<code>st3</code>文件，位置是<code>/data/data/moe.low.arc/files/st3</code>，然后将它复制到MuMu共享文件夹，从而在电脑上拿到它。具体可参考官方说明：\r\n      <a target=\"_blank\" referrerpolicy=\"no-referrer\" href=\"https://mumu.163.com/2017/06/20/25905_696022.html\">\r\n        https://mumu.163.com/2017/06/20/25905_696022.html\r\n      </a>\r\n      。\r\n    </p>\r\n    <p>\r\n      这里也推荐一个开源免费的文件管理App：质感文件\r\n      <a target=\"_blank\" href=\"https://blog.dun.im/anonymous/materiai-fiies-material-design-file-manager-for-android.html\" referrerpolicy=\"no-referrer\">\r\n        https://blog.dun.im/anonymous/materiai-fiies-material-design-file-manager-for-android.html\r\n      </a>\r\n      。\r\n    </p>\r\n    <p>\r\n      后面的操作步骤都是为了将复制文件的操作用批处理脚本自动化，方便以后拉取最新的<code>st3</code>的操作。如果在后面的自动化步骤碰到不好解决的问题，可以手动复制<code>st3</code>文件。\r\n    </p>\r\n    <h3 id=\"confirm-port\">5. 确认端口</h3>\r\n    <p>打开MuMu多开器，记一下模拟器用的adb端口号（这里是16384）。</p>\r\n    <div class=\"imgs\">\r\n      <img src=\"/arcaea-toolbelt-debug/port.1fb5ebea.png\" loading=\"lazy\">\r\n    </div>\r\n    <h3 id=\"exec\">6. 执行adb命令</h3>\r\n    <p>\r\n      做安卓的同学应该比较熟悉adb，这里用的是MuMu模拟器安装后自带的adb。以root权限使用adb能够直接导出安卓文件系统内部的文件。这里提供两种操作方法。\r\n    </p>\r\n    <p>\r\n      方法一：输入以下参数来直接生成带有完整命令的bat脚本，下载后直接双击运行即可，运行成功后即可在导出文件夹内找到st3存档文件。可以多次执行脚本，每次执行都会导出并覆盖原有文件。\r\n    </p>\r\n    <p>\r\n      下载脚本时，浏览器可能会报告安全问题，因为恶意的脚本可能会窃取信息或损坏计算机。此生成的脚本没有这样的恶意代码，可以放心下载并保留。\r\n    </p>\r\n    <form class=\"mx-2\">\r\n      <div class=\"my-2\">\r\n        <label class=\"form-label\" for=\"install-path\">MuMu模拟器安装路径或shell路径</label>\r\n        <input class=\"form-control\" id=\"install-path\">\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <label class=\"form-label\" for=\"port\">模拟器adb端口</label>\r\n        <input class=\"form-control\" id=\"port\" type=\"number\" min=\"0\" max=\"65535\" step=\"1\">\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <label class=\"form-label\" for=\"export-path\">放导出存档的文件夹（需提前创建）</label>\r\n        <input class=\"form-control\" id=\"export-path\">\r\n      </div>\r\n      <p>生成的脚本内容：</p>\r\n      <pre><div id=\"script-content\"></div></pre>\r\n      <p>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"download-script\">下载脚本</button>\r\n      </p>\r\n    </form>\r\n    <p>方案二：手动执行adb命令。找到模拟器的安装目录下的shell文件夹，以此路径打开命令行工具。</p>\r\n    <p>可通过空白处右键菜单-&gt;在终端打开：</p>\r\n    <div class=\"imgs\">\r\n      <img src=\"/arcaea-toolbelt-debug/open-terminal.74b2b7f5.png\" loading=\"lazy\">\r\n    </div>\r\n    <p>也可以直接在文件浏览器地址栏输入<code>powershell</code>或<code>cmd</code>并按回车来打开：</p>\r\n    <div class=\"imgs\">\r\n      <img src=\"/arcaea-toolbelt-debug/open-powershell.5e023ab0.gif\" loading=\"lazy\">\r\n    </div>\r\n    <p>再在命令行内手动依次输入并回车执行以下几个命令，即可将模拟器内的本地存档复制到目标位置。</p>\r\n    <pre><code><code><div>.\\adb.exe kill-server\r\n.\\adb.exe start-server\r\n.\\adb.exe connect 127.0.0.1:端口号\r\n.\\adb.exe -s 127.0.0.1:端口号 pull /data/data/moe.low.arc/files/st3 导出st3的文件夹</div></code></code></pre>\r\n    <p>\r\n      如下图所示，先在E盘创建<code>E:\\temp\\616sb</code>文件夹，然后用adb将\r\n      <code>/data/data/moe.low.arc/files/st3</code>\r\n      文件抽取到<code>616sb</code>文件夹下。\r\n    </p>\r\n    <div class=\"imgs\">\r\n      <img src=\"/arcaea-toolbelt-debug/adb-pull.34fbc4c3.png\" loading=\"lazy\">\r\n    </div>\r\n    <p>完成以后找到里面的<code>st3</code>文件即为包含本地分数的存档文件。</p>\r\n    <div class=\"imgs\">\r\n      <img src=\"/arcaea-toolbelt-debug/st3.d14f4ff3.png\" loading=\"lazy\">\r\n    </div>\r\n    <h3 id=\"tool\">7. 解析工具</h3>\r\n    <p>\r\n      存档的格式是<code>sqlite</code>数据库文件。<code>Arcaea Toolbelt</code>的<a href=\"https://darrendanielday.github.io/arcaea-toolbelt\" target=\"_blank\">主站</a>支持通过<code>st3</code>存档导入成绩并计算<code>b30</code>。\r\n    </p>\r\n    <p>\r\n      此外还推荐一个<code>sqlite</code>数据库可视化工具<a href=\"https://www.sqlitestudio.pl/\" target=\"_blank\">SQLiteStudio</a>，有兴趣可以尝试一下。\r\n    </p>\r\n  </main>\r\n</div>\r\n";



var $dwcPv = parcelRequire("dwcPv");

var $izUtT = parcelRequire("izUtT");
(0, $lrKVu.docsPage)((0, (/*@__PURE__*/$parcel$interopDefault($5ce958c5d1034066$exports))));
function $3dfc3041640da521$var$parseWindowsPath(value) {
    const pattern = /^(\w:)([\\\/]\w+)*/;
    const match = value.match(pattern);
    if (!match) return null;
    const [_, root, rest] = match;
    return {
        root: root,
        rest: rest
    };
}
function $3dfc3041640da521$var$isValidPath(value) {
    const parsed = $3dfc3041640da521$var$parseWindowsPath(value);
    if (!parsed) return false;
    const { root: root } = parsed;
    return !!root;
}
function $3dfc3041640da521$var$generateScriptContent(installOrShellPath, port, exportFolder) {
    if (!$3dfc3041640da521$var$isValidPath(installOrShellPath)) return [
        false,
        "MuMu\u6A21\u62DF\u5668\u5B89\u88C5\u8DEF\u5F84\u6216shell\u8DEF\u5F84\u4E0D\u6B63\u786E"
    ];
    const maxPort = 65535;
    if (isNaN(port) || port < 0 || port > maxPort) return [
        false,
        `\u{7AEF}\u{53E3}\u{4E0D}\u{6B63}\u{786E}\u{FF0C}\u{5E94}\u{5F53}\u{662F}0~${maxPort}\u{7684}\u{6574}\u{6570}`
    ];
    if (!$3dfc3041640da521$var$isValidPath(exportFolder)) return [
        false,
        "\u5BFC\u51FA\u8DEF\u5F84\u4E0D\u6B63\u786E"
    ];
    const { root: root } = $3dfc3041640da521$var$parseWindowsPath(installOrShellPath);
    const shellPath = installOrShellPath.split(/[\\\/]/).at(-1) === "shell" ? installOrShellPath : installOrShellPath.replace(/[\\\/]?$/, "\\shell");
    return [
        true,
        `\
${root}
cd "${shellPath}"
.\\adb.exe kill-server
.\\adb.exe start-server
.\\adb.exe connect 127.0.0.1:${port}
.\\adb.exe -s 127.0.0.1:${port} pull /data/data/moe.low.arc/files/st3 "${exportFolder}"
pause
`
    ];
}
function $3dfc3041640da521$var$bindInputs() {
    const { installPath: installPath, port: port, exportPath: exportPath, scriptContent: scriptContent, downloadScript: downloadScript } = (0, $dwcPv.query)({
        installPath: "input#install-path",
        port: "input#port",
        exportPath: "input#export-path",
        scriptContent: "div#script-content",
        downloadScript: "button#download-script"
    })(document.body);
    let script = "";
    let valid = false;
    function updateScript() {
        [valid, script] = $3dfc3041640da521$var$generateScriptContent(installPath.value, port.valueAsNumber, exportPath.value);
    }
    function handleChange() {
        updateScript();
        scriptContent.textContent = script;
        downloadScript.disabled = !valid;
    }
    function downloadScriptFile() {
        if (valid) (0, $izUtT.download)(URL.createObjectURL(new Blob([
            script
        ], {
            type: "text/plain"
        })), "extract-st3.bat");
    }
    for (const input of [
        installPath,
        port,
        exportPath
    ]){
        input.oninput = handleChange;
        input.onchange = handleChange;
        input.onpaste = handleChange;
    }
    downloadScript.onclick = downloadScriptFile;
    handleChange();
}
$3dfc3041640da521$var$bindInputs();


//# sourceMappingURL=mumu-adb.9da77a4c.js.map
