var h=this;
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var e=Object.prototype.toString.call(a);if("[object Window]"==e)return"object";if("[object Array]"==e||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==e||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function l(a){var b=k(a);return"array"==b||"object"==b&&"number"==typeof a.length}function m(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var n=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function t(a){if(!u.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(v,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(w,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(x,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(y,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(z,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(A,"&#0;"));return a}var v=/&/g,w=/</g,x=/>/g,y=/"/g,z=/'/g,A=/\x00/g,u=/[\x00&<>"']/;
function B(a,b){return a<b?-1:a>b?1:0};var C;a:{var D=h.navigator;if(D){var E=D.userAgent;if(E){C=E;break a}}C=""};function F(a,b){for(var e in a)b.call(void 0,a[e],e,a)}var G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function H(a,b){for(var e,d,g=1;g<arguments.length;g++){d=arguments[g];for(e in d)a[e]=d[e];for(var c=0;c<G.length;c++)e=G[c],Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}};var I=Array.prototype,J=I.forEach?function(a,b,e){I.forEach.call(a,b,e)}:function(a,b,e){for(var d=a.length,g="string"==typeof a?a.split(""):a,c=0;c<d;c++)c in g&&b.call(e,g[c],c,a)};function aa(a){var b=a.length;if(0<b){for(var e=Array(b),d=0;d<b;d++)e[d]=a[d];return e}return[]};function K(){return-1!=C.indexOf("Edge")};var ba=-1!=C.indexOf("Opera")||-1!=C.indexOf("OPR"),L=-1!=C.indexOf("Edge")||-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE"),M=-1!=C.indexOf("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&!K())&&!(-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE"))&&!K(),ca=-1!=C.toLowerCase().indexOf("webkit")&&!K();function da(){var a=C;if(M)return/rv\:([^\);]+)(\)|;)/.exec(a);if(L&&K())return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ca)return/WebKit\/(\S+)/.exec(a)}
function N(){var a=h.document;return a?a.documentMode:void 0}var O=function(){if(ba&&h.opera){var a=h.opera.version;return"function"==k(a)?a():a}var a="",b=da();b&&(a=b?b[1]:"");return L&&!K()&&(b=N(),b>parseFloat(a))?String(b):a}(),P={};
function Q(a){if(!P[a]){for(var b=0,e=n(String(O)).split("."),d=n(String(a)).split("."),g=Math.max(e.length,d.length),c=0;0==b&&c<g;c++){var f=e[c]||"",p=d[c]||"",ea=RegExp("(\\d*)(\\D*)","g"),fa=RegExp("(\\d*)(\\D*)","g");do{var q=ea.exec(f)||["","",""],r=fa.exec(p)||["","",""];if(0==q[0].length&&0==r[0].length)break;b=B(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||B(0==q[2].length,0==r[2].length)||B(q[2],r[2])}while(0==b)}P[a]=0<=b}}
var R=h.document,S=N(),T=!R||!L||!S&&K()?void 0:S||("CSS1Compat"==R.compatMode?parseInt(O,10):5);var ga=!L||L&&(K()||9<=T);!M&&!L||L&&L&&(K()||9<=T)||M&&Q("1.9.1");L&&Q("9");function ha(a,b){F(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in U?a.setAttribute(U[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var U={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ia(a,b,e){var d=arguments,g=document,c=d[0],f=d[1];if(!ga&&f&&(f.name||f.type)){c=["<",c];f.name&&c.push(' name="',t(f.name),'"');if(f.type){c.push(' type="',t(f.type),'"');var p={};H(p,f);delete p.type;f=p}c.push(">");c=c.join("")}c=g.createElement(c);f&&("string"==typeof f?c.className=f:"array"==k(f)?c.className=f.join(" "):ha(c,f));2<d.length&&ja(g,c,d);return c}
function ja(a,b,e){function d(c){c&&b.appendChild("string"==typeof c?a.createTextNode(c):c)}for(var g=2;g<e.length;g++){var c=e[g];if(!l(c)||m(c)&&0<c.nodeType)d(c);else{var f;a:{if(c&&"number"==typeof c.length){if(m(c)){f="function"==typeof c.item||"string"==typeof c.item;break a}if("function"==k(c)){f="function"==typeof c.item;break a}}f=!1}J(f?aa(c):c,d)}}};function V(){var a=ia("h1",{style:"background-color:#EEE"},"Hello world!");document.body.appendChild(a)}var W=["myproject","start"],X=h;W[0]in X||!X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length)Z=void 0!==V;Z?X[Y]=V:X[Y]?X=X[Y]:X=X[Y]={}};