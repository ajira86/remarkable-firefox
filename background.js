!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=135)}({1:function(e,t,r){"use strict";r.d(t,"s",(function(){return n})),r.d(t,"e",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"o",(function(){return i})),r.d(t,"n",(function(){return s})),r.d(t,"g",(function(){return c})),r.d(t,"p",(function(){return u})),r.d(t,"h",(function(){return l})),r.d(t,"l",(function(){return p})),r.d(t,"f",(function(){return d})),r.d(t,"k",(function(){return f})),r.d(t,"j",(function(){return m})),r.d(t,"i",(function(){return g})),r.d(t,"m",(function(){return h})),r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return v})),r.d(t,"r",(function(){return k})),r.d(t,"q",(function(){return O}));const n="com.remarkable",o=`${n}.printer-v1`,a=`${n}.read-on-remarkable`,i=`${a}.status`,s="init",c="convert",u="success",l="error",p="error_print",d="close",f="error_convert",m="error_cloud",g="error_auth",h="error_upload",b="EPUB",y="PDF",v={CLOUD:"Couldn't connect to cloud. Please check your cloud connection and try again.",AUTHORIZE:"Problems connecting to your account. Please visit my.remarkable.com to check your account details",UPLOAD:"Upload failed. Please check your connection and try again.",CONVERT:"Unable to convert page, try sending as PDF (Ctrl + P)."},w=["about","accesskey","aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-controls","aria-describedat","aria-describedby","aria-disabled","aria-dropeffect","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","epub:type","epub:prefix","class","contenteditable","contextmenu","datatype","dir","draggable","dropzone","hidden","id","inlist","itemid","itemprop","itemref","itemscope","itemtype","lang","ns1:type","ns2:alphabet","ns2:ph","prefix","property","resource","rev","role","spellcheck","style","tabindex","title","typeof","vocab","xml:base","xml:lang","xml:space"],k={a:["rel",...w],abbr:w,address:w,acronym:w,article:w,aside:w,audio:["src",...w],b:w,bar:w,basefont:w,bdi:w,bdo:w,big:w,blockquote:w,br:w,button:["type",...w],canvas:["height","width",...w],caption:w,center:w,cite:w,code:w,col:w,colgroup:w,command:["type",...w],datalist:w,dd:w,del:w,details:w,dfn:w,div:w,dl:w,dt:w,em:w,embed:["height","src","type","width",...w],fieldset:w,figcaption:w,figure:w,font:w,footer:w,form:w,h1:w,h2:w,h3:w,h4:w,h5:w,h6:w,header:w,hgroup:w,hr:w,i:w,img:["alt","height","ismap","src","usemap","width",...w],input:["alt","height","src","type","usemap","width",...w],ins:w,kbd:w,keygen:w,label:w,li:w,link:["rel",...w],main:w,map:w,mark:w,menu:["type",...w],meta:["content",...w],meter:w,nav:w,"ns:svg":w,"ns1:switch":w,"ns1:trigger":w,"ns2:math":w,"ns3:svg":w,object:["height","type","usemap","width",...w],ol:w,output:w,p:w,param:w,pre:w,progress:w,q:w,ruby:w,s:w,samp:w,section:w,select:w,small:w,span:w,strike:w,strong:w,style:["type",...w],sub:w,sup:w,table:w,tbody:w,td:["colspan","rowspan",...w],textarea:w,tfoot:w,th:["colspan","rowspan",...w],thead:w,time:w,tr:w,tt:w,u:w,ul:w,var:w,video:["height","src","width",...w],wbr:w},O={HTML:"text/html",PDF:"application/pdf",PNG:"image/png",JPG:"image/jpeg"}},10:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}c((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.uploadDocument=t.CONFLICT_ERROR=t.UNAUTHORIZED_ERROR=t.FileType=void 0,function(e){e.zip="application/zip",e.epub="application/epub+zip",e.pdf="application/pdf"}(t.FileType||(t.FileType={})),t.UNAUTHORIZED_ERROR="UnauthorizedError",t.CONFLICT_ERROR="ConflictError";var s=function(e){function r(r){var n=e.call(this,r)||this;return n.name=t.UNAUTHORIZED_ERROR,n}return o(r,e),r}(Error),c=function(e){function r(r){var n=e.call(this,r)||this;return n.name=t.CONFLICT_ERROR,n}return o(r,e),r}(Error);function u(e,t,r,n,o){return a(this,void 0,void 0,(function(){var a,u,l;return i(this,(function(i){switch(i.label){case 0:return[4,fetch(e+"/doc/v1/"+r,{body:o,headers:{Authorization:"Bearer "+t},method:n})];case 1:return(a=i.sent()).ok?[3,3]:[4,a.text()];case 2:u=i.sent(),l=void 0;try{l=JSON.parse(u).message}catch(e){l=u||a.statusText||""+a.status}switch(a.status){case 401:throw new s(l);case 409:throw new c(l);default:throw new Error(l)}i.label=3;case 3:return[2,{status:a.status}]}}))}))}t.uploadDocument=function(e,t,r){return a(this,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return(n=new FormData).append("file",r.file_blob),n.append("meta",JSON.stringify({file_name:r.file_name})),[4,u(e,t,"files","POST",n)];case 1:return[2,o.sent()]}}))}))}},11:function(e,t,r){var n=r(15),o=r(16);e.exports=function(e,t,r){var a=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var s=0;s<16;++s)t[a+s]=i[s];return t||o(i)}},135:function(e,t,r){"use strict";r.r(t);r(23);var n=r(10),o=r(5),a=r(1);class i extends Error{constructor(...e){super(),Error.captureStackTrace&&Error.captureStackTrace(this,i),this.name="PopupError",this.status=a.k,this.message=e.message?e.message:a.c.CONVERT}}Error;class s extends Error{constructor(...e){super(),Error.captureStackTrace&&Error.captureStackTrace(this,s),this.name="AuthError",this.status=a.i,this.message=e.message?e.message:a.c.AUTHORIZE}}class c extends Error{constructor(...e){super(),Error.captureStackTrace&&Error.captureStackTrace(this,c),this.name="UploadError",this.status=a.m,this.message=e.message?e.message:a.c.UPLOAD}}const u=async(e,t,r,a=!1)=>{let i=await Object(o.a)();if(a&&"string"==typeof r){const e=await fetch(`data:${t};base64,${r}`);r=await e.blob()}const u={file_name:e,file_blob:r};401===(await Object(n.uploadDocument)("https://internal.cloud.remarkable.com",i,u).catch(e=>{if(e.name===n.UNAUTHORIZED_ERROR)return{status:401};throw new c})).status&&(i=await Object(o.c)(),await Object(n.uploadDocument)("https://internal.cloud.remarkable.com",i,u).catch(e=>{if(e.name===n.UNAUTHORIZED_ERROR)throw new s;throw new c}))};var l=r(18);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!async function(){let e;const t={},r=`${a.d}.menu-print`,s=(c=async(e,t)=>{await u(e,n.FileType.pdf,t,!1)},!(!chrome||!chrome.printerProvider||(chrome.printerProvider.onGetPrintersRequested.addListener(e=>{e([{id:a.e,name:"Read on reMarkable (PDF)",description:"Save the current page as a PDF and upload to your reMarkable account."}])}),chrome.printerProvider.onGetCapabilityRequested.addListener((e,t)=>{e==a.e&&t({version:"1",printer:{supported_content_type:[{content_type:"application/pdf"}],color:{option:[{type:"STANDARD_MONOCHROME"},{type:"STANDARD_COLOR",is_default:!0}]},media_size:{option:[{name:"CUSTOM",width_microns:21e4,height_microns:297e3,custom_display_name:"reMarkable Device",vendor_id:a.s}]},margins:{option:[{type:"STANDARD",top_microns:2e4,bottom_microns:2e4,right_microns:2e4,left_microns:2e4},{type:"BORDERLESS",top_microns:0,bottom_microns:0,right_microns:0,left_microns:0},{type:"CUSTOM",top_microns:2e4,bottom_microns:2e4,right_microns:1e5,left_microns:2e4}]}}})}),chrome.printerProvider.onPrintRequested.addListener(async(e,t)=>{try{await Object(o.b)()||(console.error("The browser extension is not registered."),t("FAILED")),await c(e.title,e.document),t("OK")}catch(r){console.error("Error when printing",e,r),t("FAILED")}}),0)));var c;const f=async(e=!1)=>{if(await Object(o.b)()||chrome.tabs.create({url:"setup.html"}),s&&e){let e="Ctrl+P";"mac"===(await chrome.runtime.getPlatformInfo()).os&&(e="Cmd+P"),chrome.contextMenus.create({id:r,title:`Read on reMarkable as PDF (${e})`,contexts:["browser_action"]})}};chrome.runtime.onInstalled.addListener(()=>{f(!0)}),chrome.runtime.onStartup.addListener(f);const m=(e,t)=>chrome.tabs.sendMessage(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({plugin:a.d},t)),g=async(e,r)=>{const n=e.id;try{if(!await Object(o.b)()){if("https://my.remarkable.com"===`https://${new URL(e.url).hostname}`)return void chrome.tabs.create({url:"setup.html?mrm"});throw chrome.tabs.create({url:"setup.html"}),new Error("Not logged in")}r({status:a.g,stage:1}),t[n].stage=1,await(async e=>{try{const t=await m(e,{action:"status"});return!(!t||!t.loaded)}catch(e){}return!1})(n)||await chrome.tabs.executeScript(n,{file:"convert.js"});const s=await Object(l.a)(),{type:c,title:p,content:d,err:f}=await m(n,{action:"convert",userSettings:s});if(!c||!d)throw new i;r({status:a.g,stage:2}),t[n].stage=2,await u(p||e.title,c,d,!0),r({status:a.p,stage:3}),t[n].stage=3}catch(e){console.log("Received error converting page",e),r({status:e.status?e.status:a.h,error:e.message})}finally{delete t[n]}};chrome.runtime.onConnect.addListener(r=>{if(r.name!==a.o)return;e=r,e.isConnected=!0,e.onDisconnect.addListener(()=>{e.isConnected=!1});const n=t=>{try{e.isConnected&&e.postMessage(t)}catch(e){}};r.onMessage.addListener(async e=>{if("convert"===e.action&&e.tab.id){if((await Object(l.a)()).defaultBehaviour===a.b)return s?(n({status:a.f}),void await chrome.tabs.executeScript(e.tab.id,{code:"window.print();"})):void n({status:a.l});if(void 0===t[e.tab.id]&&(t[e.tab.id]={converting:!1,stage:0}),t[e.tab.id].converting)return void n({status:a.g,stage:t[e.tab.id].stage});t[e.tab.id].converting=!0,await g(e.tab,n)}})}),s&&chrome.contextMenus.onClicked.addListener(async(e,t)=>{e&&e.menuItemId===r&&await chrome.tabs.executeScript(t.id,{code:"window.print()"})})}()},15:function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);e.exports=function(){return r(n),n}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},16:function(e,t){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,o=r;return[o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]]].join("")}},18:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const n=e=>{chrome.storage.sync.set({settings:e})},o=async()=>{const{settings:e}=await chrome.storage.sync.get("settings");return e||{}}},23:function(e,t){
/** Wrap an API that uses callbacks with Promises
 * This expects the pattern function withCallback(arg1, arg2, ... argN, callback)
 * @author Keith Henry <keith.henry@evolutionjobs.co.uk>
 * @license MIT */
!function(){"use strict";function e(e,t){return(...r)=>{let n,o=r;if(r&&r.length>0){const e=r[r.length-1];"function"==typeof e&&(o=r.slice(0,r.length-1),n=e)}return new Promise((r,a)=>{try{e(...o,(...e)=>{if(n)try{n(...e)}catch(e){a(e)}if(chrome.runtime.lastError)a(new Error(chrome.runtime.lastError.message||`Error thrown by API ${chrome.runtime.lastError}`));else if(t){const n=t(...e);r(n)}else e&&0!==e.length?1===e.length?r(e[0]):r(e):r()})}catch(e){a(e)}})}}function t(r,n){if(r)for(let o of n){let n;if(n="string"==typeof o?o:o.n,!r.hasOwnProperty(n))continue;const a=r[n];"function"==typeof a?r[n]=e(a.bind(r),o.cb):t(a,o.props)}}const r=["get","set","clear"],n=["clear","get","set","getResourceIdentifiers"],o=["get","getBytesInUse","set","remove","clear"];!function(e){for(let r in e){const n=chrome[r];n&&t(n,e[r])}}({accessibilityFeatures:[{n:"spokenFeedback",props:r},{n:"largeCursor",props:r},{n:"stickyKeys",props:r},{n:"highContrast",props:r},{n:"screenMagnifier",props:r},{n:"autoclick",props:r},{n:"virtualKeyboard",props:r},{n:"animationPolicy",props:r}],alarms:["get","getAll","clear","clearAll"],bookmarks:["get","getChildren","getRecent","getTree","getSubTree","search","create","move","update","remove","removeTree"],browser:["openTab"],browserAction:["getTitle","setIcon","getPopup","getBadgeText","getBadgeBackgroundColor"],browsingData:["settings","remove","removeAppcache","removeCache","removeCookies","removeDownloads","removeFileSystems","removeFormData","removeHistory","removeIndexedDB","removeLocalStorage","removePluginData","removePasswords","removeWebSQL"],commands:["getAll"],contentSettings:[{n:"cookies",props:n},{n:"images",props:n},{n:"javascript",props:n},{n:"location",props:n},{n:"plugins",props:n},{n:"popups",props:n},{n:"notifications",props:n},{n:"fullscreen",props:n},{n:"mouselock",props:n},{n:"microphone",props:n},{n:"camera",props:n},{n:"unsandboxedPlugins",props:n},{n:"automaticDownloads",props:n}],contextMenus:["create","update","remove","removeAll"],cookies:["get","getAll","set","remove","getAllCookieStores"],debugger:["attach","detach","sendCommand","getTargets"],desktopCapture:["chooseDesktopMedia"],documentScan:["scan"],downloads:["download","search","pause","resume","cancel","getFileIcon","erase","removeFile","acceptDanger"],enterprise:[{n:"platformKeys",props:["getToken","getCertificates","importCertificate","removeCertificate"]}],extension:["isAllowedIncognitoAccess","isAllowedFileSchemeAccess"],fileBrowserHandler:["selectFile"],fileSystemProvider:["mount","unmount","getAll","get","notify"],fontSettings:["setDefaultFontSize","getFont","getDefaultFontSize","getMinimumFontSize","setMinimumFontSize","getDefaultFixedFontSize","clearDefaultFontSize","setDefaultFixedFontSize","clearFont","setFont","clearMinimumFontSize","getFontList","clearDefaultFixedFontSize"],gcm:["register","unregister","send"],history:["search","getVisits","addUrl","deleteUrl","deleteRange","deleteAll"],i18n:["getAcceptLanguages","detectLanguage"],identity:["getAuthToken","getProfileUserInfo","removeCachedAuthToken","launchWebAuthFlow"],idle:["queryState"],input:[{n:"ime",props:["setMenuItems","commitText","setCandidates","setComposition","updateMenuItems","setCandidateWindowProperties","clearComposition","setCursorPosition","sendKeyEvents","deleteSurroundingText"]}],management:["setEnabled","getPermissionWarningsById","get","getAll","getPermissionWarningsByManifest","launchApp","uninstall","getSelf","uninstallSelf","createAppShortcut","setLaunchType","generateAppForLink"],networking:[{n:"config",props:["setNetworkFilter","finishAuthentication"]}],notifications:["create","update","clear","getAll","getPermissionLevel"],pageAction:["getTitle","setIcon","getPopup"],pageCapture:["saveAsMHTML"],permissions:["getAll","contains","request","remove"],platformKeys:["selectClientCertificates","verifyTLSServerCertificate",{n:"getKeyPair",cb:(e,t)=>({publicKey:e,privateKey:t})}],runtime:["getBackgroundPage","openOptionsPage","setUninstallURL","restartAfterDelay","sendMessage","sendNativeMessage","getPlatformInfo","getPackageDirectoryEntry",{n:"requestUpdateCheck",cb:(e,t)=>({status:e,details:t})}],scriptBadge:["getPopup"],sessions:["getRecentlyClosed","getDevices","restore"],storage:[{n:"sync",props:o},{n:"local",props:o},{n:"managed",props:o}],socket:["create","connect","bind","read","write","recvFrom","sendTo","listen","accept","setKeepAlive","setNoDelay","getInfo","getNetworkList"],sockets:[{n:"tcp",props:["create","update","setPaused","setKeepAlive","setNoDelay","connect","disconnect","secure","send","close","getInfo","getSockets"]},{n:"tcpServer",props:["create","update","setPaused","listen","disconnect","close","getInfo","getSockets"]},{n:"udp",props:["create","update","setPaused","bind","send","close","getInfo","getSockets","joinGroup","leaveGroup","setMulticastTimeToLive","setMulticastLoopbackMode","getJoinedGroups","setBroadcast"]}],system:[{n:"cpu",props:["getInfo"]},{n:"memory",props:["getInfo"]},{n:"storage",props:["getInfo","ejectDevice","getAvailableCapacity"]}],tabCapture:["capture","getCapturedTabs"],tabs:["get","getCurrent","sendMessage","create","duplicate","query","highlight","update","move","reload","remove","detectLanguage","captureVisibleTab","executeScript","insertCSS","setZoom","getZoom","setZoomSettings","getZoomSettings","discard"],topSites:["get"],tts:["isSpeaking","getVoices","speak"],types:["set","get","clear"],vpnProvider:["createConfig","destroyConfig","setParameters","sendPacket","notifyConnectionStateChanged"],wallpaper:["setWallpaper"],webNavigation:["getFrame","getAllFrames","handlerBehaviorChanged"],windows:["get","getCurrent","getLastFocused","getAll","create","update","remove"]})}()},5:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return p}));var n=r(11),o=r.n(n),a=r(6);const i=async()=>!!await s(),s=async()=>(await chrome.storage.local.get("deviceToken")).deviceToken,c=async e=>{const t=await Object(a.registerDevice)("https://webapp-production-dot-remarkable-production.appspot.com",{code:e,deviceID:o()(),deviceDesc:a.DeviceType.BrowserChrome});await chrome.storage.local.set({deviceToken:t})},u=async()=>(await chrome.storage.local.get("userToken")).userToken||await l(),l=async()=>{const e=await s(),t=await Object(a.retrieveUserToken)("https://webapp-production-dot-remarkable-production.appspot.com",e);return await chrome.storage.local.set({userToken:t}),t},p=async()=>Object(a.disconnectDevice)("https://webapp-production-dot-remarkable-production.appspot.com",await s()).then(async()=>{await Promise.all([chrome.storage.local.remove("deviceToken"),chrome.storage.local.remove("userToken")])}).catch(e=>(console.log("Could not delete device: ",e),e))},6:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new r((function(t){t(e.value)})).then(i,s)}c((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},a=this;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.DesktopWindows="desktop-windows",e.DesktopMacOS="desktop-macos",e.DesktopLinux="desktop-linux",e.EmulatorWindows="emulator-windows",e.EmulatorMacOS="emulator-macos",e.EmulatorLinux="emulator-linux",e.MobileAndroid="mobile-android",e.MobileIOS="mobile-ios",e.MobileEmulatorMacOS="mobile-macos",e.MobileEmulatorWindows="mobile-windows",e.MobileEmulatorLinux="mobile-linux",e.BrowserChrome="browser-chrome",e.BrowserFirefox="browser-firefox",e.reMarkable="remarkable"}(t.DeviceType||(t.DeviceType={})),t.isValidToken=function(e){return!!e&&e.startsWith("ey")},t.registerDevice=function(e,r){return n(a,void 0,void 0,(function(){var n,a;return o(this,(function(o){switch(o.label){case 0:if(8!==r.code.length)throw new Error("Invalid One-time-code: Must be 8 characters in length.");return[4,fetch(e+"/token/json/2/device/new",{body:JSON.stringify(r),method:"POST"})];case 1:return[4,(n=o.sent()).text()];case 2:if(a=o.sent(),!n.ok)throw new Error(a||n.statusText||""+n.status);if(!t.isValidToken(a))throw new Error("Did not get a valid device token.");return[2,a]}}))}))},t.disconnectDevice=function(e,t){return n(a,void 0,void 0,(function(){var r,n;return o(this,(function(o){switch(o.label){case 0:return[4,fetch(e+"/token/json/2/device/delete",{headers:{Authorization:"Bearer "+t},method:"POST"})];case 1:return[4,(r=o.sent()).text()];case 2:if(n=o.sent(),!r.ok)throw new Error(n||r.statusText||""+r.status);return[2]}}))}))},t.retrieveUserToken=function(e,r){return n(a,void 0,void 0,(function(){var n,a;return o(this,(function(o){switch(o.label){case 0:if(0===r.length)throw new Error("Invalid device token.");return[4,fetch(e+"/token/json/2/user/new",{headers:{Authorization:"Bearer "+r},method:"POST"})];case 1:return[4,(n=o.sent()).text()];case 2:if(a=o.sent(),!n.ok)throw new Error(a||n.statusText||""+n.status);if(!t.isValidToken(a))throw new Error("Invalid user token.");return[2,a]}}))}))}}});