!function(){"use strict";function e(e,t){const o=document.querySelector(e);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearTimeout(t)}function t(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>e(".modal",o)),5e3);console.log(o),function(){const e=document.querySelector(".calculating__result span");let t,o,n,s,r;function c(e,t){const o=document.querySelectorAll(e);o.forEach((e=>{e.getAttribute("id")===localStorage.getItem("sex")&&(o.forEach((e=>{e.classList.remove(t)})),e.classList.add(t)),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&(o.forEach((e=>{e.classList.remove(t)})),e.classList.add(t))}))}function a(){e.textContent=t&&o&&n&&s&&r?"female"===t?Math.round((447.6+9.2*n+3.1*o-4.3*s)*r):Math.round((88.36+13.4*n+4.8*o-5.7*s)*r):"0"}function l(e,o){const n=document.querySelectorAll(`${e} div`);n.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(r=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),n.forEach((e=>{e.classList.remove(o)})),e.target.classList.add(o),a()}))}))}function i(e){const t=document.querySelector(e);t.addEventListener("input",(e=>{switch(t.value.match(/\D/g)?t.style.border="2px solid red":t.style.border="none",e.target.getAttribute("id")){case"height":o=+t.value;break;case"weight":n=+t.value;break;case"age":s=+t.value}a()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",1.375)),a(),l("#gender","calculating__choose-item_active"),l(".calculating__choose_big","calculating__choose-item_active"),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),i("#height"),i("#weight"),i("#age")}(),function(){class e{constructor(e,t,o,n,s,r){this.src=e,this.alt=t,this.title=o,this.descr=n,this.price=s,this.parentElement=document.querySelector(r);for(var c=arguments.length,a=new Array(c>6?c-6:0),l=6;l<c;l++)a[l-6]=arguments[l];this.classes=a,this.transfer=2.6}changeToBYN(){return this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=` \n          <img src=${this.src} alt=${this.alt} />\n          <h3 class="menu__item-subtitle">${this.title}</h3>\n          <div class="menu__item-descr">\n            ${this.descr}\n          </div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n            <div class="menu__item-cost">Цена:</div>\n            <div class="menu__item-total"><span>${this.changeToBYN().toFixed(2)}</span> руб/день</div>\n          </div>\n      `,this.parentElement.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:o,altimg:n,title:s,descr:r,price:c}=t;new e(o,n,s,r,c,".menu .container").render()}))}))}(),function(o,n){function s(o){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),e(".modal",n);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n    <div class = "modal__content">\n    <div data-close class="modal__close">×</div>\n    <div class="modal__title">\n          ${o}\n        </div>\n    </div>\n  `,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),s.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(o).forEach((e=>{!function(e){e.addEventListener("submit",(t=>{t.preventDefault();let o=document.createElement("img");o.src="img/spiner/spinner.svg",o.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",o);const n=new FormData(e);(async(e,t)=>{const o=await fetch("http://localhost:3000/requests",{method:"POST",body:t,headers:{"Content-type":"application/json"}});return await o.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((e=>{console.log(e),s("Спасибо, мы скоро с вами свяжемся")})).catch((()=>{s("Что-то пошло не так...")})).finally((()=>{o.remove(),e.reset()}))}))}(e)}))}("form",o),function(o,n,s){const r=document.querySelectorAll(o),c=document.querySelector(n);r.forEach((t=>{t.addEventListener("click",(()=>e(n,s)))})),c.addEventListener("click",(e=>{e.target!==c&&""!=e.target.getAttribute("data-close")||t(n)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&c.classList.contains("show")&&t(n)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(n,s),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",o),function(e,t,o,n){const s=document.querySelectorAll(e),r=document.querySelectorAll(t),c=document.querySelector(o);function a(){r.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(n)}))}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[e].classList.add("show","fade"),r[e].classList.remove("hide"),s[e].classList.add(n)}a(),l(),c.addEventListener("click",(t=>{const o=t.target;console.log(o),o&&o.className==e.slice(1)&&s.forEach(((e,t)=>{o==e&&(a(),l(t))}))}))}(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(e){function t(e){return e<10?`0${e}`:e}!function(e,o){const n=document.querySelector(e),s=n.querySelector("#days"),r=n.querySelector("#hours"),c=n.querySelector("#minutes"),a=n.querySelector("#seconds");i();let l=setInterval(i,1e3);function i(){let e=function(e){let t=e-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}(o);s.innerHTML=t(e.days),r.innerHTML=t(e.hours),c.innerHTML=t(e.minutes),a.innerHTML=t(e.seconds),e.total<=0&&clearInterval(l)}}(e,Date.parse(new Date)+864e6)}(".timer"),function(e){let{sliderSelector:t,slidesSelector:o,prevArrow:n,nextArrow:s,currentId:r,totalId:c,wrapper:a,field:l}=e;const i=document.querySelectorAll(o),d=document.querySelector(t),u=document.querySelector(n),m=document.querySelector(s),h=document.querySelector(r),f=document.querySelector(c),g=document.querySelector(a),v=document.querySelector(l),y=window.getComputedStyle(g).width;let _=0,p=1;v.style.width=100*i.length+"%",i.forEach((e=>{e.style.width=y})),v.style.display="flex",v.style.transition="0.5s all",g.style.overflow="hidden",d.style.position="relative";const S=document.createElement("ol");S.classList.add("carousel-indicators"),d.append(S);for(let e=0;e<i.length;e++){const t=document.createElement("li");t.setAttribute("indicator-slide-to",e+1),t.classList.add("dot"),S.append(t),0==e&&(t.style.opacity="1")}const L=document.querySelectorAll(".dot");function w(e){return+e.replace(/\D/g,"")}function E(e){L.forEach((e=>{e.style.opacity="0.5"})),L[e-1].style.opacity="1"}function q(e){e>i.length&&(p=1),e<1&&(p=i.length),h.textContent=p<10?`0${p}`:p}function b(e){q(p+=e)}i.length<10?f.textContent=`0${i.length}`:f.textContent=i.length,q(p),m.addEventListener("click",(()=>{_==w(y)*(i.length-1)?_=0:_+=w(y),v.style.transform=`translateX(-${_}px)`,b(1),E(p)})),u.addEventListener("click",(()=>{0==_?_=w(y)*(i.length-1):_-=w(y),v.style.transform=`translateX(-${_}px)`,b(-1),E(p)})),L.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("indicator-slide-to");p=t,E(p),_=w(y)*(t-1),v.style.transform=`translateX(-${_}px)`,q(p)}))}))}({sliderSelector:".offer__slider",slidesSelector:".offer__slide",prevArrow:".offer__slider-prev",nextArrow:".offer__slider-next",currentId:"#current",totalId:"#total",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map