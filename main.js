(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>y});var i=n(81),a=n.n(i),r=n(645),o=n.n(r),s=n(667),l=n.n(s),u=new URL(n(872),n.b),c=new URL(n(562),n.b),h=o()(a()),f=l()(u),v=l()(c);h.push([t.id,'@font-face {\n  font-family: "PressStart2P";\n  font-style: normal;\n  font-weight: 400;\n  src: url('+f+')\n    format("woff2");\n  src: url('+v+') format("woff");\n}\n\nbody {\n  background-color: rgb(0, 0, 0);\n  margin: 0;\n}\n',""]);const y=h},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],s=0;s<t.length;s++){var l=t[s],u=i.base?l[0]+i.base:l[0],c=r[u]||0,h="".concat(u," ").concat(c);r[u]=c+1;var f=n(h),v={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(v);else{var y=a(v,i);i.byIndex=s,e.splice(s,0,{identifier:h,updater:y,references:1})}o.push(h)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var r=i(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var s=n(r[o]);e[s].references--}for(var l=i(t,a),u=0;u<r.length;u++){var c=n(r[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},562:(t,e,n)=>{t.exports=n.p+"fonts/press-start-2p-v9-latin-regular.woff"},872:(t,e,n)=>{t.exports=n.p+"fonts/press-start-2p-v9-latin-regular.woff2"}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="/Skirmish/",n.b=document.baseURI||self.location.href,(()=>{var t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=n.g.WIDTH,this.height=n.g.HEIGHT};function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e||0,this.y=n||0,this.z=i||0}var n,i,a;return n=t,a=[{key:"add",value:function(e,n){return new t(e.x+n.x,e.y+n.y,e.z+n.z)}},{key:"sub",value:function(e,n){return new t(e.x-n.x,e.y-n.y,e.z-n.z)}},{key:"mult",value:function(e,n){return new t(e.x*n,e.y*n,e.z*n)}},{key:"div",value:function(e,n){var i,a,r;return 0!==n?(i=e.x/n,a=e.y/n,r=e.z/n):(console.warn("Dividing by zero!"),i=e.x,a=e.y,r=e.z_),new t(i,a,r)}},{key:"fromAngle2d",value:function(e){return new t(Math.cos(e),Math.sin(e))}},{key:"fromAngle3d",value:function(t,e){var n=Math.cos(e),i=Math.sin(e),a=Math.cos(t),r=Math.sin(t);return new p5.Vector(r*i,-1*a,r*n)}}],(i=[{key:"add",value:function(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}},{key:"sub",value:function(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}},{key:"mult",value:function(t){this.x*=t,this.y*=t,this.z*=t}},{key:"div",value:function(t){0!==t?(this.x/=t,this.y/=t,this.z/=t):console.warn("Dividing by zero!")}},{key:"angleBetween",value:function(e){return t.sub(e,this).heading()}},{key:"copy",value:function(){return new t(this.x,this.y,this.z)}},{key:"cross",value:function(e){return new t(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}},{key:"dist",value:function(e){return t.sub(e,this).magnitude()}},{key:"distSq",value:function(e){return t.sub(e,this).magSq()}},{key:"dot",value:function(t){return this.x*(t.x||0)+this.y*(t.y||0)+this.z*(t.z||0)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}},{key:"heading",value:function(){return Math.atan2(this.y,this.x)}},{key:"lerp",value:function(e,n,i,a){e instanceof t?this.lerp(e.x,e.y,e.z,n):(this.x+=(e-this.x)*a||0,this.y+=(n-this.y)*a||0,this.z+=(i-this.z)*a||0)}},{key:"limit",value:function(t){var e=this.magnitude;e*e>t*t&&(this.div(e),this.mult(t))}},{key:"normalise",value:function(){var t=this.magnitude();0!==t&&this.mult(1/t)}},{key:"magnitude",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}},{key:"magSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}}])&&e(n.prototype,i),a&&e(n,a),t}();function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o,s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"degreesToRadians",value:function(t){return t*Math.PI/180}},{key:"random",value:function(t,e){var n=e-t;return Math.random()*n+t}},{key:"gaussian",value:function(){for(var t=0,e=0;0===t;)t=Math.random();for(;0===e;)e=Math.random();return Math.sqrt(-1*Math.log(t))*Math.cos(1*Math.PI*e)}},{key:"mean",value:function(t){return t.reduce((function(t,e){return t+e}))/t.length}},{key:"meanVector",value:function(t){var e,n=new i,r=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;n.x+=o.x,n.y+=o.y,n.z+=o.z}}catch(t){r.e(t)}finally{r.f()}return n.div(t.length),n}},{key:"map",value:function(t,e,n,i,a){return t/(e-n)*(i-a)}}],null&&r(e.prototype,null),n&&r(e,n),t}(),l=new Uint8Array(16);function u(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(l)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,h=function(t){return"string"==typeof t&&c.test(t)};for(var f=[],v=0;v<256;++v)f.push((v+256).toString(16).substr(1));const y=function(t,e,n){var i=(t=t||{}).random||(t.rng||u)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=i[a];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[t[e+0]]+f[t[e+1]]+f[t[e+2]]+f[t[e+3]]+"-"+f[t[e+4]]+f[t[e+5]]+"-"+f[t[e+6]]+f[t[e+7]]+"-"+f[t[e+8]]+f[t[e+9]]+"-"+f[t[e+10]]+f[t[e+11]]+f[t[e+12]]+f[t[e+13]]+f[t[e+14]]+f[t[e+15]]).toLowerCase();if(!h(n))throw TypeError("Stringified UUID is invalid");return n}(i)};function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getFormation",value:function(t){return 2===t?[[0,-1],[0,1]]:3===t?[[1,0],[-1,-1],[-1,1]]:4===t?[[1,-1],[1,1],[-1,-1],[-1,1]]:5===t?[[2,0],[0,-1],[0,1],[-2,-1],[-2,1]]:6===t?[[2,-1],[2,1],[0,-1],[0,1],[-2,-1],[-2,1]]:7===t?[[3,0],[1,-1],[1,1],[-1,-1],[-1,1],[-3,-1],[-3,1]]:8===t?[[3,-1],[3,1],[1,-1],[1,1],[-1,-1],[-1,1],[-3,-1],[-3,1]]:9===t?[[4,0],[2,-1],[2,1],[0,-1],[0,1],[-2,-1],[-2,1],[-4,-1],[-4,1]]:void 0}}],null&&d(e.prototype,null),n&&d(e,n),t}();function g(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;b(this,t),this.head=e,this.tail=e,this.length=e?1:0}var e,n;return e=t,n=[{key:"getAll",value:function(){for(var t=[],e=this.head;e;)t.push(e.value),e=e.next;return t}},{key:"printList",value:function(){for(var t=[],e=this.head;null!==e;)t.push(e),e=e.next;console.log([].concat(t))}},{key:"prepend",value:function(t){var e=new k(t);0===this.length?(this.head=e,this.tail=this.head):(e.next=this.head,this.head.previous=e,this.head=e),this.length++}},{key:"append",value:function(t){var e=new k(t);0===this.length?(this.head=e,this.tail=this.head):(this.tail.next=e,e.previous=this.tail,this.tail=e),this.length++}},{key:"insert",value:function(t,e){if(e<0||e>this.length||!Number.isInteger(e))console.warn("Index is not a valid integer! Current length ".concat(this.length));else{if(0===e)this.prepend(t);else if(e===this.length)this.append(t);else{for(var n=new k(t),i=this.head,a=0;a<e-1;a++)i=i.next;var r=i.next;n.next=r,i.next=n,n.previous=i,r.previous=n}this.length++}}},{key:"merge",value:function(e){var n=this;!e instanceof t?console.warn("LinkedList.merge must be passed an instance of a LinkedList"):e.getAll().forEach((function(t){return n.append(t)}))}},{key:"activateNodes",value:function(t){var e,n=0;e=t.constructor===Array?t:[t];for(var i=this.head;i;){var a,r=g(e);try{for(r.s();!(a=r.n()).done;){var o=a.value;i.value==o&&(i.active=!0,n+=1)}}catch(t){r.e(t)}finally{r.f()}if(n===e.length)return;i=i.next}}},{key:"deactivateNodes",value:function(t){var e,n=0;e=t.constructor===Array?t:[t];for(var i=this.head;i;){var a,r=g(e);try{for(r.s();!(a=r.n()).done;){var o=a.value;i.value==o&&(i.active=!1,n+=1)}}catch(t){r.e(t)}finally{r.f()}if(n===e.length)return;i=i.next}}},{key:"removeById",value:function(t){for(var e=this.head;e;){if(e.value.state.id===t)return e.previous&&e.next?(e.previous.next=e.next,e.next.previous=e.previous):e.previous?(this.tail=e.previous,this.tail.next=null):e.next?(this.head=e.next,this.head.previous=null):(this.head=null,this.tail=this.head),void this.length--;e=e.next}console.warn("Node with unit.id: ".concat(t," not found in list!"))}},{key:"removeByValues",value:function(t){var e,n=0;e=t.constructor===Array?t:[t];for(var i=this.head;i;){var a,r=g(e);try{for(r.s();!(a=r.n()).done;){var o=a.value;i.value==o&&(i.previous&&i.next?(i.previous.next=i.next,i.next.previous=i.previous):i.previous?(this.tail=i.previous,this.tail.next=null):i.next?(this.head=i.next,this.head.previous=null):(this.head=null,this.tail=this.head),this.length--,n+=1)}}catch(t){r.e(t)}finally{r.f()}if(n===e.length)return;i=i.next}console.warn('"'.concat(array.join(", "),'" not found in list!'))}}],n&&x(e.prototype,n),t}(),k=function t(e){b(this,t),this.value=e,this.previous=null,this.next=null};const T={WHITE:[255,255,255],GREY:[100,100,100],BLACK:[0,0,0],teams:{RED:[235,60,39],BLUE:[35,98,162],GREEN:[3,160,98],YELLOW:[251,183,65]}};function A(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var E=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getRGB",value:function(t){return"rgb(".concat(t[0],", ").concat(t[1],", ").concat(t[2],")")}},{key:"getRGBA",value:function(t,e){return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(e,")")}}],null&&A(e.prototype,null),n&&A(e,n),t}();function O(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var z=function(){function t(e,a,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=n.g.unitTotals;o[r]=o[r]+1,this.location=new i(e,a),this.velocity=new i(s.random(-1,1),s.random(-1,1)),this.acceleration=new i,this.size=new i(4,8),this.angle=this.velocity.heading(),this.angleOffset=0;var l=20+2*s.gaussian(),u=1+.25*s.gaussian(),c=20*this.size.x+s.gaussian()*this.size.x*2,h=.75*c,f=s.random(2,4);this.stats={team:r,health:100,attack:l,speed:u,FOV:130,acuity:c,range:h,restTime:f},this.state={id:y(),platoon:null,behaviour:"NON-COMBAT",action:"REST",destination:null,target:null,previous:performance.now(),colour:E.getRGB(T.teams[r])}}var e,a;return e=t,(a=[{key:"performBehaviour",value:function(t){if(!this.state.target&&t.length>=1){var e=this.getNearestEntity(t);if(e&&e.stats.team===this.stats.team)return void("NON-COMBAT"===e.state.behaviour&&"JOIN"!==e.state.action&&(this.state.action="JOIN",this.state.target=e,this.state.destination=e.location,e.state.action="JOIN",e.state.target=this,e.state.destination=this.location))}"NON-COMBAT"===this.state.behaviour?this.nonCombatBehaviour():"COMBAT"===this.state.behaviour&&this.combatBehaviour()}},{key:"nonCombatBehaviour",value:function(){"PATROL"===this.state.action?this.patrol():"REST"===this.state.action?this.rest():"JOIN"===this.state.action&&this.join()}},{key:"combatBehaviour",value:function(){"ATTACK"===this.state.action||this.state.action}},{key:"patrol",value:function(){this.location.equals(this.state.destination)?(this.state.destination=null,this.state.action="REST",this.state.previous=performance.now()):this.location.dist(this.state.destination)<this.stats.speed?this.location=this.state.destination.copy():(this.seek(this.state.destination),this.updateLocation())}},{key:"rest",value:function(){performance.now()-this.state.previous>1e3*this.stats.restTime&&(this.state.action="PATROL",this.getDestination(),this.seek(this.state.destination),this.angleOffset=0)}},{key:"join",value:function(){if(this.location.dist(this.state.target.location)<this.size.y*(this.size.x/2)){var t=y(),e=this.state.target;this.state.target=null,this.state.destination=null,this.state.behaviour="PLATOON",this.state.action="JOINING",this.state.platoon=t,e.state.target=null,e.state.destination=null,e.state.behaviour="PLATOON",e.state.action="JOINING",e.state.platoon=t}else this.seek(this.state.target.location),this.updateLocation()}},{key:"seek",value:function(t){var e=i.sub(t,this.location);e.normalise(),e.mult(this.stats.acuity/2);var n=s.random(0,2*Math.PI),a=this.size.y,r=i.add(e,new i(Math.cos(n)*a,Math.sin(n)*a));r.normalise(),r.mult(this.getSpeed()),r.sub(this.velocity),this.angle=e.heading()+s.map(Math.cos(this.angleOffset),0-Math.PI,Math.PI,.25*Math.PI,.75*Math.PI),this.angleOffset+=.25*this.stats.speed,this.applyBehaviour(r)}},{key:"avoid",value:function(t){var e,n=new i,a=1*this.size.y,r=0,o=O(t);try{for(o.s();!(e=o.n()).done;){var s=e.value,l=this.location.dist(s.location);if(l>0&&l<a){var u=i.sub(s.location,this.location);u.normalise(),u.div(l),u.mult(-1),n.add(u),r++}}}catch(t){o.e(t)}finally{o.f()}if(r>=1&&(n.div(r),n.normalise(),n.mult(this.getSpeed()),n.sub(this.velocity)),"PLATOON"===this.state.behaviour)return n;this.applyBehaviour(n)}},{key:"cohere",value:function(t){var e,n=new i(0,0),a=4*this.size.y,r=0,o=O(t);try{for(o.s();!(e=o.n()).done;){var s=e.value,l=this.location.dist(s.location);if(l>0&&l>a){var u=i.sub(s.location,this.location);u.normalise(),u.div(l),n.add(u),r++}}}catch(t){o.e(t)}finally{o.f()}if(r>=1&&(n.div(r),n.normalise(),n.mult(this.getSpeed()),n.sub(this.velocity)),"PLATOON"===this.state.behaviour)return n;this.applyBehaviour(n)}},{key:"align",value:function(t){var e,n=new i,a=O(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;this.state.id!==r.state.id&&n.add(r.velocity)}}catch(t){a.e(t)}finally{a.f()}if(n.div(t.length),n.normalise(),n.mult(this.getSpeed()),n.sub(this.velocity),"PLATOON"===this.state.behaviour)return n;this.applyBehaviour(n)}},{key:"getDestination",value:function(){var t=n.g,e=t.WIDTH,a=t.HEIGHT,r=new i(Math.random()*e,Math.random()*a),o=i.sub(r,this.location),s=o.magnitude();o.normalise(),s>2*this.stats.acuity&&(o.mult(2*this.stats.acuity),r.x=this.location.x+o.x,r.y=this.location.y+o.y),this.state.destination=r}},{key:"updateLocation",value:function(){this.velocity.add(this.acceleration),this.velocity.limit(this.getSpeed()),this.location.add(this.velocity),this.acceleration.mult(0)}},{key:"getNearestEntity",value:function(t){var e,n,i=1e6,a=O(t);try{for(a.s();!(n=a.n()).done;){var r=n.value,o=this.location.dist(r.location);o<i&&(i=o,e=r)}}catch(t){a.e(t)}finally{a.f()}return e||!1}},{key:"applyBehaviour",value:function(t){this.acceleration.add(t)}},{key:"getSpeed",value:function(){return"PLATOON"===this.state.behaviour?this.state.platoon.stats.speed:this.stats.speed}},{key:"checkEdges",value:function(){var t=n.g,e=t.WIDTH,i=t.HEIGHT;this.location.x<this.size.x?this.location.x=this.size.x:this.location.x>e-this.size.x&&(this.location.x=e-this.size.x),this.location.y<this.size.x?this.location.y=this.size.x:this.location.y>i-this.size.x&&(this.location.y=e-this.size.x)}}])&&S(e.prototype,a),t}();function P(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function M(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var L=function(){function t(e,i,a,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=n.g.platoonTotals;o[r]=o[r]+1,this.location=this.getMeanLocation(a),this.stats={team:r,FOV:130},this.state={behaviour:"NON-COMBAT",action:"REST",destination:0,previous:performance.now(),id:y()},this.units=this.populate(a)}var e,a;return e=t,(a=[{key:"populate",value:function(t){var e,n=new w,i=1e3,a=0,r=0,o=P(t);try{for(o.s();!(e=o.n()).done;){var s=e.value;s.state.platoon=this,s.state.action="PLATOON",n.append(s),i=s.stats.speed<i?s.stats.speed:i,a=s.stats.acuity>a?s.stats.acuity:a,r=s.stats.restTime>r?s.stats.restTime:r}}catch(t){o.e(t)}finally{o.f()}return this.stats.speed=i,this.stats.acuity=a,this.stats.restTime=r,this.state.formation=p.getFormation(t.length),n}},{key:"update",value:function(){this.location=this.getMeanLocation(this.units.getAll()),"NON-COMBAT"===this.state.behaviour?"PATROL"===this.state.action?this.patrol():"REST"===this.state.action&&this.rest():this.state.behaviour}},{key:"patrol",value:function(){var t=this;this.units.getAll().every((function(e){return e.location.dist(t.state.destination)<e.size.y*(e.size.x/2)}))?(this.state.destination=null,this.state.action="REST",this.state.previous=performance.now()):this.moveUnits()}},{key:"rest",value:function(){performance.now()-this.state.previous>1e3*this.stats.restTime&&(this.state.action="PATROL",this.getDestination())}},{key:"moveUnits",value:function(){var t,e=this.units.getAll(),n=P(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.location.dist(this.state.destination)>2*i.size.y&&i.seek(this.state.destination),this.flock(i,e),i.updateLocation()}}catch(t){n.e(t)}finally{n.f()}}},{key:"flock",value:function(t,e){var n=t.avoid(e),i=t.cohere(e),a=t.align(e);n.mult(.2),i.mult(.2),a.mult(.2),t.applyBehaviour(n),t.applyBehaviour(i),t.applyBehaviour(a)}},{key:"getDestination",value:function(){var t=n.g,e=t.WIDTH,a=t.HEIGHT,r=new i(Math.random()*e,Math.random()*a),o=i.sub(r,this.location),s=o.magnitude();o.normalise(),s>2*this.stats.acuity&&(o.mult(2*this.stats.acuity),r.x=this.location.x+o.x,r.y=this.location.y+o.y),this.state.destination=r}},{key:"getMeanLocation",value:function(t){var e,n=new i,a=P(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;n.add(r.location)}}catch(t){a.e(t)}finally{a.f()}return n.div(t.length),n}},{key:"checkEdges",value:function(){var t,e=P(this.units.getAll());try{for(e.s();!(t=e.n()).done;)t.value.checkEdges()}catch(t){e.e(t)}finally{e.f()}}}])&&M(e.prototype,a),t}();function R(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var j=function(){function t(e,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=n.g.WIDTH,this.height=n.g.HEIGHT,this.cellsX=e,this.cellsY=a,this.cellSize=new i(n.g.WIDTH/e,n.g.HEIGHT/a),this.cells=this.initaliseCells()}var e,a;return e=t,(a=[{key:"initaliseCells",value:function(){for(var t=[],e=0;e<this.cellsY;e++){for(var n=[],a=0;a<this.cellsX;a++)n.push({position:new i(a,e),obstacles:new w,units:new w,ballistics:new w});t.push(n)}return t}},{key:"getCellFromVector",value:function(t){var e=Math.floor(t.x/this.cellSize.x),n=Math.floor(t.y/this.cellSize.y);return this.cells[n][e]}},{key:"updateCells",value:function(){var t,e=R(this.cells);try{for(e.s();!(t=e.n()).done;){var n,i=R(t.value);try{for(i.s();!(n=i.n()).done;){var a,r=n.value,o=R(r.units.getAll());try{for(o.s();!(a=o.n()).done;){var s=a.value,l=this.getCellFromVector(s.location);r.position.equals(l.position)||(r.units.removeById(s.state.id),l.units.append(s))}}catch(t){o.e(t)}finally{o.f()}}}catch(t){i.e(t)}finally{i.f()}}}catch(t){e.e(t)}finally{e.f()}}},{key:"getVisibleUnits",value:function(t){var e=this.getCellFromVector(t.location),n=this.getNeighbouringCells(e),a=[],r=t.velocity.copy();r.normalise();var o,l=R(n);try{for(l.s();!(o=l.n()).done;)for(var u=o.value.units.head;u;){var c=u.value;if(t.state.id===c.state.id)u=u.next;else{if((c.location.x-t.location.x)*(c.location.x-t.location.x)+(c.location.y-t.location.y)*(c.location.y-t.location.y)<t.stats.acuity*t.stats.acuity){var h=new i(c.location.x-t.location.x,c.location.y-t.location.y);h.normalise();var f=r.dot(h);s.map(f,-1,1,180,0)<t.stats.FOV/2&&a.push(c)}u=u.next}}}catch(t){l.e(t)}finally{l.f()}return a}},{key:"getNeighbouringCells",value:function(t){var e=[t.position.x],n=[t.position.y];0===t.position.x?e.push(t.position.x+1):t.position.x===this.cellsX-1?e.push(t.position.x-1):(e.push(t.position.x-1),e.push(t.position.x+1)),0===t.position.y?n.push(t.position.y+1):t.position.y===this.cellsY-1?n.push(t.position.y-1):(n.push(t.position.y-1),n.push(t.position.y+1));for(var i=[],a=0;a<n.length;a++)for(var r=0;r<e.length;r++)i.push(this.cells[n[a]][e[r]]);return i}},{key:"createPlatoon",value:function(t){var e=t[0].location,n=new L(e.x,e.y,t),i=this.getCellFromVector(t[0].location);i.platoons.append(n),i.units.deactivateNodes(t)}},{key:"addUnitToPlatoon",value:function(t,e){e.units.append(t),this.getCellFromVector(t.location).units.deactivateNodes(t)}}])&&B(e.prototype,a),t}();function H(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var G=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var a,r;return a=e,r=[{key:"init",value:function(t){this.initialiseCanvas(t);var n=e.initialiseGrid(),i=e.initialiseMap(),a=e.initialisePlatoons(n),r=a.platoons,o=a.units;return o.merge(e.initialiseUnits(n)),{grid:n,map:i,platoons:r,units:o}}},{key:"initialiseCanvas",value:function(t){var e=window.innerWidth-2*t,i=window.innerHeight-2*t,a=document.createElement("div");a.id="container",a.style.padding="".concat(t,"px");var r=document.createElement("canvas");r.width=e,r.height=i;var o=r.getContext("2d");a.appendChild(r),document.body.appendChild(a),n.g={canvas:r,context:o,WIDTH:e,HEIGHT:i,unitTotals:{RED:0,BLUE:0,GREEN:0,YELLOW:0},platoonTotals:{RED:0,BLUE:0,GREEN:0,YELLOW:0}}}},{key:"initialiseMap",value:function(){return new t}},{key:"initialiseGrid",value:function(){var t,e,i=n.g;return i.WIDTH>i.HEIGHT?(t=6,e=4):(t=4,e=6),new j(t,e)}},{key:"initialiseUnits",value:function(t){for(var e,a=new w,r=0;r<80;r++){var o=new i(Math.random()*n.g.WIDTH,Math.random()*n.g.HEIGHT);r%4==0?e="RED":r%4==1?e="BLUE":r%4==2?e="GREEN":r%4==3&&(e="YELLOW");var s=new z(o.x,o.y,e);a.append(s),t.getCellFromVector(o).units.append(s)}return a}},{key:"initialisePlatoons",value:function(t){for(var e=new w,a=new w,r=0;r<8;r++){var o=void 0,l=[],u=new i(s.random(50,n.g.WIDTH-50),s.random(50,n.g.HEIGHT-50));r%4==0?o="RED":r%4==1?o="BLUE":r%4==2?o="GREEN":r%4==3&&(o="YELLOW");for(var c=0;c<9;c++){var h=new z(u.x+20*Math.random(),u.y+20*Math.random(),o);h.state.behaviour="PLATOON",h.state.action="PLATOON",a.append(h),l.push(h),t.getCellFromVector(h.location).units.append(h)}e.append(new L(u.x,u.y,l,o))}return{platoons:e,units:a}}}],null&&H(a.prototype,null),r&&H(a,r),e}();function U(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var D=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"clear",value:function(){var t=n.g,e=t.context,i=t.WIDTH,a=t.HEIGHT;e.clearRect(0,0,i,a)}},{key:"renderOverlay",value:function(){var t=n.g,e=t.context,i=t.platoonTotals,a=t.unitTotals;e.font="16px PressStart2P",e.textBaseline="top",e.textAlign="center",e.fillStyle=E.getRGBA(T.teams.RED,.5),e.fillText(a.RED,20,20),e.fillText(i.RED,20,50),e.fillStyle=E.getRGBA(T.teams.BLUE,.5),e.fillText(a.BLUE,80,20),e.fillText(i.BLUE,80,50),e.fillStyle=E.getRGBA(T.teams.GREEN,.5),e.fillText(a.GREEN,140,20),e.fillText(i.GREEN,140,50),e.fillStyle=E.getRGBA(T.teams.YELLOW,.5),e.fillText(a.YELLOW,200,20),e.fillText(i.YELLOW,200,50)}},{key:"renderGrid",value:function(t){for(var e=n.g.context,i=0;i<t.cellsY;i++)for(var a=0;a<t.cellsX;a++)e.strokeStyle=E.getRGBA(T.GREY,.3),e.strokeRect(a*t.cellSize.x,i*t.cellSize.y,t.cellSize.x,t.cellSize.y)}},{key:"renderAllPlatoons",value:function(t){var e=this;t.forEach((function(t){e.renderPlatoon(t)}))}},{key:"renderAllUnits",value:function(t){var e=this;t.forEach((function(t){e.renderUnit(t)}))}},{key:"renderPlatoon",value:function(t){var e=n.g.context;e.save(),e.translate(t.location.x,t.location.y),e.beginPath(),e.fillStyle=E.getRGBA(T.GREY,.3),e.arc(0,0,10,0,2*Math.PI),e.fill(),e.closePath(),e.restore()}},{key:"renderUnit",value:function(t){var e=n.g.context;e.save(),e.translate(t.location.x,t.location.y),e.rotate(t.angle),e.fillStyle=t.state.colour,e.fillRect(-.25*t.size.x,-.5*t.size.y,.5*t.size.x,.25*t.size.y),e.fillRect(-.25*t.size.x,.25*t.size.y,.5*t.size.x,.25*t.size.y),e.fillRect(-.5*t.size.x,-.25*t.size.y,t.size.x,.5*t.size.y),e.restore()}},{key:"renderPause",value:function(){var t=n.g,e=t.context,i=t.WIDTH,a=t.HEIGHT;e.font="32px PressStart2P",e.textBaseline="top",e.textAlign="center",e.fillStyle=E.getRGB(T.WHITE),e.fillText("PAUSED",i/2,a/2-15)}}],null&&U(e.prototype,null),i&&U(e,i),t}();function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,a,r=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){s=!0,a=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return r}}(t,e)||F(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=F(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function F(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var J=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=G.init(20),n=e.grid,i=e.map,a=e.platoons,r=e.units;this.grid=n,this.map=i,this.platoons=a,this.units=r,this.running=!0,this.previous=performance.now()}var e,n;return e=t,(n=[{key:"run",value:function(){this.draw(),this.running&&(this.updateAI(),this.updatePhysics(),this.grid.updateCells(),this.updatePlatoons()),requestAnimationFrame(this.run.bind(this))}},{key:"draw",value:function(){D.clear(),D.renderGrid(this.grid),D.renderOverlay(),D.renderAllPlatoons(this.platoons.getAll()),D.renderAllUnits(this.units.getAll()),this.running||(performance.now()-this.previous)%1600<800&&D.renderPause()}},{key:"updateAI",value:function(){var t,e=W(this.platoons.getAll());try{for(e.s();!(t=e.n()).done;)t.value.update()}catch(t){e.e(t)}finally{e.f()}var n,i=W(this.units.getAll());try{for(i.s();!(n=i.n()).done;){var a=n.value,r=this.grid.getVisibleUnits(a);"PLATOON"!==a.state.behaviour&&a.performBehaviour(r)}}catch(t){i.e(t)}finally{i.f()}}},{key:"updatePhysics",value:function(){var t,e=W(this.units.getAll());try{for(e.s();!(t=e.n()).done;)t.value.checkEdges()}catch(t){e.e(t)}finally{e.f()}}},{key:"updatePlatoons",value:function(){var t,e={},n=W(this.units.getAll());try{for(n.s();!(t=n.n()).done;){var i=t.value;"PLATOON"===i.state.behaviour&&"JOINING"===i.state.action&&(e.hasOwnProperty(i.state.platoon)?e[i.state.platoon].push(i):e[i.state.platoon]=[i],this.grid.getCellFromVector(i.location).units.removeById(i.state.id))}}catch(t){n.e(t)}finally{n.f()}if(Object.entries(e).length>=1)for(var a=0,r=Object.entries(e);a<r.length;a++){var o=V(r[a],2),l=(o[0],o[1]),u=l.map((function(t){return t.location})),c=s.meanVector(u),h=l[0].stats.team;this.platoons.append(new L(c.x,c.y,l,h))}}}])&&q(e.prototype,n),t}(),$=n(379),Z=n.n($),_=n(795),X=n.n(_),K=n(569),Q=n.n(K),tt=n(565),et=n.n(tt),nt=n(216),it=n.n(nt),at=n(589),rt=n.n(at),ot=n(426),st={};st.styleTagTransform=rt(),st.setAttributes=et(),st.insert=Q().bind(null,"head"),st.domAPI=X(),st.insertStyleElement=it(),Z()(ot.Z,st),ot.Z&&ot.Z.locals&&ot.Z.locals;var lt=new J;document.addEventListener("keyup",(function(t){"p"===t.key&&(lt.running=!lt.running,lt.pauseVisible=!0,lt.previous=performance.now())})),lt.run()})()})();