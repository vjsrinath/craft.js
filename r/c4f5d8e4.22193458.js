(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{143:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(164),c=n(180),s=n.n(c);e.default=function(){return"undefined"!=typeof window?(window.location.href=s.a.url.LANDING,o.a.createElement("p",{style:{padding:"10px",textAlign:"center"}},"Redirecting...")):o.a.createElement(i.a,{to:"docs/overview"})}},164:function(t,e,n){"use strict";var r=n(34);n.d(e,"a",(function(){return r.c})),n.d(e,"b",(function(){return r.d}))},180:function(t,e,n){(function(e){t.exports={url:{production:{LANDING:"https://craft.js.org/",DOCUMENTATION:"https://craft.js.org/r/docs/overview/",BASIC_EXAMPLE:"https://craft.js.org/examples/basic/"},staging:{LANDING:"https://craft-js.prevwong.now.sh/",DOCUMENTATION:"https://craft-js.prevwong.now.sh/r/docs/overview/",BASIC_EXAMPLE:"https://craft-js.prevwong.now.sh/examples/basic/"},development:{LANDING:"http://localhost:3001/",DOCUMENTATION:"http://localhost:3000/r/docs/overview/",BASIC_EXAMPLE:"http://localhost:3002/"}}[e.env.ENV||"staging"]}}).call(this,n(181))},181:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var u,a=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?a=u.concat(a):f=-1,a.length&&p())}function p(){if(!l){var t=s(h);l=!0;for(var e=a.length;e;){for(u=a,a=[];++f<e;)u&&u[f].run();f=-1,e=a.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function w(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new d(t,e)),1!==a.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=w,o.addListener=w,o.once=w,o.off=w,o.removeListener=w,o.removeAllListeners=w,o.emit=w,o.prependListener=w,o.prependOnceListener=w,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);