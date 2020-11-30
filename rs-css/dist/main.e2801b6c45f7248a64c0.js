!function(){"use strict";var t={7618:function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n=document.querySelector(".editor__markup"),r=document.querySelector(".shelf"),o=document.querySelector(".hint");function a(e,n){var r=e.parentElement,o=t(r.children),c=[];return r!==n&&(c=c.concat(a(r,n))),c.push(o.indexOf(e)),c}function c(t,e){if(t){var n=e;n.children[0]&&"DIV"===n.children[0].tagName&&0===n.children[0].children.length&&(n=n.children[0]),o.classList.add("active");var r,a=n.getBoundingClientRect();r="PLATE"===n.tagName?a.bottom-parseFloat(window.getComputedStyle(e,":before").height):a.top,o.style.top=r+window.pageYOffset-o.offsetHeight+"px",o.style.left=a.right+window.pageXOffset+10+"px";var c=e.cloneNode();c.classList.remove("active","hovered"),o.textContent=c.outerHTML.replace(' class=""',"")}else o.classList.remove("active")}var i=[{title:"Select the pots",selector:"pot",markup:" \n\t <pot>\n\t \t<sprout></sprout>\n\t </pot>\n\t <pot>\n\t \t<sprout></sprout>\n\t </pot>\n\t <pot>\n\t \t<sprout></sprout>\n\t </pot>"},{title:"Select the pot on the plate",selector:"plate pot",markup:" \n\t <pot>\n\t \t<sprout></sprout>\n    </pot>\n    <plate>\n\t \t<pot>\n\t\t\t<sprout></sprout>\n\t \t</pot>\n    </plate>\n    <pot>\n\t \t<sprout></sprout>\n    </pot>"},{title:"Select the bowl pots",selector:".bowl",markup:' \n    <pot class="bowl">\n   \t<flower>\n     \t\t<div></div>\n     \t\t<div></div>\n    \t</flower>\n    </pot>\n    <pot>\n      <flower>\n         <div></div>\n         <div></div>\n      </flower>\n    </pot>\n    <plate>\n      <pot class="bowl">\n      \t<sprout></sprout>\n      </pot>\n    </plate>'},{title:"Select the cup",selector:"#cup",markup:' \n\t <plate>\n\t \t<pot>\n\t\t\t<sprout></sprout>\n\t \t</pot>\n  \t </plate>\n  \t <pot>\n\t \t<rose>\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t \t</rose>\n   </pot>\n   <pot id="cup">\n\t \t<sprout></sprout>\n   </pot>\n   <plate>\n\t \t<pot>\n\t\t\t<sprout></sprout>\n\t\t </pot>\n   </plate>'}];function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=document.querySelector(".levels__wrapper"),p=document.createDocumentFragment();i.forEach((function(t,e){var n=document.createElement("span");n.innerHTML='<svg>\n  <use xlink:href="#check-icon" href="#check-icon"></use>\n  </svg>'.concat(e+1),p.appendChild(n)})),s.appendChild(p);var d=document.querySelector(".game"),f=document.querySelector(".task"),v=document.querySelector(".editor__markup"),m=document.querySelector(".shelf"),h=document.querySelector(".editor"),g=document.querySelector(".editor__btn"),y=document.querySelector(".editor__input"),S=document.querySelector(".help");function b(){d.classList.remove("win"),y.value="",g.disabled=!1,S.disabled=!1,y.readOnly=!1;var t=localStorage.getItem("curLevel")||0,e=i[t];f.textContent=e.title,m.innerHTML=e.markup,m.querySelectorAll(e.selector).forEach((function(t){return t.classList.add("active")}));for(var n=e.markup.replace(/[\t\n]/g,"").split("<").slice(1).map((function(t){return t.trim()})),r="",o=0;o<n.length;o+=1){var a=n[o];"div>"===a&&"/div>"===n[o+1]?(n.splice(o,2),o-=2):"/"+a===n[o+1]&&(n.splice(o,2,a.replace(">"," />")),o-=1)}n.forEach((function(t){var e="&lt;".concat(t.replace(">","&gt;"));e.endsWith("/&gt;")?r+="<div>".concat(e,"</div>"):e.startsWith("&lt;/")?r+="".concat(e,"</div>"):r+="<div>".concat(e)})),v.innerHTML='\n  &lt;div class="shelf"&gt;\n  '.concat(r,"\n  &lt;/div&gt;")}function L(){var t=+localStorage.getItem("curLevel");t!==i.length-1?(localStorage.setItem("curLevel",t+1),b()):d.classList.add("win")}function w(t){if(".active"!==y.value){var e,n=l(m.querySelectorAll(".active"));try{e=l(m.querySelectorAll(t))}catch(t){return void h.classList.add("wrong")}n.every((function(t,n){return e[n]===t}))?L():h.classList.add("wrong")}else h.classList.add("wrong")}s.addEventListener("click",(function(t){var e=t.target.closest("span");if(e){var n=+e.textContent-1;localStorage.setItem("curLevel",n),b()}})),g.addEventListener("click",(function(){w(y.value)})),y.addEventListener("keyup",(function(t){"Enter"===t.key&&(t.preventDefault(),w(y.value))})),h.addEventListener("animationend",(function(){return h.classList.remove("wrong")})),S.addEventListener("click",(function(){var t=i[+localStorage.getItem("curLevel")];function e(n){y.value!==t.selector?(y.value+=t.selector[y.value.length],setTimeout((function(){e(L)}),150)):n()}y.value="",g.disabled=!0,S.disabled=!0,y.readOnly=!0,setTimeout((function(){e()}),300)})),b(),function(){function t(t,e){if(t!==e){var o=t;"DIV"===t.tagName&&0===t.children.length&&""===t.textContent&&(o=o.parentElement),o.classList.add("hovered");var i=a(o,e),l=e===r?n:r,u=i.reduce((function(t,e){return t.children[e]}),l),s=e===r?o:u;u.classList.add("hovered"),c(!0,s)}}function e(){document.querySelectorAll(".hovered").forEach((function(t){return t.classList.remove("hovered")})),c(!1)}n.addEventListener("mouseover",(function(e){return t(e.target,e.currentTarget)})),n.addEventListener("mouseout",e),r.addEventListener("mouseover",(function(e){return t(e.target,e.currentTarget)})),r.addEventListener("mouseout",e)}()}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0},e=[[1202,202],[7618,202]],r=function(){};function o(){for(var r,o=0;o<e.length;o++){for(var a=e[o],c=!0,i=1;i<a.length;i++){var l=a[i];0!==t[l]&&(c=!1)}c&&(e.splice(o--,1),r=n(n.s=a[0]))}return 0===e.length&&(n.x(),n.x=function(){}),r}n.x=function(){n.x=function(){},c=c.slice();for(var t=0;t<c.length;t++)a(c[t]);return(r=o)()};var a=function(o){for(var a,c,l=o[0],u=o[1],s=o[2],p=o[3],d=0,f=[];d<l.length;d++)c=l[d],n.o(t,c)&&t[c]&&f.push(t[c][0]),t[c]=0;for(a in u)n.o(u,a)&&(n.m[a]=u[a]);for(s&&s(n),i(o);f.length;)f.shift()();return p&&e.push.apply(e,p),r()},c=self.webpackChunk=self.webpackChunk||[],i=c.push.bind(c);c.push=a}(),n.x()}();