!function(){"use strict";var t={9811:function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n=document.querySelector(".editor__markup"),r=document.querySelector(".shelf"),o=document.querySelector(".hint");function i(e,n){var r=e.parentElement,o=t(r.children).filter((function(t){return"SPAN"!==t.tagName})),a=[];return r!==n&&(a=a.concat(i(r,n))),a.push(o.indexOf(e)),a}function a(t,e){if(t){o.classList.add("active");var n=e;n.children[0]&&"DIV"===n.children[0].tagName&&0===n.children[0].children.length&&(n=n.children[0]);var r,i=n.getBoundingClientRect();r="PLATE"===n.tagName?i.bottom-parseFloat(window.getComputedStyle(e,":before").height):i.top,o.style.top=r+window.pageYOffset-o.offsetHeight+"px",o.style.left=i.right+window.pageXOffset+10+"px";var a=e.cloneNode();a.classList.remove("active","hovered"),o.textContent=a.outerHTML.replace(' class=""',"")}else o.classList.remove("active")}function c(e,o){var l=e;if("DIV"===e.tagName&&0===e.children.length&&""===e.textContent&&(l=e.parentElement),"SPAN"!==e.tagName){if(l!==o){l.classList.add("hovered");var s=i(l,o),u=o===r?n:r,p=s.reduce((function(e,n){return t(e.children).filter((function(t){return"SPAN"!==t.tagName}))[n]}),u),d=o===r?l:p;p.classList.add("hovered"),a(!0,d)}}else c(l.parentElement,o)}function l(){document.querySelectorAll(".hovered").forEach((function(t){return t.classList.remove("hovered")})),a(!1)}var s=[{title:"Select the pots",selector:"pot",markup:" \n\t <pot>\n\t \t<sprout></sprout>\n\t </pot>\n\t <pot>\n\t \t<sprout></sprout>\n\t </pot>\n\t <pot>\n\t \t<sprout></sprout>\n\t </pot>"},{title:"Select the pot on the plate",selector:"plate pot",markup:" \n\t <pot>\n\t \t<sprout></sprout>\n    </pot>\n    <plate>\n\t \t<pot>\n\t\t\t<sprout></sprout>\n\t \t</pot>\n    </plate>\n    <pot>\n\t \t<sprout></sprout>\n    </pot>"},{title:"Select the bowl pots",selector:".bowl",markup:' \n    <pot class="bowl">\n   \t<flower>\n     \t\t<div></div>\n     \t\t<div></div>\n    \t</flower>\n    </pot>\n    <pot>\n      <flower>\n         <div></div>\n         <div></div>\n      </flower>\n    </pot>\n    <plate>\n      <pot class="bowl">\n      \t<sprout></sprout>\n      </pot>\n    </plate>'},{title:"Select the cup",selector:"#cup",markup:' \n\t <plate>\n\t \t<pot>\n\t\t\t<sprout></sprout>\n\t \t</pot>\n  \t </plate>\n  \t <pot>\n\t \t<rose>\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t \t</rose>\n   </pot>\n   <pot id="cup">\n\t \t<sprout></sprout>\n   </pot>\n   <plate>\n\t \t<pot>\n\t\t\t<sprout></sprout>\n\t\t </pot>\n   </plate>'}],u=document.querySelector(".levels__wrapper"),p=document.querySelector(".editor__markup"),d=document.querySelector(".shelf"),f=document.querySelector(".editor"),v=document.querySelector(".game"),h=document.querySelector(".editor__input"),m=document.querySelector(".task"),g=document.querySelector(".editor__btn"),y=document.querySelector(".help"),b=document.querySelector(".levels__btn");function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L,w=new(function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";S(this,t),this.input=e,this.placeholder=n,this.input.addEventListener("keypress",this.keypress.bind(this)),this.input.addEventListener("blur",this.blur.bind(this)),this.input.addEventListener("focus",this.focus.bind(this)),this.input.addEventListener("keyup",this.keyup.bind(this))}var e,n,r;return e=t,(n=[{key:"on",value:function(t,e){this.input.addEventListener(t,e)}},{key:"lockInput",value:function(t){this.value="",this.blur(),t?(g.disabled=!0,y.disabled=!0,this.input.contentEditable=!1):(g.disabled=!1,y.disabled=!1,this.input.contentEditable=!0)}},{key:"print",value:function(t,e){var n=this;this.lockInput(!0),this.value="",this.input.classList.remove("empty"),function r(){n.value!==t?(n.value+=t[n.value.length],n.highlight(),setTimeout(r,150)):e()}()}},{key:"blur",value:function(){""===this.value&&(this.value=this.placeholder,this.input.classList.add("empty"))}},{key:"focus",value:function(){this.input.classList.contains("empty")&&(this.value="",this.input.classList.remove("empty"))}},{key:"keyup",value:function(t){"Backspace"===t.key&&0===this.value.length&&(t.preventDefault(),this.input.innerHTML="")}},{key:"highlight",value:function(){function t(t,e,n,r){for(var o=t.split(""),i="",a=0;a<o.length;a+=1)if(o[a]===e||o[a]===n){var c=o.indexOf(" ",a+1),l=o.join("").indexOf("<span",a+1),s=o.join("").indexOf("</span>",a+1),u=o.lastIndexOf("[",a),p=o.indexOf("]",u);if(-1!==u&&-1===p)i+=o[a];else if(-1!==u&&p>a)i+=o[a];else{-1!==l&&l<c?c=l-1:-1===c&&(c=o.length);var d=o.slice(a,c+1).join("");-1!==s&&s<c&&(i+="</span>",c=s+6),i+='<span class="'.concat(r,'">').concat(d,"</span>"),a=c}}else i+=o[a];return i}var e=this.value;try{e=t(e=function(t,e,n){for(var r=t.split(""),o="",i=0;i<r.length;i+=1)if(r[i]===e){var a=r.indexOf(n,i+1);-1===a&&(a=r.length),o+='<span class="third-level">'.concat(r.slice(i,a+1).join(""),"</span>"),i=a}else o+=r[i];return o}(e=function(t){for(var e=t.split(""),n="",r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];for(var a=0;a<e.length;a+=1){var c=e.lastIndexOf("[",a),l=e.indexOf("]",c);-1!==c&&-1===l||-1!==c&&l>a?n+=e[a]:o.includes(e[a])?n+='<span class="fourth-level">'.concat(e[a],"</span>"):n+=e[a]}return n}(e,"~","^","$","+","|","=","<",">","'",'"',","),"[","]"),".","#","first-level"),e=t(e,":","@","second-level")}catch(t){return}this.input.innerHTML=e}},{key:"keypress",value:function(t){var e=this;if("Enter"!==t.key){this.focus();var n=window.getSelection(),r=n.anchorOffset+1,o=n.anchorNode;this.input.onkeyup=function(){try{var t=function(){for(var t=0,n=0;n<e.input.childNodes.length;n+=1){var i=e.input.childNodes[n];if(1===i.nodeType&&(i=i.childNodes[0]),i===o){t+=r;break}t+=i.textContent.length}return t}();e.highlight(),i=e.input,a=t,c=document.createRange(),l=0,function t(e){for(var n=0;n<e.childNodes.length;n+=1){var r=e.childNodes[n];if(r.textContent.length+l>=a)return r.childNodes.length>0?void t(r):void c.setStart(r,a-l);l+=r.textContent.length}}(i),n.removeAllRanges(),n.addRange(c)}catch(t){e.input.onkeyup=null}var i,a,c,l;e.input.onkeyup=null}}else t.preventDefault()}},{key:"value",get:function(){return this.input.textContent},set:function(t){this.input.textContent=t}}])&&k(e.prototype,n),r&&k(e,r),t}())(h,"Type in a CSS selector");function E(){w.lockInput(!1),v.classList.remove("win");var t=localStorage.getItem("curLevel")||0,e=s[t],n=u.querySelector(".current");n&&n.classList.remove("current"),u.children[t].classList.add("current"),m.textContent=e.title,d.innerHTML=e.markup,d.querySelectorAll(e.selector).forEach((function(t){return t.classList.add("active")})),p.innerHTML=function(t){for(var e=t.replace(/[\t\n]/g,"").split("<").slice(1).map((function(t){return t.trim()})),n=0;n<e.length;n+=1){var r=e[n];"div>"===r&&"/div>"===e[n+1]?(e.splice(n,2),n-=2):e[n+1]&&r.startsWith(e[n+1].slice(1,-1))&&(e.splice(n,2,r.replace(">"," />")),n-=1)}return o=function(t){var e="";return t.forEach((function(t){var n="&lt;".concat(t.replace(">","&gt;"));n.endsWith("/&gt;")?e+="<div>".concat(n,"</div>"):n.startsWith("&lt;/")?e+="".concat(n,"</div>"):e+="<div>".concat(n)})),'&lt;div class="shelf"&gt;'.concat(e,"&lt;/div&gt;")}(e),i=o.split(" "),i.forEach((function(t,e){if("<"!==t[0]&&"/"!==t[0]&&!t.startsWith("&lt;")){var n=t,r=t.indexOf('"'),o=t.indexOf('"',r+1)+1;if(-1!==r&&-1!==o){var a='<span class="value">'.concat(t.slice(r,o),"</span>");n="".concat(n.slice(0,r)).concat(a)}i[e]='<span class="attribute">'.concat(n,"</span>").concat(t.slice(o))}})),i.join(" ");var o,i}(e.markup)}function x(){var t=JSON.parse(localStorage.getItem("progress")||"{}");u.querySelectorAll(".hinted, .completed").forEach((function(t){return t.classList.remove("hinted","completed")})),Object.keys(t).forEach((function(e){u.children[e].classList.add(t[e])}))}function O(t){v.classList.add("finish"),v.onanimationend=function(){v.classList.remove("finish");var e=+localStorage.getItem("curLevel"),n=JSON.parse(localStorage.getItem("progress")||"{}");"completed"!==n[e]&&(n[e]=t?"hinted":"completed",localStorage.setItem("progress",JSON.stringify(n))),x(),e===s.length-1?(w.lockInput(!0),v.classList.add("win")):(localStorage.setItem("curLevel",e+1),E())}}function A(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N(t){if(".active"!==t){var e,n=A(d.querySelectorAll(".active"));try{e=A(d.querySelectorAll(t))}catch(t){return void f.classList.add("wrong")}n.every((function(t,n){return e[n]===t}))?O(!1):f.classList.add("wrong")}else f.classList.add("wrong")}f.addEventListener("animationend",(function(){return f.classList.remove("wrong")})),u.addEventListener("click",(function(t){var e=t.target.closest("span");if(e){var n=e.textContent-1;localStorage.setItem("curLevel",n),E()}})),g.addEventListener("click",(function(){N(w.value)})),w.on("keyup",(function(t){"Enter"===t.key&&(t.preventDefault(),N(w.value))})),y.addEventListener("click",(function(){var t=+localStorage.getItem("curLevel"),e=s[t];setTimeout((function(){w.print(e.selector,(function(){return O(!0)}))}),300)})),b.addEventListener("click",(function(){localStorage.setItem("progress","{}"),localStorage.setItem("curLevel",0),x(),E()})),p.addEventListener("mouseover",(function(t){return c(t.target,t.currentTarget)})),p.addEventListener("mouseout",l),d.addEventListener("mouseover",(function(t){return c(t.target,t.currentTarget)})),d.addEventListener("mouseout",l),L=document.createDocumentFragment(),s.forEach((function(t,e){var n=document.createElement("span");n.innerHTML='<svg>\n  <use xlink:href="#check-icon" href="#check-icon"></use>\n  </svg>'.concat(e+1),L.appendChild(n)})),u.appendChild(L),E(),x()}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0},e=[[1202,202],[9811,202]],r=function(){};function o(){for(var r,o=0;o<e.length;o++){for(var i=e[o],a=!0,c=1;c<i.length;c++){var l=i[c];0!==t[l]&&(a=!1)}a&&(e.splice(o--,1),r=n(n.s=i[0]))}return 0===e.length&&(n.x(),n.x=function(){}),r}n.x=function(){n.x=function(){},a=a.slice();for(var t=0;t<a.length;t++)i(a[t]);return(r=o)()};var i=function(o){for(var i,a,l=o[0],s=o[1],u=o[2],p=o[3],d=0,f=[];d<l.length;d++)a=l[d],n.o(t,a)&&t[a]&&f.push(t[a][0]),t[a]=0;for(i in s)n.o(s,i)&&(n.m[i]=s[i]);for(u&&u(n),c(o);f.length;)f.shift()();return p&&e.push.apply(e,p),r()},a=self.webpackChunk=self.webpackChunk||[],c=a.push.bind(a);a.push=i}(),n.x()}();