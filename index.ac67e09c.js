
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

parcelRegister("gwbXp", function(module, exports) {

$parcel$export(module.exports, "ProfileServiceImpl", () => $c068e8ee0eb1f5bb$export$c1de537eae1c60b2);

var $1I0Yl = parcelRequire("1I0Yl");

var $2aEFH = parcelRequire("2aEFH");

var $izUtT = parcelRequire("izUtT");

var $fD2iU = parcelRequire("fD2iU");

var $ezVt6 = parcelRequire("ezVt6");

var $7Cv7B = parcelRequire("7Cv7B");

var $87X5s = parcelRequire("87X5s");

var $luSxA = parcelRequire("luSxA");

var $hyWAW = parcelRequire("hyWAW");

var $lF0nN = parcelRequire("lF0nN");

var $9aBed = parcelRequire("9aBed");

var $21erW = parcelRequire("21erW");
const $c068e8ee0eb1f5bb$var$KEY_CURRENT_USERNAME = "CURRENT_USERNAME";
const $c068e8ee0eb1f5bb$var$isValidProfileV1 = (input)=>{
    const value = input;
    return value != null && typeof value === "object" && value.version === 1 && typeof value.username === "string" && typeof value.potential === "string" && typeof value.best === "object" && (value.characters == null || Array.isArray(value.characters));
};
const $c068e8ee0eb1f5bb$var$isValidProfileV2 = (input)=>{
    const value = input;
    return value != null && typeof value === "object" && value.version === 2 && typeof value.username === "string" && typeof value.potential === "string" && typeof value.best === "object" && (value.characters == null || Array.isArray(value.characters));
};



let $c068e8ee0eb1f5bb$export$c1de537eae1c60b2 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$Database),
                (0, $7Cv7B.$MusicPlayService),
                (0, $7Cv7B.$ChartService)
            ],
            implements: (0, $7Cv7B.$ProfileService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ProfileServiceImpl = class {
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
            ProfileServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        database;
        musicPlay;
        chartService;
        #currentUsername = this.#getInitCurrentUsername();
        #SQL = null;
        constructor(database, musicPlay, chartService){
            this.database = database;
            this.musicPlay = musicPlay;
            this.chartService = chartService;
        }
        async checkMigration() {
            const legacyProfiles = this.#getLegacyProfileListSync();
            if (!legacyProfiles.length) return null;
            return async ()=>{
                const upgradedProfiles = await Promise.all(legacyProfiles.map(async (profile)=>{
                    if ($c068e8ee0eb1f5bb$var$isValidProfileV1(profile)) return this.#upgradeV1(profile);
                    return profile;
                }));
                await this.syncProfiles(upgradedProfiles);
                this.#removeLegacyProfilesSync(upgradedProfiles.map((p)=>p.username));
            };
        }
        formatPotential(potential) {
            const rating = Math.floor(potential * 100);
            return (rating / 100).toFixed(2);
        }
        async getProfile() {
            const username = this.#currentUsername ?? await this.#getPossibleOnlyUsername();
            if (!username) return null;
            if (username !== this.#currentUsername) await this.useProfile(username);
            const profile = await this.#getProfileAsync(username);
            if (!profile) sessionStorage.removeItem($c068e8ee0eb1f5bb$var$KEY_CURRENT_USERNAME);
            return profile;
        }
        async createOrUpdateProfile(username, potential) {
            const profile = await this.#getProfileAsync(username) ?? this.createEmptyProfile(username);
            profile.potential = potential.toFixed(2);
            profile.username = username;
            await this.#saveProfile(profile);
        }
        async getProfileList() {
            const usernames = await (0, $9aBed.requestToPromise)((await this.#store()).getAllKeys());
            return usernames?.filter((0, $21erW.isString)) ?? [];
        }
        async syncProfiles(data) {
            for (const profile of data)this.#saveProfile(profile);
        }
        async importProfile(file) {
            const content = await (0, $fD2iU.readFile)(file);
            try {
                const json = JSON.parse(content);
                const profile = $c068e8ee0eb1f5bb$var$isValidProfileV1(json) ? await this.#upgradeV1(json) : $c068e8ee0eb1f5bb$var$isValidProfileV2(json) ? json : null;
                if (!profile) {
                    (0, $ezVt6.alert)(`\u{5B58}\u{6863}\u{683C}\u{5F0F}\u{9519}\u{8BEF}`);
                    return;
                }
                const username = profile.username;
                const oldProfile = await this.#getProfileAsync(username);
                if (oldProfile != null) {
                    if (!await (0, $ezVt6.confirm)("\u5DF2\u5B58\u5728\u540C\u540D\u5B58\u6863\uFF0C\u662F\u5426\u8986\u76D6\uFF1F")) return;
                }
                await this.#saveProfile(profile);
                (0, $ezVt6.alert)("\u5BFC\u5165\u6210\u529F");
            } catch (error) {
                (0, $ezVt6.alert)(`\u{5BC4}\u{FF01}${error}`);
            }
        }
        async exportProfile(profile) {
            const url = URL.createObjectURL(new Blob([
                JSON.stringify(profile)
            ], {
                type: "application/json"
            }));
            (0, $izUtT.download)(url, `profile_${profile.username}.json`);
        }
        async addResult(playResult, replace) {
            const p = await this.getProfile();
            if (!p) {
                (0, $ezVt6.alert)("\u672A\u9009\u62E9\u5B58\u6863");
                return;
            }
            if (!replace) {
                const oldResult = p.best[playResult.chartId];
                if (oldResult) {
                    const { chart: chart } = (await this.chartService.searchChart(playResult.chartId))[0] ?? {};
                    if (chart) {
                        const getScore = (res)=>res.type === "score" ? res.score : this.musicPlay.computeScore(chart, res.result);
                        const oldScore = getScore(oldResult);
                        const newScore = getScore(playResult);
                        if (newScore <= oldScore && !await (0, $ezVt6.confirm)(`\u{5F53}\u{524D}\u{5206}\u{6570}\u{FF08}${newScore}\u{FF09}\u{672A}\u{8D85}\u{8FC7}\u{73B0}\u{6709}\u{5206}\u{6570}\u{FF08}${oldScore}\u{FF09}\u{FF0C}\u{662F}\u{5426}\u{66FF}\u{6362}\u{FF1F}`)) return;
                    }
                }
            }
            p.best[playResult.chartId] = playResult;
            await this.#saveProfile(p);
        }
        async useProfile(username) {
            this.#currentUsername = username;
            sessionStorage.setItem($c068e8ee0eb1f5bb$var$KEY_CURRENT_USERNAME, username);
        }
        async removeResult(chartId) {
            const p = await this.getProfile();
            if (!p) return;
            delete p.best[chartId];
            await this.#saveProfile(p);
        }
        async deleteProfile(username) {
            const store = await this.#store("readwrite");
            await (0, $9aBed.requestToPromise)(store.delete(username));
        }
        async b30(profile, options) {
            const songs = await this.chartService.getSongData();
            const charts = Object.fromEntries(songs.flatMap((s)=>s.charts.map((c)=>[
                        c.id,
                        {
                            chart: c,
                            song: s
                        }
                    ])));
            const playResults = Object.values(profile.best).map((r)=>{
                const { chart: chart, song: song } = charts[r.chartId];
                const { clear: clear } = r;
                if (r.type === "score") {
                    const { score: score } = r;
                    return {
                        chart: chart,
                        score: this.musicPlay.computeScoreResult(score, chart),
                        song: song,
                        clear: clear,
                        note: null,
                        no: 0,
                        date: r.date
                    };
                }
                return {
                    chart: chart,
                    song: song,
                    clear: clear,
                    no: 0,
                    note: r.result,
                    score: this.musicPlay.computeScoreResult(this.musicPlay.computeScore(chart, r.result), chart),
                    date: r.date
                };
            });
            let hasFilter = false;
            const packs = new Set(options?.packs);
            const ordered = playResults.filter((item)=>{
                const { song: song } = item;
                if (packs.size && !packs.has(song.pack)) {
                    hasFilter = true;
                    return false;
                }
                const customFilter = options?.filter?.(item) ?? true;
                if (!customFilter) hasFilter = true;
                return customFilter;
            }).sort((a, b)=>b.score.potential - a.score.potential).map((r, i)=>({
                    ...r,
                    no: i + 1
                }));
            const b30 = ordered.slice(0, 30);
            const ptt30 = b30.map((r)=>r.score.potential);
            const b30Sum = (0, $lF0nN.sum)(ptt30);
            const b10Sum = (0, $lF0nN.sum)(ptt30.slice(0, 10));
            const maxPotential = (b10Sum + b30Sum) / 40;
            const minPotential = b30Sum / 40;
            const potential = hasFilter ? this.formatPotential(maxPotential) : profile.potential;
            // 如果成绩少于10个，recent 10的平均值应当按照成绩个数取平均
            const r10Average = (+potential * 40 - b30Sum) / Math.min(playResults.length, 10);
            return {
                queryTime: Date.now(),
                username: profile.username,
                potential: potential,
                rating: this.musicPlay.getPotentialRating(+potential),
                b30: b30,
                b31_39: ordered.slice(30, 39),
                maxPotential: maxPotential,
                minPotential: minPotential,
                r10Average: r10Average,
                b30Average: b30Sum / ptt30.length
            };
        }
        async generateMaxProfile() {
            const songData = await this.chartService.getSongData();
            const stats = await this.musicPlay.getStatistics();
            const profile = this.createEmptyProfile("\uD83D\uDC7D");
            profile.potential = (Math.floor(stats.maximumPotential * 100) / 100).toFixed(2);
            for (const song of songData)for (const chart of song.charts)profile.best[chart.id] = {
                chartId: chart.id,
                clear: (0, $2aEFH.ClearRank).Maximum,
                type: "note",
                result: {
                    far: 0,
                    lost: 0,
                    perfect: chart.note,
                    pure: chart.note
                }
            };
            return profile;
        }
        async importDB(file, profile, report) {
            report?.("\u6B63\u5728\u8BFB\u53D6\u6587\u4EF6");
            const bytes = await (0, $fD2iU.readBinary)(file);
            report?.("\u6B63\u5728\u52A0\u8F7D\u6A21\u5757");
            const SQL = this.#SQL ??= await this.#initSQLJS();
            report?.("\u6B63\u5728\u67E5\u8BE2\u6210\u7EE9");
            await (0, $hyWAW.delay)(300);
            const db = new SQL.Database(new Uint8Array(bytes));
            const [scoreQueryResult] = db.exec(`\
SELECT
scores.songId,
scores.songDifficulty,
scores.shinyPerfectCount,
scores.perfectCount,
scores.nearCount,
scores.missCount,
scores.date,
cleartypes.clearType 
FROM scores JOIN cleartypes
ON scores.songId = cleartypes.songId AND scores.songDifficulty = cleartypes.songDifficulty
`);
            report?.("\u6B63\u5728\u5BFC\u5165\u5B58\u6863");
            if (!scoreQueryResult) throw new Error(`\u{8BFB}\u{53D6}\u{6570}\u{636E}\u{5E93}\u{5931}\u{8D25}\u{FF1A}\u{65E0}\u{7ED3}\u{679C}\u{96C6}\u{3002}\u{53EF}\u{80FD}\u{539F}\u{56E0}\u{FF1A}\u{5BFC}\u{51FA}st3\u{524D}\u{672A}\u{540C}\u{6B65}\u{4E91}\u{7AEF}\u{5B58}\u{6863}\u{FF0C}\u{5B58}\u{6863}\u{5185}\u{65E0}\u{6570}\u{636E}\u{3002}`);
            const { columns: columns, values: values } = scoreQueryResult;
            const scores = values.map((row)=>row.reduce((st3Score, value, index)=>{
                    Reflect.set(st3Score, columns[index], value);
                    return st3Score;
                }, {}));
            const songIndex = await this.chartService.getSongIndex();
            const now = Date.now();
            const { best: best } = profile;
            const result = {
                count: 0,
                difficulties: (0, $luSxA.mapProps)((0, $luSxA.groupBy)((0, $2aEFH.difficulties), (d)=>d), ()=>0),
                skipped: []
            };
            for (const score of scores){
                const { songId: songId, songDifficulty: songDifficulty, shinyPerfectCount: shinyPerfectCount, perfectCount: perfectCount, nearCount: nearCount, missCount: missCount, date: date, clearType: clearType } = score;
                const song = songIndex[songId];
                if (!song) {
                    result.skipped.push(`\u{672A}\u{77E5}songId\u{FF1A}${songId}`);
                    continue;
                }
                const chart = song.charts.find((c)=>c.difficulty === (0, $2aEFH.difficulties)[songDifficulty]);
                if (!chart) {
                    result.skipped.push(`\u{66F2}\u{76EE}${song.name}\u{7684}${Object.keys((0, $2aEFH.Difficulty))[songDifficulty]}\u{96BE}\u{5EA6}\u{8C31}\u{9762}\u{672A}\u{77E5}`);
                    continue;
                }
                const noteResult = {
                    perfect: shinyPerfectCount,
                    pure: perfectCount,
                    far: nearCount,
                    lost: missCount
                };
                best[chart.id] = {
                    type: "note",
                    result: noteResult,
                    chartId: chart.id,
                    clear: this.musicPlay.mapClearType(clearType, shinyPerfectCount, chart),
                    date: this.#normalizeDate(date, now)
                };
                result.difficulties[chart.difficulty]++;
                result.count++;
            }
            await this.#saveProfile({
                username: profile.username,
                best: best
            });
            return result;
        }
        async getProfileStatistics(profile, query) {
            const byRecords = (records)=>{
                let total = records.length, clear = 0, fr = 0, pm = 0, max = 0, totalAccScore = 0, totalAccChartCount = 0, totalDetailed = 0, totalPerfect = 0, totalGreat = 0, totalNotes = 0, totalScore = 0, totalNoteResultNotes = 0;
                for (const record of records){
                    const chart = charts[record.chartId];
                    const { note: note } = chart;
                    totalNotes += note;
                    let score = 0;
                    if (record.type === "note") {
                        const { result: result } = record;
                        const { perfect: perfect, pure: pure } = result;
                        totalDetailed++;
                        totalNoteResultNotes += note;
                        totalPerfect += perfect;
                        totalGreat += pure - perfect;
                        switch(record.clear){
                            // @ts-ignore
                            case (0, $2aEFH.ClearRank).Maximum:
                                max++;
                            // @ts-ignore
                            case (0, $2aEFH.ClearRank).PureMemory:
                                pm++;
                            // @ts-ignore
                            case (0, $2aEFH.ClearRank).FullRecall:
                                fr++;
                            case (0, $2aEFH.ClearRank).EasyClear:
                            case (0, $2aEFH.ClearRank).NormalClear:
                            case (0, $2aEFH.ClearRank).HardClear:
                                clear++;
                        }
                        score = this.musicPlay.computeScore(chart, result);
                    } else if (record.type === "score") score = record.score;
                    totalScore += score;
                    const accScore = Math.min(score, this.musicPlay.maxBase);
                    if (accScore > this.musicPlay.ex) {
                        totalAccScore += accScore;
                        totalAccChartCount++;
                    }
                }
                const acc = totalAccScore / totalAccChartCount / this.musicPlay.maxBase;
                const pacc = totalPerfect / totalNoteResultNotes;
                const rest = totalNotes + total * this.musicPlay.maxBase - totalScore;
                return {
                    total: total,
                    clear: clear,
                    pm: pm,
                    fr: fr,
                    max: max,
                    acc: acc,
                    detailed: totalDetailed,
                    perfect: totalPerfect,
                    great: totalGreat,
                    notes: totalNoteResultNotes,
                    pacc: pacc,
                    rest: rest
                };
            };
            const songs = await this.chartService.getSongData();
            const charts = (0, $luSxA.indexBy)(songs.flatMap((song)=>song.charts), (chart)=>chart.id);
            const all = Object.values(profile.best);
            const filteredResults = all.filter((result)=>{
                if (!query) return true;
                const chart = charts[result.chartId];
                const { rating: rating, difficulty: difficulty } = query;
                if (difficulty) {
                    if (chart.difficulty !== difficulty) return false;
                }
                if (rating) {
                    if (chart.level !== rating.level || !!chart.plus !== !!rating.plus) return false;
                }
                return true;
            });
            return byRecords(filteredResults);
        }
        createEmptyProfile(username) {
            return {
                best: {},
                potential: "0",
                username: username,
                version: 2
            };
        }
        /**
         * @deprecated
         */ #getLegacyJSONSync(username) {
            try {
                return JSON.parse(localStorage.getItem(username));
            } catch  {
                return null;
            }
        }
        async #getProfileAsync(username) {
            const store = await this.#store();
            const profile = await (0, $9aBed.requestToPromise)(store.get(username));
            return profile;
        }
        async #upgradeV1(v1) {
            const indexed = await this.#getV1Map();
            return {
                ...v1,
                version: 2,
                best: Object.fromEntries(Object.entries(v1.best).map(([oldChartId, value])=>{
                    const chartId = indexed[oldChartId.toLowerCase()];
                    if (!chartId) throw new Error(`Cannot upgrade chartId: ${oldChartId}`);
                    return [
                        chartId,
                        {
                            ...value,
                            chartId: chartId
                        }
                    ];
                }))
            };
        }
        async #saveProfile(profile) {
            const key = profile.username;
            const original = await this.#getProfileAsync(key) ?? this.createEmptyProfile(key);
            const newProfile = Object.assign({}, original, profile);
            await this.#saveProfileDirectly(newProfile);
        }
        async #saveProfileDirectly(profile) {
            const store = await this.#store("readwrite");
            await (0, $9aBed.requestToPromise)(store.put(profile));
        }
        #getInitCurrentUsername() {
            const sessionUsername = sessionStorage.getItem($c068e8ee0eb1f5bb$var$KEY_CURRENT_USERNAME);
            if (sessionUsername) return sessionUsername;
            return null;
        }
        async #getPossibleOnlyUsername() {
            const profiles = await this.getProfileList();
            return profiles.length === 1 ? profiles[0] : null;
        }
        /**
         * @deprecated
         */ #getLegacyProfileListSync() {
            return Array.from({
                length: localStorage.length
            }, (_, i)=>localStorage.key(i)).map((key)=>this.#getLegacyJSONSync(key)).filter((profile)=>{
                return $c068e8ee0eb1f5bb$var$isValidProfileV1(profile) || $c068e8ee0eb1f5bb$var$isValidProfileV2(profile);
            });
        }
        /**
         * @deprecated
         */ #removeLegacyProfilesSync(keys) {
            for (const key of keys)localStorage.removeItem(key);
        }
        #normalizeDate(date, now) {
            if (!date) return null;
            for(let time = date; time < now; time *= 1e3){
                if (time >= (0, $hyWAW.arcaeaReleaseTS)) return time;
            }
            return null;
        }
        async #transaction(mode) {
            const db = await this.database.getDB();
            return db.transaction([
                this.database.profiles
            ], mode);
        }
        async #store(mode) {
            const transaction = await this.#transaction(mode);
            return transaction.objectStore(this.database.profiles);
        }
        async #initSQLJS() {
            const { default: initSQLJS } = await (parcelRequire("der3k"));
            return initSQLJS({
                locateFile (url, scriptDirectory) {
                    if (url === "sql-wasm.wasm") return new URL((parcelRequire("e5wB7"))).href;
                    return `https://sql.js.org/dist/${url}`;
                }
            });
        }
        #v1Map = null;
        async #getV1Map() {
            if (!this.#v1Map) {
                const v1Data = await (0, $21erW.jsonModule)((parcelRequire("6EzO3")));
                const v2Data = await this.chartService.getSongData();
                const validV2ChartIds = new Set(v2Data.flatMap((song)=>song.charts.map((chart)=>chart.id)));
                Object.assign({
                    validV2ChartIds: validV2ChartIds
                });
                this.#v1Map = Object.fromEntries(v1Data.flatMap((song)=>song.charts.map((chart)=>{
                        const newId = `${song.sid}@${chart.difficulty}`;
                        if (!validV2ChartIds.has(newId)) console.error(`${newId} cannot be resolved`);
                        const oldIdLower = chart.id.toLowerCase();
                        return [
                            oldIdLower,
                            newId
                        ];
                    })));
            }
            return this.#v1Map;
        }
    };
    return ProfileServiceImpl = _classThis;
})();

});
parcelRegister("fD2iU", function(module, exports) {

$parcel$export(module.exports, "readFile", () => $b60c49106c6c1226$export$72c04af63de9061a);
$parcel$export(module.exports, "readBinary", () => $b60c49106c6c1226$export$751933526e2c6d4b);
function $b60c49106c6c1226$export$72c04af63de9061a(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            const { result: result } = reader;
            if (typeof result === "string") resolve(result);
            else reject();
        };
        reader.onerror = reject;
        reader.readAsText(file, "utf-8");
    });
}
function $b60c49106c6c1226$export$751933526e2c6d4b(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            const result = reader.result;
            if (result instanceof ArrayBuffer) resolve(result);
            else reject();
        };
        reader.readAsArrayBuffer(file);
    });
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

var $5vq1D = parcelRequire("5vq1D");
let $a9d0e99d5f739938$export$290d9f7df84a6c68 = (()=>{
    let _classDecorators = [
        (0, $5vq1D.Component)({
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
    let _classSuper = (0, $5vq1D.HyplateElement);
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
        dialog = (0, $5vq1D.element)("dialog");
        content = (0, $5vq1D.signal)((0, $5vq1D.nil));
        #renderedSlot = null;
        render() {
            this.effect(()=>(0, $5vq1D.listen)(this.dialog)("close", ()=>{
                    this.content.set((0, $5vq1D.nil));
                    this.#unmountSlots();
                }));
            return (0, $kKW7D.jsx)("dialog", {
                ref: this.dialog,
                children: (0, $kKW7D.jsx)((0, $5vq1D.Show), {
                    when: this.content,
                    children: (node)=>node
                })
            });
        }
        showAlert(message, useSlot) {
            if (useSlot) this.#renderedSlot = (0, $5vq1D.mount)((0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
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
                this.#renderedSlot = (0, $5vq1D.mount)((0, $kKW7D.jsx)((0, $kKW7D.Fragment), {
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
            const unmountIf = (content)=>content && (0, $5vq1D.unmount)(content);
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

parcelRegister("der3k", function(module, exports) {

var $4SiAm = parcelRequire("4SiAm");
module.exports = $4SiAm("bvw0X").then(()=>parcelRequire("1HilM"));

});
parcelRegister("4SiAm", function(module, exports) {
"use strict";

function $38ca9f41b371579b$var$load(id) {
    // eslint-disable-next-line no-undef
    return import((parcelRequire("8uu6p")).resolve(id));
}
module.exports = $38ca9f41b371579b$var$load;

});
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



parcelRegister("e5wB7", function(module, exports) {
module.exports = new URL("sql-wasm.4092f33b.wasm", import.meta.url).toString();

});

parcelRegister("6EzO3", function(module, exports) {

var $4SiAm = parcelRequire("4SiAm");
module.exports = $4SiAm("cOG01").then(()=>parcelRequire("fVcic"));

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

parcelRegister("6Y9qE", function(module, exports) {

$parcel$export(module.exports, "protocol", () => $512fa90ad904ebe5$export$a51d6b395ff4c65a);
$parcel$export(module.exports, "toolbelt", () => $512fa90ad904ebe5$export$1001660f7170b600);
const $512fa90ad904ebe5$export$a51d6b395ff4c65a = "arcaea-toolbelt:";
const $512fa90ad904ebe5$export$1001660f7170b600 = {
    data: (path)=>new URL(path, `${$512fa90ad904ebe5$export$a51d6b395ff4c65a}//data/`),
    assets: (path)=>new URL(path, `${$512fa90ad904ebe5$export$a51d6b395ff4c65a}//assets/`)
};

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

parcelRegister("clQL6", function(module, exports) {

$parcel$export(module.exports, "PreferenceServiceImpl", () => $8fe05efee1bbb2c1$export$9b0fc24702c13829);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $5vq1D = parcelRequire("5vq1D");

var $21erW = parcelRequire("21erW");

var $9aBed = parcelRequire("9aBed");

var $iVknW = parcelRequire("iVknW");
const $8fe05efee1bbb2c1$var$defaultPreference = {
    // 默认跟随系统的偏好主题
    theme: (0, $iVknW.getUserTheme)(),
    // 默认开启代理
    ghproxy: true,
    showMaxMinus: false
};
let $8fe05efee1bbb2c1$export$9b0fc24702c13829 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            implements: (0, $7Cv7B.$PreferenceService),
            requires: [
                (0, $7Cv7B.$Database)
            ]
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var PreferenceServiceImpl = class {
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
            PreferenceServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        database;
        #preference = (0, $5vq1D.signal)((0, $21erW.clone)($8fe05efee1bbb2c1$var$defaultPreference));
        #computed = {};
        constructor(database){
            this.database = database;
            this.get().then((latest)=>this.#notify(latest));
        }
        async get() {
            const db = await this.database.getDB();
            const configStore = this.database.preference;
            const stored = await (0, $9aBed.requestToPromise)(db.transaction([
                configStore
            ]).objectStore(configStore).getAll()) ?? [];
            const partialConfig = Object.fromEntries(stored.map(({ key: key, value: value })=>[
                    key,
                    value
                ]));
            return {
                ...$8fe05efee1bbb2c1$var$defaultPreference,
                ...partialConfig
            };
        }
        async update(patch) {
            const current = await this.get();
            const newPreference = {
                ...current,
                ...patch
            };
            const db = await this.database.getDB();
            const configStore = this.database.preference;
            const transaction = db.transaction([
                configStore
            ], "readwrite");
            const store = transaction.objectStore(configStore);
            for(const key in patch){
                const value = Reflect.get(patch, key);
                const config = {
                    key: key,
                    value: value
                };
                store.put(config);
            }
            await (0, $9aBed.transactionToPromise)(transaction);
            this.#notify(newPreference);
        }
        signal(name) {
            // @ts-expect-error key access does not match value
            const signal = this.#computed[name] ??= (0, $5vq1D.computed)(()=>this.#preference()[name]);
            return signal;
        }
        #notify(latest) {
            this.#preference.set(latest);
        }
    };
    return PreferenceServiceImpl = _classThis;
})();

});
parcelRegister("iVknW", function(module, exports) {

$parcel$export(module.exports, "getUserTheme", () => $dc6d5cef7b1c7127$export$7442efdced193dc0);
const $dc6d5cef7b1c7127$export$7442efdced193dc0 = ()=>window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

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

parcelRegister("34Tyz", function(module, exports) {

$parcel$export(module.exports, "DirectGateway", () => $23dcd734373e4e62$export$948fed883ad4d4a);
$parcel$export(module.exports, "ProxyGateway", () => $23dcd734373e4e62$export$c5e7150b800f5c0f);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $6Y9qE = parcelRequire("6Y9qE");

var $7Cv7B = parcelRequire("7Cv7B");

var $5vq1D = parcelRequire("5vq1D");
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
            (0, $5vq1D.subscribe)(preference.signal("ghproxy"), (value)=>{
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

parcelRegister("KQEBb", function(module, exports) {

$parcel$export(module.exports, "MemoryCache", () => $08cd23f1b0ffde13$export$67418a4e428ce890);
class $08cd23f1b0ffde13$export$67418a4e428ce890 {
    provider;
    #cache = new Map();
    #pending = new Map();
    constructor(provider){
        this.provider = provider;
    }
    async get(...args) {
        const cache = this.#cache;
        const key = this.provider.key(...args);
        const cached = cache.get(key);
        if (cached) return cached;
        let pending = this.#pending.get(key);
        if (pending != null) return this.complete(pending, args, key);
        try {
            pending = this.provider.alloc(...args);
            this.#pending.set(key, pending);
            const data = await pending;
            return this.complete(data, args, key);
        } finally{
            this.#pending.delete(key);
        }
    }
    async delete(...args) {
        const cache = this.#cache;
        const key = this.provider.key(...args);
        const cached = cache.get(key);
        if (cached) {
            await this.provider.free?.(cached);
            cache.delete(key);
        }
    }
    async clear() {
        const cache = this.#cache;
        for (const key of [
            ...cache.keys()
        ]){
            const cached = cache.get(key);
            await this.provider.free?.(cached);
            cache.delete(key);
        }
    }
    async complete(promise, args, key) {
        const data = await promise;
        this.#cache.set(key, data);
        return this.provider.clone?.(data, args) ?? data;
    }
}

});

parcelRegister("bmbM8", function(module, exports) {

$parcel$export(module.exports, "CoreDataServiceImpl", () => $844ae2267d68c846$export$a0fabe89a3542d65);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $8iy8R = parcelRequire("8iy8R");
let $844ae2267d68c846$export$a0fabe89a3542d65 = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$CoreDataProvider)
            ],
            implements: (0, $7Cv7B.$CoreDataService)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CoreDataServiceImpl = class {
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
            CoreDataServiceImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        provider;
        constructor(provider){
            this.provider = provider;
        }
        fetch(path) {
            return this.provider.get(path);
        }
        getSongList() {
            return this.fetch((0, $8iy8R.songList));
        }
        getPackList() {
            return this.fetch((0, $8iy8R.packList));
        }
        getMetaData() {
            return this.fetch((0, $8iy8R.meta));
        }
        getChartData() {
            return this.fetch((0, $8iy8R.chartData));
        }
        getCharacterData() {
            return this.fetch((0, $8iy8R.characterData));
        }
        getItemsData() {
            return this.fetch((0, $8iy8R.itemsData));
        }
        getWorldMapLongTerm() {
            return this.fetch((0, $8iy8R.worldMapsLongterm));
        }
        getWorldMapEvents() {
            return this.fetch((0, $8iy8R.worldMapsEvents));
        }
    };
    return CoreDataServiceImpl = _classThis;
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


parcelRegister("gw2dg", function(module, exports) {

$parcel$export(module.exports, "CoreDataProviderImpl", () => $c06159f75ce9aef0$export$d11ce8ee2e11aa7b);

var $1I0Yl = parcelRequire("1I0Yl");

var $87X5s = parcelRequire("87X5s");

var $7Cv7B = parcelRequire("7Cv7B");

var $KQEBb = parcelRequire("KQEBb");

var $6Y9qE = parcelRequire("6Y9qE");

var $8iy8R = parcelRequire("8iy8R");

var $9aBed = parcelRequire("9aBed");
let $c06159f75ce9aef0$export$d11ce8ee2e11aa7b = (()=>{
    let _classDecorators = [
        (0, $87X5s.Injectable)({
            requires: [
                (0, $7Cv7B.$Database),
                (0, $7Cv7B.$Gateway)
            ],
            implements: (0, $7Cv7B.$CoreDataProvider)
        })
    ];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CoreDataProviderImpl = class {
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
            CoreDataProviderImpl = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: _metadata
            });
            (0, $1I0Yl.__runInitializers)(_classThis, _classExtraInitializers);
        }
        database;
        gateway;
        #memoryCache = new (0, $KQEBb.MemoryCache)(this);
        #metaCache = new (0, $KQEBb.MemoryCache)({
            key: ()=>"meta",
            alloc: async ()=>await this.fetchJSON((0, $6Y9qE.toolbelt).data((0, $8iy8R.meta)))
        });
        constructor(database, gateway){
            this.database = database;
            this.gateway = gateway;
        }
        key(path) {
            return path;
        }
        async alloc(path) {
            const meta = await this.getMeta();
            const item = meta.index.find((item)=>item.file === path);
            if (!item) throw new Error(`Cannot resolve data file ${path}.`);
            let store = await this.database.objectStore(this.database.core, "readwrite");
            const cache = await (0, $9aBed.requestToPromise)(store.get(path));
            if (cache?.hash === item.hash) return cache.content;
            const fetched = await this.fetchJSON((0, $6Y9qE.toolbelt).data(path));
            // check hash?
            const newData = {
                hash: item.hash,
                path: path,
                content: fetched
            };
            store = await this.database.objectStore(this.database.core, "readwrite");
            await (0, $9aBed.requestToPromise)(store.put(newData));
            return fetched;
        }
        async get(path) {
            if (path === (0, $8iy8R.meta)) return await this.getMeta();
            return this.#memoryCache.get(path);
        }
        async getMeta() {
            return this.#metaCache.get();
        }
        async fetchJSON(url) {
            const response = await this.tryFetch(url);
            return response.json();
        }
        async tryFetch(url) {
            try {
                const dist = await this.gateway.dynamicProxy(url);
                const response = await fetch(dist);
                if (!response.ok) throw new Error(`Failed to request proxy ${dist}`);
                return response;
            } catch (error) {
                console.error(error);
                return await fetch(this.gateway.direct(url));
            }
        }
    };
    return CoreDataProviderImpl = _classThis;
})();

});


//# sourceMappingURL=index.ac67e09c.js.map
