(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();window.addEventListener("load",()=>{const t=document.querySelector(".preloader"),a=document.getElementById("content"),n=document.querySelector(".progress-ring__circle"),s=n.r.baseVal.value,e=2*Math.PI*s;n.style.strokeDasharray=`${e} ${e}`,n.style.strokeDashoffset=e;let o=0;const c=setInterval(()=>{o+=1;const l=e-o/100*e;n.style.strokeDashoffset=l,o>=100&&(clearInterval(c),t.style.transition="opacity 1s ease",t.style.opacity="0",setTimeout(()=>{t.style.display="none",a.style.display="block",document.body.style.overflow="auto"},1e3))},15)});const N="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",q=document.querySelector(".events-list"),y=document.getElementById("pagination"),M=document.querySelector("[data-modal]"),W=document.querySelector(".modal__wrap"),Y=document.querySelector("[data-close]"),O=document.body;let $=0,g=0;async function E(t=0){var o,c;const a=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${N}&countryCode=US&size=20&page=${t}`,s=await(await fetch(a)).json(),e=((o=s._embedded)==null?void 0:o.events)||[];g=Math.min(((c=s.page)==null?void 0:c.totalPages)||0,29),$=t,D(e),U()}function D(t){const a=t.map(n=>{var l,d,i,r,m,p,u;const s=((d=(l=n.images)==null?void 0:l[0])==null?void 0:d.url)||"",e=n.name||"",o=((r=(i=n.dates)==null?void 0:i.start)==null?void 0:r.localDate)||"",c=((u=(p=(m=n._embedded)==null?void 0:m.venues)==null?void 0:p[0])==null?void 0:u.name)||"";return`

      <li class="event-card" data-id="${n.id}">

        <img class="event-img" src="${s}" alt="${e}">
        <h3 class="event-title">${e}</h3>
        <p class="event-date">${o}</p>
        <img src="./img/polygon.png" alt="" class="header__icons">
<p class="event-place">
<svg
  width="7"
  height="10"
  viewBox="0 0 7 10"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0ZM4.55602 4.49371C4.26484 4.78284 3.88245 4.92743 3.5 4.92743C3.11761 4.92743 2.7351 4.78284 2.44404 4.49371C1.86173 3.91547 1.86173 2.97455 2.44404 2.39624C2.72601 2.11609 3.10108 1.96179 3.5 1.96179C3.89892 1.96179 4.27393 2.11615 4.55602 2.39624C5.13833 2.97455 5.13833 3.91547 4.55602 4.49371Z"
    fill="white"
  />
</svg>

${c}
</p>
      </li>
    `}).join("");q.innerHTML=a}function U(){y.innerHTML="";const t=5;let a=Math.max(0,$-2),n=Math.min(g,a+t);n-a<t&&(a=Math.max(0,n-t));for(let s=a;s<n;s++){const e=document.createElement("button");e.className="page-btn",e.textContent=s+1,s===$&&e.classList.add("active"),e.addEventListener("click",()=>E(s)),y.appendChild(e)}if(n<g){const s=document.createElement("span");s.textContent="...",s.className="dots",y.appendChild(s);const e=document.createElement("button");e.className="page-btn",e.textContent=g,e.addEventListener("click",()=>E(g-1)),y.appendChild(e)}}q.addEventListener("click",V);async function V(t){const a=t.target.closest(".event-card");if(!a)return;const n=a.dataset.id,e=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${n}.json?apikey=${N}`)).json();W.innerHTML=K(e),M.classList.remove("backdrop-hidden"),O.classList.add("no-scroll")}function K(t){var i,r,m,p,u,f,h,H,S,T,I,P,z;const a=((r=(i=t.images)==null?void 0:i[0])==null?void 0:r.url)||"",n=t.name||"",s=t.info||"No information",e=((p=(m=t.dates)==null?void 0:m.start)==null?void 0:p.localDate)||"",o=((f=(u=t.dates)==null?void 0:u.start)==null?void 0:f.localTime)||"",c=((T=(S=(H=(h=t._embedded)==null?void 0:h.venues)==null?void 0:H[0])==null?void 0:S.city)==null?void 0:T.name)||"",l=((z=(P=(I=t._embedded)==null?void 0:I.venues)==null?void 0:P[0])==null?void 0:z.name)||"",d=t.url||"#";return`
    <img class="modal__preview" src="${a}" />

    <div class="content">

      <img class="content__image" src="${a}" />

      <ul>

        <li><b>INFO:</b> ${s}</li>
        <li><b>WHEN:</b> ${e} ${o}</li>
        <li><b>WHERE:</b> ${c} — ${l}</li>
        <li><b>WHO:</b> ${n}</li>

        <li>
          <a class="modal__btn" href="${d}" target="_blank">
            BUY TICKETS
          </a>
        </li>

      </ul>

    </div>
  `}Y.addEventListener("click",k);M.addEventListener("click",t=>{t.target.closest(".modal")||k()});document.addEventListener("keydown",t=>{t.code==="Escape"&&k()});function k(){M.classList.add("backdrop-hidden"),O.classList.remove("no-scroll")}E();const j="Q8bHL81HES4CjxatVZAVSQWYyAffYhbQ",B=document.querySelector(".events-list"),b=document.getElementById("pagination"),C=document.querySelector("[data-modal]"),Q=document.querySelector(".modal__wrap"),R=document.querySelector("[data-close]"),A=document.body;let L=0,_=0;async function w(t=0){var o,c;const a=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${j}&countryCode=US&size=20&page=${t}`,s=await(await fetch(a)).json(),e=((o=s._embedded)==null?void 0:o.events)||[];_=Math.min(((c=s.page)==null?void 0:c.totalPages)||0,29),L=t,F(e),Z()}function F(t){const a=t.map(n=>{var s,e,o,c,l,d,i;return`
    <li class="event-card" data-id="${n.id}">
      <img class="event-img" src="${((e=(s=n.images)==null?void 0:s[0])==null?void 0:e.url)||""}" alt="${n.name}">
      <h3 class="event-title">${n.name}</h3>
      <p class="event-date">${((c=(o=n.dates)==null?void 0:o.start)==null?void 0:c.localDate)||""}</p>
      <p class="event-place">${((i=(d=(l=n._embedded)==null?void 0:l.venues)==null?void 0:d[0])==null?void 0:i.name)||""}</p>
    </li>
  `}).join("");B.innerHTML=a}function Z(){b.innerHTML="";const t=5;let a=Math.max(0,L-2),n=Math.min(_,a+t);n-a<t&&(a=Math.max(0,n-t));for(let s=a;s<n;s++){const e=document.createElement("button");e.className="page-btn",e.textContent=s+1,s===L&&e.classList.add("active"),e.addEventListener("click",()=>w(s)),b.appendChild(e)}if(n<_){const s=document.createElement("span");s.textContent="...",s.className="dots",b.appendChild(s);const e=document.createElement("button");e.className="page-btn",e.textContent=_,e.addEventListener("click",()=>w(_-1)),b.appendChild(e)}}B.addEventListener("click",async t=>{const a=t.target.closest(".event-card");if(!a)return;const n=a.dataset.id,e=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${n}.json?apikey=${j}`)).json();Q.innerHTML=G(e),C.classList.remove("backdrop-hidden"),A.classList.add("no-scroll")});R.addEventListener("click",x);C.addEventListener("click",t=>{t.target.closest(".modal")||x()});document.addEventListener("keydown",t=>{t.code==="Escape"&&x()});function x(){C.classList.add("backdrop-hidden"),A.classList.remove("no-scroll")}function G(t){var a,n,s,e,o,c,l,d,i,r,m,p,u,f,h;return`
    <img class="modal__preview" src="${((n=(a=t.images)==null?void 0:a[0])==null?void 0:n.url)||""}" />

    <div class="content">
      <img class="content__image" src="${((e=(s=t.images)==null?void 0:s[0])==null?void 0:e.url)||""}" />

      <ul class="content__list">

        <li>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${t.info||"No information"}</p>
        </li>

        <li>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${((c=(o=t.dates)==null?void 0:o.start)==null?void 0:c.localDate)||""}</p>
          <p class="modal__text">${((d=(l=t.dates)==null?void 0:l.start)==null?void 0:d.localTime)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${((p=(m=(r=(i=t._embedded)==null?void 0:i.venues)==null?void 0:r[0])==null?void 0:m.city)==null?void 0:p.name)||""}</p>
          <p class="modal__text">${((h=(f=(u=t._embedded)==null?void 0:u.venues)==null?void 0:f[0])==null?void 0:h.name)||""}</p>
        </li>

        <li>
          <h2 class="modal__title">WHO</h2>
          <p class="modal__text">${t.name||""}</p>
        </li>

        <li class="modal__pric">
          <h2 class="modal__title">PRICES</h2>

          <div class="price__wrap">
          <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">Standart 300-500 UAH</p>
            
          </div>

          <a class="modal__btn" href="${t.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

          <div class="price__wrap">
            <svg class="price__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 20"><path d="M3.22 0H0v19.33h3.22zm8.11 0H8.1v19.33h3.23zm4.88 0h-3.22v19.33h3.22zM29 0h-4.78v19.33H29zM6.44 0H4.88v19.33h1.56zm12.89 0h-1.56v19.33h1.56zm3.23 0h-1.57v19.33h1.57z" fill="#0E0E0E"/></svg>
            <p class="modal__text">VIP 1000-1500 UAH</p>
          </div>

          <a class="modal__btn" href="${t.url||"#"}" target="_blank">
            BUY TICKETS
          </a>

        </li>

      </ul>
    </div>

    <a class="btn-info" href="${t.url||"#"}" target="_blank">
      MORE FROM THIS AUTHOR
    </a>
  `}w();const J=document.querySelector(".footer-open-modal"),v=document.querySelector("#modal"),X=v.querySelector(".close");J.addEventListener("click",t=>{t.preventDefault(),v.classList.add("is-open"),document.body.style.overflow="hidden"});X.addEventListener("click",()=>{v.classList.remove("is-open"),document.body.style.overflow="visible"});v.addEventListener("click",t=>{t.target===v&&(v.classList.remove("is-open"),document.body.style.overflow="visible")});
//# sourceMappingURL=commonHelpers.js.map
