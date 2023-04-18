System.register(["@angular/common@14.3.0","@angular/core@14.3.0"],(function(e,t){var r={},n={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){r.CommonModule=e.CommonModule,r.DOCUMENT=e.DOCUMENT,r.XhrFactory=e.XhrFactory,r["ɵDomAdapter"]=e["ɵDomAdapter"],r["ɵPLATFORM_BROWSER_ID"]=e["ɵPLATFORM_BROWSER_ID"],r["ɵgetDOM"]=e["ɵgetDOM"],r["ɵparseCookieValue"]=e["ɵparseCookieValue"],r["ɵsetRootDomAdapter"]=e["ɵsetRootDomAdapter"]},function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{function n(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,s=n.length;o!==t&&s>=0;){"/"===n[--s]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var a=n.slice(0,s+1);return r.protocol+"//"+r.host+a}t.R=n;var o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},890:e=>{"use strict";e.exports=r},849:e=>{"use strict";e.exports=n}},o={};function s(t){var r=o[t];if(r!==undefined)return r.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,s),n.exports}s.y=t,s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="./";var a={};return(0,s(722).s)(1),(()=>{"use strict";s.r(a),s.d(a,{BrowserModule:()=>Y,BrowserTransferStateModule:()=>ye,By:()=>fe,DomSanitizer:()=>De,EVENT_MANAGER_PLUGINS:()=>p,EventManager:()=>m,HAMMER_GESTURE_CONFIG:()=>Ie,HAMMER_LOADER:()=>Ee,HammerGestureConfig:()=>we,HammerModule:()=>be,Meta:()=>ee,Title:()=>ne,TransferState:()=>ge,VERSION:()=>Me,bootstrapApplication:()=>B,createApplication:()=>z,disableDebugTools:()=>ue,enableDebugTools:()=>de,makeStateKey:()=>me,platformBrowser:()=>q,provideProtractorTestingSupport:()=>G,ɵBrowserDomAdapter:()=>n,ɵBrowserGetTestability:()=>d,ɵDomEventsPlugin:()=>F,ɵDomRendererFactory2:()=>A,ɵDomSanitizerImpl:()=>Ce,ɵDomSharedStylesHost:()=>y,ɵHammerGesturesPlugin:()=>Te,ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>Z,ɵKeyEventsPlugin:()=>U,ɵNAMESPACE_URIS:()=>v,ɵSharedStylesHost:()=>h,ɵTRANSITION_ID:()=>c,ɵescapeHtml:()=>pe,ɵflattenStyles:()=>C,ɵgetDOM:()=>e["ɵgetDOM"],ɵinitDomAdapter:()=>K,ɵshimContentAttribute:()=>D,ɵshimHostAttribute:()=>S});var e=s(890),t=s(849);class r extends e["ɵDomAdapter"]{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class n extends r{static makeCurrent(){(0,e["ɵsetRootDomAdapter"])(new n)}onAndCancel(e,t,r){return e.addEventListener(t,r,!1),()=>{e.removeEventListener(t,r,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=(i=i||document.querySelector("base"),i?i.getAttribute("href"):null);return null==t?null:function(e){o=o||document.createElement("a"),o.setAttribute("href",e);const t=o.pathname;return"/"===t.charAt(0)?t:`/${t}`}(t)}resetBaseElement(){i=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,e["ɵparseCookieValue"])(document.cookie,t)}}let o,i=null;const c=new t.InjectionToken("TRANSITION_ID");const l=[{provide:t.APP_INITIALIZER,useFactory:function(r,n,o){return()=>{o.get(t.ApplicationInitStatus).donePromise.then((()=>{const t=(0,e["ɵgetDOM"])(),o=n.querySelectorAll(`style[ng-transition="${r}"]`);for(let e=0;e<o.length;e++)t.remove(o[e])}))}},deps:[c,e.DOCUMENT,t.Injector],multi:!0}];class d{addToWindow(e){t["ɵglobal"].getAngularTestability=(t,r=!0)=>{const n=e.findTestabilityInTree(t,r);if(null==n)throw new Error("Could not find testability for element.");return n},t["ɵglobal"].getAllAngularTestabilities=()=>e.getAllTestabilities(),t["ɵglobal"].getAllAngularRootElements=()=>e.getAllRootElements();t["ɵglobal"].frameworkStabilizers||(t["ɵglobal"].frameworkStabilizers=[]),t["ɵglobal"].frameworkStabilizers.push((e=>{const r=t["ɵglobal"].getAllAngularTestabilities();let n=r.length,o=!1;const s=function(t){o=o||t,n--,0==n&&e(o)};r.forEach((function(e){e.whenStable(s)}))}))}findTestabilityInTree(t,r,n){if(null==r)return null;const o=t.getTestability(r);return null!=o?o:n?(0,e["ɵgetDOM"])().isShadowRoot(r)?this.findTestabilityInTree(t,r.host,!0):this.findTestabilityInTree(t,r.parentElement,!0):null}}class u{build(){return new XMLHttpRequest}}u.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:u,deps:[],target:t["ɵɵFactoryTarget"].Injectable}),u.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:u}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:u,decorators:[{type:t.Injectable}]});const p=new t.InjectionToken("EventManagerPlugins");class m{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach((e=>e.manager=this)),this._plugins=e.slice().reverse()}addEventListener(e,t,r){return this._findPluginFor(t).addEventListener(e,t,r)}addGlobalEventListener(e,t,r){return this._findPluginFor(t).addGlobalEventListener(e,t,r)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const r=this._plugins;for(let t=0;t<r.length;t++){const n=r[t];if(n.supports(e))return this._eventNameToPlugin.set(e,n),n}throw new Error(`No event manager plugin found for event ${e}`)}}m.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:m,deps:[{token:p},{token:t.NgZone}],target:t["ɵɵFactoryTarget"].Injectable}),m.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:m}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:m,decorators:[{type:t.Injectable}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[p]}]},{type:t.NgZone}]}});class g{constructor(e){this._doc=e}addGlobalEventListener(t,r,n){const o=(0,e["ɵgetDOM"])().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${r}`);return this.addEventListener(o,r,n)}}class h{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach((e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))})),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}h.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:h,deps:[],target:t["ɵɵFactoryTarget"].Injectable}),h.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:h}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:h,decorators:[{type:t.Injectable}]});class y extends h{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,t,r){e.forEach((e=>{const n=this._doc.createElement("style");n.textContent=e,r.push(t.appendChild(n))}))}addHost(e){const t=[];this._addStylesToHost(this._stylesSet,e,t),this._hostNodes.set(e,t)}removeHost(e){const t=this._hostNodes.get(e);t&&t.forEach(f),this._hostNodes["delete"](e)}onStylesAdded(e){this._hostNodes.forEach(((t,r)=>{this._addStylesToHost(e,r,t)}))}ngOnDestroy(){this._hostNodes.forEach((e=>e.forEach(f)))}}function f(t){(0,e["ɵgetDOM"])().remove(t)}y.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:y,deps:[{token:e.DOCUMENT}],target:t["ɵɵFactoryTarget"].Injectable}),y.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:y}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:y,decorators:[{type:t.Injectable}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[e.DOCUMENT]}]}]}});const v={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},I=/%COMP%/g,E="undefined"==typeof ngDevMode||!!ngDevMode,w="%COMP%",T=`_nghost-${w}`,b=`_ngcontent-${w}`;function D(e){return b.replace(I,e)}function S(e){return T.replace(I,e)}function C(e,t,r){for(let n=0;n<t.length;n++){let o=t[n];Array.isArray(o)?C(e,o,r):(o=o.replace(I,e),r.push(o))}return r}function M(e){return t=>{if("__ngUnwrap__"===t)return e;return!1===e(t)&&(t.preventDefault(),t.returnValue=!1),undefined}}let _=!1;class A{constructor(e,t,r){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.rendererByCompId=new Map,this.defaultRenderer=new O(e)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;switch(r.encapsulation){case t.ViewEncapsulation.Emulated:{let t=this.rendererByCompId.get(r.id);return t||(t=new V(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,t)),t.applyToHost(e),t}case 1:case t.ViewEncapsulation.ShadowDom:return"undefined"!=typeof ngDevMode&&!ngDevMode||_||1!==r.encapsulation||(_=!0,console.warn("ViewEncapsulation.Native is no longer supported. Falling back to ViewEncapsulation.ShadowDom. The fallback will be removed in v12.")),new P(this.eventManager,this.sharedStylesHost,e,r);default:if(!this.rendererByCompId.has(r.id)){const e=C(r.id,r.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}A.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:A,deps:[{token:m},{token:y},{token:t.APP_ID}],target:t["ɵɵFactoryTarget"].Injectable}),A.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:A}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:A,decorators:[{type:t.Injectable}],ctorParameters:function(){return[{type:m},{type:y},{type:undefined,decorators:[{type:t.Inject,args:[t.APP_ID]}]}]}});class O{constructor(e){this.eventManager=e,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?document.createElementNS(v[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){(j(e)?e.content:e).appendChild(t)}insertBefore(e,t,r){if(e){(j(e)?e.content:e).insertBefore(t,r)}}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let r="string"==typeof e?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return t||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,r,n){if(n){t=n+":"+t;const o=v[n];o?e.setAttributeNS(o,t,r):e.setAttribute(t,r)}else e.setAttribute(t,r)}removeAttribute(e,t,r){if(r){const n=v[r];n?e.removeAttributeNS(n,t):e.removeAttribute(`${r}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,r,n,o){o&(t.RendererStyleFlags2.DashCase|t.RendererStyleFlags2.Important)?e.style.setProperty(r,n,o&t.RendererStyleFlags2.Important?"important":""):e.style[r]=n}removeStyle(e,r,n){n&t.RendererStyleFlags2.DashCase?e.style.removeProperty(r):e.style[r]=""}setProperty(e,t,r){E&&R(t,"property"),e[t]=r}setValue(e,t){e.nodeValue=t}listen(e,t,r){return E&&R(t,"listener"),"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,M(r)):this.eventManager.addEventListener(e,t,M(r))}}const N="@".charCodeAt(0);function R(e,t){if(e.charCodeAt(0)===N)throw new Error(`Unexpected synthetic ${t} ${e} found. Please make sure that:\n  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.\n  - There is corresponding configuration for the animation named \`${e}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`)}function j(e){return"TEMPLATE"===e.tagName&&e.content!==undefined}class V extends O{constructor(e,t,r,n){super(e),this.component=r;const o=C(n+"-"+r.id,r.styles,[]);t.addStyles(o),this.contentAttr=D(n+"-"+r.id),this.hostAttr=S(n+"-"+r.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const r=super.createElement(e,t);return super.setAttribute(r,this.contentAttr,""),r}}class P extends O{constructor(e,t,r,n){super(e),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const o=C(n.id,n.styles,[]);for(let e=0;e<o.length;e++){const t=document.createElement("style");t.textContent=o[e],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,r){return super.insertBefore(this.nodeOrShadowRoot(e),t,r)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}class F extends g{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r){return e.addEventListener(t,r,!1),()=>this.removeEventListener(e,t,r)}removeEventListener(e,t,r){return e.removeEventListener(t,r)}}F.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:F,deps:[{token:e.DOCUMENT}],target:t["ɵɵFactoryTarget"].Injectable}),F.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:F}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:F,decorators:[{type:t.Injectable}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[e.DOCUMENT]}]}]}});const k=["alt","control","meta","shift"],x={"\b":"Backspace","\t":"Tab","":"Delete","":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},L={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};class U extends g{constructor(e){super(e)}supports(e){return null!=U.parseEventName(e)}addEventListener(t,r,n){const o=U.parseEventName(r),s=U.eventCallback(o.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular((()=>(0,e["ɵgetDOM"])().onAndCancel(t,o.domEventName,s)))}static parseEventName(e){const t=e.toLowerCase().split("."),r=t.shift();if(0===t.length||"keydown"!==r&&"keyup"!==r)return null;const n=U._normalizeKey(t.pop());let o="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),o="code."),k.forEach((e=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),o+=e+".")})),o+=n,0!=t.length||0===n.length)return null;const a={};return a.domEventName=r,a.fullKey=o,a}static matchEventFullKeyCode(e,t){let r=x[e.key]||e.key,n="";return t.indexOf("code.")>-1&&(r=e.code,n="code."),!(null==r||!r)&&(r=r.toLowerCase()," "===r?r="space":"."===r&&(r="dot"),k.forEach((t=>{if(t!==r){(0,L[t])(e)&&(n+=t+".")}})),n+=r,n===t)}static eventCallback(e,t,r){return n=>{U.matchEventFullKeyCode(n,e)&&r.runGuarded((()=>t(n)))}}static _normalizeKey(e){return"esc"===e?"escape":e}}U.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:U,deps:[{token:e.DOCUMENT}],target:t["ɵɵFactoryTarget"].Injectable}),U.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:U}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:U,decorators:[{type:t.Injectable}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[e.DOCUMENT]}]}]}});const H="undefined"==typeof ngDevMode||!!ngDevMode;function B(e,r){return(0,t["ɵinternalCreateApplication"])({rootComponent:e,...$(r)})}function z(e){return(0,t["ɵinternalCreateApplication"])($(e))}function $(e){return{appProviders:[...X,...e?.providers??[]],platformProviders:Z}}function G(){return[...W]}function K(){n.makeCurrent()}const Z=[{provide:t.PLATFORM_ID,useValue:e["ɵPLATFORM_BROWSER_ID"]},{provide:t.PLATFORM_INITIALIZER,useValue:K,multi:!0},{provide:e.DOCUMENT,useFactory:function(){return(0,t["ɵsetDocument"])(document),document},deps:[]}],q=(0,t.createPlatformFactory)(t.platformCore,"browser",Z),J=new t.InjectionToken(H?"BrowserModule Providers Marker":""),W=[{provide:t["ɵTESTABILITY_GETTER"],useClass:d,deps:[]},{provide:t["ɵTESTABILITY"],useClass:t.Testability,deps:[t.NgZone,t.TestabilityRegistry,t["ɵTESTABILITY_GETTER"]]},{provide:t.Testability,useClass:t.Testability,deps:[t.NgZone,t.TestabilityRegistry,t["ɵTESTABILITY_GETTER"]]}],X=[{provide:t["ɵINJECTOR_SCOPE"],useValue:"root"},{provide:t.ErrorHandler,useFactory:function(){return new t.ErrorHandler},deps:[]},{provide:p,useClass:F,multi:!0,deps:[e.DOCUMENT,t.NgZone,t.PLATFORM_ID]},{provide:p,useClass:U,multi:!0,deps:[e.DOCUMENT]},{provide:A,useClass:A,deps:[m,y,t.APP_ID]},{provide:t.RendererFactory2,useExisting:A},{provide:h,useExisting:y},{provide:y,useClass:y,deps:[e.DOCUMENT]},{provide:m,useClass:m,deps:[p,t.NgZone]},{provide:e.XhrFactory,useClass:u,deps:[]},H?{provide:J,useValue:!0}:[]];class Y{constructor(e){if(H&&e)throw new Error("Providers from the `BrowserModule` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the `CommonModule` instead.")}static withServerTransition(e){return{ngModule:Y,providers:[{provide:t.APP_ID,useValue:e.appId},{provide:c,useExisting:t.APP_ID},l]}}}function Q(){return new ee((0,t["ɵɵinject"])(e.DOCUMENT))}Y.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Y,deps:[{token:J,optional:!0,skipSelf:!0}],target:t["ɵɵFactoryTarget"].NgModule}),Y.ɵmod=t["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"14.3.0",ngImport:t,type:Y,exports:[e.CommonModule,t.ApplicationModule]}),Y.ɵinj=t["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Y,providers:[...X,...W],imports:[e.CommonModule,t.ApplicationModule]}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Y,decorators:[{type:t.NgModule,args:[{providers:[...X,...W],exports:[e.CommonModule,t.ApplicationModule]}]}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Optional},{type:t.SkipSelf},{type:t.Inject,args:[J]}]}]}});class ee{constructor(t){this._doc=t,this._dom=(0,e["ɵgetDOM"])()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce(((e,r)=>(r&&e.push(this._getOrCreateElement(r,t)),e)),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const r=this.getTag(t);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const t=this._parseSelector(e),r=this.getTags(t).filter((t=>this._containsAttributes(e,t)))[0];if(r!==undefined)return r}const r=this._dom.createElement("meta");this._setMetaElementAttributes(e,r);return this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,t){return Object.keys(e).forEach((r=>t.setAttribute(this._getMetaKeyMap(r),e[r]))),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every((r=>t.getAttribute(this._getMetaKeyMap(r))===e[r]))}_getMetaKeyMap(e){return te[e]||e}}ee.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ee,deps:[{token:e.DOCUMENT}],target:t["ɵɵFactoryTarget"].Injectable}),ee.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ee,providedIn:"root",useFactory:Q,deps:[]}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ee,decorators:[{type:t.Injectable,args:[{providedIn:"root",useFactory:Q,deps:[]}]}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[e.DOCUMENT]}]}]}});const te={httpEquiv:"http-equiv"};function re(){return new ne((0,t["ɵɵinject"])(e.DOCUMENT))}class ne{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}ne.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ne,deps:[{token:e.DOCUMENT}],target:t["ɵɵFactoryTarget"].Injectable}),ne.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ne,providedIn:"root",useFactory:re,deps:[]}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ne,decorators:[{type:t.Injectable,args:[{providedIn:"root",useFactory:re,deps:[]}]}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[e.DOCUMENT]}]}]}});function oe(e,r){if("undefined"==typeof COMPILED||!COMPILED){(t["ɵglobal"].ng=t["ɵglobal"].ng||{})[e]=r}}const se="undefined"!=typeof window&&window||{};class ae{constructor(e,t){this.msPerTick=e,this.numTicks=t}}class ie{constructor(e){this.appRef=e.injector.get(t.ApplicationRef)}timeChangeDetection(e){const t=e&&e.record,r="Change Detection",n=null!=se.console.profile;t&&n&&se.console.profile(r);const o=ce();let s=0;for(;s<5||ce()-o<500;)this.appRef.tick(),s++;const a=ce();t&&n&&se.console.profileEnd(r);const i=(a-o)/s;return se.console.log(`ran ${s} change detection cycles`),se.console.log(`${i.toFixed(2)} ms per check`),new ae(i,s)}}function ce(){return se.performance&&se.performance.now?se.performance.now():(new Date).getTime()}const le="profiler";function de(e){return oe(le,new ie(e)),e}function ue(){oe(le,null)}function pe(e){const t={"&":"&a;",'"':"&q;","'":"&s;","<":"&l;",">":"&g;"};return e.replace(/[&"'<>]/g,(e=>t[e]))}function me(e){return e}class ge{constructor(){this.store={},this.onSerializeCallbacks={}}get(e,t){return this.store[e]!==undefined?this.store[e]:t}set(e,t){this.store[e]=t}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}get isEmpty(){return 0===Object.keys(this.store).length}onSerialize(e,t){this.onSerializeCallbacks[e]=t}toJson(){for(const t in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(t))try{this.store[t]=this.onSerializeCallbacks[t]()}catch(e){console.warn("Exception in onSerialize callback: ",e)}return JSON.stringify(this.store)}}function he(e,t){const r=e.getElementById(t+"-state");let n={};if(r&&r.textContent)try{n=JSON.parse(function(e){const t={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return e.replace(/&[^;]+;/g,(e=>t[e]))}(r.textContent))}catch(o){console.warn("Exception while restoring TransferState for app "+t,o)}return n}ge.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ge,deps:[],target:t["ɵɵFactoryTarget"].Injectable}),ge.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ge,providedIn:"root",useFactory:()=>{const r=(0,t.inject)(e.DOCUMENT),n=(0,t.inject)(t.APP_ID),o=new ge;return o.store=he(r,n),o}}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ge,decorators:[{type:t.Injectable,args:[{providedIn:"root",useFactory:()=>{const r=(0,t.inject)(e.DOCUMENT),n=(0,t.inject)(t.APP_ID),o=new ge;return o.store=he(r,n),o}}]}]});class ye{}ye.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ye,deps:[],target:t["ɵɵFactoryTarget"].NgModule}),ye.ɵmod=t["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"14.3.0",ngImport:t,type:ye}),ye.ɵinj=t["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ye}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:ye,decorators:[{type:t.NgModule,args:[{}]}]});class fe{static all(){return()=>!0}static css(t){return r=>null!=r.nativeElement&&function(t,r){if((0,e["ɵgetDOM"])().isElementNode(t))return t.matches&&t.matches(r)||t.msMatchesSelector&&t.msMatchesSelector(r)||t.webkitMatchesSelector&&t.webkitMatchesSelector(r);return!1}(r.nativeElement,t)}static directive(e){return t=>-1!==t.providerTokens.indexOf(e)}}const ve={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},Ie=new t.InjectionToken("HammerGestureConfig"),Ee=new t.InjectionToken("HammerLoader");class we{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const e in this.overrides)t.get(e).set(this.overrides[e]);return t}}we.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:we,deps:[],target:t["ɵɵFactoryTarget"].Injectable}),we.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:we}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:we,decorators:[{type:t.Injectable}]});class Te extends g{constructor(e,t,r,n){super(e),this._config=t,this.console=r,this.loader=n,this._loaderPromise=null}supports(e){return!(!ve.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e))&&(!(!window.Hammer&&!this.loader)||(("undefined"==typeof ngDevMode||ngDevMode)&&this.console.warn(`The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`),!1))}addEventListener(e,t,r){const n=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||n.runOutsideAngular((()=>this.loader()));let o=!1,s=()=>{o=!0};return n.runOutsideAngular((()=>this._loaderPromise.then((()=>{if(!window.Hammer)return("undefined"==typeof ngDevMode||ngDevMode)&&this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."),void(s=()=>{});o||(s=this.addEventListener(e,t,r))}))["catch"]((()=>{("undefined"==typeof ngDevMode||ngDevMode)&&this.console.warn(`The "${t}" event cannot be bound because the custom Hammer.JS loader failed.`),s=()=>{}})))),()=>{s()}}return n.runOutsideAngular((()=>{const o=this._config.buildHammer(e),s=function(e){n.runGuarded((function(){r(e)}))};return o.on(t,s),()=>{o.off(t,s),"function"==typeof o.destroy&&o.destroy()}}))}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}Te.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Te,deps:[{token:e.DOCUMENT},{token:Ie},{token:t["ɵConsole"]},{token:Ee,optional:!0}],target:t["ɵɵFactoryTarget"].Injectable}),Te.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Te}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Te,decorators:[{type:t.Injectable}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[e.DOCUMENT]}]},{type:we,decorators:[{type:t.Inject,args:[Ie]}]},{type:t["ɵConsole"]},{type:undefined,decorators:[{type:t.Optional},{type:t.Inject,args:[Ee]}]}]}});class be{}be.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:be,deps:[],target:t["ɵɵFactoryTarget"].NgModule}),be.ɵmod=t["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"14.3.0",ngImport:t,type:be}),be.ɵinj=t["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:be,providers:[{provide:p,useClass:Te,multi:!0,deps:[e.DOCUMENT,Ie,t["ɵConsole"],[new t.Optional,Ee]]},{provide:Ie,useClass:we,deps:[]}]}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:be,decorators:[{type:t.NgModule,args:[{providers:[{provide:p,useClass:Te,multi:!0,deps:[e.DOCUMENT,Ie,t["ɵConsole"],[new t.Optional,Ee]]},{provide:Ie,useClass:we,deps:[]}]}]}]});class De{}function Se(t){return new Ce(t.get(e.DOCUMENT))}De.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:De,deps:[],target:t["ɵɵFactoryTarget"].Injectable}),De.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:De,providedIn:"root",useExisting:t.forwardRef((function(){return Ce}))}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:De,decorators:[{type:t.Injectable,args:[{providedIn:"root",useExisting:(0,t.forwardRef)((()=>Ce))}]}]});class Ce extends De{constructor(e){super(),this._doc=e}sanitize(e,r){if(null==r)return null;switch(e){case t.SecurityContext.NONE:return r;case t.SecurityContext.HTML:return(0,t["ɵallowSanitizationBypassAndThrow"])(r,"HTML")?(0,t["ɵunwrapSafeValue"])(r):(0,t["ɵ_sanitizeHtml"])(this._doc,String(r)).toString();case t.SecurityContext.STYLE:return(0,t["ɵallowSanitizationBypassAndThrow"])(r,"Style")?(0,t["ɵunwrapSafeValue"])(r):r;case t.SecurityContext.SCRIPT:if((0,t["ɵallowSanitizationBypassAndThrow"])(r,"Script"))return(0,t["ɵunwrapSafeValue"])(r);throw new Error("unsafe value used in a script context");case t.SecurityContext.URL:return(0,t["ɵallowSanitizationBypassAndThrow"])(r,"URL")?(0,t["ɵunwrapSafeValue"])(r):(0,t["ɵ_sanitizeUrl"])(String(r));case t.SecurityContext.RESOURCE_URL:if((0,t["ɵallowSanitizationBypassAndThrow"])(r,"ResourceURL"))return(0,t["ɵunwrapSafeValue"])(r);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,t["ɵbypassSanitizationTrustHtml"])(e)}bypassSecurityTrustStyle(e){return(0,t["ɵbypassSanitizationTrustStyle"])(e)}bypassSecurityTrustScript(e){return(0,t["ɵbypassSanitizationTrustScript"])(e)}bypassSecurityTrustUrl(e){return(0,t["ɵbypassSanitizationTrustUrl"])(e)}bypassSecurityTrustResourceUrl(e){return(0,t["ɵbypassSanitizationTrustResourceUrl"])(e)}}Ce.ɵfac=t["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Ce,deps:[{token:e.DOCUMENT}],target:t["ɵɵFactoryTarget"].Injectable}),Ce.ɵprov=t["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Ce,providedIn:"root",useFactory:Se,deps:[{token:t.Injector}]}),t["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.3.0",ngImport:t,type:Ce,decorators:[{type:t.Injectable,args:[{providedIn:"root",useFactory:Se,deps:[t.Injector]}]}],ctorParameters:function(){return[{type:undefined,decorators:[{type:t.Inject,args:[e.DOCUMENT]}]}]}});const Me=new t.Version("14.3.0")})(),a})())}}}));
//# sourceMappingURL=angular-platform-browser.js.map