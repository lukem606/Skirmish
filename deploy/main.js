(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>v});var i=n(81),a=n.n(i),s=n(645),o=n.n(s),r=n(667),l=n.n(r),u=new URL(n(872),n.b),c=new URL(n(562),n.b),h=o()(a()),f=l()(u),d=l()(c);h.push([t.id,'@font-face {\n  font-family: "PressStart2P";\n  font-style: normal;\n  font-weight: 400;\n  src: url('+f+')\n    format("woff2");\n  src: url('+d+') format("woff");\n  /* src: url("./assets/fonts/press-start-2p-v9-latin-regular.eot");\n  src: local(""),\n    url("./assets/fonts/press-start-2p-v9-latin-regular.eot?#iefix")\n      format("embedded-opentype"),\n    url("./assets/fonts/press-start-2p-v9-latin-regular.woff2") format("woff2"),\n    url("./assets/fonts/press-start-2p-v9-latin-regular.woff") format("woff"),\n    url("./assets/fonts/press-start-2p-v9-latin-regular.ttf") format("truetype"),\n    url("./assets/fonts/press-start-2p-v9-latin-regular.svg#PressStart2P")\n      format("svg"); */\n}\n\nbody {\n  background-color: rgb(0, 0, 0);\n  margin: 0;\n}\n',""]);const v=h},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,a,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(o[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);i&&o[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var s={},o=[],r=0;r<t.length;r++){var l=t[r],u=i.base?l[0]+i.base:l[0],c=s[u]||0,h="".concat(u," ").concat(c);s[u]=c+1;var f=n(h),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var v=a(d,i);i.byIndex=r,e.splice(r,0,{identifier:h,updater:v,references:1})}o.push(h)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var s=i(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var r=n(s[o]);e[r].references--}for(var l=i(t,a),u=0;u<s.length;u++){var c=n(s[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}s=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},562:(t,e,n)=>{t.exports=n.p+"fonts/76327b932046542e0e55.woff"},872:(t,e,n)=>{t.exports=n.p+"fonts/00bf2b9f869220e3f852.woff2"}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={id:i,exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="/Skirmish/",n.b=document.baseURI||self.location.href,(()=>{const t={teams:{RED:"rgb(235, 60, 39)",BLUE:"rgb(35, 98, 162)",GREEN:"rgb(3, 160, 98)",YELLOW:"rgb(251, 183, 65)"}};function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=n.g.WIDTH,this.height=n.g.HEIGHT}var i,a;return i=t,(a=[{key:"render",value:function(t){for(var e=n.g.context,i=0;i<t.cellsY;i++)for(var a=0;a<t.cellsX;a++)e.strokeStyle="rgb(100, 100, 100, 0.3)",e.strokeRect(a*t.cellSize.x,i*t.cellSize.y,t.cellSize.x,t.cellSize.y)}}])&&e(i.prototype,a),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s,o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"degreesToRadians",value:function(t){return t*Math.PI/180}},{key:"random",value:function(t,e){var n=e-t;return Math.random()*n+t}},{key:"gaussian",value:function(){for(var t=0,e=0;0===t;)t=Math.random();for(;0===e;)e=Math.random();return Math.sqrt(-1*Math.log(t))*Math.cos(1*Math.PI*e)}},{key:"mean",value:function(t){return t.reduce((function(t,e){return t+e}))/t.length}},{key:"map",value:function(t,e,n,i,a){return t/(e-n)*(i-a)}}],null&&a(e.prototype,null),n&&a(e,n),t}(),r=new Uint8Array(16);function l(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(r)}const u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,c=function(t){return"string"==typeof t&&u.test(t)};for(var h=[],f=0;f<256;++f)h.push((f+256).toString(16).substr(1));const d=function(t,e,n){var i=(t=t||{}).random||(t.rng||l)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=i[a];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(h[t[e+0]]+h[t[e+1]]+h[t[e+2]]+h[t[e+3]]+"-"+h[t[e+4]]+h[t[e+5]]+"-"+h[t[e+6]]+h[t[e+7]]+"-"+h[t[e+8]]+h[t[e+9]]+"-"+h[t[e+10]]+h[t[e+11]]+h[t[e+12]]+h[t[e+13]]+h[t[e+14]]+h[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}(i)};function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getFormation",value:function(t){return 2===t?[[0,-.75],[0,.75]]:3===t?[[.75,0],[-.75,-.75],[-.75,.75]]:4===t?[[.75,-.75],[.75,.75],[-.75,-.75],[-.75,.75]]:5===t?[[1.5,0],[0,-.75],[0,.75],[-1.5,-.75],[-1.5,.75]]:6===t?[[1.5,-.75],[1.5,.75],[0,-.75],[0,.75],[-1.5,-.75],[-1.5,.75]]:7===t?[[2.25,0],[.75,-.75],[.75,.75],[-.75,-.75],[-.75,.75],[-2.25,-.75],[-2.25,.75]]:8===t?[[2.25,-.75],[2.25,.75],[.75,-.75],[.75,.75],[-.75,-.75],[-.75,.75],[-2.25,-.75],[-2.25,.75]]:9===t?[[3,0],[1.5,-.75],[1.5,.75],[0,-.75],[0,.75],[-1.5,-.75],[-1.5,.75],[-3,-.75],[-3,.75]]:void 0}}],null&&v(e.prototype,null),n&&v(e,n),t}();function p(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,r=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){r=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw s}}}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var x=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;m(this,t),this.head=e,this.tail=e,this.length=e?1:0}var e,n;return e=t,n=[{key:"getAll",value:function(){for(var t=[],e=this.head;e;)t.push(e.value),e=e.next;return t}},{key:"printList",value:function(){for(var t=[],e=this.head;null!==e;)t.push(e),e=e.next;console.log([].concat(t))}},{key:"prepend",value:function(t){var e=new w(t);0===this.length?(this.head=e,this.tail=this.head):(e.next=this.head,this.head.previous=e,this.head=e),this.length++}},{key:"append",value:function(t){var e=new w(t);0===this.length?(this.head=e,this.tail=this.head):(this.tail.next=e,e.previous=this.tail,this.tail=e),this.length++}},{key:"insert",value:function(t,e){if(e<0||e>this.length||!Number.isInteger(e))console.warn("Index is not a valid integer! Current length ".concat(this.length));else{if(0===e)this.prepend(t);else if(e===this.length)this.append(t);else{for(var n=new w(t),i=this.head,a=0;a<e-1;a++)i=i.next;var s=i.next;n.next=s,i.next=n,n.previous=i,s.previous=n}this.length++}}},{key:"remove",value:function(t){console.log(t);var e=this.head,n=t,i=0;for(t.constructor!==Array&&(n=[t]);e;){var a,s=p(n);try{for(s.s();!(a=s.n()).done;){var o=a.value;if(e.value===o&&(e.previous&&e.next?(e.previous.next=e.next,e.next.previous=e.previous):e.previous?(this.tail=e.previous,this.tail.next=null):e.next?(this.head=e.next,this.head.previous=null):(this.head=null,this.tail=this.head),this.length--,(i+=1)===n.length))return}}catch(t){s.e(t)}finally{s.f()}e=e.next}console.warn('"'.concat(n.join(", "),'" not found in list!'))}}],n&&b(e.prototype,n),t}(),w=function t(e){m(this,t),this.value=e,this.previous=null,this.next=null};function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var k=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e||0,this.y=n||0,this.z=i||0}var e,n,i;return e=t,i=[{key:"add",value:function(e,n){return new t(e.x+n.x,e.y+n.y,e.z+n.z)}},{key:"sub",value:function(e,n){return new t(e.x-n.x,e.y-n.y,e.z-n.z)}},{key:"mult",value:function(e,n){return new t(e.x*n,e.y*n,e.z*n)}},{key:"div",value:function(e,n){var i,a,s;return 0!==n?(i=e.x/n,a=e.y/n,s=e.z/n):(console.warn("Dividing by zero!"),i=e.x,a=e.y,s=e.z_),new t(i,a,s)}},{key:"fromAngle2d",value:function(e){return new t(Math.cos(e),Math.sin(e))}},{key:"fromAngle3d",value:function(t,e){var n=Math.cos(e),i=Math.sin(e),a=Math.cos(t),s=Math.sin(t);return new p5.Vector(s*i,-1*a,s*n)}}],(n=[{key:"add",value:function(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}},{key:"sub",value:function(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}},{key:"mult",value:function(t){this.x*=t,this.y*=t,this.z*=t}},{key:"div",value:function(t){0!==t?(this.x/=t,this.y/=t,this.z/=t):console.warn("Dividing by zero!")}},{key:"angleBetween",value:function(e){return t.sub(e,this).heading()}},{key:"copy",value:function(){return new t(this.x,this.y,this.z)}},{key:"cross",value:function(e){return new t(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}},{key:"dist",value:function(e){return t.sub(e,this).magnitude()}},{key:"distSq",value:function(e){return t.sub(e,this).magSq()}},{key:"dot",value:function(t){return this.x*(t.x||0)+this.y*(t.y||0)+this.z*(t.z||0)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}},{key:"heading",value:function(){return Math.atan2(this.y,this.x)}},{key:"lerp",value:function(e,n,i,a){e instanceof t?this.lerp(e.x,e.y,e.z,n):(this.x+=(e-this.x)*a||0,this.y+=(n-this.y)*a||0,this.z+=(i-this.z)*a||0)}},{key:"limit",value:function(t){var e=this.magnitude;e*e>t*t&&(this.div(e),this.mult(t))}},{key:"normalise",value:function(){var t=this.magnitude();0!==t&&this.mult(1/t)}},{key:"magnitude",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}},{key:"magSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}}])&&T(e.prototype,n),i&&T(e,i),t}();function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function O(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var M=function(){function e(t,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.location=new k(t,n),this.velocity=new k(o.random(-5,5),o.random(-5,5)),this.acceleration=new k,this.size=new k(4,4),this.angle=this.velocity.heading(),this.angleOffset=0;var a=20+2*o.gaussian(),s=1+.25*o.gaussian(),r=20*this.size.x+o.gaussian()*this.size.x*2,l=.75*r,u=o.random(2,4);this.stats={team:i,platoon:null,health:100,attack:a,speed:s,FOV:130,acuity:r,range:l,restTime:u},this.state={behaviour:"NON-COMBAT",action:"REST",destination:null,target:null,previous:performance.now(),id:d()}}var i,a;return i=e,(a=[{key:"performBehaviour",value:function(t){if(!this.state.target&&t.length>=1){var e=this.getNearestEntity(t);if(e){if(e.stats.team!==this.stats.team)return;if(e.stats.team===this.stats.team)return void("NON-COMBAT"===e.state.behaviour&&"JOIN"!==e.state.action&&(this.state.action="JOIN",this.state.target=e,this.state.destination=e.location,e.state.action="JOIN",e.state.target=this,e.state.destination=this.location))}}"NON-COMBAT"===this.state.behaviour?this.nonCombatBehaviour():"COMBAT"===this.state.behaviour&&this.combatBehaviour()}},{key:"nonCombatBehaviour",value:function(){"PATROL"===this.state.action?this.patrol():"REST"===this.state.action?this.rest():"JOIN"===this.state.action&&this.join()}},{key:"combatBehaviour",value:function(){"ATTACK"===this.state.action||this.state.action}},{key:"patrol",value:function(){this.location.equals(this.state.destination)?(this.state.destination=null,this.state.action="REST",this.state.previous=performance.now()):this.location.dist(this.state.destination)<this.stats.speed?this.location=this.state.destination.copy():(this.seek(this.state.destination),this.updateLocation())}},{key:"rest",value:function(){performance.now()-this.state.previous>1e3*this.stats.restTime&&(this.state.action="PATROL",this.getDestination(),this.seek(this.state.destination),this.angle=0,this.angleOffset=0)}},{key:"join",value:function(){if(this.location.equals(this.state.target.location)){d();var t=this.state.target;this.state.target=null,this.state.destination=null,this.state.behaviour="PLATOON",this.state.action="PLATOON",this.stats.platoon=[this,t],t.state.target=null,t.state.destination=null,t.state.behaviour="PLATOON",t.state.action="PLATOON",t.stats.platoon=[this,t]}else this.location.dist(this.state.target.location)<this.stats.speed?this.location=this.state.destination.copy():(this.seek(this.state.target.location),this.updateLocation())}},{key:"seek",value:function(t){var e=k.sub(t,this.location);e.normalise(),e.mult(this.stats.acuity/2);var n=o.random(0,2*Math.PI),i=this.stats.acuity/2,a=k.add(e,new k(Math.cos(n)*i,Math.sin(n)*i));a.normalise(),a.mult(this.stats.speed),a.sub(this.velocity),this.applyBehaviour(a),this.angle=e.heading()+o.map(Math.cos(this.angleOffset),0-Math.PI,Math.PI,0,Math.PI),this.angleOffset+=.25}},{key:"getDestination",value:function(){var t=n.g,e=t.WIDTH,i=t.HEIGHT,a=new k(Math.random()*e,Math.random()*i),s=k.sub(a,this.location),o=s.magnitude();s.normalise(),o>2*this.stats.acuity&&(s.mult(2*this.stats.acuity),a.x=this.location.x+s.x,a.y=this.location.y+s.y),this.state.destination=a}},{key:"updateLocation",value:function(){this.velocity.add(this.acceleration),this.velocity.limit(this.stats.speed),this.location.add(this.velocity),this.acceleration.mult(0)}},{key:"getNearestEntity",value:function(t){var e,n,i=1e6,a=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,r=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){r=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw s}}}}(t);try{for(a.s();!(n=a.n()).done;){var s=n.value,o=this.location.dist(s.location);o<i&&(i=o,e=s)}}catch(t){a.e(t)}finally{a.f()}return e||!1}},{key:"applyBehaviour",value:function(t){this.acceleration.add(t)}},{key:"checkEdges",value:function(){var t=n.g,e=t.WIDTH,i=t.HEIGHT;this.location.x<0?this.location.x=0:this.location.x>e-this.size.x&&(this.location.x=e-this.size.x),this.location.y<0?this.location.y=0:this.location.y>i-this.size.y&&(this.location.y=i-this.size.y)}},{key:"render",value:function(){var e=n.g.context;e.save(),e.translate(this.location.x,this.location.y),e.rotate(this.angle),e.beginPath(),e.fillStyle="rgba(255, 0, 0, 0.2)",e.lineTo(Math.cos(o.degreesToRadians(-1*this.stats.FOV/2)),Math.sin(o.degreesToRadians(-1*this.stats.FOV/2))),e.arc(0,0,this.stats.acuity,o.degreesToRadians(-1*this.stats.FOV/2),o.degreesToRadians(this.stats.FOV/2)),e.lineTo(0,0),e.fill(),e.closePath(),e.beginPath(),e.fillStyle="rgba(0, 0, 255, 0.4)",e.lineTo(Math.cos(o.degreesToRadians(-1*this.stats.FOV/2)),Math.sin(o.degreesToRadians(-1*this.stats.FOV/2))),e.arc(0,0,this.stats.range,o.degreesToRadians(-1*this.stats.FOV/2),o.degreesToRadians(this.stats.FOV/2)),e.lineTo(0,0),e.fill(),e.closePath(),e.fillStyle=t.teams[this.stats.team],e.fillRect(-.5*this.size.x/2,-1*this.size.y,this.size.x/2,this.size.y/2),e.fillRect(-.5*this.size.x/2,1*this.size.y/2,this.size.x/2,this.size.y/2),e.fillRect(-1*this.size.x/2,-1*this.size.y/2,this.size.x,this.size.y),e.restore(),e.font="10px PressStart2P",e.fillStyle="rgba(255, 255, 255, 0.5)",e.textBaseline="top",e.textAlign="center",e.fillText(this.state.id,this.location.x,this.location.y-30)}}])&&O(i.prototype,a),e}();function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var I=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i[0].stats.team;z(this,e),this.location=new k(t,n),this.velocity=new k(o.random(-1,1),o.random(-1,1)),this.stats={team:a,FOV:130},this.state={behaviour:"NON-COMBAT",action:"REST",destination:0,target:0,direction:0,previous:performance.now(),id:d()},this.units=i?this.populate(i):this.populate(a)}var i,a;return i=e,a=[{key:"populate",value:function(t){var e=new x,n=1e3,i=0,a=1e3;if(t.constructor===Array){var s,o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,r=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){r=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw s}}}}(t);try{for(o.s();!(s=o.n()).done;){var r=s.value;e.append(r),n=r.stats.speed<n?r.stats.speed:n,i=r.stats.acuity>i?r.stats.acuity:i,a=r.stats.restTime>a?r.stats.restTime:a}}catch(t){o.e(t)}finally{o.f()}}else for(var l=0;l<9;l++){var u=new M(this.location.x+20*Math.random(),this.location.y+20*Math.random(),teamNumber);e.append(u),n=u.stats.speed<n?u.stats.speed:n,i=u.stats.acuity>i?u.stats.acuity:i,a=u.stats.restTime>a?u.stats.restTime:a}return this.stats.speed=n,this.stats.acuity=i,this.stats.restTime=a,this.state.formation=y.getFormation(e.length),e}},{key:"update",value:function(){"NON-COMBAT"===this.state.behaviour&&("PATROL"===this.state.action?this.patrol():"REST"===this.state.action?this.rest():"JOIN"===this.state.action&&this.join())}},{key:"patrol",value:function(){this.location.equals(this.state.destination)?(this.state.action="REST",this.state.destination=0,this.state.previous=performance.now()):this.location.dist(this.state.destination)<this.stats.speed?this.location=this.state.destination.copy():this.location.add(this.velocity)}},{key:"rest",value:function(){performance.now()-this.state.previous>1e3*this.stats.restTime&&(this.state.action="PATROL",this.getDestination())}},{key:"getDestination",value:function(){var t=n.g,e=t.WIDTH,i=t.HEIGHT,a=new k(Math.random()*e,Math.random()*i),s=k.sub(a,this.location);s.normalise(),this.state.direction=s,this.location.dist(a)>2*this.stats.acuity&&(a=this.normaliseDestination(a)),this.state.destination=a,this.velocity=k.mult(s,this.stats.speed)}},{key:"normaliseDestination",value:function(t){if((t=k.add(this.location,k.mult(this.state.direction,2*this.stats.acuity))).x<0||t.x>n.g.WIDTH){var e=Math.abs(t.x)/(this.location.x-t.x);t=new k(Math.cos(direction.heading())*e,Math.sin(direction.heading())*e)}if(t.y<0||t.y>n.g.HEIGHT){var i=Math.abs(t.y)/(this.location.y-t.y);t=new k(Math.cos(direction.heading())*i,Math.sin(direction.heading())*i)}return t}},{key:"checkEdges",value:function(){var t=n.g.canvas;this.location.x<0?this.location.x=t.width:this.location.x>t.width&&(this.location.x=0),this.location.y<0?this.location.y=t.height:this.location.y>t.height&&(this.location.y=0)}},{key:"render",value:function(){var e=this,i=n.g.context;i.beginPath(),i.save(),i.translate(this.location.x,this.location.y),i.rotate(this.velocity.heading()),i.fillStyle="rgba(100, 100, 100, 0.3)",i.lineTo(Math.cos(o.degreesToRadians(-1*this.stats.FOV/2)),Math.sin(o.degreesToRadians(-1*this.stats.FOV/2))),i.arc(0,0,this.stats.acuity,o.degreesToRadians(-1*this.stats.FOV/2),o.degreesToRadians(this.stats.FOV/2)),i.lineTo(0,0),i.fill(),i.fillStyle=t.teams[this.stats.team],this.units.getAll().forEach((function(t,n){i.fillRect(e.state.formation[n][0]*t.size.x,e.state.formation[n][1]*t.size.y,t.size.x,t.size.y)})),i.restore(),i.closePath()}}],a&&A(i.prototype,a),e}();function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var R=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=n.g.WIDTH,this.height=n.g.HEIGHT,this.cellsX=e,this.cellsY=i,this.cellSize=new k(n.g.WIDTH/e,n.g.HEIGHT/i),this.cells=this.initaliseCells()}var e,i;return e=t,(i=[{key:"initaliseCells",value:function(){for(var t=[],e=0;e<this.cellsY;e++){for(var n=[],i=0;i<this.cellsX;i++)n.push({position:new k(i,e),obstacles:new x,platoons:new x,units:new x,ballistics:new x});t.push(n)}return t}},{key:"getCellFromVector",value:function(t){var e=Math.floor(t.x/this.cellSize.x),n=Math.floor(t.y/this.cellSize.y);return this.cells[n][e]}},{key:"updateCell",value:function(t,e){var n=this.getCellFromVector(t.location);e.position.equals(n.position)||(t instanceof M?(n.units.append(t),e.units.remove(t)):t instanceof I&&(n.platoons.append(t),e.platoons.remove(t)))}},{key:"getVisibleEntities",value:function(t){var e=this.getCellFromVector(t.location),n=this.getNeighbouringCells(e),i=[],a=t.velocity.copy();a.normalise();var s,r=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,r=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){r=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw s}}}}(n);try{for(r.s();!(s=r.n()).done;)for(var l=s.value.units.head;l;){var u=l.value;if(t.state.id===u.state.id)l=l.next;else{if((u.location.x-t.location.x)*(u.location.x-t.location.x)+(u.location.y-t.location.y)*(u.location.y-t.location.y)<t.stats.acuity*t.stats.acuity){var c=new k(u.location.x-t.location.x,u.location.y-t.location.y);c.normalise();var h=a.dot(c);o.map(h,-1,1,180,0)<t.stats.FOV/2&&i.push(u)}l=l.next}}}catch(t){r.e(t)}finally{r.f()}return i}},{key:"getNeighbouringCells",value:function(t){var e=[t.position.x],n=[t.position.y];0===t.position.x?e.push(t.position.x+1):t.position.x===this.cellsX-1?e.push(t.position.x-1):(e.push(t.position.x-1),e.push(t.position.x+1)),0===t.position.y?n.push(t.position.y+1):t.position.y===this.cellsY-1?n.push(t.position.y-1):(n.push(t.position.y-1),n.push(t.position.y+1));for(var i=[],a=0;a<n.length;a++)for(var s=0;s<e.length;s++)i.push(this.cells[n[a]][e[s]]);return i}},{key:"createPlatoon",value:function(t){var e=t[0].location,n=new I(e.x,e.y,t),i=this.getCellFromVector(t[0].location);i.platoons.append(n),i.units.remove(t)}},{key:"addUnitToPlatoon",value:function(t,e){e.units.append(t),this.getCellFromVector(t.location).units.remove(t)}}])&&P(e.prototype,i),t}();function H(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var L=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,a;return e=t,a=[{key:"initialiseCanvas",value:function(t){var e=window.innerWidth-2*t,i=window.innerHeight-2*t,a=document.createElement("div");a.id="container",a.style.padding="".concat(t,"px");var s=document.createElement("canvas");s.width=e,s.height=i,a.appendChild(s),document.body.appendChild(a),this.canvas=document.querySelector("canvas"),this.context=s.getContext("2d"),n.g={canvas:this.canvas,context:this.context,WIDTH:e,HEIGHT:i,unitTotals:{RED:0,BLUE:0,GREEN:0,YELLOW:0},platoonTotals:{RED:0,BLUE:0,GREEN:0,YELLOW:0}}}},{key:"initialiseMap",value:function(){return new i}},{key:"initialiseGrid",value:function(){var t=new R(6,4);return this.initialiseUnits(t),t}},{key:"initialiseUnits",value:function(t){for(var e=n.g.unitTotals,i=0;i<4;i++){var a=new k(Math.random()*n.g.WIDTH,Math.random()*n.g.HEIGHT),s=new M(a.x,a.y,"RED");e[s.stats.team]=e[s.stats.team]+1,t.getCellFromVector(a).units.append(s)}}},{key:"initialisePlatoons",value:function(t){for(var e=0;e<5;e++){for(var i=[],a=new k(o.random(50,n.g.WIDTH-50),o.random(50,n.g.HEIGHT-50)),s=0;s<Math.round(o.random(2,9));s++){var r=new M(a.x+10*o.gaussian(),a.y+10*o.gaussian(),"RED");i.push(r)}t.getCellFromVector(a).platoons.append(new I(a.x,a.y,i))}}}],null&&H(e.prototype,null),a&&H(e,a),t}();function N(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var j=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),L.initialiseCanvas(20),this.grid=L.initialiseGrid(),this.map=L.initialiseMap(),this.running=!0,this.previous=performance.now()}var i,a;return i=e,(a=[{key:"run",value:function(){var t=n.g,e=t.context,i=t.WIDTH,a=t.HEIGHT;this.draw(),this.running?this.update():(performance.now()-this.previous)%1600<800&&(e.font="30px PressStart2P",e.textBaseline="top",e.fillStyle="rgb(255, 255, 255)",e.textAlign,e.fillText("PAUSED",i/2,a/2)),requestAnimationFrame(this.run.bind(this))}},{key:"update",value:function(){for(var t=0;t<this.grid.cellsY;t++)for(var e=0;e<this.grid.cellsX;e++){for(var n=this.grid.cells[t][e],i=n.platoons.head,a=n.units.head;i;){var s=i.value;i=i.next,s.update(),s.checkEdges(),this.grid.updateCell(s,n)}for(;a;){var o=a.value;if(a=a.next,"PLATOON"===o.state.behaviour)o.stats.platoon.constructor===Array?this.grid.createPlatoon(o.stats.platoon):o.stats.platoon instanceof Platoon&&this.grid.addUnitToPlatoon(o,o.stats.platoon);else{var r=this.grid.getVisibleEntities(o);o.performBehaviour(r),o.checkEdges(),this.grid.updateCell(o,n)}}}}},{key:"draw",value:function(){var e=n.g,i=e.context,a=e.unitTotals;i.clearRect(0,0,n.g.WIDTH,n.g.HEIGHT),this.map.render(this.grid);for(var s=0;s<this.grid.cellsY;s++)for(var o=0;o<this.grid.cellsX;o++){for(var r=this.grid.cells[s][o],l=r.platoons.head,u=r.units.head;l;){var c=l.value;l=l.next,c.render()}for(;u;){var h=u.value;u=u.next,h.render()}}i.font="20px PressStart2P",i.textBaseline="top",i.fillStyle=t.teams.RED,i.fillText(a.RED,40,20),i.fillStyle=t.teams.BLUE,i.fillText(a.BLUE,140,20),i.fillStyle=t.teams.GREEN,i.fillText(a.GREEN,240,20),i.fillStyle=t.teams.YELLOW,i.fillText(a.YELLOW,340,20)}}])&&N(i.prototype,a),e}(),V=n(379),D=n.n(V),F=n(795),B=n.n(F),U=n(569),G=n.n(U),W=n(565),q=n.n(W),Y=n(216),J=n.n(Y),X=n(589),$=n.n(X),Z=n(426),_={};_.styleTagTransform=$(),_.setAttributes=q(),_.insert=G().bind(null,"head"),_.domAPI=B(),_.insertStyleElement=J(),D()(Z.Z,_),Z.Z&&Z.Z.locals&&Z.Z.locals;var K=new j;document.addEventListener("keyup",(function(t){" "===t.key&&(K.running=!K.running,K.pauseVisible=!0,K.previous=performance.now())})),K.run()})()})();